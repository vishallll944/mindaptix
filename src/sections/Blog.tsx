"use client";

import { BLOG } from "@/data/blog.js";
import { BlogCard } from "@/components/cards/BlogCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <FadeIn>
          <div className="section-header" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.25rem" }}>
            <div>
              <p className="eyebrow">Insights</p>
              <h2 className="section-title section-title-wide">
                Guides for AI SEO, local growth and modern search
              </h2>
              <p className="section-subtitle">
                Practical playbooks your team can put to work this quarter.
              </p>
            </div>
            <Button href="/blog" variant="outline">
              View all articles
            </Button>
          </div>
        </FadeIn>

        <div className="blog-grid">
          {BLOG.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.07}>
              <BlogCard
                tag={post.tag}
                title={post.title}
                read={post.read}
                href={post.href}
                date={post.date}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
