import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services.js";
import { SITE } from "@/data/site.js";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FinalCTA } from "@/sections/FinalCTA";
import { AuditCTA } from "@/sections/AuditCTA";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

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
            <p className="eyebrow">What we do</p>
            <h1 className="page-hero__title">AI-Powered SEO Services For Modern Businesses</h1>
            <p className="page-hero__lead">
              The future of search requires a smarter approach. Our services combine traditional
              SEO expertise with AI-powered strategies to help businesses improve visibility,
              authority, and conversions.
            </p>
            <div className="page-hero__actions">
              <Button href="/contact" size="lg">
                Get Free SEO Audit
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
              <Button href="/case-studies" variant="outline" size="lg">
                View case studies
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <div className="section-header center" style={{ marginBottom: "2.5rem" }}>
              <p className="eyebrow">Our services</p>
              <h2 className="section-title section-title-wide" style={{ maxWidth: "100%" }}>
                SEO services built for modern search
              </h2>
              <p className="section-subtitle">
                From AI SEO and GEO to technical, local and paid — strategies that grow qualified
                demand across every channel.
              </p>
            </div>
          </FadeIn>

          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <FadeIn key={service.id} delay={Math.min(index * 0.04, 0.28)}>
                <ServiceCard
                  number={String(index + 1).padStart(2, "0")}
                  title={service.title}
                  description={service.desc}
                  href={service.href}
                  icon={service.icon}
                  featured={index === 0}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <AuditCTA />

      <FinalCTA
        title="Not sure which service fits?"
        subtitle="Tell us your goals and markets — we'll recommend the right mix of SEO, GEO, AEO, and paid growth."
      />
    </main>
  );
}
