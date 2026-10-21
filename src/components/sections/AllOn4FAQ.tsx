"use client";

import { useState, useMemo } from "react";
import { Plus, Minus, Search, Phone, Calendar } from "lucide-react";

interface FAQItem {
  id: string;
  category: "cost" | "procedure" | "candidacy" | "maintenance";
  categoryLabel: string;
  question: string;
  answer: string;
}

// FAQs from the All on X content brief
const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "procedure",
    categoryLabel: "Procedure & Implants",
    question: "What is the difference between All on 4 and All on X?",
    answer:
      "There is no difference in the treatment. Both give you a full arch of fixed teeth on dental implants. “All on 4” is the well-known name, while “All on X” means the number of implants (the “X”) is tailored to you, usually four to six. At Smile Concepts, we plan each case to your anatomy and don't charge per implant.",
  },
  {
    id: "faq-2",
    category: "procedure",
    categoryLabel: "Procedure & Implants",
    question: "Is All on 4 surgery painful?",
    answer:
      "Generally, the procedure itself is not painful. Most patients choose sleep dentistry (IV sedation), so they stay completely relaxed throughout. They typically report the discomfort afterwards is less than they expected and is well managed with prescribed pain relief and simple aftercare.",
  },
  {
    id: "faq-3",
    category: "maintenance",
    categoryLabel: "Recovery & Maintenance",
    question: "How long does recovery take?",
    answer:
      "Many patients return to light activities within a few days. Most surgical recovery happens over 2 to 4 weeks. Full healing and integration of the implants with your jaw typically takes three to six months, during which you wear your fixed temporary teeth before your final bridge is fitted.",
  },
  {
    id: "faq-4",
    category: "candidacy",
    categoryLabel: "Candidacy & Bone Loss",
    question: "Can I get all on four implants if I have bone loss?",
    answer:
      "Possibly, yes. Bone loss does not automatically rule you out. Angled implants may make use of available bone, but some people need grafting or a different approach. Suitability is determined with clinical examination and 3D imaging. [1–3] Severe bone loss may require assessment for advanced options such as zygomatic or pterygoid implants. These have different risks and may require specialist referral.",
  },
  {
    id: "faq-5",
    category: "procedure",
    categoryLabel: "Procedure & Implants",
    question: "Can I keep the temporary teeth and skip the final bridge?",
    answer:
      "Temporary teeth are intended for the healing phase and need a modified diet. They are adjustable as tissues change but are not a substitute for the planned definitive bridge. They are a short term solution and designed to last no longer than 6 to 12 months. Once your implants have healed, we fit your final fixed teeth on a titanium base with acrylic or zirconia teeth on top, built to last. This is why every All on 4 plan at Smile Concepts includes both phases.",
  },
  {
    id: "faq-6",
    category: "procedure",
    categoryLabel: "Procedure & Implants",
    question: "Can I really get teeth in a day?",
    answer:
      "When immediate loading is suitable, yes. Immediate loading depends on bone, implant stability, bite and health. We can place your implants and fit a fixed temporary bridge the same day or the next day, so you can leave with teeth. Your final bridge is fitted after your implants have healed and integrated with the bone, usually within three to six months.",
  },
  {
    id: "faq-7",
    category: "cost",
    categoryLabel: "Cost & Super",
    question: "How much do All on 4 dental implants cost at Smile Concepts in Sydney?",
    answer:
      "At Smile Concepts, All on 4 or All on X is quoted in two phases. Phase one, which includes your implants and the fixed temporary teeth you leave with on the day of surgery (where suitable), is $18,000 per arch. Phase 2 includes your final fixed teeth: $10,000 for acrylic on titanium or $14,000 for zirconia on titanium or pure zirconia, so complete treatment ranges from $28,000 to $32,000 per arch. We don't charge per implant, and you receive a written, itemised quote after your examination, photos and 3D CT scan.",
  },
  {
    id: "faq-8",
    category: "cost",
    categoryLabel: "Cost & Super",
    question: "What is included in the cost of All on 4 dental implants?",
    answer:
      "At Smile Concepts, phase one of your quote ($18,000 per arch) includes your consultation, 3D CBCT planning, any extractions, placement of your implants (usually four to six) and your same-day fixed temporary teeth. Phase two covers your final fixed teeth in acrylic or zirconia. Your care doesn't stop at phase two. The same team that planned and placed your implants looks after you for the long term, with regular reviews, professional implant maintenance and cleaning, and prompt help if anything ever feels loose or uncomfortable. We'll explain your recommended maintenance schedule and any ongoing costs at your consultation. Sedation and bone grafting are quoted separately, and we confirm everything in a written, itemised quote.",
  },
  {
    id: "faq-9",
    category: "cost",
    categoryLabel: "Cost & Super",
    question: "How many implants will I need, and does it change the price?",
    answer:
      "Your dentist decides the number of implants, most commonly four to six (and sometimes eight), after analysing your X-rays and 3D CBCT scan. It depends on your bone and what gives you the most stable result. Because we don't charge per implant, the number placed does not change your price. Your quote is driven by case complexity, not implant count.",
  },
  {
    id: "faq-10",
    category: "cost",
    categoryLabel: "Cost & Super",
    question: "Can I use my superannuation to pay for All on 4 or All on X?",
    answer:
      "Eligible patients may apply to the ATO for compassionate release of superannuation. We can provide treatment information and discuss application support, but the ATO determines approval. Confirm current supporting report requirements with the ATO and consider independent financial advice before applying. [7] We partner with SuperCare who can help you manage the application process with the ATO.",
  },
  {
    id: "faq-11",
    category: "cost",
    categoryLabel: "Cost & Super",
    question: "Is there a cheaper alternative to All on 4?",
    answer:
      "Yes. Snap on implant dentures, also called an implant overdenture or All on 2, start from $12,000 per arch at Smile Concepts. The denture clips onto two to four implants and is removed for cleaning, so it costs less than fixed All on 4 teeth while being far more stable than a conventional denture.",
  },
  {
    id: "faq-12",
    category: "maintenance",
    categoryLabel: "Recovery & Maintenance",
    question: "How long do All on 4 dental implants last?",
    answer:
      "Dental implants and full-arch bridges are intended as long-term treatment, but no lifespan is guaranteed. Implants, components and bridge materials can require maintenance, repair or replacement. Longevity depends on oral hygiene, regular checkups, smoking, overall health, bite forces, and other individual factors. We'll show you exactly how to care for your new teeth.",
  },
  {
    id: "faq-13",
    category: "candidacy",
    categoryLabel: "Candidacy & Bone Loss",
    question: "Is All on 4 better than dentures?",
    answer:
      "They solve the same problem in different ways. All on 4 gives you fixed teeth that stay in place, so you don't have to remove them daily, no adhesive, and more stability when eating. Dentures remain a reasonable option for some patients. The right choice depends on your oral health, your bone and your goals, which is what your assessment confirms.",
  },
  {
    id: "faq-14",
    category: "candidacy",
    categoryLabel: "Candidacy & Bone Loss",
    question: "Can smokers have all on 4 dental implants?",
    answer:
      "Smoking is associated with increased implant failure risk and bone loss. Suitability is assessed individually; stopping smoking is an important risk reduction step. [4] Nicotine reduces blood flow to the bone and gums, which slows healing and raises the risk of implant failure. We assess smokers individually, discuss the risks at consultation, and can talk through ways to reduce risk around the time of surgery. A successful early result does not remove the longer-term risks associated with smoking.",
  },
  {
    id: "faq-15",
    category: "maintenance",
    categoryLabel: "Recovery & Maintenance",
    question: "How do I clean all on four dental implants?",
    answer:
      "Brush twice daily and clean beneath the bridge with the aids recommended for your design, such as suitable interdental brushes or floss. A water flosser may be an adjunct. Attend regular professional reviews so inflammation and mechanical problems can be detected early. [5]",
  },
  {
    id: "faq-16",
    category: "candidacy",
    categoryLabel: "Candidacy & Bone Loss",
    question: "What happens if my remaining teeth are failing?",
    answer:
      "That is one of the most common starting points for All on 4. During your assessment, we look at whether your remaining teeth can be saved or whether replacing the full arch is the more predictable long-term option. If extractions are needed, they are done at the same appointment as your implant placement, and they are included in your phase one fee.",
  },
  {
    id: "faq-17",
    category: "maintenance",
    categoryLabel: "Recovery & Maintenance",
    question: "What if my Bridge breaks or an Implant fails?",
    answer:
      "Contact us promptly if the bridge becomes loose, breaks or causes pain. Avoid chewing on the affected area and do not attempt a repair yourself. The cause must be assessed before deciding whether repair, replacement or further implant treatment is appropriate.",
  },
];

