"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, ShieldCheck, ExternalLink } from "lucide-react";
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

/* ─── Doctor Profiles with Full Credentials ─── */
const doctors = [
  {
    id: "manish",
    name: "Dr. Manish Shah",
    registrationText: "Registered Dental Practitioner | Registered Medical Practitioner",
    registrationUrl: "https://www.ahpra.gov.au/",
    img: images.team.drManishShah,
    qualifications: "BDS, MBBS, MMED (Sleep Medicine)",
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
      "Dr. Manish Shah has over 25 years of experience in comprehensive restorative, full-arch implant, and cosmetic dentistry. Following his Honours degree in Dentistry (1998), he completed his Medicine degree (2005) at the University of Sydney.",
    extraBio: [
      "With a special interest in Craniofacial Pain and Sleep Disorders, and Functional, Anti-Aging and Regenerative Medicine, Dr Manish has also completed a Master’s in Medicine in Sleep Medicine (University of Sydney).",
    ],
    expertiseTitle: "EXPERTISE",
    expertise: [
      "General, Implant and Cosmetic Dentistry",
      "TMJ & Craniofacial Pain",
      "Sleep Medicine",
      "General Medicine",
      "Functional & Lifestyle Medicine",
      "Regenerative & Anti-aging Medicine",
      "Peptide therapy and treatment",
    ],
    membershipsTitle: "Memberships",
    memberships: [
      { label: "Dent", value: "ADA, AOS, ASID, ICOI, AIA" },
      { label: "Pain", value: "AACP" },
      { label: "Sleep", value: "ASA" },
      { label: "Med", value: "AMA, FRACGP" },
      { label: "Func", value: "IFM, ACNEM, ASLM" },
      { label: "Regen", value: "A4M, A5M" },
      { label: "PEP", value: "A4M" },
    ],
  },
  {
    id: "kinnar",
    name: "Dr. Kinnar Shah",
    registrationText: "Registered Dental Practitioner",
    registrationUrl: "https://www.ahpra.gov.au/",
    img: images.team.drKinnarShah,
    qualifications: "BDS (University of Glasgow)",
    certifications: [
      "Certified High Performance Coach",
      "Certified Gallup Strengths Coach",
      "NLP Master Coach",
    ],
    socials: [
      { name: "Facebook", url: "https://fb.me/kinnar.shah.10", icon: <FacebookIcon /> },
      { name: "LinkedIn", url: "https://au.linkedin.com/in/drkinnarshah", icon: <LinkedinIcon /> },
      { name: "X", url: "https://twitter.com/drkinnarshah", icon: <XTwitterIcon /> },
    ],
    summaryBio:
      "Dr. Kinnar Shah is a world-renowned expert in advanced cosmetic, implant, and full-mouth rehabilitation dentistry. With over two decades of clinical mastery, he creates smiles that are as functionally predictable as they are stunning.",
    extraBio: [
      "Specialising in digitally guided and advanced technology to achieve precise and predictable results for implants and comprehensive full-mouth rehabilitations, Dr. Kinnar Shah utilises cutting-edge methods to deliver life-changing outcomes tailored to the unique needs of each patient. His commitment to perfection ensures not only exceptional aesthetics but also long-term functionality and oral health.",
      "Recognised globally for his empathetic and patient-focused approach, Dr. Kinnar Shah is a pioneer in understanding the emotional needs and aspirations of those he treats. His advanced expertise in communication allows him to connect deeply with his patients, crafting bespoke treatment plans that align with their goals and enhance their confidence.",
      "Dr. Kinnar Shah’s leadership in restorative and cosmetic dentistry has earned him acclaim for solving complex cases that require advanced skill, vision, and precision. His work exemplifies innovation and dedication to offering his patients the highest standard of care and results that exceed expectations.",
      "In addition to his clinical excellence, Dr. Kinnar Shah is a passionate educator and mentor, training countless dentists worldwide in advanced techniques, including full-mouth rehabilitation, implantology, and cosmetic dentistry. His dedication to sharing knowledge ensures that his expertise and standards of excellence inspire the next generation of dental professionals.",
      "Dr. Kinnar Shah’s time is highly sought after, and his availability is carefully reserved for those who share his commitment to excellence and a genuine desire to achieve transformational results. This selective approach allows Dr. Kinnar Shah to maintain the highest standards of care and ensure a profound, lasting impact on those he chooses to help.",
      "Dr. Kinnar Shah is not only a highly skilled clinician but also a visionary leader who has elevated modern dentistry through innovation, artistry, and a deep commitment to patient care. His work is a testament to the transformative power of dentistry, making him one of the most respected and sought-after dental experts in the world.",
    ],
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
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleExpanded = (id: string) => {
    if (expandedId === id) {
      // User is collapsing the expanded card
      const el = cardRefs.current[id];
      if (el) {
        const rect = el.getBoundingClientRect();
        // If the top of the card has scrolled out of view, smoothly scroll back to it
        if (rect.top < 100) {
          const yOffset = -90; // offset for fixed header
          const y = rect.top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      }
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

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
            gap: clamp(1.5rem, 3.5vw, 3rem) !important;
            max-width: 1380px !important;
            margin: 0 auto !important;
            padding: 0 clamp(0.5rem, 2vw, 1.5rem) !important;
            align-items: start !important;
          }
          .sc-team-card {
            width: 100% !important;
            min-width: unset !important;
            max-width: unset !important;
            display: flex !important;
            flex-direction: column !important;
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

        .sc-read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: #ffffff;
          border: 1.5px solid #F47A4A;
          border-radius: 999px;
          padding: 0.45rem 1.15rem;
          color: #E86337;
          font-family: var(--font-assistant), sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          align-self: flex-start;
          margin-top: auto;
        }
        .sc-read-more-btn:hover {
          background-color: #F47A4A;
          color: #ffffff;
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
          {doctors.map((doc) => {
            const isExpanded = expandedId === doc.id;

            return (
              <div
                key={doc.id}
                ref={(el) => {
                  cardRefs.current[doc.id] = el;
                }}
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
                {/* Doctor Image - 1:1 Square matches 1200x1200 & 750x750 source images to prevent bottom cropping */}
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
                    sizes="(max-width: 768px) 88vw, 650px"
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
                    {/* Doctor Name & Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.35rem" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-prata), 'Playfair Display', Georgia, serif",
                          fontWeight: 400,
                          fontSize: "1.35rem",
                          color: "#1A1A24",
                          margin: 0,
                        }}
                      >
                        {doc.name}
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

                    {/* Qualifications */}
                    <p
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.82rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#1A1A24",
                        fontWeight: 700,
                        margin: "0 0 0.75rem 0",
                        minHeight: "1.25rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {doc.qualifications}
                    </p>

                    {/* Certifications / Key Areas */}
                    {doc.certifications && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.35rem",
                          marginBottom: "0.75rem",
                          minHeight: "2.5rem",
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
                        margin: 0,
                        minHeight: "4.75rem",
                      }}
                    >
                      {doc.summaryBio}
                    </p>

                    {/* Expandable Section with Read More / Read Less */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{ paddingTop: "0.85rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                            {/* Extra Bio Paragraphs */}
                            {doc.extraBio &&
                              doc.extraBio.map((para, pIdx) => (
                                <p
                                  key={pIdx}
                                  style={{
                                    fontFamily: "var(--font-assistant), sans-serif",
                                    fontWeight: 400,
                                    fontSize: "0.92rem",
                                    color: "#5A5A66",
                                    lineHeight: 1.65,
                                    margin: 0,
                                  }}
                                >
                                  {para}
                                </p>
                              ))}

                            {/* Expertise Section (Dr. Manish Shah) */}
                            {doc.expertise && (
                              <div style={{ marginTop: "0.5rem" }}>
                                <h4
                                  style={{
                                    fontFamily: "var(--font-assistant), sans-serif",
                                    fontSize: "0.78rem",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    color: "#E86337",
                                    fontWeight: 700,
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  {doc.expertiseTitle}
                                </h4>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                                  {doc.expertise.map((exp) => (
                                    <span
                                      key={exp}
                                      style={{
                                        padding: "0.25rem 0.65rem",
                                        background: "#F3F2EE",
                                        border: "1px solid #E5E3DC",
                                        borderRadius: "6px",
                                        fontFamily: "var(--font-assistant), sans-serif",
                                        fontSize: "0.76rem",
                                        fontWeight: 500,
                                        color: "#333333",
                                      }}
                                    >
                                      {exp}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Memberships Section (Dr. Manish Shah) */}
                            {doc.memberships && (
                              <div style={{ marginTop: "0.5rem" }}>
                                <h4
                                  style={{
                                    fontFamily: "var(--font-assistant), sans-serif",
                                    fontSize: "0.78rem",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    color: "#E86337",
                                    fontWeight: 700,
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  {doc.membershipsTitle}
                                </h4>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "0.4rem" }}>
                                  {doc.memberships.map((m) => (
                                    <div
                                      key={m.label}
                                      style={{
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #ECEAE4",
                                        borderRadius: "6px",
                                        padding: "0.35rem 0.6rem",
                                        fontSize: "0.74rem",
                                        fontFamily: "var(--font-assistant), sans-serif",
                                      }}
                                    >
                                      <strong style={{ color: "#E86337" }}>{m.label}: </strong>
                                      <span style={{ color: "#555555" }}>{m.value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Quote Callout (Dr. Kinnar Shah) */}
                            {doc.quote && (
                              <blockquote
                                style={{
                                  margin: "0.6rem 0 0 0",
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Read More / Read Less Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleExpanded(doc.id)}
                    className="sc-read-more-btn"
                    style={{ marginTop: "1.25rem" }}
                  >
                    {isExpanded ? (
                      <>
                        Read Less <ChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown size={14} />
                      </>
                    )}
                  </button>
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
      </div>
    </section>
  );
}
