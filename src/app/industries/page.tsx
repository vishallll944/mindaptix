import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/data/site.js";
import { INDUSTRIES } from "@/data/industries.js";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/sections/FinalCTA";

export const metadata: Metadata = {
  title: `Industries We Serve | Industry-Specific SEO | ${SITE.name}`,
  description:
    "Industry-specific SEO strategies for real estate, healthcare, eCommerce, legal, SaaS, travel, home services and more — built around how your buyers actually search.",
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Industries We Serve</p>
            <h1 className="page-hero__title">Industry-Specific SEO Strategies That Convert</h1>
            <p className="page-hero__lead">
              Every industry has different buyers, search behaviour and competition. We adapt SEO,
              AI SEO and local growth plays to the realities of your market.
            </p>
            <div className="page-hero__actions">
              <Button href="/contact" size="lg">
                Get Free SEO Audit
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
              <Button href="/packages" variant="outline" size="lg">
                View SEO Packages
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
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

      <FinalCTA
        title="Need Industry-Specific SEO?"
        subtitle="Get a customized SEO strategy designed for your industry and growth goals."
      />
    </main>
  );
}
