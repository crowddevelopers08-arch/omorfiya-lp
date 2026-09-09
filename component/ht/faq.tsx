"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/component/reveal";
import { scrollToHtForm } from "./nav-scroll";

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
    question: "How do I know if a hair transplant is right for me?",
    answer:
      "Suitability depends on your hair-loss pattern, donor-area density, scalp condition and goals. A consultation can help determine the right approach.",
  },
  {
    question: "Which hair transplant technique is suitable for me?",
    answer:
      "The right technique depends on your hair loss, donor area and graft requirements. Your surgeon will recommend an option after assessment.",
  },
  {
    question: "How long is recovery after a hair transplant?",
    answer:
      "Initial healing usually takes a few days, but recovery varies by individual and technique. Your doctor will provide personalised aftercare guidance.",
  },
  {
    question: "When can I expect to see results?",
    answer:
      "Hair growth occurs gradually over several months. Initial shedding may occur before new hair begins to grow.",
  },
  {
    question: "How much does a hair transplant cost?",
    answer:
      "Cost varies based on the number of grafts, technique and extent of hair loss. An estimate can be provided after consultation.",
  },
  {
    question: "Will my transplanted hair look natural?",
    answer:
      "Careful hairline design, graft direction and placement help create a result that blends naturally with your existing hair.",
  },
  {
    question: "What happens during the consultation?",
    answer:
      "Your doctor assesses your hair loss, donor area and goals to recommend suitable techniques, graft requirements and the treatment plan.",
  },
];

export default function PopularQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
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
            Common Questions About Hair Restoration
          </Reveal>
        </div>

        {/* image — shared by both layouts; sits left on desktop, in the middle of the mobile stack */}
        <Reveal direction="left" className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] sm:aspect-[16/10] lg:aspect-[4/3]">
          <Image
            src="https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955321/omorrfiya-reception.webp"
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
              onClick={scrollToHtForm}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-6 py-4 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3dda1]"
            >
              <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
              <span className="relative">Still Have Questions? Book a Consultation</span>
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
            Common Questions About Hair Restoration
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
              onClick={scrollToHtForm}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-6 py-3 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3dda1] sm:text-[.8rem]"
            >
              <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
              <span className="relative">Still Have Questions? Book a Consultation</span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
