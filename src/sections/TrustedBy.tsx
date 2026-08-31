"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const PARTNERS = [
  "Upwork Top Rated",
  "Google Partner",
  "SEMrush",
  "Meta Business",
  "Ahrefs",
  "HubSpot",
  "Shopify Plus",
  "Clutch",
];

export function TrustedBy() {
  return (
    <section className="trusted-by" aria-label="Trusted by brands">
      <div className="container trusted-by__inner">
        <FadeIn>
          <p className="trusted-by__label">Trusted by teams worldwide</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="trusted-by__logos">
            {PARTNERS.map((partner) => (
              <span key={partner} className="trusted-by__logo">
                {partner}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
