"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { BLOG } from "@/data/blog.js";
import { FadeIn } from "@/components/ui/FadeInView";

const TAG_COLORS: Record<string, string> = {
  "AI SEO": "bg-purple-50 text-accent-purple",
  "Local SEO": "bg-cyan-50 text-accent-cyan",
  "Digital Marketing": "bg-blue-50 text-accent-blue",
};

export function Blog() {
  return (
    <section id="insights" className="bg-bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-accent-purple">
                Insights
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
                Insights For Modern Growth
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:underline"
            >
              View all articles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {BLOG.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.1}>
              <Link
                href={post.href}
                className="group flex h-full flex-col rounded-2xl border border-white/80 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    TAG_COLORS[post.tag] ?? "bg-slate-50 text-text-secondary"
                  }`}
                >
                  {post.tag}
                </span>
                <h3 className="mt-4 flex-1 text-xl font-bold leading-snug text-text-primary group-hover:text-accent-blue">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-text-secondary">
                  <Clock className="h-3.5 w-3.5" />
                  {post.read}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
