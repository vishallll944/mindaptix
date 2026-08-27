import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Globe,
  Link2,
  Map,
  MapPin,
  Megaphone,
  MessageCircleQuestion,
  MessageSquareQuote,
  Search,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Search,
  Sparkles,
  Bot,
  MessageSquareQuote,
  MessageCircleQuestion,
  MapPin,
  Map,
  ShoppingCart,
  ShoppingBag,
  Wrench,
  Globe,
  Globe2: Globe,
  Target,
  Megaphone,
  TrendingUp,
  Settings2,
  Link2,
};

export type ServiceCardProps = {
  number?: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
  className?: string;
};

export function ServiceCard({
  number,
  title,
  description,
  href,
  icon = "Search",
  className = "",
}: ServiceCardProps) {
  const Icon = ICONS[icon] ?? Search;

  return (
    <Link href={href} className={`service-card${className ? ` ${className}` : ""}`}>
      <div className="service-card__top">
        <span className="service-card__icon" aria-hidden>
          <Icon />
        </span>
        {number ? <span className="service-card__num">{number}</span> : null}
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      <span className="service-card__link">
        Learn More
        <ArrowRight aria-hidden />
      </span>
    </Link>
  );
}
