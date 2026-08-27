"use client";

import { FAQS } from "@/data/faqs.js";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function FAQ() {
  return (
    <section className="section section-surface" id="faq">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="FAQs"
            title="Before you start SEO"
            subtitle="Clear answers on AI SEO, GEO, AEO, timelines and how we measure success."
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <FAQAccordion items={FAQS} />
        </FadeIn>
      </div>
    </section>
  );
}
