"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Before & After 6 Transformation Cards (Exact from Live Reference) ─── */
const transformationCards = [
  {
    label: "UPPER & LOWER VENEERS",
    image: "/assets/footer-cases/card-1.png",
  },
  {
    label: "ENHANCEMENT",
    image: "/assets/footer-cases/card-2.png",
  },
  {
    label: "CHIPPED TEETH",
    image: "/assets/footer-cases/card-3.png",
  },
  {
    label: "MISSING FRONT TEETH",
    image: "/assets/footer-cases/card-4.png",
  },
  {
    label: "INVISALIGN",
    image: "/assets/footer-cases/card-5.png",
  },
  {
    label: "GUMMY SMILE + WORN TEETH",
    image: "/assets/footer-cases/card-6.png",
  },
];

/* ─── Social Media Icons (Exact FontAwesome Glyphs from Live Reference - Uniform 24px Height) ─── */
const FacebookIcon = () => (
  <svg
    height="24"
    viewBox="0 0 320 512"
    fill="currentColor"
    style={{ display: "block", height: "24px", width: "auto" }}
    aria-hidden="true"
  >
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    height="24"
    viewBox="0 0 576 512"
    fill="currentColor"
    style={{ display: "block", height: "24px", width: "auto" }}
    aria-hidden="true"
  >
    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.583V175.185l142.739 81.205-142.739 81.276z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    height="24"
    viewBox="0 0 448 512"
    fill="currentColor"
    style={{ display: "block", height: "24px", width: "auto" }}
    aria-hidden="true"
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

export default function Footer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto slider for mobile: cycles every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformationCards.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + transformationCards.length) % transformationCards.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % transformationCards.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        position: "relative",
        paddingTop: "clamp(2.5rem, 4vw, 3.5rem)",
        paddingBottom: "2.5rem",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* Desktop/Tablet 6-Card Grid */
        .sc-live-footer-bna-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: clamp(8px, 1.2vw, 16px);
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 3vw, 2.5rem);
        }
        @media (max-width: 992px) and (min-width: 768px) {
          .sc-live-footer-bna-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
        }
        @media (max-width: 767px) {
          .sc-live-footer-bna-grid {
            display: none !important;
          }
        }

        /* Mobile Auto Slider */
        .sc-live-footer-bna-slider {
          display: none;
        }
        @media (max-width: 767px) {
          .sc-live-footer-bna-slider {
            display: block;
            width: 100%;
            padding: 0 1.25rem;
            box-sizing: border-box;
          }
        }

        /* Footer Navigation Columns */
        .sc-live-footer-cols {
          display: grid;
          grid-template-columns: 1.35fr 1fr 1fr 1fr;
          gap: clamp(1.5rem, 3.5vw, 3.5rem);
          max-width: 1400px;
          margin: clamp(2.5rem, 4vw, 4rem) auto 2.5rem;
          padding: 0 clamp(1rem, 3vw, 2.5rem);
        }
        @media (max-width: 992px) and (min-width: 769px) {
          .sc-live-footer-cols {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem 2rem;
          }
        }
        /* Mobile: Menus Side-by-Side (2 Columns) */
        @media (max-width: 768px) {
          .sc-live-footer-cols {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem 1.25rem !important;
            margin-top: 2rem !important;
          }
          .sc-footer-col-contact {
            grid-column: span 2 !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 1.5rem;
            margin-bottom: 0.25rem;
          }
          .sc-footer-col-info {
            grid-column: span 1 !important;
          }
          .sc-footer-col-services {
            grid-column: span 1 !important;
          }
          .sc-footer-col-moreservices {
            grid-column: span 1 !important;
          }
        }

        .sc-footer-link {
          color: #D1D5DB;
          text-decoration: none;
          font-family: var(--font-assistant), sans-serif;
          font-size: 0.92rem;
          line-height: 1.5;
          transition: color 0.2s ease;
          display: inline-block;
        }
        .sc-footer-link:hover {
          color: #E26A2C;
        }

        .sc-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          color: #D1D5DB;
          font-family: var(--font-assistant), sans-serif;
          font-size: 0.92rem;
          line-height: 1.5;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .sc-footer-contact-item:hover {
          color: #ffffff;
        }
        .sc-footer-contact-icon {
          color: #E26A2C;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .sc-footer-social-btn {
          color: #ffffff;
          transition: transform 0.2s ease, color 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 28px;
        }
        .sc-footer-social-btn:hover {
          color: #E26A2C;
          transform: translateY(-2px);
        }

        .sc-slider-arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(20, 20, 20, 0.85);
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(6px);
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .sc-slider-arrow-btn:active {
          transform: translateY(-50%) scale(0.92);
          background-color: #E26A2C;
          border-color: #E26A2C;
        }

        .sc-back-to-top-btn {
          position: absolute;
          bottom: 24px;
          right: 24px;
          width: 38px;
          height: 38px;
          background-color: #E26A2C;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          z-index: 20;
        }
        .sc-back-to-top-btn:hover {
          background-color: #d15616;
          transform: translateY(-2px);
        }
      `}</style>

      {/* ─── 1A. DESKTOP/TABLET: 6 Transformation Cards with White Borders (Exact Reference) ─── */}
      <div className="sc-live-footer-bna-grid">
        {transformationCards.map((card) => (
          <div
            key={card.label}
            style={{
              position: "relative",
              border: "2px solid #ffffff",
              aspectRatio: "1 / 1",
              overflow: "hidden",
              backgroundColor: "#111111",
              borderRadius: "2px",
            }}
          >
            <Image
              src={card.image}
              alt={card.label}
              fill
              quality={95}
              sizes="(max-width: 992px) 33vw, 17vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        ))}
      </div>

      {/* ─── 1B. MOBILE: Auto & Manual Slider with Left & Right Arrows ─── */}
      <div className="sc-live-footer-bna-slider">
        <div
          style={{
            position: "relative",
            maxWidth: "320px",
            margin: "0 auto",
            padding: "0 10px",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Transformation"
            className="sc-slider-arrow-btn"
            style={{ left: "-4px" }}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Slider Frame */}
          <div
            style={{
              overflow: "hidden",
              border: "2px solid #ffffff",
              backgroundColor: "#111111",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.7)",
              borderRadius: "2px",
            }}
          >
            <div
              style={{
                display: "flex",
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              {transformationCards.map((card) => (
                <div
                  key={card.label}
                  style={{
                    minWidth: "100%",
                    width: "100%",
                    position: "relative",
                    aspectRatio: "1 / 1",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    quality={95}
                    sizes="320px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Transformation"
            className="sc-slider-arrow-btn"
            style={{ right: "-4px" }}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Slider Indicator Dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            marginTop: "12px",
          }}
        >
          {transformationCards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                height: "6px",
                width: currentSlide === idx ? "20px" : "6px",
                borderRadius: "3px",
                backgroundColor: currentSlide === idx ? "#E26A2C" : "rgba(255, 255, 255, 0.3)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </div>
      </div>


      {/* ─── 2. MIDDLE 4 COLUMNS (Side-by-Side on Mobile for Information & Services) ─── */}
      <div className="sc-live-footer-cols">
        {/* Column 1: Contact Us */}
        <div className="sc-footer-col-contact">
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#E26A2C",
              fontSize: "clamp(1.02rem, 2.5vw, 1.25rem)",
              fontWeight: 600,
              margin: "0 0 1rem 0",
              letterSpacing: "0.01em",
            }}
          >
            Contact Us
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="tel:0292677777" className="sc-footer-contact-item">
              <Phone size={16} className="sc-footer-contact-icon" />
              <span>02 9267 7777</span>
            </a>

            <a href="mailto:info@smileconcepts.com.au" className="sc-footer-contact-item">
              <Mail size={16} className="sc-footer-contact-icon" />
              <span>info@smileconcepts.com.au</span>
            </a>

            <a
              href="https://maps.google.com/?q=Suite+403,+Level+4/307+Pitt+St,+Sydney+NSW+2000"
              target="_blank"
              rel="noopener noreferrer"
              className="sc-footer-contact-item"
            >
              <MapPin size={16} className="sc-footer-contact-icon" />
              <span>
                Suite 403, Level 4/307 Pitt St,
                <br />
                Sydney NSW 2000, Australia
              </span>
            </a>

            <a
              href="https://www.smileconcepts.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="sc-footer-contact-item"
            >
              <MapPin size={16} className="sc-footer-contact-icon" />
              <span>Dentist in Sydney CBD</span>
            </a>
          </div>
        </div>

        {/* Column 2: Information (Side-by-Side on Mobile) */}
        <div className="sc-footer-col-info">
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#E26A2C",
              fontSize: "clamp(1.02rem, 2.5vw, 1.25rem)",
              fontWeight: 600,
              margin: "0 0 1rem 0",
              letterSpacing: "0.01em",
            }}
          >
            Information
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            {[
              { label: "Smile Gallery", href: "#transformations" },
              { label: "Dr Manish Shah", href: "#team" },
              { label: "Dr Kinnar Shah", href: "#team" },
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Use", href: "#" },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="sc-footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Services (Side-by-Side on Mobile) */}
        <div className="sc-footer-col-services">
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#E26A2C",
              fontSize: "clamp(1.02rem, 2.5vw, 1.25rem)",
              fontWeight: 600,
              margin: "0 0 1rem 0",
              letterSpacing: "0.01em",
            }}
          >
            Our Services
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            {[
              { label: "Porcelain Veneers", href: "https://www.smileconcepts.com.au/porcelain-veneers/" },
              { label: "Dental Implants", href: "https://www.smileconcepts.com.au/dental-implants/" },
              { label: "All Teeth On 4", href: "#overview" },
              { label: "Invisalign", href: "https://www.smileconcepts.com.au/invisalign/" },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="sc-footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: More Services */}
        <div className="sc-footer-col-moreservices">
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#E26A2C",
              fontSize: "clamp(1.02rem, 2.5vw, 1.25rem)",
              fontWeight: 600,
              margin: "0 0 1rem 0",
              letterSpacing: "0.01em",
            }}
          >
            More Services
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            {[
              { label: "Root Canal Treatment", href: "https://www.smileconcepts.com.au/" },
              { label: "Wisdom Teeth Removal", href: "https://www.smileconcepts.com.au/" },
              { label: "Emergency Dentistry", href: "https://www.smileconcepts.com.au/" },
              { label: "TMJ Pain", href: "https://www.smileconcepts.com.au/" },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="sc-footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── 3. BOTTOM SECTION: Social Icons, Copyright, DMCA Badge + Smile Concepts Link ─── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.1rem",
          marginTop: "1.5rem",
          paddingBottom: "3rem",
        }}
      >
        {/* Social Icons (Uniform 24px Height, Perfectly Aligned) */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.75rem", height: "28px" }}>
          <a
            href="https://www.facebook.com/SmileConceptsSydney"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="sc-footer-social-btn"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.youtube.com/@smileconceptssydney"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="sc-footer-social-btn"
          >
            <YoutubeIcon />
          </a>
          <a
            href="https://www.instagram.com/smileconceptssydney"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="sc-footer-social-btn"
          >
            <InstagramIcon />
          </a>
        </div>

        {/* Copyright */}
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "0.88rem",
            color: "#9CA3AF",
            textAlign: "center",
          }}
        >
          Copyright @ 2004 - 2025 Smile Concepts. All Rights Reserved.
        </p>

        {/* DMCA Badge + Smile Concepts Link Group (Tightly paired like reference) */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.45rem", marginTop: "0.25rem" }}>
          <a
            href="https://www.dmca.com/Protection/Status.aspx"
            target="_blank"
            rel="noopener noreferrer"
            title="DMCA.com Protection Status"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              backgroundColor: "#E5B127",
              border: "1px solid #C89517",
              borderRadius: "3px",
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            <span
              style={{
                backgroundColor: "#DEAA20",
                color: "#000000",
                fontWeight: 800,
                fontSize: "11px",
                letterSpacing: "0.03em",
                padding: "3px 7px",
                fontFamily: "system-ui, -apple-system, sans-serif",
                borderRight: "1px solid rgba(0,0,0,0.25)",
              }}
            >
              DMCA
            </span>
            <span
              style={{
                backgroundColor: "#E5B127",
                color: "#111111",
                fontWeight: 800,
                fontSize: "10.5px",
                letterSpacing: "0.04em",
                padding: "3px 8px",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              PROTECTED
            </span>
          </a>

          {/* Smile Concepts Orange Link */}
          <a
            href="https://www.smileconcepts.com.au"
            style={{
              color: "#E26A2C",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "var(--font-assistant), sans-serif",
              transition: "opacity 0.2s ease",
              marginTop: "2px",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Smile Concepts
          </a>
        </div>
      </div>

      {/* ─── 4. BACK TO TOP BUTTON (Bottom Right Corner) ─── */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="sc-back-to-top-btn"
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </button>
    </footer>
  );
}
