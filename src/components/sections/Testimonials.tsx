"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    role: "Porcelain Veneers Patient",
    stars: 5,
    text: "I cannot recommend Smile Concepts highly enough! Dr Shah transformed my smile completely. The entire team made me feel at ease from the very first consultation. My porcelain veneers look completely natural and I couldn't be happier.",
    date: "September 2024",
  },
  {
    name: "James T.",
    role: "Dental Implant Patient",
    stars: 5,
    text: "After years of being self-conscious about my smile, I finally took the step to get dental implants. The process was so much easier than I expected and the results are truly life-changing. The whole team at Smile Concepts is exceptional.",
    date: "August 2024",
  },
  {
    name: "Michelle K.",
    role: "Invisalign Patient",
    stars: 5,
    text: "The Invisalign treatment here was amazing. Dr Shah and the team monitored my progress every step of the way. My teeth are perfectly straight now and I completed the treatment faster than expected. Outstanding service!",
    date: "July 2024",
  },
  {
    name: "David L.",
    role: "General Dentistry Patient",
    stars: 5,
    text: "I've been a patient at Smile Concepts for over 10 years and the quality of care has always been exceptional. State-of-the-art equipment and a team that genuinely cares about your wellbeing. Couldn't ask for better dentists.",
    date: "June 2024",
  },
  {
    name: "Rachel B.",
    role: "Gum Lift Patient",
    stars: 5,
    text: "I had a gum lift procedure here and the results exceeded my expectations. The clinic is immaculate, the technology is cutting-edge, and the staff are wonderfully caring and professional. I finally have the smile I always wanted.",
    date: "May 2024",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-[#1a1a2e]" />
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #F47A4A 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F47A4A]/30 to-transparent" />

      <div className="relative z-10 container-sc">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[#F47A4A] text-xs tracking-[0.3em] uppercase mb-3 font-medium text-center"
          style={{ fontFamily: "var(--font-assistant)" }}
        >
          What Our Patients Say
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-14 leading-tight"
          style={{ fontFamily: "var(--font-prata)", fontWeight: 400 }}
        >
          Patient Stories
        </motion.h2>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12"
              >
                <Quote className="w-10 h-10 text-[#F47A4A]/40 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: reviews[current].stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F47A4A] text-[#F47A4A]" />
                  ))}
                </div>

                <p
                  className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;{reviews[current].text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F47A4A]/20 border border-[#F47A4A]/30 flex items-center justify-center">
                    <span
                      className="text-[#F47A4A] text-lg font-bold"
                      style={{ fontFamily: "var(--font-prata)" }}
                    >
                      {reviews[current].name[0]}
                    </span>
                  </div>
                  <div>
                    <div
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "var(--font-assistant)" }}
                    >
                      {reviews[current].name}
                    </div>
                    <div
                      className="text-white/40 text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-assistant)" }}
                    >
                      {reviews[current].role} · {reviews[current].date}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 bg-[#4285F4] rounded-full flex items-center justify-center">
                        <span className="text-white text-[8px] font-bold">G</span>
                      </div>
                      <span className="text-white/40 text-xs" style={{ fontFamily: "var(--font-assistant)" }}>
                        Google Review
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2 bg-[#F47A4A]" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Prev/Next */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/20 text-white/60 hover:border-[#F47A4A] hover:text-[#F47A4A] transition-all flex items-center justify-center"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/20 text-white/60 hover:border-[#F47A4A] hover:text-[#F47A4A] transition-all flex items-center justify-center"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Google rating strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white/40 text-xs"
          style={{ fontFamily: "var(--font-assistant)" }}
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#F47A4A] text-[#F47A4A]" />)}
            </div>
            <span className="text-white/60">5.0 on Google</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span className="text-white/40">200+ verified reviews</span>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span className="text-white/40">Award Winning Practice</span>
        </motion.div>
      </div>
    </section>
  );
}
