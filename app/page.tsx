import AboutOmorrfiyaSection from "@/component/about-omorrfiya-section";
import WhoWeAreSection from "@/component/clinicsection";
import PopularQuestionsSection from "@/component/faq";
import FinalCtaOmorrfiya from "@/component/finalcta";
import DenartFooter from "@/component/footer";
import HeroSection from "@/component/hero-section";
import Navbar from "@/component/navbar";
import TreatmentProcess from "@/component/treatment-process";
import WellnessLongevitySection from "@/component/wellness-longevity-section";
import WhyChooseSection from "@/component/why-choose-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <WellnessLongevitySection />
        <TreatmentProcess />
        <AboutOmorrfiyaSection />
        <WhoWeAreSection />
        <PopularQuestionsSection />
        <FinalCtaOmorrfiya />
        <DenartFooter />
      </main>
    </>
  );
}
