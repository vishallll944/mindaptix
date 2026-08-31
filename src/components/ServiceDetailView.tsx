"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  TrendingUp,
  Bot,
  MessageCircle,
  MessageCircleQuestion,
  Settings2,
  Globe2,
  MapPin,
  ShoppingBag,
  Target,
  Megaphone,
  Link2,
  Map,
  type LucideIcon,
} from "lucide-react";
import { PROCESS } from "@/data/framework.js";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/ui/FadeInView";
import { useIsMobile, useReducedMotion } from "@/lib/hooks";

const ServiceHeroScene = dynamic(
  () => import("./three/ServiceHeroScene").then((m) => m.ServiceHeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[280px] items-center justify-center sm:h-[320px] lg:h-[380px]">
        <div className="h-14 w-14 animate-pulse rounded-full bg-gradient-to-br from-blue-100 to-teal-100" />
      </div>
    ),
  },
);

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  TrendingUp,
  Bot,
  MessageCircle,
  MessageCircleQuestion,
  Settings2,
  Globe2,
  MapPin,
  ShoppingBag,
  Target,
  Megaphone,
  Link2,
  Map,
};

const SERVICE_TAGS: Record<string, string[]> = {
  "google-ads": ["ROAS", "Leads", "PPC", "Scale", "CTR", "ROI"],
  "meta-ads": ["ROAS", "Reach", "Creative", "Retarget", "Scale", "CVR"],
  "ai-seo": ["AI", "GEO", "AEO", "Citations", "Rank", "Traffic"],
  "organic-seo": ["Keywords", "Authority", "Content", "Links", "Rank", "Traffic"],
  default: ["Strategy", "Growth", "Data", "ROI", "Scale", "Results"],
};

export type ServiceDetailViewProps = {
  title: string;
  desc: string;
  slug: string;
  icon?: string;
  benefits: string[];
};

export function ServiceDetailView({
  title,
  desc,
  slug,
  icon = "Sparkles",
  benefits,
}: ServiceDetailViewProps) {
  const mobile = useIsMobile();
  const reduced = useReducedMotion();
  const Icon = ICONS[icon] ?? Sparkles;
  const tags = SERVICE_TAGS[slug] ?? SERVICE_TAGS.default;
  const show3d = !mobile && !reduced;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 gradient-soft" />
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeIn>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-blue">
                <Icon className="h-3.5 w-3.5" />
                Service
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-secondary">{desc}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-accent-blue px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-blue-700"
                >
                  Get Free Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-text-primary transition-all hover:border-accent-blue/30 hover:shadow-soft"
                >
                  All services
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 p-3 shadow-glow backdrop-blur-sm">
                {show3d ? (
                  <ServiceHeroScene tags={tags} />
                ) : (
                  <div className="flex h-[280px] flex-col items-center justify-center gap-4 rounded-[1.5rem] bg-gradient-to-br from-blue-50 to-teal-50 sm:h-[320px]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-accent-blue to-accent-purple text-white shadow-lg">
                      <Icon className="h-10 w-10" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 px-4">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-accent-blue"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Outcomes + Snapshot */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-5">
            <FadeIn className="lg:col-span-3">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-blue">
                Outcomes
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
                Why teams choose our {title}
              </h2>
              <p className="mt-3 max-w-xl text-text-secondary">
                Practical benefits you can feel in visibility, pipeline, and reporting — not just
                keyword dashboards.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft transition-all hover:border-blue-100 hover:shadow-glow"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-text-primary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="h-full rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                  Engagement snapshot
                </span>
                <h3 className="mt-3 text-2xl font-extrabold">Built for measurable growth</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  We start with discovery, prioritize the highest-ROI work for {title}, then execute
                  and iterate with transparent reporting.
                </p>
                <div className="mt-8 space-y-3">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-blue px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-600"
                  >
                    Start with an audit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
                  >
                    See case studies
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg-secondary/60 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-cyan">
                Process
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
                How we deliver
              </h2>
              <p className="mt-3 text-text-secondary">
                A clear path from research to scale — consistent across every service engagement.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-blue-100 hover:shadow-glow">
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="text-xs font-bold text-accent-blue/70">STEP {step.step}</span>
                  <h3 className="mt-3 text-lg font-bold text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.desc}</p>
                  <div className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to grow with ${title}?`}
        subtitle="Get a free audit focused on your market, competitors, and conversion goals."
        secondaryLabel="Browse all services"
        secondaryHref="/services"
      />
    </main>
  );
}
