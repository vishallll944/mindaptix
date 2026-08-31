"use client";

import { useState } from "react";
import {
  HeartPulse,
  Building2,
  ShoppingCart,
  Cloud,
  GraduationCap,
  Plane,
  Scale,
  Store,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeInView";

type Industry = {
  id: string;
  name: string;
  icon: LucideIcon;
  insight: string;
  services: string[];
  opportunity: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    insight: "Patients research providers before booking — trust signals matter.",
    services: ["Local SEO", "AEO", "Content Marketing"],
    opportunity: "Dominate 'near me' and condition-specific answer search.",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building2,
    insight: "High-intent buyers search neighborhoods, agents and listings daily.",
    services: ["SEO Strategy", "Google Ads", "Local SEO"],
    opportunity: "Capture hyper-local search and map pack visibility.",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    insight: "Product and category search drives the majority of organic revenue.",
    services: ["E-commerce SEO", "AI SEO", "CRO"],
    opportunity: "Scale organic sales across product, category and AI discovery.",
  },
  {
    id: "saas",
    name: "SaaS",
    icon: Cloud,
    insight: "Buyers compare solutions long before they talk to sales.",
    services: ["Content Marketing", "AI SEO", "Google Ads"],
    opportunity: "Build topical authority that feeds pipeline at every stage.",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    insight: "Students and parents research programs, rankings and outcomes.",
    services: ["SEO Strategy", "Content Marketing", "Social Media"],
    opportunity: "Win informational and comparison queries that drive enrolments.",
  },
  {
    id: "travel",
    name: "Travel",
    icon: Plane,
    insight: "Seasonal demand and destination search require agile strategy.",
    services: ["SEO Strategy", "Meta Ads", "Content Marketing"],
    opportunity: "Capture peak-season intent with optimized landing experiences.",
  },
  {
    id: "legal",
    name: "Legal",
    icon: Scale,
    insight: "Competitive practice-area queries demand authority and trust.",
    services: ["Local SEO", "AEO", "Content Marketing"],
    opportunity: "Rank for high-value practice areas and local intent.",
  },
  {
    id: "local",
    name: "Local Businesses",
    icon: Store,
    insight: "Maps, reviews and service-area pages drive foot traffic and calls.",
    services: ["Local SEO", "Google Ads", "Website Development"],
    opportunity: "Turn near-me search into calls, visits and bookings.",
  },
];

export function Industries() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="industries" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-accent-cyan">
              Industries
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
              Growth Across Every Sector
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Deep industry expertise paired with proven digital growth frameworks.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            const isHovered = hovered === industry.id;

            return (
              <FadeIn key={industry.id} delay={i * 0.05}>
                <div
                  onMouseEnter={() => setHovered(industry.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="gradient-border card-lift group relative h-full min-h-[220px] overflow-hidden rounded-2xl bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 text-accent-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-text-primary">
                    {industry.name}
                  </h3>

                  <div
                    className={`mt-3 space-y-3 transition-all duration-300 ${
                      isHovered ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    <p className="text-sm text-text-secondary">{industry.insight}</p>
                    {isHovered && (
                      <div className="space-y-2 border-t border-slate-100 pt-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent-blue">
                          Popular Services
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {industry.services.map((s) => (
                            <span
                              key={s}
                              className="rounded-full bg-slate-50 px-2 py-0.5 text-xs text-text-secondary"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs font-medium text-accent-purple">
                          {industry.opportunity}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
