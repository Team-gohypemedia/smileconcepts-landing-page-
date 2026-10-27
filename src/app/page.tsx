import Navbar from "@/components/layout/Navbar";
import SectionStepper from "@/components/layout/SectionStepper";
import MobileSectionBar from "@/components/layout/MobileSectionBar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Hero from "@/components/sections/Hero";
import ServicesTicker from "@/components/sections/ServicesTicker";
import VisualStory from "@/components/sections/VisualStory";
import VisualBeforeAfter from "@/components/sections/VisualBeforeAfter";
import Testimonials from "@/components/sections/Testimonials";
import AllOn4Overview from "@/components/sections/AllOn4Overview";
import AllOn4VsAllOnX from "@/components/sections/AllOn4VsAllOnX";
import AllOn4ScrollFeatures from "@/components/sections/AllOn4ScrollFeatures";
import AllOn4ImplantSurgery from "@/components/sections/AllOn4ImplantSurgery";
import AllOn4Process from "@/components/sections/AllOn4Process";
import AllOn4VsDentures from "@/components/sections/AllOn4VsDentures";
import AllOn4Cost from "@/components/sections/AllOn4Cost";
import AllOn4SnapOn from "@/components/sections/AllOn4SnapOn";
import OurPractice from "@/components/sections/OurPractice";
import Affiliations from "@/components/sections/Affiliations";
import Team from "@/components/sections/Team";
import CTABanner from "@/components/sections/CTABanner";
import CompleteMySmile from "@/components/sections/CompleteMySmile";
import AllOn4FAQ from "@/components/sections/AllOn4FAQ";
import ImportantInformation from "@/components/sections/ImportantInformation";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <SectionStepper />
      <MobileSectionBar />
      <main>
        <Hero />
        <ServicesTicker />
        <VisualStory />
        <VisualBeforeAfter />
        <Testimonials />
        <CompleteMySmile />
        <AllOn4Overview />
        <AllOn4VsAllOnX />
        <AllOn4ScrollFeatures />
        <AllOn4ImplantSurgery />
        <AllOn4Process part="recovery" />
        <AllOn4Process part="journey" />
        <AllOn4VsDentures />
        <AllOn4Cost part="cost" />
        <AllOn4SnapOn />
        <AllOn4Cost part="funding" />
        <AllOn4Process part="risks" />
        <Team />
        <AllOn4Process part="why" />
        <CTABanner />
        <AllOn4FAQ />
        <ImportantInformation />
        <OurPractice />
        <Affiliations />
      </main>
      <Footer />
    </>
  );
}
