'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const RATINGS = ['Terrible', 'Poor', 'Okay', 'Good', 'Excellent'];
const EMOJIS = ['😞', '😟', '😐', '😊', '🤩'];

const LOGO_SRC =
  'https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955320/omorfiyslogo.webp';

// Google Business review link. Replace with Omorfiya's own
// https://g.page/r/<id>/review link from Google Business Profile.
const GOOGLE_REVIEW_URL =
  'https://g.page/r/CawxyFqyD8ucEAE/review';

function wordCount(str: string) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

export default function ReviewPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [callback, setCallback] = useState(true);
  const [message, setMessage] = useState('');
  const [msgError, setMsgError] = useState('');

  function handleStar(index: number) {
    setSelected(index + 1);
    setTimeout(() => setSubmitted(true), 600);
  }

  function handleChange() {
    setSubmitted(false);
    setFormDone(false);
    setMsgError('');
  }

  async function handleFeedbackSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (wordCount(message) < 5) {
      setMsgError('Your message is too short. Please add a few more words.');
      return;
    }
    setMsgError('');
    setLoading(true);

    try {
      await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'Review Page',
          sheetTab: 'Review Leads',
          name,
          phone,
          concern: message,
          pageUrl: window.location.href,
          rating: selected ? String(selected) : '',
          callback: callback ? 'Yes' : 'No',
        }),
      });
    } catch {
      // still show success to user even if network fails
    }

    setLoading(false);
    // Low ratings (1–3) stop here — they are NOT sent to the Google review
    // funnel. Only 4–5 star raters see the Google button (SCREEN 2B).
    setFormDone(true);
  }

  const isLowRating = selected !== null && selected <= 3;

  return (
    <main
      className={`${inter.className} min-h-screen flex items-center justify-center bg-[#fbf9f4] px-4 py-8`}
    >

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(213,173,88,0.18) 0%, transparent 70%), radial-gradient(ellipse 45% 40% at 80% 85%, rgba(156,118,45,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative w-full max-w-md bg-white border border-[#292d22]/10 rounded-[28px] px-8 py-10 flex flex-col items-center gap-5 shadow-[0_18px_60px_-30px_rgba(41,45,34,0.35)]">

        {/* Header */}
        <div className="relative h-20 w-64 pt-2">
          <Image
            src={LOGO_SRC}
            alt="Omorrfiya"
            fill
            sizes="256px"
            className="object-contain object-center mix-blend-multiply"
            priority
          />
        </div>

        <div className="w-10 h-px bg-[#d5ad58]/50" />

        {/* ── SCREEN 1: Star rating ── */}
        {!submitted && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-[#d5ad58]/12 border border-[#d5ad58]/25 flex items-center justify-center">
              <span className="text-3xl">{selected ? EMOJIS[selected - 1] : '😌'}</span>
            </div>

            <div className="text-center">
              <h2 className={`${cormorant.className} text-[28px] font-semibold text-[#292d22] leading-tight`}>How was your experience?</h2>
              <p className="text-[#292d22]/70 text-[15px] mt-1 leading-relaxed">
                Please rate your visit. Your feedback<br />helps us improve our care.
              </p>
            </div>

            <div className="flex gap-2.5">
              {RATINGS.map((label, i) => {
                const filled = selected !== null && i < selected;
                return (
                  <button
                    key={i}
                    onClick={() => handleStar(i)}
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center text-[22px] transition-all duration-200 hover:-translate-y-0.5 active:scale-90 ${
                      filled
                        ? 'bg-[#d5ad58] text-[#292d22] border border-[#d5ad58] shadow-[0_8px_20px_-10px_rgba(213,173,88,0.9)]'
                        : 'bg-[#fbf9f4] border border-[#e5ddc8] text-[#292d22]/25 hover:border-[#d5ad58] hover:text-[#d5ad58]'
                    }`}
                    aria-label={label}
                  >
                    ★
                  </button>
                );
              })}
            </div>

            <p className="text-[12px] font-semibold text-[#9c762d] tracking-[0.16em] min-h-[18px] uppercase">
              {selected ? RATINGS[selected - 1] : 'Select your rating'}
            </p>
          </>
        )}

        {/* ── SCREEN 2A: Low rating (1–3) → feedback form ── */}
        {submitted && isLowRating && !formDone && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-[#d5ad58]/12 border border-[#d5ad58]/25 flex items-center justify-center">
              <span className="text-3xl">💬</span>
            </div>

            <div className="text-center">
              <h2 className={`${cormorant.className} text-[28px] font-semibold text-[#292d22] leading-tight`}>Tell us how we can improve</h2>
              <p className="text-[#292d22]/70 text-[14px] mt-1 leading-relaxed">
                We&apos;re sorry your experience was not perfect.<br />Please share your concern with us.
              </p>
            </div>

            <form onSubmit={handleFeedbackSubmit} className="w-full flex flex-col gap-4">

              <div className="flex max-sm:flex-col gap-3">
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#292d22]/60 uppercase tracking-[0.12em]">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full min-w-0 border border-[#e5ddc8] rounded-xl px-3 py-2.5 text-[13px] text-[#292d22] placeholder-[#292d22]/35 outline-none focus:border-[#d5ad58] transition-colors"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#292d22]/60 uppercase tracking-[0.12em]">Phone</label>
                  <div className="flex min-w-0 border border-[#e5ddc8] rounded-xl overflow-hidden focus-within:border-[#d5ad58] transition-colors">
                    <span className="bg-[#d5ad58]/12 px-3 flex items-center text-[13px] font-semibold text-[#292d22]/60 border-r border-[#d5ad58]/25">+91</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="10-digit"
                      maxLength={10}
                      required
                      className="flex-1 min-w-0 px-3 py-2.5 text-[13px] text-[#292d22] placeholder-[#292d22]/35 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#292d22]/60 uppercase tracking-[0.12em]">Request a Callback?</label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCallback(true)}
                    className={`relative flex-1 py-2.5 rounded-full border text-xs font-bold uppercase tracking-[.08em] transition-all ${
                      callback
                        ? 'bg-[#d5ad58] border-[#d5ad58] text-[#292d22]'
                        : 'bg-white border-[#e5ddc8] text-[#292d22]/50 hover:border-[#d5ad58] hover:text-[#292d22]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setCallback(false)}
                    className={`relative flex-1 py-2.5 rounded-full border text-xs font-bold uppercase tracking-[.08em] transition-all ${
                      !callback
                        ? 'bg-[#d5ad58] border-[#d5ad58] text-[#292d22]'
                        : 'bg-white border-[#e5ddc8] text-[#292d22]/50 hover:border-[#d5ad58] hover:text-[#292d22]'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#292d22]/60 uppercase tracking-[0.12em]">Message</label>
                <textarea
                  value={message}
                  onChange={e => { setMessage(e.target.value); if (msgError) setMsgError(''); }}
                  placeholder="Write your message here"
                  rows={4}
                  className={`w-full border rounded-xl px-3 py-2.5 text-[14px] text-[#292d22] placeholder-[#292d22]/35 outline-none transition-colors resize-none ${
                    msgError ? 'border-red-400 focus:border-red-400' : 'border-[#e5ddc8] focus:border-[#d5ad58]'
                  }`}
                />
                {msgError && (
                  <p className="text-red-500 text-[12px] mt-0.5">{msgError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-6 py-3.5 text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:text-[.8rem]"
              >
                <span aria-hidden className="absolute inset-0 scale-x-0 bg-[#f3dda1] transition-transform duration-1000 ease-out group-hover:scale-x-100" />
                <span className="relative">{loading ? 'Submitting...' : 'Submit Feedback'}</span>
              </button>
            </form>

            <button onClick={handleChange} className="rounded-full border border-[#e5ddc8] px-5 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#292d22]/60 transition-colors hover:border-[#d5ad58] hover:text-[#9c762d]">
              Change rating
            </button>
          </>
        )}

        {/* ── SCREEN 2B: High rating (4–5) → thank you + Google ── */}
        {submitted && !isLowRating && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-[#d5ad58]/12 border border-[#d5ad58]/25 flex items-center justify-center">
              <span className="text-3xl">🎉</span>
            </div>

            <div className="text-center">
              <h2 className={`${cormorant.className} text-[32px] font-semibold text-[#292d22] leading-tight`}>Thank you for your feedback!</h2>
              <p className="text-[#292d22]/70 text-[15px] mt-1 leading-relaxed">
                We&apos;re glad you had a great experience.<br />Please share it with us.
              </p>
            </div>

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full flex items-center justify-between overflow-hidden bg-[#d5ad58] text-[#292d22] rounded-full pl-2 pr-6 py-2 transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              <span aria-hidden className="absolute inset-0 scale-x-0 bg-[#f3dda1] transition-transform duration-1000 ease-out group-hover:scale-x-100" />
              <div className="relative flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#292d22] flex items-center justify-center">
                  <span className="text-[18px] text-[#d5ad58]">★</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.08em] sm:text-[.8rem]">Share Your Experience</p>
                  <p className="text-[12px] text-[#292d22]/70">Continue to Google Reviews</p>
                </div>
              </div>
              <span className="relative text-[18px] transition-transform group-hover:translate-x-1">→</span>
            </a>

            <button onClick={handleChange} className="rounded-full border border-[#e5ddc8] px-5 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#292d22]/60 transition-colors hover:border-[#d5ad58] hover:text-[#9c762d]">
              Change rating
            </button>
          </>
        )}

        {/* ── SCREEN 3: After low rating form submitted ── */}
        {formDone && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-[#d5ad58]/12 border border-[#d5ad58]/25 flex items-center justify-center">
              <span className="text-3xl">🙏</span>
            </div>
            <div className="text-center">
              <h2 className={`${cormorant.className} text-[26px] font-semibold text-[#292d22] leading-tight`}>Thank you for your feedback!</h2>
              <p className="text-[#292d22]/70 text-[13px] mt-1 leading-relaxed">
                We appreciate your honesty and<br />will work to improve.
              </p>
            </div>
          </>
        )}

      </div>
    </main>
  );
}
