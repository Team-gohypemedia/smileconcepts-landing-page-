"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

const features = [
  { icon: "🏆", title: "Award Winning", desc: "Recognised as one of Sydney's leading dental practices" },
  { icon: "🔬", title: "State-of-the-Art Tech", desc: "Digital imaging, laser dentistry & guided implant surgery" },
  { icon: "❤️", title: "Compassionate Care", desc: "Gentle, patient-centred treatment in a relaxed environment" },
  { icon: "💡", title: "Transparent Pricing", desc: "Clear, upfront costs with flexible payment plan options" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="about"
      style={{ background: "#f9f9f9", padding: "clamp(4rem, 8vw, 8rem) 0", overflow: "hidden" }}
    >
      <div className="container-sc">

        {/* Header */}
        <motion.p
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            textAlign: "center",
            color: "#F47A4A",
            fontSize: "0.72rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            fontFamily: "var(--font-assistant)",
            fontWeight: 500,
          }}
        >
          Leading Dental Practice · Greater Sydney
        </motion.p>

        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            textAlign: "center",
            fontFamily: "var(--font-prata)",
            fontWeight: 400,
            fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
            color: "#3c3c3c",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}
        >
          Experience the Life-changing
          <br />
          <em style={{ color: "#F47A4A", fontStyle: "italic" }}>Power of A Smile</em>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            textAlign: "center",
            color: "#7A7A7A",
            fontFamily: "var(--font-assistant)",
            fontWeight: 300,
            fontSize: "0.95rem",
            lineHeight: 1.7,
            maxWidth: "500px",
            margin: "0 auto 3.5rem",
            fontStyle: "italic",
          }}
        >
          Smile Concepts is one of the best dentists in Sydney creating perfect smiles
        </motion.p>

        {/* Two-column */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "center" }}
          className="about-grid"
        >
          {/* Left: Image */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "1rem",
                overflow: "hidden",
                aspectRatio: "3/4",
                maxWidth: "380px",
                margin: "0 auto",
                boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
              }}
            >
              <Image
                src={images.hero.home1}
                alt="Smile Concepts Sydney Dental Clinic"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Before/After badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "0",
                width: "9rem",
                aspectRatio: "1",
                borderRadius: "0.75rem",
                overflow: "hidden",
                border: "4px solid #fff",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              }}
            >
              <Image
                src={images.hero.homepageBa}
                alt="Before and after dental transformation"
                fill
                sizes="160px"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{
                position: "absolute",
                top: "2rem",
                left: "-2rem",
                background: "#fff",
                borderRadius: "0.75rem",
                padding: "1rem 1.25rem",
                boxShadow: "0 10px 40px rgba(0,0,0,0.14)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ fontFamily: "var(--font-prata)", fontSize: "2rem", color: "#F47A4A", lineHeight: 1 }}>40+</div>
              <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A9A9A", marginTop: "0.3rem" }}>
                Years of<br />Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-prata)",
                  fontWeight: 400,
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  color: "#3c3c3c",
                  lineHeight: 1.3,
                  marginBottom: "1rem",
                }}
              >
                Perfect Smile
                <br />
                <span style={{ color: "#F47A4A" }}>Transformation</span>
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                  marginBottom: "1.5rem",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "#4f4f4f",
                  lineHeight: 1.6,
                }}
              >
                {[
                  "More Than 40 Years of Experience",
                  "Best Rated Dentistry in Sydney CBD",
                  "Compassionate Service with Premium Care",
                  "State-of-the-Art Technology & Innovation",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{ marginTop: "0.5rem", width: "6px", height: "6px", borderRadius: "50%", background: "#F47A4A", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a
                  href="tel:0292677777"
                  style={{
                    padding: "0.75rem 1.5rem",
                    border: "2px solid #F47A4A",
                    color: "#F47A4A",
                    fontFamily: "var(--font-assistant)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    transition: "all 0.25s",
                    display: "inline-block",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#F47A4A"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#F47A4A"; }}
                >
                  Book Appointment
                </a>
                <a
                  href="#gallery"
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "#F47A4A",
                    color: "#fff",
                    fontFamily: "var(--font-assistant)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    transition: "background 0.25s",
                    display: "inline-block",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#e06934")}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#F47A4A")}
                >
                  Smile Gallery
                </a>
              </div>
            </div>

            {/* Feature cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              {features.map(f => (
                <div
                  key={f.title}
                  style={{
                    background: "#fff",
                    borderRadius: "0.75rem",
                    padding: "1.25rem",
                    border: "1px solid #f0f0f0",
                    transition: "box-shadow 0.25s, border-color 0.25s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#fad0bf"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = "#f0f0f0"; }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{f.icon}</div>
                  <div style={{ fontFamily: "var(--font-assistant)", fontWeight: 600, fontSize: "0.82rem", color: "#3c3c3c", marginBottom: "0.3rem" }}>{f.title}</div>
                  <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.75rem", color: "#9A9A9A", lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile: stack columns */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
