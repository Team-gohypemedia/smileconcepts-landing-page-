"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CompareReveal } from "@/components/ui/compare-reveal";

interface CaseItem {
  id: string;
  category: "allon4" | "fullarch" | "zirconia" | "makeover";
  categoryLabel: string;
  title: string;
  desc: string;
  location: string;
  duration: string;
  before: string;
  after: string;
}

const cases: CaseItem[] = [
  {
    id: "makeover-1",
    category: "makeover",
    categoryLabel: "Smile Makeover",
    title: "Full Arch Porcelain Smile Makeover",
    desc: "Correcting severe incisal wear, chipped edges, and discoloration with custom handcrafted porcelain veneers.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: 48 Hours",
    before: "/assets/before-after/case-makeover-1-before.png",
    after: "/assets/before-after/case-makeover-1-after.png",
  },
  {
    id: "allon4-1",
    category: "allon4",
    categoryLabel: "All-on-4 Implants",
    title: "Complete Arch All-on-4 Rehabilitation",
    desc: "Complete fixed implant transformation replacing severely decayed, broken dentition with permanent teeth.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: 1–3 Days",
    before: "/assets/before-after/case-allon4-1-before.png",
    after: "/assets/before-after/case-allon4-1-after.png",
  },
  {
    id: "zirconia-1",
    category: "zirconia",
    categoryLabel: "Zirconia Bridge",
    title: "Precision Aesthetic Zirconia Crowns",
    desc: "Replacing aged, stained margins and worn restorations with precision-milled translucent zirconia crowns.",
    location: "Sydney CBD · Dr. Kinnar Shah",
    duration: "Timeframe: Precision Delivery",
    before: "/assets/before-after/case-zirconia-1-before.png",
    after: "/assets/before-after/case-zirconia-1-after.png",
  },
  {
    id: "allon4-2",
    category: "allon4",
    categoryLabel: "All-on-4 Implants",
    title: "Immediate Implant & Arch Restoration",
    desc: "Immediate full-arch implant placement and fixed provisional bridge replacing failing dentition.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: 1–3 Days",
    before: "/assets/before-after/case-allon4-2-before.png",
    after: "/assets/before-after/case-allon4-2-after.png",
  },
  {
    id: "makeover-2",
    category: "makeover",
    categoryLabel: "Smile Makeover",
    title: "Cosmetic Alignment & Porcelain Veneers",
    desc: "Correcting severe crowding, fractured edges, and misalignment with custom hand-crafted porcelain.",
    location: "Sydney CBD · Dr. Kinnar Shah",
    duration: "Timeframe: 48 Hours",
    before: "/assets/before-after/case-makeover-2-before.png",
    after: "/assets/before-after/case-makeover-2-after.png",
  },
  {
    id: "fullarch-1",
    category: "fullarch",
    categoryLabel: "Full Arch Rehabilitation",
    title: "Upper Arch Comprehensive Reconstruction",
    desc: "Comprehensive implant and aesthetic restoration for missing central tooth, root decay, and severe wear.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: 1–3 Days",
    before: "/assets/before-after/case-fullarch-1-before.png",
    after: "/assets/before-after/case-fullarch-1-after.png",
  },
  {
    id: "zirconia-2",
    category: "zirconia",
    categoryLabel: "Zirconia Bridge",
    title: "Multi-Unit Zirconia Crown & Bridge",
    desc: "Full upper arch restoration replacing damaged front teeth with biocompatible, high-strength zirconia.",
    location: "Sydney CBD · Dr. Kinnar Shah",
    duration: "Timeframe: Precision Delivery",
    before: "/assets/before-after/case-zirconia-2-before.png",
    after: "/assets/before-after/case-zirconia-2-after.png",
  },
  {
    id: "fullarch-2",
    category: "fullarch",
    categoryLabel: "Full Arch Rehabilitation",
    title: "Full Arch Diastema Closure & Recontouring",
    desc: "Closing spacing (diastema) and reconstructing tooth proportions for an elegant, symmetrical smile.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: 48 Hours",
    before: "/assets/before-after/case-fullarch-2-before.png",
    after: "/assets/before-after/case-fullarch-2-after.png",
  },
];

const categories = [
  { id: "all", label: "All Cases" },
  { id: "makeover", label: "Smile Makeovers" },
  { id: "allon4", label: "All-on-4 Implants" },
  { id: "fullarch", label: "Full Arch Rehabilitation" },
  { id: "zirconia", label: "Zirconia Bridges" },
];

