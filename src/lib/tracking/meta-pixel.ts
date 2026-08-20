import { trackMetaEvent } from "./meta-capi.functions";

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

export const META_PIXEL_ID = "1581672686695866";

/**
 * Gera um ID único para deduplicação entre Browser e CAPI.
 */
export function generateEventId() {
  return `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Obtém cookies específicos da Meta para rastreamento.
 */
function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return undefined;
}

/**
 * Envia evento PageView para CAPI (Browser já disparado no head).
 */
export async function trackCapiPageView(eventId: string) {
  const eventTime = Math.floor(Date.now() / 1000);
  const url = window.location.href;

  await trackMetaEvent({
    data: [
      {
        event_name: "PageView",
        event_time: eventTime,
        event_id: eventId,
        event_source_url: url,
        action_source: "website",
        user_data: {
          fbp: getCookie("_fbp"),
          fbc: getCookie("_fbc"),
          client_user_agent: navigator.userAgent,
        },
      },
    ],
  });
}

/**
 * Envia evento ViewContent.
 */
export async function trackViewContent() {
  const eventId = generateEventId();
  const eventTime = Math.floor(Date.now() / 1000);
  const url = window.location.href;

  const customData = {
    content_name: "Importação de Cosméticos e Perucas",
    content_ids: ["curso_cosmeticos_moz"],
    content_type: "product",
    value: 247,
    currency: "MZN",
  };

  // Browser
  if (window.fbq) {
    window.fbq("track", "ViewContent", customData, { eventID: eventId });
  }

  // Server (CAPI)
  await trackMetaEvent({
    data: [
      {
        event_name: "ViewContent",
        event_time: eventTime,
        event_id: eventId,
        event_source_url: url,
        action_source: "website",
        user_data: {
          fbp: getCookie("_fbp"),
          fbc: getCookie("_fbc"),
          client_user_agent: navigator.userAgent,
        },
        custom_data: customData,
      },
    ],
  });
}

/**
 * Envia evento InitiateCheckout.
 */
export async function trackInitiateCheckout() {
  const eventId = generateEventId();
  const eventTime = Math.floor(Date.now() / 1000);
  const url = window.location.href;

  const customData = {
    content_name: "Importação de Cosméticos e Perucas",
    content_ids: ["curso_cosmeticos_moz"],
    content_type: "product",
    value: 247,
    currency: "MZN",
  };

  // Browser
  if (window.fbq) {
    window.fbq("track", "InitiateCheckout", customData, { eventID: eventId });
  }

  // Server (CAPI)
  return trackMetaEvent({
    data: [
      {
        event_name: "InitiateCheckout",
        event_time: eventTime,
        event_id: eventId,
        event_source_url: url,
        action_source: "website",
        user_data: {
          fbp: getCookie("_fbp"),
          fbc: getCookie("_fbc"),
          client_user_agent: navigator.userAgent,
        },
        custom_data: customData,
      },
    ],
  });
}
