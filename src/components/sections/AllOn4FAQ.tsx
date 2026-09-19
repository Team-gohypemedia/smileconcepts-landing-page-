"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is the All on 4 dental implants technique?",
    a: "The All-on-4 technique is an advanced surgical protocol where an entire full arch of teeth (upper, lower, or both) is securely anchored using just four medical-grade titanium implants. Two straight anterior implants and two tilted posterior implants (up to 45 degrees) provide rigid biomechanical support, avoiding the sinuses and areas of low bone density so bone grafting is rarely required.",
  },
  {
    q: "Is the All on 4 surgery painful?",
    a: "No. The procedure is performed under profound local anaesthesia so you feel zero pain during surgery. For anxious patients or those having full-mouth restorations, Smile Concepts offers Sleep Dentistry (IV sedation) administered by a qualified anaesthetist. Post-operative discomfort is typically mild and well-controlled with standard over-the-counter pain medication for 2 to 4 days.",
  },
  {
    q: "Can I pay for my All on 4 dental implants with my Super Fund?",
    a: "Yes! Under the Australian Taxation Office (ATO) Early Release of Superannuation on Compassionate Grounds, eligible Australians can access their super to pay for necessary medical and dental surgery. This applies to severe dental pain, chronic infection, or functional breakdown where alternative treatment is insufficient. Smile Concepts provides complete medical assessments and paperwork support to ensure your application is successful.",
  },
  {
    q: "Am I a suitable candidate even if I have bone loss or have worn dentures for years?",
    a: "In the vast majority of cases, yes! Traditional implants require substantial bone depth in the back of the jaw. In All-on-4, the two back implants are tilted at an angle to tap into the denser bone at the front of the jaw. This allows patients with significant bone loss who were previously told they were 'not candidates for implants' to successfully receive permanent teeth without sinus lifts or bone grafting.",
  },
  {
    q: "How soon after surgery do I get my teeth?",
    a: "You will receive a fixed, functional provisional bridge within 1 to 3 days following your surgery. You will never walk out of our clinic toothless. After a 3 to 6-month healing phase during which the implants permanently fuse with your bone (osseointegration), your final high-strength zirconia permanent bridge is custom-placed.",
  },
  {
    q: "How do I clean and maintain my All-on-4 teeth?",
    a: "Maintaining All-on-4 teeth is very similar to natural teeth. You brush twice daily using a soft-bristle toothbrush or sonic brush, and clean underneath the bridge once daily using super floss or a water flosser. Regular 6-monthly check-ups and hygiene appointments at Smile Concepts will ensure your implants remain healthy for a lifetime.",
  },
  {
    q: "How long do All on 4 dental implants last?",
    a: "With good oral hygiene and regular dental checkups, titanium dental implants have an outstanding long-term success rate exceeding 98% and can last for the rest of your life. The prosthetic bridge itself (especially monolithic zirconia) is exceptionally durable and engineered to withstand heavy daily biting forces for decades.",
  },
];

export default function AllOn4FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      ref={ref}
      id="faq"
      style={{
        padding: "clamp(4.5rem, 8vw, 7.5rem) 0",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <div className="container-sc" style={{ maxWidth: "920px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(244, 122, 74, 0.1)",
              color: "#F47A4A",
              padding: "0.35rem 0.85rem",
              borderRadius: "9999px",
              fontFamily: "var(--font-assistant)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-prata), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#231F20",
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            All You Need to Know About All on Four Sydney
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              color: "#555",
            }}
          >
            Clear, honest answers to the most common questions regarding procedure, pain relief, finance, and longevity.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + idx * 0.05 }}
                style={{
                  borderRadius: "12px",
                  border: isOpen ? "1px solid #F47A4A" : "1px solid #EAE4DC",
                  backgroundColor: isOpen ? "#FFFDFC" : "#FAF8F5",
                  boxShadow: isOpen ? "0 8px 25px rgba(244, 122, 74, 0.08)" : "none",
                  transition: "all 0.25s ease",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: isOpen ? "#F47A4A" : "#231F20",
                      lineHeight: 1.4,
                      paddingRight: "1rem",
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: isOpen ? "#F47A4A" : "rgba(0,0,0,0.06)",
                      color: isOpen ? "#ffffff" : "#555555",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div
                        style={{
                          padding: "0 1.5rem 1.5rem",
                          fontFamily: "var(--font-assistant), sans-serif",
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          color: "#555555",
                          borderTop: "1px solid rgba(244, 122, 74, 0.15)",
                          paddingTop: "1rem",
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
