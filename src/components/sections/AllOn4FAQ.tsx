"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, PhoneCall } from "lucide-react";

const allOn4Faqs = [
  {
    id: "faq-1",
    question: "What is the All on 4 dental implants technique?",
    answer:
      "The All-on-4 technique is an advanced surgical protocol where an entire full arch of teeth is securely anchored using four medical-grade titanium implants. Two straight anterior and two posterior implants tilted up to 45 degrees provide rigid cross-arch stabilization without requiring invasive bone grafting.",
  },
  {
    id: "faq-2",
    question: "Is the All on 4 surgery painful?",
    answer:
      "No. The procedure is performed under profound local anaesthesia so you feel zero pain. For anxious patients, Smile Concepts offers Sleep Dentistry (IV sedation) administered by a specialist anaesthetist. Post-operative discomfort is mild and easily managed with standard pain medication for 2 to 4 days.",
  },
  {
    id: "faq-3",
    question: "Can I pay for my All on 4 dental implants with my Super Fund?",
    answer:
      "Yes! Under the ATO Early Release of Superannuation on Compassionate Grounds, eligible Australians can access their super for acute or chronic dental conditions. Smile Concepts provides comprehensive medical reports and complete paperwork guidance to assist your claim.",
  },
  {
    id: "faq-4",
    question: "Am I a suitable candidate even if I have worn dentures for years?",
    answer:
      "In the vast majority of cases, yes! By angling the rear implants into dense cortical bone, patients who suffered extensive bone loss or were previously rejected for traditional implants can successfully receive permanent fixed teeth without sinus lifts.",
  },
  {
    id: "faq-5",
    question: "How soon after surgery do I get my teeth?",
    answer:
      "You receive a fixed, functional provisional bridge within 1 to 3 days following your surgery. You will never walk out of our clinic without teeth. After the healing integration phase, your permanent high-strength zirconia bridge is custom-fitted.",
  },
  {
    id: "faq-6",
    question: "How do I clean and maintain my All-on-4 teeth?",
    answer:
      "Caring for All-on-4 teeth is very similar to natural teeth: brush twice daily with a soft toothbrush and use a water flosser or super floss underneath the bridge once daily. Regular 6-monthly checkups ensure optimal lifelong oral hygiene.",
  },
  {
    id: "faq-7",
    question: "How long do All on 4 dental implants last?",
    answer:
      "With routine oral hygiene and regular dental checkups, titanium implants have a long-term clinical success rate exceeding 98% and can last a lifetime. The monolithic zirconia prosthetic bridge is engineered to withstand daily chewing forces for decades.",
  },
];

