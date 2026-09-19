"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { value: "40+", label: "Years Experience" },
  { value: "5★", label: "Google Reviews" },
  { value: "10K+", label: "Happy Patients" },
  { value: "CBD", label: "Pitt St, Sydney" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax: media moves slower than scroll (classic parallax depth)
      gsap.to(mediaRef.current, {
        yPercent: 28,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content fades + lifts as you scroll down
      gsap.to(overlayRef.current, {
        opacity: 0,
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "25% top",
          end: "65% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[640px] overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Parallax Media Layer ── */}
      <div
        ref={mediaRef}
        className="absolute inset-0 scale-[1.3] will-change-transform origin-center"
      >
        {/* Video frame – drop your .mp4 src here */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden"
          autoPlay
          muted
          loop
          playsInline
          poster={images.hero.homeTop2024}
          id="hero-video"
        >
          {/* <source src="/videos/hero.mp4" type="video/mp4" /> */}
        </video>

        {/* Fallback hero image */}
        <Image
          src={images.hero.homeTop2024}
          alt="Smile Concepts – Leading Dental Clinic Sydney CBD"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── Gradient Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/80 via-[#16213e]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

      {/* ── Content ── */}
      <div
        ref={overlayRef}
        className="relative z-10 h-full flex flex-col justify-center will-change-transform"
      >
        <div className="container-sc pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl xl:max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[#F47A4A] text-xs sm:text-sm tracking-[0.25em] uppercase mb-5 font-medium"
              style={{ fontFamily: "var(--font-assistant)" }}
            >
              <span className="block w-8 h-px bg-[#F47A4A]" />
              Award Winning · Sydney CBD
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-white leading-[1.05] mb-6 -tracking-wide"
              style={{ fontFamily: "var(--font-prata)", fontWeight: 400 }}
            >
              Creating{" "}
              <span className="italic text-[#F47A4A]">Beautiful</span>
              <br />
              Smiles
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-white/75 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-assistant)", fontWeight: 300 }}
            >
              40+ years of expert General, Cosmetic &amp; Implant Dentistry at
              our Pitt Street practice in the heart of Sydney CBD.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#book"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F47A4A] text-white font-medium text-sm sm:text-base hover:bg-[#e06934] transition-all hover:shadow-xl hover:shadow-orange-500/30 active:scale-[.98]"
                style={{ fontFamily: "var(--font-assistant)" }}
              >
                Book a Consultation
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-medium text-sm sm:text-base hover:border-white hover:bg-white/10 transition-all active:scale-[.98]"
                style={{ fontFamily: "var(--font-assistant)" }}
              >
                Our Treatments
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span
                    className="text-2xl sm:text-3xl text-white font-bold"
                    style={{ fontFamily: "var(--font-prata)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-white/50 text-[10px] tracking-[0.2em] uppercase mt-1"
                    style={{ fontFamily: "var(--font-assistant)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span
          className="text-white/40 text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-assistant)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
