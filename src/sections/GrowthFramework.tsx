"use client";

import { SITE } from "@/data/site.js";
import { FRAMEWORK } from "@/data/framework.js";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function GrowthFramework() {
  return (
    <section className="section framework" id="framework">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="Our methodology"
            title={`The ${SITE.shortName} AI Growth Framework`}
            subtitle="Four connected pillars that turn search visibility into pipeline, customers and revenue."
          />
        </FadeIn>

        <div className="framework__track">
          {FRAMEWORK.map((core, index) => (
            <FadeIn key={core.id} delay={index * 0.08}>
              <article className="framework-core">
                <span className="framework-core__connector" aria-hidden />
                <p className="framework-core__num">{core.core}</p>
                <h3 className="framework-core__title">{core.title}</h3>
                <p className="framework-core__desc">{core.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
