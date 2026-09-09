"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./equipment-rental-hero.module.css";

const trustSignals = [
  { title: "Expert Hair Specialists", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M17 11l2 2 3-4" },
  { title: "Advanced Techniques", icon: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z M20 2v4 M18 4h4" },
  { title: "Personalised Planning", icon: "M9 5H5v16h14V5h-4 M9 3h6v4H9Z M8 12h8 M8 16h5" },
  { title: "Natural-Looking Hairline Design", icon: "M5 20c0-8 2-16 7-16s7 8 7 16 M5 13c3-6 11-6 14 0 M9 6c-2 4-2 9-2 12 M15 6c2 4 2 9 2 12" },
  { title: "Dedicated Aftercare", icon: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z M9 12l2 2 4-4" },
];

export default function EquipmentRentalHero() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Omorfiya-HT-Form",
          sheetTab: "ht-leads",
          concern: "Hair Transplant",
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      form.reset();
      router.push("/hair-transplant/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <section id="home" className={styles.hero} aria-labelledby="equipment-heading">
      <div className={styles.backdrop} aria-hidden="true">
        {["https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955325/herobanner-1.png", "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955319/herobanner-2.webp", "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955325/herobanner-3.png", "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955325/herobanner-4.png"].map((src) => (
          <div key={src} className={styles.backgroundSlide} style={{ backgroundImage: `url("${src}")` }} />
        ))}
      </div>
      <div className={styles.copy}>
        <p className={`${styles.eyebrow} ${styles.inLeft}`}>Personalised Solutions for Progressive Hair Loss.</p>
        <div className={`${styles.headlineWrap} ${styles.inRight}`}>
          <h1 id="equipment-heading" className={styles.headline}>
            <span>Experience doctor-led </span>
            <span><strong>hair transplant solutions tailored to</strong> </span>
            <span> your hair loss pattern, donor area and </span>
            <span>restoration goals.</span>
          </h1>
          <span className={`${styles.badge} ${styles.topBadge} ${styles.badgeInRight}`}>15k+ Reviews</span>
          <span className={`${styles.badge} ${styles.deliveryBadge} ${styles.badgeInLeft}`}>Nationwide Delivery</span>
          <span className={`${styles.badge} ${styles.reviewBadge} ${styles.badgeInUp}`}>15k+ Reviews</span>
        </div>
        <div className={`${styles.trustSignals} hero-reveal hero-delay-3`} role="region" aria-label="Trust signals" tabIndex={0}>
          <div className={styles.trustTrack}>
            {[0, 1].map((copy) => (
              <ul key={copy} className={styles.trustGroup} aria-hidden={copy === 1 ? true : undefined}>
                {trustSignals.map((signal) => (
                  <li key={signal.title} className={styles.trustItem}>
                    <span className={styles.trustIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={signal.icon} />
                      </svg>
                    </span>
                    <span>{signal.title}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <form
        id="book"
        className={`${styles.form} hero-reveal hero-delay-4`}
        aria-labelledby="consultation-title"
        aria-describedby="consultation-description"
        onSubmit={handleSubmit}
      >
        <div className={styles.formHeading}>
          <h2 id="consultation-title">Book Your Hair Consultation</h2>
        </div>
        <label className={styles.field}>
          <span>Full Name*</span>
          <input name="name" type="text" autoComplete="name" placeholder="Enter your full name" required />
        </label>
        <label className={styles.field}>
          <span>Phone Number*</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Enter your phone number"
            pattern="^(?:\+?91[\s-]?)?[6-9][6-9]\d{8}$"
            maxLength={14}
            title="Enter a valid 10-digit mobile number whose first two digits are each 6, 7, 8 or 9 (optional +91)"
            required
          />
        </label>
        <label className={styles.field}>
          <span>Email*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="Enter your email"
            pattern="^[^@\s]+@[^@\s]+\.[A-Za-z]{2,}$"
            title="Enter a valid email address, e.g. name@example.com"
            required
          />
        </label>
        {error && (
          <p role="alert" style={{ margin: 0, color: "#b3261e", fontSize: ".8rem", lineHeight: 1.5 }}>
            {error}
          </p>
        )}

          <button
            type="submit"
            disabled={submitting}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#292d22] px-5 py-3.5 text-[.75rem] font-bold uppercase tracking-[.08em] text-white transition-transform hover:-translate-y-0.5 hover:text-[#292d22] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
            <span className="relative inline-flex items-center gap-2">
              {/* <BookIcon /> */}
              {submitting ? "Submitting..." : "Book Appointment"}
            </span>
          </button>
      </form>
    </section>
  );
}
