"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

const galleryItems = [
  { img: images.gallery.sc2, label: "Smile Transformation" },
  { img: images.gallery.kylieVeneers, label: "Porcelain Veneers" },
  { img: images.gallery.sc3, label: "Cosmetic Result" },
  { img: images.gallery.veneersVsInvisalign, label: "Invisalign Result" },
  { img: images.gallery.sc4, label: "Smile Makeover" },
  { img: images.gallery.porcelainVeneers, label: "Veneer Treatment" },
  { img: images.gallery.sc5, label: "Before & After" },
  { img: images.gallery.coupleSmiling, label: "Happy Patient" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="gallery"
      className="bg-[#f9f9f9] py-20 sm:py-28 lg:py-36 overflow-hidden"
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
          Real Patient Results
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-[#3c3c3c] text-center mb-3 leading-tight"
          style={{ fontFamily: "var(--font-prata)", fontWeight: 400 }}
        >
          Smile Gallery
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-12 h-0.5 bg-[#F47A4A] mx-auto mb-4 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-[#7A7A7A] text-center max-w-md mx-auto mb-14 text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-assistant)", fontWeight: 300 }}
        >
          Witness the transformative power of expert cosmetic dentistry through our patient results.
        </motion.p>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              } ${i === 0 ? "aspect-square sm:aspect-auto" : "aspect-square"}`}
            >
              <div className={`relative w-full ${i === 0 ? "h-56 sm:h-full" : "h-full"}`}>
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span
                  className="text-white text-xs sm:text-sm font-medium"
                  style={{ fontFamily: "var(--font-assistant)" }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F47A4A] text-white text-sm font-medium hover:bg-[#e06934] transition-all hover:shadow-lg hover:shadow-orange-400/30"
            style={{ fontFamily: "var(--font-assistant)" }}
          >
            View Full Smile Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
