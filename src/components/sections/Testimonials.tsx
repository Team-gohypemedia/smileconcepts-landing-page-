"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Sarah M.",
    role: "Porcelain Veneers Patient",
    stars: 5,
    text: "I cannot recommend Smile Concepts highly enough! Dr Shah transformed my smile completely. The entire team made me feel at ease from the very first consultation. My porcelain veneers look completely natural and I couldn't be happier.",
    date: "September 2024",
  },
  {
    name: "James T.",
    role: "Dental Implant Patient",
    stars: 5,
    text: "After years of being self-conscious about my smile, I finally took the step to get dental implants. The process was so much easier than I expected and the results are truly life-changing. The whole team at Smile Concepts is exceptional.",
    date: "August 2024",
  },
  {
    name: "Michelle K.",
    role: "Invisalign Patient",
    stars: 5,
    text: "The Invisalign treatment here was amazing. Dr Shah and the team monitored my progress every step of the way. My teeth are perfectly straight now and I completed the treatment faster than expected. Outstanding service!",
    date: "July 2024",
  },
  {
    name: "David L.",
    role: "General Dentistry Patient",
    stars: 5,
    text: "I've been a patient at Smile Concepts for over 10 years and the quality of care has always been exceptional. State-of-the-art equipment and a team that genuinely cares about your wellbeing. Couldn't ask for better dentists.",
    date: "June 2024",
  },
  {
    name: "Rachel B.",
    role: "Gum Lift Patient",
    stars: 5,
    text: "I had a gum lift procedure here and the results exceeded my expectations. The clinic is immaculate, the technology is cutting-edge, and the staff are wonderfully caring. I finally have the smile I always wanted.",
    date: "May 2024",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const prev = () => setCurrent(c => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent(c => (c + 1) % reviews.length);

  return (
    <section
      ref={ref}
      id="testimonials"
      style={{ position: "relative", padding: "clamp(4rem, 8vw, 8rem) 0", overflow: "hidden" }}
    >
      {/* Dark BG */}
      <div style={{ position: "absolute", inset: 0, background: "#1a1a2e" }} />
      {/* Dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: "radial-gradient(circle at 2px 2px, #F47A4A 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Top line */}
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(244,122,74,0.4), transparent)" }} />

      <div className="container-sc" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", color: "#F47A4A", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem", fontFamily: "var(--font-assistant)", fontWeight: 500 }}
        >
          What Our Patients Say
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ textAlign: "center", fontFamily: "var(--font-prata)", fontWeight: 400, fontSize: "clamp(1.9rem, 4vw, 3.2rem)", color: "#ffffff", lineHeight: 1.2, marginBottom: "3rem" }}
        >
          Patient Stories
        </motion.h2>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ maxWidth: "760px", margin: "0 auto" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "1.25rem",
                padding: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              {/* Quote icon */}
              <svg width="40" height="30" fill="rgba(244,122,74,0.35)" viewBox="0 0 24 18" style={{ marginBottom: "1.25rem" }}>
                <path d="M0 18V10.8C0 7.2 1.2 4.2 3.6 1.8L5.4 3.6C4 5 3.2 6.6 3 8.4H6V18H0ZM12 18V10.8c0-3.6 1.2-6.6 3.6-9L17.4 3.6C16 5 15.2 6.6 15 8.4H18V18H12Z"/>
              </svg>

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "1.25rem" }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="16" height="16" fill="#F47A4A" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                &ldquo;{reviews[current].text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(244,122,74,0.15)",
                    border: "1px solid rgba(244,122,74,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.2rem",
                    color: "#F47A4A",
                    flexShrink: 0,
                  }}
                >
                  {reviews[current].name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-assistant)", fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>{reviews[current].name}</div>
                  <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: "0.2rem" }}>{reviews[current].role} · {reviews[current].date}</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#4285F4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: "9px", fontWeight: 700 }}>G</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>Google Review</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.75rem" }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Review ${i + 1}`}
                style={{
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "999px",
                  background: i === current ? "#F47A4A" : "rgba(255,255,255,0.2)",
                  width: i === current ? "1.5rem" : "0.5rem",
                  height: "0.5rem",
                  transition: "all 0.3s",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "1.5rem" }}>
            {[{ fn: prev, d: "M15 19l-7-7 7-7" }, { fn: next, d: "M9 5l7 7-7 7" }].map(({ fn, d }, i) => (
              <button
                key={i}
                onClick={fn}
                aria-label={i === 0 ? "Previous" : "Next"}
                style={{
                  width: "44px", height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "transparent",
                  color: "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.25s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#F47A4A"; (e.currentTarget as HTMLButtonElement).style.color = "#F47A4A"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)"; }}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={d}/></svg>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Rating strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ marginTop: "3.5rem", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1rem 2rem" }}
        >
          {[
            <span key="stars" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ display: "flex" }}>{[1,2,3,4,5].map(i => <svg key={i} width="14" height="14" fill="#F47A4A" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</span>
              <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)" }}>5.0 on Google</span>
            </span>,
            <span key="count" style={{ fontFamily: "var(--font-assistant)", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>200+ verified reviews</span>,
            <span key="award" style={{ fontFamily: "var(--font-assistant)", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>Award Winning Practice</span>,
          ]}
        </motion.div>
      </div>
    </section>
  );
}
