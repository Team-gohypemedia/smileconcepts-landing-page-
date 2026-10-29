"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import Script from "next/script";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      id="book"
      style={{
        position: "relative",
        padding: "clamp(2.5rem, 4.5vw, 4rem) 0",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* Desktop Grid Areas */
        .sc-cta-grid {
          display: grid;
          grid-template-columns: 1.06fr 1fr;
          grid-template-areas:
            "form text"
            "form actions";
          column-gap: clamp(2rem, 4vw, 3.5rem);
          row-gap: 1.15rem;
          align-items: center;
          max-width: 1220px;
          margin: 0 auto;
        }
        .sc-cta-form-card {
          grid-area: form;
        }
        .sc-cta-text-block {
          grid-area: text;
          text-align: left;
        }
        .sc-cta-actions-block {
          grid-area: actions;
          text-align: left;
        }
        .sc-cta-actions {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          flex-wrap: wrap;
        }

        /* Mobile View: Reordered (1: Text Top, 2: Form, 3: Side-by-Side CTAs Bottom) */
        @media (max-width: 900px) {
          .sc-cta-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
            max-width: 520px !important;
            margin: 0 auto !important;
          }
          .sc-cta-text-block {
            order: 1 !important;
            text-align: center !important;
            margin-bottom: 0.25rem !important;
          }
          .sc-cta-form-card {
            order: 2 !important;
            width: 100% !important;
          }
          .sc-cta-actions-block {
            order: 3 !important;
            text-align: center !important;
            width: 100% !important;
            margin-top: 0.25rem !important;
          }
          .sc-cta-actions {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 0.6rem !important;
            width: 100% !important;
            justify-content: center !important;
          }
          .sc-cta-btn {
            flex: 1 1 0px !important;
            width: auto !important;
            max-width: none !important;
            padding: 0.65rem 0.5rem !important;
            font-size: 0.82rem !important;
            white-space: nowrap !important;
            gap: 0.35rem !important;
            justify-content: center !important;
          }
          .sc-cta-btn svg {
            width: 14px !important;
            height: 14px !important;
          }
        }
      `}</style>

      {/* BG image with signature brand gradient */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src={images.hero.background}
          alt=""
          fill
          style={{ objectFit: "cover", opacity: 0.15 }}
          aria-hidden
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #EC844B 0%, #F47A4A 40%, #e06030 100%)",
          }}
        />
      </div>

      {/* Decorative ambient circles */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-5rem",
          right: "-5rem",
          width: "20rem",
          height: "20rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-5rem",
          left: "-5rem",
          width: "24rem",
          height: "24rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-sc"
        style={{
          position: "relative",
          zIndex: 1,
          paddingLeft: "clamp(1rem, 4vw, 2.5rem)",
          paddingRight: "clamp(1rem, 4vw, 2.5rem)",
        }}
      >
        <div className="sc-cta-grid">
          {/* Form Card (Desktop Left Column / Mobile Order 2 Middle) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="sc-cta-form-card"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              padding: "clamp(1.2rem, 2.8vw, 1.75rem)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.16), 0 4px 14px rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              width: "100%",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            <iframe
              src="https://link.smileconcepts.au/widget/form/wruGLMxJL9ggsTiTFfXN"
              style={{ width: "100%", border: "none" }}
              id="inline-wruGLMxJL9ggsTiTFfXN"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="7. Dental Implants - All on 4 New LP (Next JS)"
              data-height="655"
              data-layout-iframe-id="inline-wruGLMxJL9ggsTiTFfXN"
              data-form-id="wruGLMxJL9ggsTiTFfXN"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="7. Dental Implants - All on 4 New LP (Next JS)"
            />
          </motion.div>

          {/* Text Block (Desktop Top Right / Mobile Order 1 Top) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="sc-cta-text-block"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                color: "#ffffff",
                fontSize: "0.82rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: "0.4rem",
                fontFamily: "var(--font-assistant)",
                fontWeight: 700,
                opacity: 0.9,
              }}
            >
              Consultation &amp; Assessment
            </p>

            <h2
              style={{
                fontFamily: "var(--font-prata)",
                fontWeight: 400,
                fontSize: "var(--fs-section-title)",
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Book an All on 4 Consultation in Sydney
            </h2>

            <a
              href="tel:0292677777"
              style={{
                fontFamily: "var(--font-prata)",
                fontSize: "clamp(1.35rem, 4.2vw, 2.2rem)",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 400,
                marginBottom: "0.75rem",
                display: "inline-block",
                letterSpacing: "0.02em",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              02 9267 7777
            </a>

            <p
              style={{
                color: "rgba(255,255,255,0.92)",
                fontFamily: "var(--font-assistant)",
                fontWeight: 300,
                fontSize: "var(--fs-body)",
                lineHeight: 1.6,
                maxWidth: "520px",
                margin: "0 0 0.85rem 0",
              }}
            >
              If you are considering all on 4 dental implants (full arch) in Sydney, the first step is understanding your options. Our team will assess your oral health, discuss your concerns, and explain the most appropriate treatment options for your individual circumstances. Whether you are exploring alternatives to dentures or looking for a fixed solution for failing teeth, we are here to help you make an informed decision with clear advice and personalised care.
            </p>
          </motion.div>

          {/* Action Buttons Block (Desktop Bottom Right / Mobile Order 3 Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="sc-cta-actions-block"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Direct Action Buttons */}
            <div className="sc-cta-actions">
              <a
                href="tel:0292677777"
                className="sc-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.55rem",
                  padding: "0 1.6rem",
                  height: "48px",
                  boxSizing: "border-box",
                  background: "#ffffff",
                  color: "#F47A4A",
                  border: "2px solid #ffffff",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 700,
                  fontSize: "0.94rem",
                  textDecoration: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#FCF8F8";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.16)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.12)";
                }}
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (02) 9267 7777
              </a>
              <a
                href="https://www.smileconcepts.com.au/book-online.html"
                className="sc-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 1.75rem",
                  height: "48px",
                  boxSizing: "border-box",
                  border: "2px solid #ffffff",
                  background: "transparent",
                  color: "#ffffff",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 600,
                  fontSize: "0.94rem",
                  textDecoration: "none",
                  borderRadius: "8px",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.18)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Book Online
              </a>
            </div>

            <p
              style={{
                marginTop: "1.2rem",
                fontFamily: "var(--font-assistant)",
                fontSize: "clamp(0.65rem, 1.8vw, 0.72rem)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Suite 403, Level 4/307 Pitt St, Sydney NSW 2000, Australia
            </p>
          </motion.div>
        </div>
      </div>
      <Script src="https://link.smileconcepts.au/js/form_embed.js" strategy="lazyOnload" />
    </section>
  );
}
