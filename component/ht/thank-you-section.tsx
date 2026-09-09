import Link from "next/link";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#292d22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const nextSteps = [
  {
    number: "01",
    title: "We Review Your Details",
    description: "Our team goes through your hair-loss concerns, history and restoration goals.",
  },
  {
    number: "02",
    title: "We Get in Touch",
    description: "Expect a call or email shortly to confirm a convenient time for your consultation.",
  },
  {
    number: "03",
    title: "You Meet Your Specialist",
    description: "Dr Nishant Tripathi assesses your donor area and walks you through suitable techniques.",
  },
];

export default function HtThankYouSection() {
  return (
    <main className="bg-[#fbf9f4] px-5 py-6 font-sans text-[#292d22] sm:px-8 sm:py-6 lg:px-16">
      <div className="mx-auto max-w-[860px]">
        <div className="rounded-[28px] border border-[#d5ad58]/25 bg-white px-6 py-4 text-center sm:px-12 sm:py-6">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#d5ad58]">
            <CheckIcon />
          </span>

          <p className="mt-3 font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#9c762d]">
            Consultation Request Received
          </p>

          <div className="mx-auto mt-2 h-[3px] w-12 rounded-sm bg-[#d5ad58]" />

          <h1 className="mt-2 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-[1.1] tracking-[-.02em] text-[#292d22]">
            Thank You for Reaching Out
          </h1>

          <p className="mx-auto mt-3 max-w-[520px] font-sans text-[.9rem] leading-[1.7] text-[#373c2e]/80">
            We&apos;ve received your hair restoration consultation request. Our team will get in
            touch with you shortly to help plan your next step towards personalised, doctor-led
            care at Omorrfiya.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-8 border-t border-[#e5ddc8] pt-6 text-left sm:grid-cols-3 sm:gap-4 sm:text-center">
            {nextSteps.map((step) => (
              <div key={step.number} className="sm:flex sm:flex-col sm:items-center">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d5ad58]/60 font-serif text-base text-[#9c762d]">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif text-[1.1rem] font-normal leading-tight text-[#292d22]">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-[.85rem] leading-[1.6] text-[#373c2e]/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/hair-transplant"
            className="group relative mt-5 inline-flex items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 sm:text-[.8rem]"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
            <span className="relative">Back to Hair Transplant</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
