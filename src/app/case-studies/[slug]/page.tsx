import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink } from "lucide-react";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies.js";
import { SITE } from "@/data/site.js";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/ui/FadeInView";
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

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main>
      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36">
        <div className="absolute inset-0 gradient-soft" />
        <div className="relative mx-auto max-w-5xl px-5">
          <FadeIn>
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-accent-blue"
            >
              <ArrowLeft className="h-4 w-4" />
              All case studies
            </Link>

            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-blue">
                  {study.tag}
                </span>
                <h1 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
                  {study.title}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">{study.summary}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={study.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-accent-blue px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-blue-700"
                  >
                    Visit {study.websiteLabel}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  {study.pdfHref ? (
                    <a
                      href={study.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-text-primary transition-all hover:border-accent-blue/30 hover:shadow-soft"
                    >
                      Download PDF
                      <Download className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-glow">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <div className="grid gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Platform", value: study.platform },
                { label: "Market", value: study.market },
                { label: "Ranking period", value: study.rankingPeriod },
                {
                  label: "Website",
                  value: study.websiteLabel,
                  href: study.website,
                },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 px-4 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-bold text-accent-blue hover:underline"
                    >
                      {item.value}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <p className="mt-1 font-bold text-text-primary">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {study.metrics.map((metric: CaseStudyMetric) => (
                <div
                  key={metric.label}
                  className="gradient-border rounded-2xl bg-white p-6 text-center shadow-soft"
                >
                  <p className="text-3xl font-extrabold tracking-tight text-text-primary">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <h2 className="text-2xl font-extrabold tracking-tight text-text-primary md:text-3xl">
              Keyword rankings
            </h2>
            <p className="mt-2 text-text-secondary">
              Baseline vs. current rankings for tracked keywords ({study.rankingPeriod}).
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/80">
                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-text-secondary">
                        Keyword
                      </th>
                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-text-secondary">
                        Baseline
                      </th>
                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-text-secondary">
                        Ranking
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.keywords.map((row: KeywordRow, i: number) => (
                      <tr
                        key={row.keyword}
                        className={`border-b border-slate-50 transition-colors hover:bg-blue-50/40 ${
                          i % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                        }`}
                      >
                        <td className="px-5 py-3.5 font-medium text-text-primary">{row.keyword}</td>
                        <td className="px-5 py-3.5 text-text-secondary">{row.baseline}</td>
                        <td className="px-5 py-3.5">
                          <span
                            className={`inline-flex min-w-[2.5rem] items-center justify-center rounded-full px-2.5 py-1 text-xs font-extrabold ${
                              row.ranking <= 3
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            #{row.ranking}
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

      <CTASection
        title="Want results like these?"
        subtitle="Share your site and goals — we'll map the highest-impact SEO opportunities for the next 90 days."
      />
    </main>
  );
}
