import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

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

const TAG_STYLES: Record<string, { badge: string; gradient: string }> = {
  "AI SEO": {
    badge: "bg-teal-100 text-teal-700",
    gradient: "from-teal-600 via-teal-600 to-indigo-700",
  },
  "Local SEO": {
    badge: "bg-cyan-100 text-cyan-700",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  },
  "Digital Marketing": {
    badge: "bg-blue-100 text-blue-700",
    gradient: "from-blue-500 via-indigo-500 to-teal-600",
  },
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
  const styles = TAG_STYLES[tag] ?? {
    badge: "bg-slate-100 text-slate-700",
    gradient: "from-blue-500 via-indigo-500 to-teal-600",
  };

  return (
    <Link
      href={href}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-glow ${
        featured ? "md:flex-row md:items-stretch" : ""
      } ${className}`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "md:w-2/5 md:min-h-[280px]" : "aspect-[16/10]"
        }`}
      >
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={featured ? "40vw" : "33vw"}
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient}`}>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute bottom-4 right-4 h-24 w-24 rounded-full bg-white/15 blur-xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
            </div>
            <div className="absolute inset-0 flex items-end p-5">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                {tag}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:justify-center md:p-8" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}>
            {tag}
          </span>
          <span className="flex items-center gap-1 text-xs text-text-secondary">
            <Clock className="h-3.5 w-3.5" />
            {read}
          </span>
        </div>

        <h3
          className={`mt-4 font-bold leading-snug text-text-primary transition-colors group-hover:text-accent-blue ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {title}
        </h3>

        {excerpt ? (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text-secondary">
            {excerpt}
          </p>
        ) : null}

        <div className="mt-auto flex items-center justify-between pt-5">
          {date ? (
            <span className="flex items-center gap-1.5 text-xs font-medium text-text-secondary">
              <Calendar className="h-3.5 w-3.5" />
              {date}
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue">
            Read article
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
