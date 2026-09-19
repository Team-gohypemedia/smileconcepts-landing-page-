"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";


export default function VisualAnatomy() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeTab, setActiveTab] = useState<"implants" | "bridge">("implants");

  return (
    <section
      ref={ref}
      id="procedure"
      style={{
        backgroundColor: "#FAF8F5",
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
            Why All on 4 Implants are a Game-Changer
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
            What is All Teeth On 4 Dental Implants Technique?
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
            How are All on 4 dental implants different from dentures and traditional implants? By angling posterior implants at 45 degrees, we avoid sinus cavities and areas of low bone density—giving you permanent, fixed teeth with no bone grafting and natural look and feel.
          </motion.p>
        </div>

        {/* Visual Split Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(2.5rem, 6vw, 5rem)",
            alignItems: "center",
          }}
        >
          {/* Left: Interactive Visual Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            {/* View Switcher Pills */}
            <div
              style={{
                display: "inline-flex",
                padding: "4px",
                backgroundColor: "#ffffff",
                borderRadius: "999px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                marginBottom: "1.5rem",
                border: "1px solid rgba(0, 0, 0, 0.05)",
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab("implants")}
                style={{
                  padding: "0.6rem 1.4rem",
                  borderRadius: "999px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  backgroundColor: activeTab === "implants" ? "#181926" : "transparent",
                  color: activeTab === "implants" ? "#ffffff" : "#606275",
                }}
              >
                1. Titanium Foundation
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("bridge")}
                style={{
                  padding: "0.6rem 1.4rem",
                  borderRadius: "999px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  backgroundColor: activeTab === "bridge" ? "#181926" : "transparent",
                  color: activeTab === "bridge" ? "#ffffff" : "#606275",
                }}
              >
                2. Zirconia Bridge
              </button>
            </div>

            {/* Asset Display Card */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(380px, 46vw, 520px)",
                borderRadius: "24px",
                overflow: "hidden",
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              {activeTab === "implants" ? (
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image
                    src={images.allon4.allOn4}
                    alt="All-on-4 Titanium Implants Placement Diagram"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "contain" }}
                  />
                  {/* Floating Tag */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.25rem",
                      left: "1.25rem",
                      padding: "0.6rem 1.1rem",
                      backgroundColor: "rgba(24, 25, 38, 0.85)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "12px",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                    }}
                  >
                    <span style={{ color: "#F47A4A", fontWeight: 700 }}>45° Angled</span> Anterior & Posterior Anchors
                  </div>
                </div>
              ) : (
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image
                    src={images.allon4.bridge}
                    alt="Precision Milled Full Arch Zirconia Bridge"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "contain" }}
                  />
                  {/* Floating Tag */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.25rem",
                      left: "1.25rem",
                      padding: "0.6rem 1.1rem",
                      backgroundColor: "rgba(24, 25, 38, 0.85)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "12px",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                    }}
                  >
                    <span style={{ color: "#F47A4A", fontWeight: 700 }}>Fixed Zirconia</span> Precision Milled
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Architectural Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "2.2rem" }}
          >
            {/* Feature 1 */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "var(--font-prata)",
                  fontSize: "1.35rem",
                  color: "#E05A2B",
                  fontWeight: 400,
                  lineHeight: 1,
                  paddingTop: "2px",
                  flexShrink: 0,
                }}
              >
                01
              </span>
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#181926",
                    marginBottom: "0.4rem",
                  }}
                >
                  Zero Bone Grafting Required
                </h3>
                <p style={{ fontSize: "1rem", color: "#606275", lineHeight: 1.6 }}>
                  By angling the rear implants up to 45°, we utilize existing healthy cortical bone.
                  Even patients told they don&apos;t have enough bone can safely qualify without invasive bone graft surgeries.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "var(--font-prata)",
                  fontSize: "1.35rem",
                  color: "#E05A2B",
                  fontWeight: 400,
                  lineHeight: 1,
                  paddingTop: "2px",
                  flexShrink: 0,
                }}
              >
                02
              </span>
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#181926",
                    marginBottom: "0.4rem",
                  }}
                >
                  Fixed Teeth in 1 to 3 Days
                </h3>
                <p style={{ fontSize: "1rem", color: "#606275", lineHeight: 1.6 }}>
                  Unlike traditional implants that require 6–12 months of waiting, All-on-4 provides rigid cross-arch stabilization, allowing permanent fixed teeth to be loaded almost immediately.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "var(--font-prata)",
                  fontSize: "1.35rem",
                  color: "#E05A2B",
                  fontWeight: 400,
                  lineHeight: 1,
                  paddingTop: "2px",
                  flexShrink: 0,
                }}
              >
                03
              </span>
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#181926",
                    marginBottom: "0.4rem",
                  }}
                >
                  Permanent Non-Removable Stability
                </h3>
                <p style={{ fontSize: "1rem", color: "#606275", lineHeight: 1.6 }}>
                  No messy adhesives, no roof-of-mouth coverage, and no loose slipping. You brush and floss just like natural teeth and enjoy apples, steak, and crunchy foods with 100% bite power restored.
                </p>
              </div>
            </div>

            {/* Quick Guarantee Bar */}
            <div
              style={{
                padding: "1.25rem 1.75rem",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
              }}
            >
              <p style={{ fontSize: "0.95rem", color: "#181926", margin: 0, fontWeight: 500 }}>
                <strong style={{ color: "#E05A2B" }}>100% Genuine Nobel Biocare™</strong> Swiss Implants backed by manufacturer warranties.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
