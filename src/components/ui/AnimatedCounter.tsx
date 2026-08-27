"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

export type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration: _duration = 1.4,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 80,
    damping: 22,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      motionValue.set(value);
      return;
    }
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (!ref.current) return;
      const formatted =
        decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toLocaleString();
      ref.current.textContent = `${prefix}${formatted}${suffix}`;
    });
    return unsubscribe;
  }, [spring, prefix, suffix, decimals]);

  const fallback =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return (
    <motion.span ref={ref} className={`animated-counter${className ? ` ${className}` : ""}`}>
      {prefix}
      {fallback}
      {suffix}
    </motion.span>
  );
}
