"use client";

import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SERVICES } from "@/data/services.js";
import { Button } from "@/components/ui/Button";
import { submitContact, type ContactPayload } from "@/lib/submitContact";

const BUDGET_OPTIONS = [
  "Under $1,000 / month",
  "$1,000 – $3,000 / month",
  "$3,000 – $5,000 / month",
  "$5,000 – $10,000 / month",
  "$10,000+ / month",
  "Not sure yet",
];

type FormErrors = Partial<Record<keyof ContactPayload, string>>;

const INITIAL: ContactPayload = {
  name: "",
  email: "",
  phone: "",
  website: "",
  company: "",
  budget: "",
  service: "",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUrl(value: string) {
  if (!value.trim()) return true;
  try {
    const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    const url = new URL(withProtocol);
    return Boolean(url.hostname.includes("."));
  } catch {
    return false;
  }
}

function validate(values: ContactPayload): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!isValidEmail(values.email.trim())) {
    errors.email = "Enter a valid work email.";
  }
  if (values.phone.trim().length < 7) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!isValidUrl(values.website)) {
    errors.website = "Enter a valid website URL.";
  }
  if (!values.budget) {
    errors.budget = "Select a monthly budget.";
  }
  if (!values.service) {
    errors.service = "Select a service.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Tell us a bit more about your goals (10+ characters).";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setField = <K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await submitContact({
        ...values,
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        website: values.website.trim(),
        company: values.company.trim(),
        message: values.message.trim(),
      });
      setSuccess(true);
      setValues(INITIAL);
    } catch {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="contact-form contact-form__success" role="status">
        <div className="contact-form__success-icon" aria-hidden>
          <CheckCircle2 size={28} />
        </div>
        <h3>Request received</h3>
        <p className="text-muted">
          Thanks — we&apos;ll review your site and follow up with audit insights and next steps.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <Button type="button" variant="outline" onClick={() => setSuccess(false)}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__row">
        <div className="form-field">
          <label className="form-label" htmlFor="contact-name">
            Name *
          </label>
          <input
            id="contact-name"
            className={`form-input${errors.name ? " is-invalid" : ""}`}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name ? (
            <p id="contact-name-error" className="form-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="contact-email">
            Email *
          </label>
          <input
            id="contact-email"
            className={`form-input${errors.email ? " is-invalid" : ""}`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email ? (
            <p id="contact-email-error" className="form-error">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="contact-form__row">
        <div className="form-field">
          <label className="form-label" htmlFor="contact-phone">
            Phone *
          </label>
          <input
            id="contact-phone"
            className={`form-input${errors.phone ? " is-invalid" : ""}`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="contact-phone-error" className="form-error">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="contact-website">
            Website URL
          </label>
          <input
            id="contact-website"
            className={`form-input${errors.website ? " is-invalid" : ""}`}
            name="website"
            type="url"
            inputMode="url"
            placeholder="https://"
            autoComplete="url"
            value={values.website}
            onChange={(e) => setField("website", e.target.value)}
            aria-invalid={Boolean(errors.website)}
            aria-describedby={errors.website ? "contact-website-error" : undefined}
          />
          {errors.website ? (
            <p id="contact-website-error" className="form-error">
              {errors.website}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-company">
          Company
        </label>
        <input
          id="contact-company"
          className="form-input"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => setField("company", e.target.value)}
        />
      </div>

      <div className="contact-form__row">
        <div className="form-field">
          <label className="form-label" htmlFor="contact-budget">
            Monthly budget *
          </label>
          <select
            id="contact-budget"
            className={`form-select${errors.budget ? " is-invalid" : ""}`}
            name="budget"
            value={values.budget}
            onChange={(e) => setField("budget", e.target.value)}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "contact-budget-error" : undefined}
          >
            <option value="">Select budget</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budget ? (
            <p id="contact-budget-error" className="form-error">
              {errors.budget}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="contact-service">
            Services *
          </label>
          <select
            id="contact-service"
            className={`form-select${errors.service ? " is-invalid" : ""}`}
            name="service"
            value={values.service}
            onChange={(e) => setField("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "contact-service-error" : undefined}
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure / Multiple">Not sure / Multiple</option>
          </select>
          {errors.service ? (
            <p id="contact-service-error" className="form-error">
              {errors.service}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-message">
          Message *
        </label>
        <textarea
          id="contact-message"
          className={`form-textarea${errors.message ? " is-invalid" : ""}`}
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder="Goals, timeline, markets, and anything else we should know."
        />
        {errors.message ? (
          <p id="contact-message-error" className="form-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      {submitError ? <p className="form-error">{submitError}</p> : null}

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Sending…" : "Request Free SEO Audit"}
      </Button>
    </form>
  );
}
