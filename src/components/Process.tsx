"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Lightbulb,
  Rocket,
  LineChart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/process.js";
import { FadeIn } from "@/components/ui/FadeInView";

const STEP_ICONS: LucideIcon[] = [Search, Lightbulb, Rocket, LineChart, TrendingUp];

const STEP_COLORS = [
  "from-blue-500 to-blue-600",
  "from-teal-500 to-teal-600",
  "from-teal-500 to-cyan-600",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-600",
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.75], ["0%", "100%"]);

  return (
    <section id="process" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-teal-200/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-cyan-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-cyan">
              How We Work
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
              A Proven Growth Framework
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              From discovery to scale — a transparent, data-driven process built for measurable
              results.
            </p>
          </div>
        </FadeIn>

        <div ref={containerRef} className="relative mt-16">
          {/* Desktop progress track */}
          <div className="absolute left-[10%] right-[10%] top-[2.75rem] hidden h-1 overflow-hidden rounded-full bg-slate-100 lg:block">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i] ?? Search;
              const gradient = STEP_COLORS[i] ?? STEP_COLORS[0];

              return (
                <FadeIn key={step.number} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative h-full"
                  >
                    <div className="relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:border-blue-100 hover:shadow-glow">
                      {/* Step badge */}
                      <div className="relative z-10 mb-5 flex items-center gap-3">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg transition-transform group-hover:scale-110`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-2xl font-extrabold text-slate-200 transition-colors group-hover:text-slate-300">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-text-primary">{step.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                        {step.desc}
                      </p>

                      <div
                        className={`mt-4 h-1 w-0 rounded-full bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:w-full`}
                      />
                    </div>

                    {/* Mobile connector */}
                    {i < PROCESS_STEPS.length - 1 ? (
                      <div className="absolute -bottom-4 left-1/2 z-0 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-accent-blue/40 to-transparent sm:hidden" />
                    ) : null}
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
