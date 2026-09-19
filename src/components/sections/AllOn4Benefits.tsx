"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Anchor,
  Sparkles,
  Zap,
  ShieldAlert,
  DollarSign,
  CheckCircle2,
  Smile,
  Utensils,
  Award,
  Clock,
} from "lucide-react";

const reasonsBetter = [
  {
    icon: Anchor,
    title: "Permanent Teeth",
    desc: "Say goodbye to the hassle of removable dentures. All on 4 Dental Implants give you a fixed, non-removable and rock-solid set of teeth anchored directly to your jawbone.",
  },
  {
    icon: Sparkles,
    title: "Natural Look and Feel",
    desc: "All on four dental implants look, feel and function like your natural teeth. They support your facial contours, lips, and cheeks so nobody will ever notice the difference.",
  },
  {
    icon: Zap,
    title: "Quick Results (1–3 Days)",
    desc: "In most cases, extensive jawbone grafting is not necessary. You receive your new provisional teeth immediately after surgery rather than waiting 6–12 months.",
  },
  {
    icon: ShieldAlert,
    title: "No Bone Grafting in Most Cases",
    desc: "By tilting the two rear implants at a 45-degree angle, we utilize existing dense bone, saving you from invasive sinus lifts, bone grafts, and extra healing time.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Full Arch",
    desc: "A patient needs just 4 implants rather than 8 to 10 per arch. This brings down the treatment costs considerably and minimizes surgical invasiveness.",
  },
];

const gameChangers = [
  {
    icon: CheckCircle2,
    title: "No More Denture Slippage",
    text: "Never worry about slipping, clicking, or falling out while speaking or laughing in public.",
  },
  {
    icon: Clock,
    title: "No Bone Grafting Needed",
    text: "Engineered angled placement bypasses bone loss, reducing surgical procedures and costs.",
  },
  {
    icon: Utensils,
    title: "Freedom to Eat & Taste",
    text: "No bulky plastic covering the roof of your mouth. Enjoy the true temperature and flavour of food.",
  },
  {
    icon: Smile,
    title: "Regain Full Confidence",
    text: "Restore your youthful facial height, reduce sunken lips, and laugh freely without embarrassment.",
  },
  {
    icon: Award,
    title: "Long-Lasting Predictable Results",
    text: "Backed by 98.6% clinical success rates and lifetime osseointegration when properly maintained.",
  },
];

export default function AllOn4Benefits() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="benefits"
      style={{
        backgroundColor: "#FAF7F5",
        padding: "clamp(4.5rem, 8vw, 7.5rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background element */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(244, 122, 74, 0.35), transparent)",
        }}
      />

      <div className="container-sc">
        {/* Section 1 Header: Why All on 4 Dental Implants are better */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontFamily: "var(--font-assistant)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F47A4A",
              marginBottom: "0.5rem",
            }}
          >
            Advantages of Full Arch Implants
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 400,
              color: "#2C2C2C",
              lineHeight: 1.25,
              marginBottom: "1rem",
            }}
          >
            Why All on 4 Dental Implants are Better?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: "3.5rem",
              height: "3px",
              backgroundColor: "#F47A4A",
              margin: "0 auto 1.5rem",
              borderRadius: "2px",
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            style={{
              fontFamily: "var(--font-assistant)",
              fontSize: "1.05rem",
              color: "#666666",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Say goodbye to the hassle of loose dentures. All on 4 Dental Implants offer a fixed, predictable, and permanent full arch transformation designed to restore your quality of life.
          </motion.p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4.5rem",
          }}
        >
          {reasonsBetter.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "2rem 1.75rem",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 36px rgba(244, 122, 74, 0.12)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(244, 122, 74, 0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 0, 0, 0.06)";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(244, 122, 74, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <IconComponent size={26} color="#F47A4A" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: "#2C2C2C",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.92rem",
                    color: "#666666",
                    lineHeight: 1.7,
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Section 2 Banner: Why All on 4 Implants are a Game-Changer? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            backgroundColor: "#2C2C2C",
            borderRadius: "24px",
            padding: "clamp(2.5rem, 5vw, 4rem)",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Subtle Orange Glow Accent */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(244, 122, 74, 0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "820px", marginBottom: "2.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#F47A4A",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Enjoy the Smile Concepts Difference
            </span>
            <h3
              style={{
                fontFamily: "var(--font-prata)",
                fontSize: "clamp(1.75rem, 3.2vw, 2.6rem)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.3,
                marginBottom: "1rem",
              }}
            >
              Why All on 4 Implants are a Game-Changer?
            </h3>
            <p
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "1.05rem",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.75,
                fontWeight: 300,
                margin: 0,
              }}
            >
              A dedicated team, caring staff, experienced dentists, and top-rated infrastructure make us the go-to place for the best All on 4 dental implants procedure in Sydney. We bring 30+ years of surgical experience to the table.
            </p>
          </div>

          {/* 5 Pillars Horizontal Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {gameChangers.map((gc, i) => {
              const Icon = gc.icon;
              return (
                <div
                  key={gc.title}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "14px",
                    padding: "1.5rem",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(244, 122, 74, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <Icon size={20} color="#F47A4A" />
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#ffffff",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {gc.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.85rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {gc.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
