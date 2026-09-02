"use client";

import Image from "next/image";
import Reveal from "@/component/reveal";
import { useBookingModal } from "@/component/booking-modal-context";

export default function WhoWeAreSection() {
  const { open: openBookingModal } = useBookingModal();

  return (
    <section id="book" className="relative scroll-mt-24 overflow-hidden bg-[#292d22] px-4 py-8 font-sans sm:px-8 lg:px-16">
      {/* decorative blurred blob, right edge */}
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-[60%_40%_55%_45%/50%_55%_45%_50%] bg-[#d5ad58]/10 blur-[90px]" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center max-sm:gap-5 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Mobile — label & heading (comes before the image on mobile) */}
        <div className="lg:hidden">
          <Reveal as="p" direction="down" className="relative inline-flex items-center font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#e5bd65]">
            About The Clinic
            <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-[#d5ad58]" aria-hidden="true" />
          </Reveal>

          <Reveal as="h2" direction="right" delay={120} className="mt-4 font-serif text-[clamp(2rem,3.2vw,3.2rem)] font-normal leading-[1.08] tracking-[-.02em] text-[#fffaf0]">
            Where Advanced Care Meets Personalised Wellness
          </Reveal>
        </div>

        {/* image — shared by both layouts; sits right on desktop, in the middle of the mobile stack */}
        <Reveal direction="right" className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] sm:aspect-[16/10] lg:order-2 lg:aspect-[4/3]">
          <Image
            src="/omorrfiya-reception.webp"
            alt="Omorrfiya clinic reception with gold-accented branding and marble interiors"
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover"
          />
        </Reveal>

        {/* Mobile — remaining copy & CTA (comes after the image on mobile) */}
        <div className="lg:hidden">
          <Reveal as="p" direction="up" delay={220} className="font-sans text-[.85rem] leading-[1.7] text-[#fffaf0]/70">
            Omorrfiya Wellness &amp; Longevity Center is a premium destination for wellness, hair restoration, body contouring and aesthetic care in Santacruz West, Mumbai. Combining medical expertise, advanced technology and personalised treatment planning, the clinic focuses on understanding your goals before recommending suitable options. Every journey is guided by safety, comfort, transparency and natural-looking outcomes, with expert-led care tailored to your individual needs. Omorrfiya aims to provide expert-led care in a comfortable and premium clinical environment.
          </Reveal>

          <Reveal direction="up" delay={320} className="mt-8">
            <button
              type="button"
              onClick={openBookingModal}
              className="group relative flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3dda1]"
            >
              <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
              <span className="relative">Book Your Consultation</span>
            </button>
          </Reveal>
        </div>

        {/* Desktop / tablet — text column (unchanged, sits left of the image) */}
        <div className="hidden max-w-[600px] lg:order-1 lg:block">
          <Reveal as="p" direction="down" className="relative inline-flex items-center font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#e5bd65]">
            About The Clinic
            <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-[#d5ad58]" aria-hidden="true" />
          </Reveal>

          <Reveal as="h2" direction="right" delay={120} className="mt-4 font-serif text-[clamp(2rem,3.2vw,3.2rem)] font-normal leading-[1.08] tracking-[-.02em] text-[#fffaf0]">
            Where Advanced Care Meets Personalised Wellness
          </Reveal>

          <Reveal as="p" direction="up" delay={220} className="mt-5 font-sans text-[.9rem] leading-[1.7] text-[#fffaf0]/70">
            Omorrfiya Wellness &amp; Longevity Center is a premium destination for wellness, hair restoration, body contouring and aesthetic care in Santacruz West, Mumbai. Combining medical expertise, advanced technology and personalised treatment planning, the clinic focuses on understanding your goals before recommending suitable options. Every journey is guided by safety, comfort, transparency and natural-looking outcomes, with expert-led care tailored to your individual needs. Omorrfiya aims to provide expert-led care in a comfortable and premium clinical environment.
          </Reveal>

          <Reveal direction="up" delay={320} className="mt-8">
            <button
              type="button"
              onClick={openBookingModal}
              className="group relative inline-flex min-h-[52px] items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3dda1] sm:text-[.8rem]"
            >
              <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
              <span className="relative">Book Your Consultation</span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
