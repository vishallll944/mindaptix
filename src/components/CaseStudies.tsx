"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies.js";
import { FadeIn } from "@/components/ui/FadeInView";

const HOME_CASE_STUDIES = CASE_STUDIES.slice(0, 6);

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-accent-blue">
                Case Studies
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
                Real Work. Real Growth.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:underline"
            >
              View all case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {HOME_CASE_STUDIES.map((study, i) => (
            <FadeIn key={study.id} delay={i * 0.1}>
              <Link
                href={study.href}
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <p className="text-5xl font-extrabold tracking-tight transition-transform group-hover:scale-105">
                      {study.metrics[0].value}
                    </p>
                    <p className="text-sm font-medium text-white/80">
                      {study.growthLabel}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-accent-blue">
                      {study.platform}
                    </span>
                    <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-text-secondary">
                      {study.market}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-text-primary group-hover:text-accent-blue">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">{study.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-blue">
                    View Case Study <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
