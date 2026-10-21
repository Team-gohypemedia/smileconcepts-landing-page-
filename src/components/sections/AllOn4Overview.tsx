"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AllOn4Overview() {
  const [readMoreIntro, setReadMoreIntro] = useState(false);

  return (
    <section
      id="general-info"
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
        @media (max-width: 820px) {
          .sc-hero-split {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .sc-hero-split-content {
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .sc-hero-h2 {
            text-align: center !important;
          }
          .sc-overview-intro-body {
            text-align: left !important;
          }
          .sc-hero-cta-wrap {
            display: flex !important;
            justify-content: center !important;
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
          <div className="sc-hero-split-content">
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
              className="sc-hero-h2"
              style={{
                fontFamily: "var(--font-prata), Georgia, serif",
                fontSize: "clamp(1.5rem, 4.2vw, 2.75rem)",
                color: "#1C1C1E",
                fontWeight: 400,
                lineHeight: 1.22,
                marginBottom: "1rem",
              }}
            >
              What are All on 4 Dental Implants (full arch)?
            </h2>

            <div
              className="sc-overview-intro-body"
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
                All on 4 is a full-arch treatment in which a complete fixed bridge of replacement teeth is supported by a small number of dental implants, most commonly four, and up to six when your anatomy calls for it. It is designed for patients missing all or most of their upper or lower teeth, and it removes the need to place an individual implant for every missing tooth.
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
                      The two rear implants may or may not be placed at an angle of up to 45 degrees. This is not just a technical detail. Sometimes, angling the rear implants lets them reach denser bone further forward in the jaw, which is why most patients can avoid the bone grafting traditional full-arch implant approaches often require. Less surgery, less recovery time, and, in most cases, a same-day temporary set of teeth, so you never go without a smile while things heal.
                    </p>
                    <p style={{ margin: 0 }}>
                      Same-day teeth also depend on adequate implant stability. [1–3]
                    </p>
                    <p style={{ margin: 0 }}>
                      The final bridge is fixed permanently to the implants. It does not come out at night. It does not need adhesive. It functions much more like your natural teeth than any removable denture can.
                    </p>
                    <p style={{ margin: 0 }}>
                      The bridge stays in place for daily use and is removed by a clinician when needed. It still requires daily cleaning and professional maintenance.
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

            <div className="sc-hero-cta-wrap" style={{ marginTop: "1.35rem" }}>
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
    </section>
  );
}
