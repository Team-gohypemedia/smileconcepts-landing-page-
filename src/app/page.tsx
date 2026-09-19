import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesTicker from "@/components/sections/ServicesTicker";
import AllOn4Intro from "@/components/sections/AllOn4Intro";
import AllOn4Overview from "@/components/sections/AllOn4Overview";
import AllOn4Benefits from "@/components/sections/AllOn4Benefits";
import AllOn4Process from "@/components/sections/AllOn4Process";
import AllOn4Candidacy from "@/components/sections/AllOn4Candidacy";
import AllOn4Cost from "@/components/sections/AllOn4Cost";
import WhySmileConcepts from "@/components/sections/WhySmileConcepts";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Affiliations from "@/components/sections/Affiliations";
import AllOn4FAQ from "@/components/sections/AllOn4FAQ";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesTicker />
        <AllOn4Intro />
        <AllOn4Overview />
        <AllOn4Benefits />
        <AllOn4Process />
        <AllOn4Candidacy />
        <AllOn4Cost />
        <WhySmileConcepts />
        <Gallery />
        <Testimonials />
        <Team />
        <Affiliations />
        <AllOn4FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
