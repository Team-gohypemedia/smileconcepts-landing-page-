"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

export default function AllOn4Process() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const processGridRef = useRef<HTMLDivElement>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const handleProcessScroll = () => {
    if (!processGridRef.current) return;
    const { scrollLeft, clientWidth } = processGridRef.current;
    const cardWidth = clientWidth * 0.84;
    const idx = Math.round(scrollLeft / (cardWidth > 0 ? cardWidth : 280));
    setActiveStep(Math.min(steps.length - 1, Math.max(0, idx)));
  };

  const scrollToStep = (idx: number) => {
    if (!processGridRef.current) return;
    if (idx === 0) {
      processGridRef.current.scrollTo({ left: 0, behavior: "smooth" });
      setActiveStep(0);
      return;
    }
    const cards = processGridRef.current.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
      setActiveStep(idx);
    }
  };

  // Exact 5 Steps from Live Website (Preserved Verbatim)
  const steps = [
    {
      num: "1",
      title: "Consultation and assessment",
      desc: "A full clinical examination with 3D CBCT imaging and a review of your medical history. The scan gives us a detailed map of your jawbone so we can plan implant placement precisely before anything is done. We also talk through your goals and concerns at this appointment.",
    },
    {
      num: "2",
      title: "Treatment Planning",
      desc: "We build a personalised treatment plan and walk through it with you in detail. You'll know exactly what's being done, what it costs, and what to expect at each stage before anything starts.",
    },
    {
      num: "3",
      title: "Implant Placement",
      desc: "Most patients choose to have implants placed under IV sedation for comfort. Any remaining teeth that need removing are taken out at the same appointment. In most suitable cases, a temporary set of teeth is fitted the same day. The number of implants placed, usually four to six, follows your dentist's analysis of your scans, at no change to your quoted price.",
    },
    {
      num: "4",
      title: "Healing and Integration",
      desc: "Over the following months, the implants fuse with the surrounding bone. We monitor progress through review appointments. Your temporary teeth let you eat and speak normally throughout this phase.",
    },
    {
      num: "5",
      title: "Final Restoration",
      desc: "Once healing is complete, your final bridge is designed and fitted. We explain your material options, including the difference between acrylic and zirconia, at your consultation so you can make an informed decision.",
    },
  ];

  return (
    <section
      id="procedure"
      style={{
        padding: "clamp(3.5rem, 6vw, 6rem) 0",
        backgroundColor: "#FAF9F6",
        position: "relative",
      }}
    >
      <style>{`
        .sc-process-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: clamp(1.15rem, 2.2vw, 1.5rem);
          margin-bottom: clamp(2rem, 4vw, 3rem);
        }
        .sc-process-card {
          position: relative;
          background-color: #ffffff;
          border-radius: 20px;
          padding: 1.85rem 1.6rem 1.65rem;
          border: 1px solid #ECE7DE;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
          overflow: hidden;
        }
        .sc-process-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #E86337 0%, rgba(232, 99, 55, 0.3) 100%);
          opacity: 0.85;
          transition: opacity 0.25s ease, height 0.25s ease;
        }
        .sc-process-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 38px -6px rgba(232, 99, 55, 0.1), 0 8px 16px -2px rgba(0, 0, 0, 0.04);
          border-color: rgba(232, 99, 55, 0.35);
        }
        .sc-process-card:hover::before {
          opacity: 1;
          height: 4px;
        }
        .sc-process-card-1 { grid-column: span 2; }
        .sc-process-card-2 { grid-column: span 2; }
        .sc-process-card-3 { grid-column: span 2; }
        .sc-process-card-4 { grid-column: span 3; }
        .sc-process-card-5 { grid-column: span 3; }

        .sc-process-mobile-nav {
          display: none;
        }
        @media (max-width: 1024px) {
          .sc-process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.15rem !important;
          }
          .sc-process-card-1,
          .sc-process-card-2,
          .sc-process-card-3,
          .sc-process-card-4 {
            grid-column: span 1 !important;
          }
          .sc-process-card-5 {
            grid-column: 1 / span 2 !important;
            max-width: 540px !important;
            margin: 0 auto !important;
            width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .sc-process-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            scroll-padding-left: 1.65rem !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 1rem !important;
            margin-left: -1.25rem !important;
            margin-right: -1.25rem !important;
            padding-left: 1.65rem !important;
            padding-right: 1.65rem !important;
            padding-bottom: 0.95rem !important;
            margin-bottom: 0.85rem !important;
            scrollbar-width: none !important;
          }
          .sc-process-grid::-webkit-scrollbar {
            display: none !important;
          }
          .sc-process-card {
            grid-column: auto !important;
            flex: 0 0 84% !important;
            max-width: 320px !important;
            min-width: 275px !important;
            scroll-snap-align: start !important;
            padding: 1.35rem 1.2rem !important;
          }
          .sc-process-mobile-nav {
            display: flex !important;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem !important;
          }
        }
        .sc-acc-btn-proc {
          width: 100%;
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .sc-acc-btn-proc h3 {
          font-size: clamp(1.05rem, 3.2vw, 1.25rem) !important;
          line-height: 1.35 !important;
        }
        .sc-acc-icon-proc {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
      `}</style>

      <div className="container-sc" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.25rem" }}>
        {/* Exact Section Header from Live Website */}
        <div style={{ maxWidth: "860px", margin: "0 auto clamp(2rem, 4vw, 3rem)", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(232, 99, 55, 0.08)",
              padding: "0.35rem 0.85rem",
              borderRadius: "999px",
              marginBottom: "0.95rem",
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
              Treatment Journey
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-prata), Georgia, serif",
              fontSize: "clamp(1.75rem, 4.2vw, 2.75rem)",
              color: "#1C1C1E",
              fontWeight: 400,
              lineHeight: 1.25,
              marginBottom: "0.85rem",
              textWrap: "balance",
            }}
          >
            Our 5-Step All on 4 and All on X Process
          </h2>

          <p
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "clamp(0.92rem, 2.5vw, 1.05rem)",
              lineHeight: 1.6,
              color: "#5E616B",
              margin: "0 auto",
              maxWidth: "680px",
            }}
          >
            From first scan to final smile, one team handles every stage in-house at Smile Concepts in Sydney.
          </p>
        </div>

        {/* 5-Step Cards (Desktop Balanced Grid / Mobile Slider) */}
        <div
          ref={processGridRef}
          onScroll={handleProcessScroll}
          className="sc-process-grid"
        >
          {steps.map((st, idx) => (
            <div
              key={st.num}
              className={`sc-process-card sc-process-card-${idx + 1}`}
            >
              {/* Elegant Watermark Step Number */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "0.85rem",
                  right: "1.25rem",
                  fontFamily: "var(--font-prata), Georgia, serif",
                  fontSize: "2.85rem",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "rgba(28, 28, 30, 0.05)",
                  pointerEvents: "none",
                  userSelect: "none",
                  letterSpacing: "-0.03em",
                }}
              >
                0{st.num}
              </div>

              {/* Step Badge & Title on Same Line */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  marginBottom: "1rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    backgroundColor: "rgba(232, 99, 55, 0.08)",
                    border: "1px solid rgba(232, 99, 55, 0.22)",
                    borderRadius: "999px",
                    padding: "0.22rem 0.55rem",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "#E86337",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#E86337",
                      lineHeight: 1,
                    }}
                  >
                    Step {st.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-prata), Georgia, serif",
                    fontSize: "clamp(0.98rem, 1.35vw, 1.15rem)",
                    fontWeight: 400,
                    color: "#1C1C1E",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {st.title}
                </h3>
              </div>

              {/* Description (Exact Verbatim from Website) */}
              <p
                style={{
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "0.95rem",
                  color: "#525258",
                  lineHeight: 1.7,
                  margin: "0 0 1.25rem 0",
                  position: "relative",
                  zIndex: 1,
                  flexGrow: 1,
                }}
              >
                {st.desc}
              </p>

              {/* Discreet Step Progress Bar & Counter */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "0.95rem",
                  borderTop: "1px solid #F2ECE4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#9E9EA4",
                  }}
                >
                  Step {st.num} of 5
                </span>

                <div
                  style={{
                    width: "55px",
                    height: "4px",
                    backgroundColor: "#EBE5DB",
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${((idx + 1) / 5) * 100}%`,
                      background: "linear-gradient(90deg, #E86337 0%, #F47A4A 100%)",
                      borderRadius: "999px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider Indicator Dots & Swipe Hint */}
        <div className="sc-process-mobile-nav">
          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
            {steps.map((st, idx) => (
              <button
                key={st.num}
                type="button"
                onClick={() => scrollToStep(idx)}
                aria-label={`Go to step ${st.num}`}
                style={{
                  width: activeStep === idx ? "22px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: activeStep === idx ? "#E86337" : "#DCD6CD",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: "0.78rem", color: "#888", fontFamily: "var(--font-assistant)", marginLeft: "0.75rem" }}>
            Swipe for all 5 steps →
          </span>
        </div>

        {/* ─── ACCORDIONS: RECOVERY, BONE LOSS, RISKS & WHY CHOOSE ─── */}
        <div style={{ maxWidth: "980px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* 1. Recovery, Aftercare & Ongoing Maintenance */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("recovery")} className="sc-acc-btn-proc">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                Recovery, Aftercare &amp; Ongoing Maintenance
              </h3>
              <span
                className="sc-acc-icon-proc"
                style={{
                  backgroundColor: openSection === "recovery" ? "#E86337" : "#F3F0EA",
                  color: openSection === "recovery" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "recovery" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "recovery" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 1.5rem 1.5rem",
                      borderTop: "1px solid #ECE7DE",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#444",
                    }}
                  >
                    <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                      Recovery from All on 4 is usually easier than people expect. Most Smile Concepts’ patients are back to their normal routine within a few days, while the implants fuse with the jawbone over the following three to six months. Here is what to expect at each stage.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <div style={{ backgroundColor: "#FAF9F6", padding: "1.1rem", borderRadius: "10px", border: "1px solid #ECE7DE" }}>
                        <h4 style={{ fontFamily: "var(--font-assistant)", fontSize: "0.98rem", fontWeight: 700, color: "#1C1C1E", margin: "0 0 0.4rem" }}>
                          The First Few Days After Surgery: What to Expect
                        </h4>
                        <p style={{ margin: "0 0 0.5rem", color: "#555" }}>
                          Some swelling, mild bruising, and general tenderness in the days after surgery are all normal. These effects are temporary and usually start fading within the first week. We&apos;ll go through your aftercare plan with you in detail, covering:
                        </p>
                        <ul style={{ paddingLeft: "1.25rem", margin: 0, color: "#555" }}>
                          <li>How to manage swelling and discomfort</li>
                          <li>What medication you&apos;ll need and how to take it</li>
                          <li>Oral hygiene during the early healing period</li>
                          <li>What you can eat, and what to avoid for now</li>
                          <li>When you can get back to normal activity</li>
                        </ul>
                      </div>

                      <div style={{ backgroundColor: "#FAF9F6", padding: "1.1rem", borderRadius: "10px", border: "1px solid #ECE7DE" }}>
                        <h4 style={{ fontFamily: "var(--font-assistant)", fontSize: "0.98rem", fontWeight: 700, color: "#1C1C1E", margin: "0 0 0.4rem" }}>
                          Eating During Healing
                        </h4>
                        <p style={{ margin: 0, color: "#555" }}>
                          During this period, the implants are fusing with the jawbone, and a softer diet is recommended to avoid putting unnecessary pressure on them while that happens. We&apos;ll explain exactly what&apos;s appropriate to eat at each stage of recovery.
                        </p>
                      </div>

                      <div style={{ backgroundColor: "#FAF9F6", padding: "1.1rem", borderRadius: "10px", border: "1px solid #ECE7DE" }}>
                        <h4 style={{ fontFamily: "var(--font-assistant)", fontSize: "0.98rem", fontWeight: 700, color: "#1C1C1E", margin: "0 0 0.4rem" }}>
                          Long-Term Maintenance
                        </h4>
                        <p style={{ margin: "0 0 0.5rem", color: "#555" }}>
                          All-on-4 is designed as a long-term solution, but it still needs ongoing care to stay that way. To help maintain the health of your implants and the surrounding tissue, we recommend:
                        </p>
                        <ul style={{ paddingLeft: "1.25rem", margin: "0 0 0.5rem", color: "#555" }}>
                          <li>Daily brushing and cleaning around the bridge</li>
                          <li>Following the oral hygiene instructions your clinician gives you</li>
                          <li>Attending regular dental check-ups</li>
                          <li>Booking in for professional implant maintenance and cleaning</li>
                          <li>Letting us know promptly if anything feels off</li>
                        </ul>
                        <p style={{ margin: 0, color: "#555" }}>
                          With proper care, many patients go on to enjoy their All-on-4 implants for years to come.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2. What If You Have Bone Loss? */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("boneloss")} className="sc-acc-btn-proc">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                What If You Have Bone Loss?
              </h3>
              <span
                className="sc-acc-icon-proc"
                style={{
                  backgroundColor: openSection === "boneloss" ? "#E86337" : "#F3F0EA",
                  color: openSection === "boneloss" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "boneloss" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "boneloss" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 1.5rem 1.5rem",
                      borderTop: "1px solid #ECE7DE",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#444",
                    }}
                  >
                    <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                      Bone loss after tooth loss is very common, and it doesn&apos;t automatically rule out the All on 4 treatment concept. Because the rear implants are angled, they can reach denser, healthier bone that straight implants can&apos;t access. Our 3D imaging shows us exactly what&apos;s available before we make any recommendations. Some cases may require bone grafting.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. What You Should Know About Risks */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("risks")} className="sc-acc-btn-proc">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                What You Should Know About Risks
              </h3>
              <span
                className="sc-acc-icon-proc"
                style={{
                  backgroundColor: openSection === "risks" ? "#E86337" : "#F3F0EA",
                  color: openSection === "risks" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "risks" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "risks" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 1.5rem 1.5rem",
                      borderTop: "1px solid #ECE7DE",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#444",
                    }}
                  >
                    <p style={{ marginTop: "1rem", marginBottom: "0.75rem" }}>
                      All on 4 has a strong clinical track record, but it is a surgical procedure, and every patient should understand the risks before going ahead.
                    </p>
                    <div style={{ backgroundColor: "#FAF9F6", padding: "0.9rem 1.1rem", borderRadius: "8px", border: "1px solid #ECE7DE", marginBottom: "0.85rem" }}>
                      <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.88rem" }}>
                        Any surgical or invasive procedure carries risks. Before proceeding, you should seek a second opinion from an appropriately qualified health practitioner.
                      </strong>
                    </div>
                    <ul style={{ paddingLeft: "1.25rem", margin: 0, lineHeight: 1.7 }}>
                      <li><strong>Healing varies:</strong> Overall health, blood supply, and following post-operative instructions all affect how well and how quickly implants integrate.</li>
                      <li><strong>Smoking increases risk:</strong> Nicotine reduces blood flow to bone and gum tissue, which interferes with healing. We discuss this honestly with smokers at the consultation.</li>
                      <li><strong>Medical history matters:</strong> Certain medications and conditions can affect healing, which is why we take a full history before proceeding.</li>
                      <li><strong>Maintenance is not optional:</strong> The bridge and implants need regular professional cleaning. Skipping maintenance appointments increases the risk of complications over time.</li>
                      <li><strong>Implant failure is rare but possible:</strong> In well-planned cases, it is uncommon, but patients should be aware that it can happen. If it does, we will discuss the options with you.</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Why Patients Choose Smile Concepts */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("whyus")} className="sc-acc-btn-proc">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                Why Patients Choose Smile Concepts
              </h3>
              <span
                className="sc-acc-icon-proc"
                style={{
                  backgroundColor: openSection === "whyus" ? "#E86337" : "#F3F0EA",
                  color: openSection === "whyus" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "whyus" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "whyus" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 1.5rem 1.5rem",
                      borderTop: "1px solid #ECE7DE",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#444",
                    }}
                  >
                    <p style={{ marginTop: "1rem", marginBottom: "0.85rem" }}>
                      Choosing all on 4 procedure is a significant decision. Patients want experienced care, clear communication, and a treatment plan tailored to their needs.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
                      <div>
                        <strong>Over 25 Years of Combined Experience:</strong> Dr Manish Shah and Dr Kinnar Shah each bring over 25 years of experience with a strong focus on complex restorative and implant cases.
                      </div>
                      <div>
                        <strong>3D Imaging and Digital Planning:</strong> CBCT imaging is standard on every All on 4 procedure we do, giving us a detailed picture of your bone before anything happens, with guided surgical planning for greater precision.
                      </div>
                      <div>
                        <strong>Everything Under One Roof:</strong> Consultation, imaging, surgery, temporary teeth, final restoration and ongoing maintenance all happen here, with one team that knows your case the whole way through.
                      </div>
                      <div>
                        <strong>Experience With Complex Cases:</strong> Significant bone loss, years of denture wear, multiple failing teeth. We see these regularly and plan properly for them.
                      </div>
                      <div>
                        <strong>Sedation Available:</strong> If the procedure makes you anxious, sedation is available. You don&apos;t have to push through something that really stresses you out.
                      </div>
                      <div>
                        <strong>Multiple Implant Systems:</strong> We work across leading systems including Neoss, DIO, Nobel Biocare and Straumann, among others, and accept revision cases from other clinics and overseas.
                      </div>
                      <div>
                        <strong>Flexible Ways to Pay:</strong> Our All on 4 payment plans are interest-free up to 48 months and up to $30,000 (eligibility applies), plus guidance on superannuation access for eligible patients.
                      </div>
                      <div>
                        <strong>Trusted by Sydney Patients:</strong> Smile Concepts is an award-winning dental practice in Sydney, CBD, with 675+ Google reviews.
                      </div>
                    </div>

                    <div style={{ textAlign: "right", marginTop: "1rem" }}>
                      <a
                        href="#book"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          padding: "0.65rem 1.15rem",
                          backgroundColor: "#1C1C1E",
                          color: "#ffffff",
                          borderRadius: "8px",
                          fontFamily: "var(--font-assistant)",
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        <span>Book an Appointment</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
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
