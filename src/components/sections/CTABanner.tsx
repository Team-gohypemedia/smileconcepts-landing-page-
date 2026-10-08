"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { Mail, CheckCircle2 } from "lucide-react";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredTime: "",
    importantThing: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      ref={ref}
      id="book"
      style={{
        position: "relative",
        padding: "clamp(2.5rem, 4.5vw, 4rem) 0",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* Desktop Grid Areas */
        .sc-cta-grid {
          display: grid;
          grid-template-columns: 1.06fr 1fr;
          grid-template-areas:
            "form text"
            "form actions";
          column-gap: clamp(2rem, 4vw, 3.5rem);
          row-gap: 1.15rem;
          align-items: center;
          max-width: 1220px;
          margin: 0 auto;
        }
        .sc-cta-form-card {
          grid-area: form;
        }
        .sc-cta-text-block {
          grid-area: text;
          text-align: left;
        }
        .sc-cta-actions-block {
          grid-area: actions;
          text-align: left;
        }
        .sc-cta-actions {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          flex-wrap: wrap;
        }
        .sc-cta-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
        }
        .sc-cta-input:focus {
          border-color: #F47A4A !important;
          box-shadow: 0 0 0 3px rgba(244, 122, 74, 0.18) !important;
        }

        /* Mobile View: Reordered (1: Text Top, 2: Form, 3: Side-by-Side CTAs Bottom) */
        @media (max-width: 900px) {
          .sc-cta-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
            max-width: 520px !important;
            margin: 0 auto !important;
          }
          .sc-cta-text-block {
            order: 1 !important;
            text-align: center !important;
            margin-bottom: 0.25rem !important;
          }
          .sc-cta-form-card {
            order: 2 !important;
            width: 100% !important;
          }
          .sc-cta-actions-block {
            order: 3 !important;
            text-align: center !important;
            width: 100% !important;
            margin-top: 0.25rem !important;
          }
          .sc-cta-actions {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 0.6rem !important;
            width: 100% !important;
            justify-content: center !important;
          }
          .sc-cta-btn {
            flex: 1 1 0px !important;
            width: auto !important;
            max-width: none !important;
            padding: 0.65rem 0.5rem !important;
            font-size: 0.82rem !important;
            white-space: nowrap !important;
            gap: 0.35rem !important;
            justify-content: center !important;
          }
          .sc-cta-btn svg {
            width: 14px !important;
            height: 14px !important;
          }
        }

        @media (max-width: 520px) {
          .sc-cta-form-row {
            grid-template-columns: 1fr !important;
            gap: 0.55rem !important;
          }
        }
      `}</style>

      {/* BG image with signature brand gradient */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src={images.hero.background}
          alt=""
          fill
          style={{ objectFit: "cover", opacity: 0.15 }}
          aria-hidden
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #EC844B 0%, #F47A4A 40%, #e06030 100%)",
          }}
        />
      </div>

      {/* Decorative ambient circles */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-5rem",
          right: "-5rem",
          width: "20rem",
          height: "20rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-5rem",
          left: "-5rem",
          width: "24rem",
          height: "24rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-sc"
        style={{
          position: "relative",
          zIndex: 1,
          paddingLeft: "clamp(1rem, 4vw, 2.5rem)",
          paddingRight: "clamp(1rem, 4vw, 2.5rem)",
        }}
      >
        <div className="sc-cta-grid">
          {/* Form Card (Desktop Left Column / Mobile Order 2 Middle) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="sc-cta-form-card"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              padding: "clamp(1.2rem, 2.8vw, 1.75rem)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.16), 0 4px 14px rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              width: "100%",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "2.5rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.85rem",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(35, 164, 85, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#23A455",
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.45rem",
                    color: "#222222",
                    margin: 0,
                  }}
                >
                  Consultation Requested
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.9rem",
                    color: "#666666",
                    lineHeight: 1.55,
                    maxWidth: "340px",
                    margin: 0,
                  }}
                >
                  Thank you, <strong>{formState.fullName || "valued patient"}</strong>. Our Sydney CBD patient coordinator will call you shortly to confirm your booking.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      fullName: "",
                      email: "",
                      phone: "",
                      preferredTime: "",
                      importantThing: "",
                      notes: "",
                    });
                  }}
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.5rem 1.25rem",
                    backgroundColor: "transparent",
                    border: "1px solid #DCDFE4",
                    borderRadius: "8px",
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.82rem",
                    color: "#555555",
                    cursor: "pointer",
                  }}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                {/* Row 1: Full Name & Mobile Phone */}
                <div className="sc-cta-form-row">
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "#333333",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Full Name <span style={{ color: "#F47A4A" }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="sc-cta-input"
                      style={{
                        width: "100%",
                        padding: "0.5rem 0.75rem",
                        borderRadius: "8px",
                        border: "1px solid #DCDFE4",
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.86rem",
                        color: "#222222",
                        outline: "none",
                        backgroundColor: "#FAFAFA",
                        transition: "all 0.2s ease",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "#333333",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Mobile Number <span style={{ color: "#F47A4A" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="sc-cta-input"
                      style={{
                        width: "100%",
                        padding: "0.5rem 0.75rem",
                        borderRadius: "8px",
                        border: "1px solid #DCDFE4",
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.86rem",
                        color: "#222222",
                        outline: "none",
                        backgroundColor: "#FAFAFA",
                        transition: "all 0.2s ease",
                      }}
                    />
                  </div>
                </div>

                {/* Row 2: Email & Preferred Time */}
                <div className="sc-cta-form-row">
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "#333333",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Email <span style={{ color: "#F47A4A" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          left: "0.7rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#999999",
                          pointerEvents: "none",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Mail size={14} />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="sc-cta-input"
                        style={{
                          width: "100%",
                          padding: "0.5rem 0.75rem 0.5rem 2.15rem",
                          borderRadius: "8px",
                          border: "1px solid #DCDFE4",
                          fontFamily: "var(--font-assistant)",
                          fontSize: "0.86rem",
                          color: "#222222",
                          outline: "none",
                          backgroundColor: "#FAFAFA",
                          transition: "all 0.2s ease",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "#333333",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Preferred Time to Call
                    </label>
                    <input
                      type="text"
                      placeholder="eg. 10:30am"
                      value={formState.preferredTime}
                      onChange={(e) => setFormState({ ...formState, preferredTime: e.target.value })}
                      className="sc-cta-input"
                      style={{
                        width: "100%",
                        padding: "0.5rem 0.75rem",
                        borderRadius: "8px",
                        border: "1px solid #DCDFE4",
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.86rem",
                        color: "#222222",
                        outline: "none",
                        backgroundColor: "#FAFAFA",
                        transition: "all 0.2s ease",
                      }}
                    />
                  </div>
                </div>

                {/* The most important thing for me is * */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#333333",
                      marginBottom: "0.2rem",
                    }}
                  >
                    The most important thing for me is <span style={{ color: "#F47A4A" }}>*</span>
                  </label>
                  <select
                    required
                    value={formState.importantThing}
                    onChange={(e) => setFormState({ ...formState, importantThing: e.target.value })}
                    className="sc-cta-input"
                    style={{
                      width: "100%",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "8px",
                      border: "1px solid #DCDFE4",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.86rem",
                      color: formState.importantThing ? "#222222" : "#888888",
                      outline: "none",
                      backgroundColor: "#FAFAFA",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <option value="" disabled>Select Option</option>
                    <option value="fixed-teeth">Immediate Fixed Teeth (All-on-4)</option>
                    <option value="replace-dentures">Replacing loose or painful dentures</option>
                    <option value="broken-teeth">Fixing broken, failing, or missing teeth</option>
                    <option value="costs-payment">Costs, payment plans &amp; Superannuation release</option>
                    <option value="cosmetic-makeover">Cosmetic smile transformation &amp; aesthetics</option>
                  </select>
                </div>

                {/* Anything else */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#333333",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Is there anything else you would like to know?
                  </label>
                  <textarea
                    rows={2}
                    placeholder=""
                    value={formState.notes}
                    onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                    className="sc-cta-input"
                    style={{
                      width: "100%",
                      padding: "0.45rem 0.75rem",
                      borderRadius: "8px",
                      border: "1px solid #DCDFE4",
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.86rem",
                      color: "#222222",
                      outline: "none",
                      backgroundColor: "#FAFAFA",
                      resize: "vertical",
                      transition: "all 0.2s ease",
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    marginTop: "0.2rem",
                    padding: "0.72rem",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#F47A4A",
                    color: "#ffffff",
                    fontFamily: "var(--font-assistant)",
                    fontWeight: 700,
                    fontSize: "0.94rem",
                    cursor: loading ? "wait" : "pointer",
                    boxShadow: "0 4px 14px rgba(244, 122, 74, 0.35)",
                    transition: "background-color 0.2s ease, transform 0.15s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e06934")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F47A4A")}
                >
                  {loading ? "Submitting..." : "Request a Consultation"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Text Block (Desktop Top Right / Mobile Order 1 Top) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="sc-cta-text-block"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                color: "#ffffff",
                fontSize: "0.82rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: "0.4rem",
                fontFamily: "var(--font-assistant)",
                fontWeight: 700,
                opacity: 0.9,
              }}
            >
              Consultation &amp; Assessment
            </p>

            <h2
              style={{
                fontFamily: "var(--font-prata)",
                fontWeight: 400,
                fontSize: "clamp(1.4rem, 4.8vw, 2.8rem)",
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Book an All on 4 Consultation in Sydney
            </h2>

            <a
              href="tel:0292677777"
              style={{
                fontFamily: "var(--font-prata)",
                fontSize: "clamp(1.35rem, 4.2vw, 2.2rem)",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 400,
                marginBottom: "0.75rem",
                display: "inline-block",
                letterSpacing: "0.02em",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              02 9267 7777
            </a>

            <p
              style={{
                color: "rgba(255,255,255,0.92)",
                fontFamily: "var(--font-assistant)",
                fontWeight: 300,
                fontSize: "clamp(0.84rem, 2.6vw, 0.94rem)",
                lineHeight: 1.6,
                maxWidth: "520px",
                margin: "0 0 0.85rem 0",
              }}
            >
              If you&apos;re considering All on 4 dental implants (full arch) in Sydney, or exploring options for full arch dental implants Sydney wide, the first step is understanding your options. Our team will assess your oral health, discuss your concerns, and explain the most appropriate treatment options for your individual circumstances, including a clear picture of your All on 4 dental implants cost before you commit to anything. Whether you&apos;re exploring alternatives to dentures or looking for a fixed solution for failing teeth, we&apos;re here to help you make an informed decision with clear advice and personalised care.
            </p>
          </motion.div>

          {/* Action Buttons Block (Desktop Bottom Right / Mobile Order 3 Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="sc-cta-actions-block"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Direct Action Buttons */}
            <div className="sc-cta-actions">
              <a
                href="tel:0292677777"
                className="sc-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.55rem",
                  padding: "0 1.6rem",
                  height: "48px",
                  boxSizing: "border-box",
                  background: "#ffffff",
                  color: "#F47A4A",
                  border: "2px solid #ffffff",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 700,
                  fontSize: "0.94rem",
                  textDecoration: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#FCF8F8";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.16)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.12)";
                }}
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (02) 9267 7777
              </a>
              <a
                href="#book"
                className="sc-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 1.75rem",
                  height: "48px",
                  boxSizing: "border-box",
                  border: "2px solid #ffffff",
                  background: "transparent",
                  color: "#ffffff",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 600,
                  fontSize: "0.94rem",
                  textDecoration: "none",
                  borderRadius: "8px",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.18)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Book Online
              </a>
            </div>

            <p
              style={{
                marginTop: "1.2rem",
                fontFamily: "var(--font-assistant)",
                fontSize: "clamp(0.65rem, 1.8vw, 0.72rem)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Suite 403, Level 4/307 Pitt St, Sydney NSW 2000, Australia
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
