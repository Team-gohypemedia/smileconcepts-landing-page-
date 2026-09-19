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
  { value: "40+", label: "Years Experience" },
  { value: "5★", label: "Google Reviews" },
  { value: "10K+", label: "Happy Patients" },
  { value: "CBD", label: "Pitt St, Sydney" },
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
      aria-label="Hero"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "640px",
        overflow: "hidden",
      }}
    >
      {/* ── Parallax media layer (slightly oversized so motion doesn't show edges) */}
      <div
        ref={mediaRef}
        style={{
          position: "absolute",
          inset: "-15%",
          willChange: "transform",
        }}
      >
        <Image
          src={images.hero.homeTop2024}
          alt="Smile Concepts – Award Winning Dental Clinic Sydney CBD"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />

        {/* Video frame — drop hero.mp4 into /public/videos/ */}
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={images.hero.homeTop2024}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "none", /* set to 'block' when src is added */
          }}
        >
          {/* <source src="/videos/hero.mp4" type="video/mp4" /> */}
        </video>
      </div>

      {/* ── Gradient overlays ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(15,15,40,0.82) 0%, rgba(15,15,40,0.45) 55%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
        }}
      />

      {/* ── Content ── */}
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          willChange: "transform, opacity",
        }}
      >
        <div className="container-sc" style={{ paddingTop: "clamp(6.5rem, 14vh, 9rem)", paddingBottom: "3rem" }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "680px" }}
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "#F47A4A",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-assistant)",
                fontWeight: 500,
              }}
            >
              <span style={{ display: "block", width: "2rem", height: "1px", background: "#F47A4A" }} />
              Award Winning · Sydney CBD
            </motion.p>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-prata)",
                fontWeight: 400,
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                lineHeight: 1.07,
                color: "#ffffff",
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Creating{" "}
              <em style={{ color: "#F47A4A", fontStyle: "italic" }}>Beautiful</em>
              <br />
              Smiles
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                lineHeight: 1.65,
                maxWidth: "480px",
                marginBottom: "2.25rem",
                fontFamily: "var(--font-assistant)",
                fontWeight: 300,
              }}
            >
              40+ years of expert General, Cosmetic &amp; Implant Dentistry at
              our Pitt Street practice in the heart of Sydney CBD.
            </motion.p>

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
                  padding: "1rem 2rem",
                  background: "#F47A4A",
                  color: "#fff",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "background 0.25s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#e06934")}
                onMouseLeave={e => (e.currentTarget.style.background = "#F47A4A")}
              >
                Book a Consultation
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a
                href="#services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "1rem 2rem",
                  border: "2px solid rgba(255,255,255,0.6)",
                  color: "#fff",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "border-color 0.25s, background 0.25s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.background = "transparent"; }}
              >
                Our Treatments
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, auto)",
                gap: "2rem",
                marginTop: "3.5rem",
              }}
            >
              {stats.map(s => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-prata)",
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      color: "#fff",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.45)",
                      marginTop: "0.4rem",
                    }}
                  >
                    {s.label}
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