export default function VisualBeforeAfter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCaseId, setSelectedCaseId] = useState(cases[0].id);

  const filteredCases = activeCategory === "all"
    ? cases
    : cases.filter((c) => c.category === activeCategory);

  const activeCase = cases.find((c) => c.id === selectedCaseId) || filteredCases[0] || cases[0];

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    const matching = catId === "all" ? cases : cases.filter((c) => c.category === catId);
    if (matching.length > 0 && !matching.some((c) => c.id === selectedCaseId)) {
      setSelectedCaseId(matching[0].id);
    }
  };

  return (
    <section
      ref={ref}
      id="transformations"
      style={{
        backgroundColor: "#ffffff",
        color: "#1A1A24",
        padding: "clamp(3rem, 8vw, 7.5rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1rem, 3.5vw, 3rem)" }}>
        {/* Section Header */}
        <div
          className="sc-ba-header"
          style={{
            textAlign: "center",
            maxWidth: "840px",
            margin: "0 auto 2.5rem",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontFamily: "var(--font-assistant)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#F47A4A",
              marginBottom: "0.85rem",
            }}
          >
            Smile Transformation
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
              fontWeight: 400,
              color: "#11121E",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Before &amp; Afters
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "var(--font-assistant)",
              fontSize: "1.05rem",
              color: "#555869",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            A dedicated team, caring staff, experienced dentists, and top-rated infrastructure
            make us the go-to place for the best All on 4 dental implants procedure in Sydney.
          </motion.p>
        </div>

        {/* Category Navigation Pills */}
        <div
          className="sc-ba-pills-wrap"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.65rem",
            marginBottom: "2.5rem",
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className="sc-ba-pill-btn"
                onClick={() => handleCategoryClick(cat.id)}
                style={{
                  padding: "0.6rem 1.4rem",
                  borderRadius: "999px",
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 600,
                  border: isActive
                    ? "1px solid #F47A4A"
                    : "1px solid #E2E4E8",
                  backgroundColor: isActive ? "#F47A4A" : "#F4F5F7",
                  color: isActive ? "#ffffff" : "#4A4D5E",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isActive ? "0 4px 18px rgba(244, 122, 74, 0.3)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#EAECEF";
                    (e.currentTarget as HTMLElement).style.color = "#11121E";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#F4F5F7";
                    (e.currentTarget as HTMLElement).style.color = "#4A4D5E";
                  }
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Main Showcase Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="sc-ba-card"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "26px",
            border: "1px solid #E5E7EB",
            padding: "clamp(1rem, 3.5vw, 2.5rem)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)",
          }}
        >
          <style>{`
            @media (max-width: 991px) {
              .sc-ba-cases-column {
                border-left: none !important;
                border-top: 1px solid #EDEDF2 !important;
                padding-left: 0 !important;
                padding-top: 1.25rem !important;
                width: 100% !important;
              }
              .sc-ba-slider-column {
                max-width: 100% !important;
                width: 100% !important;
                flex: 1 1 100% !important;
              }
              .sc-ba-split-container {
                gap: 1.25rem !important;
              }
            }
            /* Mobile: pills grid 2-per-row */
            @media (max-width: 600px) {
              .sc-ba-pills-wrap {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 0.5rem !important;
                margin-bottom: 1.5rem !important;
              }
              .sc-ba-pill-btn {
                width: 100% !important;
                padding: 0.55rem 0.5rem !important;
                font-size: 0.8rem !important;
                text-align: center !important;
              }
              .sc-ba-header {
                margin-bottom: 1.5rem !important;
              }
              .sc-ba-header h2 {
                font-size: 1.9rem !important;
                margin-bottom: 0.65rem !important;
              }
              .sc-ba-header p {
                font-size: 0.88rem !important;
                line-height: 1.55 !important;
              }
              .sc-ba-card {
                padding: 1rem !important;
                border-radius: 16px !important;
              }
              .sc-ba-case-meta {
                flex-direction: column !important;
                gap: 0.4rem !important;
                margin-bottom: 0.85rem !important;
                align-items: center !important;
                text-align: center !important;
              }
              .sc-ba-case-meta > div:first-child {
                text-align: center !important;
              }
              .sc-ba-case-meta-right {
                text-align: center !important;
              }
              .sc-ba-case-meta h3 {
                font-size: 1.1rem !important;
              }
              .sc-ba-cases-grid {
                grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)) !important;
                gap: 0.4rem !important;
                max-height: 200px !important;
              }
              .sc-ba-cases-header {
                margin-bottom: 0.65rem !important;
                padding-bottom: 0.5rem !important;
              }
              .sc-ba-footer {
                flex-direction: column !important;
                gap: 0.25rem !important;
                margin-top: 1rem !important;
                padding-top: 0.75rem !important;
              }
            }
          `}</style>
          {/* Side-by-Side Flex Layout */}
          <div
            className="sc-ba-split-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2.25rem",
              alignItems: "flex-start",
            }}
          >
            {/* Left Column: Interactive CompareReveal Slider (Reduced Width & Size) */}
            <div
              className="sc-ba-slider-column"
              style={{
                flex: "1 1 560px",
                maxWidth: "680px",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Active Case Meta Header */}
              <div
                className="sc-ba-case-meta"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.25rem",
                  gap: "1rem",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#F47A4A",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {activeCase.categoryLabel}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-prata)",
                      fontSize: "clamp(1.25rem, 2.2vw, 1.7rem)",
                      fontWeight: 400,
                      color: "#11121E",
                      lineHeight: 1.25,
                      margin: "0 0 0.25rem",
                    }}
                  >
                    {activeCase.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.9rem",
                      color: "#555869",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {activeCase.desc}
                  </p>
                </div>

                <div
                  className="sc-ba-case-meta-right"
                  style={{
                    textAlign: "right",
                    fontFamily: "var(--font-assistant)",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#1A1A24",
                      fontWeight: 600,
                    }}
                  >
                    {activeCase.location}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#F47A4A",
                      fontWeight: 600,
                      marginTop: "0.15rem",
                    }}
                  >
                    {activeCase.duration}
                  </div>
                </div>
              </div>

              {/* Compare Slider Container */}
              <div
                key={`${activeCase.id}-${inView ? "visible" : "hidden"}`}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  border: "1px solid #E2E4E8",
                  backgroundColor: "#000000",
                  width: "100%",
                }}
              >
                <CompareReveal
                  before={{
                    src: activeCase.before,
                    alt: `Before Treatment: ${activeCase.title}`,
                  }}
                  after={{
                    src: activeCase.after,
                    alt: `After Treatment: ${activeCase.title}`,
                  }}
                  labels={["Before", "After"]}
                  defaultPosition={50}
                  introSweep={true}
                  snapOnDoubleClick={50}
                  style={{
                    aspectRatio: "990 / 793",
                    width: "100%",
                    border: "none",
                    borderRadius: "16px",
                    backgroundColor: "transparent",
                  }}
                />
              </div>

              {/* Slider instruction helper */}
              <div
                style={{
                  marginTop: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.76rem",
                  color: "#8E93A4",
                }}
              >
                <span>Drag divider &bull; Double-click to snap 50%</span>
                <span style={{ color: "#F47A4A", fontWeight: 600 }}>100% Verified Result</span>
              </div>
            </div>

            {/* Right Column: Cases Gallery List in One Clean Section */}
            <div
              className="sc-ba-cases-column"
              style={{
                flex: "1 1 360px",
                minWidth: "290px",
                display: "flex",
                flexDirection: "column",
                borderLeft: "1px solid #EDEDF2",
                paddingLeft: "clamp(1rem, 2.5vw, 2rem)",
              }}
            >
              <div
                className="sc-ba-cases-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid #EDEDF2",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#11121E",
                      margin: 0,
                    }}
                  >
                    Clinical Cases
                  </h4>
                  <span
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.76rem",
                      color: "#7A7F92",
                    }}
                  >
                    Select a case to inspect real transformation
                  </span>
                </div>
                <span
                  style={{
                    backgroundColor: "rgba(244, 122, 74, 0.1)",
                    color: "#F47A4A",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "999px",
                    fontFamily: "var(--font-assistant)",
                  }}
                >
                  {filteredCases.length} Cases
                </span>
              </div>

              {/* Cases List */}
              <div
                className="sc-ba-cases-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
                  gap: "0.55rem",
                  maxHeight: "380px",
                  overflowY: "auto",
                  paddingRight: "0.35rem",
                }}
              >
                {filteredCases.map((c, idx) => {
                  const isSelected = c.id === activeCase.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCaseId(c.id)}
                      style={{
                        position: "relative",
                        borderRadius: "10px",
                        overflow: "hidden",
                        border: isSelected
                          ? "2px solid #F47A4A"
                          : "1px solid #E2E4E8",
                        backgroundColor: isSelected ? "rgba(244, 122, 74, 0.08)" : "#F9FAFB",
                        padding: "0.28rem",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          (e.currentTarget as HTMLElement).style.borderColor = "#CBD0D8";
                          (e.currentTarget as HTMLElement).style.backgroundColor = "#F3F4F6";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          (e.currentTarget as HTMLElement).style.borderColor = "#E2E4E8";
                          (e.currentTarget as HTMLElement).style.backgroundColor = "#F9FAFB";
                        }
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "990 / 793",
                          borderRadius: "6px",
                          overflow: "hidden",
                          marginBottom: "0.25rem",
                        }}
                      >
                        <Image
                          src={c.after}
                          alt={c.title}
                          fill
                          sizes="120px"
                          style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                      </div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          fontFamily: "var(--font-assistant)",
                          fontWeight: 600,
                          color: isSelected ? "#F47A4A" : "#333544",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Case 0{idx + 1}
                      </div>
                      <div
                        style={{
                          fontSize: "0.64rem",
                          fontFamily: "var(--font-assistant)",
                          color: "#8E93A4",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {c.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Micro-caption below card */}
          <div
            className="sc-ba-footer"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1.75rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid #EDEDF2",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "0.82rem",
                color: "#7A7F92",
              }}
            >
              Interactive Comparison &bull; High Precision Dental Implant & Cosmetic Rehabilitation
            </span>
            <span
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "0.82rem",
                color: "#F47A4A",
                fontWeight: 600,
              }}
            >
              100% Genuine Clinical Transformations &bull; Sydney CBD
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
