"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

// All section navigation tabs for mobile
const ALL_SECTION_TABS: { id: string; label: string; aliases?: string[] }[] = [
  { id: "overview", label: "Overview" },
  { id: "transformations", label: "Results", aliases: ["testimonials", "complete-my-smile"] },
  { id: "general-info", label: "About All on 4 (X)", aliases: ["all-on-4-vs-all-on-x"] },
  { id: "implant-surgery", label: "Surgery", aliases: ["recovery"] },
  { id: "procedure", label: "Process", aliases: ["dentures-comparison"] },
  { id: "cost", label: "Cost", aliases: ["snap-on-dentures", "payment-options"] },
  { id: "risks", label: "Risks" },
  { id: "team", label: "About Us", aliases: ["why-patients", "our-practice", "affiliations"] },
  { id: "faq", label: "FAQs", aliases: ["important-information", "book"] },
];

export default function MobileSectionBar() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Track whether the pills can scroll further in each direction
  useEffect(() => {
    const el = pillsContainerRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollPills = (dir: 1 | -1) => {
    pillsContainerRef.current?.scrollBy({ left: dir * 140, behavior: "smooth" });
  };

  // Fade the edges that have more tabs hidden behind them
  const pillsMask = `linear-gradient(to right, ${canScrollLeft ? "transparent 0, #000 36px" : "#000 0"}, ${canScrollRight ? "#000 calc(100% - 36px), transparent 100%" : "#000 100%"})`;

  // Scrollspy logic to track current section
  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      frame = 0;
      const headerOffset = 110;
      let currentId = "overview";
      let closestTop = -Infinity;
      for (const tab of ALL_SECTION_TABS) {
        for (const id of [tab.id, ...(tab.aliases ?? [])]) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= headerOffset && rect.top > closestTop) {
              closestTop = rect.top;
              currentId = tab.id;
            }
          }
        }
      }
      setActiveSection(currentId);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Auto-scroll active pill into view inside the horizontal container
  useEffect(() => {
    if (!pillsContainerRef.current) return;
    const activeEl = pillsContainerRef.current.querySelector<HTMLElement>(`[data-pill-id="${activeSection}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeSection]);

  return (
    <>
      <style>{`
        .sc-mobile-pills::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .sc-mobile-pills {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sc-mobile-pill-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border: none;
          padding: 0;
          background: #FFFFFF;
          color: #1C1C1E;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.14);
          cursor: pointer;
          transition: opacity 0.2s ease;
          z-index: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .sc-mobile-dock, .sc-mobile-pill-arrow { transition: none !important; }
        }
      `}</style>

      {/* Main Floating Bottom Dock (Mobile Only) */}
      <div
        className="sc-mobile-dock sm:hidden"
        style={{
          position: "fixed",
          bottom: "max(10px, env(safe-area-inset-bottom))",
          left: "10px",
          right: "10px",
          margin: "0 auto",
          maxWidth: "430px",
          zIndex: 9980,
        }}
        aria-label="Mobile section navigation"
      >
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 5px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            borderRadius: "9999px",
            border: "1px solid rgba(224, 218, 208, 0.9)",
            boxShadow: "0 10px 28px -4px rgba(28, 28, 30, 0.16), 0 2px 8px rgba(0, 0, 0, 0.04)",
            overflow: "hidden",
          }}
        >
          {/* Horizontally scrollable section tabs, with edge fades + arrows when more tabs are off-screen */}
          <div style={{ position: "relative", flex: "1 1 0%", minWidth: 0 }}>
            <div
              ref={pillsContainerRef}
              className="sc-mobile-pills"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                paddingLeft: "2px",
                paddingRight: "2px",
                maskImage: pillsMask,
                WebkitMaskImage: pillsMask,
              }}
            >
              {ALL_SECTION_TABS.map((tab) => {
                const isActive = activeSection === tab.id;
                return (
                  <button
                    key={tab.id}
                    data-pill-id={tab.id}
                    type="button"
                    onClick={() => scrollToSection(tab.id)}
                    style={{
                      padding: "0 11px",
                      height: "33px",
                      borderRadius: "9999px",
                      backgroundColor: isActive ? "#1C1C1E" : "transparent",
                      color: isActive ? "#FFFFFF" : "#555555",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.76rem",
                      fontWeight: isActive ? 700 : 500,
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      border: "none",
                      flexShrink: 0,
                      transition: "all 0.18s ease",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              className="sc-mobile-pill-arrow"
              onClick={() => scrollPills(-1)}
              aria-label="Scroll sections left"
              tabIndex={canScrollLeft ? 0 : -1}
              style={{ left: "1px", opacity: canScrollLeft ? 1 : 0, pointerEvents: canScrollLeft ? "auto" : "none" }}
            >
              <ChevronLeft size={14} strokeWidth={2.5} aria-hidden />
            </button>
            <button
              type="button"
              className="sc-mobile-pill-arrow"
              onClick={() => scrollPills(1)}
              aria-label="Scroll sections right"
              tabIndex={canScrollRight ? 0 : -1}
              style={{ right: "1px", opacity: canScrollRight ? 1 : 0, pointerEvents: canScrollRight ? "auto" : "none" }}
            >
              <ChevronRight size={14} strokeWidth={2.5} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
