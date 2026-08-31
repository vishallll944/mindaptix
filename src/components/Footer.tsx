import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SITE } from "@/data/site.js";
import { FOOTER_NAV } from "@/data/nav.js";
import { INDUSTRIES } from "@/data/industries.js";

const SOCIAL = [
  { icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: SITE.social.twitter, label: "Twitter" },
  { icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
  { icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
];

const COLUMNS = [
  { heading: "Company", links: FOOTER_NAV.company },
  { heading: "Services", links: FOOTER_NAV.services },
  {
    heading: "Industries",
    links: INDUSTRIES.slice(0, 7).map((i) => ({ label: i.name, href: i.href })),
  },
  { heading: "Resources", links: FOOTER_NAV.resources },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div
          className="site-footer__grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
        >
          <div className="site-footer__brand" style={{ gridColumn: "span 2", minWidth: 240 }}>
            <Link href="/" className="site-footer__logo">
              <span className="navbar__logo-mark">M</span>
              {SITE.name}
            </Link>
            <p className="site-footer__tagline">
              Helping businesses increase rankings, traffic, leads and revenue through SEO
              strategies designed for long-term growth.
            </p>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Get Free SEO Audit
              <ArrowRight className="btn-arrow" aria-hidden />
            </Link>
            <div className="site-footer__contact">
              <a href={SITE.emailHref}>
                <Mail size={14} style={{ display: "inline", marginRight: 6 }} />
                {SITE.email}
              </a>
              <a href={SITE.phoneHref}>
                <Phone size={14} style={{ display: "inline", marginRight: 6 }} />
                {SITE.phone}
              </a>
              <span>
                <MapPin size={14} style={{ display: "inline", marginRight: 6 }} />
                {SITE.address}
              </span>
            </div>
            <div className="site-footer__social" style={{ marginTop: "1.25rem" }}>
              {SOCIAL.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading} className="site-footer__col">
              <h4>{column.heading}</h4>
              <ul>
                {column.links.map((link: { label: string; href: string }) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="site-footer__legal">
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">Terms &amp; Conditions</Link>
            <Link href="/blog">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
