"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 3.5,
  className = "",
  style = {},
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={className}
      style={{
        background: disabled
          ? "inherit"
          : "linear-gradient(110deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.95) 45%, #F47A4A 50%, rgba(255, 255, 255, 0.95) 55%, rgba(255, 255, 255, 0.4) 100%)",
        backgroundSize: "250% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: disabled ? "inherit" : "transparent",
        animation: disabled ? "none" : `shiny-text-animation ${animationDuration} linear infinite`,
        display: "inline-flex",
        alignItems: "center",
        ...style,
      }}
    >
      {text}
      <style>{`
        @keyframes shiny-text-animation {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </span>
  );
}
