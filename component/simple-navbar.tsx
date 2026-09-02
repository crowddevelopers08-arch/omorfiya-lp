import Image from "next/image";
import Link from "next/link";

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

export default function SimpleNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white font-sans">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-14 xl:px-20">
        {/* left: logo */}
        <Link href="/" className="relative h-11 w-[120px] shrink-0 sm:h-14 sm:w-[150px]">
          <Image src="/omorfiyslogo.webp" alt="Omorrfiya" fill sizes="150px" className="object-contain object-left" priority />
        </Link>

        {/* right: back to home */}
        <Link
          href="/"
          aria-label="Back to Home"
          className="group relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-[#d5ad58] text-[#292d22] transition-transform hover:-translate-y-0.5 sm:flex sm:h-auto sm:w-auto sm:items-center sm:gap-2 sm:px-5 sm:py-3"
        >
          <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
          <span className="relative grid place-items-center sm:inline-flex sm:items-center sm:gap-2">
            <ArrowLeftIcon />
            <span className="hidden text-[.75rem] font-bold uppercase tracking-[.06em] sm:inline">Back to Home</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
