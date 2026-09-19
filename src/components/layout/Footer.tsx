"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, Mail, Globe, Clock } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.9v-2.89h2.538V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const treatments = [
  "All-on-4 Implants",
  "Dental Implants",
  "Porcelain Veneers",
  "Invisalign & Clear Braces",
  "Full Arch Rehabilitation",
  "Zirconia Bridges",
  "Laser Dentistry",
  "Sleep Dentistry",
];

const practice = [
  { label: "About Our Clinic", href: "#overview" },
  { label: "Our Oral Surgeons", href: "#team" },
  { label: "Smile Transformations", href: "#transformations" },
  { label: "Procedure & Technology", href: "#procedure" },
  { label: "All-on-4 FAQs", href: "#faq" },
  { label: "Payment Plans & Super", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FacebookIcon size={18} />,
    label: "Facebook",
    href: "https://www.facebook.com/SmileConceptsSydney",
  },
  {
    icon: <InstagramIcon size={18} />,
    label: "Instagram",
    href: "https://www.instagram.com/smileconceptssydney",
  },
  {
    icon: <YoutubeIcon size={18} />,
    label: "YouTube",
    href: "https://www.youtube.com/@smileconceptssydney",
  },
  {
    icon: <Globe size={18} />,
    label: "Website",
    href: "https://www.smileconcepts.com.au",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        backgroundColor: "#0A0B13",
        color: "#ffffff",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Background Ambient Glow */}
      <FooterBackgroundGradient />

      {/* Responsive Style for Mobile Side-by-Side Footer Menus */}
      <style>{`
        .sc-footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.2fr;
          gap: clamp(2rem, 4vw, 3.5rem);
          padding-bottom: 3rem;
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .sc-footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .sc-footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem 1.25rem !important;
            padding-bottom: 2rem !important;
          }
          .sc-footer-col-brand {
            grid-column: span 2 !important;
          }
          .sc-footer-col-treatments {
            grid-column: span 1 !important;
          }
          .sc-footer-col-practice {
            grid-column: span 1 !important;
          }
          .sc-footer-col-contact {
            grid-column: span 2 !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1520px",
          margin: "0 auto",
          padding: "clamp(4rem, 6vw, 6.5rem) clamp(1.5rem, 4vw, 3.5rem) 0.5rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Main Grid: 4 Columns (Side-by-Side on Mobile for Treatments & Practice) */}
        <div className="sc-footer-grid">
          {/* Column 1: Brand & Excellence */}
          <div className="sc-footer-col-brand" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ position: "relative", width: "195px", height: "46px" }}>
              <Image
                src="/images/brand/logo-white.png"
                alt="Smile Concepts Sydney CBD"
                fill
                sizes="195px"
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.65)",
                maxWidth: "320px",
                margin: 0,
              }}
            >
              Sydney CBD's premier centre for All on 4 Dental Implants, full mouth rehabilitation,
              and advanced aesthetic dentistry with over 40 years of continuous surgical leadership.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    color: "rgba(255, 255, 255, 0.7)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(244, 122, 74, 0.2)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#F47A4A";
                    (e.currentTarget as HTMLElement).style.color = "#F47A4A";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.12)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.7)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Treatments */}
          <div className="sc-footer-col-treatments">
            <h4
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#F47A4A",
                marginBottom: "1.25rem",
              }}
            >
              Treatments
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {treatments.map((t) => (
                <li key={t}>
                  <a
                    href="#procedure"
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.88rem",
                      color: "rgba(255, 255, 255, 0.65)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F47A4A")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.65)")}
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice & Patient Resources */}
          <div className="sc-footer-col-practice">
            <h4
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#F47A4A",
                marginBottom: "1.25rem",
              }}
            >
              Practice
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {practice.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    style={{
                      fontFamily: "var(--font-assistant)",
                      fontSize: "0.88rem",
                      color: "rgba(255, 255, 255, 0.65)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F47A4A")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.65)")}
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Clinical Hours */}
          <div className="sc-footer-col-contact" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h4
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#F47A4A",
                marginBottom: "0.25rem",
              }}
            >
              Contact Us
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <a
                href="tel:0292677777"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F47A4A")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(244, 122, 74, 0.15)",
                    color: "#F47A4A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={14} />
                </div>
                02 9267 7777
              </a>

              <a
                href="mailto:info@smileconcepts.com.au"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  textDecoration: "none",
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.88rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F47A4A")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.75)")}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(244, 122, 74, 0.15)",
                    color: "#F47A4A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={14} />
                </div>
                info@smileconcepts.com.au
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  color: "rgba(255, 255, 255, 0.65)",
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.85rem",
                  lineHeight: 1.5,
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(244, 122, 74, 0.15)",
                    color: "#F47A4A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <MapPin size={14} />
                </div>
                <span>Suite 201, 210 Pitt Street,<br />Sydney NSW 2000 (Sydney CBD)</span>
              </div>
            </div>

            {/* Operating Hours */}
            <div
              style={{
                marginTop: "0.5rem",
                padding: "0.85rem 1rem",
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-assistant)",
                  fontSize: "0.75rem",
                  color: "#F47A4A",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.45rem",
                }}
              >
                <Clock size={13} />
                Practice Hours
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.6)", fontFamily: "var(--font-assistant)", marginBottom: "0.2rem" }}>
                <span>Mon – Fri:</span>
                <span style={{ color: "#ffffff", fontWeight: 500 }}>8:00 AM – 6:00 PM</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.6)", fontFamily: "var(--font-assistant)" }}>
                <span>Saturday:</span>
                <span style={{ color: "#ffffff", fontWeight: 500 }}>9:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            margin: "1.5rem 0",
          }}
        />

        {/* Footer Bottom Bar: Legal & Copyright */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            fontFamily: "var(--font-assistant)",
            fontSize: "0.8rem",
            color: "rgba(255, 255, 255, 0.45)",
          }}
        >
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} Smile Concepts Sydney. All rights reserved. Registered Dental Practice ABN 34 114 474 153.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Treatment", "Patient Charter"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "rgba(255, 255, 255, 0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F47A4A")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.4)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant Interactive Text Hover Effect (Grand Scale Like Reference) */}
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 5,
          boxSizing: "border-box",
          padding: "0 clamp(1rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.75rem)",
        }}
      >
        <TextHoverEffect
          text="SMILE CONCEPTS"
          viewBox="0 0 780 85"
          fontSize="72px"
          strokeWidth={1.3}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </footer>
  );
}
