"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { ChevronRight } from "lucide-react";

const tabs = [
  {
    id: "cosmetic",
    label: "Cosmetic Dentistry",
    services: [
      { name: "Porcelain Veneers", img: images.services.porcelainVeneers },
      { name: "Invisalign", img: images.services.invisalign },
      { name: "Clear Braces", img: images.services.clearBraces },
      { name: "Gum Lift", img: images.services.gumLift },
      { name: "Dental Veneers", img: images.services.dentalVeneers },
      { name: "Cosmetic Solutions", img: images.services.cosmeticProblems },
    ],
  },
  {
    id: "implants",
    label: "Dental Implants",
    services: [
      { name: "Dental Implants", img: images.services.dentalImplants },
      { name: "All Teeth on Four", img: images.services.allOnFour },
      { name: "Bone Grafting", img: images.services.grafting },
      { name: "Implant Cost Guide", img: images.services.implantCost },
      { name: "Missing Teeth", img: images.services.missingTeeth },
      { name: "Implant General", img: images.services.implantGeneral },
    ],
  },
  {
    id: "laser",
    label: "Laser Dentistry",
    services: [
      { name: "Laser Gum Disease", img: images.services.laserGumDisease },
      { name: "Gum Disease Sydney", img: images.services.gumDiseaseSydney },
      { name: "Laser Root Canal", img: images.services.laserRootCanal },
      { name: "Laser Sleep", img: images.services.laserSleep },
      { name: "Gum Solutions", img: images.services.gumSolutions },
      { name: "Gum Disease Treatment", img: images.services.gumDiseaseTreatment },
    ],
  },
  {
    id: "general",
    label: "General Dentistry",
    services: [
      { name: "General Dentistry", img: images.services.generalDentistry },
      { name: "Emergency Dentist", img: images.services.emergencyDentist },
      { name: "Wisdom Teeth", img: images.services.wisdomTeeth },
      { name: "Laser Root Canal", img: images.services.laserRootCanal2 },
      { name: "Old Fillings", img: images.services.oldFillings },
      { name: "Payment Plans", img: images.services.paymentPlans },
    ],
  },
  {
    id: "tmj",
    label: "TMJ & Sleep",
    services: [
      { name: "Sleep Dentistry", img: images.services.sleepDentistry },
      { name: "Sleep Apnea", img: images.services.sleepApnea },
      { name: "Snoring Treatment", img: images.services.snoring },
      { name: "TMJ Pain", img: images.services.tmjPain },
      { name: "Orthodontic Braces", img: images.services.orthodonticsBraces },
      { name: "Aligners", img: images.services.aligners },
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="services"
      style={{ background: "#ffffff", padding: "clamp(4rem, 8vw, 8rem) 0" }}
    >
      <div className="container-sc">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            color: "#F47A4A",
            fontSize: "0.72rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            fontFamily: "var(--font-assistant)",
            fontWeight: 500,
          }}
        >
          What We Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            textAlign: "center",
            fontFamily: "var(--font-prata)",
            fontWeight: 400,
            fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
            color: "#3c3c3c",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}
        >
          Our Services
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            width: "3rem",
            height: "2px",
            background: "#F47A4A",
            margin: "0 auto 3rem",
            transformOrigin: "left",
          }}
        />

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
          role="tablist"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              style={{
                padding: "0.65rem 1.25rem",
                fontFamily: "var(--font-prata)",
                fontWeight: 400,
                fontSize: "0.82rem",
                cursor: "pointer",
                border: active === i ? "none" : "1px solid #e0e0e0",
                background: active === i ? "#F47A4A" : "transparent",
                color: active === i ? "#fff" : "#4f4f4f",
                transition: "all 0.25s",
                boxShadow: active === i ? "0 4px 18px rgba(244,122,74,0.3)" : "none",
                letterSpacing: "0.02em",
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="services-grid"
            role="tabpanel"
          >
            {tabs[active].services.map((svc, i) => (
              <motion.a
                key={svc.name}
                href="#"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  position: "relative",
                  display: "block",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={svc.img}
                  alt={svc.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                  className="services-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-prata)",
                      fontWeight: 400,
                      fontSize: "0.95rem",
                      color: "#fff",
                      lineHeight: 1.3,
                    }}
                  >
                    {svc.name}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginTop: "0.5rem" }}>
                    <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.72rem", color: "#F47A4A" }}>Learn more</span>
                    <ChevronRight size={12} color="#F47A4A" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ marginTop: "2.5rem", textAlign: "center" }}
        >
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              border: "2px solid #F47A4A",
              color: "#F47A4A",
              fontFamily: "var(--font-assistant)",
              fontWeight: 500,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#F47A4A"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#F47A4A"; }}
          >
            View All Popular Treatments
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .services-img:hover { transform: scale(1.08); }
      `}</style>
    </section>
  );
}
