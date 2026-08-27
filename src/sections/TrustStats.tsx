"use client";

import { SITE } from "@/data/site.js";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";

export function TrustStats() {
  return (
    <section className="trust-stats" aria-label="Trust statistics">
      <div className="container">
        <div className="trust-stats__grid">
          {SITE.stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08}>
              <div className="trust-stat">
                <p className="trust-stat__value">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </p>
                <p className="trust-stat__label">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
