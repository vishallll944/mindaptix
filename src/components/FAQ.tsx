"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeInView";

const FAQS = [
  {
    q: "How long does SEO take?",
    a: "Most businesses begin seeing meaningful movement within 3–6 months. Stronger, compounding growth typically builds over 6–12 months depending on competition, site health and strategy scope.",
  },
  {
    q: "What is AI SEO?",
    a: "AI SEO optimizes your brand for visibility across AI-powered search platforms — including Google AI Overviews, ChatGPT, Gemini and Perplexity — by combining traditional SEO fundamentals with entity-rich, citation-worthy content.",
  },
  {
    q: "What is GEO?",
    a: "Generative Engine Optimization (GEO) helps your brand get mentioned and recommended inside AI-generated answers, summaries and recommendations from generative search engines.",
  },
  {
    q: "What is AEO?",
    a: "Answer Engine Optimization (AEO) focuses on making your brand the trusted answer for search queries across search engines, AI assistants and voice search platforms.",
  },
  {
    q: "Do you provide website development?",
    a: "Yes. We build fast, conversion-focused websites with modern stacks, accessibility best practices and SEO architecture baked in from day one.",
  },
  {
    q: "How do you measure growth?",
    a: "We track rankings, organic traffic, qualified leads, conversions, revenue attribution, AI citations, GBP actions and content performance — with transparent dashboards and monthly strategic reviews.",
  },
  {
    q: "Do you work with international businesses?",
    a: "Absolutely. We serve brands globally with multilingual SEO, international site architecture and market-specific growth strategies.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <FadeIn>
          <div className="text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-accent-blue">
              FAQ
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
              Common Questions
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Everything you need to know about working with us.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={faq.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-text-primary">{faq.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-accent-blue">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="border-t border-slate-50 px-6 pb-5 pt-3 text-sm leading-relaxed text-text-secondary">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
