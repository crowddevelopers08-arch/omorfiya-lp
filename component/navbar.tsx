"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useBookingModal } from "@/component/booking-modal-context";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 4h3.2l1.5 4.2-2 1.6a12 12 0 0 0 5.5 5.5l1.6-2 4.2 1.5v3.2c0 1-.8 1.7-1.8 1.6A16.5 16.5 0 0 1 3 5.8C2.9 4.8 3.6 4 4.5 4Z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5.5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3.5v3M16 3.5v3" />
      <path d="M9.5 14.2l1.8 1.8 3.2-3.4" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#292d22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#book" },
];

// Placeholder number — swap for the clinic's real contact line.
const PHONE_DISPLAY = "+919876543210";
const PHONE_HREF = "tel:+919876543210";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openBookingModal } = useBookingModal();

  return (
    <header className="sticky top-0 z-50 bg-white font-sans">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-14 xl:px-20">
        {/* left: logo */}
        <Link href="/" className="relative h-12 w-[130px] shrink-0 sm:h-14 sm:w-[150px]">
          <Image src="/omorfiyslogo.webp" alt="Omorrfiya" fill sizes="150px" className="object-contain object-left" priority />
        </Link>

        {/* center: nav links */}
        <nav className="hidden items-center gap-7 font-sans lg:flex xl:gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[.8rem] font-sans font-bold uppercase tracking-[.04em] transition-colors ${
                index === 0 ? "text-[#d5ad58]" : "text-[#292d22] hover:text-[#d5ad58]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* right: phone + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href={PHONE_HREF} className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#d5ad58]">
              <PhoneIcon />
            </span>
            <span className="text-[.9rem] font-sans text-[#292d22]">{PHONE_DISPLAY}</span>
          </a>

          <button
            type="button"
            onClick={openBookingModal}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#d5ad58] px-5 py-3.5 text-[.75rem] font-bold uppercase tracking-[.08em] text-[#292d22] transition-transform hover:-translate-y-0.5"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
            <span className="relative inline-flex items-center gap-2">
              <BookIcon />
              Book Appointment
            </span>
          </button>
        </div>

        {/* mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="grid h-10 w-10 place-items-center rounded-full border border-[#e5ddc8] lg:hidden"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-[#e5ddc8] bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[.85rem] font-bold uppercase tracking-[.04em] ${
                  index === 0 ? "text-[#d5ad58]" : "text-[#292d22]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex items-center gap-4">
            <a href={PHONE_HREF} className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#d5ad58]">
                <PhoneIcon />
              </span>
              <span className="text-[.9rem] font-bold text-[#292d22]">{PHONE_DISPLAY}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              openBookingModal();
            }}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d5ad58] px-5 py-3 text-[.75rem] font-bold uppercase tracking-[.08em] text-[#292d22] transition hover:bg-[#f3dda1]"
          >
            <BookIcon />
            Book Online
          </button>
        </div>
      )}
    </header>
  );
}
