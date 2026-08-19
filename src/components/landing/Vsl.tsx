import React, { useEffect } from "react";
import { ShieldCheck, Volume2 } from "lucide-react";
import { Cta, Section } from "./shared";

/** IDs do player Vturb (ConverteAI). */
const VTURB_PLAYER_ID = "vid-6a84db62573353782ac06d4d";
const VTURB_SCRIPT_SRC =
  "https://scripts.converteai.net/46ab7242-064b-4c02-9cfa-7e6987411049/players/6a84db62573353782ac06d4d/v4/player.js";

const POINTS = [
  "Como escolher fornecedores confiáveis na China",
  "Como pagar em segurança a partir de Moçambique",
  "Como receber a tua encomenda sem dores de cabeça",
] as const;

const VturbPlayer = "vturb-smartplayer" as unknown as React.ComponentType<
  React.HTMLAttributes<HTMLElement> & { id?: string }
>;

export function Vsl() {
  useEffect(() => {
    // Evita injetar o script mais do que uma vez (HMR / re-render).
    if (document.querySelector(`script[src="${VTURB_SCRIPT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = VTURB_SCRIPT_SRC;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <Section
      id="vsl"
      eyebrow="Assiste Antes de Decidir"
      title="Vê como funciona o método em poucos minutos"
      subtitle="Neste vídeo explico exatamente o que vais aprender e como as minhas alunas já estão a importar e a lucrar."
      className="bg-secondary/30"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto w-full max-w-[400px]">
          {/* Player Vturb no seu tamanho real (vertical 9:16). */}
          <VturbPlayer
            id={VTURB_PLAYER_ID}
            style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
          >
            <div
              className="vturb-player-placeholder"
              style={{
                position: "relative",
                width: "100%",
                padding: "177.77777777777777% 0 0",
                zIndex: 0,
                backgroundColor: "black",
              }}
            />
          </VturbPlayer>
        </div>

        <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Volume2 className="size-4 text-primary-glow" aria-hidden="true" />
          Liga o som para ouvires a explicação completa
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {POINTS.map((point) => (
            <li
              key={point}
              className="rounded-2xl border border-border bg-card p-4 text-sm text-card-foreground"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Cta>Quero Acesso Agora</Cta>
          <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-primary-glow" aria-hidden="true" />
            Compra segura · Garantia de reembolso
          </p>
        </div>
      </div>
    </Section>
  );
}
