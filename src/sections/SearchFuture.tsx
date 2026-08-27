"use client";

import {
  Bot,
  Gem,
  Mic,
  Radar,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SEARCH_PLATFORMS } from "@/data/framework.js";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const ICONS: Record<string, LucideIcon> = {
  Search,
  Sparkles,
  Bot,
  Gem,
  Orbit: Radar,
  Mic,
  Radar,
};

export function SearchFuture() {
  return (
    <section className="section search-future">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="The future of search"
            title="Your buyers already search beyond Google"
            subtitle="We position your brand where decisions happen — classic search and the new AI answer engines."
            dark
          />
        </FadeIn>

        <div className="search-future__platforms">
          {SEARCH_PLATFORMS.map((platform, index) => {
            const Icon = ICONS[platform.icon] ?? Search;
            return (
              <FadeIn key={platform.id} delay={index * 0.06}>
                <article className="search-platform">
                  <span className="search-platform__icon" aria-hidden>
                    <Icon size={22} />
                  </span>
                  <h3 className="search-platform__name">{platform.name}</h3>
                  <p className="search-platform__desc">{platform.desc}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
