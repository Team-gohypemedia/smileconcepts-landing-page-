"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out at 1.7s, fully hidden at 2s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1700);
    const hideTimer = setTimeout(() => setVisible(false), 2200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes sc-loader-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50%       { transform: scale(1.18); opacity: 0.15; }
        }
        @keyframes sc-loader-progress {
          0%   { width: 0%; }
          80%  { width: 90%; }
          100% { width: 100%; }
        }
        @keyframes sc-loader-logo-in {
          0%   { opacity: 0; transform: translateY(14px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes sc-loader-dot {
          0%, 80%, 100% { transform: scaleY(0.5); opacity: 0.35; }
          40%            { transform: scaleY(1);   opacity: 1; }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: fadeOut ? 0 : 1,
          transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: fadeOut ? "none" : "all",
        }}
      >
        {/* Outer ambient glow ring */}
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(244,122,74,0.12) 0%, transparent 70%)",
            animation: "sc-loader-pulse 2s ease-in-out infinite",
          }}
        />

        {/* Logo container */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            animation: "sc-loader-logo-in 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
            opacity: 0,
          }}
        >
          <Image
            src="/assets/brand/cropped-logo_large-1.png"
            alt="Smile Concepts"
            width={220}
            height={72}
            priority
            style={{ objectFit: "contain", userSelect: "none" }}
          />
        </div>

        {/* Animated dots */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            marginTop: "2rem",
            zIndex: 1,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "5px",
                height: "20px",
                borderRadius: "3px",
                backgroundColor: "#F47A4A",
                animation: `sc-loader-dot 1s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            backgroundColor: "rgba(244, 122, 74, 0.12)",
          }}
        >
          <div
            style={{
              height: "100%",
              backgroundColor: "#F47A4A",
              animation: "sc-loader-progress 2s cubic-bezier(0.4,0,0.2,1) forwards",
              borderRadius: "0 2px 2px 0",
            }}
          />
        </div>
      </div>
    </>
  );
}
