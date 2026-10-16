"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  Calculator,
  Phone,
  ShieldCheck,
  CreditCard,
  Layers,
  Sparkles,
  Award,
  Clock,
  HeartHandshake,
} from "lucide-react";

const COST_TOPIC_COUNT = 6;

export default function AllOn4Cost() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [readMoreCost, setReadMoreCost] = useState(false);
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
  const [selectedMaterial, setSelectedMaterial] = useState<"acrylic" | "zirconia">("zirconia");
  const [financeMonths, setFinanceMonths] = useState<number>(48);
  const [activeCostTopic, setActiveCostTopic] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

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

  const handleNextCostTopic = () => {
    setActiveCostTopic((prev) => (prev + 1) % COST_TOPIC_COUNT);
  };

  const handlePrevCostTopic = () => {
    setActiveCostTopic((prev) => (prev - 1 + COST_TOPIC_COUNT) % COST_TOPIC_COUNT);
  };

  // Autoplay slide transition (rotates every 5.5s, pauses on user hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      // Topics are text-heavy: on phones readers move through them with the arrows instead
      if (window.matchMedia("(max-width: 640px)").matches) return;
      setActiveCostTopic((prev) => (prev + 1) % COST_TOPIC_COUNT);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const costTopics = [
    {
      id: "factors",
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
      id: "materials",
      tabLabel: "Acrylic or Zirconia",
      badge: "Choosing Your Final Teeth",
      title: "Acrylic or Zirconia: Choosing Your Final Teeth",
      src: "/assets/allon4/temporary-final-teeth-bridge.jpg",
      alt: "Acrylic vs Zirconia Final Teeth Bridge",
      caption: "Phase two permanent teeth: engineered for long-term function & beauty",
      objectPosition: "center center",
      content: (
        <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>
          <p style={{ marginTop: "0.5rem" }}>
            Your final fixed teeth come in two materials, and both are fitted in Phase Two once your implants have healed. Unlike the temporary teeth you leave with after surgery, these are built for long-term wear. Here is how acrylic on titanium and zirconia compare, so you can choose the option that suits your bite, budget, and goals.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem", margin: "1rem 0" }}>
            <div style={{ backgroundColor: "#FFFFFF", padding: "1rem", borderRadius: "12px", border: "1px solid #E5E0D7" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                <strong style={{ color: "#1C1C1E" }}>Acrylic on titanium</strong>
                <span style={{ fontWeight: 700, color: "#E86337", fontSize: "1rem" }}>$10,000</span>
              </div>
              <p style={{ margin: 0, fontSize: "0.86rem", color: "#555", lineHeight: 1.5 }}>
                A lighter, reliable and more economical option. The teeth are acrylic bonded to a strong titanium bar, and the surface may need an occasional refresh or repair over the years.
              </p>
            </div>
            <div style={{ backgroundColor: "#FAF7F2", padding: "1rem", borderRadius: "12px", border: "1px solid #D5CEBF" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                <strong style={{ color: "#1C1C1E" }}>Zirconia</strong>
                <span style={{ fontWeight: 700, color: "#E86337", fontSize: "1rem" }}>$14,000</span>
              </div>
              <p style={{ margin: 0, fontSize: "0.86rem", color: "#555", lineHeight: 1.5 }}>
                Offers high strength, excellent stain resistance and very natural aesthetics. Zirconia is milled from a single ceramic block, resists chipping and staining, and is the choice most patients make when longevity and aesthetics are the priority.
              </p>
            </div>
          </div>
          <p style={{ margin: 0 }}>
            We walk you through both options at your consultation, with examples you can see and hold, so the decision fits your budget and your priorities.
          </p>
        </div>
      ),
    },
    {
      id: "additional",
      tabLabel: "Additional Costs",
      badge: "Clinical Considerations",
      title: "Are There Any Additional Costs?",
      src: "/assets/allon4/All-on-6-1.2.jpg",
      alt: "3D Surgical planning and additional procedures",
      caption: "Precision CBCT scanning and tailored patient care",
      objectPosition: "center 48%",
      content: (
        <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>
          <p style={{ marginTop: "0.5rem" }}>
            Sedation and bone grafting fees are not included in the two phases. They are quoted separately and only if you need them:
          </p>
          <ul style={{ paddingLeft: "1.25rem", margin: "0.5rem 0 1rem" }}>
            <li>IV sedation or sleep dentistry</li>
            <li>Bone grafting or related preparatory procedures</li>
          </ul>
          <p style={{ margin: 0 }}>
            We will discuss both openly at your consultation before anything is decided, and confirm everything in a written, itemised quote.
          </p>
        </div>
      ),
    },
    {
      id: "insurance",
      tabLabel: "Insurance & Medicare",
      badge: "Health Fund Benefits",
      title: "Does Private Insurance or Medicare Cover Any of the Costs of All on 4?",
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
            Ask your insurer for a written benefit estimate using your itemised quote. Medicare generally does not cover routine private dental implant treatment. [6]
          </p>
        </div>
      ),
    },
    {
      id: "super",
      tabLabel: "Superannuation",
      badge: "Early Super Release",
      title: "Can I Use My Superannuation to Pay?",
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
            The ATO assesses applications case by case against strict criteria, requires supporting reports from two practitioners and an itemised treatment plan, and recommends considering other payment options first. Consider the tax and retirement savings implications and seek independent financial advice. [7]
          </p>
          <div style={{ backgroundColor: "#F7F4EE", padding: "0.85rem 1.15rem", borderRadius: "10px", borderLeft: "4px solid #E86337", margin: "0.85rem 0 0" }}>
            <p style={{ margin: 0, fontWeight: 600, color: "#1C1C1E" }}>
              We work with SuperCare to help patients through this process. Ask us about it at your consultation.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "plans",
      tabLabel: "Payment Plans",
      badge: "Flexible Financing",
      title: "Do We Offer Payment Plans?",
      src: "/assets/services/payment-plans.jpg",
      alt: "Payment plan options for dental implants",
      caption: "Interest-free payment plans up to 48 months available",
      objectPosition: "center 22%",
      content: (
        <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#444", lineHeight: 1.65 }}>
          <p style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Yes. Interest-free payment plans are available up to 48 months and up to $30,000, based on eligibility, from around $90 per week (subject to eligibility, approval and terms). Ask our team which option suits your circumstances, and we will include your payment options in your written quote.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
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
        @media (min-width: 640px) {
          .sc-cost-main-title {
            white-space: nowrap !important;
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
      `}</style>

      <div className="container-sc" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.25rem" }}>
        {/* Exact Section Heading & Intro from Live Website */}
        <div style={{ maxWidth: "1020px", margin: "0 auto 2.5rem", textAlign: "center" }}>
          <h2
            className="sc-cost-main-title"
            style={{
              fontFamily: "var(--font-prata), Georgia, serif",
              fontSize: "clamp(1.45rem, 3.8vw, 2.85rem)",
              color: "#1C1C1E",
              fontWeight: 400,
              lineHeight: 1.22,
              marginBottom: "1rem",
            }}
          >
            Understanding All on 4 Dental Implants Cost in Sydney
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
              A common issue we see when reviewing external All on 4 or All on X quotes is that the advertised fee includes temporary teeth but not the definitive bridge.
            </p>
            <p style={{ margin: 0 }}>
              All on 4 cost at Smile Concepts ranges from <strong>$18,000 to $32,000 per arch</strong> in Sydney, quoted in two clear phases.
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
                    Phase one, at <strong>$18,000 per arch</strong>, covers your surgery and the fixed temporary teeth you leave with on the day of surgery or shortly afterwards.
                  </p>
                  <p style={{ margin: 0 }}>
                    Phase two is your final fixed teeth, at <strong>$10,000 for acrylic on titanium</strong> or <strong>$14,000 for zirconia</strong>. What drives your total is your materials, your anatomy and your choices, <strong>never the number of implants, because we don&apos;t charge per implant.</strong>
                  </p>
                  <p style={{ margin: 0 }}>
                    After your consultation, we provide a full written quote with itemised costs. There are no surprise fees added later. What we quote is what you pay.
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
            Your Investment: Transparent Two Phase Pricing
          </h3>
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
            Your All on 4 or All on X treatment is quoted in two clear phases, the surgical phase and the final bridge phase, so nothing is hidden. Sedation and bone grafting fees are not included in the phases below. They are quoted separately and only if you need them, and we will discuss both openly at your consultation before anything is decided.
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
                <li>Your consultation and 3D CBCT planning</li>
                <li>Any extractions</li>
                <li>Placement of your implants (usually four to six), with no per-implant charge</li>
                <li>Fixed temporary teeth on the day of surgery or shortly afterwards, where suitable</li>
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
              <h3
                style={{
                  fontFamily: "var(--font-prata), Georgia, serif",
                  fontSize: "clamp(1.2rem, 3.2vw, 1.55rem)",
                  color: "#1C1C1E",
                  margin: 0,
                  fontWeight: 400,
                  lineHeight: 1.25,
                }}
              >
                Interactive Investment &amp; Finance Calculator
              </h3>
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
              Tailor your treatment options to calculate your transparent two-phase total and view interest-free weekly payment estimates.
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
                      marginBottom: "0.55rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    2. Select Final Bridge Material (Phase 2):
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    <button
                      type="button"
                      className="sc-calc-btn"
                      onClick={() => setSelectedMaterial("acrylic")}
                      style={{
                        padding: "0.75rem 0.85rem",
                        borderRadius: "12px",
                        border: selectedMaterial === "acrylic" ? "2px solid #E86337" : "1px solid #E5E0D7",
                        backgroundColor: selectedMaterial === "acrylic" ? "#ffffff" : "#ffffff",
                        color: selectedMaterial === "acrylic" ? "#E86337" : "#444",
                        fontFamily: "var(--font-assistant)",
                        fontWeight: 700,
                        cursor: "pointer",
                        fontSize: "clamp(0.85rem, 2vw, 0.92rem)",
                        transition: "all 0.2s ease",
                        textAlign: "center",
                        lineHeight: 1.3,
                        boxShadow: selectedMaterial === "acrylic" ? "0 4px 14px rgba(232, 99, 55, 0.12)" : "0 1px 3px rgba(0,0,0,0.03)",
                      }}
                    >
                      <div>Acrylic on Titanium</div>
                      <span className="sc-calc-btn-sub" style={{ fontSize: "0.74rem", fontWeight: 500, opacity: selectedMaterial === "acrylic" ? 0.9 : 0.65, display: "block", marginTop: "0.15rem" }}>
                        $10,000 / arch
                      </span>
                    </button>
                    <button
                      type="button"
                      className="sc-calc-btn"
                      onClick={() => setSelectedMaterial("zirconia")}
                      style={{
                        padding: "0.75rem 0.85rem",
                        borderRadius: "12px",
                        border: selectedMaterial === "zirconia" ? "2px solid #E86337" : "1px solid #E5E0D7",
                        backgroundColor: selectedMaterial === "zirconia" ? "#ffffff" : "#ffffff",
                        color: selectedMaterial === "zirconia" ? "#E86337" : "#444",
                        fontFamily: "var(--font-assistant)",
                        fontWeight: 700,
                        cursor: "pointer",
                        fontSize: "clamp(0.85rem, 2vw, 0.92rem)",
                        transition: "all 0.2s ease",
                        textAlign: "center",
                        lineHeight: 1.3,
                        boxShadow: selectedMaterial === "zirconia" ? "0 4px 14px rgba(232, 99, 55, 0.12)" : "0 1px 3px rgba(0,0,0,0.03)",
                      }}
                    >
                      <div>Monolithic Zirconia</div>
                      <span className="sc-calc-btn-sub" style={{ fontSize: "0.74rem", fontWeight: 500, opacity: selectedMaterial === "zirconia" ? 0.9 : 0.65, display: "block", marginTop: "0.15rem" }}>
                        $14,000 / arch
                      </span>
                    </button>
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
                    *Indicative estimate only. Interest-free plans up to 48 months and up to $30,000, based on eligibility; approval and terms apply.
                  </span>
                </div>

                <div style={{ borderTop: "1px solid #ECE7DE", paddingTop: "0.85rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  <div className="sc-calc-breakdown-row" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-assistant)", fontSize: "0.88rem", color: "#555" }}>
                    <span>Phase 1 ({selectedArch === "both" ? "Both Arches" : "Single Arch"}):</span>
                    <strong style={{ color: "#1C1C1E" }}>${(phase1PerArch * archMultiplier).toLocaleString()}</strong>
                  </div>
                  <div className="sc-calc-breakdown-row" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-assistant)", fontSize: "0.88rem", color: "#555" }}>
                    <span>Phase 2 ({selectedMaterial === "acrylic" ? "Acrylic" : "Zirconia"}):</span>
                    <strong style={{ color: "#1C1C1E" }}>${(phase2PerArch * archMultiplier).toLocaleString()}</strong>
                  </div>
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
                    <span>Total Investment:</span>
                    <span style={{ color: "#1C1C1E", fontFamily: "var(--font-prata)", fontSize: "1.35rem" }}>
                      ${grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.35rem" }}>
                  <a
                    href="#book"
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
                    <Phone size={13} color="#E86337" />
                    <span>Call 02 9267 7777 for Quote Details</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── INTERACTIVE ANIMATED TOPIC SHOWCASE (NO BG, NO BOX FRAME, DETAILS LEFT, FULL IMAGE RIGHT) ─── */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{
            width: "100%",
            maxWidth: "100%",
            margin: "3rem auto 0",
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          {/* Main 2-Column Showcase */}
          <div className="sc-cost-showcase-grid">
            {/* Left: Detailed Verbatim Content Panel (Uniform Height) */}
            <div className="sc-cost-showcase-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCostTopic}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{ display: "flex", flexDirection: "column", flex: 1 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#E86337",
                      }}
                    >
                      {costTopics[activeCostTopic].badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-prata)",
                      fontSize: "clamp(1.25rem, 2.2vw, 1.7rem)",
                      color: "#1C1C1E",
                      margin: "0 0 0.85rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {costTopics[activeCostTopic].title}
                  </h3>

                  <div style={{ flex: 1 }}>
                    {costTopics[activeCostTopic].content}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation & Actions Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                  paddingTop: "1.25rem",
                  marginTop: "1.25rem",
                  borderTop: "1px solid #ECE7DE",
                }}
              >
                {/* Dots & Counter */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  {costTopics.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveCostTopic(i)}
                      aria-label={`Go to topic ${i + 1}`}
                      style={{
                        height: "8px",
                        width: activeCostTopic === i ? "24px" : "8px",
                        borderRadius: "999px",
                        backgroundColor: activeCostTopic === i ? "#E86337" : "#D5CEBF",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        padding: 0,
                      }}
                    />
                  ))}
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      fontSize: "0.78rem",
                      color: "#777",
                      fontFamily: "var(--font-assistant)",
                      fontWeight: 600,
                    }}
                  >
                    {activeCostTopic + 1} of {costTopics.length}
                  </span>
                </div>

                {/* Arrow Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <button
                    type="button"
                    onClick={handlePrevCostTopic}
                    aria-label="Previous Topic"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "#FAF6F0",
                      border: "1px solid #E5E0D7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#1C1C1E",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <ArrowLeft size={17} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextCostTopic}
                    aria-label="Next Topic"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "#E86337",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#FFFFFF",
                      boxShadow: "0 4px 12px rgba(232, 99, 55, 0.25)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
