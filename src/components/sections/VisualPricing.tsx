"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function VisualPricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="cost"
      style={{
        backgroundColor: "#ffffff",
        padding: "clamp(5rem, 9vw, 8rem) 0",
        position: "relative",
      }}
    >
      <div className="container-sc">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 4rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#E05A2B",
              marginBottom: "0.85rem",
            }}
          >
            Transparent Cost Breakdown
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#181926",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            What Does the All on Four Dental Implants Cost in Sydney?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "clamp(1.05rem, 1.3vw, 1.18rem)",
              lineHeight: 1.65,
              color: "#606275",
              fontWeight: 400,
            }}
          >
            Smile Concepts provides affordable All on 4 Dental Implants Sydney with costs between $17,000 and $29,000 per arch. Can I pay with my Super Fund? Yes! Access compassionate early release of your Superannuation or convenient 0% interest flexible payment plans.
          </motion.p>
        </div>

        {/* Highlight Showcase Container */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            backgroundColor: "#FAF8F5",
            borderRadius: "32px",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Main Price Headline */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "1.5rem",
              paddingBottom: "2.5rem",
              borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#E05A2B",
                  fontWeight: 700,
                }}
              >
                Comprehensive Treatment Range
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.75rem",
                  marginTop: "0.35rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                    fontWeight: 700,
                    color: "#181926",
                    lineHeight: 1,
                  }}
                >
                  $17,000 – $29,000
                </span>
                <span style={{ fontSize: "1.1rem", color: "#606275", fontWeight: 500 }}>
                  / per arch
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a
                href="#book"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  padding: "0.9rem 2rem",
                  backgroundColor: "#F47A4A",
                  color: "#ffffff",
                  borderRadius: "999px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(244, 122, 74, 0.35)",
                  transition: "all 0.25s ease",
                }}
              >
                Book Your 3D Scan Assessment
                <ArrowRight size={18} />
              </a>
              <span style={{ fontSize: "0.82rem", color: "#8A8D9F", textAlign: "center" }}>
                Includes comprehensive 3D CBCT bone scan
              </span>
            </div>
          </div>

          {/* Three Streamlined Pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              paddingTop: "2.5rem",
            }}
          >
            {/* Pillar 1: Included */}
            <div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#181926", marginBottom: "0.85rem" }}>
                Everything Included
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <li style={{ fontSize: "0.95rem", color: "#606275" }}>
                  • 4 Genuine Nobel Biocare Implants
                </li>
                <li style={{ fontSize: "0.95rem", color: "#606275" }}>
                  • Same-Day Immediate Fixed Teeth
                </li>
                <li style={{ fontSize: "0.95rem", color: "#606275" }}>
                  • Final High-Density Zirconia Prosthesis
                </li>
                <li style={{ fontSize: "0.95rem", color: "#606275" }}>
                  • Gentle Sleep / Twilight Sedation
                </li>
              </ul>
            </div>

            {/* Pillar 2: Superannuation */}
            <div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#181926", marginBottom: "0.85rem" }}>
                Early Super Release
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#606275", lineHeight: 1.6, margin: 0 }}>
                Under the Australian ATO compassionate release of superannuation program (via SuperCare), you can fund your surgery or that of an eligible family member using existing super funds with zero out-of-pocket impact.
              </p>
            </div>

            {/* Pillar 3: Payment Plans */}
            <div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#181926", marginBottom: "0.85rem" }}>
                0% Payment Plans
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#606275", lineHeight: 1.6, margin: 0 }}>
                Spread your investment into manageable weekly installments starting from approximately $99/week through certified dental financing partners including TLC, Zip Money, and DentiCare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
