import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { FOOTER_NAV } from "@/data/nav.js";
import { SITE } from "@/data/site.js";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__logo">
            <span className="navbar__logo-mark" aria-hidden>
              4C
            </span>
            <span>
              4Core
              <span className="text-accent">.</span>
            </span>
          </Link>
          <p className="site-footer__tagline">
            AI-powered SEO &amp; digital growth. Four pillars, one strategy that
            converts search into revenue.
          </p>
          <div className="site-footer__contact">
            <a href={SITE.emailHref}>
              <Mail size={14} aria-hidden style={{ display: "inline", marginRight: 6 }} />
              {SITE.email}
            </a>
            <a href={SITE.phoneHref}>
              <Phone size={14} aria-hidden style={{ display: "inline", marginRight: 6 }} />
              {SITE.phone}
            </a>
          </div>
          <div className="site-footer__social" aria-label="Social links">
            <a
              href={SITE.social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={SITE.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>
            <a
              href={SITE.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="site-footer__col">
          <h4>Company</h4>
          <ul>
            {FOOTER_NAV.company.map((item) => (
              <li key={item.href + item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Services</h4>
          <ul>
            {FOOTER_NAV.services.map((item) => (
              <li key={item.href + item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Resources</h4>
          <ul>
            {FOOTER_NAV.resources.map((item) => (
              <li key={item.href + item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Locations</h4>
          <ul>
            {FOOTER_NAV.locations.map((item) => (
              <li key={item.href + item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "1.25rem" }}>
            <Button href="/contact" size="sm">
              Get Free SEO Audit
            </Button>
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {year} 4Core Digital. All rights reserved.</p>
        <div className="site-footer__legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
