import { useEffect, useState } from "react";
import { Check, Clock, Infinity as InfinityIcon, ShieldCheck, Zap } from "lucide-react";
import { Cta, Section } from "./shared";

const TOTAL_SECONDS = 22 * 3600 + 59 * 60 + 59;

const INCLUDES = [
  "Acesso imediato ao curso",
  "Passo a passo completo",
  "Fornecedores recomendados",
  "Logística explicada",
  "Atualizações futuras",
  "Grupo VIP de importadoras",
  "Acompanhamento para dúvidas",
  "Lista de fornecedores de cosméticos e perucas testados por mim",
] as const;

const GUARANTEES = [
  { icon: Zap, title: "Acesso imediato", text: "Recebes as aulas assim que pagas na Escalepay." },
  {
    icon: InfinityIcon,
    title: "No teu ritmo",
    text: "Podes avançar, recuar e pausar quando quiseres, sempre.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de reembolso",
    text: "Se não gostares, devolvemos o teu dinheiro.",
  },
] as const;

function useCountdown(): { h: string; m: string; s: string } {
  // Contagem decrescente apenas no cliente: evita mismatch de hidratação.
  const [left, setLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const id = window.setInterval(() => {
      setLeft((prev) => (prev <= 0 ? TOTAL_SECONDS : prev - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  return {
    h: pad(Math.floor(left / 3600)),
    m: pad(Math.floor((left % 3600) / 60)),
    s: pad(left % 60),
  };
}

export function Offer() {
  const { h, m, s } = useCountdown();

  return (
    <Section className="bg-secondary/40">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary-glow">
          🔥 Oferta Especial termina em
        </p>
        <div className="mt-4 flex items-end justify-center gap-2 sm:gap-4">
          {[
            { value: h, label: "Horas" },
            { value: m, label: "Min" },
            { value: s, label: "Seg" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="min-w-[76px] rounded-2xl border border-border bg-card px-4 py-3"
            >
              <span className="block text-3xl font-extrabold tabular-nums text-foreground sm:text-4xl">
                {value}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm font-semibold text-foreground">Apenas 7 vagas restantes</p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-center text-2xl font-extrabold text-card-foreground sm:text-3xl">
          Importação de Cosméticos e Perucas: Curso Completo para Lucrar em Moz
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {INCLUDES.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            De <span className="line-through">999 MT</span> · por apenas
          </p>
          <p className="mt-1 text-5xl font-extrabold text-foreground">247 MT</p>
          <Cta className="mt-6 w-full sm:w-auto">Quero Acesso Agora</Cta>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {GUARANTEES.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-2xl border border-border bg-card p-5 text-center">
            <Icon className="mx-auto size-6 text-primary-glow" aria-hidden="true" />
            <h3 className="mt-3 text-sm font-bold text-card-foreground">{title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Compra 100% segura · Garantia de reembolso caso não fiques satisfeito · Acesso vitalício às
        aulas.
      </p>

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between text-sm font-semibold text-card-foreground">
          <span className="flex items-center gap-2">
            <Clock className="size-4 text-primary-glow" aria-hidden="true" /> Vagas desta turma
          </span>
          <span>82%</span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-primary to-primary-glow" />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          82% das vagas preenchidas — garante já a tua antes de esgotar.
        </p>
      </div>
    </Section>
  );
}
