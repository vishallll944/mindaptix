import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/data/site.js";
import { LOCATIONS } from "@/data/locations.js";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/sections/FinalCTA";

export const metadata: Metadata = {
  title: `Locations We Serve | Global SEO Services | ${SITE.name}`,
  description:
    "SEO services for businesses in the USA, UK, Canada, Australia, India, New Zealand, UAE and Singapore — local strategies with global expertise.",
};

export default function LocationsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Locations We Serve</p>
            <h1 className="page-hero__title">Local SEO Expertise, Global Reach</h1>
            <p className="page-hero__lead">
              We help businesses win their local markets across four continents — with strategies
              tuned to each country&apos;s search behaviour, competition and buyer intent.
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
          <div className="locations-cards">
            {LOCATIONS.map((location, i) => (
              <FadeIn key={location.code} delay={(i % 4) * 0.05}>
                <Link href={location.href} className="location-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://flagcdn.com/${location.code}.svg`}
                    alt={`${location.name} flag`}
                    className="location-card__flag"
                    loading="lazy"
                  />
                  <div>
                    <p className="location-card__name">SEO Services {location.name}</p>
                    <p className="location-card__meta">{location.brands} businesses helped</p>
                  </div>
                  <ArrowRight className="location-card__arrow" aria-hidden />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Need SEO Services In Your Market?"
        subtitle="Generate more traffic, leads and customers through customized SEO strategies designed for your location."
      />
    </main>
  );
}
