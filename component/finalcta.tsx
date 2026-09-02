"use client";

import Image from "next/image";
import Reveal from "@/component/reveal";
import { useBookingModal } from "@/component/booking-modal-context";

export default function FinalCtaOmorrfiya() {
  const { open: openBookingModal } = useBookingModal();

  return (
    <section className="relative isolate overflow-hidden bg-[#0d0d0d] py-8 font-sans sm:py-28 lg:py-14">
      {/* background image */}
      <Image
        src="/omorrfiya-reception.webp"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/40" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto flex max-w-[880px] flex-col items-center px-6 text-center">
        <Reveal as="span" direction="down" className="text-[12px] font-semibold tracking-[3px] text-[#d4af7a]">
          REJUVENATE &bull; RESTORE &bull; TRANSFORM
        </Reveal>

        <Reveal as="h2" direction="up" delay={120} className="mt-6 text-[32px] font-extrabold leading-[1.25] tracking-[-0.3px] text-white sm:text-[42px] lg:text-[50px]">
          Ready to Take the Next Step Towards a More Confident You?
        </Reveal>

        <Reveal as="p" direction="up" delay={220} className="mt-6 max-w-[640px] text-[16px] leading-[1.8] text-white/75 sm:text-[17px]">
          Whether you are considering body contouring or hair restoration, the right treatment starts with the right assessment. Meet our expert, understand your options and receive a treatment plan personalised to your needs.
        </Reveal>

        <Reveal direction="up" delay={320} className="mt-10">
          <button
            type="button"
            onClick={openBookingModal}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-10 py-4 text-[13px] font-sans font-bold tracking-[1.5px] text-[#0d0d0d] transition-transform hover:-translate-y-0.5"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
            <span className="relative">BOOK YOUR CONSULTATION</span>
          </button>
        </Reveal>

        <Reveal direction="up" delay={420} className="mt-5 pt-4">
          <p className="text-[20px] font-semibold tracking-[0.5px] text-white sm:text-[22px]">
            Omorrfiya Wellness &amp; Longevity Center
          </p>
          <p className="mt-2 text-[12px] font-medium tracking-[3px] text-[#d4af7a]/80">
            REJUVENATE &bull; RESTORE &bull; TRANSFORM
          </p>
        </Reveal>
      </div>
    </section>
  );
}
