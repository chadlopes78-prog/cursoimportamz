import { Check } from "lucide-react";
import { Cta, Section } from "./shared";

const LESSONS = [
  "Como encontrar fornecedores confiáveis de cosméticos, perfumes e perucas originais",
  "Como falar e negociar com fornecedores chineses",
  "Como pagar com cartão virtual ou Alipay",
  "Como evitar golpes e fornecedores falsos",
  "Como escolher a melhor logística até Moçambique",
  "Como receber em Maputo, Beira ou Nacala",
  "Lista de fornecedores testados e aprovados",
  "Como escolher perucas de qualidade: densidade, lace e cabelo humano",
  "Estratégias para começar com pouco capital",
  "O passo a passo da minha jornada de importação",
] as const;

export function Learn() {
  return (
    <>
      <Section
        title="O que vais aprender"
        subtitle="Um passo a passo completo, sem rodeios, do zero até receberes a tua primeira encomenda."
      >
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {LESSONS.map((lesson) => (
            <li
              key={lesson}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-card-foreground"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-primary-glow" aria-hidden="true" />
              <span className="text-sm sm:text-base">{lesson}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Cta>Garantir Minha Vaga</Cta>
        </div>
      </Section>
    </>
  );
}
