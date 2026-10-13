"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useBookingModal } from "@/component/booking-modal-context";
import styles from "./TreatmentAreas.module.css";

function ArrowLeft({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m12 5-7 7 7 7M5 12h14" /></svg>;
}
function ArrowRight({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m12 5 7 7-7 7M5 12h14" /></svg>;
}
function ArrowUpRight({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>;
}

const treatmentAreas = [
  { id: "medifacials", name: "Medifacials", alt: "Aesthetician providing a facial skin treatment" },
  { id: "laser-hair-reduction", name: "Laser Hair Reduction", alt: "Professional laser hair removal treatment" },
  { id: "radio-frequency", name: "Radio Frequency", alt: "Device-based facial skincare treatment" },
  { id: "hair-gfc", name: "Hair GFC", alt: "Scalp care and hair assessment" },
  { id: "botox-fillers", name: "Botox & Fillers", alt: "Cosmetic practitioner administering a forehead injection" },
  { id: "hydrafacial", name: "Hydrafacial", alt: "Hydrafacial equipment used during a facial treatment" },
  { id: "laser-toning", name: "Laser Toning", alt: "Specialist providing a laser skin treatment" },
  { id: "carbon-laser", name: "Carbon Laser", alt: "Aesthetician providing a facial laser treatment" },
] as const;

export default function WellnessLongevitySection() {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselId = useId();
  const { open: openBookingModal } = useBookingModal();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isPaused = isHovered || isFocused;

  const goToArea = useCallback((index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const targetIndex = (index + treatmentAreas.length) % treatmentAreas.length;
    const first = carousel.children[0] as HTMLElement;
    const target = carousel.children[targetIndex] as HTMLElement;
    carousel.scrollTo({
      left: target.offsetLeft - first.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }, []);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      const first = carousel.children[0] as HTMLElement;
      const second = carousel.children[1] as HTMLElement;
      const spacing = second.offsetLeft - first.offsetLeft;
      if (spacing <= 0 || carousel.scrollWidth <= carousel.clientWidth) return;
      const currentIndex = Math.round(carousel.scrollLeft / spacing);
      const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2;
      goToArea(atEnd ? 0 : currentIndex + 1);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [goToArea, isPaused]);

  return (
    <section id="wellness-longevity" className={`font-sans scroll-mt-20 bg-[#f7f5f1] px-4 py-8 text-[#171717] sm:px-6 sm:py-10 lg:py-12`} aria-labelledby="treatment-areas-heading"
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false); }}
    >
      <div className="mx-auto max-w-[1272px]">
        <div className="mb-6 flex flex-col items-center gap-4 text-center sm:mb-8 lg:gap-10">
          <div className="flex w-full max-w-[1520px] flex-col items-center justify-center">
            <p className="mb-3 flex justify-center items-center gap-3 font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#927421]">
              Treatments Section
            </p>
            <h2 id="treatment-areas-heading" className={`font-serif text-[clamp(2.4rem,4vw,4.25rem)] font-normal leading-[1.06] tracking-[-.03em]`}>
             Treatments Designed Around Your Goals.
            </h2>
          </div>
        </div>

        <ul
          id={carouselId}
          ref={carouselRef}
          aria-label="Skin and hair treatments"
          aria-roledescription="carousel"
          tabIndex={0}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onScroll={(event) => {
            const carousel = event.currentTarget;
            const first = carousel.children[0] as HTMLElement;
            const second = carousel.children[1] as HTMLElement;
            const spacing = second.offsetLeft - first.offsetLeft;
            if (spacing > 0) setActiveIndex(Math.min(treatmentAreas.length - 1, Math.max(0, Math.round(carousel.scrollLeft / spacing))));
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              goToArea(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
          className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain rounded-[18px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5ad58] lg:gap-5"
        >
          {treatmentAreas.map((area, index) => (
            <li key={area.id} className="group min-w-0 shrink-0 basis-full sm:basis-[calc((100%_-_1rem)/2)] lg:basis-[calc((100%_-_3.75rem)/4)] snap-start snap-always overflow-hidden rounded-[18px] border border-[#171717]/8 bg-white transition-shadow duration-300 hover:shadow-lg motion-reduce:transition-none">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#eae4d8] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={`/images/treatments/${area.id}.jpg`}
                  alt={area.alt}
                  fill
                  sizes="(min-width: 1280px) 303px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/90 font-sans text-[.68rem] font-bold text-[#927421] backdrop-blur-sm sm:left-4 sm:top-4" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pointer-events-none absolute inset-x-0 -bottom-px h-7 overflow-hidden sm:h-8" aria-hidden="true">
                  <svg className={`${styles.wave} absolute bottom-0 h-full w-[200%] max-w-none`} viewBox="0 0 1200 32" preserveAspectRatio="none" style={{ animationDelay: `${index * -3}s` }}>
                    <path fill="#d5ad58" fillOpacity="0.45" d="M0 16 Q75 32 150 16 T300 16 T450 16 T600 16 T750 16 T900 16 T1050 16 T1200 16 V32 H0Z" />
                    <path fill="#d5ad58" d="M0 18 Q75 0 150 18 T300 18 T450 18 T600 18 T750 18 T900 18 T1050 18 T1200 18 V32 H0Z" />
                  </svg>
                </div>
              </div>
              <div className="relative flex min-h-[76px] items-center justify-center bg-[#d5ad58] px-4 py-4 text-center text-[#292d22] sm:px-5">
                <h3 className="font-serif text-[clamp(1.35rem,1.6vw,1.65rem)] font-normal leading-tight">
                  <button type="button" onClick={openBookingModal} aria-label={`Book a consultation for ${area.name}`} className="cursor-pointer rounded px-2 py-1 font-serif focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#292d22]">{area.name}</button>
                </h3>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center justify-center gap-3">
          <button type="button" onClick={() => goToArea(activeIndex - 1)} aria-label="Previous treatment" aria-controls={carouselId} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#d5ad58]/35 text-[#171717] hover:bg-[#d5ad58] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5ad58]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="flex">
            {treatmentAreas.map((area, index) => (
              <button key={area.id} type="button" onClick={() => goToArea(index)} aria-label={`Show ${area.name}`} aria-current={activeIndex === index ? "true" : undefined} aria-controls={carouselId} className="flex h-11 w-7 cursor-pointer items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-[#d5ad58]">
                <span className={`h-2 rounded-full transition-all motion-reduce:transition-none ${activeIndex === index ? "w-5 bg-[#d5ad58]" : "w-2 bg-[#171717]/20"}`} />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => {
            const carousel = carouselRef.current;
            const atEnd = carousel && carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2;
            goToArea(atEnd ? 0 : activeIndex + 1);
          }} aria-label="Next treatment" aria-controls={carouselId} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#d5ad58]/35 text-[#171717] hover:bg-[#d5ad58] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5ad58]">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="sr-only" aria-atomic="true">Treatment {activeIndex + 1} of {treatmentAreas.length}: {treatmentAreas[activeIndex].name}</p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-5 text-center sm:mt-8 sm:gap-6">
          <p className="max-w-[760px] font-sans text-[.85rem] leading-[1.7] text-[#171717]/65 sm:text-[.95rem]">
            Explore personalised skin and hair care, with treatment recommendations tailored to your goals during your consultation.
          </p>
          <button type="button" onClick={openBookingModal} className="inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-[#d5ad58] py-2.5 pl-6 pr-2.5 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] shadow-sm transition-colors hover:bg-[#e5bd65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5ad58] sm:w-auto sm:text-[.8rem]">
            Book Your Consultation
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
