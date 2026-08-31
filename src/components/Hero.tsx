"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeInView";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroThreeScene } from "@/components/HeroThreeScene";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 gradient-soft" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 animate-blob rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 animate-blob rounded-full bg-teal-200/30 blur-3xl [animation-delay:3s]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 animate-blob rounded-full bg-cyan-100/40 blur-3xl [animation-delay:6s]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8">
        <div>
          <FadeIn delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-4 py-2 text-sm font-medium text-accent-blue backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              AI-Powered Digital Growth Agency
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              Turn Digital Visibility Into{" "}
              <span className="gradient-text">Real Business Growth.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
              We combine AI-powered SEO, performance marketing, creative strategy,
              and intelligent web experiences to help ambitious brands grow faster.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-accent-blue px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-blue-700"
                >
                  Get Free Growth Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-text-primary backdrop-blur-sm transition-all hover:border-accent-blue/30 hover:shadow-soft"
                >
                  Explore Our Services
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-text-secondary">
              {["AI SEO", "GEO & AEO", "Performance Ads", "Web Development"].map(
                (tag) => (
                  <span key={tag} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                    {tag}
                  </span>
                )
              )}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-200/40 via-teal-100/30 to-cyan-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-white/70 via-blue-50/40 to-teal-50/40 p-1 shadow-[0_20px_60px_rgba(37,99,235,0.12)] backdrop-blur-sm">
              <HeroThreeScene />
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
