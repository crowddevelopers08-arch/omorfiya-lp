import Image from "next/image";

const trustSignals = ["Doctor-Led Care", "Advanced Technology", "Personalised Plans", "Safety First", "Natural-Looking Results"];
const treatments = ["Liposuction", "Tummy Tuck", "Gynecomastia", "Body Sculpting", "Hair Transplant"];

const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 shrink-0" fill="none">
    <circle cx="10" cy="10" r="9" fill="currentColor" opacity=".12" />
    <path d="m6 10 2.4 2.4L14 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[#fff9f7] text-[#241c1c]">
      <div aria-hidden className="absolute -left-32 top-20 size-80 rounded-full bg-[#f52227]/8 blur-3xl" />
      <div aria-hidden className="absolute -right-20 bottom-0 size-96 rounded-full bg-[#e9b5a8]/25 blur-3xl" />

      <div className="mx-auto grid min-h-svh max-w-[1440px] items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.04fr_.96fr] lg:px-14 lg:py-14 xl:px-20">
        <div className="relative z-10 max-w-3xl py-4">
          <div className="hero-reveal hero-delay-1 inline-flex items-center gap-2 rounded-full border border-[#f52227]/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d71920] shadow-sm backdrop-blur sm:text-sm">
            <span className="size-2 rounded-full bg-[#f52227] shadow-[0_0_0_5px_rgba(245,34,39,.1)]" />
            Advanced Aesthetic Care
          </div>

          <h1 className="hero-reveal hero-delay-2 mt-6 text-[clamp(2.55rem,6vw,5.4rem)] font-semibold leading-[.98] tracking-[-0.055em]">
            Transform Your Body.
            <span className="mt-2 block text-[#f52227]">Restore Your Hair.</span>
            <span className="mt-2 block">Elevate Your Confidence.</span>
          </h1>

          <p className="hero-reveal hero-delay-3 mt-6 max-w-2xl text-base leading-7 text-[#6e6262] sm:text-lg sm:leading-8">
            Advanced body contouring and hair restoration treatments with doctor-led care, modern technology and personalised treatment plans designed around your individual goals.
          </p>

          <div className="hero-reveal hero-delay-4 mt-7 flex flex-wrap gap-x-5 gap-y-3 border-y border-[#241c1c]/10 py-5">
            {trustSignals.map((signal) => (
              <span key={signal} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#514747] sm:text-sm">
                <span className="text-[#f52227]"><CheckIcon /></span>{signal}
              </span>
            ))}
          </div>

          <div className="hero-reveal hero-delay-5 mt-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b8585]">Key treatments</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {treatments.map((treatment) => (
                <span key={treatment} className="rounded-full border border-[#241c1c]/10 bg-white px-3.5 py-2 text-xs font-semibold shadow-sm sm:text-sm">{treatment}</span>
              ))}
            </div>
          </div>

          <a href="#book" className="hero-reveal hero-delay-6 group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#f52227] px-7 text-sm font-bold text-white shadow-[0_16px_35px_rgba(245,34,39,.25)] transition hover:-translate-y-0.5 hover:bg-[#211b1b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f52227] sm:text-base">
            Book Your Consultation
            <span aria-hidden className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="hero-reveal hero-delay-3 relative mx-auto w-full max-w-[620px] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#ead8d3] shadow-[0_30px_80px_rgba(66,38,38,.16)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786695490/doctor1.png" alt="Aesthetic doctor providing personalised body and hair restoration care" fill priority sizes="(max-width: 1024px) 90vw, 46vw" className="object-cover object-top" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#241c1c]/30 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-5 left-3 right-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
            <div className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#f52227]/10 text-[#f52227]"><CheckIcon /></span>
              <div>
                <p className="text-sm font-bold">Care designed around you</p>
                <p className="mt-0.5 text-xs leading-5 text-[#756868]">Thoughtful guidance. Personalised treatment. Confident results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
