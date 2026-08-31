"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeInView";

const TESTIMONIALS = [
  {
    quote:
      "Mindaptix transformed our search visibility. Within months we saw meaningful organic growth and a steady stream of qualified leads from AI-powered search.",
    name: "Sarah Chen",
    company: "NovaTech Solutions",
    service: "AI SEO & Performance Marketing",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    quote:
      "Their team doesn't just run campaigns — they think like partners. Transparent reporting, sharp strategy, and execution that actually moves the needle.",
    name: "Marcus Webb",
    company: "Elevate Commerce",
    service: "Google Ads & CRO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    quote:
      "From technical SEO fixes to a beautiful new website, Mindaptix delivered end-to-end. Our local visibility and conversion rate both improved dramatically.",
    name: "Dr. Priya Patel",
    company: "Wellness First Clinic",
    service: "Local SEO & Web Development",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS[active];

  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative overflow-hidden bg-bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <FadeIn>
          <div className="text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-accent-blue">
              Testimonials
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
              What Our Clients Say
            </h2>
          </div>
        </FadeIn>

        <div className="relative mt-14">
          <Quote className="absolute -left-2 -top-6 h-16 w-16 text-blue-100 md:-left-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-soft backdrop-blur-sm md:p-12"
            >
              <blockquote className="text-xl font-medium leading-relaxed text-text-primary md:text-2xl md:leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-8">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-blue-100">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-text-primary">{current.name}</p>
                  <p className="text-sm text-text-secondary">{current.company}</p>
                  <p className="mt-0.5 text-xs font-medium text-accent-blue">
                    {current.service}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-text-primary transition-all hover:border-accent-blue hover:text-accent-blue"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-accent-blue"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-text-primary transition-all hover:border-accent-blue hover:text-accent-blue"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
