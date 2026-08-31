"use client";

import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/data/site.js";

export function AnnouncementBar() {
  return (
    <div className="announcement-bar" role="region" aria-label="Contact announcement">
      <div className="announcement-bar__text">
        <span className="announcement-bar__dot" aria-hidden />
        <span>Helping Businesses Turn Search Visibility Into Leads, Sales &amp; Revenue</span>
      </div>
      <div className="announcement-bar__contacts">
        <a href={SITE.emailHref} className="announcement-bar__contact">
          <Mail size={14} aria-hidden />
          {SITE.email}
        </a>
        <a href={SITE.phoneHref} className="announcement-bar__contact">
          <Phone size={14} aria-hidden />
          {SITE.phone}
        </a>
      </div>
      <Link href="/contact" className="announcement-bar__cta">
        Get Free SEO Audit
        <ArrowRight size={14} aria-hidden />
      </Link>
    </div>
  );
}
