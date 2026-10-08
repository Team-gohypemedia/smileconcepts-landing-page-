"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, Phone, Calendar } from "lucide-react";
import { BlurredStagger } from "@/components/ui/text-reveal-faqs";

interface FAQItem {
  id: string;
  category: "cost" | "procedure" | "candidacy" | "maintenance";
  categoryLabel: string;
  question: string;
  answer: string;
}

// 100% Verbatim Original FAQs from Live Website
const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "cost",
    categoryLabel: "Cost & Super",
    question: "How much do all on 4 dental implants (full arch) cost in Sydney?",
    answer:
      "At Smile Concepts, All on 4 is quoted in two phases. Phase one, which includes your implants and the fixed temporary teeth you leave with on the day of surgery (where suitable), is $18,000 per arch. Your final fixed teeth are $10,000 for acrylic or $14,000 for zirconia, so complete treatment ranges from $28,000 to $32,000 per arch. We don't charge per implant, and you receive a written, itemised quote after your 3D scan.",
  },
  {
    id: "faq-2",
    category: "cost",
    categoryLabel: "Cost & Super",
    question: "Can I keep the temporary teeth and skip the final bridge?",
    answer:
      "The same-day teeth are designed for the healing period, not for long-term wear. They are made from a lighter material so we can adjust them while your gums settle, and your bite is refined, and they are not built to withstand years of full chewing force. Once your implants have healed, we fit your final fixed teeth in acrylic on titanium or zirconia, which are made to last. This is why every All on 4 plan at Smile Concepts includes both phases.",
  },
  {
    id: "faq-3",
    category: "cost",
    categoryLabel: "Cost & Super",
    question: "Can I use my superannuation to pay for All on 4?",
    answer:
      "Eligible patients may be able to access their superannuation early on compassionate grounds to fund treatment, and we can refer you to SuperCare to manage the application with the ATO. Approval isn't guaranteed. The ATO assesses each application against strict criteria, and you'll need supporting reports from two practitioners. It's best considered only after other payment options.",
  },
  {
    id: "faq-4",
    category: "cost",
    categoryLabel: "Cost & Super",
    question: "How many implants will I need, and does it change the price?",
    answer:
      "There is no difference in the treatment. Both give you a full arch of fixed teeth on dental implants. “All on 4” is the well-known name, while “All on X” means the number of implants (the “X”) is tailored to you, usually four to six. At Smile Concepts, we plan each case to your anatomy and don't charge per implant.",
  },
  {
    id: "faq-5",
    category: "procedure",
    categoryLabel: "Procedure & Implants",
    question: "What is the difference between All on 4 and All on X?",
    answer:
      "This depends on the clinic and treatment plan. Costs may include consultations, imaging, implant placement, temporary teeth, final restorations, and follow-up care. We provide a detailed written treatment plan before treatment begins.",
  },
  {
    id: "faq-6",
    category: "maintenance",
    categoryLabel: "Recovery & Maintenance",
    question: "How long do All on 4 dental implants last?",
    answer:
      "Dental implants and full-arch bridges are intended as long-term treatment, but no lifespan is guaranteed. Implants, components and bridge materials can require maintenance, repair or replacement. Longevity is influenced by oral hygiene, professional reviews, smoking, health, bite forces and other individual factors. We'll show you exactly how to care for your new teeth.",
  },
  {
    id: "faq-7",
    category: "procedure",
    categoryLabel: "Procedure & Implants",
    question: "How long does all on 4 treatment procedure take?",
    answer:
      "Treatment timelines vary between patients. In suitable cases, temporary teeth may be provided shortly after surgery, while the final restoration is fitted after healing and implant integration are complete.",
  },
  {
    id: "faq-8",
    category: "procedure",
    categoryLabel: "Procedure & Implants",
    question: "Is All on 4 surgery painful?",
    answer:
      "Most patients choose to have the procedure under sleep dentistry (IV sedation), so they're completely relaxed. They typically report the discomfort afterwards is less than expected, and it's well managed with prescribed pain relief and simple aftercare.",
  },
  {
    id: "faq-9",
    category: "maintenance",
    categoryLabel: "Recovery & Maintenance",
    question: "How long does recovery take?",
    answer:
      "Many patients return to light activities within a few days. Full healing and integration of the implants with your jaw typically takes three to six months, during which you wear your fixed temporary teeth before your final bridge is fitted.",
  },
  {
    id: "faq-10",
    category: "procedure",
    categoryLabel: "Procedure & Implants",
    question: "Can I really get teeth in a day?",
    answer:
      "When immediate loading is suitable, yes. It depends on bone, implant stability, bite and health. If you've searched teeth in a day Sydney, here's how it works at Smile Concepts: your implants and a fixed temporary bridge can be placed on the same day, so you leave with teeth. Your final bridge is fitted after your implants have healed and integrated with the bone, usually within three to six months.",
  },
  {
    id: "faq-11",
    category: "candidacy",
    categoryLabel: "Candidacy & Bone Loss",
    question: "Can I get All on four implants if I have bone loss?",
    answer:
      "Possibly, yes. Bone loss does not automatically rule you out. The rear implants in All on 4 are placed at an angle so they can reach denser, healthier bone that straight implants cannot, which is why many patients avoid grafting. Your 3D CBCT scan at Smile Concepts shows exactly how much bone you have before we recommend anything.",
  },
  {
    id: "faq-12",
    category: "cost",
    categoryLabel: "Cost & Super",
    question: "What is included in All on 4 dental implants cost?",
    answer:
      "At Smile Concepts, phase one of your quote ($18,000 per arch) includes your consultation, 3D CBCT planning, any extractions, placement of four to six implants and your same-day fixed temporary teeth. Phase two covers your final fixed teeth in acrylic or zirconia. Sedation and bone grafting are quoted separately, and everything is confirmed in a written, itemised quote.",
  },
  {
    id: "faq-13",
    category: "candidacy",
    categoryLabel: "Candidacy & Bone Loss",
    question: "Is All on 4 better than dentures?",
    answer:
      "They solve the same problem in different ways. All on 4 gives you fixed teeth that stay in place, so there's no daily removal, no adhesive and more stability when eating. Dentures remain a reasonable option for some patients. The right choice depends on your oral health, your bone and your goals, which is what your assessment confirms.",
  },
  {
    id: "faq-14",
    category: "candidacy",
    categoryLabel: "Candidacy & Bone Loss",
    question: "Can smokers have All on 4 dental implants?",
    answer:
      "Often, yes, but smoking matters. Nicotine reduces blood flow to the bone and gums, which slows healing and raises the risk of implant failure. We assess smokers individually, discuss the risks honestly at consultation, and can talk through ways to reduce risk around the time of surgery.",
  },
  {
    id: "faq-15",
    category: "maintenance",
    categoryLabel: "Recovery & Maintenance",
    question: "How do I clean All on Four dental implants?",
    answer:
      "You clean them much like natural teeth. Brush twice a day, clean under the bridge with the interdental brushes or water flosser we show you how to use, and keep up regular professional implant maintenance visits at Smile Concepts. Good daily hygiene is the single biggest factor in how long your All on 4 teeth last.",
  },
  {
    id: "faq-16",
    category: "candidacy",
    categoryLabel: "Candidacy & Bone Loss",
    question: "What happens if my remaining teeth are failing?",
    answer:
      "That's one of the most common starting points for All on 4. During your assessment, we look at whether your remaining teeth can be saved or whether replacing the full arch is the more predictable long-term option. If extractions are needed, they're done at the same appointment as your implant placement, and they're included in your phase one fee.",
  },
];

