import { BadgeCheck, Star } from "lucide-react";

export type ReviewCardProps = {
  quote: string;
  project: string;
  author?: string;
  rating?: number;
  verified?: boolean;
  className?: string;
};

export function ReviewCard({
  quote,
  project,
  author,
  rating = 5,
  verified = true,
  className = "",
}: ReviewCardProps) {
  return (
    <blockquote className={`review-card${className ? ` ${className}` : ""}`}>
      <div className="review-card__stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? "currentColor" : "none"}
            aria-hidden
          />
        ))}
      </div>
      <p className="review-card__quote">{quote}</p>
      <footer className="review-card__meta">
        <div>
          {author ? <cite className="review-card__project">{author}</cite> : null}
          <p className="review-card__project">{project}</p>
        </div>
        {verified ? (
          <span className="review-card__verified">
            <BadgeCheck aria-hidden />
            Verified Project
          </span>
        ) : null}
      </footer>
    </blockquote>
  );
}
