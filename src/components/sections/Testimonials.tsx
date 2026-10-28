"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ExternalLink, Star } from "lucide-react";
import { TestimonialsColumn, TestimonialItem, GoogleGIcon } from "@/components/ui/testimonials-columns-1";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/google-reviews";

const GOOGLE_PROFILE_URL = "https://share.google/4Z9FLkA3yM48zIdYS";

// Real Google Reviews from Smile Concepts (Sydney CBD)
// Names formatted with First name + Last name initial letter (e.g. Sally D.)
// Reviews curated to medium length to fit cards comfortably
const googleReviews: TestimonialItem[] = [
  // --- Column 1 ---
  {
    name: "Sally D.",
    initials: "SD",
    avatarColor: "#4285F4",
    text: "Nobody likes going to the dentist, but Dr Angie Papas always makes me feel at ease and does an amazing job every time. The team is warm, reassuring and thorough. Highly recommend Smile Concepts!",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Oct 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },
  {
    name: "Ruqiya K.",
    initials: "RK",
    avatarColor: "#EA4335",
    text: "Dr Manish has been absolutely amazing throughout my treatment. He corrected both my TMJ and bite alignment issues, and I couldn't be happier with the final result. Always felt in the best hands.",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Sep 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },
  {
    name: "Jordyn L.",
    initials: "JL",
    avatarColor: "#34A853",
    text: "Such a wonderful experience from start to finish. Dr Angie and the team were very professional, took their time and made sure everything was perfect. I will be highly recommending Smile Concepts.",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Sep 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },
  {
    name: "Joseph B.",
    initials: "JB",
    avatarColor: "#F59E0B",
    text: "The team is just amazing. They took care of me throughout the entire process. The clinic environment is modern and welcoming, and the treatment was completely smooth and hassle-free.",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Sep 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },

  // --- Column 2 ---
  {
    name: "Allan A.",
    initials: "AA",
    avatarColor: "#8B5CF6",
    text: "The staff here are fantastic, the atmosphere is relaxed and very friendly. The dentists do a fantastic job — extremely professional, reassuring, and gentle from initial consult to completion.",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Aug 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },
  {
    name: "Darren J.",
    initials: "DJ",
    avatarColor: "#0D9488",
    text: "Highly experienced and skilled dentists with state-of-the-art facilities in Sydney CBD. Exceptional clinical standard, transparent consultation, and friendly practice. Will definitely return.",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Aug 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },
  {
    name: "Anne H.",
    initials: "AH",
    avatarColor: "#EC4899",
    text: "I highly commend Smile Concepts for their excellent care. They eased my dental anxiety, made me feel completely comfortable, and brought back my smile and confidence. Simply the best team!",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Jul 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },
  {
    name: "Samuel T.",
    initials: "ST",
    avatarColor: "#2563EB",
    text: "Very pleased with the exceptional service and modern clinic facilities at 307 Pitt Street. The attention to detail, high hygiene standards, and patient comfort is outstanding. Thoroughly recommended.",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Sep 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },

  // --- Column 3 ---
  {
    name: "Rose S.",
    initials: "RS",
    avatarColor: "#059669",
    text: "Very happy with Smile Concepts. I had severe jaw pain and grinding for years and Dr Manish was able to stop the pain and correct my bite. All the latest technology and done efficiently.",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Jul 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },
  {
    name: "Sreya N.",
    initials: "SN",
    avatarColor: "#D97706",
    text: "So professional and great customer service from everyone at Smile Concepts. The dentists and nurses are knowledgeable, helpful and welcoming. Best dental clinic experience in Sydney.",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Jul 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },
  {
    name: "Kerrie M.",
    initials: "KM",
    avatarColor: "#7C3AED",
    text: "Made an appointment after a recommendation and was put at ease right from the beginning. Skill, gentle care and modern technology. Sorting appointments and payment was a total breeze.",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Jul 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },
  {
    name: "Megan M.",
    initials: "MM",
    avatarColor: "#E11D48",
    text: "Brilliant experience at Smile Concepts. Dr Manish and the clinical team are great! The whole practice is spotless, welcoming and uses top-tier digital dental equipment.",
    role: "Verified Google Review",
    location: "Sydney CBD",
    date: "Jul 2026",
    rating: 5,
    url: GOOGLE_PROFILE_URL,
  },
];

