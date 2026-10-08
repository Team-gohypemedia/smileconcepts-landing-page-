"use client";

import React from "react";
import { HeroSection } from "@/components/ui/hero-section-2";

export default function VisualStory() {
  return (
    <div id="overview" className="w-full relative" style={{ backgroundColor: "#0C0D17" }}>
      <HeroSection
        title={
          <>
            All on 4 Dental Implants <br />
            <span style={{ color: "#F47A4A" }}>in Sydney</span>
          </>
        }
        subtitle="Full arch (All on X) Fixed Teeth, Tailored To Your Anatomy, From $18,000 Per Arch. All on 4 dental implants replace a full arch of missing or failing teeth with a set of fixed, natural-looking teeth that stay put. No plates, no adhesives, no slipping."
        callToAction={{
          text: "COMPLETE MY SMILE",
          href: "#cost",
        }}
        backgroundImage="/assets/visual-story/home-top-2020.jpg"
        contactInfo={{
          phone: "02 9267 7777",
          email: "info@smileconcepts.com.au",
          address: "Suite 403, Level 4/307 Pitt St, Sydney NSW 2000, Australia",
          addressLink: "https://www.google.com/maps/dir//Smile+Concepts,+Suite+403,+Level+4%2F307+Pitt+St,+Sydney+NSW+2000/@-33.8736283,151.2055511,17z/data=!3m1!5s0x6b12ae3dd637c355:0x5ffcef57ed062bc3!4m16!1m6!3m5!1s0x6b12ae3dd6503f4b:0x9bb7dc1d0511e773!2sSmile+Concepts!8m2!3d-33.8736283!4d151.2077398!4m8!1m0!1m5!1m1!1s0x6b12ae3dd6503f4b:0x9bb7dc1d0511e773!2m2!1d151.2077398!2d-33.8736283!3e0",
          website: "Dentist in Sydney CBD",
          websiteHref: "https://www.smileconcepts.com.au/sydney-cbd.html",
        }}
      />
    </div>
  );
}
