"use client"

import Reveal from "@/component/reveal"
import { useBookingModal } from "@/component/booking-modal-context"

const reasons = [
  "4.8 ⭐ Google Ratings",
  "Doctor-Led Expertise",
  "Personalised Approach",
  "Advanced Technology",
  "Natural-Looking Outcomes",
]

export default function WhyChooseSection() {
  const { open: openBookingModal } = useBookingModal()

  return (
    <section className="relative isolate overflow-hidden bg-[#fbf9f4] px-5 py-8 text-[#292d22] sm:px-8 sm:py-20 lg:px-14 lg:py-14 xl:px-20">
      {/* <div aria-hidden className="pointer-events-none absolute -top-56 left-1/2 -z-10 h-[30rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#d5ad58]/15 blur-[90px]" /> */}

      <div className="mx-auto w-full max-w-[1600px] text-center">
        <header className="mx-auto max-w-[850px]">
          <Reveal as="p" direction="down" className="font-sans text-[.7rem] font-bold uppercase leading-[1.4] tracking-[.28em] text-[#d5ad58]">
            Why Choose Omorrfiya?
          </Reveal>
          <Reveal as="h2" direction="up" delay={120} className="mt-4 font-serif text-[clamp(2.25rem,3.6vw,3.8rem)] font-normal leading-[1.08] tracking-[-.025em]">
            Where Expertise Meets Personalised Care
          </Reveal>
        </header>

        {/* mobile — single auto-scrolling row */}
        <Reveal direction="up" className="mt-10 overflow-hidden sm:hidden">
          <div className="marquee-track flex w-max gap-2.5">
            {[...reasons, ...reasons].map((reason, index) => (
              <article
                key={`${reason}-${index}`}
                className="relative flex min-h-[120px] w-[220px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#d5ad58]/40 bg-white/80 px-5 py-8 text-[#292d22]"
              >
                <span aria-hidden className="absolute left-1/2 top-[1.15rem] h-px w-7 -translate-x-1/2 bg-[#d5ad58] opacity-80" />
                <h3 className="max-w-[220px] font-serif text-[clamp(1.1rem,1.3vw,1.35rem)] font-normal leading-[1.3]">
                  {reason}
                </h3>
              </article>
            ))}
          </div>
        </Reveal>

        {/* tablet and up — static grid */}
        <div className="mt-10 hidden gap-2.5 sm:grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason}
              as="article"
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 100}
              className={`group relative flex min-h-[160px] items-center justify-center overflow-hidden rounded-2xl border border-[#d5ad58]/40 bg-white/80 px-5 py-8 text-[#292d22] transition duration-300 hover:-translate-y-1 hover:border-[#d5ad58] hover:bg-[#292d22] hover:text-[#fffaf0] lg:min-h-[190px] ${index === reasons.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <span aria-hidden className="absolute left-1/2 top-[1.15rem] h-px w-7 -translate-x-1/2 bg-[#d5ad58] opacity-80" />
              <span aria-hidden className="absolute inset-x-5 bottom-0 h-0.5 origin-center scale-x-0 bg-[#d5ad58] transition-transform duration-300 group-hover:scale-x-100" />
              <h3 className="max-w-[220px] font-serif text-[clamp(1.1rem,1.3vw,1.35rem)] font-normal leading-[1.3]">
                {reason}
              </h3>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={reasons.length * 100} className="mt-9 sm:mt-11">
          <button
            type="button"
            onClick={openBookingModal}
            className="group relative inline-flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3dda1] sm:w-auto sm:text-[.8rem]"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
            <span className="relative">Book Your Consultation</span>
          </button>
        </Reveal>
      </div>
    </section>
  )
}