const firstColumn = googleReviews.slice(0, 4);
const secondColumn = googleReviews.slice(4, 8);
const thirdColumn = googleReviews.slice(8, 12);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="sc-rv-section"
      style={{
        position: "relative",
        backgroundColor: "#FAF8F5",
        padding: "clamp(4rem, 7vw, 7rem) clamp(1rem, 3.5vw, 3rem)",
        overflow: "hidden",
        borderTop: "1px solid #ECE7E1",
        borderBottom: "1px solid #ECE7E1",
      }}
    >
      {/* Background ambient lighting accents */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(66, 133, 244, 0.06) 0%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <style>{`
        @media (min-width: 640px) {
          .sc-testimonials-title {
            white-space: nowrap !important;
          }
        }
        @media (max-width: 640px) {
          .sc-rv-section {
            padding: 2.5rem 1rem !important;
          }
          .sc-rv-wrap {
            max-height: 330px !important;
          }
          .sc-rv-cta-row {
            margin-top: 1.25rem !important;
            gap: 0.6rem !important;
          }
          .sc-rv-card {
            padding: 0.85rem 1rem !important;
            gap: 0.55rem !important;
            border-radius: 14px !important;
            max-width: 100% !important;
          }
          .sc-rv-text {
            font-size: 0.8rem !important;
            line-height: 1.5 !important;
          }
          .sc-rv-card > div:first-child span:first-child {
            font-size: 0.85rem !important;
          }
          .sc-rv-card > div:last-child {
            padding-top: 0.55rem !important;
            gap: 0.55rem !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1000px",
            margin: "0 auto 3rem",
            textAlign: "center",
            gap: "0.85rem",
          }}
        >
          {/* Interactive Google Review Badge with Direct Redirection */}
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title={`View Smile Concepts Google Business Profile & ${GOOGLE_REVIEW_COUNT} Reviews`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.45rem 1.1rem",
              backgroundColor: "#ffffff",
              border: "1px solid #E2E0D8",
              borderRadius: "100px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#4285F4";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 6px 18px rgba(66, 133, 244, 0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#E2E0D8";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 2px 10px rgba(0, 0, 0, 0.04)";
            }}
          >
            <GoogleGIcon size={18} />
            <span
              style={{
                color: "#202124",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                fontFamily: "var(--font-assistant)",
              }}
            >
              Google Reviews
            </span>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.15rem", color: "#FBBC05" }}>
              <Star size={13} fill="#FBBC05" color="#FBBC05" />
              <span
                style={{
                  color: "#202124",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-assistant)",
                }}
              >
                {GOOGLE_RATING}
              </span>
            </div>
            <span
              style={{
                color: "#70757A",
                fontSize: "0.78rem",
                fontFamily: "var(--font-assistant)",
                fontWeight: 500,
              }}
            >
              ({GOOGLE_REVIEW_COUNT} Reviews)
            </span>
            <ExternalLink size={12} color="#4285F4" />
          </a>

          <h2
            className="sc-testimonials-title"
            style={{
              fontFamily: "var(--font-prata), 'Playfair Display', Georgia, serif",
              fontSize: "var(--fs-section-title)",
              color: "#E86337",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              margin: "0.25rem 0 0.5rem 0",
            }}
          >
            The Trust We Have Earned
          </h2>
        </motion.div>

        {/* 3-Column Infinite Vertical Scrolling Carousel */}
        <div
          className="sc-rv-wrap"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            maxHeight: "720px",
            overflow: "hidden",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={26} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={32}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={28}
          />
        </div>

        {/* Responsive Mobile/Desktop CSS helper */}
        <style>{`
          @media (max-width: 767px) {
            .hidden.md\\:block {
              display: none !important;
            }
          }
          @media (max-width: 1023px) {
            .hidden.lg\\:block {
              display: none !important;
            }
          }
        `}</style>

        {/* Bottom CTA Row */}
        <div
          className="sc-rv-cta-row"
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {/* Book Consultation Button */}
          <a
            href="https://smileconcepts.com.au/book-online.html"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.85rem 2rem",
              background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",
              color: "#ffffff",
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.92rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              textDecoration: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(244, 122, 74, 0.35)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, #e06934 0%, #cb5222 100%)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <span>Book Consultation Online</span>
            <ArrowRight size={16} />
          </a>

          {/* Direct Call Button */}
          <a
            href="tel:0292677777"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.85rem 1.85rem",
              backgroundColor: "#ffffff",
              border: "1px solid #E2E0D8",
              color: "#222222",
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.92rem",
              fontWeight: 600,
              textDecoration: "none",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#F47A4A";
              (e.currentTarget as HTMLElement).style.color = "#F47A4A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#E2E0D8";
              (e.currentTarget as HTMLElement).style.color = "#222222";
            }}
          >
            <span>Call (02) 9267 7777</span>
            <Phone size={15} color="#F47A4A" />
          </a>
        </div>
      </div>
    </section>
  );
}

