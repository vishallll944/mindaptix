import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudyCardProps = {
  tag: string;
  title: string;
  metrics: CaseStudyMetric[];
  href?: string;
  featured?: boolean;
  className?: string;
};

export function CaseStudyCard({
  tag,
  title,
  metrics,
  href = "/case-studies",
  featured = false,
  className = "",
}: CaseStudyCardProps) {
  return (
    <article
      className={`case-card${featured ? " case-card--featured" : ""}${className ? ` ${className}` : ""}`}
    >
      <div className="case-card__media" aria-hidden>
        <div className="case-card__media-grid">
          {metrics.slice(0, 4).map((metric) => (
            <div key={metric.label} className="case-card__media-cell">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="case-card__body">
        <p className="case-card__tag">{tag}</p>
        <h3 className="case-card__title">{title}</h3>
        <div className="case-card__metrics">
          {metrics.map((metric) => (
            <div key={metric.label} className="case-card__metric">
              <span className="case-card__metric-value">{metric.value}</span>
              <span className="case-card__metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
        <Link href={href} className="case-card__cta">
          View case study
          <ArrowUpRight aria-hidden />
        </Link>
      </div>
    </article>
  );
}
