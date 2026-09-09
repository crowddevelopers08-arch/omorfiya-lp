"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Direction = "left" | "right" | "up" | "down";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  as = "div",
  className = "",
  style,
}: {
  children?: ReactNode;
  direction?: Direction;
  /** stagger delay in ms, applied once the element is in view */
  delay?: number;
  as?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`.trim(),
      style: { ...style, "--reveal-delay": `${delay}ms` } as CSSProperties,
    },
    children
  );
}
