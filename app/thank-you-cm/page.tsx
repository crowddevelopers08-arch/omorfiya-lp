import type { Metadata } from "next";
import Link from "next/link";
import SimpleNavbar from "@/component/simple-navbar";
import MinimalFooter from "@/component/thnakfooter";

export const metadata: Metadata = {
  title: "Thank You | Omorfiya",
  description: "Thank you for reaching out to Omorrfiya Wellness & Longevity Center.",
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#292d22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const nextSteps = [
  {
    number: "01",
    title: "We Review Your Request",
    description: "Our team goes through the details you shared to understand your concerns and goals.",
  },
  {
    number: "02",
    title: "We Get in Touch",
    description: "Expect a call or email from us shortly to confirm a convenient time for your consultation.",
  },
  {
    number: "03",
    title: "You Meet Your Doctor",
    description: "Dr Nishant Tripathi assesses your needs and walks you through suitable treatment options.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <SimpleNavbar />
      <main className="bg-[#fbf9f4] px-5 py-4 sm:px-8 sm:py-8">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-[#d5ad58]">
            <CheckIcon />
          </span>

          <p className="mt-6 font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#9c762d]">
            Request Received
          </p>
          <h1 className="mt-4 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-[1.1] tracking-[-.02em] text-[#292d22]">
            Thank You for Reaching Out
          </h1>
          <p className="mt-5 max-w-[520px] font-sans text-[.9rem] leading-[1.7] text-[#373c2e]/80">
            We&apos;ve received your consultation request. Our team will get in touch with you shortly to help plan your next step towards personalised, expert-led care at Omorrfiya.
          </p>

          {/* what happens next */}
          <div className="mt-2 w-full pt-4">
            {/* <p className="font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#9c762d]">What Happens Next</p> */}

            <div className="mt-0 grid grid-cols-1 gap-8 text-left sm:grid-cols-3 sm:gap-6 sm:text-center">
              {nextSteps.map((step) => (
                <div key={step.number} className="sm:flex sm:flex-col sm:items-center">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d5ad58]/60 font-serif text-base text-[#9c762d]">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-serif text-[1.1rem] font-normal leading-tight text-[#292d22]">{step.title}</h3>
                  <p className="mt-2 font-sans text-[.85rem] leading-[1.6] text-[#373c2e]/70">{step.description}</p>
                </div>
              ))}
            </div>
                      <Link
            href="/"
            className="group relative mt-9 inline-flex items-center justify-center overflow-hidden rounded-full bg-[#d5ad58] px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5 sm:text-[.8rem]"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
            <span className="relative">Back to Home</span>
          </Link>
          </div>
        </div>
      </main>
      <MinimalFooter />
    </>
  );
}
