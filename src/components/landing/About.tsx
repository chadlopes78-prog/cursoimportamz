import gabrielAsset from "@/assets/gabriel.jpg.asset.json";
import { Cta, Section } from "./shared";

const PARAGRAPHS = [
  "Eu sou o Gabriel Lopes.",
  "A minha história com o comércio começou de uma forma muito simples: comecei do zero, vendendo bijuterias.",
  "No início, muita gente ria e não acreditava que aquilo pudesse dar em alguma coisa. Mas eu nunca liguei muito para isso. Eu tinha um objetivo.",
  "Queria aprender a fazer dinheiro por conta própria, construir alguma coisa minha e deixar de depender apenas das oportunidades que apareciam.",
  "Foi nessa procura que comecei a descobrir o mundo das compras e da importação. Comecei pequeno, errei muitas vezes, perdi dinheiro em algumas compras e aprendi, na prática, coisas que ninguém me tinha ensinado.",
  "Não sabia onde encontrar bons fornecedores. Não sabia como avaliar quem era confiável. Não sabia como fazer determinados pagamentos. Não entendia bem como funcionava a logística para trazer os produtos até Moçambique. E muitas vezes tive de aprender tudo sozinho.",
  "Mas continuei. Com o tempo, fui adquirindo experiência, conhecendo fornecedores, entendendo melhor os pagamentos e a logística — até conseguir importar as minhas próprias encomendas da China com segurança.",
  "Depois de ajudar centenas de pessoas a importar iPhones, percebi que havia um pedido que se repetia: mulheres que queriam começar com um produto mais leve, mais barato de trazer e que vende todos os dias — cosméticos, perfumes e perucas.",
  "Foi por isso que decidi criar este método específico para quem quer entrar no mercado de cosméticos. É o nicho ideal para começar: dá para investir pouco no início, a encomenda chega mais rápido, e a procura por perfumes, cremes, maquilhagem e perucas em Moçambique não para de crescer.",
  "Hoje importo os meus próprios perfumes, cosméticos e perucas diretamente da China e recebo tudo aqui em Moçambique — e reuni neste curso exatamente o processo que uso, organizado passo a passo, sem muitas voltas.",
  "Não quero apresentar-me como um guru ou alguém que sabe tudo. Sou simplesmente alguém que começou pequeno, errou, aprendeu e continuou até dominar o processo. E é exatamente por isso que acredito que posso ajudar-te.",
  "Se estás em Moçambique e queres aprender a importar cosméticos, perfumes e perucas diretamente da China, este método foi criado para te mostrar, de forma simples e prática, como funciona todo o processo.",
] as const;

export function About() {
  return (
    <Section>
      <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-[minmax(0,320px)_1fr]">
        <img
          src={gabrielAsset.url}
          alt="Gabriel Lopes, criador do método de importação de cosméticos"
          width={1024}
          height={1280}
          loading="lazy"
          className="w-full rounded-2xl border border-border object-cover shadow-lg md:sticky md:top-24"
        />
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Quem sou eu?
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {PARAGRAPHS.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <blockquote className="mt-6 rounded-2xl border-l-4 border-primary bg-secondary/60 p-5 text-base font-semibold italic text-foreground">
            “Eu também comecei do zero. A diferença é que decidi não parar.”
          </blockquote>
          <div className="mt-8">
            <Cta>Quero Aprender o Método</Cta>
          </div>
        </div>
      </div>
    </Section>
  );
}
