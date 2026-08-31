import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { SITE } from "@/data/site.js";
import { LOCATIONS } from "@/data/locations.js";
import { SERVICES } from "@/data/services.js";
import { CASE_STUDIES } from "@/data/caseStudies.js";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { FinalCTA } from "@/sections/FinalCTA";

type Params = { slug: string };

const slugOf = (href: string) => href.replace("/locations/", "");

function getLocation(slug: string) {
  return LOCATIONS.find((l) => slugOf(l.href) === slug) ?? null;
}

export function generateStaticParams(): Params[] {
  return LOCATIONS.map((l) => ({ slug: slugOf(l.href) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: `SEO Services ${location.name} | ${SITE.name}`,
    description: `SEO services for businesses in ${location.name} — local SEO, AI SEO, content and authority building that turn search visibility into leads, sales and revenue.`,
  };
}

const WHY_LOCAL = [
  {
    title: "Market-Specific Keyword Research",
    desc: "We research how customers in your market actually search — language, intent, local terms and buying patterns.",
  },
  {
    title: "Local & National Visibility",
    desc: "From Google Maps and local pack rankings to national organic growth, we build visibility at every level.",
  },
  {
    title: "AI Search Ready",
    desc: "We optimise for ChatGPT, Gemini, Perplexity and Google AI Overviews so your business is cited in AI answers.",
  },
  {
    title: "White-Hat Authority Building",
    desc: "Relevant backlinks, citations and digital PR that strengthen your authority in your market safely.",
  },
  {
    title: "Transparent Reporting",
    desc: "Clear monthly reports covering rankings, traffic, completed work and next priorities.",
  },
  {
    title: "Proven Across Markets",
    desc: "We've helped businesses grow in India, the US, UK, Europe, the Middle East and beyond.",
  },
];

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const studies = CASE_STUDIES.slice(0, 3);

  return (
    <main>
      <section className="industry-hero">
        <div className="container">
          <FadeIn>
            <p className="eyebrow eyebrow-light">Locations We Serve</p>
            <h1 className="page-hero__title">
              SEO Services {location.name}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://flagcdn.com/${location.code}.svg`}
                alt=""
                style={{
                  display: "inline-block",
                  width: "0.9em",
                  height: "auto",
                  marginLeft: "0.35em",
                  borderRadius: "4px",
                  verticalAlign: "-0.05em",
                }}
              />
            </h1>
            <p className="page-hero__lead" style={{ marginBottom: "1rem" }}>
              Local SEO, content and authority building for businesses in {location.name} — built
              to turn search visibility into leads, sales and revenue.
            </p>
            <p className="industry-hero__sub">
              We&apos;ve helped {location.brands} businesses in {location.name} grow through
              customized SEO strategies — combining local search, AI SEO, technical fixes, content
              and white-hat link building tuned to your market&apos;s competition and search
              behaviour.
            </p>
            <div className="page-hero__actions">
              <Button href="/contact" size="lg">
                Get Free SEO Audit
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
              <Button href="/packages" variant="secondary" size="lg" className="btn-on-dark">
                View SEO Packages
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="What we do"
              title={`SEO services for businesses in ${location.name}`}
              subtitle="Every service adapted to your market's search behaviour, language and competition."
              align="center"
            />
          </FadeIn>
          <div className="services-grid">
            {SERVICES.slice(0, 8).map((service: (typeof SERVICES)[number], index: number) => (
              <FadeIn key={service.id} delay={(index % 4) * 0.05}>
                <ServiceCard
                  number={String(index + 1).padStart(2, "0")}
                  title={service.title}
                  description={service.desc}
                  href={service.href}
                  icon={service.icon}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow={`Why ${SITE.shortName}`}
              title={`Why businesses in ${location.name} choose us`}
              align="center"
            />
          </FadeIn>
          <div className="mini-cards">
            {WHY_LOCAL.map((item, i) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.05, 0.25)}>
                <div className="mini-card">
                  <span className="mini-card__icon">
                    <Check aria-hidden />
                  </span>
                  <h3 className="mini-card__title">{item.title}</h3>
                  <p className="mini-card__desc">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Proof"
              title="Results from businesses like yours"
              subtitle="Real keyword rankings and growth from our client campaigns."
              align="center"
            />
          </FadeIn>
          <div className="case-studies-grid">
            {studies.map((study, i) => (
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
        </div>
      </section>

      <FinalCTA
        title={`Ready to grow in ${location.name}?`}
        subtitle="Get a free SEO audit and see exactly where your biggest opportunities are in your market."
      />
    </main>
  );
}
