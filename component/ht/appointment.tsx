"use client";

import Image from "next/image";
import { useBookingModal } from "@/component/booking-modal-context";

export default function AppointmentBanner() {
  const { open: openBooking } = useBookingModal();
  return (
    <section id="book-appointment" aria-label="Book a hair restoration consultation" className="relative overflow-hidden bg-[#fbf9f4] px-4 pb-10 pt-10 sm:px-6 xl:px-6 xl:pt-[130px]">
      <div className="relative mx-auto min-h-[298px] w-full max-w-[1684px] overflow-visible rounded-[26px] border border-[#f3dda1]/60 bg-[#fbf9f4]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[25px]">
          <div className="absolute inset-y-0 right-0 w-[36%] bg-[#f3dda1]" />
          <div className="absolute right-[25.5%] top-1/2 size-[430px] -translate-y-1/2 rounded-full border-[58px] border-[#f3dda1]/35 sm:size-[500px] xl:size-[565px]" />
          <div className="absolute right-[26.5%] top-1/2 size-[335px] -translate-y-1/2 rounded-full border-[55px] border-white/55 sm:size-[405px] xl:size-[450px]" />
        </div>

        <div className="relative z-10 flex min-h-[296px] w-full flex-col items-start justify-center px-7 py-9 sm:px-10 xl:max-w-[62%] xl:px-10">
          <h2 className="max-w-[840px] font-serif text-[25px] leading-tight font-bold tracking-[-.02em] text-[#292d22] sm:text-[29px] xl:text-[31px]">
            Ready to Take the First Step Towards Hair Restoration?
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-12">
            <button type="button" onClick={openBooking} className="inline-flex h-[47px] items-center rounded-full border border-[#d5ad58] bg-[#d5ad58] px-6 max-sm:px-2 font-serif  text-[16px] font-semibold text-[#292d22] transition hover:-translate-y-0.5 hover:bg-[#292d22] hover:text-white">
              Book Your Consultation →
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute -top-[100px] right-[3.5%] z-20 hidden h-[418px] w-[330px] overflow-hidden rounded-t-[180px] xl:block 2xl:right-[6%]">
        <Image
          src="/appoint-image.png"
          alt="Hair transplant specialist ready for a consultation"
          width={1024}
          height={1536}
          quality={95}
          className="h-full w-full object-cover object-top"
        />
        </div>
      </div>

      <div className="relative mx-auto mt-5 block max-w-[420px] overflow-hidden rounded-[24px] bg-[#f3dda1] max-sm:pt-0 pt-5 xl:hidden">
        <Image src="/appoint-image.png" alt="Hair transplant specialist" width={1024} height={1536} quality={95} className="mx-auto h-[390px] w-full object-cover object-top" />
      </div>
    </section>
  );
}
