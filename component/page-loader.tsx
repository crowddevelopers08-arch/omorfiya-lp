"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LOGO_SRC = "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955320/omorfiyslogo.webp";

// Safety net: never keep the site hidden longer than this, even if some
// third-party asset (GTM, a slow image) holds up the window "load" event.
const MAX_WAIT_MS = 8000;
const FADE_MS = 500;

// Full-screen splash shown on the first visit to any page, until the page
// (images, fonts, scripts) has fully loaded. Rendered visible on the server so
// it covers the page from the very first paint.
export default function PageLoader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let fadeTimer: number | undefined;

    const hide = () => {
      setHiding(true);
      fadeTimer = window.setTimeout(() => setGone(true), FADE_MS);
    };

    // page already finished loading before hydration → hide on next frame
    const frame = document.readyState === "complete" ? window.requestAnimationFrame(hide) : undefined;
    if (frame === undefined) window.addEventListener("load", hide, { once: true });
    const maxTimer = window.setTimeout(hide, MAX_WAIT_MS);

    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      window.removeEventListener("load", hide);
      window.clearTimeout(maxTimer);
      window.clearTimeout(fadeTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <>
      {/* without JS the loader could never hide, so don't show it at all */}
      <noscript>
        <style>{`#site-page-loader{display:none!important}`}</style>
      </noscript>
      <div
        id="site-page-loader"
        role="status"
        aria-live="polite"
        aria-label="Loading"
        className={`fixed inset-0 z-[500] flex flex-col items-center justify-center gap-7 bg-[#fbf9f4] px-6 transition-opacity ease-out motion-reduce:transition-none ${
          hiding ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        style={{ transitionDuration: `${FADE_MS}ms` }}
      >
        <div className="relative h-14 w-40 animate-pulse sm:h-16 sm:w-48">
          <Image src={LOGO_SRC} alt="Omorrfiya" fill sizes="192px" className="object-contain" priority />
        </div>
        <div className="relative h-10 w-10">
          <span className="absolute inset-0 rounded-full border-[3px] border-[#d5ad58]/25" />
          <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-[#d5ad58] motion-reduce:animate-none" />
        </div>
      </div>
    </>
  );
}
