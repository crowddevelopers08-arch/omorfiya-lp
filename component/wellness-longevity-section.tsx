import Image from "next/image"
import Reveal from "@/component/reveal"

const services = [
  {
    title: "Suitable for:",
    description: "Abdomen • Waist • Thighs • Arms • Other Selected Areas",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 6c1.5 5 1.5 15 0 20M23 6c-1.5 5-1.5 15 0 20M9.5 12c4 2 9 2 13 0M9.5 20c4-2 9-2 13 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "May Help With:",
    description: "Excess Skin • Loose Abdomen • Muscle Laxity • Post-Weight-Loss Changes",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 9c5 2 11 2 16 0M8 23c5-2 11-2 16 0M11 7c-2 6-2 12 0 18M21 7c2 6 2 12 0 18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Treatment Focus:",
    description: "Chest Contouring • Excess Tissue Reduction • Improved Definition",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 8c3 0 5 2 6 5l3 8 3-8c1-3 3-5 6-5M8 23c4-1 6-3 8-6 2 3 4 5 8 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Treatment Focus:",
    description: "Fat Reduction • Body Shaping • Contouring • Improved Definition",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 16h16M16 8v16M10.5 10.5l11 11M21.5 10.5l-11 11" strokeLinecap="round" />
        <circle cx="16" cy="16" r="10" />
      </svg>
    ),
  },
  {
    title: "Treatment Focus:",
    description: "Receding Hairline • Hair Thinning • Bald Areas • Hairline Restoration",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 24c0-8 2-16 8-16s8 8 8 16M11 17c2-3 3-5 5-8M16 17c1-3 2-5 2-8M21 17c0-3-1-5-3-8" strokeLinecap="round" />
      </svg>
    ),
  },
]

const treatmentContent = [
  {
    title: "Liposuction",
    description: "Designed to remove localised fat deposits from selected areas and improve overall body contours.",
  },
  {
    title: "Tummy Tuck",
    description: "Helps to address excess the abdominal skin and weakened abdominal muscles to create a firmer and more defined midsection.",
  },
  {
    title: "Gynecomastia",
    description: "Designed for men, concerned about excess chest tissue or fat and looking for a flatter, more proportionate chest contour.",
  },
  {
    title: "Body Sculpting",
    description: "Targets the selected areas of stubborn fat and support improved body definition without surgery.",
  },
  {
    title: "Hair Transplant",
    description: "Customised FUE Hair Transplant uses precision techniques and personalised hairline planning to restore thinning or lost hair while maintaining a natural appearance.",
  },
]

export default function WellnessLongevitySection() {
  return (
    <section id="services" className="scroll-mt-24 bg-white px-5 py-6 text-[#26251f] sm:px-7 sm:py-8 lg:px-10 lg:py-14 xl:px-12">
      <div className="mx-auto max-w-[1680px]">
        <header className="mx-auto max-w-4xl text-center">
          <Reveal as="p" direction="down" className="font-sans text-[.62rem] font-bold uppercase tracking-[.28em] text-[#9c762d]">
            Treatments Section
          </Reveal>
          <Reveal as="h2" direction="up" delay={120} className="mt-1.5 font-serif text-[clamp(2.4rem,4vw,3.25rem)] font-normal leading-[1.06] tracking-[-.03em] text-[#292d22]">
            Treatments Designed Around Your Goals
          </Reveal>
        </header>

      <div className="mt-10 grid min-w-0 items-stretch gap-5 lg:h-[535px] lg:grid-cols-3 lg:gap-4 xl:gap-5">
        <Reveal direction="left" className="relative min-h-[420px] min-w-0 overflow-hidden rounded-[15px] bg-[#eee5d9] lg:h-full lg:min-h-0">
          <Image
            src="/wellness-longevity-treatment.png"
            alt="Red light facial treatment in a luxury wellness clinic"
            fill
            sizes="(max-width: 1024px) 100vw, 34vw"
            className="object-cover object-center"
          />
        </Reveal>

        <Reveal direction="up" delay={150} className="grid min-w-0 grid-rows-5 divide-y divide-[#cdbb96]/55">
          {treatmentContent.map((treatment, index) => (
            <article key={treatment.title} className="flex min-h-0 flex-col justify-center py-2 first:pt-0 last:pb-0">
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-[.54rem] font-semibold tracking-[.18em] text-[#9c762d]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-[clamp(1.3rem,1.45vw,1.55rem)] font-normal leading-tight tracking-[-.02em]">
                  {treatment.title}
                </h2>
              </div>
              <p className="mt-1 pl-7 font-sans text-[.76rem] leading-[1.4] text-[#806f62] xl:text-[.82rem]">
                {treatment.description}
              </p>
            </article>
          ))}
        </Reveal>

        <Reveal direction="right" delay={250} className="hidden lg:grid lg:grid-rows-5 lg:divide-y lg:divide-[#cdbb96]/55">
          {services.map((service, index) => (
            <article key={`${service.title}-${index}`} className="grid min-h-0 grid-cols-[42px_1fr] items-center gap-3 py-2 first:pt-0 last:pb-0">
              <div className="grid size-[42px] place-items-center rounded-full border border-[#cdbb96]/70 text-[#9c762d] [&_svg]:size-[18px]">
                {service.icon}
              </div>
              <div className="pt-0.5">
                <h3 className="font-sans text-[.75rem] font-medium leading-4 text-black xl:text-[.8rem]">
                  {service.title}
                </h3>
                <p className="mt-1 font-sans text-[.74rem] leading-[1.38] text-[#8a786c] xl:text-[.8rem]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </Reveal>

        {/* mobile / tablet — single scrollable row */}
        <Reveal direction="right" delay={250} className="min-w-0 lg:hidden">
          <div className="scrollbar-none -mx-5 flex gap-3 overflow-x-auto px-5">
            {services.map((service, index) => (
              <div
                key={`${service.title}-mobile-${index}`}
                className="flex w-[200px] shrink-0 flex-col gap-3 rounded-2xl border border-[#cdbb96]/50 bg-[#fbf9f4] p-4"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-full border border-[#cdbb96]/70 text-[#9c762d] [&_svg]:size-[18px]">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-sans text-[.78rem] font-medium leading-4 text-black">{service.title}</h3>
                  <p className="mt-1.5 font-sans text-[.72rem] leading-[1.4] text-[#8a786c]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      </div>
    </section>
  )
}
