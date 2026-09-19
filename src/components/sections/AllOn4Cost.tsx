"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Wallet, Landmark, CreditCard, ArrowRight, Shield } from "lucide-react";

export default function AllOn4Cost() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const pricingCards = [
    {
      tier: "Essential Full Arch",
      priceRange: "$17,000 – $22,000",
      subtitle: "Titanium-Reinforced Hybrid Composite",
      highlight: false,
      features: [
        "4 High-Grade Medical Titanium Implants",
        "Computer-Guided 3D Precision Surgery",
        "Immediate Provisional Teeth (1–3 days)",
        "Reinforced Titanium Internal Bar",
        "High-Impact Aesthetic Composite Teeth",
        "Post-Operative Reviews & Warranty",
      ],
      weeklyEstimate: "From $59 / week on payment plans",
    },
    {
      tier: "Premium Monolithic Zirconia",
      priceRange: "$23,000 – $29,000",
      subtitle: "Ultimate Strength & Lifelike Translucency",
      highlight: true,
      features: [
        "4 Premium Bio-Active Titanium Implants",
        "3D Guided Surgery with Sedation Options",
        "Immediate Fixed Provisional Teeth",
        "Monolithic Zirconia Arch (Unbreakable)",
        "Zero Chipping & 100% Stain-Proof",
        "Hand-Stained Custom Gingival Pink Tissue",
        "Comprehensive Lifetime Implant Warranty",
      ],
      weeklyEstimate: "From $79 / week on payment plans",
    },
  ];

  return (
    <section
      ref={ref}
      id="cost"
      style={{
        padding: "clamp(4.5rem, 8vw, 7.5rem) 0",
        backgroundColor: "#FAF8F5",
        position: "relative",
      }}
    >
      <div className="container-sc" style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#F47A4A",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            Transparent Pricing &amp; Finance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-prata), serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#231F20",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              marginBottom: "1.25rem",
            }}
          >
            What Does All on Four Dental Implants Cost in Sydney?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#555555",
            }}
          >
            In Sydney, full arch All-on-4 dental implants typically range between <strong>$17,000 and $29,000 per arch</strong>. At Smile Concepts, we believe in complete transparency: no hidden surgeon fees, hospital surprises, or sudden extra costs.
          </motion.p>
        </div>

        {/* Pricing Options Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            maxWidth: "960px",
            margin: "0 auto 4rem",
          }}
        >
          {pricingCards.map((card, i) => (
            <motion.div
              key={card.tier}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              style={{
                backgroundColor: card.highlight ? "#ffffff" : "#ffffff",
                borderRadius: "16px",
                border: card.highlight ? "2px solid #F47A4A" : "1px solid #EAE4DC",
                boxShadow: card.highlight
                  ? "0 20px 50px rgba(244, 122, 74, 0.14)"
                  : "0 10px 30px rgba(0, 0, 0, 0.04)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {card.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "-13px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#F47A4A",
                    color: "#ffffff",
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.3rem 1rem",
                    borderRadius: "9999px",
                    boxShadow: "0 4px 10px rgba(244,122,74,0.3)",
                  }}
                >
                  Most Popular Choice
                </div>
              )}

              <h3 style={{ fontFamily: "var(--font-assistant)", fontSize: "1.25rem", fontWeight: 700, color: "#231F20", marginBottom: "0.25rem" }}>
                {card.tier}
              </h3>
              <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.85rem", color: "#777", marginBottom: "1.25rem" }}>
                {card.subtitle}
              </p>

              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "var(--font-prata)", fontSize: "2.2rem", fontWeight: 700, color: "#F47A4A" }}>
                  {card.priceRange}
                </span>
                <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.85rem", color: "#888", display: "block", marginTop: "0.2rem" }}>
                  Per arch · all inclusive
                </span>
              </div>

              <div style={{ borderTop: "1px solid #F0ECE6", paddingTop: "1.5rem", marginBottom: "2rem", flexGrow: 1 }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  {card.features.map((feat) => (
                    <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444" }}>
                      <span style={{ color: "#F47A4A", flexShrink: 0, marginTop: "2px" }}>
                        <Check size={16} strokeWidth={2.5} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  padding: "0.85rem 1rem",
                  backgroundColor: card.highlight ? "rgba(244,122,74,0.08)" : "#F8F6F2",
                  borderRadius: "8px",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.85rem", fontWeight: 600, color: "#231F20" }}>
                  {card.weeklyEstimate}
                </span>
              </div>

              <a
                href="#book"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.85rem 1.5rem",
                  backgroundColor: card.highlight ? "#F47A4A" : "#231F20",
                  color: "#ffffff",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  borderRadius: "4px",
                  transition: "all 0.2s ease",
                  boxShadow: card.highlight ? "0 4px 14px rgba(244,122,74,0.35)" : "none",
                }}
              >
                Book Consultation for Quote
              </a>
            </motion.div>
          ))}
        </div>

        {/* Superannuation & Finance Feature Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            border: "1px solid #ECE7E1",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            boxShadow: "0 15px 40px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(244,122,74,0.12)", color: "#F47A4A", padding: "0.35rem 0.85rem", borderRadius: "9999px", fontFamily: "var(--font-assistant)", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem" }}>
                <Landmark size={15} />
                <span>Superannuation Access</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", color: "#231F20", lineHeight: 1.25, marginBottom: "1rem" }}>
                Access Your Super Fund to Pay for Dental Implants
              </h3>
              <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.98rem", lineHeight: 1.7, color: "#555", marginBottom: "1.25rem" }}>
                Under Australian law (ATO Early Release of Superannuation on Compassionate Grounds), eligible patients can access their existing superannuation funds to pay for essential surgical dental treatments, including All-on-4 implants.
              </p>
              <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.95rem", lineHeight: 1.6, color: "#666", marginBottom: "1.5rem" }}>
                Our team assists you with the complete medical reporting, dental certifications, and documentation required for ATO application.
              </p>
              <a
                href="#book"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#F47A4A",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                Inquire About Super Fund Release
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Payment plan providers box */}
            <div
              style={{
                backgroundColor: "#FAF8F5",
                borderRadius: "12px",
                padding: "2rem",
                border: "1px solid #EAE4DC",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#F47A4A", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                <CreditCard size={18} />
                <span>Flexible Payment Plans</span>
              </div>
              <h4 style={{ fontFamily: "var(--font-assistant)", fontSize: "1.15rem", fontWeight: 700, color: "#231F20", marginBottom: "0.75rem" }}>
                0% Interest Plans from $45/week
              </h4>
              <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.9rem", color: "#666", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                We partner with leading dental finance providers to offer interest-free payment terms customized to your budget:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "Denticare — Zero interest dental payment plans up to 24 months",
                  "TLC (Total Lifestyle Credit) — Medical funding up to $50,000",
                  "Humm & Afterpay — Convenient installment options",
                  "Health Fund Rebates — Direct HICAPS claims on the spot",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-assistant)", fontSize: "0.85rem", color: "#444" }}>
                    <Shield size={14} color="#F47A4A" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
