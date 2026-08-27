"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  amount?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.55,
  y = 28,
  once = true,
  amount = 0.2,
  ...rest
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
