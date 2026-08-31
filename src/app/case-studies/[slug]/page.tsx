import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Download, TrendingUp } from "lucide-react";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies.js";
import { SITE } from "@/data/site.js";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/sections/FinalCTA";
import type { CaseStudyMetric } from "@/components/cards/CaseStudyCard";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type KeywordRow = {
  keyword: string;
  baseline: string;
  ranking: number;
};

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return { title: `Case Study | ${SITE.name}` };
  }

  return {
    title: `${study.title} | ${SITE.name}`,
    description: study.summary,
  };
}

function rankModifier(ranking: number) {
  if (ranking <= 3) return "csd-rank--top";
  if (ranking <= 10) return "csd-rank--page";
  return "csd-rank--rest";
}

function gainLabel(baseline: string, ranking: number) {
  const unseen = baseline.toLowerCase().includes("not in");
  if (unseen && ranking <= 3) return "New top 3";
  if (unseen && ranking <= 10) return "New to page 1";
  if (unseen) return "New ranking";
  return "Improved";
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const highlightMetrics = (study.metrics as CaseStudyMetric[]).filter(
    (metric) => metric.label !== "Ranking Period",
  );
  const related = CASE_STUDIES.filter((item) => item.slug !== study.slug).slice(0, 2);

  return (
    <main>
      <section className="csd-hero">
        <div className="container">
          <FadeIn className="csd-hero__inner">
            <Link href="/case-studies" className="csd-back">
              <ArrowLeft size={15} aria-hidden />
              All case studies
            </Link>

            <div className="csd-hero__grid">
              <div className="csd-hero__copy">
                <p className="eyebrow">{study.tag}</p>
                <h1 className="csd-hero__title">{study.title}</h1>
                <p className="csd-hero__summary">{study.summary}</p>

                <div className="csd-hero__actions">
                  <Button href={study.website} external>
                    Visit {study.websiteLabel}
                    <ArrowUpRight className="btn-arrow" aria-hidden />
                  </Button>
                  {study.pdfHref ? (
                    <Button href={study.pdfHref} variant="outline" external>
                      Download PDF
                      <Download size={16} aria-hidden />
                    </Button>
                  ) : null}
                </div>

                <ul className="csd-chips">
                  <li className="csd-chip">
                    <span>Platform</span>
                    {study.platform}
                  </li>
                  <li className="csd-chip">
                    <span>Market</span>
                    {study.market}
                  </li>
                  <li className="csd-chip">
                    <span>Period</span>
                    {study.rankingPeriod}
                  </li>
                </ul>
              </div>

              <div className="csd-hero__media">
                <div className="csd-hero__frame">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 50vw"
                    priority
                  />
                  <div className="csd-hero__stats">
                    {highlightMetrics.map((metric) => (
                      <div key={metric.label} className="csd-stat">
                        <span className="csd-stat__value">{metric.value}</span>
                        <span className="csd-stat__label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section csd-rankings">
        <div className="container">
          <FadeIn>
            <div className="csd-rankings__head">
              <SectionHeading
                eyebrow="Results"
                title="Keyword rankings"
                subtitle={`Baseline vs. current rankings for tracked keywords (${study.rankingPeriod}).`}
              />
              <div className="csd-legend" aria-hidden>
                <span className="csd-legend__item">
                  <i className="csd-legend__dot csd-legend__dot--top" />
                  Top 3
                </span>
                <span className="csd-legend__item">
                  <i className="csd-legend__dot csd-legend__dot--page" />
                  Page 1
                </span>
                <span className="csd-legend__item">
                  <i className="csd-legend__dot csd-legend__dot--rest" />
                  Page 2+
                </span>
              </div>
            </div>

            <div className="csd-table-wrap">
              <div className="csd-table-scroll">
                <table className="csd-table">
                  <thead>
                    <tr>
                      <th>Keyword</th>
                      <th>Baseline</th>
                      <th>Current rank</th>
                      <th>Movement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.keywords.map((row: KeywordRow) => (
                      <tr key={row.keyword}>
                        <td className="csd-table__kw">{row.keyword}</td>
                        <td className="csd-table__base">{row.baseline}</td>
                        <td>
                          <span className={`csd-rank ${rankModifier(row.ranking)}`}>
                            #{row.ranking}
                          </span>
                        </td>
                        <td>
                          <span className="csd-gain">
                            <TrendingUp size={13} aria-hidden />
                            {gainLabel(row.baseline, row.ranking)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section csd-related">
          <div className="container">
            <FadeIn>
              <SectionHeading
                eyebrow="More proof"
                title="Related case studies"
                subtitle="More campaigns where search visibility turned into measurable rankings."
              />
            </FadeIn>
            <div className="case-studies-grid">
              {related.map((item, index) => (
                <FadeIn key={item.id} delay={index * 0.06}>
                  <CaseStudyCard
                    tag={item.tag}
                    title={item.title}
                    summary={item.summary}
                    metrics={item.metrics}
                    href={item.href}
                    image={item.image}
                    platform={item.platform}
                    market={item.market}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FinalCTA
        title="Want results like these?"
        subtitle="Share your site and goals — we'll map the highest-impact SEO opportunities for the next 90 days."
      />
    </main>
  );
}
