import type { Metadata } from "next";
import { CASE_STUDIES } from "@/data/caseStudies.js";
import { SITE } from "@/data/site.js";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Case Studies | ${SITE.name}`,
  description:
    "Real SEO results — AI search revenue, organic growth, local visibility, and traffic turnarounds across industries and markets.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Proof</p>
            <h1 className="page-hero__title">Results you can measure.</h1>
            <p className="page-hero__lead">
              Rankings, traffic, leads, and revenue — case studies from AI SEO, local,
              eCommerce, and international growth programs.
            </p>
            <div className="page-hero__actions">
              <Button href="/contact" size="lg">
                Get Free SEO Audit
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-studies-grid">
            {CASE_STUDIES.map((study, index) => (
              <FadeIn
                key={study.id}
                delay={Math.min(index * 0.05, 0.25)}
                className={study.featured ? "case-study-featured" : undefined}
              >
                <CaseStudyCard
                  tag={study.tag}
                  title={study.title}
                  metrics={study.metrics}
                  href={study.href}
                  featured={study.featured}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want results like these?"
        subtitle="Share your site and goals — we'll map the highest-impact opportunities for the next 90 days."
      />
    </main>
  );
}
