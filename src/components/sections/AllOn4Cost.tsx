"use client";

import { Cite } from "@/components/ui/Cite";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Minus,
  Plus,
  Calculator,
  Check,
  Phone,
  PhoneCall,
} from "lucide-react";

// Interest-free payment plans are capped at this amount; anything above it is paid outside the plan
const FINANCE_LIMIT = 30000;

const formatAud = (amount: number) => `$${amount.toLocaleString("en-AU")}`;

// Phase 1 is the advertised "from $18,000" price: surgery plus temporary teeth only
const PHASE_1_PER_ARCH = 18000;

// Phase 2 final teeth options, ordered from mid tier to premium
const FINAL_TEETH = {
  acrylic: { name: "Acrylic on Titanium", short: "Acrylic", tier: "Mid Tier", perArch: 10000, phase: 2 },
  zirconia: { name: "Monolithic Zirconia", short: "Zirconia", tier: "Premium Tier", perArch: 14000, phase: 2 },
} as const;

export default function AllOn4Cost({ part = "cost" }: { part?: "cost" | "funding" }) {
  const [activePhase, setActivePhase] = useState<0 | 1>(0);
  const phasesGridRef = useRef<HTMLDivElement>(null);

  const handlePhaseScroll = () => {
    if (!phasesGridRef.current) return;
    const { scrollLeft, clientWidth } = phasesGridRef.current;
    const cardWidth = clientWidth * 0.86;
    const idx = Math.round(scrollLeft / (cardWidth > 0 ? cardWidth : 290));
    setActivePhase(idx >= 1 ? 1 : 0);
  };

  const scrollToPhase = (idx: 0 | 1) => {
    if (!phasesGridRef.current) return;
    if (idx === 0) {
      phasesGridRef.current.scrollTo({ left: 0, behavior: "smooth" });
      setActivePhase(0);
      return;
    }
    const cards = phasesGridRef.current.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
      setActivePhase(idx);
    }
  };

  // Interactive Calculator State
  const [selectedArch, setSelectedArch] = useState<"single" | "both">("single");
  // null = Phase 1 only (temporary teeth), the default; a material adds its final teeth on top
  const [selectedMaterial, setSelectedMaterial] = useState<"acrylic" | "zirconia" | null>(null);
  const [financeMonths, setFinanceMonths] = useState<number>(48);
  const [activeCostTopic, setActiveCostTopic] = useState<number>(0);

  // Calculations
  const phase1PerArch = PHASE_1_PER_ARCH;
  const finalTeeth = selectedMaterial ? FINAL_TEETH[selectedMaterial] : null;
  const phase2PerArch = finalTeeth ? finalTeeth.perArch : 0;
  const totalPerArch = phase1PerArch + phase2PerArch;
  const archMultiplier = selectedArch === "both" ? 2 : 1;
  const grandTotal = totalPerArch * archMultiplier;
  const financedAmount = Math.min(grandTotal, FINANCE_LIMIT);
  const balanceOutsidePlan = grandTotal - financedAmount;
  const weeklyEstimate = Math.round(financedAmount / (financeMonths * 4.33));

  const costTopics = [
    {
      id: "factors",
      headingTag: "p" as const,
      tabLabel: "Cost Factors",
      badge: "Financial Transparency",
      title: "What Affects the Cost & What It Means for You",
      src: "/assets/allon4/cost-factors-consult.png",
      alt: "What Affects the Cost of All-on-4 dental implants",
      caption: "Custom surgical planning & transparent pricing guarantee",
      objectPosition: "center top",
      objectFit: "contain",
      content: (
        <div>
          <div style={{ overflowX: "auto", margin: "0.5rem 0" }}>
            <table className="sc-cost-table" style={{ marginTop: 0 }}>
              <thead>
                <tr>
                  <th style={{ width: "38%", backgroundColor: "#F4EFEB", color: "#1C1C1E" }}>What Affects the Cost</th>
                  <th style={{ backgroundColor: "#F4EFEB", color: "#1C1C1E" }}>What It Means for You</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bridge material</strong></td>
                  <td>Zirconia and acrylic have different costs, repair needs and material properties. The choice depends on your bite and bridge design.</td>
                </tr>
                <tr>
                  <td><strong>Number of arches being treated</strong></td>
                  <td>Treating the upper arch, lower arch, or both will change the total investment.</td>
                </tr>
                <tr>
                  <td><strong>Extractions needed</strong></td>
                  <td>Planned extractions are included in phase one as described; the written quote confirms the scope.</td>
                </tr>
                <tr>
                  <td><strong>Sedation</strong></td>
                  <td>If you prefer to be sedated during the procedure, this adds to the overall cost and is available at our clinic managed by trained sedationists.</td>
                </tr>
                <tr>
                  <td><strong>Complexity of your case</strong></td>
                  <td>Bone loss, previous implant history, or other clinical factors can affect the planning and surgical approach.</td>
                </tr>
                <tr>
                  <td><strong>Number of implants</strong></td>
                  <td>Our clinic quotes per arch rather than per implant; the written plan confirms the included implant number.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.88rem", color: "#444", marginTop: "0.85rem", marginBottom: 0, lineHeight: 1.6 }}>
            After your consultation, we provide a full written quote with itemised costs. There are no surprise fees added later. What we quote is what you pay.
          </p>
        </div>
      ),
    },
    {
      id: "insurance",
      headingTag: "h2" as const,
      tabLabel: "Insurance & Medicare",
      badge: "Health Fund Benefits",
      title: "Does Private Insurance or Medicare cover any of the costs of All on 4?",
      src: "/assets/allon4/cost-factors-consult.png",
      alt: "Private health insurance and Medicare for All on 4",
      caption: "Itemised quotes for your health fund",
      objectPosition: "center top",
      content: (
        <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>
          <p style={{ marginTop: "0.5rem" }}>
            Private health insurance benefits depend on your policy, item numbers, waiting periods and annual or lifetime limits.
          </p>
          <p style={{ margin: 0 }}>
            Ask your insurer for a written benefit estimate using your itemised quote. Medicare generally does not cover routine private dental implant treatment. <Cite refs="6" />
          </p>
        </div>
      ),
    },
    {
      id: "super",
      headingTag: "h2" as const,
      tabLabel: "Superannuation",
      badge: "Early Super Release",
      title: "Can I Use My Superannuation to Pay for All on 4 Treatment?",
      src: "/assets/allon4/elder-couple-cooking-dental-implant.jpg",
      alt: "Couple enjoying meal with dental implants",
      caption: "Compassionate early release of Superannuation through SuperCare",
      objectPosition: "center 12%",
      content: (
        <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>
          <p style={{ marginTop: "0.5rem" }}>
            Possibly. If dental treatment is needed to relieve chronic pain or a condition affecting your quality of life, you may be eligible to apply to the ATO for early release of superannuation on compassionate grounds.
          </p>
          <p>
            The ATO assesses applications case by case against strict criteria, requires supporting reports from two practitioners and an itemised treatment plan, and recommends considering other payment options first. Consider the tax and retirement savings implications and seek independent financial advice. <Cite refs="7" />
          </p>
          <div style={{ backgroundColor: "#F7F4EE", padding: "0.85rem 1.15rem", borderRadius: "10px", borderLeft: "4px solid #E86337", margin: "0.85rem 0 0" }}>
            <p style={{ margin: 0, fontWeight: 600, color: "#1C1C1E" }}>
              We work with SuperCare to help patients through this process. Ask us about it at your consultation or{" "}
              <a
                href="https://www.smileconcepts.com.au/about-us/supercare.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#E86337", textDecoration: "underline" }}
              >
                learn more about SuperCare here
              </a>
              .
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "plans",
      headingTag: "h2" as const,
      tabLabel: "Payment Plans",
      badge: "Flexible Financing",
      title: "Do We Offer Payment Plans for All on 4 Treatment?",
      src: "/assets/services/payment-plans.jpg",
      alt: "Payment plan options for dental implants",
      caption: "Interest-free payment plans up to 48 months available",
      objectPosition: "center 22%",
      content: (
        <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>
          <p style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Yes. Interest-free payment plans are available up to 48 months and up to $30,000, based on eligibility, from around $90 per week (subject to eligibility, approval and terms). Ask our team which option suits your circumstances, and we will include your payment options in your written quote.
          </p>
          <div className="sc-plan-stats" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
            <div style={{ backgroundColor: "#FFFFFF", padding: "0.85rem 1rem", borderRadius: "10px", border: "1px solid #E5E0D7" }}>
              <div style={{ fontSize: "0.75rem", color: "#777", textTransform: "uppercase", letterSpacing: "0.05em" }}>Term Length</div>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1C1C1E", marginTop: "0.2rem" }}>Up to 48 Months</div>
            </div>
            <div style={{ backgroundColor: "#FFFFFF", padding: "0.85rem 1rem", borderRadius: "10px", border: "1px solid #E5E0D7" }}>
              <div style={{ fontSize: "0.75rem", color: "#777", textTransform: "uppercase", letterSpacing: "0.05em" }}>Interest Rate</div>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1C1C1E", marginTop: "0.2rem" }}>0% Interest Options</div>
            </div>
            <div style={{ backgroundColor: "#FFFFFF", padding: "0.85rem 1rem", borderRadius: "10px", border: "1px solid #E5E0D7" }}>
              <div style={{ fontSize: "0.75rem", color: "#777", textTransform: "uppercase", letterSpacing: "0.05em" }}>Plan Limit</div>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1C1C1E", marginTop: "0.2rem" }}>Up to $30,000</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const visibleTopics = costTopics.filter((topic) =>
    part === "funding" ? ["insurance", "super", "plans"].includes(topic.id) : topic.id === "factors"
  );

  const showcase = (
    <>
        {/* ─── INTERACTIVE ANIMATED TOPIC SHOWCASE (NO BG, NO BOX FRAME, DETAILS LEFT, FULL IMAGE RIGHT) ─── */}
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            margin: part === "cost" ? "3rem auto" : "0 auto",
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          {/* Main 2-Column Showcase */}
          <div className="sc-cost-showcase-grid">
            {/* Left: Detailed Verbatim Content Panel (Uniform Height) */}
            <div className="sc-cost-showcase-panel">
              {visibleTopics.map((topic, topicIdx) => {
                const isActive = topicIdx === activeCostTopic;
                const isAccordion = visibleTopics.length > 1;
                const TitleTag = topic.headingTag;
                const panelId = `cost-topic-panel-${topic.id}`;
                const heading = (
                  <>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#E86337",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {topic.badge}
                    </span>
                    <TitleTag
                      className="sc-acc-title"
                      style={{
                        fontFamily: "var(--font-prata)",
                        fontSize: "var(--fs-card-title)",
                        fontWeight: 400,
                        color: "#1C1C1E",
                        margin: 0,
                        lineHeight: 1.25,
                      }}
                    >
                      {topic.title}
                    </TitleTag>
                  </>
                );
                return (
                <div
                  key={topic.id}
                  style={isAccordion ? { borderBottom: "1px solid #ECE7DE", padding: "0.25rem 0" } : { display: "flex", flexDirection: "column", flex: 1 }}
                >
                  {isAccordion ? (
                    <button
                      type="button"
                      className="sc-acc-btn"
                      onClick={() => setActiveCostTopic(isActive ? -1 : topicIdx)}
                      aria-expanded={isActive}
                      aria-controls={panelId}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        padding: "1rem 0",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ flex: 1 }}>{heading}</span>
                      <span
                        aria-hidden
                        className="sc-acc-icon"
                        style={{
                          flexShrink: 0,
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: isActive ? "#E86337" : "#FAF6F0",
                          color: isActive ? "#FFFFFF" : "#1C1C1E",
                          border: isActive ? "none" : "1px solid #E5E0D7",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {isActive ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                  ) : (
                    <div style={{ marginBottom: "0.85rem" }}>{heading}</div>
                  )}

                  <motion.div
                    id={panelId}
                    hidden={!isActive}
                    initial={false}
                    animate={isActive ? { y: 0, opacity: 1 } : { y: 8, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ display: isActive ? "block" : "none", paddingBottom: isAccordion ? "1rem" : 0, flex: 1 }}
                  >
                    {topic.content}
                  </motion.div>
                </div>
                );
              })}

            </div>
          </div>
        </div>
    </>
  );

  return (
    <section
      id={part === "cost" ? "cost" : "payment-options"}
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
        .sc-cost-phases-mobile-nav {
          display: none;
        }
        @media (max-width: 768px) {
          .sc-cost-phases-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            scroll-padding-left: 1.65rem !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 1rem !important;
            margin: 1.5rem -1.25rem 0.65rem !important;
            padding: 0.35rem 1.65rem 1rem !important;
            scrollbar-width: none !important;
          }
          .sc-cost-phases-grid::-webkit-scrollbar {
            display: none !important;
          }
          .sc-cost-phase-card {
            flex: 0 0 84% !important;
            max-width: 330px !important;
            min-width: 280px !important;
            scroll-snap-align: start !important;
            padding: 1.25rem 1.15rem !important;
          }
          .sc-cost-phases-mobile-nav {
            display: flex !important;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1.5rem !important;
          }
        }
        .sc-calc-content-pad {
          padding: 0;
        }
        .sc-calc-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 2.5rem;
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
            margin-top: 2rem !important;
            padding: 1.25rem 1rem !important;
          }
          .sc-calc-content-pad {
            padding: 0 !important;
          }
          .sc-calc-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
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
        @media (max-width: 640px) {
          .sc-cost-intro-text {
            text-align: left !important;
          }
        }
        .sc-cost-showcase-grid {
          display: block;
          width: 100%;
        }
        .sc-cost-showcase-panel {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 640px) {
          .sc-acc-btn {
            gap: 0.75rem !important;
            padding: 0.85rem 0 !important;
          }
          .sc-acc-title {
            font-size: 1rem !important;
            line-height: 1.3 !important;
          }
          /* Plan stats: three compact tiles in one row instead of three tall stacked cards */
          .sc-plan-stats {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 0.4rem !important;
            margin-top: 0.6rem !important;
          }
          .sc-plan-stats > div {
            padding: 0.55rem 0.5rem !important;
          }
          .sc-plan-stats > div > div:first-child {
            font-size: 0.58rem !important;
            letter-spacing: 0.03em !important;
          }
          .sc-plan-stats > div > div:last-child {
            font-size: 0.78rem !important;
            line-height: 1.25 !important;
            margin-top: 0.15rem !important;
          }
          .sc-acc-icon {
            width: 28px !important;
            height: 28px !important;
          }
          .sc-cost-showcase-panel p {
            font-size: var(--fs-body) !important;
          }
        }
      `}</style>

      <div className="container-sc" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.25rem" }}>
        {part === "cost" && <>
        {/* Exact Section Heading & Intro from Live Website */}
        <div style={{ maxWidth: "1020px", margin: "0 auto 2.5rem", textAlign: "center" }}>
          <h2
            className="sc-cost-main-title"
            style={{
              fontFamily: "var(--font-prata), Georgia, serif",
              fontSize: "var(--fs-section-title)",
              color: "#1C1C1E",
              fontWeight: 400,
              lineHeight: 1.22,
              marginBottom: "1rem",
              textWrap: "balance",
            }}
          >
            Understanding All on 4 Dental Implants Cost in Sydney
          </h2>

          <div
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "var(--fs-body)",
              lineHeight: 1.68,
              color: "#444449",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            <p style={{ margin: 0 }}>
              A common issue we see when reviewing external All on 4 or All on X quotes is that the advertised fee includes temporary teeth but not the definitive bridge.
            </p>
            <p style={{ margin: 0 }}>
              All on 4 cost at Smile Concepts ranges from <strong>$18,000 to $32,000 per arch</strong> in Sydney, quoted in two clear phases.
            </p>

            <p style={{ margin: 0 }}>
              Phase one, at <strong>$18,000 per arch</strong>, covers your surgery and the fixed temporary teeth you leave with on the day of surgery or shortly afterwards.
            </p>
            <p style={{ margin: 0 }}>
              Phase two is your final fixed teeth, at <strong>$10,000 for acrylic on titanium</strong> or <strong>$14,000 for zirconia</strong>. What drives your total is your materials, your anatomy and your choices, <strong>never the number of implants, because we don&apos;t charge per implant.</strong>
            </p>
            <p style={{ margin: 0 }}>
              After your consultation, we provide a full written quote with itemised costs. There are no surprise fees added later. What we quote is what you pay.
            </p>
          </div>
        </div>

        {showcase}

        {/* ─── TWO PHASE CARDS (Exact Live Site Content) ─── */}
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-prata), Georgia, serif",
              fontSize: "var(--fs-card-title)",
              fontWeight: 400,
              color: "#1C1C1E",
              textAlign: "center",
              marginBottom: "0.5rem",
              lineHeight: 1.3,
            }}
          >
            Your Investment: Transparent Two Phase Pricing
          </h2>
          <p
            className="sc-cost-intro-text"
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
            Your All on 4 or All on X treatment is quoted in two clear phases, the surgical phase and the final bridge phase, so nothing is hidden.
          </p>

          <div
            ref={phasesGridRef}
            onScroll={handlePhaseScroll}
            className="sc-cost-phases-grid"
          >
            {/* Phase 1 Card */}
            <div
              className="sc-cost-phase-card"
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
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "var(--fs-card-title)", color: "#1C1C1E", margin: "0 0 0.5rem" }}>
                Surgery &amp; Same-Day Temporary Teeth
              </h3>
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
                <li>Your consultation and 3D CBCT planning</li>
                <li>Any extractions</li>
                <li>Placement of your implants (usually four to six), with no per-implant charge</li>
                <li>Fixed temporary teeth on the day of surgery or shortly afterwards, where suitable</li>
              </ul>
              <a
                href="tel:0292677777"
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
                <PhoneCall size={14} aria-hidden />
              </a>
            </div>

            {/* Phase 2 Card */}
            <div
              className="sc-cost-phase-card"
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
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "var(--fs-card-title)", color: "#1C1C1E", margin: "0 0 0.5rem" }}>
                Your Final Fixed Teeth
              </h3>
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
                href="tel:0292677777"
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
                <span>Get My Price Per Arch</span>
                <PhoneCall size={14} aria-hidden />
              </a>
            </div>
          </div>

          {/* Mobile Phase Slider Nav Pills */}
          <div className="sc-cost-phases-mobile-nav">
            <button
              type="button"
              onClick={() => scrollToPhase(0)}
              style={{
                padding: "0.35rem 0.85rem",
                borderRadius: "100px",
                border: activePhase === 0 ? "1.5px solid #E86337" : "1px solid #DCD6CD",
                backgroundColor: activePhase === 0 ? "rgba(232, 99, 55, 0.1)" : "#ffffff",
                color: activePhase === 0 ? "#E86337" : "#666",
                fontFamily: "var(--font-assistant)",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Phase 1 ($18k)
            </button>
            <button
              type="button"
              onClick={() => scrollToPhase(1)}
              style={{
                padding: "0.35rem 0.85rem",
                borderRadius: "100px",
                border: activePhase === 1 ? "1.5px solid #E86337" : "1px solid #DCD6CD",
                backgroundColor: activePhase === 1 ? "rgba(232, 99, 55, 0.1)" : "#ffffff",
                color: activePhase === 1 ? "#E86337" : "#666",
                fontFamily: "var(--font-assistant)",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Phase 2 ($10k-$14k)
            </button>
          </div>

          <p
            className="sc-cost-intro-text"
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.95rem",
              color: "#555",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Sedation and bone grafting fees are not included in the phases above. They are quoted separately and only if you need them, and we will discuss both openly at your consultation before anything is decided.
          </p>
        </div>

        {/* ─── INTERACTIVE COST & FINANCE CALCULATOR ─── */}
        <div
          className="sc-calc-card"
          style={{
            maxWidth: "980px",
            margin: "3rem auto 0",
            backgroundColor: "#FAF9F6",
            borderRadius: "20px",
            border: "none",
            boxShadow: "none",
            padding: "clamp(1.5rem, 3.5vw, 2.5rem)",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(232, 99, 55, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Calculator size={19} color="#E86337" />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-prata), Georgia, serif",
                  fontSize: "var(--fs-card-title)",
                  color: "#1C1C1E",
                  margin: 0,
                  fontWeight: 400,
                  lineHeight: 1.25,
                }}
              >
                Interactive Investment &amp; Finance Calculator
              </p>
              <span
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  backgroundColor: "rgba(232, 99, 55, 0.12)",
                  color: "#E86337",
                  padding: "0.18rem 0.55rem",
                  borderRadius: "100px",
                }}
              >
                Estimate
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-assistant), sans-serif",
                fontSize: "0.92rem",
                color: "#666",
                margin: "0.2rem 0 0 0",
                lineHeight: 1.5,
                maxWidth: "760px",
              }}
            >
              Pick your arches and final teeth to see your total and a weekly payment estimate.
            </p>
          </div>

          {/* Calculator Content */}
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
                      marginBottom: "0.55rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    1. Select Number of Arches:
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    <button
                      type="button"
                      className="sc-calc-btn"
                      onClick={() => setSelectedArch("single")}
                      style={{
                        padding: "0.75rem 0.85rem",
                        borderRadius: "12px",
                        border: selectedArch === "single" ? "2px solid #E86337" : "1px solid #E5E0D7",
                        backgroundColor: selectedArch === "single" ? "#ffffff" : "#ffffff",
                        color: selectedArch === "single" ? "#E86337" : "#444",
                        fontFamily: "var(--font-assistant)",
                        fontWeight: 700,
                        cursor: "pointer",
                        fontSize: "clamp(0.85rem, 2vw, 0.92rem)",
                        transition: "all 0.2s ease",
                        textAlign: "center",
                        lineHeight: 1.3,
                        boxShadow: selectedArch === "single" ? "0 4px 14px rgba(232, 99, 55, 0.12)" : "0 1px 3px rgba(0,0,0,0.03)",
                      }}
                    >
                      <div>Single Arch</div>
                      <span className="sc-calc-btn-sub" style={{ fontSize: "0.74rem", fontWeight: 500, opacity: selectedArch === "single" ? 0.9 : 0.65, display: "block", marginTop: "0.15rem" }}>
                        Upper or Lower
                      </span>
                    </button>
                    <button
                      type="button"
                      className="sc-calc-btn"
                      onClick={() => setSelectedArch("both")}
                      style={{
                        padding: "0.75rem 0.85rem",
                        borderRadius: "12px",
                        border: selectedArch === "both" ? "2px solid #E86337" : "1px solid #E5E0D7",
                        backgroundColor: selectedArch === "both" ? "#ffffff" : "#ffffff",
                        color: selectedArch === "both" ? "#E86337" : "#444",
                        fontFamily: "var(--font-assistant)",
                        fontWeight: 700,
                        cursor: "pointer",
                        fontSize: "clamp(0.85rem, 2vw, 0.92rem)",
                        transition: "all 0.2s ease",
                        textAlign: "center",
                        lineHeight: 1.3,
                        boxShadow: selectedArch === "both" ? "0 4px 14px rgba(232, 99, 55, 0.12)" : "0 1px 3px rgba(0,0,0,0.03)",
                      }}
                    >
                      <div>Both Arches</div>
                      <span className="sc-calc-btn-sub" style={{ fontSize: "0.74rem", fontWeight: 500, opacity: selectedArch === "both" ? 0.9 : 0.65, display: "block", marginTop: "0.15rem" }}>
                        Full Mouth
                      </span>
                    </button>
                  </div>
                </div>

                {/* Choose your teeth: Phase 1 is the default, final teeth (Phase 2 / 3) are optional add-ons */}
                <div>
                  <label
                    className="sc-calc-ctrl-label"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#1C1C1E",
                      marginBottom: "0.55rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    2. Choose Your Teeth:
                  </label>
                  <div role="radiogroup" aria-label="Choose your teeth" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "0.5rem" }}>
                    {[
                      {
                        key: null as null | keyof typeof FINAL_TEETH,
                        phase: 1,
                        badge: "Phase 1",
                        tier: "Starting Point",
                        name: "Temporary Teeth",
                        price: formatAud(PHASE_1_PER_ARCH),
                        note: "Fitted at surgery, lasts 6 to 12 mo",
                        dark: false,
                      },
                      ...(Object.keys(FINAL_TEETH) as (keyof typeof FINAL_TEETH)[]).map((key) => ({
                        key: key as null | keyof typeof FINAL_TEETH,
                        phase: FINAL_TEETH[key].phase,
                        badge: `Phase ${FINAL_TEETH[key].phase}`,
                        tier: FINAL_TEETH[key].tier,
                        name: FINAL_TEETH[key].name,
                        price: `+${formatAud(FINAL_TEETH[key].perArch)}`,
                        note: `Final teeth, ${formatAud(PHASE_1_PER_ARCH + FINAL_TEETH[key].perArch)} total`,
                        dark: key === "zirconia",
                      })),
                    ].map((option) => {
                      const isSelected = selectedMaterial === option.key;
                      return (
                        <button
                          key={option.key ?? "temporary"}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          className="sc-calc-btn"
                          onClick={() => setSelectedMaterial(option.key)}
                          style={{
                            position: "relative",
                            padding: "0.6rem 0.4rem",
                            borderRadius: "12px",
                            border: isSelected ? "2px solid #E86337" : "1px solid #E5E0D7",
                            backgroundColor: isSelected ? "rgba(232, 99, 55, 0.04)" : "#ffffff",
                            color: isSelected ? "#E86337" : "#444",
                            fontFamily: "var(--font-assistant)",
                            fontWeight: 700,
                            cursor: "pointer",
                            fontSize: "clamp(0.72rem, 1.6vw, 0.8rem)",
                            transition: "all 0.2s ease",
                            textAlign: "center",
                            lineHeight: 1.3,
                            boxShadow: isSelected ? "0 4px 14px rgba(232, 99, 55, 0.12)" : "0 1px 3px rgba(0,0,0,0.03)",
                          }}
                        >
                          {isSelected && (
                            <span
                              aria-hidden
                              style={{
                                position: "absolute",
                                top: "0.3rem",
                                right: "0.3rem",
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                backgroundColor: "#E86337",
                                color: "#ffffff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Check size={12} strokeWidth={3} />
                            </span>
                          )}
                          <span
                            style={{
                              display: "inline-block",
                              fontSize: "0.58rem",
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              padding: "0.1rem 0.4rem", whiteSpace: "nowrap",
                              borderRadius: "100px",
                              marginBottom: "0.2rem",
                              backgroundColor: option.dark ? "#1C1C1E" : "#F4EFEB",
                              color: option.dark ? "#ffffff" : "#666",
                            }}
                          >
                            {option.badge}
                          </span>
                          <span
                            style={{
                              display: "block",
                              fontSize: "0.56rem",
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: option.dark ? "#1C1C1E" : "#999",
                              marginBottom: "0.25rem",
                            }}
                          >
                            {option.tier}
                          </span>
                          <div>{option.name}</div>
                          <div style={{ fontFamily: "var(--font-prata)", fontWeight: 400, fontSize: "0.95rem", color: "#1C1C1E", marginTop: "0.1rem" }}>
                            {option.price}
                            <span style={{ display: "block", fontFamily: "var(--font-assistant)", fontSize: "0.66rem", color: "#888", lineHeight: 1.1 }}>per arch</span>
                          </div>
                          <span className="sc-calc-btn-sub" style={{ fontSize: "0.66rem", fontWeight: 500, color: "#777", display: "block", marginTop: "0.1rem", lineHeight: 1.25 }}>
                            {option.note}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Finance Duration Slider */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
                    <label
                      className="sc-calc-ctrl-label"
                      style={{
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "#1C1C1E",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      3. Plan Duration:
                    </label>
                    <span style={{ fontFamily: "var(--font-assistant)", fontWeight: 700, color: "#E86337", fontSize: "0.88rem" }}>
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
                      height: "6px",
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.35rem", fontSize: "0.75rem", color: "#888", fontFamily: "var(--font-assistant)" }}>
                    <span>12 Mo</span>
                    <span>24 Mo</span>
                    <span>36 Mo</span>
                    <span>48 Mo</span>
                  </div>
                </div>
              </div>

              {/* Right Result Card */}
              <div
                className="sc-calc-result-card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #ECE7DE",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.1rem",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.76rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      color: "#777",
                      fontWeight: 700,
                    }}
                  >
                    Estimated Weekly Investment:
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginTop: "0.25rem" }}>
                    <span className="sc-calc-weekly-val">
                      ${weeklyEstimate}
                    </span>
                    <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#666" }}>
                      / week*
                    </span>
                  </div>
                  <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.74rem", color: "#777", display: "block", marginTop: "0.25rem", lineHeight: 1.4 }}>
                    *Indicative estimate only, based on financing up to the {formatAud(FINANCE_LIMIT)} plan limit. Interest-free plans up to 48 months and up to $30,000, based on eligibility; approval and terms apply.
                  </span>
                </div>

                <div style={{ borderTop: "1px solid #ECE7DE", paddingTop: "0.85rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  <div className="sc-calc-breakdown-row" style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", fontFamily: "var(--font-assistant)", fontSize: "0.88rem", color: "#555" }}>
                    <span>
                      Phase 1: Temporary teeth
                      <span style={{ display: "block", fontSize: "0.74rem", color: "#888" }}>Lasts 6 to 12 months</span>
                    </span>
                    <strong style={{ color: "#1C1C1E", whiteSpace: "nowrap" }}>{formatAud(phase1PerArch * archMultiplier)}</strong>
                  </div>
                  {finalTeeth && (
                    <div className="sc-calc-breakdown-row" style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", fontFamily: "var(--font-assistant)", fontSize: "0.88rem", color: "#555" }}>
                      <span>
                        Phase {finalTeeth.phase}: {finalTeeth.short} final teeth
                        <span style={{ display: "block", fontSize: "0.74rem", color: "#888" }}>{finalTeeth.tier}</span>
                      </span>
                      <strong style={{ color: "#1C1C1E", whiteSpace: "nowrap" }}>{formatAud(phase2PerArch * archMultiplier)}</strong>
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.95rem",
                      color: "#1C1C1E",
                      fontWeight: 700,
                      paddingTop: "0.55rem",
                      borderTop: "1px dashed #D9D2C6",
                    }}
                  >
                    <span>Total:</span>
                    <span style={{ color: "#1C1C1E", fontFamily: "var(--font-prata)", fontSize: "1.35rem" }}>
                      {formatAud(grandTotal)}
                    </span>
                  </div>
                  <div className="sc-calc-breakdown-row" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-assistant)", fontSize: "0.88rem", color: "#555" }}>
                    <span>Interest-free plan (max {formatAud(FINANCE_LIMIT)}):</span>
                    <strong style={{ color: "#1C1C1E" }}>{formatAud(financedAmount)}</strong>
                  </div>
                  {balanceOutsidePlan > 0 && (
                    <div className="sc-calc-breakdown-row" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-assistant)", fontSize: "0.88rem", color: "#555" }}>
                      <span>Balance payable outside the plan:</span>
                      <strong style={{ color: "#1C1C1E" }}>{formatAud(balanceOutsidePlan)}</strong>
                    </div>
                  )}
                </div>

                <p style={{ margin: 0, padding: "0.7rem 0.85rem", backgroundColor: "#F7F4EE", borderLeft: "3px solid #E86337", borderRadius: "8px", fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "#555", lineHeight: 1.5 }}>
                  {finalTeeth
                    ? `This includes Phase 1 (temporary teeth) plus your Phase ${finalTeeth.phase} final teeth, ${formatAud(totalPerArch)} per arch in total.`
                    : `This covers Phase 1: your implants and fixed temporary teeth. Choose your final teeth above to see your complete price, from ${formatAud(PHASE_1_PER_ARCH + FINAL_TEETH.acrylic.perArch)} per arch.`}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.35rem" }}>
                  <a
                    href="https://smileconcepts.com.au/book-online.html"
                    className="sc-calc-cta-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.45rem",
                      padding: "0.85rem 1rem",
                      backgroundColor: "#E86337",
                      color: "#ffffff",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontFamily: "var(--font-assistant)",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      textAlign: "center",
                      boxShadow: "0 4px 14px rgba(232, 99, 55, 0.24)",
                    }}
                  >
                    <span>Book Consultation Online</span>
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href="tel:0292677777"
                    className="sc-calc-phone-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.45rem",
                      padding: "0.75rem",
                      backgroundColor: "#FAF9F6",
                      color: "#1C1C1E",
                      border: "1px solid #ECE7DE",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontFamily: "var(--font-assistant)",
                      fontWeight: 600,
                      fontSize: "0.84rem",
                    }}
                  >
                    <span>Ask About My Payment Plan Options</span>
                    <Phone size={13} color="#E86337" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        </>}
        {part === "funding" && showcase}

      </div>
    </section>
  );
}
