"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, Calculator, Phone, ChevronDown, ChevronUp } from "lucide-react";

export default function AllOn4Cost() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [readMoreCost, setReadMoreCost] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Interactive Calculator State
  const [selectedArch, setSelectedArch] = useState<"single" | "both">("single");
  const [selectedMaterial, setSelectedMaterial] = useState<"acrylic" | "zirconia">("zirconia");
  const [financeMonths, setFinanceMonths] = useState<number>(48);

  // Calculations
  const phase1PerArch = 18000;
  const phase2PerArch = selectedMaterial === "acrylic" ? 10000 : 14000;
  const totalPerArch = phase1PerArch + phase2PerArch;
  const archMultiplier = selectedArch === "both" ? 2 : 1;
  const grandTotal = totalPerArch * archMultiplier;
  const weeklyEstimate = Math.round(grandTotal / (financeMonths * 4.33));

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section
      id="cost"
      style={{
        padding: "clamp(3.5rem, 6vw, 6rem) 0",
        backgroundColor: "#FAF9F6",
        position: "relative",
      }}
    >
      <style>{`
        .sc-cost-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--font-assistant), sans-serif;
          font-size: 0.92rem;
          margin-top: 1rem;
        }
        .sc-cost-table th, .sc-cost-table td {
          padding: 0.85rem 1rem;
          text-align: left;
          border-bottom: 1px solid #ECE7DE;
        }
        .sc-cost-table th {
          background-color: #F4EFEB;
          color: #1C1C1E;
          font-weight: 700;
        }
        .sc-cost-phases-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(1rem, 2.5vw, 1.75rem);
          margin: 2rem 0;
        }
        @media (max-width: 820px) {
          .sc-cost-phases-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .sc-calc-header-btn {
          width: 100%;
          padding: 1.1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.85rem;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background-color 0.2s ease;
        }
        .sc-calc-content-pad {
          padding: 1.5rem 2rem 2rem;
          border-top: 1px solid #ECE7DE;
        }
        .sc-calc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          align-items: stretch;
        }
        .sc-calc-controls {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .sc-calc-result-card {
          background-color: #FAF9F6;
          border-radius: 16px;
          border: 1px solid #E5E0D7;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .sc-calc-weekly-val {
          font-family: var(--font-prata);
          font-size: 2.5rem;
          font-weight: 700;
          color: #E86337;
          line-height: 1;
        }

        @media (max-width: 640px) {
          .sc-calc-card {
            border-radius: 14px !important;
            margin-top: 1.25rem !important;
          }
          .sc-calc-header-btn {
            padding: 0.75rem 0.85rem !important;
            gap: 0.5rem !important;
          }
          .sc-calc-header-icon {
            width: 32px !important;
            height: 32px !important;
            border-radius: 8px !important;
          }
          .sc-calc-header-title {
            font-size: 0.96rem !important;
            line-height: 1.25 !important;
          }
          .sc-calc-header-badge {
            display: none !important;
          }
          .sc-calc-header-desc {
            display: none !important;
          }
          .sc-calc-pill-action {
            padding: 0.35rem 0.65rem !important;
            font-size: 0.74rem !important;
          }
          .sc-calc-content-pad {
            padding: 0.75rem 0.75rem 1rem !important;
          }
          .sc-calc-grid {
            gap: 0.85rem !important;
          }
          .sc-calc-controls {
            gap: 0.75rem !important;
          }
          .sc-calc-ctrl-label {
            font-size: 0.74rem !important;
            margin-bottom: 0.3rem !important;
          }
          .sc-calc-btn {
            padding: 0.45rem 0.35rem !important;
            font-size: 0.78rem !important;
            border-radius: 8px !important;
          }
          .sc-calc-btn-sub {
            font-size: 0.68rem !important;
          }
          .sc-calc-result-card {
            padding: 0.75rem 0.85rem !important;
            gap: 0.6rem !important;
            border-radius: 12px !important;
          }
          .sc-calc-weekly-val {
            font-size: 1.7rem !important;
          }
          .sc-calc-breakdown-row {
            font-size: 0.8rem !important;
          }
          .sc-calc-cta-btn {
            padding: 0.62rem 0.75rem !important;
            font-size: 0.82rem !important;
            border-radius: 8px !important;
          }
          .sc-calc-phone-btn {
            padding: 0.52rem 0.75rem !important;
            font-size: 0.78rem !important;
            border-radius: 8px !important;
          }
        }
      `}</style>

      <div className="container-sc" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.25rem" }}>
        {/* Exact Section Heading & Intro from Live Website */}
        <div style={{ maxWidth: "860px", margin: "0 auto 2.5rem", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-prata), Georgia, serif",
              fontSize: "clamp(1.45rem, 5vw, 2.9rem)",
              color: "#1C1C1E",
              fontWeight: 400,
              lineHeight: 1.22,
              marginBottom: "1rem",
            }}
          >
            Understanding All on Four Cost in Sydney
          </h2>

          <div
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "clamp(0.88rem, 2.8vw, 1.05rem)",
              lineHeight: 1.68,
              color: "#444449",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            <p style={{ margin: 0 }}>
              If you&apos;ve been searching for All on 4 cost in Sydney, here&apos;s the full picture. All on 4 dental implants cost between <strong>$18,000 and $32,000 per arch</strong> at Smile Concepts, quoted in two clear phases.
            </p>

            <AnimatePresence>
              {readMoreCost && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: "0.85rem" }}
                >
                  <p style={{ margin: 0 }}>
                    Phase one, at <strong>$18,000 per arch</strong>, covers your surgery and the fixed temporary teeth you leave with on the day of surgery or shortly after. Phase two is your final fixed teeth, at <strong>$10,000 for acrylic on titanium</strong> or <strong>$14,000 for zirconia</strong>.
                  </p>
                  <p style={{ margin: 0 }}>
                    What drives your total dental implants cost is your materials, your anatomy and your choices, <strong>never the number of implants, because we don&apos;t charge per implant.</strong>
                  </p>
                  <p style={{ margin: 0 }}>
                    Many patients ask about All on Four cost before committing to a consultation, which is why we&apos;ve broken the full pricing structure down below.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setReadMoreCost(!readMoreCost)}
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
              <span>{readMoreCost ? "Read less" : "Read more"}</span>
              <span style={{ fontSize: "0.75rem" }}>{readMoreCost ? "▲" : "▼"}</span>
            </button>
          </div>
        </div>

        {/* ─── TWO PHASE CARDS (Exact Live Site Content) ─── */}
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: "var(--font-prata), Georgia, serif",
              fontSize: "clamp(1.2rem, 3.8vw, 1.5rem)",
              color: "#1C1C1E",
              textAlign: "center",
              marginBottom: "0.5rem",
              lineHeight: 1.3,
            }}
          >
            Your Investment: Transparent, Two-Phase Pricing
          </h3>
          <p
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.95rem",
              color: "#555",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 1.5rem",
              lineHeight: 1.6,
            }}
          >
            We believe you should know exactly what you&apos;re paying for before treatment begins. That&apos;s why your All on 4 treatment is presented in two clearly defined phases, giving you complete transparency and allowing your treatment to progress safely from surgery to your final smile.
          </p>

          <div className="sc-cost-phases-grid">
            {/* Phase 1 Card */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #E5E0D7",
                padding: "clamp(1.5rem, 3vw, 2.25rem)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#E86337",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.35rem",
                }}
              >
                Phase 1
              </span>
              <h4 style={{ fontFamily: "var(--font-prata)", fontSize: "clamp(1.15rem, 3.2vw, 1.35rem)", color: "#1C1C1E", margin: "0 0 0.5rem" }}>
                Surgery &amp; Same-Day Temporary Teeth
              </h4>
              <div style={{ margin: "0.75rem 0 1.25rem", padding: "0.85rem 1rem", backgroundColor: "#FAF9F6", borderRadius: "10px", border: "1px solid #ECE7DE" }}>
                <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.85rem", color: "#666", display: "block" }}>Investment:</span>
                <span style={{ fontFamily: "var(--font-prata)", fontSize: "clamp(1.55rem, 4.8vw, 2rem)", fontWeight: 700, color: "#1C1C1E" }}>
                  $18,000 <span style={{ fontSize: "0.9rem", fontWeight: 400, color: "#666" }}>per arch</span>
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.9rem", color: "#555", lineHeight: 1.55, marginBottom: "0.75rem" }}>
                Your first phase includes everything needed to restore your smile on the day of surgery (where clinically suitable), including:
              </p>
              <ul style={{ paddingLeft: "1.25rem", margin: "0 0 1.5rem", fontFamily: "var(--font-assistant)", fontSize: "0.88rem", color: "#444", lineHeight: 1.6, flexGrow: 1 }}>
                <li>Comprehensive consultation and 3D CBCT planning</li>
                <li>Tooth extractions, if required</li>
                <li>Placement of four to six dental implants at no additional per-implant cost</li>
                <li>A fixed temporary bridge fitted on the same day, allowing you to leave with a functional smile</li>
              </ul>
              <a
                href="#book"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.45rem",
                  padding: "0.75rem",
                  backgroundColor: "#1C1C1E",
                  color: "#ffffff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                <span>Book Phase 1 Consultation</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Phase 2 Card */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #E5E0D7",
                padding: "clamp(1.5rem, 3vw, 2.25rem)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#1C1C1E",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.35rem",
                }}
              >
                Phase 2
              </span>
              <h4 style={{ fontFamily: "var(--font-prata)", fontSize: "clamp(1.15rem, 3.2vw, 1.35rem)", color: "#1C1C1E", margin: "0 0 0.5rem" }}>
                Your Final Fixed Teeth
              </h4>
              <div style={{ margin: "0.75rem 0 1.25rem", padding: "0.85rem 1rem", backgroundColor: "#FAF9F6", borderRadius: "10px", border: "1px solid #ECE7DE" }}>
                <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.85rem", color: "#666", display: "block" }}>Investment:</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <span style={{ fontFamily: "var(--font-prata)", fontSize: "clamp(1.15rem, 3.5vw, 1.3rem)", fontWeight: 700, color: "#1C1C1E" }}>
                    $10,000 per arch <span style={{ fontSize: "0.82rem", fontWeight: 400, color: "#666" }}>– Acrylic on Titanium</span>
                  </span>
                  <span style={{ fontFamily: "var(--font-prata)", fontSize: "clamp(1.15rem, 3.5vw, 1.3rem)", fontWeight: 700, color: "#E86337" }}>
                    $14,000 per arch <span style={{ fontSize: "0.82rem", fontWeight: 400, color: "#666" }}>– Zirconia</span>
                  </span>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.9rem", color: "#555", lineHeight: 1.55, margin: "0 0 1.5rem", flexGrow: 1 }}>
                Once your implants have healed and integrated with your jawbone, you&apos;ll return for your custom-made permanent bridge. Together, we&apos;ll help you choose the material that best suits your lifestyle, functional needs and aesthetic goals.
              </p>
              <a
                href="#book"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.45rem",
                  padding: "0.75rem",
                  backgroundColor: "#E86337",
                  color: "#ffffff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                <span>Request Written Itemised Quote</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* ─── INTERACTIVE COST & FINANCE CALCULATOR (COLLAPSIBLE DROPDOWN) ─── */}
        <div
          className="sc-calc-card"
          style={{
            maxWidth: "980px",
            margin: "2.25rem auto 0",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            border: isCalculatorOpen ? "1.5px solid #E86337" : "1px solid #E5E0D7",
            boxShadow: isCalculatorOpen
              ? "0 10px 36px rgba(232, 99, 55, 0.08)"
              : "0 4px 20px rgba(0, 0, 0, 0.03)",
            overflow: "hidden",
            transition: "border 0.25s ease, box-shadow 0.25s ease",
          }}
        >
          {/* Dropdown Header Trigger */}
          <button
            type="button"
            className="sc-calc-header-btn"
            onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
            aria-expanded={isCalculatorOpen}
            style={{
              backgroundColor: isCalculatorOpen ? "#FAF8F5" : "#ffffff",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flex: 1, minWidth: 0 }}>
              <div
                className="sc-calc-header-icon"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(232, 99, 55, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Calculator size={20} color="#E86337" />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
                  <h3
                    className="sc-calc-header-title"
                    style={{
                      fontFamily: "var(--font-prata), Georgia, serif",
                      fontSize: "clamp(1rem, 3vw, 1.4rem)",
                      color: "#1C1C1E",
                      margin: 0,
                      fontWeight: 400,
                      lineHeight: 1.25,
                    }}
                  >
                    Interactive Investment &amp; Finance Calculator
                  </h3>
                  <span
                    className="sc-calc-header-badge"
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      backgroundColor: "rgba(232, 99, 55, 0.12)",
                      color: "#E86337",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "100px",
                    }}
                  >
                    Estimate
                  </span>
                </div>
                <p
                  className="sc-calc-header-desc"
                  style={{
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "0.86rem",
                    color: "#666",
                    margin: "0.25rem 0 0",
                    lineHeight: 1.45,
                  }}
                >
                  Tailor your treatment options to calculate your transparent two-phase total and view interest-free weekly payment estimates.
                </p>
              </div>
            </div>

            <div
              className="sc-calc-pill-action"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.45rem 0.85rem",
                borderRadius: "100px",
                backgroundColor: isCalculatorOpen ? "#1C1C1E" : "#E86337",
                color: "#ffffff",
                fontFamily: "var(--font-assistant)",
                fontSize: "0.82rem",
                fontWeight: 700,
                flexShrink: 0,
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              <span>{isCalculatorOpen ? "Close" : "Open Calculator"}</span>
              {isCalculatorOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </div>
          </button>

          {/* Collapsible Content */}
          <AnimatePresence>
            {isCalculatorOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="sc-calc-content-pad">
                  <div className="sc-calc-grid">
                    {/* Left Controls */}
                    <div className="sc-calc-controls">
                      {/* Arch Toggle */}
                      <div>
                        <label
                          className="sc-calc-ctrl-label"
                          style={{
                            display: "block",
                            fontFamily: "var(--font-assistant)",
                            fontSize: "0.82rem",
                            fontWeight: 700,
                            color: "#1C1C1E",
                            marginBottom: "0.45rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          1. Select Number of Arches:
                        </label>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                          <button
                            type="button"
                            className="sc-calc-btn"
                            onClick={() => setSelectedArch("single")}
                            style={{
                              padding: "0.65rem 0.75rem",
                              borderRadius: "10px",
                              border: selectedArch === "single" ? "2px solid #E86337" : "1px solid #DCD6CD",
                              backgroundColor: selectedArch === "single" ? "rgba(232, 99, 55, 0.08)" : "#FAF8F5",
                              color: selectedArch === "single" ? "#E86337" : "#444",
                              fontFamily: "var(--font-assistant)",
                              fontWeight: 700,
                              cursor: "pointer",
                              fontSize: "clamp(0.8rem, 2vw, 0.88rem)",
                              transition: "all 0.2s ease",
                              textAlign: "center",
                              lineHeight: 1.25,
                            }}
                          >
                            <div>Single Arch</div>
                            <span className="sc-calc-btn-sub" style={{ fontSize: "0.72rem", fontWeight: 500, opacity: 0.75, display: "block" }}>
                              Upper or Lower
                            </span>
                          </button>
                          <button
                            type="button"
                            className="sc-calc-btn"
                            onClick={() => setSelectedArch("both")}
                            style={{
                              padding: "0.65rem 0.75rem",
                              borderRadius: "10px",
                              border: selectedArch === "both" ? "2px solid #E86337" : "1px solid #DCD6CD",
                              backgroundColor: selectedArch === "both" ? "rgba(232, 99, 55, 0.08)" : "#FAF8F5",
                              color: selectedArch === "both" ? "#E86337" : "#444",
                              fontFamily: "var(--font-assistant)",
                              fontWeight: 700,
                              cursor: "pointer",
                              fontSize: "clamp(0.8rem, 2vw, 0.88rem)",
                              transition: "all 0.2s ease",
                              textAlign: "center",
                              lineHeight: 1.25,
                            }}
                          >
                            <div>Both Arches</div>
                            <span className="sc-calc-btn-sub" style={{ fontSize: "0.72rem", fontWeight: 500, opacity: 0.75, display: "block" }}>
                              Full Mouth
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Material Toggle */}
                      <div>
                        <label
                          className="sc-calc-ctrl-label"
                          style={{
                            display: "block",
                            fontFamily: "var(--font-assistant)",
                            fontSize: "0.82rem",
                            fontWeight: 700,
                            color: "#1C1C1E",
                            marginBottom: "0.45rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          2. Select Final Bridge Material (Phase 2):
                        </label>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                          <button
                            type="button"
                            className="sc-calc-btn"
                            onClick={() => setSelectedMaterial("acrylic")}
                            style={{
                              padding: "0.65rem 0.75rem",
                              borderRadius: "10px",
                              border: selectedMaterial === "acrylic" ? "2px solid #E86337" : "1px solid #DCD6CD",
                              backgroundColor: selectedMaterial === "acrylic" ? "rgba(232, 99, 55, 0.08)" : "#FAF8F5",
                              color: selectedMaterial === "acrylic" ? "#E86337" : "#444",
                              fontFamily: "var(--font-assistant)",
                              fontWeight: 700,
                              cursor: "pointer",
                              fontSize: "clamp(0.8rem, 2vw, 0.88rem)",
                              transition: "all 0.2s ease",
                              textAlign: "center",
                              lineHeight: 1.25,
                            }}
                          >
                            <div>Acrylic on Titanium</div>
                            <span className="sc-calc-btn-sub" style={{ fontSize: "0.72rem", fontWeight: 500, opacity: 0.75, display: "block" }}>
                              $10,000 / arch
                            </span>
                          </button>
                          <button
                            type="button"
                            className="sc-calc-btn"
                            onClick={() => setSelectedMaterial("zirconia")}
                            style={{
                              padding: "0.65rem 0.75rem",
                              borderRadius: "10px",
                              border: selectedMaterial === "zirconia" ? "2px solid #E86337" : "1px solid #DCD6CD",
                              backgroundColor: selectedMaterial === "zirconia" ? "rgba(232, 99, 55, 0.08)" : "#FAF8F5",
                              color: selectedMaterial === "zirconia" ? "#E86337" : "#444",
                              fontFamily: "var(--font-assistant)",
                              fontWeight: 700,
                              cursor: "pointer",
                              fontSize: "clamp(0.8rem, 2vw, 0.88rem)",
                              transition: "all 0.2s ease",
                              textAlign: "center",
                              lineHeight: 1.25,
                            }}
                          >
                            <div>Monolithic Zirconia</div>
                            <span className="sc-calc-btn-sub" style={{ fontSize: "0.72rem", fontWeight: 500, opacity: 0.75, display: "block" }}>
                              $14,000 / arch
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Finance Duration Slider */}
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                          <label
                            className="sc-calc-ctrl-label"
                            style={{
                              fontFamily: "var(--font-assistant)",
                              fontSize: "0.82rem",
                              fontWeight: 700,
                              color: "#1C1C1E",
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            3. Plan Duration:
                          </label>
                          <span style={{ fontFamily: "var(--font-assistant)", fontWeight: 700, color: "#E86337", fontSize: "0.85rem" }}>
                            {financeMonths} Mo (Interest-Free)
                          </span>
                        </div>
                        <input
                          type="range"
                          min="12"
                          max="48"
                          step="12"
                          value={financeMonths}
                          onChange={(e) => setFinanceMonths(Number(e.target.value))}
                          style={{
                            width: "100%",
                            accentColor: "#E86337",
                            cursor: "pointer",
                          }}
                        />
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.2rem", fontSize: "0.72rem", color: "#888", fontFamily: "var(--font-assistant)" }}>
                          <span>12 Mo</span>
                          <span>24 Mo</span>
                          <span>36 Mo</span>
                          <span>48 Mo</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Result Card */}
                    <div className="sc-calc-result-card">
                      <div>
                        <span
                          style={{
                            fontFamily: "var(--font-assistant)",
                            fontSize: "0.76rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.07em",
                            color: "#777",
                            fontWeight: 600,
                          }}
                        >
                          Estimated Weekly Investment:
                        </span>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginTop: "0.15rem" }}>
                          <span className="sc-calc-weekly-val">
                            ${weeklyEstimate}
                          </span>
                          <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.88rem", color: "#555" }}>
                            / week*
                          </span>
                        </div>
                        <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.72rem", color: "#777", display: "block", marginTop: "0.15rem" }}>
                          *Subject to finance approval. Interest-free payment plans available up to 48 months.
                        </span>
                      </div>

                      <div style={{ borderTop: "1px solid #E5DFD4", paddingTop: "0.65rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                        <div className="sc-calc-breakdown-row" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-assistant)", fontSize: "0.85rem", color: "#555" }}>
                          <span>Phase 1 ({selectedArch === "both" ? "Both Arches" : "Single Arch"}):</span>
                          <strong style={{ color: "#1C1C1E" }}>${(phase1PerArch * archMultiplier).toLocaleString()}</strong>
                        </div>
                        <div className="sc-calc-breakdown-row" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-assistant)", fontSize: "0.85rem", color: "#555" }}>
                          <span>Phase 2 ({selectedMaterial === "acrylic" ? "Acrylic" : "Zirconia"}):</span>
                          <strong style={{ color: "#1C1C1E" }}>${(phase2PerArch * archMultiplier).toLocaleString()}</strong>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontFamily: "var(--font-assistant)",
                            fontSize: "0.9rem",
                            color: "#1C1C1E",
                            fontWeight: 700,
                            paddingTop: "0.35rem",
                            borderTop: "1px dashed #D9D2C6",
                          }}
                        >
                          <span>Total Investment:</span>
                          <span style={{ color: "#1C1C1E", fontFamily: "var(--font-prata)", fontSize: "1.15rem" }}>
                            ${grandTotal.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginTop: "0.2rem" }}>
                        <a
                          href="#book"
                          className="sc-calc-cta-btn"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.4rem",
                            padding: "0.75rem 1rem",
                            backgroundColor: "#E86337",
                            color: "#ffffff",
                            borderRadius: "10px",
                            textDecoration: "none",
                            fontFamily: "var(--font-assistant)",
                            fontWeight: 700,
                            fontSize: "0.88rem",
                            textAlign: "center",
                            boxShadow: "0 4px 14px rgba(232, 99, 55, 0.24)",
                          }}
                        >
                          <span>Book Consultation &amp; Claim Quote</span>
                          <ArrowRight size={14} />
                        </a>
                        <a
                          href="tel:0292677777"
                          className="sc-calc-phone-btn"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.4rem",
                            padding: "0.65rem",
                            backgroundColor: "#ffffff",
                            color: "#1C1C1E",
                            border: "1px solid #DCD6CD",
                            borderRadius: "10px",
                            textDecoration: "none",
                            fontFamily: "var(--font-assistant)",
                            fontWeight: 600,
                            fontSize: "0.82rem",
                          }}
                        >
                          <Phone size={13} color="#E86337" />
                          <span>Call 02 9267 7777 for Quote Details</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Quick Collapse Link */}
                  <div style={{ textAlign: "center", marginTop: "0.85rem", borderTop: "1px dashed #E5DFD4", paddingTop: "0.65rem" }}>
                    <button
                      type="button"
                      onClick={() => setIsCalculatorOpen(false)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#777",
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      <span>Collapse Calculator</span>
                      <ChevronUp size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ─── ACCORDIONS (+/-) FOR ORIGINAL SUBSECTIONS ─── */}
        <div style={{ maxWidth: "980px", margin: "2rem auto 0", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {/* 1. What Affects the Cost Table */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #E5E0D7", overflow: "hidden" }}>
            <button
              type="button"
              onClick={() => toggleSection("factors")}
              style={{
                width: "100%",
                padding: "1rem 1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-prata)", fontSize: "1.1rem", color: "#1C1C1E" }}>
                What Affects the Cost &amp; What It Means for You
              </span>
              <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1C1C1E" }}>
                {openSection === "factors" ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {openSection === "factors" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid #ECE7DE" }}>
                    <div style={{ overflowX: "auto" }}>
                      <table className="sc-cost-table">
                        <thead>
                          <tr>
                            <th style={{ width: "35%" }}>What Affects the Cost</th>
                            <th>What It Means for You</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Bridge material</strong></td>
                            <td>Zirconia is more durable and more natural-looking than acrylic but comes at a higher cost. We explain both options at your consultation.</td>
                          </tr>
                          <tr>
                            <td><strong>Number of arches being treated</strong></td>
                            <td>Treating the upper arch, lower arch, or both will change the total investment.</td>
                          </tr>
                          <tr>
                            <td><strong>Extractions needed</strong></td>
                            <td>If you still have remaining teeth that need to be removed, this is factored into your quote.</td>
                          </tr>
                          <tr>
                            <td><strong>Sedation</strong></td>
                            <td>If you prefer to be sedated during the procedure, this adds to the overall cost but is available at our clinic.</td>
                          </tr>
                          <tr>
                            <td><strong>Complexity of your case</strong></td>
                            <td>Bone loss, previous implant history, or other clinical factors can affect the planning and surgical approach.</td>
                          </tr>
                          <tr>
                            <td><strong>Number of implants</strong></td>
                            <td>Whether your plan uses four, five or six implants, your quote stays the same.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.88rem", color: "#444", marginTop: "1rem", marginBottom: 0 }}>
                      After your consultation, we provide a full written quote with itemised costs. There are no surprise fees added later. What we quote is what you pay.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2. Acrylic or Zirconia: Choosing Your Final Teeth */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #E5E0D7", overflow: "hidden" }}>
            <button
              type="button"
              onClick={() => toggleSection("materials")}
              style={{
                width: "100%",
                padding: "1rem 1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-prata)", fontSize: "1.1rem", color: "#1C1C1E" }}>
                Acrylic or Zirconia: Choosing Your Final Teeth
              </span>
              <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1C1C1E" }}>
                {openSection === "materials" ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {openSection === "materials" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid #ECE7DE", fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>
                    <p style={{ marginTop: "0.85rem" }}>
                      Your final fixed teeth come in two materials, and both are fitted in Phase two once your implants have healed. Unlike the temporary teeth you leave with after surgery, these are built for long-term wear. Here&apos;s how acrylic on titanium and zirconia compare, so you can choose the option that suits your bite, your budget and your goals.
                    </p>
                    <ul style={{ paddingLeft: "1.25rem", margin: "0.5rem 0 1rem" }}>
                      <li>
                        <strong>Acrylic on titanium ($10,000):</strong> A lighter, reliable and more economical option. The teeth are acrylic bonded to a strong titanium bar, and the surface may need an occasional refresh or repair over the years.
                      </li>
                      <li style={{ marginTop: "0.5rem" }}>
                        <strong>Zirconia ($14,000):</strong> The strongest, most stain-resistant and most natural-looking option. Zirconia is milled from a single block of ceramic, resists chipping and staining, and is the choice most patients make when longevity and aesthetics are the priority.
                      </li>
                    </ul>
                    <p style={{ margin: 0 }}>
                      We walk you through both options at your consultation, with examples you can see and hold, so the decision fits your budget and priorities.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Are There Any Additional Costs? */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #E5E0D7", overflow: "hidden" }}>
            <button
              type="button"
              onClick={() => toggleSection("additional")}
              style={{
                width: "100%",
                padding: "1rem 1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-prata)", fontSize: "1.1rem", color: "#1C1C1E" }}>
                Are There Any Additional Costs?
              </span>
              <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1C1C1E" }}>
                {openSection === "additional" ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {openSection === "additional" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid #ECE7DE", fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>
                    <p style={{ marginTop: "0.85rem" }}>
                      Your treatment plan is tailored to your individual needs, so some patients may require additional procedures before implant placement. These may include:
                    </p>
                    <ul style={{ paddingLeft: "1.25rem", margin: "0.5rem 0 1rem" }}>
                      <li>IV sedation or sleep dentistry</li>
                      <li>Bone grafting or related preparatory procedures</li>
                    </ul>
                    <p style={{ margin: 0 }}>
                      If recommended, these treatments are quoted separately and discussed with you in detail before any decisions are made. You&apos;ll receive a personalised written treatment plan outlining all costs, so there are no unexpected surprises.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Can I Use My Superannuation to Pay? */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #E5E0D7", overflow: "hidden" }}>
            <button
              type="button"
              onClick={() => toggleSection("super")}
              style={{
                width: "100%",
                padding: "1rem 1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-prata)", fontSize: "1.1rem", color: "#1C1C1E" }}>
                Can I Use My Superannuation to Pay?
              </span>
              <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1C1C1E" }}>
                {openSection === "super" ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {openSection === "super" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid #ECE7DE", fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>
                    <p style={{ marginTop: "0.85rem" }}>
                      Possibly. If dental treatment is needed to relieve chronic pain or a condition affecting your quality of life, you may be eligible to apply to the ATO for early release of superannuation on compassionate grounds.
                    </p>
                    <p>
                      It&apos;s assessed case by case against strict criteria, requires supporting reports from two practitioners plus an itemised treatment plan, and is best considered only after other payment options. We recommend speaking with a licensed financial adviser before deciding.
                    </p>
                    <p style={{ margin: 0 }}>
                      We work with SuperCare to help patients through this process. Ask us about it at your consultation.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 5. Do We Offer Payment Plans? */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #E5E0D7", overflow: "hidden" }}>
            <button
              type="button"
              onClick={() => toggleSection("plans")}
              style={{
                width: "100%",
                padding: "1rem 1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-prata)", fontSize: "1.1rem", color: "#1C1C1E" }}>
                Do We Offer Payment Plans?
              </span>
              <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1C1C1E" }}>
                {openSection === "plans" ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {openSection === "plans" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid #ECE7DE", fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>
                    <p style={{ marginTop: "0.85rem", marginBottom: 0 }}>
                      Yes. We offer interest-free payment plans of up to 48 months (subject to eligibility, approval and the finance provider&apos;s terms and conditions). Our team can discuss the available payment options during your consultation and include the most suitable finance solution in your personalised written treatment quote.
                    </p>
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
