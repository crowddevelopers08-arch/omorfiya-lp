import type { Metadata } from "next";
import HtThankYouSection from "@/component/ht/thank-you-section";
import SimpleNavbar from "@/component/ht/simple-navbar";
import MinimalFooter from "@/component/ht/thnakfooter";

export const metadata: Metadata = {
  title: "Thank You | Omorrfiya Hair Transplant",
  description: "Thank you for requesting a hair restoration consultation at Omorrfiya Wellness & Longevity Center.",
};

export default function HairTransplantThankYouPage() {
  return (
    <>
      <SimpleNavbar />
      <HtThankYouSection />
      <MinimalFooter />
    </>
  );
}
