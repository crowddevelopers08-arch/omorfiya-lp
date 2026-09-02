import type { Metadata } from "next";
import SimpleNavbar from "@/component/simple-navbar";
import MinimalFooter from "@/component/thnakfooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Omorfiya",
  description: "How Omorrfiya Wellness & Longevity Center collects, uses and protects your information.",
};

const sections = [
  {
    title: "1. Introduction",
    body: "Omorrfiya Wellness & Longevity Center (\"Omorrfiya\", \"we\", \"us\" or \"our\") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect through this website, how we use and protect it, and the choices available to you.",
  },
  {
    title: "2. Information We Collect",
    body: "We may collect information you provide directly to us, such as your name, phone number, email address and any details you share when booking a consultation, filling out an enquiry form, or contacting us. We may also collect limited technical information automatically, such as your browser type, device information and pages visited, to help us understand how our website is used.",
  },
  {
    title: "3. How We Use Your Information",
    body: "We use the information we collect to respond to your enquiries, schedule and manage consultations, communicate with you about our treatments and services, improve our website and patient experience, and comply with applicable legal and regulatory requirements. We do not use information you share with us to make automated treatment decisions.",
  },
  {
    title: "4. Cookies & Similar Technologies",
    body: "Our website may use cookies or similar technologies to remember your preferences and understand how visitors interact with our pages. You can control or disable cookies through your browser settings; doing so may affect certain features of the website.",
  },
  {
    title: "5. Sharing of Information",
    body: "We do not sell your personal information. We may share information with trusted service providers who help us operate our website and clinic (such as booking, communication or IT service providers), or where required by law, regulation or legal process. Any third party we work with is expected to protect your information in a manner consistent with this policy.",
  },
  {
    title: "6. Data Security",
    body: "We take reasonable administrative and technical measures to protect the personal information you share with us from unauthorised access, loss or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "7. Your Choices & Rights",
    body: "You may contact us at any time to ask what personal information we hold about you, to request corrections, or to ask us to delete information you have shared with us, subject to any legal or record-keeping requirements applicable to healthcare and aesthetic service providers.",
  },
  {
    title: "8. Children's Privacy",
    body: "Our website and services are intended for adults seeking aesthetic and wellness consultations. We do not knowingly collect personal information from children.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal or regulatory reasons. The updated version will be posted on this page with a revised effective date.",
  },
  {
    title: "10. Contact Us",
    body: "If you have any questions about this Privacy Policy or how your information is handled, please reach out to us at info@omorrfiya.com or +91 9702013155, or visit us at Unit 1301B & 804B, 81 Crest, Linking Road, Santacruz (West), Mumbai, Maharashtra 400054.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SimpleNavbar />
      <main className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-[1040px]">
          <p className="font-sans text-[.68rem] font-bold uppercase tracking-[.3em] text-[#9c762d]">Legal</p>
          <h1 className="mt-4 font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.1] tracking-[-.02em] text-[#292d22]">
            Privacy Policy
          </h1>
          {/* <p className="mt-3 font-sans text-[.85rem] text-[#373c2e]/60">Last updated: 1 September 2026</p> */}

          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-[1.25rem] font-normal leading-tight text-[#292d22]">{section.title}</h2>
                <p className="mt-2.5 font-sans text-[.9rem] leading-[1.75] text-[#373c2e]/80">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <MinimalFooter />
    </>
  );
}
