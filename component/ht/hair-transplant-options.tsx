"use client";

import Reveal from "../reveal";
import { scrollToHtForm } from "./nav-scroll";

type Technique = {
  title: string;
  description: string;
  benefits: string[];
};

const fue: Technique = {
  title: "FUE Hair Transplant",
  description:
    "Individual hair follicles are extracted from the donor area and implanted into thinning or bald areas.",
  benefits: [
    "Minimally invasive follicular extraction",
    "No linear donor scar",
    "Personalised hairline planning",
    "Precise graft placement",
    "Relatively shorter recovery period",
  ],
};

const dhi: Technique = {
  title: "DHI Hair Transplant",
  description:
    "Extracted follicles are implanted using a specialised technique for better control over angle, direction and placement.",
  benefits: [
    "Controlled graft placement",
    "Precise direction and angle planning",
    "Focused density planning",
    "Natural-looking hairline design",
    "Personalised approach based on graft requirements",
  ],
};

const centerImage = "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955325/herobanner-3.png";

function CheckIcon() {
  return (
    <img
      src="https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955320/icons-20.png"
      alt=""
      aria-hidden="true"
      className="mt-0.5 h-6 w-6 shrink-0"
    />
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function TechniqueColumn({ data, align }: { data: Technique; align: "left" | "right" }) {
  const isRight = align === "right";
  const dir = isRight ? "right" : "left";
  return (
    <div
      className={`flex flex-col items-start text-left ${
        isRight ? "min-[900px]:items-end min-[900px]:text-right" : ""
      }`}
    >
      <Reveal
        as="h3"
        direction={dir}
        className="m-0 mb-2.5 text-[21px] font-extrabold tracking-[-0.01em] text-[var(--brand-dark)] font-serif min-[900px]:text-[25px]"
      >
        {data.title}
      </Reveal>

      <Reveal
        as="p"
        direction={dir}
        delay={90}
        className="m-0 mb-[22px] max-w-[360px] text-sm leading-relaxed text-[#373c2e]/80 min-[900px]:text-[15px]"
      >
        {data.description}
      </Reveal>

      <Reveal
        as="p"
        direction={dir}
        delay={160}
        className="m-0 mb-3.5 text-xs font-bold uppercase tracking-[1.4px] text-[var(--brand-gold)]"
      >
        Benefits may include
      </Reveal>

      <ul className="m-0 flex w-full list-none flex-col gap-[11px] p-0">
        {data.benefits.map((benefit, i) => (
          <Reveal
            as="li"
            key={benefit}
            direction={dir}
            delay={220 + i * 70}
            className={`flex items-start gap-2.5 text-[13.5px] leading-normal text-[var(--brand-dark)] min-[900px]:text-[14px] ${
              isRight ? "min-[900px]:flex-row-reverse min-[900px]:text-right" : ""
            }`}
          >
            <CheckIcon />
            <span>{benefit}</span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function HairTransplantOptions() {
  return (
    <section
      id="hair-transplant-options"
      className="flex flex-col justify-center bg-white py-11 font-sans min-[900px]:min-h-screen"
    >
      <div className="mx-auto max-w-[1180px] px-5 text-center">
        <Reveal
          as="p"
          direction="down"
          className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.4px] text-[var(--brand-dark)] min-[900px]:text-[13px] min-[900px]:tracking-[2px]"
        >
          Hair Transplant Options
        </Reveal>

        <Reveal direction="up" delay={80} className="mx-auto mb-1.5 h-[3px] w-12 rounded-sm bg-[var(--brand-gold)]" />

        <Reveal
          as="h2"
          direction="up"
          delay={140}
          className="mt-4 font-serif text-[clamp(2rem,3.2vw,3.2rem)] font-normal leading-[1.08] tracking-[-.02em] text-[#292d22]"
        >
          Advanced Techniques for{" "}
          <span className="text-[var(--brand-gold)]">Personalised Hair Restoration</span>
        </Reveal>

        <Reveal
          as="p"
          direction="up"
          delay={220}
          className="mx-auto mt-1 max-w-[620px] text-sm leading-relaxed text-[#373c2e]/80 min-[900px]:text-base"
        >
          The right technique is recommended based on your hair-loss pattern, donor area
          and restoration goals.
        </Reveal>
      </div>

      {/* FUE (left) · image (center) · DHI (right) */}
      <div className="mx-auto mt-4 w-full max-w-[1180px] px-5 min-[900px]:mt-5">
        <div className="grid grid-cols-1 items-center gap-10 min-[900px]:grid-cols-[1fr_minmax(0,340px)_1fr] min-[900px]:gap-12">
          <TechniqueColumn data={fue} align="right" />

          <Reveal
            direction="up"
            delay={120}
            className="h-[280px] w-full overflow-hidden rounded-tl-[28px] rounded-tr-[6px] rounded-br-[28px] rounded-bl-[6px] min-[900px]:h-[460px]"
          >
            <div
              aria-hidden="true"
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${centerImage}')` }}
            />
          </Reveal>

          <TechniqueColumn data={dhi} align="left" />
        </div>
      </div>

      <div className="mt-10 px-5 text-center min-[900px]:mt-6">
        <Reveal direction="up" delay={80}>
          <button
            type="button"
            onClick={scrollToHtForm}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#d5ad58] px-5 py-3.5 text-[.75rem] font-bold uppercase tracking-[.08em] text-white transition-transform hover:-translate-y-0.5 hover:text-[#292d22]"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
            <span className="relative inline-flex items-center gap-2">
              Know Which Technique Suits You
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#292d22] text-white">
                <ArrowIcon />
              </span>
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
