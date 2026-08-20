import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import fotoAfzal from "@/assets/foto-afzal.jpg.asset.json";
import fotoBelga from "@/assets/foto-belga.jpg.asset.json";
import fotoCristina from "@/assets/foto-cristina.jpg.asset.json";
import provaAfzal from "@/assets/prova-afzal.jpg.asset.json";
import provaBelga from "@/assets/prova-belga.jpg.asset.json";
import provaCristina from "@/assets/prova-cristina.jpg.asset.json";
import { Section } from "./shared";

const TESTIMONIALS = [
  {
    name: "Afzal Abdul",
    photo: fotoAfzal.url,
    proof: provaAfzal.url,
    text: "Os fornecedores são reais e confiáveis e todas as fragrâncias são de qualidade e com boa fixação. Gramei, ele explica muito bem. Chegou tudo bem direitinho. Recomendo a 100% o Gabriel!👌🏽🇨🇳",
  },
  {
    name: "Belga Neves",
    photo: fotoBelga.url,
    proof: provaBelga.url,
    text: "Recebi a minha primeira encomenda em menos de 7 dias. O método é mesmo prático e funciona. Super recomendo o Gabriel!❤️😍",
  },
  {
    name: "Cristina Fabião Mouhamed",
    photo: fotoCristina.url,
    proof: provaCristina.url,
    text: "O acompanhamento no grupo VIP fez toda a diferença. Recebiiii +uma caixinha dos meus perfumes árabes. Muito obrigado best Gabriel pela AULA!👌🏽😊",
  },
] as const;

const FAQ = [
  {
    q: "Preciso ter experiência para começar?",
    a: "Não. O método foi criado do zero, para quem nunca importou nada na vida. Segues o passo a passo na ordem e fazes a tua primeira encomenda.",
  },
  {
    q: "Quanto dinheiro preciso para começar?",
    a: "Dá para começar com pouco capital. Cosméticos, perfumes e perucas são leves e baratos de trazer — mostro estratégias para iniciar com encomendas pequenas.",
  },
  {
    q: "Os fornecedores são reais?",
    a: "Sim. Partilho a lista de fornecedores que eu próprio testei e com quem já comprei várias vezes.",
  },
  {
    q: "Como faço o pagamento?",
    a: "O pagamento do curso é feito na Escalepay. Dentro do curso ensino a pagar fornecedores com cartão virtual (eMola/M-Pesa) ou Alipay.",
  },
  {
    q: "Quando recebo o acesso?",
    a: "O acesso é imediato. Assim que o pagamento é confirmado, recebes as aulas.",
  },
  {
    q: "Os produtos são de marcas conhecidas ou genéricas?",
    a: "Existem as duas opções. Explico como identificar cada tipo e escolher o que faz sentido para o teu público e para o teu bolso.",
  },
  {
    q: "Como sei se um perfume ou cosmético é de boa qualidade antes de comprar?",
    a: "Ensino a avaliar amostras, ler avaliações, pedir vídeos ao fornecedor e testar fixação antes de fazer encomendas maiores.",
  },
  {
    q: "Vou receber suporte?",
    a: "Sim. Tens o grupo VIP de importadoras e acompanhamento para esclarecer dúvidas durante toda a implementação.",
  },
] as const;

export function Testimonials() {
  return (
    <>
      <Section
        title="Depoimentos reais"
        subtitle="Histórias verdadeiras de quem já está a importar e a faturar."
        className="bg-secondary/40"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, text, photo, proof }) => (
            <article
              key={name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={proof}
                alt={`Comprovativo de ${name}`}
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover object-top"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-card-foreground">{text}</p>
                <footer className="mt-5 flex items-center gap-3">
                  <img
                    src={photo}
                    alt={name}
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                    className="size-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-semibold text-foreground">{name}</span>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Perguntas frequentes">
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {FAQ.map(({ q, a }) => (
            <AccordionItem
              key={q}
              value={q}
              className="mb-3 rounded-2xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-card-foreground hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
