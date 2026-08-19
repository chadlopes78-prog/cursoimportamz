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
  "Aprende a importar cosméticos, perfumes e perucas da China e receber em Moçambique: fornecedores testados, pagamentos, logística e grupo VIP. Por apenas 350 MT.";

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
