"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

interface NavLinkItem {
  label: string;
  href: string;
  id: string;
  aliases?: string[];
}

// Complete section navigation matching page order
const navLinks: NavLinkItem[] = [
  { label: "Overview", href: "#overview", id: "overview" },
  { label: "Results", href: "#transformations", id: "transformations", aliases: ["testimonials", "complete-my-smile"] },
  { label: "About All on 4 (X)", href: "#general-info", id: "general-info", aliases: ["all-on-4-vs-all-on-x"] },
  { label: "Surgery", href: "#implant-surgery", id: "implant-surgery", aliases: ["recovery"] },
  { label: "Process", href: "#procedure", id: "procedure", aliases: ["dentures-comparison"] },
  { label: "Cost", href: "#cost", id: "cost", aliases: ["snap-on-dentures", "payment-options"] },
  { label: "Risks", href: "#risks", id: "risks" },
  { label: "About Us", href: "#team", id: "team", aliases: ["why-patients", "our-practice", "affiliations"] },
  { label: "FAQs", href: "#faq", id: "faq", aliases: ["important-information", "book"] },
];

const allSectionIds = Array.from(
  new Set(navLinks.flatMap((link) => [link.id, ...(link.aliases ?? [])]))
);

// Smooth-scroll in-page links to their section
const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  scrollToSection(href.slice(1));
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Scroll-spy: track the currently visible section
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = (document.querySelector("header")?.getBoundingClientRect().bottom ?? 0) + 24;
      let current: { id: string; top: number } | null = null;
      for (const id of allSectionIds) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line && (!current || top > current.top)) current = { id, top };
      }
      setActiveSection(current?.id ?? null);
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

  const isActive = (link: NavLinkItem) =>
    !!activeSection && (link.id === activeSection || (link.aliases?.includes(activeSection) ?? false));

  // Close the drawer first, then scroll to section
  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    window.setTimeout(() => scrollToSection(href.slice(1)), 80);
  };

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero-scroll-container");
      if (hero) {
        const pinSpacer = hero.parentElement;
        const target = pinSpacer && pinSpacer.classList.contains("pin-spacer") ? pinSpacer : hero;
        const rectBottom = target.getBoundingClientRect().bottom;
        setScrolled(rectBottom <= 90);
      } else {
        setScrolled(window.scrollY > window.innerHeight * 1.5);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isLight = scrolled || mobileOpen;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        backgroundColor: isLight ? "rgba(255, 255, 255, 0.98)" : "transparent",
        backgroundImage: isLight
          ? "none"
          : "linear-gradient(to bottom, rgba(10, 10, 18, 0.85) 0%, rgba(10, 10, 18, 0.4) 60%, transparent 100%)",
        backdropFilter: isLight ? "blur(14px)" : "none",
        WebkitBackdropFilter: isLight ? "blur(14px)" : "none",
        boxShadow: isLight ? "0 4px 24px rgba(0, 0, 0, 0.08)" : "none",
        paddingTop: isLight ? "0.55rem" : "0.95rem",
        paddingBottom: isLight ? "0.55rem" : "0.95rem",
      }}
    >
      <div
        className="container-sc"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(0.75rem, 1.5vw, 1.5rem)",
          maxWidth: "1620px",
          margin: "0 auto",
          paddingLeft: "clamp(0.85rem, 2vw, 2.5rem)",
          paddingRight: "clamp(0.85rem, 2vw, 2.5rem)",
        }}
      >
        {/* ── Brand Logo ── */}
        <Link
          href="https://www.smileconcepts.com.au/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
          aria-label="Smile Concepts - Home"
        >
          <div
            className="navbar-brand-logo-container"
            style={{
              position: "relative",
              width: "165px",
              height: "38px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* White Logo for dark background */}
            <Image
              src="/assets/brand/logo-white.png"
              alt="Smile Concepts Sydney CBD"
              fill
              sizes="165px"
              priority
              style={{
                objectFit: "contain",
                objectPosition: "left center",
                transition: "opacity 0.3s ease",
                opacity: isLight ? 0 : 1,
                pointerEvents: isLight ? "none" : "auto",
              }}
            />
            {/* Original Dark/Color Logo for light background */}
            <Image
              src="/assets/brand/cropped-logo_large-1.png"
              alt="Smile Concepts Sydney CBD"
              fill
              sizes="165px"
              priority
              style={{
                objectFit: "contain",
                objectPosition: "left center",
                transition: "opacity 0.3s ease",
                opacity: isLight ? 1 : 0,
                pointerEvents: isLight ? "auto" : "none",
              }}
            />
          </div>
        </Link>

        {/* ── Desktop Navigation (All Section Menus, Compact & Direct) ── */}
        <nav
          className="sc-desktop-nav"
          style={{
            alignItems: "center",
            gap: "clamp(0.35rem, 0.8vw, 1rem)",
            margin: "0 auto",
            flexShrink: 1,
            minWidth: 0,
          }}
          aria-label="Main Section Navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <a
                key={link.id}
                href={link.href}
                className="sc-nav-link"
                onClick={(e) => handleSectionClick(e, link.href)}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.4rem 0.25rem",
                  whiteSpace: "nowrap",
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "clamp(0.98rem, 1.1vw, 1.1rem)",
                  fontWeight: active ? 700 : 550,
                  letterSpacing: "0.01em",
                  color: active && isLight ? "#F47A4A" : isLight ? "#2C2C2C" : "rgba(255, 255, 255, 0.95)",
                  textDecoration: "none",
                  transition: "color 0.18s ease, box-shadow 0.18s ease",
                  boxShadow: active && isLight ? "inset 0 -2px 0 #F47A4A" : "none",
                  flexShrink: 0,
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* ── Desktop CTAs ── */}
        <div
          className="sc-desktop-cta-group"
          style={{
            alignItems: "center",
            gap: "clamp(0.75rem, 1.2vw, 1.25rem)",
            flexShrink: 0,
          }}
        >
          {/* Phone call CTA */}
          <a
            href="tel:0292677777"
            className="sc-phone-link"
            aria-label="Call 02 9267 7777"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "1.23rem",
              fontWeight: 700,
              color: isLight ? "#222222" : "#ffffff",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            <span
              className="sc-phone-icon"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: isLight ? "rgba(244, 122, 74, 0.12)" : "rgba(255, 255, 255, 0.15)",
                color: "#F47A4A",
                flexShrink: 0,
              }}
            >
              <Phone size={17} />
            </span>
            <span className="sc-phone-text">02 9267 7777</span>
          </a>

          {/* "Book Online" button (goes to the booking section) */}
          <a
            href="https://www.smileconcepts.com.au/book-online.html"
            className="sc-primary-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.62rem 1.4rem",
              background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",
              color: "#ffffff",
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.92rem",
              fontWeight: 700,
              letterSpacing: "0.02em",
              textTransform: "capitalize",
              textDecoration: "none",
              borderRadius: "7px",
              boxShadow: "0 4px 14px rgba(244, 122, 74, 0.35)",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              whiteSpace: "nowrap",
            }}
          >
            <span className="sc-book-full">Book Online</span>
            <span className="sc-book-short">Book</span>
          </a>
        </div>

        {/* ── Mobile Hamburger Toggle ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          className="sc-mobile-toggle"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: isLight ? "#222222" : "#ffffff",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            transition: "color 0.2s ease",
          }}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: "#ffffff",
              borderTop: "1px solid #EEEEEE",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
              overflow: "hidden",
            }}
            data-lenis-prevent
          >
            <div
              style={{
                maxWidth: "1240px",
                margin: "0 auto",
                padding: "1rem 1.25rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                maxHeight: "calc(100dvh - 70px)",
                overflowY: "auto",
                overscrollBehavior: "contain",
              }}
            >
              {navLinks.map((link) => {
                const active = isActive(link);
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleMobileClick(e, link.href)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.65rem 0.75rem",
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: active ? 700 : 600,
                      color: active ? "#F47A4A" : "#222222",
                      backgroundColor: active ? "#FFF4EF" : "transparent",
                      borderRadius: "8px",
                      textDecoration: "none",
                      transition: "all 0.15s ease",
                      borderBottom: "1px solid #f5f5f5",
                    }}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#F47A4A",
                        }}
                      />
                    )}
                  </a>
                );
              })}

              <div
                style={{
                  marginTop: "1rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid #EEEEEE",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <a
                  href="tel:0292677777"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    padding: "0.75rem",
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#222222",
                    textDecoration: "none",
                    border: "1px solid #E5E5E5",
                    borderRadius: "8px",
                  }}
                >
                  <Phone size={15} color="#F47A4A" />
                  02 9267 7777
                </a>
                <a
                  href="https://www.smileconcepts.com.au/book-online.html"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.8rem",
                    background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",
                    color: "#ffffff",
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    textDecoration: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 14px rgba(244, 122, 74, 0.4)",
                  }}
                >
                  Book Online
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Responsive media rules & hover states ── */}
      <style>{`
        .sc-desktop-nav {
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .sc-desktop-nav::-webkit-scrollbar {
          display: none;
        }
        .sc-desktop-cta-group {
          display: flex;
        }
        .sc-mobile-toggle {
          display: none;
        }
        .sc-book-short {
          display: none;
        }
        @media (max-width: 480px) {
          .sc-book-full {
            display: none;
          }
          .sc-book-short {
            display: inline;
          }
        }

        .sc-nav-link:hover {
          color: #F47A4A !important;
        }
        .sc-phone-link:hover {
          color: #F47A4A !important;
        }
        .sc-primary-cta:hover {
          background: linear-gradient(135deg, #e06934 0%, #cb5222 100%) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(244, 122, 74, 0.5) !important;
        }
        .sc-primary-cta:active {
          transform: translateY(0);
        }

        /* Narrow laptops: phone icon only, to leave room for the nav items */
        @media (max-width: 1300px) {
          .sc-phone-text {
            display: none;
          }
        }

        @media (max-width: 1080px) {
          .sc-desktop-nav {
            display: none !important;
          }
          /* Mobile: keep the phone icon and Book button in the top bar, next to the menu toggle */
          .sc-desktop-cta-group {
            margin-left: auto;
            gap: 0.6rem !important;
          }
          .sc-desktop-cta-group .sc-primary-cta {
            height: 36px;
            padding: 0 1rem !important;
            font-size: 0.78rem !important;
          }
          .sc-desktop-cta-group .sc-phone-icon {
            width: 36px !important;
            height: 36px !important;
          }
          .sc-desktop-cta-group .sc-phone-icon svg {
            width: 16px;
            height: 16px;
          }
          .sc-mobile-toggle {
            display: inline-flex !important;
          }
          .navbar-brand-logo-container {
            width: 150px !important;
            height: 35px !important;
          }
        }
      `}</style>
    </header>
  );
}
