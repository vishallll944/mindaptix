"use client";

import { useScrollProgress } from "@/lib/hooks";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[3px] w-full bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
