"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#00FF00" />
      <path
        d="M27.2 16.8h2.4V13h-3.2c-3.1 0-5.2 2.1-5.2 5.2v2.4H19v4h2.2V35h4v-10.4h3.2l.6-4H25.2v-1.6c0-1.3.6-2.2 2-2.2z"
        fill="#1e1e1e"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#00FF00" />
      <rect x="14" y="14" width="20" height="20" rx="6" stroke="#1e1e1e" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="4.5" stroke="#1e1e1e" strokeWidth="2.5" fill="none" />
      <circle cx="30.5" cy="17.5" r="1.5" fill="#1e1e1e" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      aria-hidden="true"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#00FF00" />
      <path
        d="M31.5 19.2c-1.8 0-3.3-1.5-3.3-3.3h-3v11.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1v-3.1c-.3 0-.5-.1-.8-.1-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5V22c1 .7 2.1 1.1 3.3 1.2v-4z"
        fill="#1e1e1e"
      />
    </svg>
  );
}

const SOCIAL_GROUPS = [
  [
    {
      icon: <FacebookIcon />,
      label: "Crafting Lab",
      href: "https://www.facebook.com/CraftingLab.cnx",
    },
    {
      icon: <InstagramIcon />,
      label: "craftinglab.cnx",
      href: "https://www.instagram.com/craftinglab.cnx/",
    },
  ],
  [
    {
      icon: <FacebookIcon />,
      label: "Craft Heart",
      href: "https://www.facebook.com/CraftHeart.cnx",
    },
    {
      icon: <InstagramIcon />,
      label: "craft_heart25",
      href: "https://www.instagram.com/craft_heart25",
    },
    {
      icon: <TikTokIcon />,
      label: "craftheart2025",
      href: "https://www.tiktok.com/@craftheart2025",
    },
  ],
];

type FormFields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

function validate(form: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      const newValue =
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
      setForm((prev) => ({ ...prev, [name]: newValue }));
      setSubmitError("");
      // clear error on change
      if (name in errors) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[name as keyof FormFields];
          return next;
        });
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate(form);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);
      setSubmitError("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Contact form submission failed.");
        }

        setSubmitted(true);
      } catch {
        setSubmitError(
          "Sorry, we couldn't send your message. Please email us directly at craftinglab.co@gmail.com.",
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [form]
  );

  return (
    <div className="cp-page">
      <div className="cp-glow cp-glow-1" />
      <div className="cp-glow cp-glow-2" />

      {/* ── HERO ── */}
      <section className="cp-hero" aria-label="Contact overview">
        <FadeIn direction="up">
          <h1 className="cp-title">CONTACT</h1>
          <p className="cp-desc">
            We develop and design platforms covering all business groups. Using
            technology that focuses on updating to use in the future and expand
            the scope of use (scaling up) flexibly
          </p>
        </FadeIn>
      </section>

      {/* ── INFO SECTION ── */}
      <section className="cp-info-section" aria-label="Business details">
        <FadeIn direction="left">
          <div className="cp-info-left">
            <div className="cp-info-block">
              <p className="cp-info-label">Business Hours</p>
              <p className="cp-info-value">Monday - Friday 09.30 - 18.00</p>
            </div>
            <div className="cp-info-block">
              <p className="cp-info-value">08 4169 6906</p>
            </div>
            <div className="cp-info-block">
              <p className="cp-info-value">craftinglab.co@gmail.com</p>
            </div>
            <div className="cp-info-block">
              <p className="cp-info-value cp-info-bold">CRAFTINGLAB Co.,Ltd.</p>
              <p className="cp-info-value">
                24 Nimmanahaeminda Road,
                <br />
                Tambon Su Thep, Mueang Chiang Mai District,
                <br />
                Chiang Mai 50200
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delayMs={100}>
          <div className="cp-info-right">
            <iframe
              title="CRAFTINGLAB Co., Ltd. location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900!2d98.9656942!3d18.7996069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2fc05c7df8dd:0x307f0f1c4af5ed93!2sCRAFTINGLAB+Co.,+Ltd.!5e0!3m2!1sen!2sth!4v1"
              className="cp-map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section className="cp-contact-section" aria-label="Get in touch">
        <FadeIn direction="left">
          <div className="cp-contact-left">
            <h2 className="cp-title">GET IN TOUCH</h2>
            <p className="cp-contact-desc">
              Contact us with your questions about development and partnerships.
              Inquire about upcoming events. Leave us your feedback.
            </p>

            <div className="cp-socials">
              {SOCIAL_GROUPS.map((group, gi) => (
                <div key={gi} className="cp-social-group">
                  {group.map((s, i) => (
                    <Link
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-social-item"
                    >
                      <span className="cp-social-icon">{s.icon}</span>
                      <span className="cp-social-label">{s.label}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delayMs={100}>
          <div className="cp-contact-right">
            {submitted ? (
              <div className="cp-submitted" role="status">
                <p>Thank you! We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="cp-field">
                  <label className="cp-field-label" htmlFor="cp-name">
                    Your Name <span className="cp-required" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cp-name"
                    className="cp-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "cp-name-error" : undefined}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span id="cp-name-error" className="cp-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="cp-field">
                  <label className="cp-field-label" htmlFor="cp-email">
                    Your Email <span className="cp-required" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cp-email"
                    className="cp-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "cp-email-error" : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span id="cp-email-error" className="cp-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="cp-field">
                  <label className="cp-field-label" htmlFor="cp-phone">
                    Your Phone Number
                  </label>
                  <input
                    id="cp-phone"
                    className="cp-input"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>

                {/* Service */}
                <div className="cp-field">
                  <label className="cp-field-label" htmlFor="cp-service">
                    Service Interest
                  </label>
                  <input
                    id="cp-service"
                    className="cp-input"
                    type="text"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className="cp-field">
                  <label className="cp-field-label" htmlFor="cp-message">
                    Message
                  </label>
                  <textarea
                    id="cp-message"
                    className="cp-input cp-textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                {/* Consent */}
                <div className="cp-consent-row">
                  <label className="cp-checkbox-label">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      className="cp-checkbox"
                    />
                    <span className="cp-consent-text">
                      I consent to the processing of my personal data
                      <br />
                      for the purpose of contact.
                    </span>
                  </label>
                </div>

                {submitError && (
                  <span className="cp-error" role="alert">
                    {submitError}
                  </span>
                )}

                <button
                  type="submit"
                  className="cp-submit"
                  disabled={!form.consent || isSubmitting}
                  aria-disabled={!form.consent || isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
