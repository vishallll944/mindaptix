"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, ArrowRight, X } from "lucide-react";
import { SITE } from "@/data/site.js";
import { NAV_LINKS, NAV_SERVICES, MEGA_PROMOS } from "@/data/nav.js";
import { INDUSTRIES } from "@/data/industries.js";
import { LOCATIONS } from "@/data/locations.js";

type MegaKey = keyof typeof MEGA_PROMOS;

function MegaPromo({ menu, onNavigate }: { menu: MegaKey; onNavigate?: () => void }) {
  const promo = MEGA_PROMOS[menu];
  return (
    <div className="mega-menu__promo">
      <div className="mega-menu__promo-stat">
        <span>{promo.statLabel}</span>
        <strong>{promo.statValue}</strong>
      </div>
      <p className="mega-menu__promo-title">{promo.title}</p>
      <p className="mega-menu__promo-text">{promo.text}</p>
      <Link href="/contact" className="btn btn-primary btn-sm" onClick={onNavigate}>
        Get Free SEO Audit
        <ArrowRight className="btn-arrow" aria-hidden />
      </Link>
    </div>
  );
}

function MegaContent({ menu, onNavigate }: { menu: MegaKey; onNavigate?: () => void }) {
  let body: ReactNode;

  if (menu === "services") {
    body = (
      <div className="mega-menu__grid">
        {NAV_SERVICES.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="mega-menu__item"
            onClick={onNavigate}
          >
            <div>
              <p className="mega-menu__title">{service.title}</p>
              <p className="mega-menu__desc">{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  } else if (menu === "industries") {
    body = (
      <div className="mega-menu__grid">
        {INDUSTRIES.map((industry) => (
          <Link
            key={industry.id}
            href={industry.href}
            className="mega-menu__item"
            onClick={onNavigate}
          >
            <div>
              <p className="mega-menu__title">SEO for {industry.name}</p>
              <p className="mega-menu__desc">{industry.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  } else {
    body = (
      <div className="mega-menu__grid mega-menu__grid--locations">
        {LOCATIONS.map((location) => (
          <Link
            key={location.code}
            href={location.href}
            className="mega-menu__item mega-menu__item--location"
            onClick={onNavigate}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://flagcdn.com/${location.code}.svg`}
              alt=""
              className="mega-menu__flag"
              loading="lazy"
            />
            <div>
              <p className="mega-menu__title">SEO Services {location.name}</p>
              <p className="mega-menu__desc">{location.brands} businesses helped</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="mega-menu__layout">
      <div className="mega-menu__main">
        {body}
        <div className="mega-menu__footer">
          <p className="mega-menu__footer-text">
            {menu === "services"
              ? "Need help choosing a service?"
              : menu === "industries"
                ? "Don't see your industry? We adapt to any market."
                : "Serving businesses worldwide."}
          </p>
          <Link
            href={menu === "services" ? "/services" : menu === "industries" ? "/industries" : "/locations"}
            style={{ fontWeight: 700, color: "var(--accent-dark)", whiteSpace: "nowrap" }}
            onClick={onNavigate}
          >
            View all <ArrowRight size={14} style={{ display: "inline" }} />
          </Link>
        </div>
      </div>
      <MegaPromo menu={menu} onNavigate={onNavigate} />
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<MegaKey | null>(null);

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

  return (
    <>
      <header className={`navbar${scrolled ? " is-scrolled" : ""}${mobileOpen ? " is-open" : ""}`}>
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo">
            <span className="navbar__logo-mark">M</span>
            <span>
              {SITE.shortName}
              <span style={{ fontWeight: 400, color: "var(--secondary)" }}> Digital</span>
            </span>
          </Link>

          <nav className="navbar__nav" aria-label="Main">
            {NAV_LINKS.map((link) =>
              link.mega ? (
                <div
                  key={link.label}
                  className={`navbar__item has-mega${megaOpen === link.mega ? " is-open" : ""}`}
                  onMouseEnter={() => setMegaOpen(link.mega as MegaKey)}
                  onMouseLeave={() => setMegaOpen(null)}
                >
                  <Link
                    href={link.href}
                    className="navbar__link"
                    aria-expanded={megaOpen === link.mega}
                  >
                    {link.label}
                    <ChevronDown aria-hidden />
                  </Link>
                  <div className="mega-menu">
                    <MegaContent
                      menu={link.mega as MegaKey}
                      onNavigate={() => setMegaOpen(null)}
                    />
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="navbar__link">
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="navbar__actions">
            <Link href="/contact" className="btn btn-primary btn-sm navbar__cta">
              Get Free Audit
            </Link>
            <button
              type="button"
              className="navbar__toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="navbar__toggle-bars" aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-drawer-overlay${mobileOpen ? " is-open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      <div className={`mobile-drawer${mobileOpen ? " is-open" : ""}`}>
        <div className="mobile-drawer__header">
          <span className="navbar__logo" style={{ fontSize: "1rem" }}>
            <span className="navbar__logo-mark">M</span>
            {SITE.shortName} Digital
          </span>
          <button
            type="button"
            className="mobile-drawer__close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <X size={18} />
          </button>
        </div>
        <nav className="mobile-drawer__nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="mobile-drawer__link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-drawer__footer">
          <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Get Free Audit
          </Link>
        </div>
      </div>
    </>
  );
}
