"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

interface NavLinkItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

// Each menu item scrolls to its main section; its dropdown lists the related sections on the page
const navLinks: NavLinkItem[] = [
  {
    label: "Overview",
    href: "#overview",
    children: [
      { label: "Introduction", href: "#overview" },
      { label: "All on 4 vs All on X", href: "#all-on-4-vs-all-on-x" },
      { label: "General Information", href: "#general-info" },
      { label: "Complete My Smile", href: "#complete-my-smile" },
    ],
  },
  {
    label: "Cost & Finance",
    href: "#cost",
    children: [
      { label: "Cost & Pricing", href: "#cost" },
      { label: "Cheaper Alternative", href: "#snap-on-dentures" },
    ],
  },
  {
    label: "Procedure",
    href: "#procedure",
    children: [
      { label: "Implant Surgery", href: "#implant-surgery" },
      { label: "5-Step Process", href: "#procedure" },
      { label: "All on 4 vs Dentures", href: "#dentures-comparison" },
    ],
  },
  {
    label: "Before & After",
    href: "#transformations",
    children: [
      { label: "Before & Afters", href: "#transformations" },
      { label: "Patient Reviews", href: "#testimonials" },
    ],
  },
  {
    label: "Doctors",
    href: "#team",
    children: [
      { label: "Our Dentists", href: "#team" },
      { label: "Our Practice", href: "#our-practice" },
      { label: "Accreditations", href: "#affiliations" },
    ],
  },
  {
    label: "FAQ",
    href: "#faq",
    children: [
      { label: "FAQs", href: "#faq" },
      { label: "Important Information", href: "#important-information" },
    ],
  },
];

const sectionIds = Array.from(
  new Set(navLinks.flatMap((link) => [link.href, ...(link.children ?? []).map((c) => c.href)]).map((h) => h.slice(1)))
);

