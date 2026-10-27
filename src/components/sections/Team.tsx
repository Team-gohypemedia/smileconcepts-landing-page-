"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck, ExternalLink } from "lucide-react";
import { images } from "@/lib/images";

/* ─── Social Icon SVGs ─── */
const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.9v-2.89h2.538V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XTwitterIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ─── Doctor Profiles ─── */
const doctors = [
  {
    id: "manish",
    name: "Dr Manish Shah",
    registrationText: "Registered Dental & Medical Practitioner · AHPRA DEN0001361239 | MED0001361238",
    registrationUrl: "https://www.ahpra.gov.au/",
    img: images.team.drManishShah,
    qualifications: "BDS (Hons), MBBS, MMED (Sleep Medicine), University of Sydney",
    certifications: [
      "Cosmetic & Implant Dentistry",
      "TMJ & Craniofacial Pain",
      "Sleep Medicine",
    ],
    socials: [
      { name: "Facebook", url: "https://www.facebook.com/manish.shah.94849410", icon: <FacebookIcon /> },
      { name: "Instagram", url: "https://www.instagram.com/doctormanishshah/", icon: <InstagramIcon /> },
      { name: "LinkedIn", url: "https://au.linkedin.com/in/drmanishshah", icon: <LinkedinIcon /> },
    ],
    summaryBio:
      "Dr Manish Shah is a registered dentist and medical practitioner. He graduated in Dentistry with honours from the University of Sydney in 1998, completed his Medical Degree in 2005, and holds a Master of Medicine in Sleep Medicine. With more than 25 years in restorative and cosmetic dentistry, he brings a rare dual clinical perspective to full-arch implant surgery and prosthetics, with a focus on patient comfort.",
  },
  {
    id: "kinnar",
    name: "Dr Kinnar Shah",
    registrationText: "Registered Dental Practitioner · AHPRA DEN0001309395",
    registrationUrl: "https://www.ahpra.gov.au/",
    img: images.team.drKinnarShah,
    qualifications: "BDS, University of Glasgow",
    socials: [
      { name: "Facebook", url: "https://fb.me/kinnar.shah.10", icon: <FacebookIcon /> },
      { name: "LinkedIn", url: "https://au.linkedin.com/in/drkinnarshah", icon: <LinkedinIcon /> },
      { name: "X", url: "https://twitter.com/drkinnarshah", icon: <XTwitterIcon /> },
    ],
    summaryBio:
      "Dr Kinnar Shah completed his dental training in Glasgow in 2000 and has more than 25 years of experience in implant, cosmetic and full-mouth rehabilitation dentistry. He uses digitally guided implant techniques and trains other dentists in advanced implant and full-mouth rehabilitation.",
    quote:
      "“Transforming smiles is more than dentistry—it’s transforming lives with precision, compassion, and the belief that every patient deserves to see the best version of themselves reflected back in the mirror.” – Dr. Kinnar Shah",
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
        padding: "clamp(3.5rem, 6vw, 6.5rem) 0",
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
            gap: clamp(1.5rem, 2.5vw, 2.25rem) !important;
            max-width: 920px !important;
            margin: 0 auto !important;
            padding: 0 clamp(0.5rem, 2vw, 1.5rem) !important;
            align-items: stretch !important;
          }
          .sc-team-card {
            width: 100% !important;
            height: 100% !important;
            min-width: unset !important;
            max-width: unset !important;
            display: flex !important;
            flex-direction: column !important;
            scroll-snap-align: unset !important;
          }
        }
        @media (max-width: 767px) {
          /* Phones: name + qualifications get the full card width, socials sit below */
          .sc-team-head {
            flex-direction: column !important;
            gap: 0.65rem !important;
          }
          .sc-team-container {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 1rem !important;
            padding: 0.5rem 1.25rem 1rem 1.25rem !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
            align-items: stretch !important;
          }
          .sc-team-card {
            min-width: 88% !important;
            max-width: 88% !important;
            flex-shrink: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            scroll-snap-align: center !important;
          }
        }

        .sc-team-social-link {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #ECEAE4;
          background-color: #ffffff;
          color: #666666;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .sc-team-social-link:hover {
          background-color: #F47A4A;
          border-color: #F47A4A;
          color: #ffffff;
          transform: translateY(-2px);
        }

      `}</style>

      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1rem, 3.5vw, 3rem)" }}>
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            textAlign: "center",
            fontFamily: "var(--font-prata), 'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontSize: "var(--fs-section-title)",
            color: "#1A1A24",
            lineHeight: 1.2,
            marginBottom: "0.65rem",
            letterSpacing: "-0.01em",
          }}
        >
          Meet Your Full Arch Implant Dentists
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            textAlign: "center",
            maxWidth: "780px",
            margin: "0 auto 1.5rem",
            color: "#5E616B",
            fontSize: "var(--fs-body)",
            lineHeight: 1.6,
            fontFamily: "var(--font-assistant), sans-serif",
          }}
        >
          Your treatment at Smile Concepts is led by two experienced clinicians who plan and deliver every case in-house at our Sydney CBD practice.
        </motion.p>

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
          {doctors.map((doc) => {
            return (
              <div
                key={doc.id}
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
                {/* Doctor Image - Natural 1:1 Square with full headspace and zero cropping */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    width: "100%",
                    overflow: "hidden",
                    backgroundColor: "#eaeaea",
                  }}
                >
                  <Image
                    src={doc.img}
                    alt={doc.name}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 768px) 88vw, 460px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      imageRendering: "auto",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>

                {/* Doctor Info Body */}
                <div
                  style={{
                    padding: "1.5rem clamp(1.2rem, 2.5vw, 1.75rem)",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    {/* Doctor Name, Qualifications & Socials */}
                    <div className="sc-team-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.5rem" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-prata), 'Playfair Display', Georgia, serif",
                          fontWeight: 400,
                          fontSize: "var(--fs-card-title)",
                          color: "#1A1A24",
                          margin: 0,
                        }}
                      >
                        {doc.name}
                        <span className="sr-only">, </span>
                        <span
                          style={{
                            display: "block",
                            marginTop: "0.35rem",
                            fontFamily: "var(--font-assistant), sans-serif",
                            fontSize: "0.8rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            lineHeight: 1.45,
                          }}
                        >
                          {doc.qualifications}
                        </span>
                      </h3>

                      {/* Social Media Links */}
                      <div style={{ display: "flex", gap: "0.45rem", flexShrink: 0 }}>
                        {doc.socials.map((s) => (
                          <a
                            key={s.name}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${doc.name} on ${s.name}`}
                            className="sc-team-social-link"
                          >
                            {s.icon}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* AHPRA Registration Link Badge */}
                    <div style={{ marginBottom: "0.6rem", minHeight: "1.5rem", display: "flex", alignItems: "center" }}>
                      <a
                        href={doc.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          color: "#E86337",
                          fontSize: "0.76rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          fontFamily: "var(--font-assistant), sans-serif",
                          lineHeight: 1.4,
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = "underline")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = "none")}
                      >
                        <ShieldCheck size={14} color="#16A34A" style={{ flexShrink: 0 }} />
                        <span>{doc.registrationText}</span>
                        <ExternalLink size={11} opacity={0.65} style={{ flexShrink: 0 }} />
                      </a>
                    </div>

                    {/* Certifications / Key Areas */}
                    {doc.certifications && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.35rem",
                          marginBottom: "0.75rem",
                          minHeight: "3.4rem",
                          alignItems: "center",
                        }}
                      >
                        {doc.certifications.map((cert) => (
                          <span
                            key={cert}
                            style={{
                              padding: "0.22rem 0.65rem",
                              background: "rgba(244, 122, 74, 0.08)",
                              border: "1px solid rgba(244, 122, 74, 0.22)",
                              borderRadius: "999px",
                              fontFamily: "var(--font-assistant), sans-serif",
                              fontSize: "0.73rem",
                              fontWeight: 600,
                              color: "#E86337",
                            }}
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Summary Paragraph (Always Visible) */}
                    <p
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontWeight: 400,
                        fontSize: "0.92rem",
                        color: "#5A5A66",
                        lineHeight: 1.65,
                        margin: "0 0 1rem",
                      }}
                    >
                      {doc.summaryBio}
                    </p>

                    {/* Quote Callout (Dr Kinnar Shah) */}
                    {doc.quote && (
                      <blockquote
                        style={{
                          margin: 0,
                          padding: "0.85rem 1rem",
                          background: "rgba(244, 122, 74, 0.06)",
                          borderLeft: "3px solid #F47A4A",
                          borderRadius: "0 8px 8px 0",
                          fontStyle: "italic",
                          fontFamily: "var(--font-prata), Georgia, serif",
                          fontSize: "0.88rem",
                          lineHeight: 1.6,
                          color: "#333333",
                        }}
                      >
                        {doc.quote}
                      </blockquote>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Navigation Controls: Dots & Arrows */}
        {isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              marginTop: "1.5rem",
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

        {/* Live Website Closing Note */}
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "2.5rem auto 0", fontFamily: "var(--font-assistant)", fontSize: "0.95rem", color: "#555", lineHeight: 1.6 }}>
          Together, Dr Manish Shah and Dr Kinnar Shah have trained on and worked with most of the world&apos;s leading implant systems, and regularly take on revision cases referred from other clinics and from overseas.
        </div>
      </div>
    </section>
  );
}
