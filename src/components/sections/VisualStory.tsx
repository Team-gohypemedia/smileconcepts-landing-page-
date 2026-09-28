"use client";

import React from "react";
import { HeroSection } from "@/components/ui/hero-section-2";

export default function VisualStory() {
  return (
    <div id="overview" className="w-full relative" style={{ backgroundColor: "#0C0D17" }}>
      <HeroSection
        title={
          <>
            The Best All on Four <br />
            <span style={{ color: "#F47A4A" }}>Dental Implants Sydney</span>
          </>
        }
        subtitle="Enjoy the Smile Concepts Difference: Painless dental implants with our All Teeth On 4 Implants dentistry services in Sydney. With over 40 years of continuous surgical excellence, cutting-edge 3D bone diagnostics, and in-house digital prosthetics, we replace failing or missing teeth with a full, permanent smile in as little as 1 to 3 days."
        callToAction={{
          text: "EXPLORE THE PROCEDURE",
          href: "#procedure",
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