// Smooth-scroll in-page links to their section (falls back to the browser for anything else)
const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  scrollToSection(href.slice(1));
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Scroll-spy: the last section whose top has passed below the header is the current one
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = (document.querySelector("header")?.getBoundingClientRect().bottom ?? 0) + 24;
      let current: { id: string; top: number } | null = null;
      for (const id of sectionIds) {
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

  const isActiveGroup = (link: NavLinkItem) =>
    !!activeSection && (link.children ?? [link]).some((c) => c.href === `#${activeSection}`);

  // Close the drawer first (it locks page scrolling), then scroll to the section
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
        paddingTop: isLight ? "0.65rem" : "1.15rem",
        paddingBottom: isLight ? "0.65rem" : "1.15rem",
      }}
    >
      <div
        className="container-sc"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          maxWidth: "1520px",
          margin: "0 auto",
          paddingLeft: "clamp(1.25rem, 4vw, 3.5rem)",
          paddingRight: "clamp(1.25rem, 4vw, 3.5rem)",
        }}
      >
        {/* ── Brand Logo ── */}
        <Link
          href="/"
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
              width: "195px",
              height: "46px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* White Logo for dark background */}
            <Image
              src="/assets/brand/logo-white.png"
              alt="Smile Concepts Sydney CBD"
              fill
              sizes="195px"
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
              sizes="195px"
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

        {/* ── Desktop Navigation ── */}
        <nav
          className="sc-desktop-nav"
          style={{
            alignItems: "center",
            gap: "clamp(0.9rem, 1.7vw, 2.2rem)",
            margin: "0 auto",
          }}
        >
          {navLinks.map((link) => {
            const isOpen = openDropdown === link.label;
            const groupActive = isActiveGroup(link);
            return (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => setOpenDropdown(link.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenDropdown(null);
                }}
              >
                <a
                  href={link.href}
                  className="sc-nav-link"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={(e) => {
                    handleSectionClick(e, link.href);
                    setOpenDropdown(null);
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    padding: "0.5rem 0",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    color: groupActive && isLight ? "#F47A4A" : isLight ? "#2C2C2C" : "rgba(255, 255, 255, 0.95)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    boxShadow: groupActive && isLight ? "inset 0 -2px 0 #F47A4A" : "none",
                  }}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      style={{
                        transition: "transform 0.25s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.8,
                      }}
                    />
                  )}
                </a>

                <AnimatePresence>
                  {link.children && isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        marginLeft: "-120px",
                        width: "240px",
                        paddingTop: "0.6rem", // hover bridge between the link and the menu
                        zIndex: 100,
                      }}
                    >
                      <div
                        role="menu"
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "10px",
                          boxShadow: "0 12px 36px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0,0,0,0.04)",
                          border: "1px solid rgba(0, 0, 0, 0.08)",
                          padding: "0.5rem 0",
                          overflow: "hidden",
                        }}
                      >
                        {link.children.map((child) => {
                          const childActive = activeSection !== null && child.href === `#${activeSection}`;
                          return (
                            <a
                              key={child.label}
                              href={child.href}
                              role="menuitem"
                              className="sc-dropdown-item"
                              onClick={(e) => {
                                handleSectionClick(e, child.href);
                                setOpenDropdown(null);
                              }}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "0.65rem 1.25rem",
                                fontFamily: "var(--font-assistant), sans-serif",
                                fontSize: "0.88rem",
                                fontWeight: childActive ? 700 : 500,
                                color: childActive ? "#F47A4A" : "#3A3A3A",
                                backgroundColor: childActive ? "#FFF4EF" : "transparent",
                                textDecoration: "none",
                                transition: "all 0.15s ease",
                              }}
                            >
                              <span
                                style={{
                                  width: "5px",
                                  height: "5px",
                                  borderRadius: "50%",
                                  backgroundColor: "#F47A4A",
                                  marginRight: "0.75rem",
                                  flexShrink: 0,
                                }}
                              />
                              {child.label}
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* ── Desktop CTAs ── */}
        <div
          className="sc-desktop-cta-group"
          style={{
            alignItems: "center",
            gap: "1.5rem",
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
              fontSize: "0.95rem",
              fontWeight: 600,
              color: isLight ? "#222222" : "#ffffff",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: isLight ? "rgba(244, 122, 74, 0.12)" : "rgba(255, 255, 255, 0.15)",
                color: "#F47A4A",
                flexShrink: 0,
              }}
            >
              <Phone size={14} />
            </span>
            <span className="sc-phone-text">02 9267 7777</span>
          </a>

          {/* Primary "Book Online" CTA button */}
          <a
            href="#book"
            onClick={(e) => handleSectionClick(e, "#book")}
            className="sc-primary-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              padding: "0.7rem 1.65rem",
              background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",
              color: "#ffffff",
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              textTransform: "capitalize",
              textDecoration: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 14px rgba(244, 122, 74, 0.38)",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              whiteSpace: "nowrap",
            }}
          >
            Book Online
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
                padding: "1.25rem 1.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                maxHeight: "calc(100dvh - 70px)",
                overflowY: "auto",
                overscrollBehavior: "contain",
              }}
            >
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleMobileClick(e, link.href)}
                    style={{
                      display: "block",
                      padding: "0.75rem 0.5rem",
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#222222",
                      textDecoration: "none",
                      borderBottom: "1px solid #f5f5f5",
                    }}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div
                      style={{
                        paddingLeft: "1rem",
                        marginTop: "0.25rem",
                        marginBottom: "0.5rem",
                        borderLeft: "2px solid #F47A4A",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem",
                      }}
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => handleMobileClick(e, child.href)}
                          style={{
                            padding: "0.4rem 0.5rem",
                            fontFamily: "var(--font-assistant), sans-serif",
                            fontSize: "0.92rem",
                            fontWeight: 500,
                            color: "#555555",
                            textDecoration: "none",
                          }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid #EEEEEE",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
                <a
                  href="tel:0292677777"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    padding: "0.85rem",
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#222222",
                    textDecoration: "none",
                    border: "1px solid #E5E5E5",
                    borderRadius: "8px",
                  }}
                >
                  <Phone size={16} color="#F47A4A" />
                  02 9267 7777
                </a>
                <a
                  href="#book"
                  onClick={(e) => handleMobileClick(e, "#book")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.9rem",
                    background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",
                    color: "#ffffff",
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    textDecoration: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 14px rgba(244, 122, 74, 0.4)",
                  }}
                >
                  Book a Consultation Online
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
        }
        .sc-desktop-cta-group {
          display: flex;
        }
        .sc-mobile-toggle {
          display: none;
        }

        .sc-nav-link:hover {
          color: #F47A4A !important;
        }
        .sc-dropdown-item:hover {
          background-color: #FFF4EF !important;
          color: #F47A4A !important;
          padding-left: 1.5rem !important;
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

        /* Narrow laptops: phone icon only, to leave room for the menu dropdowns */
        @media (max-width: 1279px) {
          .sc-phone-text {
            display: none;
          }
        }

        @media (max-width: 1100px) {
          .sc-desktop-nav {
            display: none !important;
          }
          .sc-desktop-cta-group {
            display: none !important;
          }
          .sc-mobile-toggle {
            display: inline-flex !important;
          }
          .navbar-brand-logo-container {
            width: 160px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </header>
  );
}
