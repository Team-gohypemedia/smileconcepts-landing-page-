"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TestimonialItem {
  text: string;
  name: string;
  initials?: string;
  avatarColor?: string;
  image?: string;
  role?: string;
  rating?: number;
  location?: string;
  date?: string;
  url?: string;
}

// Google G Multi-Color SVG Icon
export const GoogleGIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

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
          duration: props.duration || 22,
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
              {props.testimonials.map((item, i) => {
                const {
                  text,
                  name,
                  initials,
                  avatarColor = "#4285F4",
                  image,
                  rating = 5,
                  date,
                } = item;

                // Derive initials if not provided
                const displayInitials =
                  initials ||
                  name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

                return (
                  <div
                    key={`${index}-${i}`}
                    className="sc-rv-card"
                    style={{
                      padding: "1.45rem 1.65rem",
                      borderRadius: "18px",
                      border: "1px solid #E8E5DF",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 6px 24px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)",
                      maxWidth: "370px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.95rem",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#4285F4";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 14px 34px rgba(66, 133, 244, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#E8E5DF";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 6px 24px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)";
                    }}
                  >
                    {/* Header: Star Rating */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.2rem",
                        color: "#FBBC05",
                      }}
                    >
                      {[...Array(rating)].map((_, starI) => (
                        <span key={starI} style={{ fontSize: "1rem", lineHeight: 1 }}>
                          ★
                        </span>
                      ))}
                      {date && (
                        <span
                          style={{
                            marginLeft: "0.45rem",
                            fontSize: "0.74rem",
                            color: "#8B8D97",
                            fontFamily: "var(--font-assistant), sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          {date}
                        </span>
                      )}
                    </div>

                    {/* Review Quote Text */}
                    <p
                      className="sc-rv-text"
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.91rem",
                        color: "#2D3139",
                        lineHeight: 1.62,
                        fontWeight: 400,
                        margin: 0,
                      }}
                    >
                      &ldquo;{text}&rdquo;
                    </p>

                    {/* Reviewer Profile Row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        paddingTop: "0.85rem",
                        borderTop: "1px solid #F0ECE6",
                      }}
                    >
                      {/* Circular Avatar with Initial & Google Micro-Badge */}
                      <div style={{ position: "relative" }}>
                        {image ? (
                          <img
                            width={40}
                            height={40}
                            src={image}
                            alt={name}
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              border: "2px solid #E8E5DF",
                              flexShrink: 0,
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              backgroundColor: avatarColor,
                              color: "#ffffff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontFamily: "var(--font-assistant), sans-serif",
                              fontWeight: 700,
                              fontSize: "0.88rem",
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.12)",
                              flexShrink: 0,
                            }}
                          >
                            {displayInitials}
                          </div>
                        )}

                        {/* Mini Google verification dot on avatar */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-2px",
                            right: "-2px",
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            backgroundColor: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                          }}
                        >
                          <GoogleGIcon size={11} />
                        </div>
                      </div>

                      {/* Name Only */}
                      <div
                        style={{
                          fontFamily: "var(--font-assistant), sans-serif",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "#11121E",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.3,
                        }}
                      >
                        {name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};


