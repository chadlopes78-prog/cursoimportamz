import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Vsl } from "@/components/landing/Vsl";
import { Learn } from "@/components/landing/Learn";
import { BothIncluded, Iphones } from "@/components/landing/Iphones";
import { Gallery } from "@/components/landing/Gallery";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { Offer } from "@/components/landing/Offer";

const TITLE = "Importação de Cosméticos e Perucas: Curso em Moz";
const DESCRIPTION =
  "Aprende a importar cosméticos, perfumes e perucas da China e receber em Moçambique: fornecedores testados, pagamentos, logística e grupo VIP. Por apenas 247 MT.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [hasViewedContent, setHasViewedContent] = import("react").then((m) => m.useState(false));
  const { useEffect } = import("react").then((m) => m);

  // Note: Since I can't use top-level await in line_replace easily with types, 
  // I'll use standard imports for Index.
  return <IndexContent />;
}

import { useEffect } from "react";
import { trackPageView, trackViewContent } from "@/lib/tracking/meta-pixel";

function IndexContent() {
  useEffect(() => {
    trackPageView();
    
    // ViewContent triggered after a short delay or when certain sections are visible.
    // For now, we trigger it on mount as per requirement "visualizar/carregar correttamente a oferta".
    const timer = setTimeout(() => {
      trackViewContent();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Vsl />
      <Learn />
      <Iphones />
      <BothIncluded />
      <Gallery />

      <About />
      <Testimonials />
      <Offer />
      <footer className="border-t border-border px-4 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Método de Importação de Cosméticos e Perucas · Moçambique
      </footer>
    </main>
  );
}
