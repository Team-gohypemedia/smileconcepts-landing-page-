"use client";

const items = [
  "Porcelain Veneers",
  "Dental Implants",
  "Invisalign",
  "Laser Dentistry",
  "All-on-4",
  "Gum Lift",
  "Clear Braces",
  "Sleep Dentistry",
  "Teeth Whitening",
  "TMJ Treatment",
  "Root Canal",
  "Wisdom Teeth",
  "Cosmetic Dentistry",
  "Bone Grafting",
  "Emergency Dental",
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
