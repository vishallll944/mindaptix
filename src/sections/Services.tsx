"use client";

import { SERVICES } from "@/data/services.js";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="What we do"
            title="SEO services built for modern search"
            subtitle="From AI SEO and GEO to technical, local and paid — strategies that grow qualified demand."
          />
        </FadeIn>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={(index % 4) * 0.05}>
              <ServiceCard
                number={String(index + 1).padStart(2, "0")}
                title={service.title}
                description={service.desc}
                href={service.href}
                icon={service.icon}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
