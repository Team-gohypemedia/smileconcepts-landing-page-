"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ExternalLink, Star } from "lucide-react";
import { TestimonialsColumn, TestimonialItem, GoogleGIcon } from "@/components/ui/testimonials-columns-1";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/google-reviews";

const GOOGLE_PROFILE_URL = "https://share.google/4Z9FLkA3yM48zIdYS";

// Real Google Reviews from Smile Concepts (Sydney CBD)
// Names formatted with First name + Last name initial letter (e.g. Julia X.)
// Text is copied verbatim from each Google review: do not reword or fix spelling.
// "…" marks where words were cut from the original. No dates on any card.
const reviewEntries: [name: string, text: string][] = [
  ["Julia X.", "I recently had my all on 4 dental implants done by Dr. Shah and seriously could not recommend him more! … I now have the confidence to smile again which I hadn’t had for years."],
  ["Aaron M.", "After years of neglecting my teeth and bad dental work plus a phobia of the dentist itself my teeth were in a really bad way, until I meet Dr Shah. … He has not only transformed my smile but my confidence also."],
  ["Robert N.", "The price was extremely affordable and they even set up a payment plan. I would never consider overseas implant work due to it's complex nature and after care. Thank you Dr Manish and the girls at the front desk."],
  ["Kenji W.", "My mum recently had her dental implants done at Smile Concepts with Dr. Shah… My mum has always been scared of dentistry, but Dr. Shah and the entire team made her feel completely at ease."],
  ["Hanna E.", "…full dental implants of my top and lower jaw. … My years of suffering in silence and doing everything to avoid smiling are over. I Highly and Whole Heartily Recommend Dr Manesh Shah…"],
  ["Jemarie L.", "My uncle came to see Dr Manish to get implants… The new permanent teeth that he got with the dental Implants has not only improved his confidence but has made a massive difference in his life."],
  ["Leonnie P.", "The work done on my teeth was extensive but the results amazing. My teeth look so natural, my health is so much better but most of all my confidence has grown."],
  ["Tys A.", "Excellent service, straight up answers and a clear set of steps and timelines - Dr Shah and the team don't just say what you want to hear, they're honest and clear about what's possible and follow through perfectly."],
  ["John V.", "They are very reasonably priced. I had dental implants completed by Dr Manish, the results were outstanding and I have no hesitation in highly recommending Smile Concepts"],
  ["Alfred D.", "As a person in her late seventies I was apprehensive about having front teeth implants. Dr Kinnar from my first visit was extremely reassuring and I am delighted with the cosmetic outcome…"],
  ["Mia M.", "I have seen both dentists, Dr. Manish and Dr. Kinnar and their expertise in the field is unmatched. I had a complete smile transformation that gave me a ton of confidence."],
  ["Anthony G.", "They did a great job in transforming my teeth to a new level that I now feel confident to smile again. I really appreciated the advice given by Dr. Manish and his assistants, as it was very honest."],
  ["Moushumi D.", "Dr. Shah is an excellent dental surgeon and I recommend the team to everyone with the highest of praises. Well worth the effort of going all the way to Sydney for treatment from New Zealand!"],
  ["Tommy D.", "Dr Manish Shah was recommended to me from friends who had dental implant work done. I am really happy to give a glowing review as it was a very good experience from start to the excellent follow up care…"],
  ["Vijendra K.", "You are such a great person and you know your job so well. Manish, you have made me feel young again with the smile back to my face. I have been told that I look fantastic and good looking."],
];

const AVATAR_COLORS = ["#4285F4", "#EA4335", "#34A853", "#F59E0B", "#8B5CF6", "#0D9488", "#EC4899", "#2563EB", "#059669", "#D97706", "#7C3AED", "#E11D48"];

const googleReviews: TestimonialItem[] = reviewEntries.map(([name, text], i) => ({
  name,
  text,
  avatarColor: AVATAR_COLORS[i % AVATAR_COLORS.length],
  role: "Verified Google Review",
  location: "Sydney CBD",
  rating: 5,
  url: GOOGLE_PROFILE_URL,
}));

// Fill columns in turn, so reviews read 1, 2, 3 across and keep their order.
const splitIntoColumns = (count: number) =>
  Array.from({ length: count }, (_, col) => googleReviews.filter((_, i) => i % count === col));

// Seconds per card for each column (previous speeds: 26s, 32s, 28s for 4 cards).
// Duration scales with card count so scrolling speed stays the same.
const SECONDS_PER_CARD = [6.5, 8, 7];

const LAYOUTS = [
  { className: "sc-rv-layout-1", columns: splitIntoColumns(1) },
  { className: "sc-rv-layout-2", columns: splitIntoColumns(2) },
  { className: "sc-rv-layout-3", columns: splitIntoColumns(3) },
];

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
          {LAYOUTS.map((layout) => (
            <div
              key={layout.className}
              className={`sc-rv-layout ${layout.className}`}
              style={{ display: "flex", justifyContent: "center", gap: "1.5rem", width: "100%" }}
            >
              {layout.columns.map((column, col) => (
                <TestimonialsColumn
                  key={col}
                  testimonials={column}
                  duration={column.length * SECONDS_PER_CARD[col]}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Responsive layout helper: 1 column on phone, 2 on tablet, 3 on desktop */}
        <style>{`
          .sc-rv-layout-1, .sc-rv-layout-2 {
            display: none !important;
          }
          @media (max-width: 767px) {
            .sc-rv-layout-1 { display: flex !important; }
            .sc-rv-layout-3 { display: none !important; }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .sc-rv-layout-2 { display: flex !important; }
            .sc-rv-layout-3 { display: none !important; }
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
            href="https://www.smileconcepts.com.au/book-online.html"
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

