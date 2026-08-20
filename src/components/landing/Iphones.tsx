import { ArrowRight, Check, Smartphone } from "lucide-react";
import iphones1 from "@/assets/iphones-1b.jpg.asset.json";
import iphones2 from "@/assets/iphones-2b.jpg.asset.json";
import { Cta } from "./shared";

const LESSONS = [
  "Onde encontrar fornecedores de iPhones",
  "Como analisar vendedores antes de comprar",
  "Como identificar bons preços",
  "Como fazer o pedido",
  "Como realizar o pagamento",
  "Como enviar o produto da China para Moçambique",
  "Como calcular transporte e outros custos",
  "Como receber a encomenda em Moçambique",
] as const;

/** Secção 02 — categoria de importação de iPhones. */
export function Iphones() {
  return (
    <section id="iphones" className="bg-secondary/40 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-glow">
            E não é só isso…
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Vais aprender também como importar iPhones 📱
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Aprenda como encontrar e importar iPhones a partir de aproximadamente 7.000 MT para
            depois revender em Moçambique por valores que podem chegar aos 15.000 MT ou mais,
            dependendo do modelo e do mercado.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={iphones1.url}
              alt="Vários iPhones premium prontos para importação"
              width={480}
              height={640}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={iphones2.url}
              alt="iPhone premium em mão com caixas seladas ao fundo"
              width={1086}
              height={652}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>

        {/* Comparação de preços — exemplo ilustrativo, não garantia de lucro. */}
        <div className="mt-10 grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <article className="rounded-3xl border border-border bg-card p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              🇨🇳 China · Compra/Importação
            </p>
            <p className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
              A partir de ~7.000 MT
            </p>
          </article>

          <div className="flex items-center justify-center">
            <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
              <ArrowRight className="size-5 rotate-90 sm:rotate-0" aria-hidden="true" />
            </span>
            <span className="sr-only">China para Moçambique</span>
          </div>

          <article className="rounded-3xl border border-primary/40 bg-card p-6 text-center shadow-[var(--shadow-glow)]">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              🇲🇿 Moçambique · Possível revenda
            </p>
            <p className="mt-3 text-3xl font-extrabold text-primary-glow sm:text-4xl">
              Até ~15.000 MT
            </p>
          </article>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Valores meramente ilustrativos da diferença entre preço de importação e possível preço de
          revenda. Não representam lucro garantido.
        </p>

        <h3 className="mt-12 text-center text-xl font-bold text-foreground sm:text-2xl">
          Dentro do curso vais descobrir:
        </h3>
        <ul className="mt-6 grid grid-cols-1 gap-2.5 md:grid-cols-2">
          {LESSONS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-2xl border border-border bg-card p-3.5"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" aria-hidden="true" />
              <span className="text-sm text-card-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Cta className="w-full sm:w-auto">
            <Smartphone className="size-5" aria-hidden="true" />
            Quero Aprender a Importar
          </Cta>
        </div>
      </div>
    </section>
  );
}

/** Bloco resumo: o aluno recebe as três formações. */
export function BothIncluded() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Um único curso, três oportunidades para começar a importar.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-card-foreground">💇🏾‍♀️ Importação de Perucas</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Perucas, cabelos, fornecedores, compras e envio.
            </p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-card-foreground">📦 Importação em Geral</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Aprende a encontrar qualquer fornecedor e importar com segurança.
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-card-foreground">✨ Cosméticos e Perfumes</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Produtos de beleza, fornecedores confiáveis e logística segura.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
