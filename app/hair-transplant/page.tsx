import MedicalifeAbout from "@/component/ht/about-omorrfiya-section";
import AppointmentBanner from "@/component/ht/appointment";
import WhoWeAreSection from "@/component/ht/clinicsection";
import EquipmentRentalHero from "@/component/ht/equipment-rental-hero";
import PopularQuestionsSection from "@/component/ht/faq";
import DenartFooter from "@/component/ht/footer";
import HairTransplantOptions from "@/component/ht/hair-transplant-options";
import Navbar from "@/component/ht/navbar";
import WhyChooseUs from "@/component/ht/whychooseus";

export default function HairTransplantPage() {
  return <main>
    <Navbar />
    <EquipmentRentalHero />
    <WhyChooseUs />
    <HairTransplantOptions />
    <MedicalifeAbout />
    <WhoWeAreSection />
    <PopularQuestionsSection />
    <AppointmentBanner />
    <DenartFooter />
    </main>;
}
