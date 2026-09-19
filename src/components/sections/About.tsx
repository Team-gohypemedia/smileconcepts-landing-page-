"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } },
});

const features = [
  { icon: "🏆", title: "Award Winning", desc: "Recognised as one of Sydney's leading dental practices" },
  { icon: "🔬", title: "State-of-the-Art Tech", desc: "Digital imaging, laser dentistry & guided implant surgery" },
  { icon: "❤️", title: "Compassionate Care", desc: "Gentle, patient-centred treatment in a relaxed environment" },
  { icon: "💡", title: "Transparent Pricing", desc: "Clear, upfront costs with flexible payment plan options" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="about"
      className="bg-[#f9f9f9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      <div className="container-sc">
        {/* Section label */}
        <motion.p
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-[#F47A4A] text-xs tracking-[0.3em] uppercase mb-3 font-medium text-center"
          style={{ fontFamily: "var(--font-assistant)" }}
        >
          Leading Dental Practice · Greater Sydney
        </motion.p>

        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl sm:text-4xl lg:text-5xl text-[#3c3c3c] text-center mb-4 leading-tight"
          style={{ fontFamily: "var(--font-prata)", fontWeight: 400 }}
        >
          Experience the Life-changing
          <br className="hidden sm:block" />
          <span className="italic text-[#F47A4A]"> Power of A Smile</span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-[#7A7A7A] text-center max-w-xl mx-auto mb-16 leading-relaxed text-sm sm:text-base"
          style={{ fontFamily: "var(--font-assistant)", fontWeight: 300 }}
        >
          <em>Smile Concepts is one of the best dentists in Sydney creating perfect smiles</em>
        </motion.p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images stacked */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-2xl">
              <Image
                src={images.hero.home1}
                alt="Smile Concepts Sydney Dental Clinic"
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            {/* Before/After badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-8 lg:-right-6 rounded-xl overflow-hidden shadow-2xl border-4 border-white w-36 sm:w-44 aspect-square">
              <Image
                src={images.hero.homepageBa}
                alt="Before and after dental transformation"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute top-8 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl px-5 py-4 border border-gray-50"
            >
              <div
                className="text-3xl font-bold text-[#F47A4A]"
                style={{ fontFamily: "var(--font-prata)" }}
              >
                40+
              </div>
              <div
                className="text-xs text-[#7A7A7A] uppercase tracking-widest mt-1"
                style={{ fontFamily: "var(--font-assistant)" }}
              >
                Years of<br />Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text + features */}
          <div className="flex flex-col gap-8">
            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h3
                className="text-2xl sm:text-3xl text-[#3c3c3c] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-prata)", fontWeight: 400 }}
              >
                Perfect Smile
                <br />
                <span className="text-[#F47A4A]">Transformation</span>
              </h3>
              <ul
                className="flex flex-col gap-3 text-[#4f4f4f] text-sm sm:text-base mb-6"
                style={{ fontFamily: "var(--font-assistant)", fontWeight: 300, lineHeight: 1.6 }}
              >
                {[
                  "More Than 40 Years of Experience",
                  "Best Rated Dentistry in Sydney CBD",
                  "Compassionate Service with Premium Care",
                  "State-of-the-Art Technology & Innovation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F47A4A] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:0292677777"
                  className="px-6 py-3 border-2 border-[#F47A4A] text-[#F47A4A] text-sm font-medium hover:bg-[#F47A4A] hover:text-white transition-all"
                  style={{ fontFamily: "var(--font-assistant)" }}
                >
                  Book Appointment
                </a>
                <a
                  href="#gallery"
                  className="px-6 py-3 bg-[#F47A4A] text-white text-sm font-medium hover:bg-[#e06934] transition-all"
                  style={{ fontFamily: "var(--font-assistant)" }}
                >
                  Smile Gallery
                </a>
              </div>
            </motion.div>

            {/* Feature grid */}
            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all group"
                >
                  <span className="text-2xl mb-3 block">{f.icon}</span>
                  <h4
                    className="text-sm font-semibold text-[#3c3c3c] mb-1 group-hover:text-[#F47A4A] transition-colors"
                    style={{ fontFamily: "var(--font-assistant)" }}
                  >
                    {f.title}
                  </h4>
                  <p
                    className="text-xs text-[#9A9A9A] leading-relaxed"
                    style={{ fontFamily: "var(--font-assistant)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
