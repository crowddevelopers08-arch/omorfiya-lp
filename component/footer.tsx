"use client";

import Image from "next/image";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="currentColor">
      <path d="M18.9 2H22l-7.7 8.8L23 22h-6.6l-5.2-6.8L5.2 22H2l8.2-9.4L1 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H18v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21H10V9Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5v5l5-2.5-5-2.5Z" fill="white" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

const workHours = [
  { day: "Mon - Fri", time: "10:00 - 19:00" },
  { day: "Saturday", time: "10:00 - 19:00" },
  { day: "Sunday", time: "Closed" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#book" },
];

export default function DenartFooter() {
  return (
    <footer className=" font-sans text-[#292d22]">
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 max-sm:py-8 py-15 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-start max-sm:gap-4 gap-12 sm:grid-cols-3 sm:gap-8">
            {/* Contact */}
            <div>
              <h3 className="text-[15px] font-extrabold tracking-[1px] text-[#292d22]">CONTACT</h3>
              <p className="mt-5 text-[15px] leading-[1.7] text-[#373c2e]/70">
                Unit 1301B, and 804B, 81crest, Linking Rd, Santacruz (West), Mumbai, Maharashtra 400054
              </p>
              <a
                href="tel:+919702013155"
                className="mt-3 block w-fit border-dotted border-[#c9c2b4] pb-0.5 text-[15px] font-sans text-[#9c762d]"
              >
                +91 9702013155
              </a>
              <a
                href="mailto:info@omorrfiya.com"
                className="mt-2 block w-fit border-dotted border-[#c9c2b4] pb-0.5 text-[15px] text-[#373c2e]/70"
              >
                info@omorrfiya.com
              </a>
            </div>

            {/* Work Time */}
            <div>
              <h3 className="text-[15px] font-extrabold tracking-[1px] text-[#292d22]">WORK TIME</h3>
              <div className="mt-5 space-y-4">
                {workHours.map((row) => (
                  <div key={row.day} className="flex items-center text-[15px]">
                    <span className="shrink-0 text-[#373c2e]/70">{row.day}</span>
                    <span className="mx-3 mb-1 flex-1 border-b border-dotted border-[#d9d0bb]" />
                    <span className="shrink-0 text-[#373c2e]/70">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl sm:p-8">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0">
                  <Image src="/omorfiyslogo.webp" alt="Omorrfiya" fill sizes="48px" className="object-contain" />
                </div>
                <div>
                  <p className="font-serif text-[1.3rem] leading-none text-[#292d22]">Omorrfiya</p>
                  <p className="mt-1 font-sans text-[.68rem] uppercase tracking-[.22em] text-[#9c762d]/70">
                    Wellness &amp; Longevity Center
                  </p>
                </div>
              </div>
              <p className="mt-5 font-sans text-[.95rem] leading-[1.7] text-[#373c2e]/70">
                A new-age destination for regenerative wellness, hair restoration and aesthetic transformation — where science meets luxury.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-[#e5ddc8] bg-[#f3dda1]/15">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:px-10 sm:text-left lg:px-16">
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-[14.5px] text-[#373c2e]/70">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-[#9c762d]">
                {link.label}
              </a>
            ))}
          </nav>
            <a href="/privacy-policy" className="transition-colors text-[14px] text-[#373c2e]/60 hover:text-[#373c2e]/60">
              Privacy Policy
            </a>
          <p className="text-[14px] text-[#373c2e]/60">
            © {new Date().getFullYear()} Omorrfiya. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="max-sm:hidden grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d5ad58]/60 text-[#9c762d] transition-colors hover:bg-[#d5ad58] hover:text-[#292d22] sm:absolute sm:right-10 sm:top-1/2 sm:-translate-y-1/2 lg:right-6"
          >
            <ChevronUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
