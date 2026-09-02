"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useBookingModal } from "@/component/booking-modal-context"

const trustSignals = [
  "Doctor-Led Care",
  "Advanced Technology",
  "Personalised Plans",
  "Safety First",
  "Natural-Looking Results",
]

const treatments = [
  { name: "Liposuction", image: "/banner-1.png", mobileImage: "/banner-mbl-1.png" },
  { name: "Tummy Tuck", image: "/banner-2.png", mobileImage: "/banner-mbl-2.png" },
  { name: "Gynecomastia", image: "/banner-3.png", mobileImage: "/banner-mbl-3.png" },
  { name: "Body Sculpting", image: "/banner-4.png", mobileImage: "/banner-mbl-4.png" },
  { name: "Hair Transplant", image: "/banner-5.png", mobileImage: "/banner-mbl-5.png" },
]

export default function HeroSection() {
  const [activeTreatment, setActiveTreatment] = useState(0)
  const { open: openBookingModal } = useBookingModal()

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTreatment((current) => (current + 1) % treatments.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative isolate flex max-sm:min-h-[520px] min-h-[620px] scroll-mt-24 items-center overflow-hidden bg-[#292d22] text-[#fffaf0] lg:h-svh lg:max-h-[500px]">
      {/* mobile-only background image */}
      <Image
        key={treatments[activeTreatment].mobileImage}
        src={treatments[activeTreatment].mobileImage}
        alt={`${treatments[activeTreatment].name} treatment at Omorrfiya`}
        fill
        priority
        sizes="100vw"
        className="hero-image-zoom -z-20 object-cover object-center sm:hidden"
      />

      {/* tablet / desktop background image (unchanged) */}
      <Image
        key={treatments[activeTreatment].image}
        src={treatments[activeTreatment].image}
        alt={`${treatments[activeTreatment].name} treatment at Omorrfiya`}
        fill
        priority
        sizes="100vw"
        className="hero-image-zoom -z-20 hidden object-cover object-center sm:block"
      />

      {/* preload every other treatment image so swapping between them never shows a blank flash */}
      <div className="hidden" aria-hidden="true">
        {treatments.map((treatment) => (
          <div key={`preload-${treatment.mobileImage}`} className="relative h-px w-px">
            <Image src={treatment.mobileImage} alt="" fill sizes="100vw" priority />
          </div>
        ))}
        {treatments.map((treatment) => (
          <div key={`preload-${treatment.image}`} className="relative h-px w-px">
            <Image src={treatment.image} alt="" fill sizes="100vw" priority />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(31,35,26,0.98)_0%,rgba(41,45,34,0.92)_36%,rgba(41,45,34,0.62)_62%,rgba(41,45,34,0.2)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[#d5ad58]/[0.06]" />

      <div className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-8 xl:px-20">
        <div className="max-w-[720px] xl:max-w-[780px]">
          <h1 className="hero-reveal hero-delay-1 font-serif text-[clamp(2.25rem,4.25vw,4.55rem)] font-bold leading-[1.01] tracking-[-0.035em]">
            Transform Your Body.{" "}
            <span className="italic text-[#e5bd65]">Restore Your Hair.</span>{" "}
            Elevate Your Confidence.
          </h1>

          <p className="hero-reveal hero-delay-2 mt-4 max-w-[650px] font-sans text-[clamp(.9rem,1.05vw,1.05rem)] leading-[1.65] text-white/80 sm:mt-5">
            Advanced body contouring and hair restoration treatments with doctor-led care, modern technology and personalised treatment plans designed around your individual goals.
          </p>

          <div className="hero-reveal hero-delay-3 mt-5 border-y border-white/15 py-4">
            <h2 className="font-serif text-[.68rem] font-bold uppercase tracking-[0.24em] text-[#e5bd65]">Trust Signals</h2>
            <div className="mt-2.5 flex flex-wrap gap-x-2.5 gap-y-1.5 text-xs font-medium text-white/90 sm:text-[.82rem]">
              {trustSignals.map((signal, index) => (
                <span key={signal} className="inline-flex items-center gap-2.5">
                  {signal}
                  {index < trustSignals.length - 1 && <span aria-hidden className="text-[#d5ad58]">{"\u2022"}</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-reveal hero-delay-4 mt-4">
            <h2 className="font-serif text-[.68rem] font-bold uppercase tracking-[0.24em] text-[#e5bd65]">Key Treatments</h2>
            <div className="scrollbar-none -mx-5 mt-2.5 flex flex-nowrap gap-1.5 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:px-0">
              {treatments.map((treatment, index) => (
                <button
                  key={treatment.name}
                  type="button"
                  onMouseEnter={() => setActiveTreatment(index)}
                  onFocus={() => setActiveTreatment(index)}
                  onClick={() => setActiveTreatment(index)}
                  aria-pressed={activeTreatment === index}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm transition sm:px-3.5 sm:text-[.82rem] ${
                    activeTreatment === index
                      ? "border-[#d5ad58] bg-[#d5ad58] text-[#292d22]"
                      : "border-[#f3dda1]/30 bg-[#f3dda1]/10 hover:border-[#f3dda1]/60 hover:bg-[#f3dda1]/15"
                  }`}
                >
                  {treatment.name}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={openBookingModal}
            className="hero-reveal hero-delay-5 group relative mt-5 inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-6 text-xs font-bold uppercase tracking-[0.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3dda1] sm:px-7 sm:text-[.82rem]"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
            <span className="relative">Book Your Consultation</span>
          </button>
        </div>
      </div>
    </section>
  )
}
