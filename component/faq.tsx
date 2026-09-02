"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/component/reveal";
import { useBookingModal } from "@/component/booking-modal-context";

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const VISIBLE_COUNT = 4;

const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "The right treatment depends on your concern, anatomy, health history and expectations. A consultation helps the doctor assess your needs and recommend suitable options.",
  },
  {
    question: "Are all treatments customised?",
    answer:
      "Yes. Treatment planning is based on individual concerns, goals and suitability rather than following the same approach for every patient.",
  },
  {
    question: "What body contouring treatments are available at Omorfiya?",
    answer:
      "Options include Liposuction, Tummy Tuck, Body Sculpting, Skin Tightening, Arm Contouring and Gynecomastia treatment.",
  },
  {
    question: "Does Omorrfiya offer surgical and non-surgical body contouring?",
    answer:
      "Yes. Both surgical and non-surgical body contouring options are available depending on your concern and treatment suitability.",
  },
  {
    question: "What type of hair transplant is available?",
    answer:
      "Omorrfiya offers customised FUE Hair Transplant with personalised hairline planning based on facial features, hair-loss pattern and donor-area assessment.",
  },
  {
    question: "How long does recovery take after a procedure?",
    answer:
      "Recovery differs depending on the procedure and individual healing response. Your doctor will explain the expected downtime and aftercare during consultation.",
  },
  {
    question: "Will my results look natural?",
    answer:
      "Treatment planning focuses on maintaining proportion and creating balanced, natural-looking outcomes based on your individual features.",
  },
  {
    question: "What is the first step before treatment?",
    answer:
      "The first step is a personalised consultation where your concern, medical history, expectations and treatment options can be discussed in detail.",
  },
];

export default function PopularQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const { open: openBookingModal } = useBookingModal();
  const visibleFaqs = showAll ? faqs : faqs.slice(0, VISIBLE_COUNT);

  return (
    <section id="faq" className="scroll-mt-24 bg-white px-4 py-8 font-sans text-[#292d22] sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start max-sm:gap-5 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Mobile — label & heading (comes before the image on mobile) */}
        <div className="lg:hidden">
          <Reveal as="p" direction="down" className="relative inline-flex items-center font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#9c762d]">
            Frequently Asked Questions
            <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-[#d5ad58]" aria-hidden="true" />
          </Reveal>

          <Reveal as="h2" direction="right" delay={120} className="mt-4 font-serif text-[clamp(2rem,3.2vw,3.2rem)] font-normal leading-[1.08] tracking-[-.02em] text-[#292d22]">
            Questions Patients Commonly Asks
          </Reveal>
        </div>

        {/* image — shared by both layouts; sits left on desktop, in the middle of the mobile stack */}
        <Reveal direction="left" className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] sm:aspect-[16/10] lg:aspect-[4/3]">
          <Image
            src="/omorrfiya-reception.webp"
            alt="Omorrfiya clinic reception with gold-accented branding and marble interiors"
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover"
          />
        </Reveal>

        {/* Mobile — FAQ list & CTA (comes after the image on mobile) */}
        <div className="lg:hidden">
          <div className="mt-2">
            {visibleFaqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <Reveal
                  key={faq.question}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={200 + index * 90}
                  className="border-b border-[#e5ddc8] py-4 first:pt-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-sans text-[.9rem] font-bold leading-[1.4] text-[#292d22]">{faq.question}</span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors ${
                        open
                          ? "border-transparent bg-[#d5ad58] text-[#292d22]"
                          : "border-[#d5ad58]/50 text-[#9c762d]"
                      }`}
                    >
                      <ToggleIcon open={open} />
                    </span>
                  </button>
                  {open && (
                    <p className="mt-3 pr-11 font-sans text-[.95rem] leading-[1.7] text-[#373c2e]/70">{faq.answer}</p>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal direction="up" delay={200 + VISIBLE_COUNT * 90 + 100} className="mt-6 flex flex-wrap items-center gap-3">
            {faqs.length > VISIBLE_COUNT && (
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                aria-expanded={showAll}
                className="inline-flex items-center gap-2 rounded-full border border-[#d5ad58]/50 bg-white px-6 py-4 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#9c762d] transition-colors hover:border-[#d5ad58] hover:bg-[#d5ad58]/10"
              >
                {showAll ? "Read Less" : "Read More"}
                <ChevronIcon open={showAll} />
              </button>
            )}

            <button
              type="button"
              onClick={openBookingModal}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-6 py-4 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3dda1]"
            >
              <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
              <span className="relative">Book Your Consultation</span>
            </button>
          </Reveal>
        </div>

        {/* Desktop / tablet — text column (unchanged, sits right of the image) */}
        <div className="hidden max-w-[620px] lg:block">
          <Reveal as="p" direction="down" className="relative inline-flex items-center font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#9c762d]">
            Frequently Asked Questions
            <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-[#d5ad58]" aria-hidden="true" />
          </Reveal>

          <Reveal as="h2" direction="right" delay={120} className="mt-4 font-serif text-[clamp(2rem,3.2vw,3.2rem)] font-normal leading-[1.08] tracking-[-.02em] text-[#292d22]">
            Questions Patients Commonly Asks
          </Reveal>

          <div className="mt-6">
            {visibleFaqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <Reveal
                  key={faq.question}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={200 + index * 90}
                  className="border-b border-[#e5ddc8] py-4 first:pt-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-sans text-[.9rem] font-bold leading-[1.4] text-[#292d22]">{faq.question}</span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors ${
                        open
                          ? "border-transparent bg-[#d5ad58] text-[#292d22]"
                          : "border-[#d5ad58]/50 text-[#9c762d]"
                      }`}
                    >
                      <ToggleIcon open={open} />
                    </span>
                  </button>
                  {open && (
                    <p className="mt-3 pr-11 font-sans text-[.95rem] leading-[1.7] text-[#373c2e]/70">{faq.answer}</p>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal direction="up" delay={200 + VISIBLE_COUNT * 90 + 100} className="mt-6 flex flex-wrap items-center gap-3">
            {faqs.length > VISIBLE_COUNT && (
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                aria-expanded={showAll}
                className="inline-flex items-center gap-2 rounded-full border border-[#d5ad58]/50 bg-white px-6 py-3 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#9c762d] transition-colors hover:border-[#d5ad58] hover:bg-[#d5ad58]/10 sm:text-[.8rem]"
              >
                {showAll ? "Read Less" : "Read More"}
                <ChevronIcon open={showAll} />
              </button>
            )}

            <button
              type="button"
              onClick={openBookingModal}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-6 py-3 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3dda1] sm:text-[.8rem]"
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
