"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

const galleryItems = [
  { img: images.gallery.sc2,             label: "Full Arch All-on-4 Transformation", span: true },
  { img: images.allon4.allOn4,           label: "All-on-4 Precision Framework" },
  { img: images.gallery.sc3,             label: "Immediate Smile Restoration" },
  { img: images.allon4.bridge,           label: "Fixed Implant Bridge" },
  { img: images.gallery.sc4,             label: "Upper Arch Fixed Teeth" },
  { img: images.allon4.allOn6,           label: "All-on-6 Full Arch Solution" },
  { img: images.gallery.sc5,             label: "Permanent Zirconia Smile" },
  { img: images.allon4.elderCouple,      label: "Restored Chewing & Confidence" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="gallery"
      style={{ background: "#f9f9f9", padding: "clamp(4rem, 8vw, 8rem) 0", overflow: "hidden" }}
    >
      <div className="container-sc">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
          Clinical Results & Case Studies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
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
          All-on-4 Transformations
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ width: "3rem", height: "2px", background: "#F47A4A", margin: "0 auto 1rem", transformOrigin: "left" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            textAlign: "center",
            color: "#7A7A7A",
            fontFamily: "var(--font-assistant)",
            fontWeight: 300,
            fontSize: "0.92rem",
            lineHeight: 1.7,
            maxWidth: "480px",
            margin: "0 auto 3rem",
          }}
        >
          Witness the life-changing results of immediate, fixed full-arch teeth performed by Dr. Manish Shah and Dr. Kinnar Shah in Sydney.
        </motion.p>

        {/* Grid */}
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "220px",
            gap: "0.75rem",
          }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                cursor: "pointer",
                gridColumn: i === 0 ? "span 2" : undefined,
                gridRow: i === 0 ? "span 2" : undefined,
              }}
              className="gallery-item"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                className="gallery-img"
              />
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                  opacity: 0,
                  transition: "opacity 0.4s",
                }}
              />
              <div
                className="gallery-label"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1rem",
                  transform: "translateY(8px)",
                  opacity: 0,
                  transition: "all 0.4s",
                }}
              >
                <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.82rem", color: "#fff", fontWeight: 500 }}>
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ marginTop: "2.5rem", textAlign: "center" }}
        >
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.875rem 2rem",
              background: "#F47A4A",
              color: "#fff",
              fontFamily: "var(--font-assistant)",
              fontWeight: 500,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "background 0.25s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#e06934")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#F47A4A")}
          >
            View Full Smile Gallery
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 160px !important;
          }
          .gallery-grid > div:first-child {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }
        }
        .gallery-item:hover .gallery-img { transform: scale(1.08); }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
        .gallery-item:hover .gallery-label { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  );
}
