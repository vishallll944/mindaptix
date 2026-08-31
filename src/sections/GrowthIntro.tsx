"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/data/site.js";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";

export function GrowthIntro() {
  return (
    <section className="section section-surface">
      <div className="container">
        <FadeIn>
          <div className="section-header center">
            <h2 className="section-title section-title-wide">
              Helping Businesses Grow Through Smarter Search Strategies
            </h2>
            <p className="section-subtitle">
              From startups and local businesses to SaaS, eCommerce, and international
              organizations — we combine SEO expertise, AI-driven insights, and human
              creativity to drive organic growth.
            </p>
          </div>
        </FadeIn>

        <div className="trust-stats__grid">
          {SITE.stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08}>
              <div className="trust-stat">
                <p className="trust-stat__value">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix ?? ""}
                    decimals={stat.decimals ?? 0}
                  />
                </p>
                <p className="trust-stat__label">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="text-center" style={{ marginTop: "2rem" }}>
            <Link href="/case-studies" className="btn btn-outline btn-sm">
              See the case studies behind these results
              <ArrowRight className="btn-arrow" size={16} />
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
