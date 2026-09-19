"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { ArrowRight, Sparkles, Smile, ShieldCheck, Heart } from "lucide-react";

export default function AllOn4Intro() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  return (
    <section
      ref={ref}
      id="intro"
      style={{
        backgroundColor: "#ffffff",
        padding: "clamp(4.5rem, 8vw, 7.5rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-sc">
        {/* Top Eyebrow & Hook */}
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 1rem",
              backgroundColor: "rgba(244, 122, 74, 0.08)",
              borderRadius: "999px",
              border: "1px solid rgba(244, 122, 74, 0.2)",
              marginBottom: "1rem",
            }}
          >
            <Sparkles size={14} color="#F47A4A" />
            <span
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#F47A4A",
              }}
            >
              Sydney CBD All-on-4 Specialists
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 400,
              color: "#2C2C2C",
              lineHeight: 1.25,
              marginBottom: "1.25rem",
            }}
          >
            The Best All on Four Dental Implants Sydney
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: "4rem",
              height: "3px",
              backgroundColor: "#F47A4A",
              margin: "0 auto 1.5rem",
              borderRadius: "2px",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              color: "#F47A4A",
              lineHeight: 1.6,
              marginBottom: "1.25rem",
            }}
          >
            &ldquo;Have you lost your natural teeth? Do you want to improve your smile & boost your confidence? Do you miss the sheer satisfaction of enjoying your favourite food?&rdquo;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "var(--font-assistant)",
              fontSize: "1.05rem",
              color: "#666666",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Tired of uncomfortable dentures or multiple missing teeth? We get that! Our custom All on Four Dental Implants in Sydney CBD can fix that problem. This procedure delivers a permanent, natural-looking solution so you can smile with carefree confidence once again.
            Eat what you love, smile whenever you want — <strong>no denture slippage and no saying &ldquo;No&rdquo; to your favourite dishes.</strong>
          </motion.p>
        </div>

        {/* 2-Column Feature & Visual Demonstration */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          {/* Left Column: Key Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#FAF7F5",
                borderRadius: "16px",
                padding: "1.75rem",
                border: "1px solid rgba(244, 122, 74, 0.15)",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "#F47A4A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 6px 16px rgba(244, 122, 74, 0.3)",
                }}
              >
                <Smile size={24} color="#ffffff" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.25rem",
                    color: "#2C2C2C",
                    marginBottom: "0.4rem",
                    fontWeight: 400,
                  }}
                >
                  Find Your New Confidence
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.92rem",
                    color: "#666666",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Experience the life-changing feeling of fixed teeth that never move or click when speaking. Designed with optimal facial support to rejuvenate your natural profile.
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#FAF7F5",
                borderRadius: "16px",
                padding: "1.75rem",
                border: "1px solid rgba(244, 122, 74, 0.15)",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "#2C2C2C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={24} color="#F47A4A" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.25rem",
                    color: "#2C2C2C",
                    marginBottom: "0.4rem",
                    fontWeight: 400,
                  }}
                >
                  30+ Years Clinical Mastery
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.92rem",
                    color: "#666666",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Led by Dr. Manish Shah (BDS Hons, MBBS, MMED Sleep Med) & Dr. Kinnar Shah. Our Pitt Street clinic features hospital-grade 3D CBCT imaging, guided surgery, and IV sedation.
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#FAF7F5",
                borderRadius: "16px",
                padding: "1.75rem",
                border: "1px solid rgba(244, 122, 74, 0.15)",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "#F47A4A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 6px 16px rgba(244, 122, 74, 0.3)",
                }}
              >
                <Heart size={24} color="#ffffff" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.25rem",
                    color: "#2C2C2C",
                    marginBottom: "0.4rem",
                    fontWeight: 400,
                  }}
                >
                  Freedom to Eat & Enjoy Life
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.92rem",
                    color: "#666666",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Bite into apples, steaks, and crunchy foods with up to 90% of natural chewing force restored. No messy adhesives or palate-covering plastic ever again.
                </p>
              </div>
            </div>

            {/* Quick Action */}
            <div style={{ marginTop: "0.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#procedure"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#F47A4A",
                  color: "#ffffff",
                  padding: "0.85rem 1.8rem",
                  borderRadius: "8px",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(244, 122, 74, 0.28)",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#e06934")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#F47A4A")}
              >
                See the 5-Step Procedure
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:0292677777"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "transparent",
                  color: "#2C2C2C",
                  border: "1.5px solid #2C2C2C",
                  padding: "0.85rem 1.8rem",
                  borderRadius: "8px",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#2C2C2C";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#2C2C2C";
                }}
              >
                Call (02) 9267 7777
              </a>
            </div>
          </motion.div>

          {/* Right Column: "Spot the Difference" Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            style={{
              backgroundColor: "#FAF7F5",
              borderRadius: "20px",
              padding: "1.75rem",
              border: "1px solid rgba(244, 122, 74, 0.15)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#F47A4A",
                  }}
                >
                  Real Sydney Case Study
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.35rem",
                    color: "#2C2C2C",
                    margin: "0.25rem 0 0",
                    fontWeight: 400,
                  }}
                >
                  Spot the Difference.
                </h4>
              </div>

              {/* Toggle Switch */}
              <div
                style={{
                  display: "inline-flex",
                  backgroundColor: "#ffffff",
                  borderRadius: "999px",
                  padding: "4px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                }}
              >
                <button
                  onClick={() => setActiveTab("before")}
                  style={{
                    padding: "0.4rem 0.9rem",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: activeTab === "before" ? "#2C2C2C" : "transparent",
                    color: activeTab === "before" ? "#ffffff" : "#666666",
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Before
                </button>
                <button
                  onClick={() => setActiveTab("after")}
                  style={{
                    padding: "0.4rem 0.9rem",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: activeTab === "after" ? "#F47A4A" : "transparent",
                    color: activeTab === "after" ? "#ffffff" : "#666666",
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  After All-on-4
                </button>
              </div>
            </div>

            {/* Image Container with smooth transition */}
            <div
              style={{
                position: "relative",
                height: "360px",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Image
                src={activeTab === "after" ? images.gallery.sc2 : images.allon4.elderCouple}
                alt={activeTab === "after" ? "After All on 4 Dental Implants" : "Before All on 4 Dental Implants"}
                fill
                style={{ objectFit: "cover", transition: "opacity 0.4s ease" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Status Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  right: "1rem",
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "10px",
                  padding: "0.75rem 1rem",
                  color: "#ffffff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontFamily: "var(--font-prata)", fontSize: "0.95rem", fontWeight: 400 }}>
                    {activeTab === "after" ? "Permanent Full Arch Zirconia Smile" : "Severe Wear & Failing Natural Dentition"}
                  </div>
                  <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>
                    {activeTab === "after" ? "Placed in 2 days · Dr. Manish Shah CBD Clinic" : "Struggled with chewing & loose dentures"}
                  </div>
                </div>
                <span
                  style={{
                    backgroundColor: activeTab === "after" ? "#23A455" : "#EE6C3B",
                    color: "#ffffff",
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "999px",
                    textTransform: "uppercase",
                  }}
                >
                  {activeTab === "after" ? "Restored" : "Initial"}
                </span>
              </div>
            </div>

            {/* Testimonial Quote under image */}
            <div
              style={{
                marginTop: "1.25rem",
                padding: "1rem",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                borderLeft: "4px solid #F47A4A",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  color: "#444444",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                &ldquo;I haven&rsquo;t smiled like this in 15 years. Dr. Shah and his team gave me my life, confidence, and appetite back. It feels completely natural!&rdquo;
              </p>
              <div
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#F47A4A",
                  marginTop: "0.4rem",
                }}
              >
                — Robert D., Sydney CBD Patient
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
