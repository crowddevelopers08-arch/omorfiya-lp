"use client";

import { useEffect, useState } from "react";
import Reveal from "../reveal";
import { scrollToHtForm } from "./nav-scroll";

const reasons = [
  { title: "[X+] Successful Patients", bg: "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955322/why-choose-1.jpg" },
  { title: "Doctor-Led Hair Restoration", bg: "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955314/dr-nishant-profile.webp" },
  { title: "Personalised Treatment Planning", bg: "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955322/why-choose-2.jpg" },
  { title: "Advanced Hair Transplant Techniques", bg: "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955322/why-choose-3.jpg" },
  { title: "Natural Hairline Design", bg: "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955329/why-choose-4.png" },
  { title: "Complete Post-Treatment Support", bg: "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955323/why-choose-5.webp" },
];

const duplicated = [...reasons, ...reasons];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export default function WhyChooseUs() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="why-choose-us"
      style={{
        padding: isMobile ? "36px 0" : "36px 0",
        background: "#fff",
        overflow: "hidden",
        fontFamily: "var(--font-ui-sans)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: isMobile ? "26px" : "40px", padding: "0 16px" }}>
        <Reveal
          as="p"
          direction="down"
          style={{
            fontSize: isMobile ? "11px" : "13px",
            letterSpacing: isMobile ? "1.4px" : "2px",
            textTransform: "uppercase",
            color: "var(--brand-dark)",
            fontWeight: 700,
            marginBottom: "10px",
            fontFamily: "var(--font-ui-sans)",
          }}
        >
          WHY CHOOSE OMORRFIYA?
        </Reveal>
        <Reveal
          direction="up"
          delay={80}
          style={{
            width: "48px",
            height: "3px",
            background: "var(--brand-gold)",
            borderRadius: "2px",
            margin: "0 auto 12px",
          }}
        />
        <Reveal as="h2" direction="up" delay={140} className="mt-4 font-serif text-[clamp(2rem,3.2vw,3.2rem)] font-normal leading-[1.08] tracking-[-.02em] text-[#292d22]">
          Why Patients Choose <span style={{ color: "var(--brand-gold)" }}>Omorrfiya</span>
        </Reveal>
      </div>

      <Reveal direction="up" delay={120} style={{ position: "relative", width: "100%" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: isMobile ? "34px" : "80px",
            background: "linear-gradient(to right, #fff, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: isMobile ? "34px" : "80px",
            background: "linear-gradient(to left, #fff, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: isMobile ? "14px" : "20px",
            padding: isMobile ? "6px 16px" : "8px 20px",
            width: "max-content",
            
            animation: "painMarquee 45s linear infinite",
          }}
        >
          {duplicated.map((item, idx) => (
            <ReasonCard key={`${item.title}-${idx}`} item={item} isMobile={isMobile} />
          ))}
        </div>
      </Reveal>

      <div style={{ textAlign: "center", marginTop: "32px", padding: "0 16px" }}>
        <Reveal direction="up" delay={80}>
          <button
            type="button"
            onClick={scrollToHtForm}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#d5ad58] px-5 py-3.5 text-[.75rem] font-bold uppercase tracking-[.08em] text-white transition-transform hover:-translate-y-0.5 hover:text-[#292d22]"
          >
            <span aria-hidden className="absolute inset-0 scale-x-0 bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />
            <span className="relative inline-flex items-center gap-2">
              Book Your Consultation
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#292d22] text-white">
                <ArrowIcon />
              </span>
            </span>
          </button>
        </Reveal>
      </div>

      <style>{`
        @keyframes painMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .pain-card-wrap:hover .pain-card-bg {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}

type Reason = { title: string; bg: string };

function ReasonCard({ item, isMobile }: { item: Reason; isMobile: boolean }) {
  const title = item.title;
  return (
    <div
      className="pain-card-wrap"
      style={{
        width: isMobile ? "230px" : "280px",
        height: isMobile ? "275px" : "330px",
        flexShrink: 0,
        borderTopLeftRadius: isMobile ? "24px" : "10px",
        borderTopRightRadius: isMobile ? "24px" : "10px",
        borderBottomRightRadius: isMobile ? "24px" : "10px",
        borderBottomLeftRadius: isMobile ? "24px" : "10px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 14px 34px rgba(8,55,78,0.16)",
        cursor: "pointer",
      }}
    >
      <div
        className="pain-card-bg"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${item.bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.6s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(5,5,15,0.88) 0%, rgba(5,5,15,0.3) 55%, transparent 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: isMobile ? "16px" : "20px",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#fff",
            fontSize: isMobile ? "16px" : "19px",
            fontWeight: 800,
            lineHeight: 1.18,
            margin: "0 0 8px",
            fontFamily: "var(--font-ui-serif)",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </p>

      </div>
    </div>
  );
}
