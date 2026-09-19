"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

const steps = [
  {
    num: "01",
    title: "3D CBCT & Digital Planning",
    timeframe: "Day 1: Consultation",
    desc: "We perform a comprehensive 3D cone-beam CT scan and digital intraoral mapping. Our surgical team models your exact bone topography with sub-millimeter precision to verify zero-bone-graft candidacy.",
    image: images.misc.pointScanBone,
    caption: "3D Computerized Bone Topography & Virtual Guided Placement",
  },
  {
    num: "02",
    title: "Gentle Computer-Guided Surgery",
    timeframe: "Procedure Day",
    desc: "Using customized 3D surgical guides, 4 Nobel Biocare implants are precisely anchored at 45° angles. Performed under gentle sleep/twilight sedation for a completely relaxed, pain-free experience.",
    image: images.practice.p1,
    caption: "Surgical Suite Sedation & Computer-Guided Keyhole Placement",
  },
  {
    num: "03",
    title: "Immediate Fixed Teeth Loaded",
    timeframe: "Within 1 to 3 Days",
    desc: "Your customized, natural-looking fixed teeth are securely screwed into the implants. You leave our clinic with immediate chewing capability and an instantly radiant smile.",
    image: images.allon4.elderCouple,
    caption: "Immediate Aesthetic & Functional Restoration",
  },
  {
    num: "04",
    title: "Final Precision Zirconia Smile",
    timeframe: "Month 3–6",
    desc: "After osseointegration completes, we deliver your final hand-crafted porcelain or high-density zirconia bridge—designed to resist staining and wear for decades to come.",
    image: images.gallery.coupleSmiling,
    caption: "Lifelong Strength, Natural Translucency & Perfect Alignment",
  },
];

export default function VisualJourney() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={ref}
      id="journey"
      style={{
        backgroundColor: "#ffffff",
        color: "#1A1A24",
        padding: "clamp(4.5rem, 7vw, 7rem) clamp(1rem, 4vw, 2.5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1rem, 3.5vw, 3rem)" }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#F47A4A",
              marginBottom: "0.75rem",
              fontFamily: "var(--font-assistant), sans-serif",
            }}
          >
            Process
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-prata), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              lineHeight: 1.15,
              fontWeight: 400,
              color: "#1A1A24",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            All on Four Dental Implants Sydney Procedure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "clamp(0.98rem, 1.25vw, 1.12rem)",
              lineHeight: 1.65,
              color: "#5A5A66",
              fontWeight: 400,
              fontFamily: "var(--font-assistant), sans-serif",
              margin: 0,
            }}
          >
            All on 4 Dental Implants procedure was never this easy! Call today and book your appointment at our Sydney CBD clinic for gentle sleep dentistry and computer-guided placement.
          </motion.p>
        </div>

        {/* Interactive Step Explorer */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "clamp(1.5rem, 4vw, 3.5rem)",
            alignItems: "center",
          }}
        >
          {/* Steps List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    padding: isMobile ? "1.15rem 1.25rem" : "1.35rem 1.65rem",
                    borderRadius: "16px",
                    backgroundColor: isSelected ? "#FFFDFC" : "#FAFAF8",
                    border: isSelected
                      ? "1.5px solid rgba(244, 122, 74, 0.6)"
                      : "1px solid #ECEAE4",
                    boxShadow: isSelected
                      ? "0 10px 28px rgba(244, 122, 74, 0.09)"
                      : "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                      <span
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 800,
                          color: isSelected ? "#E86337" : "#9999A5",
                          fontFamily: "var(--font-assistant), sans-serif",
                        }}
                      >
                        {step.num}
                      </span>
                      <h3
                        style={{
                          fontSize: isMobile ? "1rem" : "1.1rem",
                          fontWeight: isSelected ? 700 : 600,
                          color: isSelected ? "#1A1A24" : "#33333F",
                          margin: 0,
                          fontFamily: "var(--font-assistant), sans-serif",
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <span
                      style={{
                        fontSize: "0.72rem",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "999px",
                        backgroundColor: isSelected
                          ? "rgba(244, 122, 74, 0.14)"
                          : "rgba(0, 0, 0, 0.05)",
                        color: isSelected ? "#E86337" : "#6E6E7D",
                        fontWeight: 700,
                        fontFamily: "var(--font-assistant), sans-serif",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {step.timeframe}
                    </span>
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontSize: "0.94rem",
                          lineHeight: 1.65,
                          color: "#555562",
                          margin: "0.75rem 0 0",
                          fontFamily: "var(--font-assistant), sans-serif",
                        }}
                      >
                        {step.desc}
                      </p>

                      {/* On Mobile: Inline Visual Preview so user doesn't miss the photo */}
                      {isMobile && (
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "220px",
                            borderRadius: "12px",
                            overflow: "hidden",
                            marginTop: "1rem",
                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                          }}
                        >
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            sizes="100vw"
                            style={{ objectFit: "cover" }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              padding: "0.75rem 1rem",
                              background:
                                "linear-gradient(to top, rgba(10, 12, 20, 0.85) 0%, transparent 100%)",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "0.78rem",
                                color: "#ffffff",
                                margin: 0,
                                fontWeight: 600,
                                fontFamily: "var(--font-assistant), sans-serif",
                              }}
                            >
                              {step.caption}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Visual Preview Card */}
          {!isMobile && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(380px, 42vw, 480px)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  backgroundColor: "#F8F8FA",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                }}
              >
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  fill
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                />

                {/* Bottom Caption Overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.5rem",
                    background:
                      "linear-gradient(to top, rgba(15, 17, 26, 0.92) 0%, rgba(15, 17, 26, 0.4) 60%, transparent 100%)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#F47A4A",
                      fontWeight: 800,
                      marginBottom: "0.25rem",
                      fontFamily: "var(--font-assistant), sans-serif",
                    }}
                  >
                    Step {steps[activeStep].num} Preview
                  </span>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#ffffff",
                      margin: 0,
                      fontWeight: 600,
                      fontFamily: "var(--font-assistant), sans-serif",
                    }}
                  >
                    {steps[activeStep].caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
