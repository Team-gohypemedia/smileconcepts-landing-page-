"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/ui/hero-section-2";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VisualStory() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="overview" className="w-full relative" style={{ backgroundColor: "#0C0D17" }}>
      <HeroSection
        title={
          <span className="lg:whitespace-nowrap">
            All on 4 Dental Implants{" "}
            <span style={{ color: "#F47A4A" }}>in Sydney</span>
          </span>
        }
        subtitle={
          <div className="flex flex-col gap-3">
            {/* Lead Subheading */}
            <p
              style={{
                color: "#F47A4A",
                fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
                fontWeight: 600,
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
              }}
            >
              Full arch (All on X) Fixed Teeth, Tailored To Your Anatomy, From $18,000 Per Arch.
            </p>

            {/* Core Summary (Always Visible) */}
            <p
              style={{
                color: "#F1F5F9",
                fontSize: "clamp(0.92rem, 1.9vw, 1rem)",
                lineHeight: 1.68,
                fontWeight: 400,
              }}
            >
              All on 4 dental implants replace a full arch of missing or failing teeth with a set of fixed, natural-looking teeth that stay put. No plates, no adhesives, no slipping.
            </p>

            {/* Expandable Extended Details */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col gap-3 overflow-hidden pt-1"
                >
                  <p
                    style={{
                      color: "#E2E8F0",
                      fontSize: "clamp(0.9rem, 1.8vw, 0.98rem)",
                      lineHeight: 1.68,
                      fontWeight: 400,
                    }}
                  >
                    Also known as All on X dental implants or full arch implants, the treatment uses a tailored number of implants, most often four to six, to support your new smile. If you&apos;ve been searching for full arch dental implants or comparing options for All on X in Sydney, Smile Concepts plans your case around your own bone and bite, with dentists who each bring over 25 years&apos; experience, and prices it per arch, not per implant.
                  </p>
                  <p
                    style={{
                      color: "#CBD5E1",
                      fontSize: "clamp(0.9rem, 1.8vw, 0.98rem)",
                      lineHeight: 1.68,
                      fontWeight: 400,
                    }}
                  >
                    Whether you are currently wearing dentures, have multiple failing teeth, or have been told your treatment options are limited, the first step is understanding what may be possible for your individual situation.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

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
          href: "#cost",
        }}
        backgroundImage="/assets/visual-story/couple-smiling.jpg"
        imagePosition="center"
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
