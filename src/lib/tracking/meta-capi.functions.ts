import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const FB_API_VERSION = "v18.0";

const UserDataSchema = z.object({
  fbc: z.string().optional(),
  fbp: z.string().optional(),
  client_ip_address: z.string().optional(),
  client_user_agent: z.string().optional(),
});

const EventSchema = z.object({
  event_name: z.string(),
  event_time: z.number(),
  event_id: z.string(),
  event_source_url: z.string(),
  action_source: z.literal("website"),
  user_data: UserDataSchema,
  custom_data: z.record(z.any()).optional(),
});

/**
 * Envia eventos para a Meta Conversions API (CAPI).
 * O token permanece seguro no servidor.
 */
export const trackMetaEvent = createServerFn({ method: "POST" })
  .inputValidator((data) => z.array(EventSchema).parse(data))
  .handler(async ({ data: events, request }) => {
    const pixelId = process.env["META_PIXEL_ID"] || "1581672686695866";
    const accessToken = process.env["META_ACCESS_TOKEN"];

    if (!accessToken) {
      console.warn("META_ACCESS_TOKEN not configured. Skipping CAPI event.");
      return { success: false, message: "Missing token" };
    }

    const testEventCode = process.env["META_TEST_EVENT_CODE"];

    try {
      const payload = {
        data: events,
        ...(testEventCode ? { test_event_code: testEventCode } : {}),
      };

      const response = await fetch(
        `https://graph.facebook.com/${FB_API_VERSION}/${pixelId}/events?access_token=${accessToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("Meta CAPI Error:", result);
        return { success: false, error: result };
      }

      return { success: true, result };
    } catch (error) {
      console.error("Meta CAPI Fetch Error:", error);
      return { success: false, error };
    }
  });
