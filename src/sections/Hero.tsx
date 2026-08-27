"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { HeroDashboard } from "@/components/HeroDashboard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const AVATARS = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan&backgroundColor=c0aede",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam&backgroundColor=d1d4f9",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey&backgroundColor=ffd5dc",
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden>
        <div className="hero__bg-grid" />
        <div className="hero__glow hero__glow--left" />
        <div className="hero__glow hero__glow--right" />
      </div>

      <div className="container-wide hero__inner">
        <div className="hero__content">
          <FadeIn>
            <p className="hero__eyebrow">
              <span className="hero__eyebrow-line" aria-hidden />
              AI-Powered SEO &amp; Digital Growth Agency
            </p>
            <h1 className="hero__title">
              The Next Generation SEO Agency For{" "}
              <span>AI-Powered Search</span>
            </h1>
            <p className="hero__text">
              Search is changing. We combine AI, advanced SEO, and human expertise
              to grow exposure across Google Search, AI Overviews, ChatGPT, Gemini,
              Perplexity, and new search experiences — so you attract traffic that
              converts into leads and revenue.
            </p>
            <div className="hero__actions">
              <Button href="/contact" size="lg">
                Get Your Free AI SEO Audit
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="btn-on-dark">
                Talk To A Growth Strategist
              </Button>
            </div>
            <div className="hero__proof">
              <div className="hero__avatars" aria-hidden>
                {AVATARS.map((src) => (
                  <span key={src} className="hero__avatar">
                    <Image src={src} alt="" width={36} height={36} unoptimized />
                  </span>
                ))}
              </div>
              <div className="hero__rating">
                <div className="hero__stars" aria-label="4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" aria-hidden />
                  ))}
                </div>
                <p className="hero__proof-label">4.9/5 from 250+ client reviews</p>
              </div>
              <div className="hero__proof-item">
                <p className="hero__proof-value">750+</p>
                <p className="hero__proof-label">Businesses helped</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <HeroDashboard />
        </FadeIn>
      </div>
    </section>
  );
}
