import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Hero from "@/components/sections/Hero";
import ServicesTicker from "@/components/sections/ServicesTicker";
import VisualStory from "@/components/sections/VisualStory";
import AllOn4VsAllOnX from "@/components/sections/AllOn4VsAllOnX";
import VisualBeforeAfter from "@/components/sections/VisualBeforeAfter";
import AllOn4Overview from "@/components/sections/AllOn4Overview";
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

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        {/* 1. Cinematic Hero with Scroll Video Scrubbing */}
        <Hero />

        {/* 2. Key Social Proof & Trust Ticker */}
        <ServicesTicker />

        {/* 3. Emotional Hook & Visual Story */}
        <VisualStory />

        {/* 4. All on 4 vs All on X: What Do These Names Mean? */}
        <AllOn4VsAllOnX />

        {/* 5. Real Patient Transformations (Before & After) */}
        <VisualBeforeAfter />

        {/* 5. Real Patient Testimonials & Google Reviews */}
        <Testimonials />

        {/* 6. What are All on 4, All on X, Systems, Candidacy & Dentures Comparison */}
        <AllOn4Overview />

        {/* 7. ★ THE FLAGSHIP COST & CONVERSIONS SECTION (2-Phase Pricing, Calculator, Accordions) */}
        <AllOn4Cost />

        {/* 7b. Cheaper Alternative: Snap-on Implant Dentures (All on 2) */}
        <AllOn4SnapOn />

        {/* 8. The 5-Step Treatment Process, Recovery Accordion & Clinical Risks */}
        <AllOn4Process />

        {/* 9. Our Practice: Sydney CBD Clinic, In-House Tech & Free Parking */}
        <OurPractice />

        {/* 10. Meet Your Full Arch Implant Dentists (Dr Manish Shah & Dr Kinnar Shah) */}
        <Team />

        {/* 11. Clinical Affiliations & Implant Brand Standards */}
        <Affiliations />

        {/* 12. Complete My Smile: Key Benefits Grid */}
        <CompleteMySmile />

        {/* 13. FAQs with Search, Category Filters & (+/-) Accordions */}
        <AllOn4FAQ />

        {/* 14. High-Converting Booking Banner & Consultation Form */}
        <CTABanner />

        {/* 15. Important Information, Clinical References & Review Details */}
        <ImportantInformation />
      </main>
      <Footer />
    </>
  );
}
