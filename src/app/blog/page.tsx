import type { Metadata } from "next";
import { BLOG } from "@/data/blog.js";
import { SITE } from "@/data/site.js";
import { BlogCard } from "@/components/cards/BlogCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeInView";

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

export default function BlogPage() {
  const [featured, ...rest] = BLOG;

  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Ideas for modern search growth."
        lead="Practical guides on AI SEO, local discovery, and answer-engine visibility — written for operators who care about outcomes."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5">
          {featured ? (
            <FadeIn>
              <BlogCard
                tag={featured.tag}
                title={featured.title}
                excerpt={featured.excerpt}
                read={featured.read}
                href={featured.href}
                date={formatDate(featured.date)}
                featured
              />
            </FadeIn>
          ) : null}

          <div className={`grid gap-6 ${featured ? "mt-6" : ""} md:grid-cols-2`}>
            {rest.map((post, index) => (
              <FadeIn key={post.id} delay={0.08 + index * 0.06}>
                <BlogCard
                  tag={post.tag}
                  title={post.title}
                  excerpt={post.excerpt}
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
