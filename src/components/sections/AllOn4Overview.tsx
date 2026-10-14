"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AllOn4ScrollFeatures from "./AllOn4ScrollFeatures";

export default function AllOn4Overview() {
  const [readMoreIntro, setReadMoreIntro] = useState(false);

  // Exact Denture Comparison Table Matching Reference Website
  const comparisonData = [
    {
      feature: "Surgery Required",
      allon4: "Yes",
      dentures: "Usually No",
    },
    {
      feature: "Fixed in place",
      allon4: "Yes",
      dentures: "No",
    },
    {
      feature: "Cleaning",
      allon4: "Daily cleaning around and beneath the bridge; professional maintenance",
      dentures: "Removed daily for cleaning; periodic review or reline may be needed",
    },
    {
      feature: "Stability when eating",
      allon4: "Higher",
      dentures: "May vary",
    },
    {
      feature: "Denture adhesives required",
      allon4: "Usually not",
      dentures: "Often",
    },
    {
      feature: "Supported by implants",
      allon4: "Yes",
      dentures: "No",
    },
    {
      feature: "Designed as a fixed solution",
      allon4: "Yes",
      dentures: "No",
    },
    {
      feature: "Treatment time",
      allon4: "Surgical and healing stages",
      dentures: "Usually shorter and non-surgical",
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

      {/* ─── 3. PREMIUM SCROLL-DRIVEN FEATURE SHOWCASE (PINNED TRANSITIONS) ─── */}
      <AllOn4ScrollFeatures />

      {/* ─── 4. ALL ON 4 VS TRADITIONAL DENTURES: HOW DO THEY COMPARE? (MATCHING SECOND IMAGE) ─── */}
      <section
        id="dentures-comparison"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "clamp(3.5rem, 6vw, 5.5rem) 1.25rem",
          position: "relative",
          borderTop: "1px solid #ECE7DE",
        }}
      >
        <div
          style={{
            maxWidth: "1060px",
            margin: "0 auto",
          }}
        >
          {/* Centered Coral Serif Heading (Balanced to fit in one line) */}
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.35rem, 2.5vw, 2.15rem)",
              fontWeight: 400,
              color: "#F47A4A",
              lineHeight: 1.25,
              textAlign: "center",
              margin: "0 auto 1.15rem",
              letterSpacing: "-0.01em",
            }}
          >
            All on 4 vs Traditional Dentures: How Do They Compare?
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "clamp(0.92rem, 1.6vw, 1.02rem)",
              color: "#4F4F4F",
              textAlign: "center",
              maxWidth: "960px",
              margin: "0 auto clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.6,
            }}
          >
            While dentures remain a suitable option for some people, they are removable and may become loose over time as the jawbone changes.
          </p>

          {/* Clean, Simple Table (Responsive & Easy to Read) */}
          <div
            style={{
              width: "100%",
              overflowX: "auto",
              borderRadius: "4px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              border: "1px solid #ECE7DE",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "620px",
                borderCollapse: "collapse",
                textAlign: "left",
                fontFamily: "var(--font-assistant), sans-serif",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#EB6B3D",
                    color: "#FFFFFF",
                  }}
                >
                  <th
                    style={{
                      padding: "1rem 1.4rem",
                      fontWeight: 700,
                      fontSize: "0.96rem",
                      letterSpacing: "0.02em",
                      width: "28%",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.4rem",
                      fontWeight: 700,
                      fontSize: "0.96rem",
                      letterSpacing: "0.02em",
                      width: "36%",
                    }}
                  >
                    All On 4
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.4rem",
                      fontWeight: 700,
                      fontSize: "0.96rem",
                      letterSpacing: "0.02em",
                      width: "36%",
                    }}
                  >
                    Traditional Dentures
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#F6F6F6",
                      transition: "background-color 0.15s ease",
                    }}
                  >
                    <td
                      style={{
                        padding: "1.05rem 1.4rem",
                        fontWeight: 600,
                        color: "#222222",
                        fontSize: "0.94rem",
                        borderBottom: "1px solid #ECE7DE",
                        verticalAlign: "top",
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "1.05rem 1.4rem",
                        color: "#333333",
                        fontSize: "0.93rem",
                        lineHeight: 1.55,
                        borderBottom: "1px solid #ECE7DE",
                        verticalAlign: "top",
                      }}
                    >
                      {row.allon4}
                    </td>
                    <td
                      style={{
                        padding: "1.05rem 1.4rem",
                        color: "#555555",
                        fontSize: "0.93rem",
                        lineHeight: 1.55,
                        borderBottom: "1px solid #ECE7DE",
                        verticalAlign: "top",
                      }}
                    >
                      {row.dentures}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Centered Footnote Matching Second Image */}
          <p
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.92rem",
              color: "#666666",
              textAlign: "center",
              marginTop: "1.75rem",
              lineHeight: 1.6,
            }}
          >
            The most suitable option depends on your oral health, goals, and clinical assessment.
          </p>
        </div>
      </section>
    </section>
  );
}
