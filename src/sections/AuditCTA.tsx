"use client";

import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const ISSUES = [
  { label: "Technical issues", value: "14" },
  { label: "Content gaps", value: "9" },
  { label: "Authority opportunities", value: "6" },
];

export function AuditCTA() {
  return (
    <section className="section audit-cta">
      <div className="audit-cta__glow" aria-hidden />
      <div className="container audit-cta__inner">
        <FadeIn>
          <div>
            <p className="eyebrow eyebrow-light">Free AI SEO audit</p>
            <h2 className="audit-cta__title">
              See where your biggest growth opportunities are hiding
            </h2>
            <p className="audit-cta__text">
              Get a clear read on rankings, technical health, AI visibility and
              conversion gaps — then a roadmap to fix what matters first.
            </p>
            <Button href="/contact" size="lg">
              Request Your Free Audit
              <ArrowRight className="btn-arrow" aria-hidden />
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="audit-preview" aria-hidden>
            <div className="audit-preview__url">
              <Globe size={16} />
              <span>yourwebsite.com</span>
            </div>
            <div className="audit-preview__score">
              <div>
                <p className="eyebrow eyebrow-light" style={{ marginBottom: "0.35rem" }}>
                  SEO health
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
                  Priority fixes identified
                </p>
              </div>
              <div className="audit-preview__score-ring">
                <span className="audit-preview__score-value">78</span>
              </div>
            </div>
            <div className="audit-preview__issues">
              {ISSUES.map((issue) => (
                <div key={issue.label} className="audit-preview__issue">
                  <span>{issue.label}</span>
                  <strong>{issue.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