type CategoryFilter = "all" | "cost" | "procedure" | "candidacy" | "maintenance";

export default function AllOn4FAQ() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(["faq-1"]));
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 6;

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedFaqs = useMemo(() => {
    if (searchQuery.trim().length > 0 || showAll) {
      return filteredFaqs;
    }
    return filteredFaqs.slice(0, INITIAL_COUNT);
  }, [filteredFaqs, searchQuery, showAll]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <section
      id="faq"
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        padding: "clamp(3.5rem, 6vw, 6rem) 0",
      }}
    >
      <style>{`
        .sc-faq-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .sc-faq-pill-btn {
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          font-family: var(--font-assistant), sans-serif;
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid #E5E0D7;
          background-color: #FAF9F6;
          color: #444;
          white-space: nowrap;
        }
        .sc-faq-pill-btn.active {
          border-color: #E86337;
          background-color: #E86337;
          color: #ffffff;
        }
        @media (max-width: 680px) {
          .sc-faq-pills {
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 0.4rem;
            -webkit-overflow-scrolling: touch;
          }
          .sc-faq-pill-btn {
            flex-shrink: 0;
          }
        }
      `}</style>

      <div className="container-sc" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.25rem" }}>
        {/* Exact Section Header from Live Website */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto clamp(2rem, 4vw, 3rem)" }}>
          <h2
            style={{
              fontFamily: "var(--font-prata), Georgia, serif",
              fontSize: "clamp(1.45rem, 5vw, 2.9rem)",
              color: "#1C1C1E",
              fontWeight: 400,
              lineHeight: 1.22,
              marginBottom: "0.65rem",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Filter Controls */}
        <div style={{ maxWidth: "900px", margin: "0 auto 1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Search Input */}
          <div style={{ position: "relative", width: "100%" }}>
            <Search size={16} color="#888" style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="text"
              placeholder="Search questions (e.g. cost, sedation, super, bone loss)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.65rem",
                borderRadius: "10px",
                border: "1px solid #E0DAD0",
                backgroundColor: "#FAF9F6",
                fontFamily: "var(--font-assistant)",
                fontSize: "0.92rem",
                color: "#1C1C1E",
                outline: "none",
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  fontSize: "0.8rem",
                  color: "#999",
                  cursor: "pointer",
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs & Expand All */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
            <div className="sc-faq-pills">
              {[
                { key: "all", label: "All Questions (16)" },
                { key: "cost", label: "Cost & Super (5)" },
                { key: "procedure", label: "Procedure & Implants (4)" },
                { key: "candidacy", label: "Candidacy & Bone Loss (4)" },
                { key: "maintenance", label: "Recovery & Care (3)" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`sc-faq-pill-btn ${activeCategory === tab.key ? "active" : ""}`}
                  onClick={() => setActiveCategory(tab.key as CategoryFilter)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.82rem", fontFamily: "var(--font-assistant)" }}>
              <button
                type="button"
                onClick={expandAll}
                style={{ background: "none", border: "none", color: "#E86337", fontWeight: 600, cursor: "pointer" }}
              >
                Expand all
              </button>
              <span style={{ color: "#ccc" }}>|</span>
              <button
                type="button"
                onClick={collapseAll}
                style={{ background: "none", border: "none", color: "#666", fontWeight: 600, cursor: "pointer" }}
              >
                Collapse all
              </button>
            </div>
          </div>
        </div>

        {/* Accordion Items List */}
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2.5rem 1rem", color: "#888", fontFamily: "var(--font-assistant)" }}>
              <p>No questions matched your search query. Please try different keywords.</p>
            </div>
          ) : (
            displayedFaqs.map((faq) => {
              const isOpen = openIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  style={{
                    backgroundColor: "#FAF9F6",
                    borderRadius: "12px",
                    border: isOpen ? "1px solid #E86337" : "1px solid #EAE5DC",
                    overflow: "hidden",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    style={{
                      width: "100%",
                      padding: "1.1rem 1.35rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-prata)",
                        fontSize: "clamp(0.95rem, 2.8vw, 1.05rem)",
                        color: "#1C1C1E",
                        fontWeight: 400,
                        lineHeight: 1.35,
                      }}
                    >
                      {faq.question}
                    </span>

                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: isOpen ? "#E86337" : "#F3F0EA",
                        color: isOpen ? "#ffffff" : "#1C1C1E",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            padding: "0 1.35rem 1.25rem",
                            borderTop: "1px solid #ECE7DE",
                            fontFamily: "var(--font-assistant)",
                            fontSize: "0.92rem",
                            lineHeight: 1.65,
                            color: "#505055",
                          }}
                        >
                          <div style={{ margin: "0.85rem 0 0" }}>
                            <BlurredStagger text={faq.answer} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Read More / Read Less Toggle */}
        {!searchQuery && filteredFaqs.length > INITIAL_COUNT && (
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "999px",
                backgroundColor: "#FAF9F6",
                border: "1px solid #E0DAD0",
                color: "#1C1C1E",
                fontFamily: "var(--font-assistant)",
                fontWeight: 700,
                fontSize: "0.92rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E86337";
                (e.currentTarget as HTMLElement).style.color = "#E86337";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E0DAD0";
                (e.currentTarget as HTMLElement).style.color = "#1C1C1E";
              }}
            >
              <span>{showAll ? "Read less FAQs" : `Read more FAQs (${filteredFaqs.length - INITIAL_COUNT} more)`}</span>
              <span style={{ fontSize: "0.75rem" }}>{showAll ? "▲" : "▼"}</span>
            </button>
          </div>
        )}

        {/* Minimal Contact Bar from Live Website */}
        <div
          style={{
            maxWidth: "900px",
            margin: "2.5rem auto 0",
            padding: "1.25rem 1.5rem",
            backgroundColor: "#FAF9F6",
            borderRadius: "14px",
            border: "1px solid #EAE5DC",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <h4 style={{ fontFamily: "var(--font-prata)", fontSize: "1.15rem", color: "#1C1C1E", margin: "0 0 0.2rem" }}>
              Book an All on 4 Consultation in Sydney
            </h4>
            <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.85rem", color: "#666", margin: 0 }}>
              Suite 403, Level 4/307 Pitt St, Sydney NSW 2000
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
            <a
              href="tel:0292677777"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.6rem 0.95rem",
                backgroundColor: "#ffffff",
                border: "1px solid #DCD6CD",
                borderRadius: "8px",
                fontFamily: "var(--font-assistant)",
                fontSize: "0.86rem",
                fontWeight: 600,
                color: "#1C1C1E",
                textDecoration: "none",
              }}
            >
              <Phone size={14} color="#E86337" />
              <span>02 9267 7777</span>
            </a>
            <a
              href="#book"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.6rem 1rem",
                backgroundColor: "#E86337",
                borderRadius: "8px",
                fontFamily: "var(--font-assistant)",
                fontSize: "0.86rem",
                fontWeight: 600,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              <Calendar size={14} />
              <span>Book an Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
