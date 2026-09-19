"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { Check, X, Sparkles, ShieldCheck } from "lucide-react";

export default function AllOn4Overview() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const comparisons = [
    {
      feature: "Stability & Feel",
      allon4: "100% Fixed & Permanent (No slippage)",
      dentures: "Loose, requires glue/adhesives",
      traditional: "Fixed, but requires 6–10 implants",
    },
    {
      feature: "Biting & Chewing Force",
      allon4: "90–95% Natural Bite Power",
      dentures: "Only 10–20% Chewing Ability",
      traditional: "90–95% Natural Bite Power",
    },
    {
      feature: "Bone Grafting Needed",
      allon4: "Rarely (Angled implants bypass grafts)",
      dentures: "N/A (Accelerates jawbone loss)",
      traditional: "Almost always required (Sinus lift)",
    },
    {
      feature: "Treatment Time",
      allon4: "1 to 3 Days to Fixed Teeth",
      dentures: "Weeks of impressions & adjustments",
      traditional: "6 to 12 Months of healing",
    },
    {
      feature: "Palate & Taste",
      allon4: "Open Palate (Taste food completely)",
      dentures: "Roof of mouth covered by plastic",
      traditional: "Open Palate",
    },
    {
      feature: "Jawbone Preservation",
      allon4: "Stimulates & preserves bone structure",
      dentures: "Causes progressive bone deterioration",
      traditional: "Preserves bone",
    },
  ];

  return (
    <section
      ref={ref}
      id="overview"
      style={{
        padding: "clamp(4.5rem, 8vw, 7.5rem) 0",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <div className="container-sc" style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Section Header */}
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
            The Ultimate Full-Arch Solution
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
            What is the All Teeth on 4 Dental Implants Technique?
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
              fontWeight: 400,
            }}
          >
            All-on-4 is an advanced surgical breakthrough that replaces an entire upper or lower arch of missing or failing teeth using just <strong>four strategically angled titanium implants</strong>. By placing the posterior implants at up to a 45-degree angle, we maximize your natural bone density and eliminate the need for painful bone grafting in the vast majority of cases.
          </motion.p>
        </div>

        {/* 2-Column Visual Detail */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "5rem",
          }}
        >
          {/* Left: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0,0,0,0.06)",
              aspectRatio: "4 / 3",
              background: "#F4F0EB",
            }}
          >
            <Image
              src={images.allon4.allOn4}
              alt="All on 4 Dental Implants Anatomy & Placement – Smile Concepts"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1.25rem",
                right: "1.25rem",
                backgroundColor: "rgba(255, 255, 255, 0.94)",
                backdropFilter: "blur(10px)",
                borderRadius: "10px",
                padding: "1rem 1.25rem",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#F47A4A", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.2rem" }}>
                <Sparkles size={16} />
                <span>Immediate Chewing Function</span>
              </div>
              <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.85rem", color: "#444", margin: 0, lineHeight: 1.4 }}>
                Precision tilted implant architecture delivers permanent stability in just 1 to 3 days.
              </p>
            </div>
          </motion.div>

          {/* Right: Key Differences */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3
              style={{
                fontFamily: "var(--font-prata), serif",
                fontSize: "1.85rem",
                color: "#231F20",
                fontWeight: 400,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
              }}
            >
              Why All on 4 Implants are a Game-Changer
            </h3>
            <p
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "#555",
                marginBottom: "1.75rem",
              }}
            >
              Unlike conventional full-mouth restorations that require 6 to 10 implants per jaw and months of bone grafting, All-on-4 is engineered for maximum stability with minimal invasiveness.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {[
                { title: "No More Loose Dentures", desc: "Permanent, securely fixed teeth that never slip, click, or fall out while speaking or dining." },
                { title: "No Bone Grafting in Most Cases", desc: "Tilted posterior implants anchor into dense front bone, eliminating invasive bone augmentation." },
                { title: "Preserves Your Natural Facial Structure", desc: "Prevents the sunken, collapsed facial appearance that inevitably occurs when teeth are lost." },
                { title: "Fast Recovery & Immediate Function", desc: "Walk out with a complete, radiant set of fixed temporary teeth within 24 to 72 hours." },
              ].map((item, idx) => (
                <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(244, 122, 74, 0.12)",
                      color: "#F47A4A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Check size={15} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-assistant)", fontSize: "1rem", fontWeight: 700, color: "#231F20", marginBottom: "0.2rem" }}>
                      {item.title}
                    </h4>
                    <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.9rem", color: "#666", margin: 0, lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Comprehensive Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          style={{
            backgroundColor: "#FAF8F5",
            borderRadius: "16px",
            border: "1px solid #ECE7E1",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F47A4A", fontWeight: 600 }}>
              The Treatment Breakdown
            </span>
            <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#231F20", marginTop: "0.4rem" }}>
              How All-on-4 Compares to Alternative Solutions
            </h3>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontFamily: "var(--font-assistant)" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #E0D9D0" }}>
                  <th style={{ padding: "1rem", fontSize: "0.9rem", color: "#666", fontWeight: 600 }}>Feature</th>
                  <th style={{ padding: "1rem", fontSize: "1rem", color: "#F47A4A", fontWeight: 700, backgroundColor: "rgba(244, 122, 74, 0.08)", borderRadius: "8px 8px 0 0" }}>
                    ⭐ All-on-4 Implants (Smile Concepts)
                  </th>
                  <th style={{ padding: "1rem", fontSize: "0.9rem", color: "#555", fontWeight: 600 }}>Traditional Implants</th>
                  <th style={{ padding: "1rem", fontSize: "0.9rem", color: "#555", fontWeight: 600 }}>Removable Dentures</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: "1px solid #EAE4DC", backgroundColor: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.015)" }}>
                    <td style={{ padding: "1rem", fontWeight: 600, color: "#231F20", fontSize: "0.92rem" }}>{row.feature}</td>
                    <td style={{ padding: "1rem", fontWeight: 600, color: "#1F2937", backgroundColor: "rgba(244, 122, 74, 0.05)" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#2E7D32", fontWeight: 700 }}>
                        <Check size={16} strokeWidth={3} />
                      </span>{" "}
                      {row.allon4}
                    </td>
                    <td style={{ padding: "1rem", color: "#666", fontSize: "0.9rem" }}>{row.traditional}</td>
                    <td style={{ padding: "1rem", color: "#777", fontSize: "0.9rem" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#D32F2F" }}>
                        <X size={15} strokeWidth={2.5} />
                      </span>{" "}
                      {row.dentures}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
