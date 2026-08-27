"use client";

import Image from "next/image";
import Link from "next/link";
import { LOCATIONS } from "@/data/locations.js";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Locations() {
  return (
    <section className="section locations" id="locations">
      <div className="locations__map-bg" aria-hidden />
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="Global reach"
            title="Helping brands win search worldwide"
            subtitle="From local markets to multi-country growth — we build SEO that travels with your business."
          />
        </FadeIn>

        <div className="locations__grid">
          {LOCATIONS.map((location, index) => (
            <FadeIn key={location.code} delay={(index % 4) * 0.05}>
              <Link href={location.href} className="location-card">
                <Image
                  className="location-card__flag"
                  src={`https://flagcdn.com/w80/${location.code}.png`}
                  alt=""
                  width={36}
                  height={24}
                />
                <p className="location-card__code">{location.code}</p>
                <h3 className="location-card__name">{location.name}</h3>
                <p className="location-card__brands">
                  <strong>{location.brands}</strong> brands supported
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
