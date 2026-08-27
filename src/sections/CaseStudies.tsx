"use client";

import { CASE_STUDIES } from "@/data/caseStudies.js";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CaseStudies() {
  const featured = CASE_STUDIES.find((study) => study.featured) ?? CASE_STUDIES[0];
  const rest = CASE_STUDIES.filter((study) => study.id !== featured.id);

  return (
    <section className="section" id="case-studies">
      <div className="container">
        <FadeIn>
          <div className="section-header" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.25rem" }}>
            <div>
              <p className="eyebrow">Proof</p>
              <h2 className="section-title">Results you can measure</h2>
              <p className="section-subtitle">
                Real growth across AI SEO, eCommerce and local search.
              </p>
            </div>
            <Button href="/case-studies" variant="outline">
              All case studies
            </Button>
          </div>
        </FadeIn>

        <div className="case-studies-grid">
          <FadeIn className="case-study-featured">
            <CaseStudyCard
              tag={featured.tag}
              title={featured.title}
              metrics={featured.metrics}
              href={featured.href}
              featured
            />
          </FadeIn>
          {rest.map((study, index) => (
            <FadeIn key={study.id} delay={0.08 + index * 0.06}>
              <CaseStudyCard
                tag={study.tag}
                title={study.title}
                metrics={study.metrics}
                href={study.href}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
