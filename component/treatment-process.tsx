"use client"

import Reveal from "@/component/reveal"
import { useBookingModal } from "@/component/booking-modal-context"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Share your concerns, expectations, medical history and treatment goals with our team.",
  },
  {
    number: "02",
    title: "Assessment",
    description: "Your condition, suitability and available treatment options are assessed carefully.",
  },
  {
    number: "03",
    title: "Personalised Plan",
    description: "A treatment plan is recommended based on your individual needs rather than a one-size-fits-all approach.",
  },
  {
    number: "04",
    title: "Treatment",
    description: "Your procedure or therapy is carried out using the planned protocol with a focus on comfort and safety.",
  },
  {
    number: "05",
    title: "Follow-Up & Care",
    description: "Post-treatment guidance and follow-up help support your recovery and overall treatment journey.",
  },
]

export default function TreatmentProcess() {
  const { open: openBookingModal } = useBookingModal()

  return (
    <section className="relative overflow-hidden bg-[#373c2e] px-5 py-8 text-[#fffaf0] sm:px-8 sm:py-20 lg:px-14 lg:py-14 xl:px-20">
      {/* <div aria-hidden className="absolute -top-48 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-[#d5ad58]/10 blur-[110px]" /> */}

      <div className="relative mx-auto max-w-[1600px]">
        <header className="mx-auto max-w-4xl text-center">
          <Reveal as="p" direction="down" className="font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#d5ad58]">
            Treatment Process
          </Reveal>
          <Reveal as="h2" direction="up" delay={120} className="mt-4 font-serif text-[clamp(2.4rem,4vw,4.25rem)] font-normal leading-[1.06] tracking-[-.03em]">
            How Your Treatment Journey Works
          </Reveal>
        </header>

        <div className="relative mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          <div aria-hidden className="absolute left-[10%] right-[10%] top-[29px] hidden lg:block">
            <div className="h-2 rounded-full bg-gradient-to-r from-transparent via-[#d5ad58]/20 to-transparent blur-[3px]" />
            <div className="absolute inset-x-0 top-[3px] h-px bg-gradient-to-r from-transparent via-[#d5ad58]/70 to-transparent" />
            <div className="process-line-flow absolute inset-x-3 top-[1px] h-[5px] bg-[repeating-linear-gradient(90deg,transparent_0,transparent_12px,rgba(213,173,88,.55)_12px,rgba(213,173,88,.55)_16px)] [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]" />
          </div>

          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              as="article"
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 100}
              className="group relative px-3 text-center sm:px-5"
            >
              <div
                className="process-step-pulse relative z-10 mx-auto grid size-16 place-items-center rounded-full border border-[#d5ad58]/60 bg-[#292d22] font-serif text-xl text-[#d5ad58] transition duration-300 group-hover:bg-[#d5ad58] group-hover:text-[#292d22]"
                style={{ animationDelay: `${index * 1.1}s` }}
              >
                {step.number}
              </div>
              <h3 className="mt-6 font-serif text-[clamp(1.35rem,1.6vw,1.65rem)] font-normal leading-tight">
                {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[260px] font-sans text-sm leading-6 text-[#fffaf0]/65">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={steps.length * 100} className="mt-12 text-center sm:mt-14">
          <button
            type="button"
            onClick={openBookingModal}
            className="group relative inline-flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-8 py-3.5 font-sans text-xs font-bold uppercase tracking-[.12em] text-[#292d22] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3dda1] sm:w-auto sm:text-[.8rem]"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
            <span className="relative">Start Your Journey</span>
          </button>
        </Reveal>
      </div>
    </section>
  )
}
