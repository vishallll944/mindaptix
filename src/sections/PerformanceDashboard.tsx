"use client";

import { SeoDashboard } from "@/components/SeoDashboard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function PerformanceDashboard() {
  return (
    <section className="section perf-dashboard" id="performance">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="Analytics"
            title="Performance you can see — and scale"
            subtitle="Track clicks, impressions, position and site health with clarity built for decision-makers."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <SeoDashboard />
        </FadeIn>
      </div>
    </section>
  );
}
