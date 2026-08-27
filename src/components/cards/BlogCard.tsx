import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type BlogCardProps = {
  tag: string;
  title: string;
  read: string;
  href?: string;
  date?: string;
  image?: string;
  className?: string;
};

export function BlogCard({
  tag,
  title,
  read,
  href = "/blog",
  date,
  image,
  className = "",
}: BlogCardProps) {
  return (
    <Link href={href} className={`blog-card${className ? ` ${className}` : ""}`}>
      <div className="blog-card__media">
        {image ? (
          <Image src={image} alt="" width={640} height={400} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        ) : (
          <>
            <div className="blog-card__media-pattern" aria-hidden />
            <span className="blog-card__media-label">{tag}</span>
          </>
        )}
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__tag">{tag}</span>
          <span className="blog-card__read">{read}</span>
        </div>
        <h3 className="blog-card__title">{title}</h3>
        <div className="blog-card__footer">
          <span className="blog-card__date">{date ?? " "}</span>
          <span className="blog-card__arrow" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
