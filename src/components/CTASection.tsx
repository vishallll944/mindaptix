import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CTASection({
  eyebrow = "4Core Digital",
  title = "Ready to build your AI-powered search strategy?",
  subtitle = "Your customers are already searching. The question is: will they find your business, or your competitors?",
  primaryLabel = "Get Your Free AI SEO Audit",
  primaryHref = "/contact",
  secondaryLabel = "View Case Studies",
  secondaryHref = "/case-studies",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`section final-cta${className ? ` ${className}` : ""}`}>
      <div className="final-cta__pattern" aria-hidden />
      <div className="final-cta__dots" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="container final-cta__inner">
        <FadeIn>
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2 className="final-cta__title">{title}</h2>
          <p className="final-cta__text">{subtitle}</p>
          <div className="final-cta__actions">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
              <ArrowRight className="btn-arrow" aria-hidden />
            </Button>
            {secondaryLabel ? (
              <Button href={secondaryHref} variant="secondary" size="lg" className="btn-on-dark">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
