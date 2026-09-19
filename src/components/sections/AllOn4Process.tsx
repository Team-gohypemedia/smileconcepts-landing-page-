"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Stethoscope, Clock, Sparkles, Smile, ArrowRight, Phone } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Consultation, 3D CBCT & Digital Design",
    subtitle: "Step 1",
    desc: "Your journey begins with an in-depth clinical consultation. We perform advanced 3D CBCT bone scans, intraoral digital impressions, and a 3D Digital Smile Design to map the optimal implant placement and preview your final smile.",
    icon: <Calendar size={22} />,
  },
  {
    step: "02",
    title: "Computer-Guided Implant Placement",
    subtitle: "Step 2",
    desc: "Using high-precision 3D surgical guides, our expert implantologists gently place four titanium implants into key structural zones. Local anaesthesia and sleep dentistry/sedation options ensure a completely comfortable, pain-free experience.",
    icon: <Stethoscope size={22} />,
  },
  {
    step: "03",
    title: "Immediate Provisional Teeth Placement",
    subtitle: "Step 3",
    desc: "You will never walk out of our clinic without teeth. In as little as 1 to 3 days, a high-strength provisional fixed bridge is securely attached to your implants, allowing you to smile, speak, and eat soft foods with immediate confidence.",
    icon: <Clock size={22} />,
  },
  {
    step: "04",
    title: "Gentle Healing & Osseointegration",
    subtitle: "Step 4",
    desc: "Over the next 3 to 6 months, the biocompatible titanium implants naturally fuse with your jawbone in a biological process called osseointegration. This creates an immovable foundation that permanently halts bone loss.",
    icon: <Sparkles size={22} />,
  },
  {
    step: "05",
    title: "Final High-Strength Bridge & Forever Smile",
    subtitle: "Step 5",
    desc: "Once fully integrated, your permanent custom restoration (crafted from monolithic zirconia or titanium-reinforced composite) is fitted and polished to perfection. Your permanent teeth look, feel, and function just like natural teeth.",
    icon: <Smile size={22} />,
  },
];

export default function AllOn4Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="procedure"
      style={{
        padding: "clamp(4.5rem, 8vw, 7.5rem) 0",
        backgroundColor: "#0C0D17",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244, 122, 74, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244, 122, 74, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-sc" style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 4.5rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#F47A4A",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            Streamlined 5-Step Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-prata), serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#ffffff",
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            All on Four Dental Implants Sydney Procedure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            At Smile Concepts Sydney CBD, we have refined the All-on-4 treatment into a gentle, predictable experience designed to deliver maximum comfort and stunning results in minimal time.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.75rem",
            marginBottom: "4.5rem",
          }}
        >
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + idx * 0.1, duration: 0.6 }}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                borderRadius: "14px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
                e.currentTarget.style.borderColor = "#F47A4A";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-prata), serif",
                    fontSize: "2.2rem",
                    color: "rgba(244, 122, 74, 0.5)",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </span>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(244, 122, 74, 0.15)",
                    color: "#F47A4A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>
              </div>

              <span
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#F47A4A",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                }}
              >
                {item.subtitle}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.35,
                  marginBottom: "0.85rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.65)",
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            backgroundColor: "rgba(244, 122, 74, 0.08)",
            border: "1px solid rgba(244, 122, 74, 0.3)",
            borderRadius: "14px",
            padding: "2rem 2.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "var(--font-prata), serif",
                fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
                color: "#ffffff",
                marginBottom: "0.4rem",
              }}
            >
              All on 4 Dental Implants procedure was never this easy!
            </h4>
            <p
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.75)",
                margin: 0,
              }}
            >
              Book your complimentary 3D scan and initial implant consultation today.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="tel:0292677777"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 1.6rem",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#ffffff",
                fontFamily: "var(--font-assistant)",
                fontWeight: 600,
                fontSize: "0.92rem",
                textDecoration: "none",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.2s",
              }}
            >
              <Phone size={15} color="#F47A4A" />
              02 9267 7777
            </a>
            <a
              href="#book"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 1.8rem",
                background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",
                color: "#ffffff",
                fontFamily: "var(--font-assistant)",
                fontWeight: 700,
                fontSize: "0.92rem",
                textDecoration: "none",
                borderRadius: "4px",
                boxShadow: "0 4px 14px rgba(244, 122, 74, 0.4)",
              }}
            >
              Book Consultation
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
