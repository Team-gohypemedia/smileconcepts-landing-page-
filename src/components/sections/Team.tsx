"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

const doctors = [
  {
    name: "Dr. Manish Shah",
    title: "Principal Implant Dentist & Founder",
    img: images.team.drManishShah,
    specialties: ["All-on-4 Implants", "Full Arch Rehabilitation", "40+ Years Experience"],
    bio: "With over 40 years of clinical excellence, Dr. Manish Shah is one of Sydney's most respected full-arch implant practitioners. He has successfully placed thousands of dental implants, delivering predictable, lifelong smile restorations.",
  },
  {
    name: "Dr. Kinnar Shah",
    title: "Senior Implant & Cosmetic Surgeon",
    img: images.team.drKinnarShah,
    specialties: ["Guided Implant Surgery", "Zirconia Bridges", "Immediate Loading"],
    bio: "Dr. Kinnar Shah combines advanced 3D CBCT digital planning with micro-surgical precision. His focus on All-on-4 full arch restorations ensures patients receive functional, beautiful new teeth in as little as 1 to 3 days.",
  },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="team"
      style={{ background: "#ffffff", padding: "clamp(4rem, 8vw, 8rem) 0", overflow: "hidden" }}
    >
      <div className="container-sc">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", color: "#F47A4A", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem", fontFamily: "var(--font-assistant)", fontWeight: 500 }}
        >
          Expert Care
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ textAlign: "center", fontFamily: "var(--font-prata)", fontWeight: 400, fontSize: "clamp(1.9rem, 4vw, 3.2rem)", color: "#3c3c3c", lineHeight: 1.2, marginBottom: "0.75rem" }}
        >
          Meet Our Dentists
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ width: "3rem", height: "2px", background: "#F47A4A", margin: "0 auto 3.5rem", transformOrigin: "left" }}
        />

        <div
          className="team-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: "900px", margin: "0 auto" }}
        >
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
              style={{
                background: "#f9f9f9",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.4s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.14)")}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)")}
            >
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.6s ease" }}
                  className="team-img"
                />
              </div>
              <div style={{ padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-prata)", fontWeight: 400, fontSize: "1.25rem", color: "#3c3c3c", marginBottom: "0.25rem" }}>{doc.name}</h3>
                <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F47A4A", marginBottom: "0.875rem" }}>{doc.title}</p>
                <p style={{ fontFamily: "var(--font-assistant)", fontWeight: 300, fontSize: "0.88rem", color: "#7A7A7A", lineHeight: 1.7, marginBottom: "1rem" }}>{doc.bio}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {doc.specialties.map(sp => (
                    <span key={sp} style={{ padding: "0.3rem 0.75rem", background: "rgba(244,122,74,0.08)", border: "1px solid rgba(244,122,74,0.2)", borderRadius: "999px", fontFamily: "var(--font-assistant)", fontSize: "0.72rem", color: "#F47A4A" }}>{sp}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
        .team-img:hover { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
