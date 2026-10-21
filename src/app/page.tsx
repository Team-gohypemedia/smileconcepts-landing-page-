import Navbar from "@/components/layout/Navbar";
import SectionStepper from "@/components/layout/SectionStepper";
import MobileSectionBar from "@/components/layout/MobileSectionBar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Hero from "@/components/sections/Hero";
import ServicesTicker from "@/components/sections/ServicesTicker";
import VisualStory from "@/components/sections/VisualStory";
import AllOn4VsAllOnX from "@/components/sections/AllOn4VsAllOnX";
import VisualBeforeAfter from "@/components/sections/VisualBeforeAfter";
import AllOn4Overview from "@/components/sections/AllOn4Overview";
import AllOn4ScrollFeatures from "@/components/sections/AllOn4ScrollFeatures";
import AllOn4ImplantSurgery from "@/components/sections/AllOn4ImplantSurgery";
import AllOn4VsDentures from "@/components/sections/AllOn4VsDentures";
import AllOn4Cost from "@/components/sections/AllOn4Cost";
import AllOn4SnapOn from "@/components/sections/AllOn4SnapOn";
import CompleteMySmile from "@/components/sections/CompleteMySmile";
import ImportantInformation from "@/components/sections/ImportantInformation";
import AllOn4Process from "@/components/sections/AllOn4Process";
import OurPractice from "@/components/sections/OurPractice";
import Team from "@/components/sections/Team";
import Affiliations from "@/components/sections/Affiliations";
import Testimonials from "@/components/sections/Testimonials";
import AllOn4FAQ from "@/components/sections/AllOn4FAQ";
import CTABanner from "@/components/sections/CTABanner";

// Section order follows the "All on X Content Manish" doc. The hero, the pinned
// Suitability showcase and the Process + stacking cards section are kept as they are.
export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <SectionStepper />
      <MobileSectionBar />
      <main>
        {/* 1. Cinematic Hero with Scroll Video Scrubbing */}
        <Hero />

        {/* 2. Key Social Proof & Trust Ticker */}
        <ServicesTicker />

        {/* 3. H1: All on 4 Dental Implants & All on X in Sydney */}
        <VisualStory />

        {/* 4. Real All on 4 Results (Before & After) */}
        <VisualBeforeAfter />

        {/* 4b. Trusted by Sydney Patients (Google Reviews) */}
        <Testimonials />

        {/* 5. What are All on 4 Dental Implants (full arch)? */}
        <AllOn4Overview />

        {/* 6. All on 4 vs All on X: What Do These Names Mean? */}
        <AllOn4VsAllOnX />

        {/* 7. Pinned showcase: Suitability, Why Choose, Same-Day Teeth, Temporary Teeth */}
        <AllOn4ScrollFeatures />

        {/* 8. How many implants, Placement, Implant systems, Technology, Bone Loss */}
        <AllOn4ImplantSurgery />

        {/* 9. The 5-Step Process + stacking cards (Recovery, Risks, Revision & Longevity, Why Patients Choose) */}
        <AllOn4Process />

        {/* 10. All on 4 vs Traditional Dentures */}
        <AllOn4VsDentures />

        {/* 11. Cost, Two Phase Pricing, Calculator & cost topics (Acrylic or Zirconia, Insurance, Super, Payment Plans) */}
        <AllOn4Cost />

        {/* 12. Is There A Cheaper Alternative to All on 4? */}
        <AllOn4SnapOn />

        {/* 13. Our Practice: Sydney CBD Clinic */}
        <OurPractice />

        {/* 14. Meet Your Full Arch Implant Dentists */}
        <Team />

        {/* 15. Clinical Affiliations & Implant Brand Standards */}
        <Affiliations />

        {/* 17. Book an All on 4 Consultation in Sydney */}
        <CTABanner />

        {/* 18. Complete My Smile (H3 under Book) */}
        <CompleteMySmile />

        {/* 19. Frequently Asked Questions */}
        <AllOn4FAQ />

        {/* 20. Important Information, Clinical References & Review Details */}
        <ImportantInformation />
      </main>
      <Footer />
    </>
  );
}
