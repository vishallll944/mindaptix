import type { Metadata } from "next";
import { Check } from "lucide-react";
import { FRAMEWORK } from "@/data/framework.js";
import { SITE } from "@/data/site.js";
import { TEAM } from "@/data/team.js";
import { TeamCard } from "@/components/cards/TeamCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: `Who We Are | ${SITE.name}`,
  description:
    "Meet the 4Core Digital team. AI-powered SEO strategists combining the 4Core Growth Framework with human expertise.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Who We Are</p>
            <h1 className="page-hero__title">Search growth built on four cores.</h1>
            <p className="page-hero__lead">
              {SITE.description} We help brands turn visibility into leads, sales, and
              long-term authority — across Google and AI search.
            </p>
            <div className="page-hero__actions">
              <Button href="/contact" size="lg">
                Get Free SEO Audit
              </Button>
              <Button href="/case-studies" variant="outline" size="lg">
                See results
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <FadeIn>
            <SectionHeading
              eyebrow="Our story"
              title="Strategy before tactics. Revenue before vanity metrics."
              subtitle="4Core Digital started with a simple belief: SEO should grow the business, not just rankings. That means research-led roadmaps, technical excellence, authoritative content, and conversion systems that work together."
            />
            <div className="about-story__copy">
              <p className="lead">
                Today we partner with teams worldwide — from local service brands to
                eCommerce and B2B — to win classic search and the new answer engines:
                AI Overviews, ChatGPT, Gemini, Perplexity, and more.
              </p>
              <p>
                Every engagement is grounded in white-hat practice, transparent reporting,
                and the same four pillars we use for ourselves: intelligence, optimization,
                authority, and growth.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="framework__track">
              {FRAMEWORK.map((core) => (
                <article key={core.id} className="framework-core">
                  <p className="framework-core__num">{core.core}</p>
                  <h3 className="framework-core__title">{core.title}</h3>
                  <p className="framework-core__desc">{core.desc}</p>
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="team" className="section section-surface">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="The team"
              title="Strategists, builders, and operators."
              subtitle="The people behind your roadmap — available to talk through goals, markets, and what growth should look like for your brand."
            />
          </FadeIn>
          <div className="team-grid">
            {TEAM.map((member, index) => (
              <FadeIn key={member.id} delay={index * 0.06}>
                <TeamCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  tags={member.tags}
                  image={member.avatar}
                  chatHref="/contact"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="How we work"
              title="What you can expect from day one."
              align="center"
            />
          </FadeIn>
          <ul className="benefit-list" style={{ maxWidth: 720, marginInline: "auto" }}>
            {[
              "Clear priorities from discovery — not a cookie-cutter checklist",
              "AI-aware SEO that still respects technical and content foundations",
              "Reporting tied to traffic, leads, and revenue signals",
              "A white-hat approach built for durable rankings",
            ].map((item) => (
              <li key={item} className="benefit-list__item">
                <span className="benefit-list__icon" aria-hidden>
                  <Check size={16} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Ready to grow with a team that thinks in systems?"
        subtitle="Book a free AI SEO audit. We'll show where visibility, traffic, and leads are waiting."
      />
    </main>
  );
}
