"use client";

import { Star } from "lucide-react";
import { SITE } from "@/data/site.js";
import { TESTIMONIALS, TESTIMONIALS_SUMMARY } from "@/data/testimonials.js";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="Client voices"
            title="What growth feels like when search starts working"
            subtitle={`Verified feedback from brands that trusted ${SITE.name} with SEO and AI visibility.`}
          />
          <div className="testimonials__rating">
            <p className="testimonials__score">{TESTIMONIALS_SUMMARY.score.toFixed(1)}</p>
            <div>
              <div className="testimonials__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" aria-hidden />
                ))}
              </div>
              <p className="text-muted" style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                {TESTIMONIALS_SUMMARY.label} · {TESTIMONIALS_SUMMARY.count}
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((review, index) => (
            <FadeIn key={review.id} delay={index * 0.06}>
              <ReviewCard
                quote={review.quote}
                project={review.project}
                author={review.name}
                rating={review.rating}
                verified={review.verified}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
