"use client";

import dynamic from "next/dynamic";
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
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/sections/FinalCTA";
import { useIsMobile, useReducedMotion } from "@/lib/hooks";

const ServiceHeroScene = dynamic(
  () => import("./three/ServiceHeroScene").then((m) => m.ServiceHeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="svc-hero__fallback">
        <div className="svc-hero__icon" aria-hidden>
          <Sparkles size={36} />
        </div>
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
      <section className="svc-hero">
        <div className="container">
          <div className="svc-hero__grid">
            <FadeIn className="svc-hero__copy">
              <p className="eyebrow">
                <Icon size={14} aria-hidden />
                Service
              </p>
              <h1 className="svc-hero__title">{title}</h1>
              <p className="svc-hero__desc">{desc}</p>
              <div className="svc-hero__actions">
                <Button href="/contact">
                  Get Free Audit
                  <ArrowRight className="btn-arrow" aria-hidden />
                </Button>
                <Button href="/services" variant="outline">
                  All services
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="svc-hero__visual">
              {show3d ? (
                <ServiceHeroScene tags={tags} />
              ) : (
                <div className="svc-hero__fallback">
                  <div className="svc-hero__icon" aria-hidden>
                    <Icon size={36} />
                  </div>
                  <div className="svc-hero__tags">
                    {tags.map((tag) => (
                      <span key={tag} className="svc-hero__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-outcomes__grid">
            <FadeIn>
              <SectionHeading
                eyebrow="Outcomes"
                title={`Why teams choose our ${title}`}
                subtitle="Practical benefits you can feel in visibility, pipeline, and reporting — not just keyword dashboards."
              />
              <ul className="svc-benefits">
                {benefits.map((item) => (
                  <li key={item} className="svc-benefit">
                    <span className="svc-benefit__icon" aria-hidden>
                      <Check size={16} />
                    </span>
                    <span className="svc-benefit__text">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.08}>
              <aside className="svc-snapshot">
                <p className="svc-snapshot__eyebrow">Engagement snapshot</p>
                <h2 className="svc-snapshot__title">Built for measurable growth</h2>
                <p className="svc-snapshot__text">
                  We start with discovery, prioritize the highest-ROI work for {title}, then
                  execute and iterate with transparent reporting.
                </p>
                <div className="svc-snapshot__actions">
                  <Button href="/contact">
                    Start with an audit
                    <ArrowRight className="btn-arrow" aria-hidden />
                  </Button>
                  <Button href="/case-studies" variant="secondary" className="btn-on-dark">
                    See case studies
                  </Button>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section svc-process">
        <div className="container">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Process"
              title="How we deliver"
              subtitle="A clear path from research to scale — consistent across every service engagement."
            />
          </FadeIn>

          <div className="workflow-steps">
            {PROCESS.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.06}>
                <article className="workflow-step">
                  <p className="workflow-step__num">{step.step}</p>
                  <h3 className="workflow-step__title">{step.title}</h3>
                  <p className="workflow-step__desc">{step.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={`Ready to grow with ${title}?`}
        subtitle="Get a free audit focused on your market, competitors, and conversion goals."
      />
    </main>
  );
}
