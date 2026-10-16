"use client";

import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

// Sections the arrows step through; ordered by their position on the page at runtime
const SECTIONS = [
  { id: "overview", label: "Introduction" },
  { id: "all-on-4-vs-all-on-x", label: "All on 4 vs All on X" },
  { id: "transformations", label: "Before & Afters" },
  { id: "testimonials", label: "Patient Reviews" },
  { id: "general-info", label: "General Information" },
  { id: "implant-surgery", label: "Implant Surgery" },
  { id: "dentures-comparison", label: "All on 4 vs Dentures" },
  { id: "cost", label: "Cost & Pricing" },
  { id: "snap-on-dentures", label: "Cheaper Alternative" },
  { id: "procedure", label: "5-Step Process" },
  { id: "our-practice", label: "Our Practice" },
  { id: "team", label: "Our Dentists" },
  { id: "affiliations", label: "Accreditations" },
  { id: "complete-my-smile", label: "Complete My Smile" },
  { id: "faq", label: "FAQs" },
  { id: "book", label: "Book a Consultation" },
  { id: "important-information", label: "Important Information" },
];

// A section counts as "reached" once its top passes this far below the header
const READ_LINE_OFFSET_PX = 24;
// Within this distance of a section's start, "up" goes to the previous section instead
const AT_START_TOLERANCE_PX = 40;

type Target = { id: string; label: string } | null;

export default function SectionStepper() {
  const [visible, setVisible] = useState(false);
  const [prev, setPrev] = useState<Target>(null);
  const [next, setNext] = useState<Target>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = (document.querySelector("header")?.getBoundingClientRect().bottom ?? 0) + READ_LINE_OFFSET_PX;
      const sections = SECTIONS.map((s) => ({ ...s, el: document.getElementById(s.id) }))
        .filter((s): s is typeof s & { el: HTMLElement } => !!s.el)
        .map((s) => ({ ...s, top: s.el.getBoundingClientRect().top }))
        .sort((a, b) => a.top - b.top);
      if (sections.length === 0) return;

      let current = -1;
      sections.forEach((s, idx) => {
        if (s.top <= line) current = idx;
      });

      // Only show once the visitor has scrolled past the hero to the first section
      setVisible(current >= 0);

      const nextSection = sections[current + 1];
      setNext(nextSection ? { id: nextSection.id, label: nextSection.label } : null);

      const currentSection = sections[current];
      if (!currentSection) {
        setPrev(null);
      } else if (line - currentSection.top > AT_START_TOLERANCE_PX) {
        setPrev({ id: currentSection.id, label: currentSection.label });
      } else {
        const prevSection = sections[current - 1];
        setPrev(prevSection ? { id: prevSection.id, label: prevSection.label } : null);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="sc-section-stepper"
      style={{
        position: "fixed",
        right: "clamp(0.85rem, 2vw, 1.5rem)",
        bottom: "clamp(1rem, 3vh, 1.75rem)",
        zIndex: 9990,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.25s ease, transform 0.25s ease",
      }}
    >
      <style>{`
        .sc-stepper-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease, background-color 0.2s ease;
        }
        .sc-stepper-btn:hover:not(:disabled) {
          transform: translateY(-2px);
        }
        .sc-stepper-btn:disabled {
          opacity: 0.35;
          cursor: default;
        }
        @media (max-width: 640px) {
          .sc-section-stepper {
            display: none !important;
          }
        }
      `}</style>
      <button
        type="button"
        className="sc-stepper-btn"
        onClick={() => prev && scrollToSection(prev.id)}
        disabled={!prev}
        aria-label={prev ? `Go to previous section: ${prev.label}` : "Previous section"}
        title={prev ? prev.label : undefined}
        style={{ ...buttonStyle, backgroundColor: "#FFFFFF", color: "#1C1C1E", border: "1px solid #E0DAD0" }}
      >
        <ChevronUp size={20} />
      </button>
      <button
        type="button"
        className="sc-stepper-btn"
        onClick={() => next && scrollToSection(next.id)}
        disabled={!next}
        aria-label={next ? `Go to next section: ${next.label}` : "Next section"}
        title={next ? next.label : undefined}
        style={{ ...buttonStyle, backgroundColor: "#E86337", color: "#FFFFFF", border: "1px solid #E86337" }}
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
}

const buttonStyle = {
  width: "46px",
  height: "46px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.14)",
  padding: 0,
} as const;
