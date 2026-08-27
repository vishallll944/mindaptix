import type { Metadata } from "next";
import { SERVICES } from "@/data/services.js";
import { SITE } from "@/data/site.js";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `SEO & Digital Services | ${SITE.name}`,
  description:
    "AI SEO, GEO, AEO, organic SEO, technical SEO, local SEO, eCommerce SEO, Google Ads, Meta Ads and more — built for modern search growth.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Our services</p>
            <h1 className="page-hero__title">SEO services built for modern search.</h1>
            <p className="page-hero__lead">
              From classic rankings to AI answer engines — strategies that turn visibility
              into qualified traffic, leads, and revenue.
            </p>
            <div className="page-hero__actions">
              <Button href="/contact" size="lg">
                Get Free SEO Audit
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <FadeIn key={service.id} delay={Math.min(index * 0.04, 0.28)}>
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

      <CTASection
        title="Not sure which service fits?"
        subtitle="Tell us your goals and markets — we'll recommend the right mix of SEO, GEO, AEO, and paid growth."
        secondaryLabel="View case studies"
        secondaryHref="/case-studies"
      />
    </main>
  );
}
