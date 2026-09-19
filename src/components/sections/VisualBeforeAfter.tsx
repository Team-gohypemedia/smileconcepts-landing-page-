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
    id: "allon4-1",
    category: "allon4",
    categoryLabel: "All-on-4 Implants",
    title: "Upper Arch All-on-4 Restoration",
    desc: "Complete upper arch rehabilitation with four angled Nobel Biocare implants and fixed immediate teeth.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: 1–3 Days",
    before: "/images/gallery/case-allon4-1-before.jpg",
    after: "/images/gallery/case-allon4-1-after.jpg",
  },
  {
    id: "smile-1",
    category: "makeover",
    categoryLabel: "Smile Makeover",
    title: "Full Aesthetic & Functional Makeover",
    desc: "Resolving dental wear, gaps, and severe discoloration with immediate custom fixed teeth.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: 48 Hours",
    before: "/images/gallery/case-smile-1-before.jpg",
    after: "/images/gallery/case-smile-1-after.jpg",
  },
  {
    id: "allon4-2",
    category: "allon4",
    categoryLabel: "All-on-4 Implants",
    title: "Double Arch Immediate Loading",
    desc: "Dual-arch All-on-4 surgery avoiding bone grafting and providing fixed provisional teeth in 48 hours.",
    location: "Sydney CBD · Dr. Kinnar Shah",
    duration: "Timeframe: 1–3 Days",
    before: "/images/gallery/case-allon4-2-before.jpg",
    after: "/images/gallery/case-allon4-2-after.jpg",
  },
  {
    id: "fullarch-1",
    category: "fullarch",
    categoryLabel: "Full Arch Rehabilitation",
    title: "Severe Periodontal & Denture Replacement",
    desc: "Eliminated ill-fitting dentures and restored complete chewing capability with monolithic zirconia.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: 1–3 Days",
    before: "/images/gallery/case-fullarch-1-before.jpg",
    after: "/images/gallery/case-fullarch-1-after.jpg",
  },
  {
    id: "fullarch-2",
    category: "fullarch",
    categoryLabel: "Full Arch Rehabilitation",
    title: "Lower Arch Cross-Arch Stabilization",
    desc: "Overcoming lower jaw bone loss with 45-degree angled implants and an in-house milled fixed bridge.",
    location: "Sydney CBD · Dr. Kinnar Shah",
    duration: "Timeframe: 1–3 Days",
    before: "/images/gallery/case-fullarch-2-before.jpg",
    after: "/images/gallery/case-fullarch-2-after.jpg",
  },
  {
    id: "zirconia-1",
    category: "zirconia",
    categoryLabel: "Zirconia Bridge",
    title: "Precision Milled Zirconia Final Bridge",
    desc: "Hand-layered, chip-resistant porcelain-zirconia hybrid with natural light translucency and strength.",
    location: "Sydney CBD · Dr. Manish Shah",
    duration: "Timeframe: Precision Delivery",
    before: "/images/gallery/case-zirconia-1-before.jpg",
    after: "/images/gallery/case-zirconia-1-after.jpg",
  },
  {
    id: "zirconia-2",
    category: "zirconia",
    categoryLabel: "Zirconia Bridge",
    title: "Permanent Full-Mouth Transformation",
    desc: "Comprehensive bite reconstruction and natural lip fullness restoration with custom-shaded zirconia.",
    location: "Sydney CBD · Dr. Kinnar Shah",
    duration: "Timeframe: Precision Delivery",
    before: "/images/gallery/case-zirconia-2-before.jpg",
    after: "/images/gallery/case-zirconia-2-after.jpg",
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
        padding: "clamp(5rem, 8vw, 7.5rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1rem, 3.5vw, 3rem)" }}>
        {/* Section Header */}
        <div
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
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "26px",
            border: "1px solid #E5E7EB",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)",
          }}
        >
          {/* Active Case Header Meta */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#F47A4A",
                  display: "block",
                  marginBottom: "0.35rem",
                }}
              >
                {activeCase.categoryLabel}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-prata)",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  fontWeight: 400,
                  color: "#11121E",
                  lineHeight: 1.25,
                  margin: "0 0 0.35rem",
                }}
              >
                {activeCase.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.95rem",
                  color: "#555869",
                  lineHeight: 1.55,
                  margin: 0,
                  maxWidth: "600px",
                }}
              >
                {activeCase.desc}
              </p>
            </div>

            <div
              style={{
                textAlign: "right",
                alignSelf: "flex-start",
                fontFamily: "var(--font-assistant)",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#1A1A24",
                  fontWeight: 600,
                }}
              >
                {activeCase.location}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "#F47A4A",
                  fontWeight: 600,
                  marginTop: "0.2rem",
                }}
              >
                {activeCase.duration}
              </div>
            </div>
          </div>

          {/* Interactive CompareReveal Slider */}
          <div
            key={`${activeCase.id}-${inView ? "visible" : "hidden"}`}
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 12px 35px rgba(0, 0, 0, 0.08)",
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
                aspectRatio: "1080 / 420",
                width: "100%",
                border: "none",
                borderRadius: "18px",
                backgroundColor: "transparent",
              }}
            />
          </div>

          {/* Case Thumbnail Selector Row */}
          <div style={{ marginTop: "2rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.85rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.82rem",
                  color: "#6B7082",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                }}
              >
                Explore Cases in this Category ({filteredCases.length})
              </span>
              <span
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.8rem",
                  color: "#8E93A4",
                }}
              >
                Click any case to inspect
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                gap: "0.85rem",
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
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: isSelected
                        ? "2px solid #F47A4A"
                        : "1px solid #E2E4E8",
                      backgroundColor: isSelected ? "rgba(244, 122, 74, 0.08)" : "#F9FAFB",
                      padding: "0.35rem",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1080 / 420",
                        borderRadius: "8px",
                        overflow: "hidden",
                        marginBottom: "0.4rem",
                      }}
                    >
                      <Image
                        src={c.after}
                        alt={c.title}
                        fill
                        sizes="160px"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "0.76rem",
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
                  </button>
                );
              })}
            </div>
          </div>

          {/* Micro-caption below card */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1.5rem",
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
              Drag divider or use keyboard arrows &bull; Double-click to snap 50%
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
