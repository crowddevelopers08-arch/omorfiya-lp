import type { MouseEvent } from "react";

export type HtNavLink = { label: string; href: string };

// Shared nav links for the hair-transplant landing page.
// Each href points to a section id rendered on /hair-transplant.
export const HT_NAV_LINKS: HtNavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#hair-transplant-options" },
  { label: "Doctor", href: "#doctor" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#book" },
];

// Height of the sticky navbar — the scroll target stops this far below the top.
const HEADER_OFFSET = 88;

/**
 * Smoothly scrolls to the section referenced by an in-page hash link and
 * stops cleanly below the sticky header. Falls back to default behaviour
 * for non-hash hrefs or missing targets.
 */
export function handleHtNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith("#")) return;

  const target = document.getElementById(href.slice(1));
  if (!target) return;

  event.preventDefault();

  const top =
    target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
  window.history.replaceState(null, "", href);
}
