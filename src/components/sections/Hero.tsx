"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stats = [
  { value: "1–3", label: "Days to New Teeth" },
  { value: "98.6%", label: "Implant Success" },
  { value: "40+", label: "Years Experience" },
  { value: "Super", label: "Fund Access Eligible" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef   = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax: media moves at ~40% of scroll speed
      gsap.to(mediaRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content lifts + fades on scroll
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% top",
          end: "70% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="All on 4 Dental Implants Sydney Hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
      }}
    >
      {/* ── Parallax media layer ── */}
      <div
        ref={mediaRef}
        style={{
          position: "absolute",
          inset: "-15%",
          willChange: "transform",
        }}
      >
        <Image
          src={images.allon4.topGold}
          alt="All on 4 Dental Implants Sydney – Smile Concepts"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
        />
      </div>

      {/* ── Gradient overlays ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(12,12,24,0.88) 0%, rgba(12,12,24,0.6) 55%, rgba(12,12,24,0.3) 100%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,10,20,0.8) 0%, transparent 60%)",
        }}
      />

      {/* ── Content ── */}
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          willChange: "transform, opacity",
        }}
      >
        <div className="container-sc" style={{ paddingTop: "clamp(7rem, 15vh, 9.5rem)", paddingBottom: "3.5rem" }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "720px" }}
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "#F47A4A",
                fontSize: "0.8rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-assistant)",
                fontWeight: 600,
              }}
            >
              <span style={{ display: "block", width: "2rem", height: "2px", background: "#F47A4A" }} />
              Turn Back The Clock · Sydney CBD
            </motion.p>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-prata)",
                fontWeight: 400,
                fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
                lineHeight: 1.08,
                color: "#ffffff",
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              All on 4{" "}
              <em style={{ color: "#F47A4A", fontStyle: "italic" }}>Dental Implants</em>
              <br />
              Sydney
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: "clamp(1.02rem, 1.8vw, 1.22rem)",
                lineHeight: 1.68,
                maxWidth: "600px",
                marginBottom: "1.75rem",
                fontFamily: "var(--font-assistant)",
                fontWeight: 300,
              }}
            >
              Smile Concepts brings you painless, state-of-the-art All on 4 dental implants in the heart of Sydney CBD. Replace failing or missing teeth with a permanent, natural-looking full arch restoration in 1 to 3 days. No bone grafting in most cases.
            </motion.p>

            {/* Benefit Badges */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                marginBottom: "2.2rem",
              }}
            >
              {[
                "Immediate Function",
                "Age-Rewind Rejuvenation",
                "Fixed Non-Removable",
                "Super Fund Release Support",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "9999px",
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    color: "#ffffff",
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#F47A4A" }} />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
            >
              <a
                href="#book"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.95rem 2rem",
                  background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",
                  color: "#fff",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  borderRadius: "4px",
                  boxShadow: "0 4px 18px rgba(244, 122, 74, 0.45)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #e06934 0%, #cb5222 100%)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Book Free Consultation
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a
                href="#cost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.95rem 2rem",
                  border: "2px solid rgba(255,255,255,0.75)",
                  color: "#fff",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  borderRadius: "4px",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#fff";
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                All on 4 Cost &amp; Finance
              </a>
            </motion.div>

            {/* 4 Feature Cards from Live Page */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))",
                gap: "1rem",
                marginTop: "3rem",
              }}
            >
              {[
                { num: "01", title: "Immediate", subtitle: "Function", desc: "Teeth in 1–3 Days" },
                { num: "02", title: "Rejuvenation", subtitle: "Age-Rewind", desc: "Facial Support" },
                { num: "03", title: "Expertise", subtitle: "30+ Years", desc: "Dr. Manish Shah" },
                { num: "04", title: "All Teeth on 4", subtitle: "Protocol", desc: "No Bone Grafting" },
              ].map((card) => (
                <div
                  key={card.num}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    borderRadius: "12px",
                    padding: "1rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#F47A4A",
                      letterSpacing: "0.1em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {card.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-prata)",
                      fontSize: "1.05rem",
                      color: "#ffffff",
                      fontWeight: 400,
                      lineHeight: 1.2,
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "rgba(255, 255, 255, 0.7)",
                      marginTop: "0.15rem",
                    }}
                  >
                    {card.subtitle}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.72rem",
                      color: "rgba(255, 255, 255, 0.45)",
                      marginTop: "0.35rem",
                    }}
                  >
                    {card.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{ width: "1px", height: "2.5rem", background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
