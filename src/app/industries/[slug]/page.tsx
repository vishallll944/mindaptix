import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SITE } from "@/data/site.js";
import { getIndustryPage, INDUSTRY_SLUGS, INDUSTRY_STATS } from "@/data/industryPages.js";
import { CASE_STUDIES } from "@/data/caseStudies.js";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { FinalCTA } from "@/sections/FinalCTA";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) return {};
  return {
    title: `${page.metaTitle} | ${SITE.name}`,
    description: page.metaDescription,
  };
}

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();

  const relevantStudies = CASE_STUDIES.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="industry-hero">
        <div className="container">
          <FadeIn>
            <p className="eyebrow eyebrow-light">{page.eyebrow}</p>
            <h1 className="page-hero__title">{page.heroTitle}</h1>
            <p className="page-hero__lead" style={{ marginBottom: "1rem" }}>
              {page.heroLead}
            </p>
            <p className="industry-hero__sub">{page.heroSub}</p>
            <div className="page-hero__actions">
              <Button href="/contact" size="lg">
                {page.ctaPrimary}
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="btn-on-dark">
                <Phone aria-hidden style={{ width: 16, height: 16 }} />
                {page.ctaSecondary}
              </Button>
            </div>
            <div className="industry-stats">
              {INDUSTRY_STATS.map((stat) => (
                <div key={stat.label} className="industry-stat">
                  <p className="industry-stat__value">{stat.value}</p>
                  <p className="industry-stat__label">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Common problems */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Common Problems"
              title={page.problems.title}
              subtitle={page.problems.intro}
              align="center"
            />
          </FadeIn>
          <div className="problem-list">
            {page.problems.items.map((item: { title: string; desc: string }, i: number) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.04, 0.2)}>
                <div className="mini-card">
                  <h3 className="mini-card__title">{item.title}</h3>
                  <p className="mini-card__desc">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              {page.problems.outro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solution */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Solution"
              title={page.solutions.title}
              subtitle={page.solutions.intro}
              align="center"
            />
          </FadeIn>
          <div className="solution-list">
            {page.solutions.items.map((item: { title: string; desc: string }, i: number) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.03, 0.15)}>
                <div className="solution-item">
                  <span className="solution-item__num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="solution-item__title">{item.title}</h3>
                    <p className="solution-item__desc">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              {page.solutions.outro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Results timeline */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Timeline"
              title={page.timeline.title}
              subtitle={page.timeline.intro}
              align="center"
            />
          </FadeIn>
          <div className="setup-timeline setup-timeline--4">
            {page.timeline.phases.map(
              (
                phase: { period: string; title: string; items: string[]; summary: string },
                i: number,
              ) => (
                <FadeIn key={phase.period} delay={Math.min(i * 0.06, 0.18)}>
                  <div className="timeline-card">
                    <span className="timeline-card__phase">{phase.period}</span>
                    <h3 className="timeline-card__title">{phase.title}</h3>
                    <ul className="timeline-card__list" style={{ marginBottom: "0.9rem" }}>
                      {phase.items.map((item) => (
                        <li key={item}>
                          <Check aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mini-card__desc">{phase.summary}</p>
                  </div>
                </FadeIn>
              ),
            )}
          </div>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              {page.timeline.outro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Google Business Profile */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Google Business Profile"
              title={page.gbp.title}
              subtitle={page.gbp.intro}
              align="center"
            />
          </FadeIn>
          <div className="mini-cards">
            {page.gbp.items.map((item: { title: string; desc: string }, i: number) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.04, 0.2)}>
                <div className="mini-card">
                  <h3 className="mini-card__title">{item.title}</h3>
                  <p className="mini-card__desc">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              {page.gbp.outro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Local SEO */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Local SEO"
              title={page.localSeo.title}
              subtitle={page.localSeo.intro}
              align="center"
            />
          </FadeIn>
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            <FadeIn>
              <div>
                <h3 className="mini-card__title" style={{ marginBottom: "0.9rem" }}>
                  What local {page.name.toLowerCase()} SEO covers
                </h3>
                <ul className="check-columns">
                  {page.localSeo.covers.map((item: string) => (
                    <li key={item}>
                      <Check aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div>
                <h3 className="mini-card__title" style={{ marginBottom: "0.9rem" }}>
                  Example searches we target
                </h3>
                <div className="search-pills">
                  {page.localSeo.exampleSearches.map((search: string) => (
                    <span key={search} className="search-pill">
                      {search}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              {page.localSeo.outro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Page SEO */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Key Pages"
              title={page.pagesSeo.title}
              subtitle={page.pagesSeo.intro}
              align="center"
            />
          </FadeIn>
          <FadeIn>
            <h3 className="mini-card__title" style={{ marginBottom: "0.9rem" }}>
              Pages we typically optimise
            </h3>
            <div className="search-pills" style={{ marginBottom: "2rem" }}>
              {page.pagesSeo.pageTypes.map((type: string) => (
                <span key={type} className="search-pill">
                  {type}
                </span>
              ))}
            </div>
          </FadeIn>
          <div className="mini-cards">
            {page.pagesSeo.aspects.map((item: { title: string; desc: string }, i: number) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.04, 0.2)}>
                <div className="mini-card">
                  <h3 className="mini-card__title">{item.title}</h3>
                  <p className="mini-card__desc">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              {page.pagesSeo.outro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content strategy */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Content Strategy"
              title={page.contentStrategy.title}
              subtitle={page.contentStrategy.intro}
              align="center"
            />
          </FadeIn>
          <div className="mini-cards">
            {page.contentStrategy.items.map(
              (item: { title: string; desc: string }, i: number) => (
                <FadeIn key={item.title} delay={Math.min(i * 0.04, 0.2)}>
                  <div className="mini-card">
                    <h3 className="mini-card__title">{item.title}</h3>
                    <p className="mini-card__desc">{item.desc}</p>
                  </div>
                </FadeIn>
              ),
            )}
          </div>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              {page.contentStrategy.outro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Keywords */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Keywords"
              title={page.keywords.title}
              subtitle={page.keywords.intro}
              align="center"
            />
          </FadeIn>
          <FadeIn>
            <div className="keyword-table-wrap">
              <table className="keyword-table">
                <thead>
                  <tr>
                    <th>Keyword Type</th>
                    <th>Example Keywords</th>
                    <th>Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {page.keywords.rows.map(
                    (row: { type: string; examples: string; why: string }) => (
                      <tr key={row.type}>
                        <td>{row.type}</td>
                        <td>{row.examples}</td>
                        <td>{row.why}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </FadeIn>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              {page.keywords.outro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case studies */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Case Studies"
              title="Relevant SEO Growth Examples"
              subtitle="Past performance is not a guarantee of future rankings or leads. Results depend on competition, website condition, content quality and implementation."
              align="center"
            />
          </FadeIn>
          <div className="case-studies-grid">
            {relevantStudies.map((study, i) => (
              <FadeIn key={study.id} delay={Math.min(i * 0.06, 0.18)}>
                <CaseStudyCard
                  tag={study.tag}
                  title={study.title}
                  metrics={study.metrics}
                  href={study.href}
                />
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.75rem" }}>
              <Button href="/case-studies" variant="outline">
                View SEO Case Studies
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why us */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading eyebrow={`Why ${SITE.name}`} title={page.whyUs.title} align="center" />
          </FadeIn>
          <div className="mini-cards">
            {page.whyUs.items.map((item: { title: string; desc: string }, i: number) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.04, 0.2)}>
                <div className="mini-card">
                  <h3 className="mini-card__title">{item.title}</h3>
                  <p className="mini-card__desc">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Free audit */}
      <section className="section audit-cta">
        <div className="audit-cta__glow" aria-hidden />
        <div className="container audit-cta__inner">
          <FadeIn>
            <div>
              <p className="eyebrow eyebrow-light">Free {page.name} SEO Audit</p>
              <h2 className="audit-cta__title">{page.audit.title}</h2>
              <p className="audit-cta__text">{page.audit.intro}</p>
              <Button href="/contact" size="lg">
                {page.ctaPrimary}
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <p
                className="eyebrow eyebrow-light"
                style={{ marginBottom: "0.9rem" }}
              >
                Your free audit can include
              </p>
              <ul className="check-columns" style={{ color: "#fff" }}>
                {page.audit.includes.map((item: string) => (
                  <li key={item} style={{ color: "rgba(255,255,255,0.8)" }}>
                    <Check aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title={`Frequently Asked Questions About ${page.name} SEO Services`}
              align="center"
            />
          </FadeIn>
          <FadeIn>
            <FAQAccordion items={page.faqs} />
          </FadeIn>
          <FadeIn>
            <p className="mini-card__title" style={{ margin: "2rem 0 0.9rem" }}>
              Related SEO services
            </p>
            <div className="related-links">
              {page.related.map((link: { label: string; href: string }) => (
                <Link key={link.href + link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCTA
        title={`Ready To Grow Your ${page.name} Business With SEO?`}
        subtitle={`Your customers are already searching. The question is: will they find your ${page.name.toLowerCase()} business — or your competitors?`}
      />
    </main>
  );
}
