import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudyCardProps = {
  tag: string;
  title: string;
  summary?: string;
  metrics: CaseStudyMetric[];
  href?: string;
  featured?: boolean;
  image?: string;
  platform?: string;
  market?: string;
  className?: string;
};

export function CaseStudyCard({
  tag,
  title,
  summary,
  metrics,
  href = "/case-studies",
  featured = false,
  image,
  platform,
  market,
  className = "",
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className={`cs-card${featured ? " cs-card--featured" : ""}${className ? ` ${className}` : ""}`}
    >
      {image ? (
        <div className="cs-card__media">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="cs-card__media-tag">{tag}</span>
        </div>
      ) : null}

      <div className="cs-card__body">
        <div className="cs-card__pills">
          {!image ? <span className="cs-card__tag">{tag}</span> : null}
          {platform ? <span className="cs-card__pill">{platform}</span> : null}
          {market ? <span className="cs-card__pill">{market}</span> : null}
        </div>

        <h3 className="cs-card__title">{title}</h3>
        {summary ? <p className="cs-card__summary">{summary}</p> : null}

        <div className="cs-card__metrics">
          {metrics.slice(0, 3).map((metric) => (
            <div key={metric.label} className="cs-card__metric">
              <p className="cs-card__metric-value">{metric.value}</p>
              <p className="cs-card__metric-label">{metric.label}</p>
            </div>
          ))}
        </div>

        <span className="cs-card__link">
          View case study
          <ArrowUpRight aria-hidden />
        </span>
      </div>
    </Link>
  );
}
