import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies.js";
import { INDUSTRIES } from "@/data/industries.js";
import { SITE } from "@/data/site.js";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CaseStudiesExplorer } from "@/components/CaseStudiesExplorer";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/sections/FinalCTA";

export const metadata: Metadata = {
  title: `SEO Case Studies | Real Results & Business Growth | ${SITE.name}`,
  description:
    "Discover how our SEO strategies have helped businesses increase rankings, traffic, leads and revenue across multiple industries and markets.",
};

const TRUST_CHIPS = [
  { icon: Award, label: "8+ Years Experience" },
  { icon: BarChart3, label: "Results-Driven SEO" },
  { icon: ShieldCheck, label: "White Hat Strategies" },
  { icon: BadgeCheck, label: "Transparent Reporting" },
];

const PROCESS_STEPS = [
  { step: "01", title: "Audit", desc: "Technical, on-page and competitive SEO audit." },
  { step: "02", title: "Strategy", desc: "Custom roadmap built around revenue, not vanity metrics." },
  { step: "03", title: "Optimization", desc: "Execute fixes, content and authority building." },
  { step: "04", title: "Growth", desc: "Test, report and scale what's working." },
];

const WHY_CHOOSE = [
  { title: "Transparent Reporting", desc: "Real dashboards, clear KPIs, no fluff." },
  { title: "Custom SEO Strategies", desc: "Built around your market, ICP and revenue model." },
  { title: "Dedicated Experts", desc: "Senior strategists, not interns running your account." },
  { title: "White Hat SEO", desc: "Sustainable strategies that protect your domain." },
  { title: "Long-Term Growth", desc: "Compounding traffic and pipeline, year over year." },
  { title: "ROI-Focused Campaigns", desc: "Every initiative tied to leads and revenue." },
];

function aggregateStats() {
  let numberOne = 0;
  let topThree = 0;
  let keywords = 0;
  const markets = new Set<string>();

  for (const study of CASE_STUDIES) {
    numberOne += Number(study.metrics[0]?.value ?? 0) || 0;
    topThree += Number(study.metrics[1]?.value ?? 0) || 0;
    keywords += Number(study.metrics[2]?.value ?? 0) || 0;
    if (study.market) {
      study.market.split(/[,&]/).forEach((m: string) => markets.add(m.trim()));
    }
  }

  return [
    { value: `${numberOne}+`, label: "#1 Google Rankings Won" },
    { value: `${topThree}+`, label: "Top-3 Keyword Rankings" },
    { value: `${keywords}+`, label: "Keywords Tracked & Ranked" },
    { value: `${markets.size}+`, label: "Countries & Markets Served" },
    { value: "100%", label: "Verified Client Success" },
  ];
}

export default function CaseStudiesPage() {
  const featured = CASE_STUDIES.filter((s) => s.featured);
  const stats = aggregateStats();

  return (
    <main>
      {/* Hero */}
      <section className="packages-hero">
        <div className="container">
          <FadeIn>
            <p className="packages-hero__eyebrow">
              <Sparkles aria-hidden /> SEO Case Studies
            </p>
            <h1 className="packages-hero__title">
              Real SEO Results. <span>Real Business Growth.</span>
            </h1>
            <p className="packages-hero__lead">
              Discover how our SEO strategies have helped businesses increase rankings, traffic,
              leads and revenue across multiple industries.
            </p>
            <div className="packages-hero__actions">
              <Button href="/contact" size="lg">
                Get Free SEO Audit
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="btn-on-dark">
                Book Strategy Call
              </Button>
            </div>
            <div className="trust-chips trust-chips--4">
              {TRUST_CHIPS.map((chip) => (
                <div key={chip.label} className="trust-chip">
                  <chip.icon aria-hidden />
                  {chip.label}
                </div>
              ))}
            </div>
            <div className="industry-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="industry-stat">
                  <p className="industry-stat__value">{stat.value}</p>
                  <p className="industry-stat__label">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 ? (
        <section className="section">
          <div className="container">
            <FadeIn>
              <SectionHeading
                eyebrow="Featured"
                title="Case studies driving real growth"
                subtitle="Hand-picked client wins across eCommerce, local, AI and international SEO."
                align="center"
              />
            </FadeIn>
            <div className="case-studies-grid">
              {featured.map((study, i) => (
                <FadeIn key={study.id} delay={i * 0.08} className="case-study-featured">
                  <CaseStudyCard
                    tag={study.tag}
                    title={study.title}
                    summary={study.summary}
                    metrics={study.metrics}
                    href={study.href}
                    featured
                    image={study.image}
                    platform={study.platform}
                    market={study.market}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* All case studies with filter */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="All Case Studies"
              title="Filter by category"
              subtitle="Every campaign below is backed by real keyword ranking data from our clients."
              align="center"
            />
          </FadeIn>
          <FadeIn>
            <CaseStudiesExplorer />
          </FadeIn>
        </div>
      </section>

      {/* Industries strip */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Industries We Help"
              title="SEO results across every vertical"
              align="center"
            />
          </FadeIn>
          <FadeIn>
            <div className="related-links" style={{ justifyContent: "center" }}>
              {INDUSTRIES.map((industry) => (
                <Link key={industry.id} href={industry.href}>
                  {industry.name}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Our SEO Process"
              title="How we deliver results"
              align="center"
            />
          </FadeIn>
          <div className="workflow-steps">
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.step} delay={Math.min(i * 0.06, 0.18)}>
                <div className="workflow-step">
                  <p className="workflow-step__num">{step.step}</p>
                  <h3 className="workflow-step__title">{step.title}</h3>
                  <p className="workflow-step__desc">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Clients Choose Us"
              title="SEO done the right way"
              align="center"
            />
          </FadeIn>
          <div className="mini-cards">
            {WHY_CHOOSE.map((item, i) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.05, 0.25)}>
                <div className="mini-card">
                  <h3 className="mini-card__title">{item.title}</h3>
                  <p className="mini-card__desc">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Want similar results for your business?"
        subtitle="Let's create a custom SEO strategy that helps you generate more traffic, leads and revenue."
      />
    </main>
  );
}
