"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/lib/images";

const doctors = [
  {
    name: "Dr. Manish Shah",
    title: "Principal Implant Dentist & Founder",
    img: images.team.drManishShah,
    specialties: ["All-on-4 Implants", "Full Arch Rehabilitation", "40+ Years Experience"],
    bio: "With over 40 years of clinical excellence, Dr. Manish Shah is one of Sydney's most respected full-arch implant practitioners. He has successfully placed thousands of dental implants, delivering predictable, lifelong smile restorations.",
  },
  {
    name: "Dr. Kinnar Shah",
    title: "Senior Implant & Cosmetic Surgeon",
    img: images.team.drKinnarShah,
    specialties: ["Guided Implant Surgery", "Zirconia Bridges", "Immediate Loading"],
    bio: "Dr. Kinnar Shah combines advanced 3D CBCT digital planning with micro-surgical precision. His focus on All-on-4 full arch restorations ensures patients receive functional, beautiful new teeth in as little as 1 to 3 days.",
  },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const width = sliderRef.current.clientWidth;
      const index = Math.round(scrollLeft / (width * 0.84));
      setActiveSlide(Math.min(Math.max(0, index), doctors.length - 1));
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth * 0.86;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveSlide(index);
    }
  };

  return (
    <section
      ref={ref}
      id="team"
      style={{
        background: "#ffffff",
        padding: "clamp(4rem, 7vw, 7.5rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .sc-team-slider::-webkit-scrollbar {
          display: none;
        }
        @media (min-width: 768px) {
          .sc-team-container {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: clamp(1.5rem, 3.5vw, 3rem) !important;
            max-width: 1380px !important;
            margin: 0 auto !important;
            padding: 0 clamp(0.5rem, 2vw, 1.5rem) !important;
          }
          .sc-team-card {
            width: 100% !important;
            min-width: unset !important;
            max-width: unset !important;
            scroll-snap-align: unset !important;
          }
        }
        @media (max-width: 767px) {
          .sc-team-container {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 1rem !important;
            padding: 0.5rem 1.25rem 1rem 1.25rem !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
          }
          .sc-team-card {
            min-width: 86% !important;
            max-width: 86% !important;
            flex-shrink: 0 !important;
            scroll-snap-align: center !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1rem, 3.5vw, 3rem)" }}>
        {/* Section Header */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            textAlign: "center",
            color: "#F47A4A",
            fontSize: "0.82rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "0.65rem",
            fontFamily: "var(--font-assistant), sans-serif",
            fontWeight: 700,
          }}
        >
          Leading Dental Practice in the Heart of Sydney
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            textAlign: "center",
            fontFamily: "var(--font-prata), 'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
            color: "#1A1A24",
            lineHeight: 1.18,
            marginBottom: "0.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          Our Doctors
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            width: "3rem",
            height: "2px",
            background: "#F47A4A",
            margin: "0 auto clamp(2rem, 4vw, 3.5rem)",
            transformOrigin: "left",
          }}
        />

        {/* Doctor Cards (Desktop 2-Col Grid, Mobile Swipe Slider) */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="sc-team-container sc-team-slider"
        >
          {doctors.map((doc, i) => (
            <div
              key={doc.name}
              className="sc-team-card"
              style={{
                background: "#fafafa",
                borderRadius: "18px",
                border: "1px solid #ECEAE4",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.35s ease, transform 0.35s ease",
              }}
            >
              {/* Doctor Image */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  width: "100%",
                  overflow: "hidden",
                  backgroundColor: "#eaeaea",
                }}
              >
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 768px) 88vw, 450px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>

              {/* Doctor Bio & Specialties */}
              <div
                style={{
                  padding: "1.6rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-prata), 'Playfair Display', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "1.3rem",
                    color: "#1A1A24",
                    marginBottom: "0.25rem",
                  }}
                >
                  {doc.name}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#F47A4A",
                    fontWeight: 700,
                    marginBottom: "0.85rem",
                  }}
                >
                  {doc.title}
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontWeight: 400,
                    fontSize: "0.92rem",
                    color: "#5A5A66",
                    lineHeight: 1.65,
                    marginBottom: "1.25rem",
                    flexGrow: 1,
                  }}
                >
                  {doc.bio}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {doc.specialties.map((sp) => (
                    <span
                      key={sp}
                      style={{
                        padding: "0.32rem 0.75rem",
                        background: "rgba(244, 122, 74, 0.08)",
                        border: "1px solid rgba(244, 122, 74, 0.22)",
                        borderRadius: "999px",
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#E86337",
                      }}
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls: Dots & Arrows */}
        {isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              marginTop: "1.25rem",
            }}
          >
            {/* Prev Arrow */}
            <button
              type="button"
              aria-label="Previous Doctor"
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid #ECEAE4",
                backgroundColor: activeSlide === 0 ? "#f5f5f5" : "#ffffff",
                color: activeSlide === 0 ? "#bbbbbb" : "#E86337",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: activeSlide === 0 ? "default" : "pointer",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                transition: "all 0.2s ease",
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Indicator Dots */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {doctors.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => scrollToSlide(idx)}
                  style={{
                    width: activeSlide === idx ? "26px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    backgroundColor: activeSlide === idx ? "#F47A4A" : "#D4D2CC",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              aria-label="Next Doctor"
              onClick={() => scrollToSlide(Math.min(doctors.length - 1, activeSlide + 1))}
              disabled={activeSlide === doctors.length - 1}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid #ECEAE4",
                backgroundColor: activeSlide === doctors.length - 1 ? "#f5f5f5" : "#ffffff",
                color: activeSlide === doctors.length - 1 ? "#bbbbbb" : "#E86337",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: activeSlide === doctors.length - 1 ? "default" : "pointer",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                transition: "all 0.2s ease",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
