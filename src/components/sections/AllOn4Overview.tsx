"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus, Check, ArrowRight } from "lucide-react";

export default function AllOn4Overview() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [readMoreIntro, setReadMoreIntro] = useState(false);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Exact Denture Comparison Table from Live Website
  const comparisonData = [
    {
      feature: "Surgery Required",
      allon4: "Yes",
      dentures: "Usually No",
    },
    {
      feature: "Fixed in place",
      allon4: "Yes",
      dentures: "No",
    },
    {
      feature: "Cleaning",
      allon4: "Daily cleaning around and beneath the bridge; professional maintenance",
      dentures: "Removed daily for cleaning; periodic review or reline may be needed",
    },
    {
      feature: "Stability when eating",
      allon4: "Higher",
      dentures: "May vary",
    },
    {
      feature: "Denture adhesives required",
      allon4: "Usually not",
      dentures: "Often",
    },
    {
      feature: "Supported by implants",
      allon4: "Yes",
      dentures: "No",
    },
    {
      feature: "Designed as a fixed solution",
      allon4: "Yes",
      dentures: "No",
    },
    {
      feature: "Treatment time",
      allon4: "Surgical and healing stages",
      dentures: "Usually shorter and non-surgical",
    },
  ];

  return (
    <section
      id="overview"
      style={{
        padding: "clamp(3.5rem, 6vw, 5.5rem) 0",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <style>{`
        .sc-hero-split {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(1.5rem, 3.5vw, 3rem);
          align-items: center;
          margin-bottom: clamp(2.5rem, 4.5vw, 3.5rem);
        }
        .sc-acc-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(1.25rem, 3vw, 2.5rem);
          align-items: center;
          padding-top: 0.5rem;
        }
        .sc-card-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
          border: 1px solid #ECE7DE;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
          object-fit: cover;
        }
        .sc-overview-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--font-assistant), sans-serif;
          font-size: 0.92rem;
          margin-top: 0.75rem;
        }
        .sc-overview-table th, .sc-overview-table td {
          padding: 0.85rem 1rem;
          text-align: left;
          border-bottom: 1px solid #ECE7DE;
        }
        .sc-overview-table th {
          background-color: #F4EFEB;
          color: #1C1C1E;
          font-weight: 700;
        }
        .sc-acc-btn {
          width: 100%;
          padding: 1.2rem 1.4rem;
          display: flex;
          justifyContent: space-between;
          align-items: center;
          gap: 1rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .sc-acc-btn h3 {
          font-size: clamp(1.05rem, 3.2vw, 1.25rem) !important;
          line-height: 1.35 !important;
        }
        .sc-acc-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        @media (max-width: 820px) {
          .sc-hero-split, .sc-acc-split {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>

      <div className="container-sc" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.25rem" }}>
        {/* ─── MAIN SECTION INTRO: WHAT ARE ALL ON 4 DENTAL IMPLANTS (2-Column with Model Image) ─── */}
        <div className="sc-hero-split">
          <div>
            <h2
              style={{
                fontFamily: "var(--font-prata), Georgia, serif",
                fontSize: "clamp(1.45rem, 5vw, 2.9rem)",
                color: "#1C1C1E",
                fontWeight: 400,
                lineHeight: 1.22,
                marginBottom: "1rem",
              }}
            >
              What are All on 4 dental implants (full arch) ?
            </h2>

            <div
              style={{
                fontFamily: "var(--font-assistant), sans-serif",
                fontSize: "clamp(0.88rem, 2.8vw, 1.05rem)",
                lineHeight: 1.68,
                color: "#444449",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              <p style={{ margin: 0 }}>
                All on 4 is a full arch treatment where a complete fixed bridge of replacement teeth is supported by a small number of dental implants, most commonly four, and up to six where your anatomy calls for it. It&apos;s designed for patients missing all or most of their upper or lower teeth, and it removes the need to place an individual implant for every missing tooth. Some patients refer to this as All on 4 implants (full arch) treatment, while others simply call it All on four implants.
              </p>

              <AnimatePresence>
                {readMoreIntro && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: "0.85rem" }}
                  >
                    <p style={{ margin: 0 }}>
                      The two rear implants are placed at an angle of up to 45 degrees. This is not just a technical detail. Angling the rear implants lets them reach denser areas of existing bone further forward in the jaw, which is why most patients can avoid the bone grafting that traditional full-arch implant approaches often require. Less surgery, less recovery time, and in most cases, a same-day temporary set of teeth, so you are never without a smile while things heal.
                    </p>
                    <p style={{ margin: 0 }}>
                      The final bridge is fixed permanently to the implants. It does not come out at night. It does not need adhesive. It functions much more like your natural teeth than any removable denture can.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setReadMoreIntro(!readMoreIntro)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "#E86337",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  alignSelf: "flex-start",
                }}
              >
                <span>{readMoreIntro ? "Read less" : "Read more"}</span>
                <span style={{ fontSize: "0.75rem" }}>{readMoreIntro ? "▲" : "▼"}</span>
              </button>
            </div>

            <div style={{ marginTop: "1.25rem" }}>
              <a
                href="#cost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.75rem 1.4rem",
                  backgroundColor: "#E86337",
                  color: "#ffffff",
                  borderRadius: "8px",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                }}
              >
                <span>Complete my smile</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div>
            <Image
              src="/assets/allon4/dental-implants-model.jpg"
              alt="Woman pointing to All on 4 dental implants cross-section model at Smile Concepts Sydney"
              width={348}
              height={395}
              className="sc-card-img"
              priority
            />
          </div>
        </div>

        {/* ─── ACCORDIONS: ORIGINAL SECTIONS WITH EMBEDDED IMAGES ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
          {/* 1. Are All on 4 or All on X Implants Right for You? (With Candidate Image) */}
          <div style={{ backgroundColor: "#FAF9F6", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("suitability")} className="sc-acc-btn">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                Are All on 4 or All on X Implants Right for You?
              </h3>
              <span
                className="sc-acc-icon"
                style={{
                  backgroundColor: openSection === "suitability" ? "#E86337" : "#F3F0EA",
                  color: openSection === "suitability" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "suitability" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "suitability" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 1.4rem 1.4rem", borderTop: "1px solid #ECE7DE" }}>
                    <div className="sc-acc-split">
                      <div>
                        <p style={{ marginTop: "0.5rem", marginBottom: "0.85rem", fontFamily: "var(--font-assistant)", fontSize: "0.95rem", lineHeight: 1.6, color: "#444" }}>
                          Suitability for All on 4 at Smile Concepts is always confirmed with a clinical assessment and a 3D CBCT scan at our practice in Sydney, CBD. You may be a suitable candidate for All on 4 or All on X if any of the following applies to you:
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.85rem" }}>
                          {[
                            "You have lost most or all of your teeth",
                            "Your dentures feel loose when you eat or speak",
                            "Several remaining teeth are failing or beyond repair",
                            "You want a fixed solution that stays in place permanently",
                            "You have experienced bone loss after tooth loss",
                            "You want to understand your long-term options properly",
                          ].map((item, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem" }}>
                              <span
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "50%",
                                  backgroundColor: "rgba(34, 197, 94, 0.15)",
                                  color: "#16A34A",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  marginTop: "2px",
                                }}
                              >
                                <Check size={12} strokeWidth={3} />
                              </span>
                              <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.92rem", color: "#333", lineHeight: 1.45 }}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                        <p style={{ margin: 0, fontFamily: "var(--font-assistant)", fontSize: "0.9rem", color: "#666", lineHeight: 1.55 }}>
                          We look at your bone volume, oral health and medical history before recommending anything. If All on 4 or All on X isn&apos;t the right fit, we&apos;ll tell you and explain what alternatives exist.
                        </p>
                      </div>

                      <div>
                        <Image
                          src="/assets/allon4/candidate-smile.jpg"
                          alt="Patient evaluating All on 4 dental implants treatment at Smile Concepts Sydney"
                          width={450}
                          height={437}
                          className="sc-card-img"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2. Temporary Teeth And Final Teeth: What To Expect (With Bridge Image) */}
          <div style={{ backgroundColor: "#FAF9F6", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("teeth-expect")} className="sc-acc-btn">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                Temporary Teeth And Final Teeth: What To Expect
              </h3>
              <span
                className="sc-acc-icon"
                style={{
                  backgroundColor: openSection === "teeth-expect" ? "#E86337" : "#F3F0EA",
                  color: openSection === "teeth-expect" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "teeth-expect" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "teeth-expect" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 1.4rem 1.4rem", borderTop: "1px solid #ECE7DE" }}>
                    <div className="sc-acc-split">
                      <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.95rem", lineHeight: 1.65, color: "#444" }}>
                        <p style={{ marginTop: "0.5rem", marginBottom: "0.85rem" }}>
                          Will you be without teeth during treatment? For most suitable patients, no. A fixed temporary bridge is fitted on the same day as surgery (or shortly after), so you leave looking and functioning normally while the implants heal underneath.
                        </p>
                        <p style={{ marginBottom: "0.85rem" }}>
                          Once healing is complete, the final bridge is designed and fitted. We walk you through your material options at consultation, including the difference between acrylic and zirconia, so you can make a decision that actually makes sense for your budget and your priorities rather than just accepting whatever is standard.
                        </p>
                        <p style={{ margin: 0 }}>
                          It is worth understanding the difference between the two stages when you are comparing costs, because the materials and work involved are quite different.
                        </p>
                      </div>

                      <div style={{ backgroundColor: "#000000", borderRadius: "12px", padding: "0.5rem", border: "1px solid #ECE7DE" }}>
                        <Image
                          src="/assets/allon4/temporary-final-teeth-bridge.jpg"
                          alt="All on 4 temporary fixed teeth bridge restoration at Smile Concepts Sydney"
                          width={348}
                          height={395}
                          style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. All on 4 vs All on X: What Do These Names Mean? */}
          <div style={{ backgroundColor: "#FAF9F6", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("names")} className="sc-acc-btn">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                All on 4 vs All on X: What Do These Names Mean?
              </h3>
              <span
                className="sc-acc-icon"
                style={{
                  backgroundColor: openSection === "names" ? "#E86337" : "#F3F0EA",
                  color: openSection === "names" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "names" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "names" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 1.4rem 1.4rem",
                      borderTop: "1px solid #ECE7DE",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#444",
                    }}
                  >
                    <p style={{ marginTop: "1rem", marginBottom: "0.85rem" }}>
                      If you&apos;ve been researching fixed teeth, you&apos;ve probably seen both &ldquo;All on 4&rdquo; and &ldquo;All on X&rdquo; and wondered whether they&apos;re different treatments. They&apos;re not; they&apos;re two names for the same thing: a full arch of fixed teeth supported by dental implants, so you never take them out.
                    </p>
                    <p style={{ marginBottom: "0.85rem" }}>
                      &ldquo;All on 4&rdquo; is simply the best-known name for this treatment. It began as a concept where a full arch is supported on four implants. &ldquo;All on X&rdquo; is the umbrella term the profession uses, where the &ldquo;X&rdquo; stands for the number of implants, because the right number is different for every patient.
                    </p>
                    <p style={{ marginBottom: "0.85rem" }}>
                      Whether you&apos;re searching for All on X dental implants or the more familiar &ldquo;All on 4,&rdquo; you&apos;ll find that both treatments are based on the same principle: replacing a full arch of teeth with a fixed implant-supported prosthesis.
                    </p>
                    <p style={{ marginBottom: "0.85rem" }}>
                      Today, many clinicians prefer the term All on X because it offers greater flexibility, using four, five, six, or more implants depending on what&apos;s clinically appropriate for each patient.
                    </p>
                    <p style={{ margin: 0, fontSize: "0.88rem", color: "#666" }}>
                      All-on-4® is a registered trademark and treatment concept of Nobel Biocare. Smile Concepts is an independent practice and plans each full arch case using the implant system best suited to your case, which may include Neoss, DIO, Nobel Biocare, Straumann or other leading implant systems.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Why Choose All on Four Dental Implants in Sydney */}
          <div style={{ backgroundColor: "#FAF9F6", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("whychoose")} className="sc-acc-btn">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                Why Choose All on Four Dental Implants in Sydney
              </h3>
              <span
                className="sc-acc-icon"
                style={{
                  backgroundColor: openSection === "whychoose" ? "#E86337" : "#F3F0EA",
                  color: openSection === "whychoose" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "whychoose" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "whychoose" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 1.4rem 1.4rem",
                      borderTop: "1px solid #ECE7DE",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#444",
                    }}
                  >
                    <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                      The all on four treatment concept is all about restoring everyday comfort and function. It&apos;s a smarter, simpler way to get a full, beautiful smile and here&apos;s why so many people in Sydney are choosing it:
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1rem" }}>
                      <div style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "10px", border: "1px solid #ECE7DE" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", marginBottom: "0.25rem" }}>Permanent Teeth</strong>
                        <span>Say goodbye to dentures that slip and shift. All‑on‑4 gives you a fixed, stable set of teeth that stays with you even when you eat or talk.</span>
                      </div>
                      <div style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "10px", border: "1px solid #ECE7DE" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", marginBottom: "0.25rem" }}>Natural Look and Feel</strong>
                        <span>They look, feel, and work like your own real teeth. Honestly, you&apos;ll forget they&apos;re even implants after a while. They&apos;re that good.</span>
                      </div>
                      <div style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "10px", border: "1px solid #ECE7DE" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", marginBottom: "0.25rem" }}>Quick Results</strong>
                        <span>The best part. Most people don&apos;t need bone grafting. That means you walk out with a stunning smile on the very same day, or shortly afterwards.</span>
                      </div>
                      <div style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "10px", border: "1px solid #ECE7DE" }}>
                        <strong style={{ display: "block", color: "#1C1C1E", marginBottom: "0.25rem" }}>One Price, Tailored Support</strong>
                        <span>Whether your plan calls for four, five or six implants, your price per arch stays the same. You get the most stable solution for your anatomy at one clear price.</span>
                      </div>
                    </div>

                    <p style={{ margin: 0, fontSize: "0.88rem", color: "#666" }}>
                      Results vary, and the treatment is not suitable for everyone. We assess every case individually before making any recommendation.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 5. How Many Implants Will I Need: All on 4, All on 5, All on 6? */}
          <div style={{ backgroundColor: "#FAF9F6", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("implants-needed")} className="sc-acc-btn">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                How Many Implants Will I Need: All on 4, All on 5, All on 6?
              </h3>
              <span
                className="sc-acc-icon"
                style={{
                  backgroundColor: openSection === "implants-needed" ? "#E86337" : "#F3F0EA",
                  color: openSection === "implants-needed" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "implants-needed" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "implants-needed" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 1.4rem 1.4rem",
                      borderTop: "1px solid #ECE7DE",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#444",
                    }}
                  >
                    <p style={{ marginTop: "1rem", marginBottom: "0.85rem" }}>
                      The number of implants is chosen for you after a thorough clinical assessment. Many patients are treated on four implants, the classic &ldquo;All on 4.&rdquo; Others do better with five or six, especially where the bone is softer, or the bite is heavier. That&apos;s &ldquo;All on 5&rdquo; or &ldquo;All on 6.&rdquo; Same treatment, same fixed teeth, just more support where your anatomy needs it.
                    </p>
                    <p style={{ margin: 0 }}>
                      Here&apos;s what matters most: we don&apos;t charge per implant. Your dentist decides whether four, five or six implants will give you the strongest, longest-lasting result after thoroughly analysing your X-rays and 3D CBCT scan. Your treatment is driven by your anatomy, not by a price list.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 6. The Implants We Use & Our All on 4 Technology */}
          <div style={{ backgroundColor: "#FAF9F6", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("implants-tech")} className="sc-acc-btn">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                The Implants We Use &amp; Our All on 4 Technology
              </h3>
              <span
                className="sc-acc-icon"
                style={{
                  backgroundColor: openSection === "implants-tech" ? "#E86337" : "#F3F0EA",
                  color: openSection === "implants-tech" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "implants-tech" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "implants-tech" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 1.4rem 1.4rem",
                      borderTop: "1px solid #ECE7DE",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#444",
                    }}
                  >
                    <p style={{ marginTop: "1rem", marginBottom: "0.85rem" }}>
                      Smile Concepts works with several of the world&apos;s leading implant systems, including Neoss, DIO, Nobel Biocare and Straumann, among others, and our dentists have trained on and worked with most major systems.
                    </p>
                    <p style={{ marginBottom: "0.85rem" }}>
                      Why does this matter to you? Because your jaw is unique. A clinic tied to one brand has to make your anatomy fit their implant. We choose the implant system that best fits your bone, your bite and your long-term outcome. This is brand-agnostic, anatomy-first implant dentistry.
                    </p>
                    <p style={{ marginBottom: "1.25rem" }}>
                      It&apos;s also why other clinics and overseas patients send us their revision and redo cases for their All on Four dental implants. When a full arch treatment done elsewhere hasn&apos;t worked out, correcting it takes broad experience across different implant systems and complex bone situations, and that&apos;s exactly the experience our team has built.
                    </p>

                    <h4 style={{ fontFamily: "var(--font-prata)", fontSize: "1.1rem", color: "#1C1C1E", margin: "1.25rem 0 0.65rem" }}>
                      Our All on 4 Technology
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                      <div style={{ backgroundColor: "#ffffff", padding: "0.85rem 1rem", borderRadius: "8px", border: "1px solid #ECE7DE" }}>
                        <strong style={{ display: "block", color: "#1C1C1E" }}>3D CBCT imaging</strong>
                        <span style={{ fontSize: "0.9rem", color: "#555" }}>A full three-dimensional scan of your jaw so your implants are planned around your real anatomy, nerves and available bone before surgery begins.</span>
                      </div>
                      <div style={{ backgroundColor: "#ffffff", padding: "0.85rem 1rem", borderRadius: "8px", border: "1px solid #ECE7DE" }}>
                        <strong style={{ display: "block", color: "#1C1C1E" }}>4th generation digital guided implant technology</strong>
                        <span style={{ fontSize: "0.9rem", color: "#555" }}>Digital planning translated into precise, guided placement for predictable positioning across whichever implant system suits your case.</span>
                      </div>
                      <div style={{ backgroundColor: "#ffffff", padding: "0.85rem 1rem", borderRadius: "8px", border: "1px solid #ECE7DE" }}>
                        <strong style={{ display: "block", color: "#1C1C1E" }}>Laser dentistry</strong>
                        <span style={{ fontSize: "0.9rem", color: "#555" }}>Used to support minimally invasive treatment and comfortable healing.</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 7. All on 4 vs Traditional Dentures: How Do They Compare? (With Comparison Image) */}
          <div style={{ backgroundColor: "#FAF9F6", borderRadius: "14px", border: "1px solid #EAE5DC", overflow: "hidden" }}>
            <button type="button" onClick={() => toggleSection("compare")} className="sc-acc-btn">
              <h3 style={{ fontFamily: "var(--font-prata)", fontSize: "1.25rem", color: "#1C1C1E", margin: 0, fontWeight: 400 }}>
                All on 4 vs Traditional Dentures: How Do They Compare?
              </h3>
              <span
                className="sc-acc-icon"
                style={{
                  backgroundColor: openSection === "compare" ? "#E86337" : "#F3F0EA",
                  color: openSection === "compare" ? "#ffffff" : "#1C1C1E",
                }}
              >
                {openSection === "compare" ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>

            <AnimatePresence>
              {openSection === "compare" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 1.4rem 1.4rem", borderTop: "1px solid #ECE7DE", fontFamily: "var(--font-assistant)" }}>
                    <p style={{ marginTop: "1rem", marginBottom: "0.75rem", fontSize: "0.95rem", lineHeight: 1.6, color: "#444" }}>
                      While dentures remain a suitable option for some people, they are removable and may become loose over time as the jawbone changes.
                    </p>

                    <div style={{ overflowX: "auto" }}>
                      <table className="sc-overview-table">
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>All On 4</th>
                            <th>Traditional Dentures</th>
                          </tr>
                        </thead>
                        <tbody>
                          {comparisonData.map((row, idx) => (
                            <tr key={idx}>
                              <td style={{ fontWeight: 600, color: "#1C1C1E" }}>{row.feature}</td>
                              <td style={{ color: "#1C1C1E" }}>{row.allon4}</td>
                              <td style={{ color: "#666" }}>{row.dentures}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
                      <div style={{ flex: "1 1 200px", maxWidth: "260px", borderRadius: "10px", overflow: "hidden", border: "1px solid #EAE5DC" }}>
                        <Image
                          src="/assets/allon4/sunset-all-on-4.jpg"
                          alt="All on four before and after comparison at Smile Concepts Sydney"
                          width={518}
                          height={400}
                          style={{ width: "100%", height: "auto", display: "block" }}
                        />
                      </div>
                      <p style={{ flex: "2 1 260px", margin: 0, fontSize: "0.88rem", color: "#666", fontStyle: "italic", lineHeight: 1.55 }}>
                        The most suitable option depends on your oral health, goals, and clinical assessment.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
