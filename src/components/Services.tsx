"use client";

import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  Bot,
  MessageCircle,
  Settings2,
  MapPin,
  Code2,
  Target,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { HOME_SERVICES } from "@/data/homeServices.js";
import { FadeIn } from "@/components/ui/FadeInView";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  TrendingUp,
  Bot,
  MessageCircle,
  Settings2,
  MapPin,
  Code2,
  Target,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-bg-secondary/50" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-purple-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-purple">
              Services
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
              Everything You Need To Grow Digitally
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              From AI search visibility to performance ads and conversion-focused
              websites — one team, one growth engine.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Sparkles;

            return (
              <FadeIn key={service.id} delay={i * 0.04}>
                <Link
                  href={service.href}
                  className="group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-glow"
                >
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity group-hover:opacity-100" />

                  <span className="text-xs font-bold text-accent-blue/60">{service.number}</span>
                  <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 text-accent-blue transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-text-primary">{service.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                    {service.desc}
                  </p>

                  <span className="mt-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-accent-blue transition-all group-hover:border-accent-blue/20 group-hover:bg-accent-blue group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
