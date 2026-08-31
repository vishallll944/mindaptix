"use client";

import { SITE } from "@/data/site.js";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

type FinalCTAProps = {
  title?: string;
  subtitle?: string;
};

export function FinalCTA({
  title = "Ready to build your AI-powered search strategy?",
  subtitle = "Your customers are already searching. The question is: will they find your business — or your competitors?",
}: FinalCTAProps = {}) {
  return (
    <section className="section final-cta">
      <div className="final-cta__pattern" aria-hidden />
      <div className="final-cta__dots" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="container final-cta__inner">
        <FadeIn>
          <p className="eyebrow eyebrow-light">{SITE.name}</p>
          <h2 className="final-cta__title">{title}</h2>
          <p className="final-cta__text">{subtitle}</p>
          <div className="final-cta__actions">
            <Button href="/contact" size="lg">
              Get Your Free AI SEO Audit
              <ArrowRight className="btn-arrow" aria-hidden />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg" className="btn-on-dark">
              View Case Studies
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
