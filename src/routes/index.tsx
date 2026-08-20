REDUZ informacoes na pagina tornando assim ela uma pagina de alta conversao
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Vsl } from "@/components/landing/Vsl";
import { useEffect, useRef, Suspense, lazy } from "react";
import { trackViewContent, trackCapiPageView } from "@/lib/tracking/meta-pixel";

// Componentes abaixo da dobra carregados sob demanda
const Learn = lazy(() => import("@/components/landing/Learn").then(m => ({ default: m.Learn })));
const Iphones = lazy(() => import("@/components/landing/Iphones").then(m => ({ default: m.Iphones })));
const BothIncluded = lazy(() => import("@/components/landing/Iphones").then(m => ({ default: m.BothIncluded })));
const Gallery = lazy(() => import("@/components/landing/Gallery").then(m => ({ default: m.Gallery })));
const About = lazy(() => import("@/components/landing/About").then(m => ({ default: m.About })));
const Testimonials = lazy(() => import("@/components/landing/Testimonials").then(m => ({ default: m.Testimonials })));
const Offer = lazy(() => import("@/components/landing/Offer").then(m => ({ default: m.Offer })));

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
      {/* Conteúdo Crítico (Acima da dobra) */}
      <Hero />
      <Vsl />
      
      {/* Conteúdo Secundário (Lazy) */}
      <Suspense fallback={<div className="h-96" />}>
        <Learn />
        <Iphones />
        <BothIncluded />
        <Gallery />
        <About />
        <Testimonials />
        <Offer />
      </Suspense>

      <footer className="border-t border-border px-4 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Método de Importação de Cosméticos e Perucas · Moçambique
      </footer>
    </main>
  );
}
