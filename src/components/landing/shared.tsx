import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { trackInitiateCheckout } from "@/lib/tracking/meta-pixel";

/** Link de checkout único da oferta (Ratixpay). */
export const CHECKOUT_URL = "https://checkout.escalepay.com/9615683";

export interface CtaProps extends ComponentProps<"a"> {
  children: ReactNode;
}

/** CTA principal — gradiente da marca, usado em todas as secções. */
export function Cta({ children, className, onClick, ...props }: CtaProps) {
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Disparar InitiateCheckout antes do redirecionamento
    // Não impedimos o default para evitar atraso perceptível, 
    // mas o trackInitiateCheckout roda em paralelo.
    trackInitiateCheckout();
    if (onClick) onClick(e);
  };

  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-8 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}

export interface SectionProps extends ComponentProps<"section"> {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

/** Wrapper de secção com cabeçalho opcional. */
export function Section({ eyebrow, title, subtitle, className, children, ...props }: SectionProps) {

  return (
    <section className={cn("px-4 py-16 sm:py-20", className)} {...props}>
      <div className="mx-auto max-w-5xl">
        {(eyebrow || title || subtitle) && (
          <header className="mx-auto mb-10 max-w-2xl text-center">
            {eyebrow && (
              <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-glow">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
