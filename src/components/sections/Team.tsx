"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { Phone } from "lucide-react";

const doctors = [
  {
    name: "Dr. Manish Shah",
    title: "Principal Dentist & Founder",
    img: images.team.drManishShah,
    specialties: ["Cosmetic Dentistry", "Dental Implants", "Smile Design"],
    bio: "With over 40 years of experience, Dr. Manish Shah has built Smile Concepts into one of Sydney's most trusted dental practices. His passion for transforming smiles and commitment to patient care is unmatched.",
  },
  {
    name: "Dr. Kinnar Shah",
    title: "Senior Cosmetic Dentist",
    img: images.team.drKinnarShah,
    specialties: ["Porcelain Veneers", "Invisalign", "Laser Dentistry"],
    bio: "Dr. Kinnar Shah combines artistic vision with advanced dental techniques to create beautiful, natural-looking smiles. His expertise in cosmetic dentistry and laser treatments has helped thousands of patients.",
  },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="team"
      className="bg-white py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      <div className="container-sc">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[#F47A4A] text-xs tracking-[0.3em] uppercase mb-3 font-medium text-center"
          style={{ fontFamily: "var(--font-assistant)" }}
        >
          Expert Care
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-[#3c3c3c] text-center mb-3 leading-tight"
          style={{ fontFamily: "var(--font-prata)", fontWeight: 400 }}
        >
          Meet Our Dentists
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-12 h-0.5 bg-[#F47A4A] mx-auto mb-16 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[#f9f9f9] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8">
                <h3
                  className="text-xl sm:text-2xl text-[#3c3c3c] mb-1"
                  style={{ fontFamily: "var(--font-prata)", fontWeight: 400 }}
                >
                  {doc.name}
                </h3>
                <p
                  className="text-[#F47A4A] text-xs tracking-wider uppercase mb-4"
                  style={{ fontFamily: "var(--font-assistant)" }}
                >
                  {doc.title}
                </p>
                <p
                  className="text-[#7A7A7A] text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-assistant)", fontWeight: 300 }}
                >
                  {doc.bio}
                </p>
                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {doc.specialties.map((sp) => (
                    <span
                      key={sp}
                      className="px-3 py-1 bg-orange-50 text-[#F47A4A] text-xs rounded-full border border-orange-100"
                      style={{ fontFamily: "var(--font-assistant)" }}
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
