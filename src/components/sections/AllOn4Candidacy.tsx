"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Phone, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

const candidateCriteria = [
  {
    title: "Currently Wearing Loose Dentures",
    desc: "Frustrated with slipping, sore spots, sticky adhesives, or restricted diet choices.",
  },
  {
    title: "Facing Imminent Loss of Multiple Teeth",
    desc: "Have failing crowns, bridges, loose or decayed teeth requiring full arch replacement.",
  },
  {
    title: "Told You 'Don't Have Enough Bone'",
    desc: "Previously informed that you need costly sinus lifts or bone grafting for standard implants.",
  },
  {
    title: "Seeking a Fast, Permanent Solution",
    desc: "Want immediate fixed provisional teeth in 1 to 3 days instead of a 12-month drawn-out process.",
  },
  {
    title: "Desire to Eat, Laugh & Chew Freely",
    desc: "Wish to bite into crunchy food, enjoy the roof of your mouth uncovered, and smile with zero doubt.",
  },
];

export default function AllOn4Candidacy() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [checkedItems, setCheckedItems] = useState<number[]>([0, 1, 4]);

  const toggleCheck = (index: number) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter((i) => i !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  return (
    <section
      ref={ref}
      id="candidacy"
      style={{
        backgroundColor: "#ffffff",
        padding: "clamp(4.5rem, 8vw, 7.5rem) 0",
        position: "relative",
      }}
    >
      <div className="container-sc">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Information & Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#F47A4A",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Suitability & Assessment
            </span>
            <h2
              style={{
                fontFamily: "var(--font-prata)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "#2C2C2C",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
              }}
            >
              Is All on 4 Dental Implants Right for You?
            </h2>
            <div
              style={{
                width: "3.5rem",
                height: "3px",
                backgroundColor: "#F47A4A",
                marginBottom: "1.5rem",
                borderRadius: "2px",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "#F47A4A",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              &ldquo;Are you tired of dentures and missing teeth? Do you want to smile and eat with confidence once again? If the answer is &lsquo;YES,&rsquo; you may be a perfect candidate!&rdquo;
            </p>

            <p
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "1rem",
                color: "#666666",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "1.25rem",
              }}
            >
              The ideal candidate for the All on 4 procedure is someone who is currently wearing dentures or will need dentures in the future and desires a fixed, permanent option.
            </p>

            <p
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "1rem",
                color: "#666666",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "2rem",
              }}
            >
              Moreover, if you need a full set of teeth but have been told you don&apos;t have enough bone density for traditional implants, All on 4 can still do wonders for you. If severe bone loss exists, don&apos;t worry; we are experts in All-on-6 and Zygomatic implants.
              <strong> There are always alternative procedures to meet your needs at Smile Concepts Sydney.</strong>
            </p>

            {/* Callout Box */}
            <div
              style={{
                backgroundColor: "#FAF7F5",
                borderRadius: "16px",
                padding: "1.5rem",
                border: "1px solid rgba(244, 122, 74, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#F47A4A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 14px rgba(244, 122, 74, 0.3)",
                }}
              >
                <Phone size={22} color="#ffffff" />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.1rem",
                    color: "#2C2C2C",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  Take The Step. Call Smile Concepts.
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.88rem",
                    color: "#666666",
                    margin: "0.25rem 0 0",
                  }}
                >
                  Speak with our clinicians:{" "}
                  <a
                    href="tel:0292677777"
                    style={{ color: "#F47A4A", fontWeight: 600, textDecoration: "none" }}
                  >
                    02 9267 7777
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Self-Assessment Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundColor: "#FAF7F5",
              borderRadius: "24px",
              padding: "clamp(2rem, 4vw, 2.75rem)",
              border: "1px solid rgba(244, 122, 74, 0.2)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: "#F47A4A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HelpCircle size={20} color="#ffffff" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.25rem",
                    color: "#2C2C2C",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  Quick Self-Assessment
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.82rem",
                    color: "#888888",
                  }}
                >
                  Tap the criteria that describe your current dental situation:
                </span>
              </div>
            </div>

            {/* Checkbox List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
              {candidateCriteria.map((item, idx) => {
                const isSelected = checkedItems.includes(idx);
                return (
                  <div
                    key={item.title}
                    onClick={() => toggleCheck(idx)}
                    style={{
                      backgroundColor: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                      borderRadius: "12px",
                      padding: "1rem 1.25rem",
                      border: isSelected ? "2px solid #F47A4A" : "1px solid rgba(0, 0, 0, 0.08)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      transition: "all 0.2s ease",
                      boxShadow: isSelected ? "0 6px 16px rgba(244, 122, 74, 0.12)" : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "6px",
                        backgroundColor: isSelected ? "#F47A4A" : "transparent",
                        border: isSelected ? "none" : "2px solid #bbb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                        transition: "all 0.2s",
                      }}
                    >
                      {isSelected && <Check size={14} color="#ffffff" strokeWidth={3} />}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontFamily: "var(--font-assistant)",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: isSelected ? "#2C2C2C" : "#555555",
                          margin: "0 0 0.2rem",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "var(--font-assistant)",
                          fontSize: "0.84rem",
                          color: "#777777",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Assessment Result Indicator */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: "1.25rem",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                textAlign: "center",
              }}
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <ShieldCheck size={18} color="#23A455" />
                <span
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#23A455",
                    textTransform: "uppercase",
                  }}
                >
                  {checkedItems.length > 0 ? "You Are an Excellent Candidate" : "Select Your Situation Above"}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.86rem",
                  color: "#666666",
                  lineHeight: 1.5,
                  margin: "0 0 1rem",
                }}
              >
                Our 3D CBCT digital scan will confirm your bone density and map your nerve pathways with sub-millimeter precision.
              </p>
              <a
                href="#cost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#F47A4A",
                  color: "#ffffff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(244, 122, 74, 0.25)",
                }}
              >
                View Cost & Super Fund Release
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
