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

// Section order follows the "All on X Content (Manish)" doc flow exactly.
// Animated sections (Hero video scrub, ScrollFeatures pinned scroll, Process
// carousel + stacking cards) are self-contained and unaffected by reordering.
export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <SectionStepper />
      <MobileSectionBar />
      <main>
        {/* ── INTRODUCTION ─────────────────────────────────────────── */}
        {/* 1. Cinematic Hero with Scroll Video Scrubbing */}
        <Hero />

        {/* 2. Key Social Proof & Trust Ticker */}
        <ServicesTicker />

        {/* 3. H1: All on 4 Dental Implants & All on X in Sydney */}
        <VisualStory />

        {/* 4. Real All on 4 Results — Before & After (H2) */}
        <VisualBeforeAfter />

        {/* 4b. Trusted by Sydney Patients — Google Reviews (H2) */}
        <Testimonials />

        {/* ── GENERAL INFORMATION ──────────────────────────────────── */}
        {/* 5. What are All on 4 Dental Implants (full arch)? (H2) */}
        <AllOn4Overview />

        {/* 6. All on 4 vs All on X: What Do These Names Mean? (H2) */}
        <AllOn4VsAllOnX />

        {/* 7. Pinned showcase: Suitability, Why Choose, Same-Day Teeth, vs Individual Implants, Temporary Teeth (H2s) */}
        <AllOn4ScrollFeatures />

        {/* ── SURGERY & CLINICAL DETAIL ────────────────────────────── */}
        {/* 8. How many implants, Placement types, Implant systems, Technology, Bone Loss (H2s) */}
        <AllOn4ImplantSurgery />

        {/* 9. 5-Step Process carousel + stacking cards: Recovery & Aftercare, Risks, Revision & Longevity, Why Patients Choose (H2s) */}
        <AllOn4Process />

        {/* ── COMPARISON & COST ────────────────────────────────────── */}
        {/* 10. All on 4 vs Traditional Dentures (H2) */}
        <AllOn4VsDentures />

        {/* 11. Cost, Two-Phase Pricing, Acrylic or Zirconia, Insurance, Super, Payment Plans (H2s) */}
        <AllOn4Cost />

        {/* 12. Is There A Cheaper Alternative? Snap-On / All on 2 (H2) */}
        <AllOn4SnapOn />

        {/* ── TRUST & PRACTICE ─────────────────────────────────────── */}
        {/* 13. Our Practice — Sydney CBD Clinic */}
        <OurPractice />

        {/* 14. Meet Your Full Arch Implant Dentists (H2) */}
        <Team />

        {/* 15. Clinical Affiliations & Implant Brand Standards */}
        <Affiliations />

        {/* ── CALL TO ACTION & FAQ ─────────────────────────────────── */}
        {/* 17. Book an All on 4 Consultation in Sydney (H2) */}
        <CTABanner />

        {/* 18. Complete My Smile (H3 under Book) */}
        <CompleteMySmile />

        {/* 19. Frequently Asked Questions (H2) */}
        <AllOn4FAQ />

        {/* 20. Important Information, Clinical References & Review Details (H2) */}
        <ImportantInformation />
      </main>
      <Footer />
    </>
  );
}
