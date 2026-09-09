"use client";

import Image from "next/image";
import Reveal from "@/component/reveal";
import { scrollToHtForm } from "./nav-scroll";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function AppointmentBanner() {
  return (
    <section id="book-appointment" aria-label="Book a hair restoration consultation" className="relative overflow-hidden bg-[#fbf9f4] px-4 pb-10 pt-10 sm:px-6 xl:px-6 xl:pt-[130px]">
      <div className="relative mx-auto min-h-[298px] w-full max-w-[1684px] overflow-visible rounded-[26px] border border-[#f3dda1]/60 bg-[#fbf9f4]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[25px]">
          <div className="absolute inset-y-0 right-0 w-[36%] bg-[#f3dda1]" />
          <div className="absolute right-[25.5%] top-1/2 size-[430px] -translate-y-1/2 rounded-full border-[58px] border-[#f3dda1]/35 sm:size-[500px] xl:size-[565px]" />
          <div className="absolute right-[26.5%] top-1/2 size-[335px] -translate-y-1/2 rounded-full border-[55px] border-white/55 sm:size-[405px] xl:size-[450px]" />
        </div>

        <div className="relative z-10 flex min-h-[296px] w-full flex-col items-start justify-center px-7 py-9 sm:px-10 xl:max-w-[62%] xl:px-10">
          <Reveal
            as="h2"
            direction="left"
            className="max-w-[840px] font-serif text-[25px] leading-tight font-bold tracking-[-.02em] text-[#292d22] sm:text-[29px] xl:text-[31px]"
          >
            Ready to Take the First Step Towards Hair Restoration?
          </Reveal>
          <Reveal direction="up" delay={140} className="mt-8 flex flex-wrap items-center gap-4 sm:mt-12">
            <button
              type="button"
              onClick={scrollToHtForm}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#d5ad58] px-5 py-3.5 text-[.75rem] font-bold uppercase tracking-[.08em] text-white transition-transform hover:-translate-y-0.5 hover:text-[#292d22]"
            >
              <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
              <span className="relative inline-flex items-center gap-2">
                Book Your Consultation
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#292d22] text-white">
                  <ArrowIcon />
                </span>
              </span>
            </button>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          delay={120}
          className="pointer-events-none absolute -top-[100px] right-[3.5%] z-20 hidden h-[418px] w-[330px] overflow-hidden rounded-t-[180px] xl:block 2xl:right-[6%]"
        >
          <Image
            src="https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955313/appoint-image.png"
            alt="Hair transplant specialist ready for a consultation"
            width={1024}
            height={1536}
            quality={95}
            className="h-full w-full object-cover object-top"
          />
        </Reveal>
      </div>

      <Reveal
        direction="up"
        delay={100}
        className="relative mx-auto mt-5 block max-w-[420px] overflow-hidden rounded-[24px] bg-[#f3dda1] max-sm:pt-0 pt-5 xl:hidden"
      >
        <Image src="https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955313/appoint-image.png" alt="Hair transplant specialist" width={1024} height={1536} quality={95} className="mx-auto h-[390px] w-full object-cover object-top" />
      </Reveal>
    </section>
  );
}
