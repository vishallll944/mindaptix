"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Eye, MousePointerClick, TrendingUp } from "lucide-react";

const BARS = [28, 42, 36, 58, 48, 72, 64, 88, 76, 94, 82, 100];

const FLOATS = [
  {
    id: "1",
    className: "hero-float--1",
    value: "+312%",
    label: "Traffic Growth",
    delay: 0.35,
  },
  {
    id: "2",
    className: "hero-float--2",
    value: "48.2K",
    label: "Clicks",
    icon: MousePointerClick,
    delay: 0.5,
  },
  {
    id: "3",
    className: "hero-float--3",
    value: "1.42M",
    label: "Impressions",
    icon: Eye,
    delay: 0.65,
  },
  {
    id: "4",
    className: "hero-float--4",
    value: "6.4",
    label: "Position",
    icon: TrendingUp,
    delay: 0.8,
  },
] as const;

export function HeroDashboard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="hero__visual">
      <motion.div
        className="hero-dashboard"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-dashboard__header">
          <p className="hero-dashboard__title">Organic performance</p>
          <span className="hero-dashboard__badge">Live</span>
        </div>

        <div className="hero-dashboard__metrics">
          <div className="hero-dashboard__metric">
            <p className="hero-dashboard__metric-label">Clicks</p>
            <p className="hero-dashboard__metric-value">48.2K</p>
            <p className="hero-dashboard__metric-delta">+186%</p>
          </div>
          <div className="hero-dashboard__metric">
            <p className="hero-dashboard__metric-label">Impressions</p>
            <p className="hero-dashboard__metric-value">1.42M</p>
            <p className="hero-dashboard__metric-delta">+142%</p>
          </div>
          <div className="hero-dashboard__metric">
            <p className="hero-dashboard__metric-label">CTR</p>
            <p className="hero-dashboard__metric-value">3.4%</p>
            <p className="hero-dashboard__metric-delta">+0.9pt</p>
          </div>
          <div className="hero-dashboard__metric">
            <p className="hero-dashboard__metric-label">Position</p>
            <p className="hero-dashboard__metric-value">6.4</p>
            <p className="hero-dashboard__metric-delta">−12.3</p>
          </div>
        </div>

        <div className="hero-dashboard__chart" aria-hidden>
          {BARS.map((height, index) => (
            <motion.span
              key={index}
              className="hero-dashboard__bar"
              style={{ height: `${height}%` }}
              initial={prefersReducedMotion ? false : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.35 + index * 0.04,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {FLOATS.map((card) => {
        const Icon = "icon" in card ? card.icon : undefined;
        return (
          <motion.div
            key={card.id}
            className={`hero-float ${card.className}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: card.delay }}
          >
            {Icon ? (
              <span className="hero-float__icon" aria-hidden>
                <Icon />
              </span>
            ) : (
              <span className="hero-float__icon" aria-hidden>
                <TrendingUp />
              </span>
            )}
            <span>
              {card.value} {card.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
