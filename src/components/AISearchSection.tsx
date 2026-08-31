"use client";

import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Bot,
  Gem,
  Orbit,
  Mic,
  Brain,
  MessageCircle,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeInView";

const PLATFORMS: { name: string; icon: LucideIcon; color: string; angle: number }[] = [
  { name: "Google Search", icon: Search, color: "#2563EB", angle: -90 },
  { name: "AI Overviews", icon: Sparkles, color: "#7C3AED", angle: -30 },
  { name: "ChatGPT", icon: Bot, color: "#10B981", angle: 30 },
  { name: "Gemini", icon: Gem, color: "#06B6D4", angle: 90 },
  { name: "Perplexity", icon: Orbit, color: "#8B5CF6", angle: 150 },
  { name: "Voice Search", icon: Mic, color: "#F59E0B", angle: 210 },
];

const PILLARS: {
  title: string;
  desc: string;
  icon: LucideIcon;
  gradient: string;
}[] = [
  {
    title: "AI SEO",
    desc: "Optimize for AI-powered search engines and citation-based discovery.",
    icon: Brain,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "GEO",
    desc: "Get recommended inside generative AI answers and summaries.",
    icon: Bot,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "AEO",
    desc: "Become the trusted answer across search, assistants and voice.",
    icon: MessageCircle,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Search Everywhere",
    desc: "Unified visibility across classic search, AI and answer platforms.",
    icon: Globe,
    gradient: "from-emerald-500 to-teal-600",
  },
];

function OrbitDiagram() {
  const radius = 140;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      {/* Outer glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-100/60 to-purple-100/60 blur-2xl" />

      {/* Orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-dashed border-blue-200/60"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full border border-purple-200/40"
      />

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan opacity-30 blur-xl" />
          <div className="relative rounded-2xl border-2 border-white bg-gradient-to-br from-white to-blue-50 px-8 py-6 text-center shadow-glow">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue">
              Central Hub
            </p>
            <p className="mt-1 text-xl font-extrabold gradient-text sm:text-2xl">YOUR BRAND</p>
          </div>
        </motion.div>
      </div>

      {/* Platform nodes */}
      {PLATFORMS.map((platform, i) => {
        const rad = (platform.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        const Icon = platform.icon;

        return (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.08, type: "spring" }}
            className="absolute left-1/2 top-1/2 z-10"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3 py-2 shadow-soft backdrop-blur-sm sm:gap-2.5 sm:px-4 sm:py-2.5"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
                style={{ background: `linear-gradient(135deg, ${platform.color}, ${platform.color}99)` }}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="whitespace-nowrap text-xs font-bold text-text-primary sm:text-sm">
                {platform.name}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

function MobilePlatformList() {
  return (
    <div className="flex flex-wrap justify-center gap-2 lg:hidden">
      {PLATFORMS.map((platform, i) => {
        const Icon = platform.icon;
        return (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 shadow-soft"
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: platform.color }}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-semibold text-text-primary">{platform.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

export function AISearchSection() {
  return (
    <section id="ai-search" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 gradient-soft" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-purple-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-purple">
              AI Search Ecosystem
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              The Future of Search Is{" "}
              <span className="gradient-text">Already Here.</span>
            </h2>
            <p className="mt-5 text-lg text-text-secondary">
              Your customers don&apos;t search in one place anymore. We help your brand show up
              everywhere that matters.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="right">
            <div className="hidden lg:block">
              <OrbitDiagram />
            </div>
            <MobilePlatformList />
            <div className="mt-6 text-center lg:hidden">
              <div className="inline-block rounded-2xl border-2 border-accent-blue/20 bg-gradient-to-br from-white to-blue-50 px-8 py-5 shadow-glow">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent-blue">
                  Central Hub
                </p>
                <p className="mt-1 text-2xl font-extrabold gradient-text">YOUR BRAND</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all hover:border-blue-100 hover:shadow-glow"
                  >
                    <div
                      className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${pillar.gradient} opacity-10 transition-opacity group-hover:opacity-20`}
                    />
                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.gradient} text-white shadow-md`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {pillar.desc}
                    </p>
                    <div
                      className={`mt-4 h-1 w-10 rounded-full bg-gradient-to-r ${pillar.gradient} transition-all duration-300 group-hover:w-full`}
                    />
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
