"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const items = [
  "Porcelain Veneers",
  "Dental Implants",
  "Invisalign",
  "Laser Dentistry",
  "All-on-4",
  "Gum Lift",
  "Clear Braces",
  "Sleep Dentistry",
  "Teeth Whitening",
  "TMJ Treatment",
  "Root Canal",
  "Wisdom Teeth",
  "Cosmetic Dentistry",
  "Bone Grafting",
  "Emergency Dental",
];

export default function ServicesTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const clone = track.cloneNode(true) as HTMLDivElement;
    track.parentElement?.appendChild(clone);

    const totalWidth = track.scrollWidth;

    const tween = gsap.to([track, clone], {
      x: `-=${totalWidth}`,
      duration: 28,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((val: number) => parseFloat(val) % totalWidth),
      },
    });

    return () => { tween.kill(); };
  }, []);

  return (
    <div
      className="relative overflow-hidden py-4 sm:py-5"
      style={{ background: "linear-gradient(135deg, #EC844B 0%, #F47A4A 50%, #e06030 100%)" }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 inset-y-0 w-16 z-10 bg-gradient-to-r from-[#EC844B] to-transparent pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 z-10 bg-gradient-to-l from-[#e06030] to-transparent pointer-events-none" />

      <div className="flex whitespace-nowrap gap-0 select-none">
        <div ref={trackRef} className="flex shrink-0 items-center gap-0">
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-6 sm:px-8 text-white"
              style={{ fontFamily: "var(--font-assistant)", fontSize: "0.85rem", fontWeight: 400, letterSpacing: "0.08em" }}
            >
              <span className="text-white/40 text-lg font-light">✦</span>
              <span className="uppercase tracking-widest">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
