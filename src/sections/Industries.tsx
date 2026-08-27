"use client";

import { INDUSTRIES } from "@/data/industries.js";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="Industries"
            title="Search strategies tailored to how your buyers decide"
            subtitle="We adapt SEO, AI SEO and local growth plays to the realities of your market."
          />
        </FadeIn>

        <div className="industries-grid">
          {INDUSTRIES.map((industry, index) => (
            <FadeIn key={industry.id} delay={(index % 6) * 0.04}>
              <IndustryCard
                name={industry.name}
                description={industry.desc}
                href={industry.href}
                icon={industry.icon}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
