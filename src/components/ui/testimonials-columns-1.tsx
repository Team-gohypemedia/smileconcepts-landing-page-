"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
  rating?: number;
  location?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 18,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          paddingBottom: "1.25rem",
          background: "transparent",
        }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, rating = 5, location }, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.5rem 1.65rem",
                    borderRadius: "18px",
                    border: "1px solid #E8E5DF",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)",
                    maxWidth: "370px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.95rem",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#F47A4A";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 12px 32px rgba(244, 122, 74, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E8E5DF";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 6px 24px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)";
                  }}
                >
                  {/* Star Rating */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.2rem", color: "#F59E0B" }}>
                    {[...Array(rating)].map((_, starI) => (
                      <span key={starI} style={{ fontSize: "0.95rem", lineHeight: 1 }}>
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p
                    style={{
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "0.9rem",
                      color: "#33333F",
                      lineHeight: 1.65,
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    &ldquo;{text}&rdquo;
                  </p>

                  {/* Patient Profile Row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      paddingTop: "0.85rem",
                      borderTop: "1px solid #F0ECE6",
                    }}
                  >
                    <img
                      width={42}
                      height={42}
                      src={image}
                      alt={name}
                      style={{
                        height: "42px",
                        width: "42px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid rgba(244, 122, 74, 0.35)",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-assistant), sans-serif",
                          fontWeight: 700,
                          fontSize: "0.92rem",
                          color: "#11121E",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.3,
                        }}
                      >
                        {name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-assistant), sans-serif",
                          fontSize: "0.78rem",
                          color: "#F47A4A",
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        {role} {location ? `· ${location}` : ""}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
