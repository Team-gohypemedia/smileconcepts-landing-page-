"use client";

import { Cite } from "@/components/ui/Cite";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import StackingCards, { StackingCardItem } from "@/components/fancy/blocks/stacking-cards";
import { GOOGLE_REVIEW_COUNT } from "@/lib/google-reviews";


const STACK_MOBILE_QUERY = "(max-width: 900px)";
const STACK_MOBILE_DOCK_PX = 84; // just below the mobile navbar
const STACK_DESKTOP_DOCK_PX = 95; // just below the desktop navbar
const STACK_BOTTOM_GAP_PX = 12;
const PROCESS_STEP_COUNT = 5;

type ProcessPart = "journey" | "recovery" | "risks" | "why";

function ProstheticCard({ index, topPosition }: { index: 1 | 2; topPosition?: string }) {
  const temporary = index === 1;
  return (
    <StackingCardItem index={index} topPosition={topPosition} className="mb-32 sm:mb-48 sc-stack-item">
      <div className="sc-stack-card" style={{ backgroundColor: "#fff", borderRadius: "24px", border: "1px solid #EAE5DC", boxShadow: "0 24px 50px -15px rgba(28,28,30,0.08)", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", minHeight: "min(580px, calc(100vh - 140px))" }}>
        <div className="sc-stack-text" style={{ padding: "clamp(1.5rem, 3vw, 2.75rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.97rem", color: "#444", lineHeight: 1.65 }}>
            <h2 className="sc-stack-title" style={{ fontFamily: "var(--font-prata)", fontSize: "var(--fs-card-title)", color: "#1C1C1E", margin: "0 0 0.75rem", lineHeight: 1.2 }}>
              {temporary ? "Temporary Teeth and Final Teeth: What To Expect" : "Acrylic or Zirconia Teeth: Choosing Your Final Teeth"}
            </h2>
            {temporary ? <>
              <p>Will you be without teeth during treatment? For most suitable patients, no.</p>
              <p>A fixed temporary bridge may be fitted on the day of surgery or shortly afterwards if implant stability and other clinical factors allow. If immediate loading is unsuitable, your dentist will explain the alternative plan. Temporary teeth require a modified diet during healing. <Cite refs="1" /></p>
              <p>Once healing is complete, the final bridge is designed and fitted. We walk you through your material options at consultation, including the difference between acrylic and zirconia, so you can make a decision that actually makes sense for your budget and your priorities rather than just accepting whatever is standard.</p>
              <p>It is worth understanding the difference between the two stages when you are comparing costs, because the materials and work involved are quite different.</p>
            </> : <>
              <p>Your final fixed teeth come in two materials, and both are fitted in Phase Two once your implants have healed. Unlike the temporary teeth you leave with after surgery, these are built for long-term wear. Here is how acrylic on titanium and zirconia compare, so you can choose the option that suits your bite, budget, and goals.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem", margin: "1rem 0" }}>
                <div style={{ backgroundColor: "#FAF9F6", padding: "1.1rem", borderRadius: "12px", border: "1px solid #E5E0D7" }}>
                  <span style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.12rem 0.55rem", borderRadius: "999px", backgroundColor: "#ECE7DE", color: "#555", marginBottom: "0.45rem" }}>Mid Tier</span>
                  <strong className="sc-tier-title" style={{ display: "block", fontSize: "1.02rem", color: "#1C1C1E" }}>Acrylic on titanium — $10,000</strong>
                  <p style={{ margin: "0.5rem 0 0", fontSize: "0.92rem", lineHeight: 1.6, color: "#444" }}>A lighter, reliable and more economical option. The teeth are acrylic bonded to a strong titanium bar, and the surface may need an occasional refresh or repair over the years.</p>
                </div>
                <div style={{ backgroundColor: "#FFF8F4", padding: "1.1rem", borderRadius: "12px", border: "1.5px solid #E86337" }}>
                  <span style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.12rem 0.55rem", borderRadius: "999px", backgroundColor: "#1C1C1E", color: "#fff", marginBottom: "0.45rem" }}>Premium Tier</span>
                  <strong className="sc-tier-title" style={{ display: "block", fontSize: "1.02rem", color: "#1C1C1E" }}>Zirconia — $14,000</strong>
                  <p style={{ margin: "0.5rem 0 0", fontSize: "0.92rem", lineHeight: 1.6, color: "#444" }}>Offers high strength, excellent stain resistance and very natural aesthetics. Zirconia is milled from a single ceramic block, resists chipping and staining, and is the choice most patients make when longevity and aesthetics are the priority.</p>
                </div>
              </div>
              <p>We walk you through both options at your consultation, with examples you can see and hold, so the decision fits your budget and your priorities.</p>
            </>}
          </div>
          <div style={{ marginTop: "0.85rem", paddingTop: "0.65rem", borderTop: "1px solid #F0ECE4", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "#8E8E93" }}>{index + 1} of 3 • {temporary ? "Temporary & Final Teeth" : "Choosing Your Final Teeth"}</span>
            {temporary && <span style={{ color: "#E86337", fontSize: "0.82rem", fontWeight: 600 }}>Scroll down for Materials ↓</span>}
          </div>
        </div>
        <div className="sc-stack-media" style={{ position: "relative", minHeight: "260px", overflow: "hidden", backgroundColor: "#000" }}>
          {temporary ? (
            <Image src="/assets/allon4/pmma-temporary-teeth.jpg" alt="PMMA temporary teeth bridge fitted in Phase 1" fill sizes="(max-width: 900px) 100vw, 740px" style={{ objectFit: "contain", objectPosition: "center center", backgroundColor: "#000" }} />
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateRows: "1fr 1fr", gap: "2px", backgroundColor: "#000" }}>
              <div style={{ position: "relative" }}>
                <Image src="/assets/allon4/acrylic-final-teeth.jpg" alt="Acrylic on titanium final teeth bridge" fill sizes="(max-width: 900px) 100vw, 740px" style={{ objectFit: "contain", objectPosition: "center center" }} />
              </div>
              <div style={{ position: "relative" }}>
                <Image src="/assets/allon4/zirconia-final-teeth.jpg" alt="Zirconia final teeth bridge" fill sizes="(max-width: 900px) 100vw, 740px" style={{ objectFit: "contain", objectPosition: "center center" }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </StackingCardItem>
  );
}

export default function AllOn4Process({ part = "journey" }: { part?: ProcessPart }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // On smaller screens, cards taller than the screen dock by their bottom edge instead of
  // their top, so the whole card is readable before the next one slides over it.
  const stackRef = useRef<HTMLDivElement>(null);
  const [stackTops, setStackTops] = useState<(string | undefined)[]>([]);

  useEffect(() => {
    const container = stackRef.current;
    if (!container) return;

    const computeTops = () => {
      const isMobile = window.matchMedia(STACK_MOBILE_QUERY).matches;
      const cards = Array.from(container.querySelectorAll<HTMLElement>(".sc-stack-card"));
      // Measure each card at its natural height, then give every card in the stack the
      // tallest one's height (desktop), so a later card always fully covers the one under it.
      container.style.setProperty("--sc-stack-h", "0px");
      const heights = cards.map((card) => card.getBoundingClientRect().height);
      const tallest = Math.max(0, ...heights);
      if (isMobile || cards.length < 2) container.style.removeProperty("--sc-stack-h");
      else container.style.setProperty("--sc-stack-h", `${Math.ceil(tallest)}px`);

      const dock = isMobile ? STACK_MOBILE_DOCK_PX : STACK_DESKTOP_DOCK_PX;
      const next = heights.map((natural) => {
        const height = isMobile ? natural : Math.max(natural, tallest);
        const top = Math.min(dock, window.innerHeight - height - STACK_BOTTOM_GAP_PX);
        return `${Math.round(top)}px`;
      });
      setStackTops((prev) => (prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next));
    };

    computeTops();
    const observer = new ResizeObserver(() => requestAnimationFrame(computeTops));
    container.querySelectorAll(".sc-stack-card").forEach((card) => observer.observe(card));
    window.addEventListener("resize", computeTops);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", computeTops);
    };
  }, []);

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const scrollToStep = (idx: number) => {
    setActiveStep(idx);
  };

  const touchStartXRef = useRef<number | null>(null);

  const onTouchStartHandler = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const onTouchEndHandler = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null) {
      const diff = e.changedTouches[0].clientX - touchStartXRef.current;
      if (diff > 40) {
        // Swiped right -> go to previous step
        handlePrevStep();
      } else if (diff < -40) {
        // Swiped left -> go to next step
        handleNextStep();
      }
      touchStartXRef.current = null;
    }
    setIsPaused(false);
  };

  // Autoplay carousel every 5.5s, pauses on hover / touch
  useEffect(() => {
    if (isPaused || part !== "journey") return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEP_COUNT);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, part]);

  // Exact 5 Steps from Live Website (Preserved Verbatim)
  const steps = [
    {
      num: "1",
      title: "Step 1: Consultation and Assessment",
      desc: "A full clinical examination with 3D CBCT imaging and a review of your medical history. The scan gives us a detailed map of your jawbone, so we can plan implant placement precisely before we do anything. We also talk through your goals and concerns at this appointment.",
    },
    {
      num: "2",
      title: "Step 2: Treatment Planning",
      desc: "We build a personalised treatment plan and walk through it with you in detail. You will know exactly what is being done, what it costs, and what to expect at each stage before anything starts.",
    },
    {
      num: "3",
      title: "Step 3: Implant Placement",
      desc: "Most patients choose to have their implants placed under IV sedation for comfort. Any remaining teeth that need removing are taken out at the same appointment. In most suitable cases, a temporary set of teeth is fitted the same day. The number of implants placed, usually four to six, follows your dentist's analysis of your scans, at no change to your quoted price.",
    },
    {
      num: "4",
      title: "Step 4: Healing and Integration",
      desc: "Over the following months, the implants fuse with the surrounding bone. We monitor progress through review appointments. Your temporary teeth let you eat and speak normally throughout this phase.",
    },
    {
      num: "5",
      title: "Step 5: Final Restoration",
      desc: "Once healing is complete, your final bridge is designed and fitted. We explain your material options, including the difference between acrylic and zirconia, at your consultation so you can make an informed decision.",
    },
  ];

  return (
    <section
      id={part === "journey" ? "procedure" : part === "why" ? "why-patients" : part}
      className={`sc-process-${part}`}
      style={{
        padding: "clamp(3.5rem, 6vw, 6rem) 0",
        backgroundColor: "#FAF9F6",
        position: "relative",
      }}
    >
      {/* Background Banner Image with Luxury Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <Image
          src="/assets/hero/background.jpg"
          alt=""
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center center",
            opacity: 0.22,
          }}
          priority={false}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(250, 249, 246, 0.82) 15%, rgba(250, 249, 246, 0.90) 80%, #FFFFFF 100%)",
          }}
        />
        {/* Subtle warm accent radial glow behind the cards */}
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "450px",
            background:
              "radial-gradient(ellipse, rgba(232, 99, 55, 0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </div>

      <style>{`
        @media (min-width: 901px) {
          .sc-stack-card {
            min-height: var(--sc-stack-h, min(580px, calc(100vh - 140px))) !important;
          }
          /* Cards share the tallest card's height; shorter cards' text sits centred */
          .sc-stack-text {
            padding: clamp(1.25rem, 2.2vw, 2rem) clamp(1.35rem, 2.6vw, 2.25rem) !important;
          }
          .sc-stack-text > div:first-child {
            margin-block: auto;
          }
        }
        .sc-stack-text li {
          margin-bottom: 0.25rem;
        }
        .sc-stack-text li::marker {
          color: #E86337;
        }
        .sc-proc-carousel-stage {
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          padding: 2.25rem 0 3.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .sc-proc-track-container {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }
        .sc-proc-card-slide {
          position: absolute;
          width: 90%;
          max-width: 540px;
          height: 320px;
          border-radius: 20px;
          background-color: #FFFFFF;
          border: 1px solid #ECE7DE;
          padding: 2.2rem 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-sizing: border-box;
          user-select: none;
          cursor: pointer;
        }
        .sc-proc-side-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #E86337;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #FFFFFF;
          box-shadow: 0 8px 24px rgba(232, 99, 55, 0.35);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 50;
        }
        .sc-proc-side-nav-btn:hover {
          background-color: #D3542B;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 10px 28px rgba(232, 99, 55, 0.45);
        }
        .sc-proc-side-nav-left {
          left: clamp(24px, 12vw, 120px);
        }
        .sc-proc-side-nav-right {
          right: clamp(24px, 12vw, 120px);
        }
        .sc-proc-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.75rem;
        }
        .sc-proc-dash {
          height: 3px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        @media (max-width: 900px) {
          .sc-proc-track-container {
            height: 380px;
          }
          .sc-proc-card-slide {
            max-width: calc(100vw - 32px);
            width: 100%;
            height: auto;
            min-height: 340px;
            padding: 1.6rem 1.4rem;
          }
          .sc-proc-side-nav-btn {
            top: auto;
            bottom: -56px;
            transform: none;
            width: 42px;
            height: 42px;
          }
          .sc-proc-side-nav-btn:hover {
            transform: scale(1.08);
          }
          .sc-proc-side-nav-left {
            left: calc(50% - 95px);
          }
          .sc-proc-side-nav-right {
            right: calc(50% - 95px);
          }
          .sc-proc-pagination {
            margin-top: 4rem;
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
        @media (max-width: 640px) {
          /* Scroll distance each docked card stays fully visible before the next one covers it.
             (Tailwind mb-* on these items is overridden by the global margin reset.) */
          .sc-stack-item:not(:last-child) {
            margin-bottom: 32vh;
          }
          /* Phones: full uncropped photo on top, readable text full width below. */
          .sc-stack-card {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
            border-radius: 18px !important;
          }
          .sc-stack-media {
            order: -1;
            min-height: 0 !important;
          }
          /* Each photo box matches its image's own proportions, so nothing is cropped */
          .sc-stack-media { aspect-ratio: 1000 / 667; }
          .sc-process-recovery .sc-stack-item:nth-child(2) .sc-stack-media { aspect-ratio: 2 / 1; }
          .sc-process-recovery .sc-stack-item:nth-child(3) .sc-stack-media { aspect-ratio: 1 / 1; }
          .sc-process-risks .sc-stack-item:first-child .sc-stack-media { aspect-ratio: 700 / 400; }
          .sc-process-risks .sc-stack-item:nth-child(2) .sc-stack-media { aspect-ratio: 904 / 1024; }
          .sc-process-risks .sc-stack-item:nth-child(2) .sc-stack-media img { object-fit: contain !important; }
          .sc-process-risks .sc-stack-item:nth-child(3) .sc-stack-media { aspect-ratio: 348 / 395; }
          .sc-process-why .sc-stack-media { aspect-ratio: 1376 / 768; }
          .sc-stack-chip {
            display: none !important;
          }
          .sc-stack-text {
            padding: 1.1rem 1.1rem 1rem !important;
          }
          .sc-stack-text .sc-stack-title {
            font-size: 1.28rem !important;
            line-height: 1.25 !important;
            margin-bottom: 0.55rem !important;
          }
          .sc-stack-text .sc-stack-sub {
            font-size: 0.92rem !important;
          }
          .sc-stack-text p,
          .sc-stack-text strong,
          .sc-stack-text div {
            font-size: 0.88rem !important;
            line-height: 1.55 !important;
          }
          .sc-stack-text .sc-tier-title {
            font-size: 0.98rem !important;
          }
          .sc-stack-text ul {
            font-size: 0.86rem !important;
            line-height: 1.5 !important;
          }
          .sc-stack-text > div:last-child {
            margin-top: 0.75rem !important;
            padding-top: 0.6rem !important;
          }
          .sc-stack-text > div:last-child span {
            font-size: 0.76rem !important;
          }
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

      <div
        className="container-sc"
        style={{
          maxWidth: "1540px",
          width: "100%",
          margin: "0 auto",
          padding: "0 clamp(1rem, 3vw, 2.5rem)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {part === "journey" && <>
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
              fontSize: "var(--fs-section-title)",
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
              fontSize: "var(--fs-body)",
              lineHeight: 1.6,
              color: "#5E616B",
              margin: "0 auto",
              maxWidth: "680px",
            }}
          >
            From first scan to final smile, one team handles every stage in house at Smile Concepts in Sydney.
          </p>
        </div>

        {/* ─── 3D COVERFLOW CAROUSEL WITH LEFT & RIGHT CARD PREVIEWS (AUTOPLAY + MANUAL + TOUCH SWIPE) ─── */}
        <div
          className="sc-proc-carousel-stage"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStartHandler}
          onTouchEnd={onTouchEndHandler}
          style={{ touchAction: "pan-y" }}
        >
          {/* Side Circle Arrow: Left */}
          <button
            type="button"
            onClick={handlePrevStep}
            className="sc-proc-side-nav-btn sc-proc-side-nav-left"
            aria-label="Previous step"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Side Circle Arrow: Right */}
          <button
            type="button"
            onClick={handleNextStep}
            className="sc-proc-side-nav-btn sc-proc-side-nav-right"
            aria-label="Next step"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Track Container with Left/Center/Right Previews (Full width) */}
          <div style={{ width: "100%", margin: "0 auto" }}>
            <div className="sc-proc-track-container">
              {steps.map((st, idx) => {
                // Calculate position relative to activeStep (-2, -1, 0, 1, 2)
                let offset = idx - activeStep;
                const half = Math.floor(steps.length / 2);
                if (offset > half) offset -= steps.length;
                if (offset < -half) offset += steps.length;

                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 1;

                // Motion values for smooth 3D coverflow with end-to-end bleed
                const xPos = isCenter ? 0 : offset > 0 ? 420 : -420;
                const scaleVal = isCenter ? 1.03 : 0.86;
                const opacityVal = isCenter ? 1 : 0.5;
                const zIndexVal = isCenter ? 30 : 20 - Math.abs(offset);
                const rotateYVal = isCenter ? 0 : offset > 0 ? -4 : 4;

                return (
                  <motion.div
                    key={st.num}
                    onClick={() => scrollToStep(idx)}
                    className="sc-proc-card-slide"
                    initial={false}
                    animate={{
                      x: xPos,
                      scale: scaleVal,
                      opacity: isVisible ? opacityVal : 0,
                      zIndex: zIndexVal,
                      rotateY: rotateYVal,
                      boxShadow: isCenter
                        ? "0 24px 60px -12px rgba(232, 99, 55, 0.16), 0 8px 24px -4px rgba(0, 0, 0, 0.06)"
                        : "0 10px 25px -8px rgba(0, 0, 0, 0.05)",
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      pointerEvents: isVisible ? "auto" : "none",
                    }}
                  >
                    {/* Meta Top: Step Pill & Watermark Numeral */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          backgroundColor: isCenter ? "rgba(232, 99, 55, 0.1)" : "rgba(0, 0, 0, 0.04)",
                          border: isCenter ? "1px solid rgba(232, 99, 55, 0.28)" : "1px solid #ECE7DE",
                          borderRadius: "999px",
                          padding: "0.28rem 0.75rem",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: isCenter ? "#E86337" : "#888",
                            display: "inline-block",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-assistant), sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: isCenter ? "#E86337" : "#666",
                          }}
                        >
                          Step {st.num} of 5
                        </span>
                      </div>

                      <div
                        aria-hidden="true"
                        style={{
                          fontFamily: "var(--font-prata), Georgia, serif",
                          fontSize: "2.4rem",
                          lineHeight: 1,
                          color: isCenter ? "rgba(232, 99, 55, 0.2)" : "rgba(28, 28, 30, 0.08)",
                          userSelect: "none",
                          fontWeight: 400,
                        }}
                      >
                        0{st.num}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-prata), Georgia, serif",
                        fontSize: "var(--fs-card-title)",
                        fontWeight: 400,
                        color: "#1C1C1E",
                        margin: "0 0 0.85rem 0",
                        lineHeight: 1.3,
                        textAlign: "center",
                      }}
                    >
                      {st.title}
                    </h3>

                    {/* Step Description */}
                    <p
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.95rem",
                        color: isCenter ? "#444" : "#777",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {st.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Dash Indicators Matching Reference Carousel */}
            <div className="sc-proc-pagination">
              {steps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToStep(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className="sc-proc-dash"
                  style={{
                    width: activeStep === i ? "32px" : "18px",
                    backgroundColor: activeStep === i ? "#E86337" : "#D4CCC5",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ─── STACKING CARDS: RECOVERY, BONE LOSS, RISKS & WHY CHOOSE ─── */}
        </>}
        {part !== "journey" && <div
          ref={stackRef}
          className="sc-stacking-cards-wrapper"
          style={{
            width: "100%",
            maxWidth: "1480px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <StackingCards totalCards={part === "recovery" || part === "risks" ? 3 : 1} scaleMultiplier={0.015}>
            {/* 1. Recovery, Aftercare & Ongoing Maintenance */}
            {part === "recovery" && <>
            <StackingCardItem index={0} topPosition={stackTops[0]} className="mb-32 sm:mb-48 sc-stack-item">
              <div
                className="sc-stack-card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  border: "1px solid #EAE5DC",
                  boxShadow: "0 24px 50px -15px rgba(28,28,30,0.08), 0 0 0 1px rgba(234,229,220,0.7)",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                  minHeight: "min(580px, calc(100vh - 140px))",
                }}
              >
                <div className="sc-stack-text" style={{ padding: "clamp(1.5rem, 3vw, 2.75rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h2 className="sc-stack-title" style={{ fontFamily: "var(--font-prata)", fontSize: "var(--fs-card-title)", color: "#1C1C1E", margin: "0 0 0.5rem", lineHeight: 1.2 }}>
                      Recovery, Aftercare &amp; Ongoing Maintenance after All on 4 Implant Surgery
                    </h2>

                    <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.9rem", lineHeight: 1.55, color: "#444", margin: "0 0 0.8rem" }}>
                      Recovery from All on 4 is usually easier than people expect. Most Smile Concepts patients return to their normal routine within a few days, while the implants fuse with the jawbone over the next three to six months. Here is what to expect at each stage.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.6rem" }}>
                      {/* The First Few Days */}
                      <div style={{ backgroundColor: "#FAF9F6", padding: "0.75rem 0.95rem", borderRadius: "12px", border: "1px solid #ECE7DE" }}>
                        <h3 className="sc-stack-sub" style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", fontWeight: 700, color: "#1C1C1E", margin: "0 0 0.3rem", lineHeight: 1.3 }}>
                          The First Few Days After Surgery: What to Expect
                        </h3>
                        <p style={{ margin: "0 0 0.35rem", color: "#444", fontSize: "0.82rem", lineHeight: 1.5 }}>
                          Some swelling, mild bruising, and general tenderness in the days after surgery are all normal. These effects are temporary and usually start fading within the first week. We&apos;ll go through your aftercare plan with you in detail, covering:
                        </p>
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem", margin: 0, color: "#333", fontSize: "0.8rem", lineHeight: 1.5 }}>
                          <li>How to manage swelling and discomfort</li>
                          <li>What medication you&apos;ll need and how to take it</li>
                          <li>Oral hygiene during the early healing period</li>
                          <li>What you can eat, and what to avoid for now</li>
                          <li>When you can get back to normal activity</li>
                        </ul>
                      </div>

                      {/* Eating & Long Term */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        <div style={{ backgroundColor: "#FAF9F6", padding: "0.75rem 0.95rem", borderRadius: "12px", border: "1px solid #ECE7DE" }}>
                          <h3 className="sc-stack-sub" style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", fontWeight: 700, color: "#1C1C1E", margin: "0 0 0.3rem", lineHeight: 1.3 }}>
                            Eating During Healing
                          </h3>
                          <p style={{ margin: 0, color: "#444", fontSize: "0.82rem", lineHeight: 1.5 }}>
                            During this period, the implants fuse with the jawbone, so we recommend a softer diet to avoid putting unnecessary pressure on them. We&apos;ll explain exactly what&apos;s appropriate to eat at each stage of recovery.
                          </p>
                        </div>

                        <div style={{ backgroundColor: "#FAF9F6", padding: "0.75rem 0.95rem", borderRadius: "12px", border: "1px solid #ECE7DE" }}>
                          <h3 className="sc-stack-sub" style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", fontWeight: 700, color: "#1C1C1E", margin: "0 0 0.3rem", lineHeight: 1.3 }}>
                            Long-Term Maintenance
                          </h3>
                          <p style={{ margin: "0 0 0.35rem", color: "#444", fontSize: "0.82rem", lineHeight: 1.5 }}>
                            All on 4 is designed as a long-term solution, but it still needs ongoing care to stay that way. To help maintain the health of your implants and the surrounding tissue, we recommend:
                          </p>
                          <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem", margin: 0, color: "#333", fontSize: "0.8rem", lineHeight: 1.5 }}>
                            <li>Daily brushing and cleaning around the bridge</li>
                            <li>Following the oral hygiene instructions your clinician gives you</li>
                            <li>Attending regular dental check-ups</li>
                            <li>Booking in for professional implant maintenance and cleaning</li>
                            <li>Letting us know promptly if anything feels off</li>
                          </ul>
                          <p style={{ margin: "0.35rem 0 0", color: "#444", fontSize: "0.82rem", lineHeight: 1.5 }}>
                            With proper care, many patients go on to enjoy their All on 4 implants for years to come.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: "0.85rem", paddingTop: "0.65rem", borderTop: "1px solid #F0ECE4", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "#8E8E93" }}>
                      1 of 3 • Recovery &amp; Maintenance
                    </span>
                    <span style={{ color: "#E86337", fontSize: "0.82rem", fontWeight: 600, fontFamily: "var(--font-assistant)" }}>
                      Scroll down for Temporary Teeth ↓
                    </span>
                  </div>
                </div>

                <div className="sc-stack-media" style={{ position: "relative", minHeight: "260px", overflow: "hidden" }}>
                  <Image
                    src="/assets/allon4/elder-couple-cooking-dental-implant.jpg"
                    alt="Elder couple cooking healthy meal enjoying dental implants recovery"
                    fill
                    sizes="(max-width: 900px) 100vw, 740px"
                    style={{ objectFit: "cover", objectPosition: "left 20%" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(28,28,30,0.05) 0%, rgba(28,28,30,0.4) 100%)" }} />
                  <div className="sc-stack-chip" style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem", padding: "0.65rem 1rem", backgroundColor: "rgba(255,255,255,0.94)", backdropFilter: "blur(8px)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.7)" }}>
                    <p style={{ margin: 0, fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "#1C1C1E", fontWeight: 600 }}>
                      Most patients return to their normal routine within a few days.
                    </p>
                  </div>
                </div>
              </div>
            </StackingCardItem>

            <ProstheticCard index={1} topPosition={stackTops[1]} />
            <ProstheticCard index={2} topPosition={stackTops[2]} />
            </>}

            {/* 2. What You Should Know About Risks */}
            {part === "risks" && <>
            <StackingCardItem index={0} topPosition={stackTops[0]} className="mb-32 sm:mb-48 sc-stack-item">
              <div
                className="sc-stack-card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  border: "1px solid #EAE5DC",
                  boxShadow: "0 24px 50px -15px rgba(28,28,30,0.08), 0 0 0 1px rgba(234,229,220,0.7)",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                  minHeight: "min(580px, calc(100vh - 140px))",
                }}
              >
                <div className="sc-stack-text" style={{ padding: "clamp(1.5rem, 3vw, 2.75rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h2 className="sc-stack-title" style={{ fontFamily: "var(--font-prata)", fontSize: "var(--fs-card-title)", color: "#1C1C1E", margin: "0 0 0.5rem", lineHeight: 1.2 }}>
                      What You Should Know About Risks Associated with All on 4 Dental Implants
                    </h2>

                    <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.95rem", lineHeight: 1.6, color: "#444", margin: "0 0 0.9rem" }}>
                      All on 4 (All on X) has a strong clinical track record, but it is a surgical procedure, and every patient should understand the risks before proceeding. Any surgical or invasive procedure carries risks. Before proceeding, you should seek a second opinion from an appropriately qualified health practitioner.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.85rem 1.25rem", fontSize: "0.88rem", lineHeight: 1.6, color: "#333" }}>
                      <div><strong>Healing varies:</strong> Overall health, blood supply, and adherence to post-operative instructions affect how well and how quickly implants integrate.</div>
                      <div>Smoking is associated with higher implant failure risk and greater bone loss. Discuss stopping smoking and individual risk management with your treating team. <Cite refs="4" /></div>
                      <div><strong>Medical history matters:</strong> Certain medications and conditions can affect healing, so we take a full history before proceeding.</div>
                      <div><strong>Maintenance is not optional:</strong> The bridge and implants need regular professional cleaning. Skipping maintenance appointments increases the risk of complications over time.</div>
                      <div style={{ gridColumn: "1 / -1" }}><strong>Implant failure is possible:</strong> An implant may not integrate or may lose support later. Biological and mechanical complications can occur even after initial healing. <Cite refs="2–5" /></div>
                    </div>
                  </div>

                  <div style={{ marginTop: "0.85rem", paddingTop: "0.65rem", borderTop: "1px solid #F0ECE4", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "#8E8E93" }}>
                      1 of 3 • Risk Awareness
                    </span>
                    <span style={{ color: "#E86337", fontSize: "0.82rem", fontWeight: 600, fontFamily: "var(--font-assistant)" }}>
                      Scroll down for Revision ↓
                    </span>
                  </div>
                </div>

                <div className="sc-stack-media" style={{ position: "relative", minHeight: "280px", overflow: "hidden" }}>
                  <Image
                    src="/assets/allon4/All-on-6-1.2.jpg"
                    alt="Dental implant arch restoration bridge demonstrating precision engineering"
                    fill
                    sizes="(max-width: 900px) 100vw, 740px"
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(28,28,30,0.05) 0%, rgba(28,28,30,0.4) 100%)" }} />
                  <div className="sc-stack-chip" style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem", padding: "0.65rem 1rem", backgroundColor: "rgba(255,255,255,0.94)", backdropFilter: "blur(8px)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.7)" }}>
                    <p style={{ margin: 0, fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "#1C1C1E", fontWeight: 600 }}>
                      Every case is assessed individually before treatment is recommended.
                    </p>
                  </div>
                </div>
              </div>
            </StackingCardItem>

            {/* 3. Revision */}
            <StackingCardItem index={1} topPosition={stackTops[1]} className="mb-32 sm:mb-48 sc-stack-item">
              <div
                className="sc-stack-card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  border: "1px solid #EAE5DC",
                  boxShadow: "0 24px 50px -15px rgba(28,28,30,0.08), 0 0 0 1px rgba(234,229,220,0.7)",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                  minHeight: "min(580px, calc(100vh - 140px))",
                }}
              >
                <div className="sc-stack-text" style={{ padding: "clamp(1.5rem, 3vw, 2.75rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3 className="sc-stack-title" style={{ fontFamily: "var(--font-prata)", fontSize: "var(--fs-card-title)", color: "#1C1C1E", margin: "0 0 0.5rem", lineHeight: 1.2 }}>
                      All on 4 Revision and Failed Implant Treatment
                    </h3>

                    <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.85rem", lineHeight: 1.5, color: "#555", margin: "0 0 0.75rem" }}>
                      We assess existing full arch implants and bridges placed at other clinics or overseas. Revision treatment is individually quoted after assessment.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem 1.5rem", marginTop: "1.1rem", fontFamily: "var(--font-assistant)", fontSize: "0.86rem", lineHeight: 1.55, color: "#555" }}>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Problems we assess</strong>
                        Problems may involve an implant that has failed, inflammation and bone loss around implants, a broken bridge or an uncomfortable bite.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>What to bring</strong>
                        Bring previous records, scans and implant brand details if available.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Possible treatment</strong>
                        Depending on the findings, treatment may involve repairing or replacing the bridge, treating disease, removing failed implants or planning further surgery.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Good to know</strong>
                        Existing implants cannot always be reused, and you must check compatibility with replacement components.
                      </div>
                    </div>

                  </div>

                  <div style={{ marginTop: "0.85rem", paddingTop: "0.65rem", borderTop: "1px solid #F0ECE4", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "#8E8E93" }}>
                      2 of 3 • Revision
                    </span>
                    <span style={{ color: "#E86337", fontSize: "0.82rem", fontWeight: 600, fontFamily: "var(--font-assistant)" }}>
                      Scroll down for Longevity ↓
                    </span>
                  </div>
                </div>

                <div className="sc-stack-media" style={{ position: "relative", minHeight: "280px", overflow: "hidden", backgroundColor: "#000" }}>
                  <Image
                    src="/assets/allon4/all-on-4-904x1024.jpg"
                    alt="Full arch implant bridge assessed for repair or replacement"
                    fill
                    sizes="(max-width: 900px) 100vw, 740px"
                    style={{ objectFit: "contain", objectPosition: "center center" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(28,28,30,0.05) 0%, rgba(28,28,30,0.4) 100%)" }} />
                  <div className="sc-stack-chip" style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem", padding: "0.65rem 1rem", backgroundColor: "rgba(255,255,255,0.94)", backdropFilter: "blur(8px)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.7)" }}>
                    <p style={{ margin: 0, fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "#1C1C1E", fontWeight: 600 }}>
                      Revision cases are assessed and quoted individually.
                    </p>
                  </div>
                </div>
              </div>
            </StackingCardItem>

            {/* 4. Longevity */}
            <StackingCardItem index={2} topPosition={stackTops[2]} className="mb-32 sm:mb-48 sc-stack-item">
              <div
                className="sc-stack-card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  border: "1px solid #EAE5DC",
                  boxShadow: "0 24px 50px -15px rgba(28,28,30,0.08), 0 0 0 1px rgba(234,229,220,0.7)",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                  minHeight: "min(580px, calc(100vh - 140px))",
                }}
              >
                <div className="sc-stack-text" style={{ padding: "clamp(1.5rem, 3vw, 2.75rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h2 className="sc-stack-title" style={{ fontFamily: "var(--font-prata)", fontSize: "var(--fs-card-title)", fontWeight: 400, lineHeight: 1.2, color: "#1C1C1E", margin: "0 0 0.5rem" }}>
                      How Long Do All on 4 Implants and Bridges Last?
                    </h2>
                    <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.88rem", lineHeight: 1.5, color: "#555", margin: "0 0 0.75rem" }}>
                      The implants in the jawbone and the bridge attached to them have different maintenance needs. No individual lifespan is guaranteed. <Cite refs="2,3" />
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem 1.5rem", marginTop: "1.1rem", fontFamily: "var(--font-assistant)", fontSize: "0.86rem", lineHeight: 1.55, color: "#555" }}>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Studies and complications</strong>
                        Long-term studies support the use of All on 4 in selected patients, but they also report biological and mechanical complications. <Cite refs="2,3" />
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Bridge vs implants</strong>
                        A bridge may need repair or replacement while its implants remain usable.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Regular reviews</strong>
                        Regular reviews assess the gums, bone support, bite, bridge and screws.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>What affects ongoing care</strong>
                        Cleaning access, smoking, health and bite forces all influence ongoing care. Ask about likely maintenance and replacement costs before treatment. <Cite refs="4,5" />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "0.85rem", paddingTop: "0.65rem", borderTop: "1px solid #F0ECE4", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "#8E8E93" }}>3 of 3 • Longevity</span>
                    <span style={{ color: "#E86337", fontSize: "0.82rem", fontWeight: 600, fontFamily: "var(--font-assistant)" }}>Continue to meet your dentists ↓</span>
                  </div>
                </div>
                <div className="sc-stack-media" style={{ position: "relative", minHeight: "280px", overflow: "hidden" }}>
                  <Image src="/assets/allon4/dental-implants-model.jpg" alt="Dental implant model showing a fixed implant restoration" fill sizes="(max-width: 900px) 100vw, 740px" style={{ objectFit: "cover", objectPosition: "center center" }} />
                </div>
              </div>
            </StackingCardItem>

            </>}
            {/* 4. Why Patients Choose Smile Concepts */}
            {part === "why" && <StackingCardItem index={0} topPosition={stackTops[0]} className="mb-12 sc-stack-item">
              <div
                className="sc-stack-card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  border: "none",
                  boxShadow: "0 24px 60px -20px rgba(28,28,30,0.16)",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                  minHeight: "min(580px, calc(100vh - 140px))",
                }}
              >
                <div className="sc-stack-text" style={{ padding: "clamp(1.5rem, 3vw, 2.75rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h2 className="sc-stack-title" style={{ fontFamily: "var(--font-prata)", fontSize: "var(--fs-card-title)", color: "#1C1C1E", margin: "0 0 0.5rem", lineHeight: 1.2 }}>
                      Why Patients Choose Smile Concepts
                    </h2>

                    <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.88rem", lineHeight: 1.5, color: "#555", margin: "0 0 0.75rem" }}>
                      Choosing all on 4 procedure is a significant decision. Patients want experienced care, clear communication, and a treatment plan tailored to their needs.
                    </p>

                    <div className="sc-why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.1rem 1.5rem", fontSize: "0.86rem", lineHeight: 1.55, color: "#555", marginTop: "1.1rem", fontFamily: "var(--font-assistant)" }}>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Over 25 Years of Experience</strong> Dr Manish Shah and Dr Kinnar Shah each bring over 25 years of experience with a strong focus on complex restorative and implant cases.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>3D Imaging and Digital Planning</strong> CBCT imaging is standard on every all on 4 procedure we do. It gives us a detailed picture of your bone before anything happens, and we use guided surgical planning to improve precision.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Everything Under One Roof</strong> Consultation, imaging, surgery, temporary teeth, final restoration, and ongoing maintenance all happen here. One team that knows your case the whole way through.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Experience With Complex Cases</strong> Significant bone loss, years of denture wear, multiple failing teeth. We see these regularly and plan properly for them.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Sedation Available</strong> If the procedure makes you very anxious, sedation is available. You do not have to push through something that really stresses you out.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Multiple Implant Systems</strong> We work across leading systems including Neoss, DIO, Nobel Biocare, Straumann, and many other leading implant brands, and accept revision cases from other clinics and overseas.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Flexible Ways to Pay</strong> Interest-free payment plans up to 48 months and up to $30,000 (eligibility applies), plus guidance on superannuation access for eligible patients.
                      </div>
                      <div style={{ borderLeft: "2px solid #F2C9B8", paddingLeft: "0.8rem" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", fontSize: "0.92rem", marginBottom: "0.15rem" }}>Trusted by Sydney Patients</strong> An award winning Sydney CBD dental practice with {GOOGLE_REVIEW_COUNT} Google reviews.
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: "0.85rem", paddingTop: "0.65rem", borderTop: "none", display: "flex", alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                    <a
                      href="#book"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.55rem 1.15rem",
                        backgroundColor: "#E86337",
                        color: "#ffffff",
                        borderRadius: "8px",
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.84rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        boxShadow: "0 4px 14px rgba(232, 99, 55, 0.3)",
                      }}
                    >
                      <span>Book Consultation</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="sc-stack-media" style={{ position: "relative", minHeight: "260px", overflow: "hidden" }}>
                  <Image
                    src="/assets/allon4/sunset-couple-hd.jpg"
                    alt="Happy couple smiling after successful Smile Concepts All-on-4 transformation"
                    fill
                    sizes="(max-width: 900px) 100vw, 740px"
                    style={{ objectFit: "cover", objectPosition: "35% center" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(28,28,30,0.05) 0%, rgba(28,28,30,0.4) 100%)" }} />
                  <div className="sc-stack-chip" style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem", padding: "0.65rem 1rem", backgroundColor: "rgba(255,255,255,0.94)", backdropFilter: "blur(8px)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.7)" }}>
                    <p style={{ margin: 0, fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "#1C1C1E", fontWeight: 600 }}>
                      An award winning Sydney CBD practice with {GOOGLE_REVIEW_COUNT} Google reviews.
                    </p>
                  </div>
                </div>
              </div>
            </StackingCardItem>}
          </StackingCards>
        </div>}
      </div>
    </section>
  );
}
