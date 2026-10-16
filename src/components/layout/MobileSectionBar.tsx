"use client";

import { useEffect, useState, useRef } from "react";
import { Calendar } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

// All section navigation tabs for mobile
const ALL_SECTION_TABS = [
  { id: "overview", label: "Overview" },
  { id: "transformations", label: "Results" },
  { id: "testimonials", label: "Reviews" },
  { id: "cost", label: "Cost" },
  { id: "snap-on-dentures", label: "Snap-On" },
  { id: "procedure", label: "Process" },
  { id: "dentures-comparison", label: "Vs Dentures" },
  { id: "implant-surgery", label: "Surgery" },
  { id: "team", label: "Doctors" },
  { id: "our-practice", label: "Clinic" },
  { id: "affiliations", label: "Accreditation" },
  { id: "faq", label: "FAQs" },
];

export default function MobileSectionBar() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const pillsContainerRef = useRef<HTMLDivElement>(null);

  // Scrollspy logic to track current section
  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      frame = 0;
      const headerOffset = 110;
      let currentId = "overview";
      for (const tab of ALL_SECTION_TABS) {
        const el = document.getElementById(tab.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            currentId = tab.id;
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
          {/* Horizontally scrollable section tabs */}
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
              flex: "1 1 0%",
              minWidth: 0,
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

          {/* Vertical subtle divider */}
          <div style={{ width: "1px", height: "18px", backgroundColor: "#EAE5DC", flexShrink: 0 }} />

          {/* Quick Book CTA button */}
          <button
            type="button"
            onClick={() => scrollToSection("book")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "0 12px",
              height: "34px",
              borderRadius: "9999px",
              backgroundColor: "#E86337",
              color: "#FFFFFF",
              border: "none",
              fontFamily: "var(--font-assistant)",
              fontSize: "0.78rem",
              fontWeight: 700,
              cursor: "pointer",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(232, 99, 55, 0.3)",
              transition: "transform 0.15s ease",
            }}
            aria-label="Book a Consultation"
          >
            <Calendar size={13} strokeWidth={2.4} />
            <span>Book</span>
          </button>
        </div>
      </div>
    </>
  );
}
