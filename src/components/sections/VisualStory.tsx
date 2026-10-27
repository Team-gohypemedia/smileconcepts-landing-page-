"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/ui/hero-section-2";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function VisualStory() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="overview" className="w-full relative" style={{ backgroundColor: "#0C0D17" }}>
      <HeroSection
        title={
          <h1 style={{ font: "inherit", color: "inherit", margin: 0 }}>
            All on 4 Dental Implants &amp; All on X{" "}
            <span style={{ color: "#F47A4A" }}>in Sydney</span>
          </h1>
        }
        subtitle={
          <div className="flex flex-col gap-3">
            {/* Lead Subheading */}
            <p
              style={{
                color: "#F47A4A",
                fontSize: "var(--fs-body)",
                fontWeight: 600,
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
              }}
            >
              Full Arch and Full Mouth Fixed Teeth, Tailored to Your Anatomy, From $18,000 Per Arch.
            </p>

            {/* Core Summary (Always Visible) */}
            <p
              style={{
                color: "#F1F5F9",
                fontSize: "var(--fs-body)",
                lineHeight: 1.68,
                fontWeight: 400,
              }}
            >
              All on 4 dental implants replace a full arch of missing or failing teeth with fixed, natural looking teeth that stay in place. No plates, no adhesives, no slipping.
            </p>

            {/* Expandable Extended Details */}
            {/* Always in the page source; collapsed with CSS until "Read More" is pressed */}
            <div
              inert={!isExpanded}
              style={{
                display: "grid",
                gridTemplateRows: isExpanded ? "1fr" : "0fr",
                opacity: isExpanded ? 1 : 0,
                transition: "grid-template-rows 0.3s ease-in-out, opacity 0.3s ease-in-out",
              }}
            >
              <div className="flex flex-col gap-3 overflow-hidden pt-1" style={{ minHeight: 0 }}>
                <p
                  style={{
                    color: "#E2E8F0",
                    fontSize: "var(--fs-body)",
                    lineHeight: 1.68,
                    fontWeight: 400,
                  }}
                >
                  Also known as All on X, full arch or full mouth dental implants, the treatment uses a tailored number of implants, most often four to six, to support your new smile.
                </p>
                <p
                  style={{
                    color: "#E2E8F0",
                    fontSize: "var(--fs-body)",
                    lineHeight: 1.68,
                    fontWeight: 400,
                  }}
                >
                  Located in the Sydney CBD and easy to reach from across Sydney, Smile Concepts plans every full arch case around your own bone and bite. Our dentists each have over 25 years of experience, and treatment is priced per arch, not per implant.
                </p>
                <p
                  style={{
                    color: "#CBD5E1",
                    fontSize: "var(--fs-body)",
                    lineHeight: 1.68,
                    fontWeight: 400,
                  }}
                >
                  Whether you are currently wearing dentures, have multiple failing teeth, or have been told your treatment options are limited, the first step is understanding what may be possible for your individual situation.
                </p>
              </div>
            </div>

            {/* Read More / Read Less Toggle */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 self-start text-[#F47A4A] hover:text-[#ff9266] transition-colors py-1 cursor-pointer font-semibold text-sm group"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "0.25rem 0",
                outline: "none",
              }}
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? "Read Less" : "Read More"}</span>
              {isExpanded ? (
                <ChevronUp size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        }
        callToAction={{
          text: "COMPLETE MY SMILE",
          href: "tel:0292677777",
        }}
        backgroundImage="/yamu_jay-ai-generated-9214176.jpg"
        imagePosition="center 25%"
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
