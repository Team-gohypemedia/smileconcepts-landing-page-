"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  Sparkles,
  Activity,
  Award,
  Utensils,
  HeartHandshake,
  Cpu,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface FeatureSlide {
  id: string;
  category: string;
  categoryIcon: React.ReactNode;
  heading: string;
  hook: string;
  description: string;
  checklist: string[];
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
  floatingTop: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  };
  floatingBottom: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  };
}

const slidesData: FeatureSlide[] = [
  // ─── SLIDE 1: CANDIDATE SUITABILITY ───
  {
    id: "suitability",
    category: "Clinical Suitability",
    categoryIcon: <ShieldCheck size={16} />,
    heading: "Are All on 4 or All on X Implants Right for You?",
    hook: "Fixed teeth planned around your unique bone anatomy and bite.",
    description:
      "Suitability for All on 4 at Smile Concepts is always confirmed with an in-depth clinical assessment and a 3D CBCT scan at our Sydney CBD practice. By placing the two rear implants at an angle of up to 45°, we engage dense existing bone — eliminating the need for invasive bone grafting for the vast majority of patients. We look closely at your bone volume, oral health, and medical history before recommending anything. If All on 4 isn't the right fit, we explain all alternatives.",
    checklist: [
      "Loose, slipping, or uncomfortable dentures eliminated permanently",
      "Failing, broken, or decayed teeth replaced in as little as 1–3 days",
      "Severe bone loss accommodated without invasive bone grafting",
      "Walk out with immediate fixed provisional teeth on surgery day",
      "Long-term options planned transparently for your bone volume",
    ],
    ctaText: "Check Your Suitability",
    ctaHref: "#cost",
    imageSrc: "/assets/allon4/candidate-smile.jpg",
    imageAlt: "Patient smile transformation evaluation at Smile Concepts Sydney",
    imagePosition: "center 22%",
    floatingTop: {
      icon: <ShieldCheck size={17} color="#16A34A" />,
      title: "3D CBCT Bone Assessment",
      subtitle: "In-house scans at Sydney CBD",
    },
    floatingBottom: {
      icon: <Activity size={17} color="#E86337" />,
      title: "Zero Bone Grafting Needed",
      subtitle: "Angled rear implants (up to 45°)",
    },
  },

  // ─── SLIDE 2: TREATMENT TIMELINE & FINAL BRIDGE ───
  {
    id: "timeline",
    category: "Treatment Stages",
    categoryIcon: <Clock size={16} />,
    heading: "Temporary Teeth & Final Teeth: What To Expect",
    hook: "Walk out with a complete, fixed smile on surgery day.",
    description:
      "Will you be without teeth during treatment? For most suitable patients, no. A fixed temporary bridge is fitted on the same day as surgery (or shortly after), so you leave looking and functioning normally while the implants heal underneath. Once osseointegration is complete, your final bridge is designed and fitted. We walk you through material options at consultation, including acrylic vs high-strength monolithic zirconia, so you make a decision tailored to your budget and long-term durability.",
    checklist: [
      "Fixed provisional bridge fitted on Day 1 of surgery",
      "Normal eating & speech maintained throughout the healing phase",
      "Ultra-durable milled monolithic zirconia bridge for lifetime strength",
      "Clear 2-stage guidance so you understand materials and costs",
    ],
    ctaText: "Explore Healing Stages",
    ctaHref: "#cost",
    imageSrc: "/assets/allon4/temporary-final-teeth-bridge.jpg",
    imageAlt: "All on 4 temporary and final teeth bridge restoration at Smile Concepts",
    imagePosition: "center 48%",
    floatingTop: {
      icon: <Clock size={17} color="#E86337" />,
      title: "Day 1 Smile Delivery",
      subtitle: "Immediate Fixed Provisional Teeth",
    },
    floatingBottom: {
      icon: <Sparkles size={17} color="#16A34A" />,
      title: "Milled Monolithic Zirconia",
      subtitle: "High-Strength Final Fixed Bridge",
    },
  },

  // ─── SLIDE 3: THE ALL ON X ADVANTAGE ───
  {
    id: "allonx",
    category: "Treatment Concept",
    categoryIcon: <Layers size={16} />,
    heading: "Full Arch Solutions: The All on X Advantage",
    hook: "Anatomy-first flexibility to place 4, 5, or 6 implants for lifelong support.",
    description:
      "Because every patient's bone density, facial structure, and bite forces are unique, full arch rehabilitation is customized as 'All on X' — where X represents the precise number of implants needed for your case. Whether four, five, or six implants provide the safest foundation, treatment replaces your full arch with fixed teeth that never come out.",
    checklist: [
      "Full arch of fixed replacement teeth that never come out",
      "'X' represents 4, 5, or 6 implants based on bone density & bite force",
      "Brand-agnostic: planned using Nobel Biocare, Straumann, Neoss or DIO",
      "Independent clinical approach: anatomy-first, never tied to a single brand",
    ],
    ctaText: "Understand All on X",
    ctaHref: "#cost",
    imageSrc: "/assets/allon4/All-on-6-1.2.jpg",
    imageAlt: "All on 4 and All on 6 implant positioning architecture model",
    imagePosition: "center center",
    floatingTop: {
      icon: <Layers size={17} color="#E86337" />,
      title: "4–6 Implants Biomechanically Tailored",
      subtitle: "Planned Around Your Bone Anatomy",
    },
    floatingBottom: {
      icon: <Award size={17} color="#16A34A" />,
      title: "Brand-Agnostic Implant Care",
      subtitle: "Nobel Biocare • Straumann • Neoss • DIO",
    },
  },

  // ─── SLIDE 4: WHY CHOOSE ALL ON FOUR IN SYDNEY ───
  {
    id: "whychoose",
    category: "Clinical Advantages",
    categoryIcon: <Award size={16} />,
    heading: "Why Choose All on Four Dental Implants in Sydney",
    hook: "Permanent stability, natural chewing, and single-arch transparent pricing.",
    description:
      "The All on Four treatment concept is all about restoring everyday comfort and function. It's a smarter, simpler way to get a full, beautiful smile without adhesives or loose dentures. Permanent teeth eliminate slipping dentures, looking and functioning like real natural teeth. Most patients avoid bone grafting, getting fast results on surgery day. Best of all, whether your case requires four, five, or six implants, your price per arch stays the same.",
    checklist: [
      "Permanent Teeth: Fixed, stable set that never slips or shifts",
      "Natural Look & Feel: Functions and chews just like real natural teeth",
      "Quick Results: Same-day fixed teeth without prolonged bone grafting",
      "One Price, Tailored Support: Same price per arch for 4, 5, or 6 implants",
    ],
    ctaText: "Why Smile Concepts",
    ctaHref: "#cost",
    imageSrc: "/assets/allon4/elder-couple-cooking-dental-implant.jpg",
    imageAlt: "Restored chewing freedom and confidence with All on 4 dental implants",
    imagePosition: "center 18%",
    floatingTop: {
      icon: <Utensils size={17} color="#E86337" />,
      title: "Eat Apples & Steak Freely",
      subtitle: "90%+ Natural Chewing Force Restored",
    },
    floatingBottom: {
      icon: <HeartHandshake size={17} color="#16A34A" />,
      title: "Permanent Stability",
      subtitle: "No Slipping, No Plates, No Adhesives",
    },
  },

  // ─── SLIDE 5: 4, 5, OR 6 IMPLANTS ───
  {
    id: "implants-needed",
    category: "Implant Engineering",
    categoryIcon: <Layers size={16} />,
    heading: "How Many Implants Will I Need: All on 4, 5, or 6?",
    hook: "Driven by your bone density and bite dynamics — never a price list.",
    description:
      "The number of implants is chosen for you after a thorough clinical assessment. Many patients are treated on four implants, the classic 'All on 4.' Others do better with five or six, especially where bone is softer or the bite is heavier ('All on 5' or 'All on 6'). Same treatment, same fixed teeth, just more support where your anatomy needs it. Crucially, we do not charge per implant — treatment is driven purely by long-term clinical stability.",
    checklist: [
      "4 Implants: Proven biomechanical standard for good bone volume",
      "5 or 6 Implants: Additional anchor points for softer bone or heavy bites",
      "No Surcharge: Never priced per implant — fixed pricing per arch",
      "Guided Planning: 3D CBCT scans ensure precise angulation and depth",
    ],
    ctaText: "View Arch Pricing",
    ctaHref: "#cost",
    imageSrc: "/assets/allon4/all-on-four-top-gold.jpg",
    imageAlt: "Precision All on 4 full arch fixed bridge restoration at Smile Concepts",
    imagePosition: "center center",
    floatingTop: {
      icon: <Layers size={17} color="#E86337" />,
      title: "Anatomy-First Planning",
      subtitle: "4, 5, or 6 Implants Selected",
    },
    floatingBottom: {
      icon: <Award size={17} color="#16A34A" />,
      title: "Honest Single-Arch Fee",
      subtitle: "No Extra Surcharge for 5th or 6th Implant",
    },
  },

  // ─── SLIDE 6: ADVANCED TECH & REDO CASES ───
  {
    id: "implants-tech",
    category: "Advanced Technology",
    categoryIcon: <Cpu size={16} />,
    heading: "The Implants We Use & Our All on 4 Technology",
    hook: "In-house 3D CBCT, 4th generation guided surgery, and laser dentistry.",
    description:
      "Smile Concepts works with several of the world's leading implant systems, including Neoss, DIO, Nobel Biocare, and Straumann. A clinic tied to one brand has to make your anatomy fit their implant. We choose the system that best fits your bone, bite, and long-term outcome. This is also why other clinics and overseas patients send us their revision and redo cases when treatments done elsewhere have failed.",
    checklist: [
      "3D CBCT Imaging: Pre-surgical scan of real bone, anatomy, and nerves",
      "4th Gen Digital Guided Implant Tech: Highly predictable, guided placement",
      "Laser Dentistry: Minimally invasive surgery supporting comfortable healing",
      "Sydney Redo & Revision Center: Deep experience fixing complex failed cases",
    ],
    ctaText: "Complete My Smile",
    ctaHref: "#cost",
    imageSrc: "/assets/allon4/sunset-all-on-4.jpg",
    imageAlt: "Patient smile transformation result at Smile Concepts Sydney",
    imagePosition: "center 25%",
    floatingTop: {
      icon: <Sparkles size={17} color="#E86337" />,
      title: "4th Gen Digital Guided Surgery",
      subtitle: "Computerized High-Precision Placement",
    },
    floatingBottom: {
      icon: <ShieldCheck size={17} color="#16A34A" />,
      title: "Sydney Redo & Revision Center",
      subtitle: "Trusted for Complex Full Arch Cases",
    },
  },
];

