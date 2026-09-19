import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesTicker from "@/components/sections/ServicesTicker";
import About from "@/components/sections/About";
import ServicesSection from "@/components/sections/ServicesSection";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesTicker />
        <About />
        <ServicesSection />
        <Gallery />
        <Testimonials />
        <Team />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
