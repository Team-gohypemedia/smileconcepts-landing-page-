"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { Phone } from "lucide-react";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      id="book"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={images.hero.background}
          alt=""
          fill
          className="object-cover opacity-20"
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #EC844B 0%, #F47A4A 40%, #e06030 100%)" }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative z-10 container-sc text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-white/70 text-xs tracking-[0.35em] uppercase mb-4"
          style={{ fontFamily: "var(--font-assistant)" }}
        >
          Start Your Journey
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6 italic"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          &ldquo;Quality is never an accident; it is the result of high intention, sincere effort,{" "}
          <span className="text-white font-semibold not-italic">intelligent direction</span>{" "}
          and{" "}
          <span className="text-white font-semibold not-italic">skillful execution.</span>&rdquo;
        </motion.blockquote>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight"
          style={{ fontFamily: "var(--font-prata)" }}
        >
          Book a Consultation Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-white/75 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-assistant)", fontWeight: 300 }}
        >
          Transform your smile with Sydney&apos;s leading cosmetic dental team.
          Call us today or book online — we&apos;d love to meet you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="tel:0292677777"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#F47A4A] font-semibold text-sm sm:text-base hover:bg-[#FCF8F8] transition-all hover:shadow-xl active:scale-[.98]"
            style={{ fontFamily: "var(--font-assistant)" }}
          >
            <Phone className="w-5 h-5" />
            02 9267 7777
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-sm sm:text-base hover:bg-white/15 transition-all active:scale-[.98]"
            style={{ fontFamily: "var(--font-assistant)" }}
          >
            Book Online
          </a>
        </motion.div>

        {/* Address */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-white/50 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-assistant)" }}
        >
          Suite 201, 210 Pitt Street, Sydney NSW 2000
        </motion.p>
      </div>
    </section>
  );
}
