import type { Metadata } from "next";
import HtPrivacyPolicySection from "@/component/ht/privacy-policy-section";
import SimpleNavbar from "@/component/ht/simple-navbar";
import MinimalFooter from "@/component/ht/thnakfooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Omorrfiya Hair Transplant",
  description: "How Omorrfiya Wellness & Longevity Center collects, uses and protects information from the hair restoration landing page.",
};

export default function HairTransplantPrivacyPolicyPage() {
  return (
    <>
      <SimpleNavbar />
      <HtPrivacyPolicySection />
      <MinimalFooter />
    </>
  );
}
