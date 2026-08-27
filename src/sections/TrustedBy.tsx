"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const PARTNERS = [
  { name: "Northpeak", accent: true },
  { name: "Lumen & Co" },
  { name: "BrightCart", accent: true },
  { name: "Apex Dental" },
  { name: "Harbor Homes", accent: true },
  { name: "Pulse SaaS" },
  { name: "Orbit Travel", accent: true },
  { name: "Steelwork UK" },
];

export function TrustedBy() {
  return (
    <section className="trusted-by" aria-label="Trusted by brands">
      <div className="container trusted-by__inner">
        <FadeIn>
          <p className="trusted-by__label">Trusted by growth-focused brands</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="trusted-by__logos">
            {PARTNERS.map((partner) => (
              <span key={partner.name} className="trusted-by__logo">
                {partner.accent ? (
                  <>
                    {partner.name.split(" ")[0]}
                    <span>.</span>
                    {partner.name.split(" ").slice(1).join(" ")}
                  </>
                ) : (
                  partner.name
                )}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
