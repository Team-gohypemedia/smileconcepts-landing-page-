"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { ChevronRight } from "lucide-react";

const tabs = [
  {
    id: "cosmetic",
    label: "Cosmetic Dentistry",
    services: [
      { name: "Porcelain Veneers", img: images.services.porcelainVeneers, href: "#" },
      { name: "Invisalign", img: images.services.invisalign, href: "#" },
      { name: "Clear Braces", img: images.services.clearBraces, href: "#" },
      { name: "Gum Lift", img: images.services.gumLift, href: "#" },
      { name: "Dental Veneers", img: images.services.dentalVeneers, href: "#" },
      { name: "Cosmetic Solutions", img: images.services.cosmeticProblems, href: "#" },
    ],
  },
  {
    id: "implants",
    label: "Dental Implants",
    services: [
      { name: "Dental Implants", img: images.services.dentalImplants, href: "#" },
      { name: "All Teeth on Four", img: images.services.allOnFour, href: "#" },
      { name: "Bone Grafting", img: images.services.grafting, href: "#" },
      { name: "Implant Cost Guide", img: images.services.implantCost, href: "#" },
      { name: "Missing Teeth", img: images.services.missingTeeth, href: "#" },
      { name: "Implant General", img: images.services.implantGeneral, href: "#" },
    ],
  },
  {
    id: "laser",
    label: "Laser Dentistry",
    services: [
      { name: "Laser Gum Disease", img: images.services.laserGumDisease, href: "#" },
      { name: "Gum Disease Sydney", img: images.services.gumDiseaseSydney, href: "#" },
      { name: "Laser Root Canal", img: images.services.laserRootCanal, href: "#" },
      { name: "Laser Sleep", img: images.services.laserSleep, href: "#" },
      { name: "Gum Solutions", img: images.services.gumSolutions, href: "#" },
      { name: "Gum Disease Treatment", img: images.services.gumDiseaseTreatment, href: "#" },
    ],
  },
  {
    id: "general",
    label: "General Dentistry",
    services: [
      { name: "General Dentistry", img: images.services.generalDentistry, href: "#" },
      { name: "Emergency Dentist", img: images.services.emergencyDentist, href: "#" },
      { name: "Wisdom Teeth", img: images.services.wisdomTeeth, href: "#" },
      { name: "Root Canal", img: images.services.laserRootCanal2, href: "#" },
      { name: "Old Fillings", img: images.services.oldFillings, href: "#" },
      { name: "Payment Plans", img: images.services.paymentPlans, href: "#" },
    ],
  },
  {
    id: "tmj",
    label: "TMJ & Sleep",
    services: [
      { name: "Sleep Dentistry", img: images.services.sleepDentistry, href: "#" },
      { name: "Sleep Apnea", img: images.services.sleepApnea, href: "#" },
      { name: "Snoring Treatment", img: images.services.snoring, href: "#" },
      { name: "TMJ Pain", img: images.services.tmjPain, href: "#" },
      { name: "Orthodontic Braces", img: images.services.orthodonticsBraces, href: "#" },
      { name: "Aligners", img: images.services.aligners, href: "#" },
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="services"
      className="bg-white py-20 sm:py-28 lg:py-36"
    >
      <div className="container-sc">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#F47A4A] text-xs tracking-[0.3em] uppercase mb-3 font-medium text-center"
          style={{ fontFamily: "var(--font-assistant)" }}
        >
          What We Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-[#3c3c3c] text-center mb-3 leading-tight"
          style={{ fontFamily: "var(--font-prata)", fontWeight: 400 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-12 h-0.5 bg-[#F47A4A] mx-auto mb-14 origin-left"
        />

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
          role="tablist"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 rounded-none ${
                active === i
                  ? "bg-[#F47A4A] text-white shadow-lg shadow-orange-400/30"
                  : "bg-transparent text-[#4f4f4f] border border-gray-200 hover:border-[#F47A4A] hover:text-[#F47A4A]"
              }`}
              style={{ fontFamily: "var(--font-prata)" }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
            role="tabpanel"
          >
            {tabs[active].services.map((svc, i) => (
              <motion.a
                key={svc.name}
                href={svc.href}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] block shadow-md hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={svc.img}
                  alt={svc.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    className="text-white text-sm sm:text-base leading-snug group-hover:text-[#F47A4A] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-prata)", fontWeight: 400 }}
                  >
                    {svc.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1.5 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <span
                      className="text-[#F47A4A] text-xs"
                      style={{ fontFamily: "var(--font-assistant)" }}
                    >
                      Learn more
                    </span>
                    <ChevronRight className="w-3 h-3 text-[#F47A4A]" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Popular treatments CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#F47A4A] text-[#F47A4A] text-sm font-medium hover:bg-[#F47A4A] hover:text-white transition-all"
            style={{ fontFamily: "var(--font-assistant)" }}
          >
            View All Popular Treatments
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
