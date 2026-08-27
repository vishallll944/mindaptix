"use client";

import Link from "next/link";
import {
  Bot,
  ChevronDown,
  FileText,
  Globe,
  Map,
  MapPin,
  Megaphone,
  MessageCircle,
  Settings,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, NAV_SERVICES } from "@/data/nav.js";
import { Button } from "@/components/ui/Button";

const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp,
  Sparkles,
  Bot,
  MessageCircleQuestion: MessageCircle,
  MessageCircle,
  MapPin,
  Map,
  ShoppingBag,
  Settings2: Settings,
  Settings,
  FileEdit: FileText,
  FileText,
  Globe2: Globe,
  Globe,
  Target,
  Megaphone,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`navbar${scrolled ? " is-scrolled" : ""}${mobileOpen ? " is-open" : ""}`}
    >
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo" aria-label="4Core Digital home">
          <span className="navbar__logo-mark" aria-hidden>
            4C
          </span>
          <span>
            4Core
            <span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="navbar__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            if ("mega" in link && link.mega) {
              return (
                <div
                  key={link.href}
                  className={`navbar__item has-mega${megaOpen ? " is-open" : ""}`}
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    type="button"
                    className="navbar__link"
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    onClick={() => setMegaOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown aria-hidden />
                  </button>

                  <div className="mega-menu" role="region" aria-label="Services">
                    <div className="mega-menu__grid">
                      {NAV_SERVICES.map((service) => {
                        const Icon = ICON_MAP[service.icon] ?? Sparkles;
                        return (
                          <Link
                            key={service.href + service.title}
                            href={service.href}
                            className="mega-menu__item"
                            onClick={() => setMegaOpen(false)}
                          >
                            <span className="mega-menu__icon" aria-hidden>
                              <Icon />
                            </span>
                            <span>
                              <span className="mega-menu__title">{service.title}</span>
                              <span className="mega-menu__desc">{service.desc}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mega-menu__footer">
                      <p className="mega-menu__footer-text">
                        Traffic growth up to <strong className="text-accent">+312%</strong>
                      </p>
                      <Button href="/contact" size="sm">
                        Get Free SEO Audit
                      </Button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={link.href} href={link.href} className="navbar__link">
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="navbar__actions">
          <Button href="/contact" className="navbar__cta" size="sm">
            Get Free SEO Audit
          </Button>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="navbar__toggle-bars" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`mobile-drawer-overlay${mobileOpen ? " is-open" : ""}`}
        onClick={closeMobile}
        aria-hidden={!mobileOpen}
      />

      <aside
        className={`mobile-drawer${mobileOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-drawer__header">
          <Link href="/" className="navbar__logo" onClick={closeMobile}>
            <span className="navbar__logo-mark" aria-hidden>
              4C
            </span>
            <span>
              4Core
              <span className="text-accent">.</span>
            </span>
          </Link>
          <button
            type="button"
            className="mobile-drawer__close"
            aria-label="Close menu"
            onClick={closeMobile}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mobile-drawer__nav">
          {NAV_LINKS.map((link) => {
            if ("mega" in link && link.mega) {
              return (
                <div key={link.href}>
                  <button
                    type="button"
                    className="mobile-drawer__link"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      style={{
                        transform: mobileServicesOpen ? "rotate(180deg)" : undefined,
                      }}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`mobile-drawer__services${mobileServicesOpen ? " is-open" : ""}`}
                  >
                    {NAV_SERVICES.map((service) => (
                      <Link
                        key={service.href + service.title}
                        href={service.href}
                        className="mobile-drawer__service"
                        onClick={closeMobile}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-drawer__link"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mobile-drawer__footer">
          <Button href="/contact" className="w-full" onClick={closeMobile}>
            Get Free SEO Audit
          </Button>
          <p className="text-muted" style={{ fontSize: "0.8125rem" }}>
            ceo@4coredigital.com · +91 991-499-6399
          </p>
        </div>
      </aside>
    </header>
  );
}
