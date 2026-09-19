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
      <style>{`
        @media (max-width: 580px) {
          .sc-cta-actions {
            flex-direction: column !important;
            width: 100% !important;
            align-items: center !important;
          }
          .sc-cta-btn {
            width: 100% !important;
            max-width: 310px !important;
            justify-content: center !important;
          }
        }
      `}</style>
      {/* BG image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image src={images.hero.background} alt="" fill style={{ objectFit: "cover", opacity: 0.15 }} aria-hidden />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #EC844B 0%, #F47A4A 40%, #e06030 100%)" }} />
      </div>
      {/* Decorative circles */}
      <div aria-hidden style={{ position: "absolute", top: "-5rem", right: "-5rem", width: "20rem", height: "20rem", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", bottom: "-5rem", left: "-5rem", width: "26rem", height: "26rem", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

      <div className="container-sc" style={{ position: "relative", zIndex: 1, textAlign: "center", paddingLeft: "clamp(1.25rem, 5vw, 2.5rem)", paddingRight: "clamp(1.25rem, 5vw, 2.5rem)" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(0.75rem, 2vw, 0.85rem)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.85rem", fontFamily: "var(--font-assistant)", fontWeight: 700 }}
        >
          Take The Step
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: "var(--font-prata)", fontWeight: 400, fontSize: "clamp(1.85rem, 4.8vw, 3.4rem)", color: "#fff", lineHeight: 1.2, marginBottom: "1.15rem", letterSpacing: "-0.01em" }}
        >
          Call Smile Concepts
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-assistant)", fontWeight: 300, fontSize: "clamp(0.95rem, 2.8vw, 1.15rem)", lineHeight: 1.68, maxWidth: "620px", margin: "0 auto 2.25rem" }}
        >
          All on 4 Dental Implants procedure was never this easy! Call (02) 9267 7777 and book your appointment with Dr. Manish Shah and Dr. Kinnar Shah at 210 Pitt St, Sydney CBD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="sc-cta-actions"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1rem" }}
        >
          <a
            href="tel:0292677777"
            className="sc-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              padding: "0.85rem 1.85rem",
              background: "#ffffff",
              color: "#F47A4A",
              fontFamily: "var(--font-assistant)",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#FCF8F8";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.16)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.12)";
            }}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            02 9267 7777
          </a>
          <a
            href="#"
            className="sc-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.85rem 2rem",
              border: "2px solid rgba(255,255,255,0.85)",
              color: "#ffffff",
              fontFamily: "var(--font-assistant)",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              borderRadius: "8px",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.18)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Book Online
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ marginTop: "2.5rem", fontFamily: "var(--font-assistant)", fontSize: "clamp(0.68rem, 2vw, 0.75rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}
        >
          Suite 201, 210 Pitt Street, Sydney NSW 2000
        </motion.p>
      </div>
    </section>
  );
}
