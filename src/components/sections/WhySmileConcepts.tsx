"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Car,
  Star,
  UserCheck,
  CreditCard,
  Sparkles,
  Stethoscope,
  Activity,
  Layers,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

const multidisciplinaryTeam = [
  {
    role: "Dental & Medical Surgeon",
    name: "Dr. Manish Shah",
    credentials: "BDS (Hons), MBBS, MMED (Sleep Med)",
    desc: "Dual-qualified in both dentistry and medicine, providing an unprecedented level of medical safety, surgical precision, and patient monitoring.",
    icon: Stethoscope,
  },
  {
    role: "Senior Implant Surgeon",
    name: "Dr. Kinnar Shah",
    credentials: "BDS, Cosmetic & Implant Specialist",
    desc: "Expert in computer-guided 3D surgical templates, immediate loading mechanics, and complex full-arch prosthetic rehabilitation.",
    icon: UserCheck,
  },
  {
    role: "Dedicated Sedationist",
    name: "IV Sleep Dentistry Team",
    credentials: "Conscious Sedation Registered",
    desc: "Administering twilight IV sedation for a gentle, pain-free procedure. Sleep comfortably throughout the entire implant placement.",
    icon: Activity,
  },
  {
    role: "Master Dental Prosthetist",
    name: "In-House Digital Lab",
    credentials: "CAD/CAM Zirconia Specialists",
    desc: "Fabricating high-precision, computer-milled zirconia and high-impact bridges tailored to your exact bite and facial aesthetics.",
    icon: Layers,
  },
];

const pillars = [
  {
    icon: Star,
    title: "Top Rated Dentist",
    desc: "Consistently rated 5.0 stars on Google with hundreds of verified reviews from satisfied implant patients.",
  },
  {
    icon: Car,
    title: "Free Parking in Sydney CBD",
    desc: "We provide validated, convenient free parking for our patients right in the heart of Sydney CBD.",
  },
  {
    icon: UserCheck,
    title: "Experienced Dentists",
    desc: "Over 30+ to 40 years of continuous clinical leadership in complex aesthetic and implant dentistry.",
  },
  {
    icon: CreditCard,
    title: "Smile Now, Pay Later",
    desc: "0% interest payment plans and full assistance with ATO Superannuation early release applications.",
  },
  {
    icon: Sparkles,
    title: "Exceptional Results",
    desc: "Custom-shaded, computer-milled permanent teeth that feel, chew, and look 100% natural.",
  },
];

export default function WhySmileConcepts() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="why-choose"
      style={{
        backgroundColor: "#ffffff",
        padding: "clamp(4.5rem, 8vw, 7.5rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-sc">
        {/* Section 1: What makes Smile Concepts a Centre for All-on-4 */}
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 3.5rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontFamily: "var(--font-assistant)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F47A4A",
              marginBottom: "0.5rem",
            }}
          >
            Surgical Excellence & Safety
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              fontWeight: 400,
              color: "#2C2C2C",
              lineHeight: 1.25,
              marginBottom: "1rem",
            }}
          >
            What Makes Smile Concepts a Centre for All Teeth On 4?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: "3.5rem",
              height: "3px",
              backgroundColor: "#F47A4A",
              margin: "0 auto 1.5rem",
              borderRadius: "2px",
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            style={{
              fontFamily: "var(--font-assistant)",
              fontSize: "1.05rem",
              color: "#666666",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            The most important factor is the <strong>highly qualified multidisciplinary practitioners</strong> at Smile Concepts. Our clinicians possess combined degrees in dentistry, medicine, surgery, sleep medicine, and dental sedation. Our complete team includes a specialist surgeon, a dual-qualified medical dentist, a dedicated sedationist, and an in-house prosthetist — all looking after your wellbeing in one integrated clinic.
          </motion.p>
        </div>

        {/* 4-Card Multidisciplinary Team Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4.5rem",
          }}
        >
          {multidisciplinaryTeam.map((member, i) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                style={{
                  backgroundColor: "#FAF7F5",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  border: "1px solid rgba(244, 122, 74, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 30px rgba(244, 122, 74, 0.12)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(244, 122, 74, 0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(244, 122, 74, 0.15)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#F47A4A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    boxShadow: "0 6px 16px rgba(244, 122, 74, 0.28)",
                  }}
                >
                  <Icon size={24} color="#ffffff" />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#F47A4A",
                    marginBottom: "0.25rem",
                  }}
                >
                  {member.role}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.2rem",
                    color: "#2C2C2C",
                    fontWeight: 400,
                    marginBottom: "0.35rem",
                  }}
                >
                  {member.name}
                </h3>
                <div
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#777777",
                    marginBottom: "0.75rem",
                  }}
                >
                  {member.credentials}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.88rem",
                    color: "#666666",
                    lineHeight: 1.65,
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {member.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Section 2: Why Choose Smile Concepts? (5 Pillars) */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontFamily: "var(--font-assistant)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F47A4A",
              marginBottom: "0.5rem",
            }}
          >
            The Patient Advantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 400,
              color: "#2C2C2C",
              lineHeight: 1.25,
              marginBottom: "1rem",
            }}
          >
            Why Choose Smile Concepts?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: "3.5rem",
              height: "3px",
              backgroundColor: "#F47A4A",
              margin: "0 auto 1.5rem",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* 5 Distinct Pillars Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 * i + 0.25 }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  padding: "1.75rem 1.25rem",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(244, 122, 74, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Icon size={24} color="#F47A4A" />
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-prata)",
                    fontSize: "1.05rem",
                    color: "#2C2C2C",
                    fontWeight: 400,
                    marginBottom: "0.5rem",
                  }}
                >
                  {pillar.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.84rem",
                    color: "#666666",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Practice Details & Parking Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            backgroundColor: "#2C2C2C",
            borderRadius: "16px",
            padding: "1.75rem 2rem",
            color: "#ffffff",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                backgroundColor: "#F47A4A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Car size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-prata)", fontSize: "1.05rem", fontWeight: 400 }}>
                Free Validated CBD Parking for All-on-4 Patients
              </div>
              <div style={{ fontFamily: "var(--font-assistant)", fontSize: "0.82rem", color: "rgba(255,255,255,0.7)" }}>
                Suite 201, 210 Pitt Street & Suite 403, Level 4/307 Pitt St, Sydney NSW 2000
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="tel:0292677777"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#F47A4A",
                color: "#ffffff",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontFamily: "var(--font-assistant)",
                fontSize: "0.88rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#e06934")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#F47A4A")}
            >
              <Phone size={16} />
              02 9267 7777
            </a>
            <a
              href="#book"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontFamily: "var(--font-assistant)",
                fontSize: "0.88rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
