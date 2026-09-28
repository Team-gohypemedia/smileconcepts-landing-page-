"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const affiliations = [
  { name: "Australian Dental Association", src: "/assets/affiliations/ADA-logo.png" },
  { name: "International Congress of Oral Implantologists", src: "/assets/affiliations/ICOI-logo.png" },
  { name: "International Society of Computerized Dentistry", src: "/assets/affiliations/ISCD-logo.png" },
  { name: "International Association of Orthodontics", src: "/assets/affiliations/International-Association-of-Orthodontics-logo.png" },
  { name: "Australian Sleep Association", src: "/assets/affiliations/Australian-Sleep-Association-logo.png" },
  { name: "Australian Medical Association", src: "/assets/affiliations/Australian-Medical-Association-logo.png" },
  { name: "Australasian Society of Implant Dentistry", src: "/assets/affiliations/ASID-logo.png" },
  { name: "Australasian Society of Cosmetic Medicine", src: "/assets/affiliations/ASCM-logo.png" },
  { name: "Australasian Osseointegration Society", src: "/assets/affiliations/AOS-logo.png" },
  { name: "American Academy of Craniofacial Pain", src: "/assets/affiliations/American-Academy-of-Craniofacial-Pain-logo.png" },
  { name: "Academy of Clinical Sleep Disorders Dentistry", src: "/assets/affiliations/ACSDD-logo.png" },
  { name: "Australasian College of Nutritional & Environmental Medicine", src: "/assets/affiliations/ACNEM-logo.png" },
  { name: "Australian Breath Clinic", src: "/assets/affiliations/ABA-logo.png" },
  { name: "American Academy of Dental Sleep Medicine", src: "/assets/affiliations/AADSM-logo.png" },
  { name: "AACP", src: "/assets/affiliations/AACP-logo.png" },
  { name: "American Academy of Cosmetic Dentistry", src: "/assets/affiliations/AACD-logo.png" },
  { name: "A5M", src: "/assets/affiliations/A5M-logo.png" },
];

const tickerList = [...affiliations, ...affiliations];

export default function Affiliations() {
  return (
    <section
      style={{
        background: "#FAF8F5",
        borderTop: "1px solid #ECE7E1",
        borderBottom: "1px solid #ECE7E1",
        padding: "3.5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-sc" style={{ marginBottom: "2rem", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-assistant)",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#F47A4A",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          Recognised Excellence
        </p>
        <h3
          style={{
            fontFamily: "var(--font-prata)",
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#231F20",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          Our Accreditations &amp; Professional Affiliations
        </h3>
      </div>

      {/* Infinite logo track */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {/* Left & Right gradient masks */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "5rem",
            zIndex: 2,
            background: "linear-gradient(to right, #FAF8F5, transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "5rem",
            zIndex: 2,
            background: "linear-gradient(to left, #FAF8F5, transparent)",
            pointerEvents: "none",
          }}
        />

        <div className="affiliations-marquee">
          {tickerList.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="affiliation-logo-item"
              title={item.name}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "default",
                padding: "0 0.75rem",
                transition: "transform 0.25s ease, opacity 0.25s ease",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "clamp(160px, 15vw, 220px)",
                  height: "clamp(55px, 6vw, 75px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="220px"
                  style={{
                    objectFit: "contain",
                    filter: "none",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .affiliations-marquee {
          display: flex;
          align-items: center;
          gap: 3.5rem;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
        }
        .affiliations-marquee:hover {
          animation-play-state: paused;
        }
        .affiliation-logo-item:hover {
          transform: scale(1.08);
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
