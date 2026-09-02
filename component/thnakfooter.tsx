"use client";

function ChevronUpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

export default function MinimalFooter() {
  return (
    <footer className="relative border-t-4 border-[#d5ad58] bg-[#f3dda1]/15 font-sans text-[#292d22]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:px-10 sm:text-left lg:px-16">
        <a href="/privacy-policy" className="text-[14px] text-[#373c2e]/60 transition-colors hover:text-[#9c762d]">
          Privacy Policy
        </a>

        <p className="text-[14px] text-[#373c2e]/60">
          © {new Date().getFullYear()} Omorrfiya. All rights reserved.
        </p>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d5ad58]/60 text-[#9c762d] transition-colors hover:bg-[#d5ad58] hover:text-[#292d22] max-sm:hidden sm:absolute sm:right-10 sm:top-1/2 sm:-translate-y-1/2 lg:right-6"
        >
          <ChevronUpIcon />
        </button>
      </div>
    </footer>
  );
}
