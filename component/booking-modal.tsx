"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const concerns = [
  "Liposuction",
  "Tummy Tuck",
  "Gynecomastia",
  "Body Sculpting",
  "Skin Tightening",
  "Hair Transplant",
  "General Consultation",
  "Other",
];

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 animate-spin" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" className="opacity-25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const submittingRef = useRef(false);

  useEffect(() => {
    submittingRef.current = submitting;
  }, [submitting]);

  // coming Back from the thank-you page can restore this page from the
  // browser cache with the button still "Submitting..." — reset it
  useEffect(() => {
    const reset = (e: PageTransitionEvent) => { if (e.persisted) setSubmitting(false); };
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);

  // lock page scroll while open, close on Escape, focus the first field
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    setError(null);
    nameInputRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && !submittingRef.current) onClose();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Omorrfiya-Form",
          name: formData.get("name"),
          phone: formData.get("phone"),
          concern: formData.get("concern"),
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      // full page load to the thank-you page (shows the site page loader);
      // the button stays in its loading state until the new page replaces this one
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- full reload is intended
      window.location.assign("/thank-you-cm");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div
      className="modal-fade-in fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm"
      onClick={() => { if (!submitting) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="modal-pop-in relative w-full max-w-[440px] rounded-[20px] bg-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          disabled={submitting}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-[#292d22]/50 transition-colors hover:bg-[#fbf9f4] hover:text-[#292d22] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <CloseIcon />
        </button>

        <p className="font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#9c762d]">Book A Consultation</p>
        <h2 id="booking-modal-title" className="mt-2 pr-8 font-serif text-[1.5rem] font-normal leading-tight text-[#292d22] sm:text-[1.8rem]">
          Let&apos;s Plan Your Visit
        </h2>
        <p className="mt-2 font-sans text-[.85rem] leading-[1.6] text-[#373c2e]/70">
          Share a few details and our team will get back to you to confirm your consultation.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="booking-name" className="mb-1.5 block font-sans text-[.78rem] font-semibold text-[#292d22]">
              Name
            </label>
            <input
              ref={nameInputRef}
              id="booking-name"
              name="name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full rounded-xl border border-[#e5ddc8] bg-white px-4 py-3 font-sans text-[.9rem] text-[#292d22] placeholder:text-[#373c2e]/40 outline-none transition-colors focus:border-[#d5ad58]"
            />
          </div>

          <div>
            <label htmlFor="booking-phone" className="mb-1.5 block font-sans text-[.78rem] font-semibold text-[#292d22]">
              Phone Number
            </label>
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-[#e5ddc8] bg-white px-4 py-3 font-sans text-[.9rem] text-[#292d22] placeholder:text-[#373c2e]/40 outline-none transition-colors focus:border-[#d5ad58]"
            />
          </div>

          <div>
            <label htmlFor="booking-concern" className="mb-1.5 block font-sans text-[.78rem] font-semibold text-[#292d22]">
              Concern
            </label>
            <div className="relative">
              <select
                id="booking-concern"
                name="concern"
                required
                defaultValue=""
                className="w-full appearance-none rounded-xl border border-[#e5ddc8] bg-white px-4 py-3 pr-10 font-sans text-[.9rem] text-[#292d22] outline-none transition-colors focus:border-[#d5ad58]"
              >
                <option value="" disabled>
                  Select your concern
                </option>
                {concerns.map((concern) => (
                  <option key={concern} value={concern}>
                    {concern}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9c762d]">
                <ChevronDownIcon />
              </span>
            </div>
          </div>

          {error && (
            <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 font-sans text-[.8rem] text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
            className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0 sm:text-[.8rem]"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100 group-disabled:scale-x-0" />
            <span className="relative inline-flex items-center gap-2">
              {submitting && <SpinnerIcon />}
              {submitting ? "Submitting..." : "Submit Request"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
