import { Check } from "lucide-react";
import encomenda1 from "@/assets/encomenda-1.jpg.asset.json";
import encomenda2 from "@/assets/encomenda-2.jpg.asset.json";
import encomenda3 from "@/assets/encomenda-3.jpg.asset.json";
import encomenda4 from "@/assets/encomenda-4.jpg.asset.json";
import peruca1 from "@/assets/peruca-1.jpg.asset.json";
import peruca2 from "@/assets/peruca-2.jpg.asset.json";
import peruca3 from "@/assets/peruca-3.jpg.asset.json";
import peruca4 from "@/assets/peruca-4b.jpg.asset.json";
import peruca5 from "@/assets/peruca-5b.jpg.asset.json";
import peruca6 from "@/assets/peruca-6.jpg.asset.json";
import { Cta, Section } from "./shared";

const PHOTOS = [
  { src: encomenda1.url, alt: "Encomenda de cosméticos recebida da China" },
  { src: encomenda2.url, alt: "Encomenda de perfumes recebida da China" },
  { src: encomenda3.url, alt: "Encomenda de cosméticos importada para Moçambique" },
  { src: encomenda4.url, alt: "Caixa de cosméticos recebida em Moçambique" },
] as const;

const WIGS = [
  { src: peruca1.url, alt: "Peruca de cabelo humano importada da China" },
  { src: peruca2.url, alt: "Peruca lace frontal importada da China" },
  { src: peruca3.url, alt: "Perucas importadas para revenda em Moçambique" },
  { src: peruca4.url, alt: "Peruca cacheada de cabelo humano importada da China" },
  { src: peruca5.url, alt: "Peruca cacheada lace na cor bordô importada da China" },
  { src: peruca6.url, alt: "Lote de perucas embaladas prontas para revenda" },
] as const;

const AUDIENCE = [
  "Quem quer começar um negócio do zero",
  "Quem está cansada de depender só do salário",
  "Revendedoras de cosméticos, perfumes e perucas",
  "Quem quer comprar mais barato para uso próprio",
  "Quem quer criar uma renda extra",
  "Quem vai importar pela primeira vez",
  "Quem sabe que precisa agir para mudar de vida",
  "Quem não quer ficar mais um ano à espera",
] as const;

export function Gallery() {
  return (
    <>
      <Section
        eyebrow="Prova Real"
        title="Encomendas de cosméticos que recebi diretamente da China"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PHOTOS.map(({ src, alt }) => (
            <figure key={alt} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={src}
                alt={alt}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Cta>Começar Agora</Cta>
        </div>
      </Section>

      <Section
        eyebrow="Novo Nicho"
        title="Perucas: o produto que mais vende agora em Moçambique"
        subtitle="Também te mostro como importar perucas de qualidade — cabelo humano, lace frontal e closure — direto dos fornecedores da China."
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WIGS.map(({ src, alt }) => (
            <figure
              key={alt}
              className="overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-lg"
            >
              <img
                src={src}
                alt={alt}
                width={950}
                height={1180}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className="px-4 py-3 text-xs text-muted-foreground">{alt}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Cta>Quero Importar Perucas</Cta>
        </div>
      </Section>

      <Section title="Para quem é este método?" className="bg-secondary/40">
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {AUDIENCE.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-primary-glow" aria-hidden="true" />
              <span className="text-sm sm:text-base text-card-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
