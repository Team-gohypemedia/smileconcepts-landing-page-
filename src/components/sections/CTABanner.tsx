"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      id="book"
      style={{ position: "relative", padding: "clamp(4rem, 8vw, 8rem) 0", overflow: "hidden" }}
    >
      {/* BG image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image src={images.hero.background} alt="" fill style={{ objectFit: "cover", opacity: 0.15 }} aria-hidden />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #EC844B 0%, #F47A4A 40%, #e06030 100%)" }} />
      </div>
      {/* Decorative circles */}
      <div aria-hidden style={{ position: "absolute", top: "-5rem", right: "-5rem", width: "20rem", height: "20rem", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", bottom: "-5rem", left: "-5rem", width: "26rem", height: "26rem", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

      <div className="container-sc" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "var(--font-assistant)" }}
        >
          Start Your Journey
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2vw, 1.35rem)",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.75,
            maxWidth: "820px",
            margin: "0 auto 1.5rem",
          }}
        >
          &ldquo;Quality is never an accident; it is the result of high intention, sincere effort,{" "}
          <strong style={{ fontStyle: "normal", color: "#fff" }}>intelligent direction</strong>{" "}
          and{" "}
          <strong style={{ fontStyle: "normal", color: "#fff" }}>skillful execution.</strong>&rdquo;
        </motion.blockquote>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: "var(--font-prata)", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", lineHeight: 1.2, marginBottom: "1rem" }}
        >
          Book Your All-on-4 Consultation Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{ color: "rgba(255,255,255,0.78)", fontFamily: "var(--font-assistant)", fontWeight: 300, fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 2.5rem" }}
        >
          Speak directly with Dr. Manish Shah and Dr. Kinnar Shah at our Sydney CBD clinic.
          Discover whether All-on-4 or All-on-6 is right for you, discuss superannuation early release, and receive a comprehensive treatment plan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}
        >
          <a
            href="tel:0292677777"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1rem 2rem",
              background: "#fff",
              color: "#F47A4A",
              fontFamily: "var(--font-assistant)",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#FCF8F8")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#fff")}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            02 9267 7777
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "1rem 2rem",
              border: "2px solid rgba(255,255,255,0.7)",
              color: "#fff",
              fontFamily: "var(--font-assistant)",
              fontWeight: 500,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
          >
            Book Online
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ marginTop: "2.5rem", fontFamily: "var(--font-assistant)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}
        >
          Suite 201, 210 Pitt Street, Sydney NSW 2000
        </motion.p>
      </div>
    </section>
  );
}
