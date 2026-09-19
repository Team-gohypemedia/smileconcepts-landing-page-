"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
  viewBox = "0 0 780 85",
  fontSize = "72px",
  strokeWidth = 1.3,
  style,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
  viewBox?: string;
  fontSize?: string | number;
  strokeWidth?: number;
  style?: React.CSSProperties;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
      style={{ display: "block", maxHeight: "160px", ...style }}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#F47A4A" />
              <stop offset="50%" stopColor="#FFA07A" />
              <stop offset="75%" stopColor="#F47A4A" />
              <stop offset="100%" stopColor="#ffffff" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="22%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Persistent sharp glowing wireframe stroke (matching reference screenshot) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        strokeWidth={strokeWidth}
        className="fill-transparent"
        style={{
          fontFamily: "var(--font-assistant), 'Helvetica Neue', Arial, sans-serif",
          fontSize,
          fontWeight: 900,
          letterSpacing: "0.06em",
          stroke: "#F47A4A",
          opacity: hovered ? 0.35 : 0.45,
          transition: "opacity 0.25s ease",
        }}
      >
        {text}
      </text>

      {/* Animated entry draw stroke */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        strokeWidth={strokeWidth}
        className="fill-transparent stroke-[#F47A4A]"
        style={{
          fontFamily: "var(--font-assistant), 'Helvetica Neue', Arial, sans-serif",
          fontSize,
          fontWeight: 900,
          letterSpacing: "0.06em",
          opacity: 0.8,
        }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 3.2,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Interactive cursor spotlight text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        stroke="url(#textGradient)"
        strokeWidth={strokeWidth * 1.3}
        mask="url(#textMask)"
        className="fill-transparent"
        style={{
          fontFamily: "var(--font-assistant), 'Helvetica Neue', Arial, sans-serif",
          fontSize,
          fontWeight: 900,
          letterSpacing: "0.06em",
        }}
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, rgba(15, 15, 17, 0.4) 50%, rgba(244, 122, 74, 0.12) 100%)",
      }}
    />
  );
};
