"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { TestimonialsColumn, TestimonialItem } from "@/components/ui/testimonials-columns-1";

const testimonials: TestimonialItem[] = [
  {
    text: "After wearing loose dentures for 7 years, getting All-on-4 with Dr. Manish Shah was the best decision of my life. I walked out with fixed teeth in 3 days and can eat steak and apples again with zero pain.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    name: "James Thornton",
    role: "Full Upper Arch All-on-4",
    location: "Sydney CBD",
    rating: 5,
  },
  {
    text: "I was terrified of the dentist and my teeth were failing. Dr. Kinnar Shah walked me through 3D CT diagnostics and early super fund release. The IV sleep dentistry made the entire procedure completely painless!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    name: "Sarah McLaughlin",
    role: "Full Mouth Dental Implants",
    location: "Bondi, Sydney",
    rating: 5,
  },
  {
    text: "Dr. Manish Shah has 40+ years of surgical experience and it shows in every detail. My previous dentist said I needed extensive bone grafts, but Smile Concepts avoided grafting entirely with tilted implants.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "David Levin",
    role: "Dual Arch Permanent Teeth",
    location: "Mosman, Sydney",
    rating: 5,
  },
  {
    text: "The high-strength Australian Zirconia bridge looks and feels identical to natural teeth. No plastic palate, no slipping, no messy glue. I can laugh and smile with total confidence again.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    name: "Elena Rossi",
    role: "Zirconia Fixed Bridge",
    location: "Surry Hills, Sydney",
    rating: 5,
  },
  {
    text: "My bottom teeth were breaking and infected. From initial consultation to final fixed teeth took just 48 hours. Exceptional clinical care, transparent pricing, and wonderful nursing staff.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    name: "Michael Kovacs",
    role: "Lower Arch All-on-4",
    location: "North Sydney",
    rating: 5,
  },
  {
    text: "The finance team helped me access my superannuation smoothly through ATO compassionate release. That made this life-changing procedure 100% affordable. Can't recommend them enough!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Chloe Richardson",
    role: "Sedation All-on-4 Implants",
    location: "Manly, Sydney",
    rating: 5,
  },
  {
    text: "Booked a consultation at 210 Pitt Street. The precision 3D guided surgery was done in a single session. I went to work 3 days later with permanent fixed teeth. Absolutely incredible result.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    name: "Robert Harris",
    role: "Immediate Teeth in 1-3 Days",
    location: "Double Bay, Sydney",
    rating: 5,
  },
  {
    text: "Everything was explained thoroughly with zero hidden fees. Dr. Kinnar and Dr. Manish are genuine artists. The aesthetics match my facial symmetry perfectly. Worth every single cent.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop",
    name: "Jennifer Patterson",
    role: "Full Arch Restoration",
    location: "Chatswood, Sydney",
    rating: 5,
  },
  {
    text: "Cleanest, most technologically advanced surgery suite in Sydney. The digital intraoral scanners eliminated gooey impressions, and my new smile looks completely natural.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    name: "Harrison Blake",
    role: "Full Mouth Rehabilitation",
    location: "Parramatta, Sydney",
    rating: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
          background: "radial-gradient(circle, rgba(244, 122, 74, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

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
            maxWidth: "800px",
            margin: "0 auto 3rem",
            textAlign: "center",
            gap: "0.85rem",
          }}
        >
          <p
            style={{
              color: "#F47A4A",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontFamily: "var(--font-assistant)",
              margin: 0,
            }}
          >
            Patient Stories
          </p>

          <h2
            style={{
              fontFamily: "var(--font-prata), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 3.8vw, 3.3rem)",
              color: "#11121E",
              fontWeight: 400,
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Real Stories, Real Smiles in Sydney
          </h2>

          <p
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "clamp(0.95rem, 1.25vw, 1.1rem)",
              color: "#555869",
              lineHeight: 1.65,
              maxWidth: "680px",
              fontWeight: 300,
              margin: 0,
            }}
          >
            Discover how Dr. Manish Shah and Dr. Kinnar Shah have transformed thousands of lives with painless All-on-4 dental implants at our Sydney CBD centre.
          </p>
        </motion.div>

        {/* 3-Column Infinite Vertical Scrolling Carousel */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            maxHeight: "680px",
            overflow: "hidden",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={26}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={22}
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
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <a
            href="#book"
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
            <span>Book a Consultation Online</span>
            <ArrowRight size={16} />
          </a>
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
            <Phone size={15} color="#F47A4A" />
            <span>Call (02) 9267 7777</span>
          </a>
        </div>
      </div>
    </section>
  );
}
