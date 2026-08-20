import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Vsl } from "@/components/landing/Vsl";
import { Learn } from "@/components/landing/Learn";
import { BothIncluded, Iphones } from "@/components/landing/Iphones";
import { Gallery } from "@/components/landing/Gallery";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { Offer } from "@/components/landing/Offer";
import { useEffect, useRef } from "react";
import { trackViewContent, trackCapiPageView } from "@/lib/tracking/meta-pixel";

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
  const pageViewTracked = useRef(false);
  const viewContentTracked = useRef(false);

  useEffect(() => {
    if (pageViewTracked.current) return;
    
    // Sincronizar o PageView do Browser com CAPI usando o mesmo event_id
    const pageViewId = (window as any)._fb_pageview_id;
    if (pageViewId) {
      trackCapiPageView(pageViewId);
      pageViewTracked.current = true;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !viewContentTracked.current) {
            trackViewContent();
            viewContentTracked.current = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const learnSection = document.getElementById("learn-section");
    if (learnSection) {
      observer.observe(learnSection);
    }

    return () => observer.disconnect();
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
