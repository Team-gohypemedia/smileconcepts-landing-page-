"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Table,
  Check,
  Activity,
  Lock,
  Sparkles,
  Utensils,
  ShieldCheck,
  Layers,
  Smile,
  Clock,
} from "lucide-react";
import AllOn4ScrollFeatures from "./AllOn4ScrollFeatures";

export default function AllOn4Overview() {
  const [readMoreIntro, setReadMoreIntro] = useState(false);
  const [showComparisonTable, setShowComparisonTable] = useState(true);

  // Exact Denture Comparison Table from Live Website (Verbatim Copy Preserved)
  const comparisonData = [
    {
      feature: "Surgery Required",
      icon: <Activity size={15} color="#E86337" />,
      allon4: "Yes",
      allon4Badge: "Minimally Invasive",
      dentures: "Usually No",
      denturesBadge: "Non-Surgical",
    },
    {
      feature: "Fixed in place",
      icon: <Lock size={15} color="#E86337" />,
      allon4: "Yes",
      allon4Badge: "Non-Removable",
      dentures: "No",
      denturesBadge: "Removable Plate",
    },
    {
      feature: "Cleaning",
      icon: <Sparkles size={15} color="#E86337" />,
      allon4: "Daily cleaning around and beneath the bridge; professional maintenance",
      allon4Badge: "Brush Like Natural",
      dentures: "Removed daily for cleaning; periodic review or reline may be needed",
      denturesBadge: "Soaking Cups",
    },
    {
      feature: "Stability when eating",
      icon: <Utensils size={15} color="#E86337" />,
      allon4: "Higher (up to 90% natural force)",
      allon4Badge: "90% Bite Force",
      dentures: "May vary / slips frequently",
      denturesBadge: "Limited Force",
    },
    {
      feature: "Denture adhesives required",
      icon: <ShieldCheck size={15} color="#E86337" />,
      allon4: "Usually not",
      allon4Badge: "Zero Adhesives",
      dentures: "Often daily",
      denturesBadge: "Sticky Glue Needed",
    },
    {
      feature: "Supported by implants",
      icon: <Layers size={15} color="#E86337" />,
      allon4: "Yes (4 to 6 titanium implants)",
      allon4Badge: "Jawbone Anchored",
      dentures: "No",
      denturesBadge: "Gum-Borne",
    },
    {
      feature: "Designed as a fixed solution",
      icon: <Smile size={15} color="#E86337" />,
      allon4: "Yes (Non-removable)",
      allon4Badge: "Permanent Arch",
      dentures: "No (Removable plate)",
      denturesBadge: "Palate Covered",
    },
    {
      feature: "Treatment time",
      icon: <Clock size={15} color="#E86337" />,
      allon4: "Immediate teeth on Day 1, healing stage",
      allon4Badge: "Day 1 Smile",
      dentures: "Usually shorter and non-surgical",
      denturesBadge: "Lab Process",
    },
  ];

  return (
    <section
      id="overview"
      style={{
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <style>{`
        .sc-hero-split {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(1.5rem, 3.5vw, 3rem);
          align-items: center;
          margin-bottom: clamp(2rem, 3.5vw, 3rem);
        }
        .sc-card-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 16px;
          border: 1px solid #ECE7DE;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.05);
          object-fit: cover;
        }
        .sc-comp-row {
          display: grid;
          grid-template-columns: 28% 36% 36%;
          align-items: center;
          padding: 0.72rem 1rem;
          border-bottom: 1px solid #ECE7DE;
          transition: background-color 0.2s ease;
        }
        .sc-comp-row:last-child {
          border-bottom: none;
        }
        .sc-comp-row:hover {
          background-color: rgba(232, 99, 55, 0.03);
        }
        @media (max-width: 820px) {
          .sc-hero-split {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .sc-comp-row {
            grid-template-columns: 1fr !important;
            gap: 0.45rem !important;
            padding: 0.85rem 0.9rem !important;
          }
          .sc-comp-header {
            display: none !important;
          }
        }
      `}</style>

      {/* ─── 1. MAIN SECTION INTRO: WHAT ARE ALL ON 4 DENTAL IMPLANTS ─── */}
      <div
        className="container-sc"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "clamp(2rem, 4vw, 3.5rem) 1.25rem 1.5rem",
        }}
      >
        <div className="sc-hero-split">
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(232, 99, 55, 0.08)",
                padding: "0.35rem 0.85rem",
                borderRadius: "999px",
                marginBottom: "0.85rem",
                border: "1px solid rgba(232, 99, 55, 0.2)",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#E86337",
                  fontFamily: "var(--font-assistant), sans-serif",
                }}
              >
                Comprehensive Overview
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-prata), Georgia, serif",
                fontSize: "clamp(1.5rem, 4.2vw, 2.75rem)",
                color: "#1C1C1E",
                fontWeight: 400,
                lineHeight: 1.22,
                marginBottom: "1rem",
              }}
            >
              What are All on 4 dental implants (full arch)?
            </h2>

            <div
              style={{
                fontFamily: "var(--font-assistant), sans-serif",
                fontSize: "clamp(0.92rem, 2.5vw, 1.02rem)",
                lineHeight: 1.68,
                color: "#444449",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              <p style={{ margin: 0 }}>
                All on 4 is a full arch treatment where a complete fixed bridge of replacement teeth is supported by a small number of dental implants, most commonly four, and up to six where your anatomy calls for it. It&apos;s designed for patients missing all or most of their upper or lower teeth, and it removes the need to place an individual implant for every missing tooth. Some patients refer to this as All on 4 implants (full arch) treatment, while others simply call it All on four implants.
              </p>

              <AnimatePresence>
                {readMoreIntro && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      The two rear implants are placed at an angle of up to 45 degrees. This is not just a technical detail. Angling the rear implants lets them reach denser areas of existing bone further forward in the jaw, which is why most patients can avoid the bone grafting that traditional full-arch implant approaches often require. Less surgery, less recovery time, and in most cases, a same-day temporary set of teeth, so you are never without a smile while things heal.
                    </p>
                    <p style={{ margin: 0 }}>
                      The final bridge is fixed permanently to the implants. It does not come out at night. It does not need adhesive. It functions much more like your natural teeth than any removable denture can.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setReadMoreIntro(!readMoreIntro)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "#E86337",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  alignSelf: "flex-start",
                }}
              >
                <span>{readMoreIntro ? "Read less" : "Read more"}</span>
                <span style={{ fontSize: "0.75rem" }}>{readMoreIntro ? "▲" : "▼"}</span>
              </button>
            </div>

            <div style={{ marginTop: "1.35rem" }}>
              <a
                href="#cost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.78rem 1.5rem",
                  backgroundColor: "#E86337",
                  color: "#ffffff",
                  borderRadius: "8px",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 18px rgba(232,99,55,0.25)",
                }}
              >
                <span>Complete my smile</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div>
            <Image
              src="/assets/allon4/dental-implants-model.jpg"
              alt="Woman pointing to All on 4 dental implants cross-section model at Smile Concepts Sydney"
              width={348}
              height={395}
              className="sc-card-img"
              priority
            />
          </div>
        </div>
      </div>

      {/* ─── 2. PREMIUM SCROLL-DRIVEN FEATURE SHOWCASE (PINNED TRANSITIONS) ─── */}
      <AllOn4ScrollFeatures />

      {/* ─── 3. CLINICAL COMPARISON: HIGH-DENSITY VISUAL MATRIX (ZERO WASTED SPACE) ─── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "1.5rem 0 4.5rem",
        }}
      >
        {/* Background Banner Image with Ambient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <Image
            src="/assets/hero/background.jpg"
            alt=""
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: 0.18,
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(250, 249, 246, 0.82) 15%, rgba(250, 249, 246, 0.90) 80%, #FFFFFF 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "750px",
              height: "450px",
              background:
                "radial-gradient(ellipse, rgba(232, 99, 55, 0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        </div>

        <div
          className="container-sc"
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "0 1.25rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.97)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              border: "1px solid #EAE5DC",
              padding: "clamp(1.4rem, 3vw, 2rem)",
              boxShadow:
                "0 18px 45px -10px rgba(28, 28, 30, 0.07), 0 2px 8px rgba(0,0,0,0.02)",
            }}
          >
          {/* Header Row with Toggle Button */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  color: "#E86337",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                  fontFamily: "var(--font-assistant), sans-serif",
                }}
              >
                <Table size={13} />
                <span>CLINICAL REFERENCE MATRIX</span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-prata), Georgia, serif",
                  fontSize: "clamp(1.22rem, 2.4vw, 1.55rem)",
                  color: "#1C1C1E",
                  margin: 0,
                  fontWeight: 400,
                  lineHeight: 1.28,
                }}
              >
                All on 4 vs Traditional Dentures: Direct Comparison
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "0.9rem",
                  color: "#666",
                  margin: "0.25rem 0 0 0",
                }}
              >
                Compare stability, surgical requirements, and daily maintenance side by side.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowComparisonTable(!showComparisonTable)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "999px",
                border: "1px solid #DCD5C9",
                backgroundColor: "#FAF9F6",
                color: "#1C1C1E",
                fontSize: "0.78rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "var(--font-assistant), sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F2ECE3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FAF9F6";
              }}
            >
              <span>{showComparisonTable ? "Hide Clinical Table" : "View Comparison Table"}</span>
              {showComparisonTable ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          <AnimatePresence>
            {showComparisonTable && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: "hidden" }}
              >
                {/* ─── COMPACT SIDE-BY-SIDE HEADER CARDS (VISUAL ANCHORS) ─── */}
                <div
                  className="sc-comp-header"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "28% 36% 36%",
                    gap: "0",
                    marginTop: "1.4rem",
                    borderTop: "1px solid #ECE7DE",
                    borderBottom: "1px solid #ECE7DE",
                    backgroundColor: "#FAF9F6",
                    borderRadius: "12px 12px 0 0",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      padding: "0.85rem 1rem",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      color: "#777",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontFamily: "var(--font-assistant), sans-serif",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Clinical Metric
                  </div>

                  {/* All On 4 Visual Header */}
                  <div
                    style={{
                      padding: "0.85rem 1rem",
                      backgroundColor: "rgba(232, 99, 55, 0.04)",
                      borderLeft: "1px solid #ECE7DE",
                      borderRight: "1px solid #ECE7DE",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "#1C1C1E",
                          fontFamily: "var(--font-assistant), sans-serif",
                        }}
                      >
                        All On 4 Fixed Teeth
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#16A34A",
                          fontWeight: 600,
                          fontFamily: "var(--font-assistant), sans-serif",
                        }}
                      >
                        Permanent • 90% Bite Force
                      </div>
                    </div>
                    <span
                      style={{
                        padding: "3px 8px",
                        borderRadius: "999px",
                        backgroundColor: "rgba(22, 163, 74, 0.12)",
                        color: "#16A34A",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Fixed
                    </span>
                  </div>

                  {/* Traditional Dentures Header */}
                  <div
                    style={{
                      padding: "0.85rem 1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "#1C1C1E",
                          fontFamily: "var(--font-assistant), sans-serif",
                        }}
                      >
                        Traditional Dentures
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#7A756F",
                          fontWeight: 600,
                          fontFamily: "var(--font-assistant), sans-serif",
                        }}
                      >
                        Conventional Acrylic Plate
                      </div>
                    </div>
                    <span
                      style={{
                        padding: "3px 8px",
                        borderRadius: "999px",
                        backgroundColor: "#ECE7DE",
                        color: "#666",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      Removable
                    </span>
                  </div>
                </div>

                {/* ─── 8 COMPARISON ROWS: HIGH DENSITY, SPACE EFFICIENT, COMPLETE TEXT ─── */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "0 0 12px 12px",
                    border: "1px solid #ECE7DE",
                    borderTop: "none",
                    overflow: "hidden",
                  }}
                >
                  {comparisonData.map((row, idx) => (
                    <div
                      key={idx}
                      className="sc-comp-row"
                      style={{
                        backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#FCFBF9",
                      }}
                    >
                      {/* Metric Name + Icon */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontFamily: "var(--font-assistant), sans-serif",
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          color: "#1C1C1E",
                        }}
                      >
                        <span
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(232, 99, 55, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {row.icon}
                        </span>
                        <span>{row.feature}</span>
                      </div>

                      {/* All On 4 Fixed Teeth Data */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontFamily: "var(--font-assistant), sans-serif",
                          fontSize: "0.88rem",
                          lineHeight: 1.45,
                          color: "#1C1C1E",
                          padding: "0 4px",
                        }}
                      >
                        <div
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(22, 163, 74, 0.14)",
                            color: "#16A34A",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        >
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <div>
                          <span style={{ fontWeight: 600, color: "#16A34A" }}>
                            {row.allon4}
                          </span>
                          <span
                            style={{
                              marginLeft: "6px",
                              display: "inline-block",
                              padding: "1px 6px",
                              borderRadius: "4px",
                              backgroundColor: "rgba(232, 99, 55, 0.08)",
                              color: "#E86337",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                            }}
                          >
                            {row.allon4Badge}
                          </span>
                        </div>
                      </div>

                      {/* Traditional Dentures Data */}
                      <div
                        style={{
                          fontFamily: "var(--font-assistant), sans-serif",
                          fontSize: "0.88rem",
                          lineHeight: 1.45,
                          color: "#666",
                          padding: "0 4px",
                        }}
                      >
                        <span>{row.dentures}</span>
                        <span
                          style={{
                            marginLeft: "6px",
                            display: "inline-block",
                            padding: "1px 6px",
                            borderRadius: "4px",
                            backgroundColor: "#F2EFEB",
                            color: "#7A756F",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                          }}
                        >
                          {row.denturesBadge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ─── INTEGRATED CLINICAL VISUAL BANNER (SPACE SAVING) ─── */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    marginTop: "1.1rem",
                    padding: "0.95rem 1.1rem",
                    borderRadius: "14px",
                    backgroundColor: "#FAF9F6",
                    border: "1px solid #ECE7DE",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Real Transformation Thumbnail */}
                  <div
                    style={{
                      width: "120px",
                      height: "76px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "1px solid #ECE7DE",
                      position: "relative",
                      flexShrink: 0,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    <Image
                      src="/assets/allon4/sunset-all-on-4.jpg"
                      alt="Real patient smile restoration comparison at Smile Concepts Sydney"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Clinical Advisory & Action */}
                  <div
                    style={{
                      flex: "1 1 280px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.73rem",
                          fontWeight: 700,
                          color: "#16A34A",
                          backgroundColor: "rgba(22, 163, 74, 0.12)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        ✓ Zero Adhesives
                      </span>
                      <span
                        style={{
                          fontSize: "0.73rem",
                          fontWeight: 700,
                          color: "#E86337",
                          backgroundColor: "rgba(232, 99, 55, 0.09)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        ✓ 90% Chewing Force
                      </span>
                      <span
                        style={{
                          fontSize: "0.73rem",
                          fontWeight: 700,
                          color: "#1C1C1E",
                          backgroundColor: "#EAE5DC",
                          padding: "2px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        ✓ Non-Removable
                      </span>
                    </div>

                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.82rem",
                        color: "#5E616B",
                        lineHeight: 1.45,
                        fontFamily: "var(--font-assistant), sans-serif",
                      }}
                    >
                      The most suitable option depends on your bone volume, oral health, and clinical assessment. Schedule your 3D CBCT diagnostic consultation in Sydney CBD to determine your candidacy.
                    </p>
                  </div>

                  {/* Consultation Action Button */}
                  <div style={{ flexShrink: 0 }}>
                    <a
                      href="#cost"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        backgroundColor: "#E86337",
                        color: "#FFFFFF",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        fontFamily: "var(--font-assistant), sans-serif",
                        boxShadow: "0 4px 12px rgba(232, 99, 55, 0.25)",
                      }}
                    >
                      <span>Check Suitability</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
