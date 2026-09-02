import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type BlogCardProps = {
  tag: string;
  title: string;
  read: string;
  excerpt?: string;
  href?: string;
  date?: string;
  image?: string;
  featured?: boolean;
  className?: string;
};

const TAG_SHORT: Record<string, string> = {
  "AI SEO": "AI",
  "Local SEO": "Local",
  "Digital Marketing": "Growth",
};

export function BlogCard({
  tag,
  title,
  read,
  excerpt,
  href = "/blog",
  date,
  image,
  featured = false,
  className = "",
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className={`blog-card${featured ? " blog-card--featured" : ""}${className ? ` ${className}` : ""}`}
    >
      <div className="blog-card__media">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            className="blog-card__image"
            sizes={featured ? "(max-width: 900px) 100vw, 45vw" : "(max-width: 768px) 100vw, 50vw"}
          />
        ) : (
          <>
            <div className="blog-card__media-pattern" aria-hidden />
            <span className="blog-card__media-label" aria-hidden>
              {TAG_SHORT[tag] ?? "SEO"}
            </span>
          </>
        )}
        <span className="blog-card__media-tag">{tag}</span>
      </div>

      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__tag">{tag}</span>
          <span className="blog-card__read">{read}</span>
        </div>

        <h3 className="blog-card__title">{title}</h3>

        {excerpt ? <p className="blog-card__excerpt">{excerpt}</p> : null}

        <div className="blog-card__footer">
          {date ? <span className="blog-card__date">{date}</span> : <span />}
          <span className="blog-card__cta">
            Read article
            <span className="blog-card__arrow" aria-hidden>
              <ArrowUpRight size={16} />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
