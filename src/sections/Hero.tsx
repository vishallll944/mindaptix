"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { HeroDashboard } from "@/components/HeroDashboard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const AVATARS = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan&backgroundColor=c0aede",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam&backgroundColor=d1d4f9",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey&backgroundColor=ffd5dc",
];

const HIGHLIGHTS = [
  "8+ Years SEO Experience",
  "750+ Businesses Helped",
  "AI + Human SEO Strategy",
  "100% White Hat Approach",
];

const HERO_STATS = [
  { value: "750+", label: "Clients Served" },
  { value: "510+", label: "Projects Completed" },
  { value: "11,900+", label: "Hours Worked" },
  { value: "100%", label: "Job Success Score" },
  { value: "Top Rated", label: "Upwork Freelancer" },
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
              Search is changing. Businesses need more than traditional SEO. We combine
              artificial intelligence, advanced SEO methods, and human expertise to help
              clients grow across Google Search, AI platforms, and new search experiences.
            </p>
            <div className="hero__actions">
              <Button href="/contact" size="lg">
                Get Your Free AI SEO Audit
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
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
                <p className="hero__proof-label">4.9/5 from 250+ Upwork &amp; Google reviews</p>
              </div>
            </div>

            <ul className="hero-highlights">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="hero-highlights__item">
                  <span className="hero-highlights__icon" aria-hidden>
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div>
            <HeroDashboard />
            <div className="hero-stats-bar">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="hero-stats-bar__item">
                  <p className="hero-stats-bar__value">{stat.value}</p>
                  <p className="hero-stats-bar__label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
