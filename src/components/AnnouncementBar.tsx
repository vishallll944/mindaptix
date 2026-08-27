"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/data/site.js";

export type AnnouncementBarProps = {
  message?: string;
  ctaLabel?: string;
  ctaHref?: string;
  dismissible?: boolean;
};

export function AnnouncementBar({
  message = SITE.announcement,
  ctaLabel = SITE.announcementCta,
  ctaHref = "/contact",
  dismissible = true,
}: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-bar" role="region" aria-label="Announcement">
      <div className="announcement-bar__text">
        <span className="announcement-bar__dot" aria-hidden />
        <span>{message}</span>
      </div>
      <Link href={ctaHref} className="announcement-bar__cta">
        {ctaLabel}
        <ArrowRight size={14} aria-hidden />
      </Link>
      {dismissible ? (
        <button
          type="button"
          className="announcement-bar__close"
          aria-label="Dismiss announcement"
          onClick={() => setVisible(false)}
        >
          <X size={14} />
        </button>
      ) : null}
    </div>
  );
}