export default function AllOn4ScrollFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // References for animation targets
  const visualWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const topBadgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const photoFrameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const btmBadgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile carousel state
  const [mobileIndex, setMobileIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Auto-advance for mobile carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % slidesData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage) return;

    const mm = gsap.matchMedia();

    // GSAP pinned scroll ONLY for desktop (min-width: 1024px)
    mm.add("(min-width: 1024px)", () => {
      const totalSlides = slidesData.length;
      const totalTransitions = totalSlides - 1;

      // Set initial positions
      slidesData.forEach((_, idx) => {
        const wrapper = visualWrapperRefs.current[idx];
        const topBadge = topBadgeRefs.current[idx];
        const photo = photoFrameRefs.current[idx];
        const btmBadge = btmBadgeRefs.current[idx];
        const textEl = textContentRefs.current[idx];

        if (idx === 0) {
          if (wrapper) gsap.set(wrapper, { opacity: 1, zIndex: 10 });
          if (topBadge) gsap.set(topBadge, { opacity: 1, y: 0 });
          if (photo) gsap.set(photo, { opacity: 1, y: 0, scale: 1 });
          if (btmBadge) gsap.set(btmBadge, { opacity: 1, y: 0 });
          if (textEl) gsap.set(textEl, { opacity: 1, y: 0, zIndex: 10, pointerEvents: "auto" });
        } else {
          if (wrapper) gsap.set(wrapper, { opacity: 0, zIndex: 1 });
          if (topBadge) gsap.set(topBadge, { opacity: 0, y: 35 });
          if (photo) gsap.set(photo, { opacity: 0, y: 40, scale: 0.95 });
          if (btmBadge) gsap.set(btmBadge, { opacity: 0, y: 45 });
          if (textEl) gsap.set(textEl, { opacity: 0, y: 30, zIndex: 1, pointerEvents: "none" });
        }
      });

      // Master Timeline linked directly to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalTransitions * 120}%`,
          pin: stage,
          scrub: 0.75,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Build transitions
      for (let i = 1; i < totalSlides; i++) {
        const prevIdx = i - 1;

        const outWrapper = visualWrapperRefs.current[prevIdx];
        const outTop = topBadgeRefs.current[prevIdx];
        const outPhoto = photoFrameRefs.current[prevIdx];
        const outBtm = btmBadgeRefs.current[prevIdx];
        const outText = textContentRefs.current[prevIdx];

        const inWrapper = visualWrapperRefs.current[i];
        const inTop = topBadgeRefs.current[i];
        const inPhoto = photoFrameRefs.current[i];
        const inBtm = btmBadgeRefs.current[i];
        const inText = textContentRefs.current[i];

        const stepTime = (i - 1) * 2;

        // 1. OUTGOING SLIDE
        if (outTop) {
          tl.to(
            outTop,
            {
              y: -30,
              opacity: 0,
              duration: 0.45,
              ease: "power2.inOut",
            },
            stepTime
          );
        }

        if (outBtm) {
          tl.to(
            outBtm,
            {
              y: 30,
              opacity: 0,
              duration: 0.45,
              ease: "power2.inOut",
            },
            stepTime + 0.05
          );
        }

        if (outPhoto) {
          tl.to(
            outPhoto,
            {
              y: -25,
              scale: 0.96,
              opacity: 0,
              duration: 0.55,
              ease: "power2.inOut",
            },
            stepTime + 0.05
          );
        }

        if (outText) {
          tl.to(
            outText,
            {
              y: -25,
              opacity: 0,
              duration: 0.45,
              ease: "power2.inOut",
              onComplete: () => {
                if (outText) outText.style.pointerEvents = "none";
              },
              onReverseComplete: () => {
                if (outText) outText.style.pointerEvents = "auto";
              },
            },
            stepTime
          );
        }

        if (outWrapper) {
          tl.to(
            outWrapper,
            {
              opacity: 0,
              duration: 0.35,
              onComplete: () => {
                if (outWrapper) outWrapper.style.zIndex = "1";
              },
            },
            stepTime + 0.3
          );
        }

        // 2. INCOMING SLIDE
        if (inWrapper) {
          tl.set(inWrapper, { opacity: 1, zIndex: 10 + i }, stepTime + 0.45);
        }

        if (inPhoto) {
          tl.fromTo(
            inPhoto,
            {
              y: 45,
              scale: 0.94,
              opacity: 0,
            },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            stepTime + 0.45
          );
        }

        if (inTop) {
          tl.fromTo(
            inTop,
            { y: -30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              ease: "power2.inOut",
            },
            stepTime + 0.5
          );
        }

        if (inBtm) {
          tl.fromTo(
            inBtm,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.54,
              ease: "power2.inOut",
            },
            stepTime + 0.54
          );
        }

        if (inText) {
          tl.fromTo(
            inText,
            { y: 25, opacity: 0, zIndex: 10 + i },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.inOut",
              onStart: () => {
                if (inText) inText.style.pointerEvents = "auto";
              },
              onReverseComplete: () => {
                if (inText) inText.style.pointerEvents = "none";
              },
            },
            stepTime + 0.55
          );
        }

        // Dwell hold
        tl.to({}, { duration: 0.4 });
      }
    });

    return () => {
      mm.revert();
    };
  }, []);

  const currentMobileSlide = slidesData[mobileIndex];

  return (
    <>
      <style>{`
        /* Desktop vs Mobile display toggle */
        .sc-scroll-desktop-view {
          display: block;
        }
        .sc-scroll-mobile-view {
          display: none;
        }

        @media (max-width: 1023px) {
          .sc-scroll-desktop-view {
            display: none !important;
          }
          .sc-scroll-mobile-view {
            display: block !important;
          }
        }

        /* Mobile carousel animations */
        .sc-mobile-card-transition {
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
      `}</style>

      {/* ───────────────────────────────────────────────────────────
          1. MOBILE VIEW (< 1024px): Matching Reference UI Screenshot
          Auto-moving carousel, card on top, text & CTA, bottom dots
      ──────────────────────────────────────────────────────────── */}
      <div
        className="sc-scroll-mobile-view"
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          padding: "48px 20px 56px 20px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
        onTouchStart={(e) => {
          touchStartXRef.current = e.touches[0].clientX;
          setIsPaused(true);
        }}
        onTouchEnd={(e) => {
          if (touchStartXRef.current !== null) {
            const diff = e.changedTouches[0].clientX - touchStartXRef.current;
            if (diff > 45) {
              // Swipe right -> prev
              setMobileIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
            } else if (diff < -45) {
              // Swipe left -> next
              setMobileIndex((prev) => (prev + 1) % slidesData.length);
            }
            touchStartXRef.current = null;
          }
          setIsPaused(false);
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          style={{
            maxWidth: "460px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          {/* TOP CARD CONTAINER: Soft rounded corners, subtle warm background & shadow */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#FAF9F5",
              borderRadius: "26px",
              padding: "16px 14px",
              boxSizing: "border-box",
              border: "1px solid #ECE7DE",
              boxShadow: "0 14px 34px -10px rgba(0, 0, 0, 0.08)",
              position: "relative",
              overflow: "hidden",
              marginBottom: "28px",
            }}
          >
            {/* Top Floating Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "14px",
                padding: "8px 14px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                border: "1px solid #ECE7DE",
                marginBottom: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#1C1C1E",
                    fontFamily: "var(--font-assistant), sans-serif",
                    lineHeight: 1.25,
                  }}
                >
                  {currentMobileSlide.floatingTop.title}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#7A756F",
                    fontFamily: "var(--font-assistant), sans-serif",
                    lineHeight: 1.3,
                    marginTop: "2px",
                  }}
                >
                  {currentMobileSlide.floatingTop.subtitle}
                </div>
              </div>
            </div>

            {/* Photo Preview inside Card */}
            <div
              style={{
                width: "100%",
                height: "240px",
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "#F0EEEA",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Image
                key={currentMobileSlide.id}
                src={currentMobileSlide.imageSrc}
                alt={currentMobileSlide.imageAlt}
                fill
                sizes="(max-width: 600px) 100vw, 460px"
                style={{
                  objectFit: "cover",
                  objectPosition: currentMobileSlide.imagePosition,
                  transition: "opacity 0.4s ease",
                }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "45px",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Bottom Floating Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "14px",
                padding: "8px 14px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                border: "1px solid #ECE7DE",
                marginTop: "12px",
                alignSelf: "flex-end",
                float: "right",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#1C1C1E",
                    fontFamily: "var(--font-assistant), sans-serif",
                    lineHeight: 1.25,
                  }}
                >
                  {currentMobileSlide.floatingBottom.title}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#7A756F",
                    fontFamily: "var(--font-assistant), sans-serif",
                    lineHeight: 1.3,
                    marginTop: "2px",
                  }}
                >
                  {currentMobileSlide.floatingBottom.subtitle}
                </div>
              </div>
            </div>
            <div style={{ clear: "both" }} />
          </div>

          {/* CONTENT SECTION BELOW CARD */}
          <div style={{ textAlign: "left" }}>
            {/* Category / Section Title with subtle mark */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "#E86337",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#1C1C1E",
                }}
              >
                {currentMobileSlide.category}
              </span>
            </div>

            {/* Hook / Subhead */}
            <h4
              style={{
                fontFamily: "var(--font-assistant), sans-serif",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#1C1C1E",
                lineHeight: 1.35,
                margin: "0 0 10px 0",
              }}
            >
              {currentMobileSlide.hook}
            </h4>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-assistant), sans-serif",
                fontSize: "0.92rem",
                lineHeight: 1.6,
                color: "#4A4A50",
                margin: "0 0 16px 0",
              }}
            >
              {currentMobileSlide.description}
            </p>

            {/* Checklist */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              {currentMobileSlide.checklist.slice(0, 3).map((item, cIdx) => (
                <div
                  key={cIdx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(22, 163, 74, 0.12)",
                      color: "#16A34A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Check size={11} strokeWidth={3} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "#2C2C2E",
                      fontWeight: 600,
                      fontFamily: "var(--font-assistant), sans-serif",
                      lineHeight: 1.35,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button matching brand */}
            <div style={{ marginBottom: "26px" }}>
              <a
                href={currentMobileSlide.ctaHref}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "13px 32px",
                  borderRadius: "999px",
                  backgroundColor: "#E86337",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(232, 99, 55, 0.28)",
                  fontFamily: "var(--font-assistant), sans-serif",
                  transition: "all 0.2s ease",
                }}
              >
                <span>{currentMobileSlide.ctaText}</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Horizontal Pagination Dots matching user's reference */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                paddingTop: "6px",
              }}
            >
              {slidesData.map((_, dotIdx) => {
                const isActive = dotIdx === mobileIndex;
                return (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setMobileIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    style={{
                      width: isActive ? "22px" : "8px",
                      height: "8px",
                      borderRadius: "999px",
                      backgroundColor: isActive ? "#E86337" : "#DDD7CD",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          2. DESKTOP VIEW (>= 1024px): Pinned GSAP Scroll Animation
          Completely untouched, preserving original brand experience
      ──────────────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="sc-scroll-desktop-view"
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "#FFFFFF",
          minHeight: `${slidesData.length * 105}vh`,
        }}
      >
        {/* Pinned Viewport Container */}
        <div
          ref={stageRef}
          style={{
            width: "100%",
            height: "100vh",
            minHeight: "680px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Subtle warm ambient glow in background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(232, 99, 55, 0.035) 0%, transparent 75%)",
            }}
          />

          {/* Desktop Content Row */}
          <div
            className="sc-showcase-row"
            style={{
              width: "100%",
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "54px",
              boxSizing: "border-box",
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* ─── LEFT COLUMN: ARCHITECTURAL GALLERY FRAME + CLEAN FLOATING BADGES ─── */}
            <div
              className="sc-showcase-left"
              style={{
                flex: "1 1 50%",
                maxWidth: "500px",
                height: "480px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {slidesData.map((slide, idx) => (
                <div
                  key={slide.id}
                  ref={(el) => {
                    visualWrapperRefs.current[idx] = el;
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* 1. TOP BADGE: Positioned cleanly ABOVE the frame with ZERO overlap */}
                  <div
                    ref={(el) => {
                      topBadgeRefs.current[idx] = el;
                    }}
                    style={{
                      alignSelf: "flex-start",
                      marginBottom: "12px",
                      willChange: "transform, opacity",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "14px",
                        padding: "8px 14px",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                        border: "1px solid #ECE7DE",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "#1C1C1E",
                            fontFamily: "var(--font-assistant), sans-serif",
                            lineHeight: 1.25,
                          }}
                        >
                          {slide.floatingTop.title}
                        </div>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            color: "#7A756F",
                            fontFamily: "var(--font-assistant), sans-serif",
                            lineHeight: 1.3,
                            marginTop: "2px",
                          }}
                        >
                          {slide.floatingTop.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. PREMIUM GALLERY FRAME: Edge-to-edge fill */}
                  <div
                    ref={(el) => {
                      photoFrameRefs.current[idx] = el;
                    }}
                    className="sc-photo-frame-wrapper"
                    style={{
                      width: "100%",
                      maxWidth: "480px",
                      height: "360px",
                      padding: "7px",
                      borderRadius: "24px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #ECE7DE",
                      boxShadow:
                        "0 22px 55px -12px rgba(28, 28, 30, 0.12), 0 4px 14px rgba(0, 0, 0, 0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      boxSizing: "border-box",
                      willChange: "transform, opacity",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "17px",
                        overflow: "hidden",
                        position: "relative",
                        backgroundColor: "#F9F8F5",
                        boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <Image
                        src={slide.imageSrc}
                        alt={slide.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 480px"
                        style={{
                          objectFit: "cover",
                          objectPosition: slide.imagePosition,
                        }}
                        priority={idx === 0}
                      />
                      {/* Subtle top crystal sheen overlay */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "55px",
                          background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0) 100%)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* 3. BOTTOM BADGE: Positioned cleanly BELOW the frame with ZERO overlap */}
                  <div
                    ref={(el) => {
                      btmBadgeRefs.current[idx] = el;
                    }}
                    style={{
                      alignSelf: "flex-end",
                      marginTop: "12px",
                      willChange: "transform, opacity",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "14px",
                        padding: "8px 16px",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                        border: "1px solid #ECE7DE",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "#1C1C1E",
                            fontFamily: "var(--font-assistant), sans-serif",
                            lineHeight: 1.25,
                          }}
                        >
                          {slide.floatingBottom.title}
                        </div>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            color: "#7A756F",
                            fontFamily: "var(--font-assistant), sans-serif",
                            lineHeight: 1.3,
                            marginTop: "2px",
                          }}
                        >
                          {slide.floatingBottom.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── RIGHT COLUMN: SIGNATURE BRAND TYPOGRAPHY & BUTTON ─── */}
            <div
              className="sc-showcase-right"
              style={{
                flex: "1 1 48%",
                maxWidth: "530px",
                minHeight: "520px",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              {slidesData.map((slide, idx) => (
                <div
                  key={slide.id}
                  ref={(el) => {
                    textContentRefs.current[idx] = el;
                  }}
                  className="sc-showcase-right-inner"
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Main Heading in Signature Prata Serif */}
                  <h3
                    style={{
                      fontFamily: "var(--font-prata), Georgia, serif",
                      fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)",
                      color: "#1C1C1E",
                      fontWeight: 400,
                      lineHeight: 1.25,
                      margin: "0 0 8px 0",
                    }}
                  >
                    {slide.heading}
                  </h3>

                  {/* Brand Orange Impact Hook */}
                  <p
                    style={{
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)",
                      color: "#E86337",
                      fontWeight: 700,
                      lineHeight: 1.42,
                      margin: "0 0 10px 0",
                    }}
                  >
                    {slide.hook}
                  </p>

                  {/* Authoritative Clinical Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "0.93rem",
                      lineHeight: 1.62,
                      color: "#4A4A50",
                      margin: "0 0 16px 0",
                      fontWeight: 400,
                    }}
                  >
                    {slide.description}
                  </p>

                  {/* Feature Checklist */}
                  <div
                    className="sc-showcase-checklist"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      marginBottom: "22px",
                      width: "100%",
                    }}
                  >
                    {slide.checklist.map((item, cIdx) => (
                      <div
                        key={cIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(22, 163, 74, 0.12)",
                            color: "#16A34A",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span
                          style={{
                            fontSize: "0.9rem",
                            color: "#2C2C2E",
                            fontWeight: 600,
                            fontFamily: "var(--font-assistant), sans-serif",
                            lineHeight: 1.35,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Brand CTA Button */}
                  <div>
                    <a
                      href={slide.ctaHref}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 28px",
                        borderRadius: "8px",
                        backgroundColor: "#E86337",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        textDecoration: "none",
                        boxShadow: "0 6px 20px rgba(232, 99, 55, 0.28)",
                        transition: "all 0.2s ease",
                        fontFamily: "var(--font-assistant), sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = "#d65529";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 10px 26px rgba(232, 99, 55, 0.42)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = "#E86337";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 6px 20px rgba(232, 99, 55, 0.28)";
                      }}
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
