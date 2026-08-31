"use client";

import { motion } from "framer-motion";
import { Check, BarChart3, Brain, Eye, Users, Target, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeInView";

const POINTS = [
  { text: "Data-driven decisions", icon: BarChart3 },
  { text: "AI-powered strategies", icon: Brain },
  { text: "Transparent reporting", icon: Eye },
  { text: "Experienced specialists", icon: Users },
  { text: "Conversion-focused execution", icon: Target },
  { text: "Long-term growth mindset", icon: TrendingUp },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <FadeIn direction="right">
          <div className="relative mx-auto aspect-square max-w-lg">
            <div className="absolute inset-0 animate-blob rounded-full bg-gradient-to-br from-blue-200/40 to-purple-200/40 blur-3xl" />
            <div className="relative flex h-full items-center justify-center rounded-[2.5rem] border border-white/60 bg-white/50 p-8 shadow-glow backdrop-blur-sm">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute h-[88%] w-[88%] rounded-full border border-dashed border-blue-300/50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute h-[68%] w-[68%] rounded-full border border-purple-200/60"
              />
              <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-accent-blue to-accent-purple text-white shadow-xl">
                <p className="text-4xl font-extrabold">360°</p>
                <p className="text-sm font-medium text-blue-100">Growth</p>
              </div>

              {["SEO", "AI", "Ads", "CRO"].map((tag, i) => {
                const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
                const r = 44;
                return (
                  <motion.span
                    key={tag}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity }}
                    className="absolute rounded-xl border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-accent-blue shadow-soft"
                    style={{
                      left: `${50 + Math.cos(angle) * r}%`,
                      top: `${50 + Math.sin(angle) * r}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {tag}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <span className="mb-4 inline-block rounded-full border border-purple-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-purple">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
              Strategy Meets Execution.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              We don&apos;t just deliver reports — we build growth systems that
              compound. Strategy, technology and creativity working as one.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {POINTS.map((point, i) => {
              const Icon = point.icon;
              return (
                <FadeIn key={point.text} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft transition-shadow hover:shadow-glow"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 text-accent-blue">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-text-primary">{point.text}</span>
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
