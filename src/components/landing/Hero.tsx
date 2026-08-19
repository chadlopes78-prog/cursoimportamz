import { ChevronDown, Flame, ShieldCheck, Truck, Users } from "lucide-react";

const MARQUEE_ITEMS = [
  "Oferta por tempo limitado",
  "65% OFF",
  "Apenas 7 vagas restantes",
  "Acesso imediato",
  "Garantia de reembolso",
] as const;

function Marquee() {
  return (
    <div className="sticky top-0 z-50 overflow-hidden bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
      <div className="flex w-max animate-marquee items-center gap-3 py-2.5 text-xs font-bold uppercase tracking-wider sm:text-sm">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-3">
            <Flame className="size-4 shrink-0" aria-hidden="true" />
            {item}
            <span className="opacity-50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const BADGES = [
  { icon: ShieldCheck, label: "Fornecedores testados" },
  { icon: Truck, label: "Entrega em Moçambique" },
  { icon: Users, label: "Grupo VIP incluído" },
] as const;

export function Hero() {
  return (
    <>
      <Marquee />
      <header
        className="px-4 py-16 text-center sm:py-24"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-border bg-secondary/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-glow">
            Método Prático 2026
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Importação de Cosméticos e Perucas: Curso Completo para Lucrar em Moz
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Um método prático e direto que utilizo para encontrar fornecedores confiáveis de
            cosméticos, perfumes e perucas na China, comprar a preços acessíveis e receber em
            Moçambique.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base font-semibold text-foreground sm:text-lg">
            Veja o vídeo abaixo e descubra tudo o que vais encontrar hoje dentro do Curso de
            Importação.
          </p>
          <a
            href="#vsl"
            aria-label="Ir para o vídeo de apresentação"
            className="mx-auto mt-6 flex size-11 animate-arrow-bounce items-center justify-center rounded-full border border-primary/40 bg-secondary/70 text-primary-glow"
          >
            <ChevronDown className="size-6" aria-hidden="true" />
          </a>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#vsl"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-8 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Ver o que vou aprender a importar
            </a>
          </div>
          <p className="mt-5 text-sm font-semibold text-primary-glow">
            🔥 Apenas 7 vagas restantes
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {BADGES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-primary-glow" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
