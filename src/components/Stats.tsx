"use client";

import { SITE } from "@/data/site.js";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeInView";

export function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SITE.stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="gradient-border card-lift group rounded-2xl p-6 md:p-8">
                <p className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix ?? ""}
                    decimals={stat.decimals ?? 0}
                  />
                </p>
                <p className="mt-2 text-sm font-medium text-text-secondary md:text-base">
                  {stat.label}
                </p>
                <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
