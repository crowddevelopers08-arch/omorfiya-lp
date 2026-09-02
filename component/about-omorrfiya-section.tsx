"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/component/reveal";
import { useBookingModal } from "@/component/booking-modal-context";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="#1a1a1a" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

export default function MedicalifeAbout() {
  const [videoOpen, setVideoOpen] = useState(false);
  const { open: openBookingModal } = useBookingModal();

  return (
    <section id="doctor" className="scroll-mt-24 bg-[#fbf9f4] px-4 py-8 font-sans text-[#292d22] sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center max-sm:gap-5 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-10">
        {/* Left — image cluster (exact desktop replica) */}
        <Reveal direction="left" className="relative mx-auto hidden h-[620px] w-full max-w-[560px] lg:block">
          {/* organic blob background */}
          <div className="absolute -right-4 top-0 h-[430px] w-[430px] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-[#f3dda1]/40" />

          {/* top-right image: doctors walking */}
          <div className="absolute right-0 top-0 h-[420px] w-[290px] overflow-hidden rounded-[160px_160px_120px_120px]">
            <Image
              src="/dr-nishant-profile.webp"
              alt="Two doctors walking and reviewing notes in a hospital hallway"
              fill
              sizes="290px"
              className="object-cover"
            />
          </div>

          {/* bottom-left image: doctor writing */}
          <div className="absolute bottom-0 -left-10 h-[380px] w-[290px] overflow-hidden rounded-[140px_140px_110px_110px]">
            <Image
              src="/dr-nishant-profile.webp"
              alt="Doctor with a stethoscope writing notes at a desk"
              fill
              sizes="290px"
              className="object-cover"
            />
          </div>

          {/* bottom-right: video thumbnail */}
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label="Watch video"
            className="group absolute bottom-0 right-0 h-[190px] w-[290px] overflow-hidden rounded-[60px]"
          >
            <Image
              src="/omorrfiya-reception.webp"
              alt="Doctors talking, watch video preview"
              fill
              sizes="290px"
              className="object-cover"
            />
            <div className="absolute inset-0 transition-colors group-hover:bg-black/45" />
          </button>
        </Reveal>

        {/* Mobile — label, heading, doctor name & qualification (comes before the image on mobile) */}
        <div className="lg:hidden">
          <Reveal as="p" direction="down" className="font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#9c762d]">About The Doctor</Reveal>
          <Reveal as="h2" direction="right" delay={120} className="mt-4 font-serif text-[clamp(2rem,3.2vw,3.2rem)] font-normal leading-[1.08] tracking-[-.02em] text-[#292d22]">
            Meet the Expert Behind Your Transformation
          </Reveal>

          <Reveal direction="up" delay={200} className="mt-3">
            <p className="font-serif text-[clamp(1.35rem,1.8vw,1.65rem)] font-normal leading-tight text-[#292d22]">Dr Nishant Tripathi</p>
            <p className="mt-1.5 font-sans text-[.72rem] font-bold uppercase tracking-[.12em] text-[#9c762d]">
              M.Ch Plastic Surgeon &amp; Hair Transplant Specialist
            </p>
          </Reveal>
        </div>

        {/* Left — mobile fallback (simple stacked images) */}
        <Reveal direction="up" className="grid grid-cols-2 gap-4 lg:hidden">
          <div className="relative col-span-2 aspect-[4/3] max-sm:aspect-[4/4] overflow-hidden rounded-[36px]">
            <Image src="/dr-nishant-profile.webp" alt="Two doctors walking and reviewing notes in a hospital hallway" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[28px]">
            <Image src="/dr-nishant-profile.webp" alt="Doctor with a stethoscope writing notes at a desk" fill sizes="50vw" className="object-cover" />
          </div>
          <button type="button" onClick={() => setVideoOpen(true)} aria-label="Watch video" className="group relative aspect-square overflow-hidden rounded-[28px]">
            <Image src="/omorrfiya-reception.webp" alt="Doctors talking, watch video preview" fill sizes="50vw" className="object-cover" />
          </button>
        </Reveal>

        {/* Mobile — remaining copy & CTA (comes after the image on mobile) */}
        <div className="lg:hidden">
          <Reveal as="p" direction="up" delay={260} className="font-sans text-[.85rem] leading-[1.7] text-[#373c2e]/80">
            At Omorrfiya, every treatment journey is guided by the belief that aesthetic care should be personalised, precise and thoughtfully planned.
          </Reveal>
          <Reveal as="p" direction="up" delay={320} className="mt-4 font-sans text-[.85rem] leading-[1.7] text-[#373c2e]/80">
            Dr Nishant Tripathi combines his expertise in plastic surgery, body contouring and hair restoration with a patient-first approach. He takes time to understand each patient&apos;s concerns, expectations and individual anatomy before recommending a suitable treatment plan.
          </Reveal>
          <Reveal as="p" direction="up" delay={380} className="mt-4 font-sans text-[.85rem] leading-[1.7] text-[#373c2e]/80">
            His approach focuses on careful assessment, advanced techniques, safety and natural-looking outcomes—helping patients make informed decisions with clarity and confidence.
          </Reveal>

          <Reveal direction="up" delay={440} className="mt-9">
            <button
              type="button"
              onClick={openBookingModal}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#d5ad58] px-6 py-3 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
              <span className="relative flex items-center justify-center gap-3 text-center">
                <span className="max-w-[220px]">Book Your Consultation with Dr Nishant</span>
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#292d22] text-white">
                  <ArrowIcon />
                </span>
              </span>
            </button>
          </Reveal>
        </div>

        {/* Right — text content (desktop / tablet: unchanged single block) */}
        <div className="hidden max-w-[560px] lg:block">
          <Reveal as="p" direction="down" className="font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#9c762d]">About The Doctor</Reveal>
          <Reveal as="h2" direction="right" delay={120} className="mt-4 font-serif text-[clamp(2rem,3.2vw,3.2rem)] font-normal leading-[1.08] tracking-[-.02em] text-[#292d22]">
            Meet the Expert Behind Your Transformation
          </Reveal>

          <Reveal direction="up" delay={200} className="mt-6">
            <p className="font-serif text-[clamp(1.35rem,1.8vw,1.65rem)] font-normal leading-tight text-[#292d22]">Dr Nishant Tripathi</p>
            <p className="mt-1.5 font-sans text-[.72rem] font-bold uppercase tracking-[.12em] text-[#9c762d]">
              M.Ch Plastic Surgeon &amp; Hair Transplant Specialist
            </p>
          </Reveal>

          <Reveal as="p" direction="up" delay={260} className="mt-5 font-sans text-[.9rem] leading-[1.7] text-[#373c2e]/80">
            At Omorrfiya, every treatment journey is guided by the belief that aesthetic care should be personalised, precise and thoughtfully planned.
          </Reveal>
          <Reveal as="p" direction="up" delay={320} className="mt-4 font-sans text-[.9rem] leading-[1.7] text-[#373c2e]/80">
            Dr Nishant Tripathi combines his expertise in plastic surgery, body contouring and hair restoration with a patient-first approach. He takes time to understand each patient&apos;s concerns, expectations and individual anatomy before recommending a suitable treatment plan.
          </Reveal>
          <Reveal as="p" direction="up" delay={380} className="mt-4 font-sans text-[.9rem] leading-[1.7] text-[#373c2e]/80">
            His approach focuses on careful assessment, advanced techniques, safety and natural-looking outcomes—helping patients make informed decisions with clarity and confidence.
          </Reveal>

          <Reveal direction="up" delay={440} className="mt-9">
            <button
              type="button"
              onClick={openBookingModal}
              className="group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-full bg-[#d5ad58] px-6 py-3 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 sm:text-[.8rem]"
            >
              <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
              <span className="relative inline-flex items-center gap-3">
                Book Your Consultation with Dr Nishant
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#292d22] text-white">
                  <ArrowIcon />
                </span>
              </span>
            </button>
          </Reveal>
        </div>
      </div>

      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative aspect-video w-full max-w-[960px]" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
              className="absolute -top-11 right-0 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <video src="/medicalife-intro-video.mp4" controls autoPlay className="h-full w-full rounded-[16px] bg-black" />
          </div>
        </div>
      )}
    </section>
  );
}