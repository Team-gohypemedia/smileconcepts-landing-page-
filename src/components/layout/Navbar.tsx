"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const treatments = [
  { label: "Cosmetic Dentistry", href: "#services" },
  { label: "Dental Implants", href: "#services" },
  { label: "Laser Dentistry", href: "#services" },
  { label: "General Dentistry", href: "#services" },
  { label: "TMJ & Sleep", href: "#services" },
  { label: "Orthodontics", href: "#services" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#services", children: treatments },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-sc flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-9 h-9 rounded-full bg-[#F47A4A] flex items-center justify-center overflow-hidden">
            <span
              className="text-white text-xl font-bold leading-none"
              style={{ fontFamily: "var(--font-prata)" }}
            >
              S
            </span>
          </div>
          <div className="leading-none">
            <span
              className={`block text-lg font-bold transition-colors duration-300 ${
                scrolled ? "text-[#1a1a1a]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-prata)" }}
            >
              Smile Concepts
            </span>
            <span
              className="block text-[10px] tracking-[0.25em] uppercase text-[#F47A4A] mt-0.5"
              style={{ fontFamily: "var(--font-assistant)" }}
            >
              Dental · Sydney CBD
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-[#F47A4A] ${
                    scrolled ? "text-[#3C3C3C]" : "text-white/90"
                  }`}
                  style={{ fontFamily: "var(--font-assistant)" }}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white rounded-2xl shadow-2xl border border-gray-100/80 py-2 z-50 overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex items-center px-5 py-2.5 text-sm text-[#4f4f4f] hover:text-[#F47A4A] hover:bg-orange-50/70 transition-colors"
                          style={{ fontFamily: "var(--font-assistant)" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F47A4A] mr-3 opacity-60" />
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#F47A4A] ${
                  scrolled ? "text-[#3C3C3C]" : "text-white/90"
                }`}
                style={{ fontFamily: "var(--font-assistant)" }}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0292677777"
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#F47A4A] ${
              scrolled ? "text-[#364D5D]" : "text-white/90"
            }`}
            style={{ fontFamily: "var(--font-assistant)" }}
          >
            <Phone className="w-4 h-4" />
            02 9267 7777
          </a>
          <a
            href="#book"
            className="px-6 py-2.5 bg-[#F47A4A] hover:bg-[#e06934] text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-orange-400/30 active:scale-95"
            style={{ fontFamily: "var(--font-assistant)" }}
          >
            Book Online
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#3C3C3C] hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <nav className="container-sc py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center py-3 px-4 rounded-xl text-[#2a2a2a] font-medium hover:text-[#F47A4A] hover:bg-orange-50 transition-colors"
                    style={{ fontFamily: "var(--font-assistant)" }}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="ml-6 pl-4 border-l-2 border-orange-100 mt-0.5 mb-2 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-1.5 px-3 text-sm text-[#7A7A7A] hover:text-[#F47A4A] transition-colors"
                          style={{ fontFamily: "var(--font-assistant)" }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="tel:0292677777"
                  className="flex items-center gap-3 px-4 py-3 text-[#364D5D] font-medium"
                  style={{ fontFamily: "var(--font-assistant)" }}
                >
                  <Phone className="w-4 h-4 text-[#F47A4A]" />
                  02 9267 7777
                </a>
                <a
                  href="#book"
                  onClick={() => setMobileOpen(false)}
                  className="mx-4 py-3.5 bg-[#F47A4A] text-white text-center font-medium rounded-sm hover:bg-[#e06934] transition-colors"
                  style={{ fontFamily: "var(--font-assistant)" }}
                >
                  Book a Consultation
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
