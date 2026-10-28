"use client";

import { PhoneCall } from "lucide-react";

const features = [
  {
    title: "Teeth in a Day",
    text: "Fixed temporary teeth fitted the same day as surgery, for suitable cases",
  },
  {
    title: "Fast Recovery",
    text: "Less discomfort, minimal bleeding, and quicker healing",
  },
  {
    title: "Accurate & Precise",
    text: "Advanced digital planning for predictable implant placement",
  },
  {
    title: "From $90/Week*",
    text: "Interest free plans up to 48 months and up to $30,000. *Based on eligibility; terms apply.",
  },
  {
    title: "Trusted Experience",
    text: "Sydney implant dentists, each with 25+ years of experience",
  },
  {
    title: "Free Parking",
    text: "Easy access in Sydney CBD with complimentary parking",
  },
];

export default function CompleteMySmile() {
  return (
    <section
      id="complete-my-smile"
      className="sc-cms-section"
      style={{
        backgroundColor: "#FAF9F6",
        padding: "clamp(3.5rem, 6vw, 5.5rem) 1.25rem",
        borderTop: "1px solid #ECE7DE",
      }}
    >
      <style>{`
        .sc-cms-cta {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .sc-cms-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(244, 122, 74, 0.45);
        }
        @media (prefers-reduced-motion: reduce) {
          .sc-cms-cta { transition: none; }
          .sc-cms-cta:hover { transform: none; }
        }
        @media (max-width: 640px) {
          .sc-cms-section {
            padding: 2.75rem 1rem !important;
          }
          .sc-cms-title {
            margin-bottom: 1.25rem !important;
          }
          .sc-cms-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 0.65rem !important;
          }
          .sc-cms-card {
            padding: 0.95rem 0.85rem !important;
            border-radius: 14px !important;
          }
          .sc-cms-card-title {
            font-size: 0.98rem !important;
            margin-bottom: 0.3rem !important;
          }
          .sc-cms-card p {
            font-size: 0.8rem !important;
            line-height: 1.45 !important;
          }
        }
        @media (max-width: 340px) {
          .sc-cms-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <h2
          className="sc-cms-title"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 0 clamp(1.75rem, 3.5vw, 2.75rem)",
          }}
        >
          <a
            href="tel:0292677777"
            className="sc-cms-cta"
            aria-label="Complete My Smile: call 02 9267 7777"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.85rem 1.9rem",
              background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",
              color: "#FFFFFF",
              borderRadius: "8px",
              textDecoration: "none",
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "clamp(1rem, 0.95rem + 0.3vw, 1.15rem)",
              fontWeight: 700,
              letterSpacing: "0.01em",
              boxShadow: "0 4px 14px rgba(244, 122, 74, 0.35)",
            }}
          >
            Complete My Smile
            <PhoneCall size={18} aria-hidden />
          </a>
        </h2>

        <div
          className="sc-cms-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1rem",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="sc-cms-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #E5E0D7",
                borderLeft: "3px solid #E86337",
                padding: "1.35rem 1.4rem",
              }}
            >
              <h3
                className="sc-cms-card-title"
                style={{
                  fontFamily: "var(--font-prata), Georgia, serif",
                  fontSize: "1.12rem",
                  fontWeight: 400,
                  color: "#1C1C1E",
                  margin: "0 0 0.3rem",
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "0.9rem",
                  color: "#555",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
