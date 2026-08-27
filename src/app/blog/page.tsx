import type { Metadata } from "next";
import { BLOG } from "@/data/blog.js";
import { SITE } from "@/data/site.js";
import { BlogCard } from "@/components/cards/BlogCard";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: `Resources & Blog | ${SITE.name}`,
  description:
    "Guides on AI SEO, local SEO, ChatGPT visibility, Google AI Overviews, and practical growth playbooks from 4Core Digital.",
};

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Resources</p>
            <h1 className="page-hero__title">Ideas for modern search growth.</h1>
            <p className="page-hero__lead">
              Practical guides on AI SEO, local discovery, and answer-engine visibility —
              written for operators who care about outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {BLOG.map((post, index) => (
              <FadeIn key={post.id} delay={Math.min(index * 0.06, 0.24)}>
                <BlogCard
                  tag={post.tag}
                  title={post.title}
                  read={post.read}
                  href={post.href}
                  date={formatDate(post.date)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer a custom roadmap?"
        subtitle="Skip the guesswork — get a free AI SEO audit tailored to your site and market."
        secondaryLabel="View services"
        secondaryHref="/services"
      />
    </main>
  );
}
