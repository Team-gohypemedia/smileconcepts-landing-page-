import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesTicker from "@/components/sections/ServicesTicker";
import VisualStory from "@/components/sections/VisualStory";
import VisualBeforeAfter from "@/components/sections/VisualBeforeAfter";
import OurPractice from "@/components/sections/OurPractice";
import VisualJourney from "@/components/sections/VisualJourney";
import Team from "@/components/sections/Team";
import Affiliations from "@/components/sections/Affiliations";
import Testimonials from "@/components/sections/Testimonials";
import AllOn4FAQ from "@/components/sections/AllOn4FAQ";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesTicker />
        <VisualStory />
        <VisualBeforeAfter />
        <OurPractice />
        <VisualJourney />
        <Team />
        <Affiliations />
        <Testimonials />
        <AllOn4FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
