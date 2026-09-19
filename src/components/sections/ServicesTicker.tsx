"use client";

const items = [
  "All on 4 Dental Implants",
  "Permanent Fixed Full Arch",
  "Immediate Function in 1–3 Days",
  "No Bone Grafting in Most Cases",
  "Super Fund Release Assistance",
  "Painless Sleep Dentistry",
  "Sydney CBD – 210 Pitt Street",
  "40+ Years Implant Experience",
  "Natural High-Strength Zirconia",
  "0% Interest-Free Payment Plans",
  "Eat Apples, Steak & Crunchy Foods",
  "Top-Rated 5★ Google Reviews",
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
