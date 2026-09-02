import type { Metadata } from "next";
import { BookOpen, Clock, Sparkles } from "lucide-react";
import { BLOG } from "@/data/blog.js";
import { SITE } from "@/data/site.js";
import { BlogCard } from "@/components/cards/BlogCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/sections/FinalCTA";

export const metadata: Metadata = {
  title: `Resources & Blog | ${SITE.name}`,
  description:
    "Guides on AI SEO, local SEO, ChatGPT visibility, Google AI Overviews, and practical growth playbooks from Mindaptix Digital.",
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

const TOPICS = ["AI SEO", "Local SEO", "Answer engines", "Growth playbooks"];

export default function BlogPage() {
  const [featured, ...rest] = BLOG;
  const totalReadMins = BLOG.reduce((sum, post) => {
    const mins = Number.parseInt(post.read, 10);
    return sum + (Number.isNaN(mins) ? 0 : mins);
  }, 0);

  return (
    <main>
      <section className="blog-hero">
        <div className="container">
          <FadeIn className="blog-hero__inner">
            <p className="eyebrow">Resources</p>
            <h1 className="blog-hero__title">Ideas for modern search growth</h1>
            <p className="blog-hero__lead">
              Practical guides on AI SEO, local discovery, and answer-engine visibility — written
              for operators who care about outcomes.
            </p>
            <ul className="blog-hero__stats">
              <li className="blog-hero__stat">
                <BookOpen size={15} aria-hidden />
                <span>{BLOG.length}</span> guides
              </li>
              <li className="blog-hero__stat">
                <Clock size={15} aria-hidden />
                <span>{totalReadMins}+</span> min of reading
              </li>
              <li className="blog-hero__stat">
                <Sparkles size={15} aria-hidden />
                Updated for <span>2026</span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="section blog-page">
        <div className="container">
          <div className="blog-topics" aria-label="Topics covered">
            {TOPICS.map((topic, index) => (
              <span
                key={topic}
                className={`blog-topic${index === 0 ? " blog-topic--accent" : ""}`}
              >
                {topic}
              </span>
            ))}
          </div>

          {featured ? (
            <div className="blog-page__featured">
              <FadeIn>
                <BlogCard
                  tag={featured.tag}
                  title={featured.title}
                  excerpt={featured.excerpt}
                  read={featured.read}
                  href={featured.href}
                  date={formatDate(featured.date)}
                  image={featured.image}
                  featured
                />
              </FadeIn>
            </div>
          ) : null}

          <div className="blog-grid">
            {rest.map((post, index) => (
              <FadeIn key={post.id} delay={0.06 + index * 0.06}>
                <BlogCard
                  tag={post.tag}
                  title={post.title}
                  excerpt={post.excerpt}
                  read={post.read}
                  href={post.href}
                  date={formatDate(post.date)}
                  image={post.image}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Prefer a custom roadmap?"
        subtitle="Skip the guesswork — get a free AI SEO audit tailored to your site and market."
      />
    </main>
  );
}