/* Cinematic Text-Reveal with Blur-Stagger */
function BlurredStagger({ text }: { text: string }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.005,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      transform: "translateY(2px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transform: "translateY(0px)",
    },
  };

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{
        margin: 0,
        fontFamily: "var(--font-assistant), sans-serif",
        fontSize: "0.98rem",
        lineHeight: 1.72,
        color: "#4E4E59",
        wordBreak: "break-word",
        whiteSpace: "normal",
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{
            display: "inline-block",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function AllOn4FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-2");
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const visibleFaqs = isMobile && !showAllMobile ? allOn4Faqs.slice(0, 3) : allOn4Faqs;

  return (
    <section
      id="faq"
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        padding: "clamp(3.5rem, 6vw, 6.5rem) clamp(1rem, 4vw, 3rem)",
        overflow: "hidden",
      }}
    >
      <style>{`
        .sc-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: clamp(2rem, 5vw, 4.5rem);
          max-width: 1520px;
          margin: 0 auto;
          align-items: start;
        }
        @media (max-width: 960px) {
          .sc-faq-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .sc-faq-contact-box {
            display: none !important;
          }
          .sc-faq-left-col {
            text-align: center !important;
            max-width: 680px !important;
            margin: 0 auto !important;
          }
          .sc-faq-heading {
            text-align: center !important;
            font-size: clamp(1.75rem, 5.5vw, 2.6rem) !important;
            line-height: 1.2 !important;
          }
          .sc-faq-subheading {
            text-align: center !important;
            font-size: clamp(0.92rem, 3.5vw, 1.05rem) !important;
            line-height: 1.65 !important;
            margin: 0 auto 1.5rem auto !important;
          }
          .sc-faq-tag {
            text-align: center !important;
          }
        }
        .sc-faq-item-btn:hover .sc-faq-title {
          color: #E86337 !important;
        }
      `}</style>

      <div className="sc-faq-grid">
        {/* Left Column: Heading & Contact Card (Contact card hidden on mobile) */}
        <div className="sc-faq-left-col" style={{ position: "relative" }}>
          <p
            className="sc-faq-tag"
            style={{
              color: "#F47A4A",
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "0.65rem",
            }}
          >
            Patient FAQs
          </p>

          <h2
            className="sc-faq-heading"
            style={{
              fontFamily: "var(--font-prata), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.9rem, 3.5vw, 3.1rem)",
              color: "#1A1A24",
              fontWeight: 400,
              lineHeight: 1.16,
              margin: "0 0 1rem 0",
              letterSpacing: "-0.01em",
            }}
          >
            All You Need to Know About All on 4
          </h2>

          <p
            className="sc-faq-subheading"
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "1rem",
              lineHeight: 1.65,
              color: "#5A5A66",
              margin: "0 0 1.75rem 0",
            }}
          >
            Clear, transparent answers to questions regarding recovery, sedation, Super Fund access, and permanent results.
          </p>

          {/* Contact Assistance Box (Desktop only - removed on mobile per user request) */}
          <div
            className="sc-faq-contact-box"
            style={{
              padding: "1.5rem 1.75rem",
              backgroundColor: "#FCF9F7",
              borderRadius: "16px",
              border: "1px solid rgba(244, 122, 74, 0.22)",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(244, 122, 74, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#E86337",
                  flexShrink: 0,
                }}
              >
                <PhoneCall size={18} />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#231F20",
                  margin: 0,
                }}
              >
                Need personalized advice?
              </p>
            </div>

            <p
              style={{
                fontFamily: "var(--font-assistant), sans-serif",
                fontSize: "0.9rem",
                color: "#666672",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Our Sydney clinical treatment coordinators are here to assist with procedure details and finance plans.
            </p>

            <a
              href="tel:0292677777"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#E86337",
                fontFamily: "var(--font-assistant), sans-serif",
                fontSize: "0.95rem",
                fontWeight: 700,
                textDecoration: "none",
                marginTop: "0.25rem",
              }}
            >
              Call (02) 9267 7777 &rarr;
            </a>
          </div>
        </div>

        {/* Right Column: High-Fidelity Accordion with "See More" on Mobile */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {visibleFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  borderRadius: "14px",
                  border: isOpen
                    ? "1px solid rgba(244, 122, 74, 0.45)"
                    : "1px solid #ECEAE6",
                  backgroundColor: isOpen ? "#FFFDFC" : "#FAFAF8",
                  boxShadow: isOpen
                    ? "0 10px 28px rgba(244, 122, 74, 0.08)"
                    : "none",
                  transition: "all 0.25s ease",
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  className="sc-faq-item-btn"
                  onClick={() => toggle(item.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1.25rem",
                    padding: "1.2rem 1.4rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    className="sc-faq-title"
                    style={{
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "1.02rem",
                      fontWeight: 600,
                      color: isOpen ? "#E86337" : "#1A1A24",
                      lineHeight: 1.4,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.question}
                  </span>

                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: isOpen
                        ? "rgba(244, 122, 74, 0.12)"
                        : "rgba(0, 0, 0, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? "#E86337" : "#777782",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease, background-color 0.25s ease, color 0.25s ease",
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key={`content-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{
                        padding: "0 1.4rem 1.35rem 1.4rem",
                        borderTop: "1px solid rgba(244, 122, 74, 0.14)",
                        paddingTop: "1.05rem",
                        overflow: "hidden",
                      }}
                    >
                      <BlurredStagger text={item.answer} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* "See More Option" on Mobile */}
          {isMobile && (
            <div style={{ marginTop: "0.5rem" }}>
              <button
                type="button"
                onClick={() => setShowAllMobile(!showAllMobile)}
                style={{
                  width: "100%",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "8px",
                  backgroundColor: "#FCF9F7",
                  border: "1.5px solid rgba(244, 122, 74, 0.4)",
                  color: "#E86337",
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 12px rgba(244, 122, 74, 0.06)",
                }}
              >
                <span>{showAllMobile ? "Show Fewer FAQs" : `See More FAQs (${allOn4Faqs.length - 3} More)`}</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: showAllMobile ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