type CategoryFilter = "all" | "cost" | "procedure" | "candidacy" | "maintenance";

const countByCategory = (category: FAQItem["category"]) =>
  faqsData.filter((faq) => faq.category === category).length;

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

  // Collapsed questions stay in the HTML (hidden) so every question and answer is crawlable
  const isCollapsedByLimit = (idx: number) => searchQuery.trim().length === 0 && !showAll && idx >= INITIAL_COUNT;

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
                { key: "all", label: `All Questions (${faqsData.length})` },
                { key: "cost", label: `Cost & Super (${countByCategory("cost")})` },
                { key: "procedure", label: `Procedure & Implants (${countByCategory("procedure")})` },
                { key: "candidacy", label: `Candidacy & Bone Loss (${countByCategory("candidacy")})` },
                { key: "maintenance", label: `Recovery & Care (${countByCategory("maintenance")})` },
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
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIds.has(faq.id);
              const answerId = `${faq.id}-answer`;
              return (
                <div
                  key={faq.id}
                  hidden={isCollapsedByLimit(idx)}
                  style={{
                    backgroundColor: "#FAF9F6",
                    borderRadius: "12px",
                    border: isOpen ? "1px solid #E86337" : "1px solid #EAE5DC",
                    overflow: "hidden",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <h3 style={{ margin: 0 }}>
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
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
                        fontFamily: "var(--font-prata)",
                        fontSize: "clamp(0.95rem, 2.8vw, 1.05rem)",
                        color: "#1C1C1E",
                        fontWeight: 400,
                        lineHeight: 1.35,
                      }}
                    >
                      <span>{faq.question}</span>

                      <span
                        aria-hidden
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
                  </h3>

                  {/* Answer is always rendered as plain text; the grid row animates it open */}
                  <div
                    id={answerId}
                    role="region"
                    inert={!isOpen}
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.22s ease",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <p
                        style={{
                          margin: "0 1.35rem 1.25rem",
                          paddingTop: "0.85rem",
                          borderTop: "1px solid #ECE7DE",
                          fontFamily: "var(--font-assistant)",
                          fontSize: "0.92rem",
                          lineHeight: 1.65,
                          color: "#505055",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
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
            <p style={{ fontFamily: "var(--font-prata)", fontSize: "1.15rem", color: "#1C1C1E", margin: "0 0 0.2rem" }}>
              Book an All on 4 Consultation in Sydney
            </p>
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
