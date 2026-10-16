"use client";

import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/google-reviews";

const items = [
  "All on 4 & All on X Dental Implants",
  "Full Arch Fixed Teeth",
  "From $18,000 Per Arch",
  "Priced Per Arch, Not Per Implant",
  "Teeth in a Day for Suitable Cases",
  "Sedation Available",
  "Sydney CBD – 307 Pitt Street",
  "Dentists With 25+ Years' Experience",
  "3D CBCT & Digital Guided Planning",
  "Interest-Free Plans up to 48 Months",
  "Free Parking",
  `${GOOGLE_RATING}★ · ${GOOGLE_REVIEW_COUNT} Google Reviews`,
];

// Duplicate for seamless infinite scroll
const allItems = [...items, ...items];

export default function ServicesTicker() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "14px 0",
        background: "linear-gradient(135deg, #EC844B 0%, #F47A4A 50%, #e06030 100%)",
      }}
    >
      {/* Left fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "5rem",
          zIndex: 1,
          background: "linear-gradient(to right, #EC844B, transparent)",
          pointerEvents: "none",
        }}
      />
      {/* Right fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "5rem",
          zIndex: 1,
          background: "linear-gradient(to left, #e06030, transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        className="ticker-track"
        style={{
          display: "flex",
          width: "max-content",
          userSelect: "none",
        }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0 1.5rem",
              color: "#fff",
              fontFamily: "var(--font-assistant)",
              fontSize: "0.78rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem" }}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
