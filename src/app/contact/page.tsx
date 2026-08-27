import Link from "next/link";
import { SITE } from "@/data/site.js";

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <p className="eyebrow">Contact</p>
        <h1 className="section-title" style={{ maxWidth: "20ch" }}>
          Get Your Free SEO Audit
        </h1>
        <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
          Share your website and we&apos;ll show where your biggest SEO opportunities are —
          rankings, technical issues, content gaps, local visibility and lead tracking.
        </p>
        <form className="contact-form">
          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Your name
            </label>
            <input id="name" className="form-input" placeholder="Your name" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Work email
            </label>
            <input id="email" className="form-input" placeholder="Work email" type="email" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="website">
              Website URL
            </label>
            <input id="website" className="form-input" placeholder="https://" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="goals">
              Goals
            </label>
            <textarea id="goals" className="form-textarea" placeholder="Tell us about your goals" />
          </div>
          <button type="button" className="btn btn-primary w-full">
            Request Free Audit
          </button>
        </form>
        <div style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
          <p>
            Email:{" "}
            <a className="text-accent" href={SITE.emailHref}>
              {SITE.email}
            </a>
          </p>
          <p>
            Call:{" "}
            <a className="text-accent" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
          </p>
          <Link
            href="/"
            className="text-accent"
            style={{ display: "inline-block", marginTop: "1rem", fontWeight: 700 }}
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
