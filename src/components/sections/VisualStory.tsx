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
        backgroundImage="/images/gallery/couple-smiling.jpg"
        contactInfo={{
          website: "smileconcepts.com.au",
          phone: "02 9267 7777",
          address: "407/210 Pitt St, Sydney CBD",
        }}
      />
    </div>
  );
}
