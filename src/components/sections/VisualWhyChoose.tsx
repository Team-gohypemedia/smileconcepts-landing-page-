"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    title: "Top Rated Dentist",
    desc: "Consistently rated 5.0 stars with hundreds of verified reviews from full-arch implant patients across Sydney and NSW.",
  },
  {
    title: "Free Parking in Sydney CBD",
    desc: "We provide validated complimentary parking for our patients at Citigroup Centre, right beside 210 Pitt St.",
  },
  {
    title: "Experienced Dentists",
    desc: "Over 40 years of clinical mastery led by Dr. Manish Shah and Dr. Kinnar Shah in complex dental implant surgery.",
  },
  {
    title: "Smile Now, Pay Later",
    desc: "Flexible 0% interest payment plans and complete assistance accessing early release of Superannuation via SuperCare.",
  },
  {
    title: "Exceptional Results",
    desc: "Custom-shaded, computer-milled zirconia teeth that restore 100% chew power and look completely natural.",
  },
];

export default function VisualWhyChoose() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="why-choose"
      style={{
        backgroundColor: "#FAF8F5",
        padding: "clamp(5rem, 8vw, 7.5rem) 0",
        position: "relative",
      }}
    >
      <div className="container-sc">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 4rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#E05A2B",
              marginBottom: "0.85rem",
            }}
          >
            Sydney CBD Excellence
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#181926",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Why Choose Smile Concepts?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "clamp(1.05rem, 1.3vw, 1.18rem)",
              lineHeight: 1.65,
              color: "#606275",
              fontWeight: 400,
            }}
          >
            A dedicated team, caring staff, experienced dentists, and top-rated infrastructure
            make us the go-to place for the best All on 4 dental implants procedure in Sydney.
          </motion.p>
        </div>

        {/* 5 Hairline Horizontal Columns with numbering (No Generic Icon Boxes) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem 2rem",
            paddingTop: "1rem",
          }}
        >
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-prata)",
                  fontSize: "1.35rem",
                  color: "#E05A2B",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                0{idx + 1}
              </span>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#181926",
                  marginBottom: "0.6rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  color: "#606275",
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
