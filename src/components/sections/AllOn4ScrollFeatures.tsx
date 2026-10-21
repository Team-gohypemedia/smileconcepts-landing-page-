"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight, ShieldCheck, Clock, Layers, Sparkles, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const toParagraphs = (description: string | string[]) =>
  Array.isArray(description) ? description : [description];

// Checklist items written as "Label: text" render the label in bold
const renderChecklistItem = (item: string) => {
  const splitAt = item.indexOf(": ");
  if (splitAt === -1 || splitAt > 60) return item;
  return (
    <>
      <strong style={{ fontWeight: 700, color: "#1C1C1E" }}>{item.slice(0, splitAt)}:</strong>
      {item.slice(splitAt + 1)}
    </>
  );
};

export interface FeatureSlide {
  id: string;
  category: string;
  categoryIcon: React.ReactNode;
  heading: string;
  // Doc tags these titles as H2, except "vs Individual Implants" which sits under Same-Day Teeth
  headingLevel: 2 | 3;
  description: string | string[];
  checklistTitle?: string;
  checklist: string[];
  footnote?: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
}

const slidesData: FeatureSlide[] = [
  // ─── SLIDE 1: WHO IS SUITABLE ───
  {
    id: "suitability",
    category: "Clinical Suitability",
    categoryIcon: <ShieldCheck size={16} />,
    heading: "Who is suitable for All on 4 or All on X Implants?",
    headingLevel: 2,
    description:
      "Suitability for All on 4 at Smile Concepts is always confirmed with a clinical assessment and a 3D CBCT scan at our Sydney CBD practice. As a starting point, it may be worth exploring if any of the following sounds familiar:",
    checklist: [
      "You have lost most or all of your teeth",
      "Your dentures feel loose when you eat or speak",
      "Several remaining teeth are failing or beyond repair",
      "You want a fixed solution that stays in place permanently",
      "You have experienced bone loss after tooth loss",
      "You want to understand your long-term options properly",
    ],
    footnote:
      "We always determine suitability through a proper clinical assessment. We look at your bone volume, oral health, and medical history before recommending anything. If all on 4 is not the right fit, we will tell you and explain what alternatives exist.",
    ctaText: "Check Your Suitability",
    ctaHref: "#book",
    imageSrc: "/assets/allon4/candidate-smile.jpg",
    imageAlt: "Patient smile assessment for All on 4 suitability at Smile Concepts Sydney",
    imagePosition: "center 22%",
  },

  // ─── SLIDE 2: WHY CHOOSE ALL ON FOUR AT SMILE CONCEPTS ───
  {
    id: "whychoose",
    category: "Why Smile Concepts",
    categoryIcon: <Award size={16} />,
    heading: "Why Choose All on Four Dental Implants at Smile Concepts in Sydney?",
    headingLevel: 2,
    description:
      "The all on four treatment concept is all about restoring everyday comfort and function. It's a smarter, simpler way to get a full, beautiful smile and here's why so many people at Smile Concepts in Sydney are choosing it.",
    checklist: [
      "Over 25 Years Experienced Team looking after you: If you want highly experienced dental surgeons to genuinely care for you, you've come to the right place.",
      "Permanent Teeth: Say goodbye to dentures that slip and shift. All on 4 gives you a fixed, stable set of teeth that stays put when you eat or talk.",
      "Natural Look and Feel: Fixed implant-supported teeth offer greater stability and chewing confidence than removable dentures. They look, feel and work like your own real teeth. Appearance and function vary between individuals.",
      "One Price, Tailored Support: Whether your plan calls for four, five or six implants, your price per arch stays the same. You get the most stable solution for your anatomy at one clear price.",
    ],
    footnote:
      "Results vary, and this treatment isn't suitable for everyone. We assess every case individually before making any recommendation.",
    ctaText: "Complete My Smile",
    ctaHref: "#cost",
    imageSrc: "/assets/allon4/elder-couple-cooking-dental-implant.jpg",
    imageAlt: "Couple enjoying everyday comfort and function with fixed implant-supported teeth",
    imagePosition: "center 18%",
  },

  // ─── SLIDE 3: SURGERY & SAME-DAY TEETH ───
  {
    id: "sameday",
    category: "Same-Day Teeth",
    categoryIcon: <Clock size={16} />,
    heading: "All on 4 Surgery and Same-Day Teeth",
    headingLevel: 2,
    description: "You can walk out with teeth the same day as surgery, as long as you are a suitable candidate.",
    checklist: [
      "Quick Results: The best part. Most people don't need bone grafting. That means you can walk out with a stunning smile the same day, or shortly after.",
      "No Bone Grafting: Nobody loves extra surgery. Most patients skip it entirely, which saves you time, money, and a whole lot of discomfort.",
    ],
    ctaText: "See the Treatment Steps",
    ctaHref: "#procedure",
    imageSrc: "/assets/allon4/sunset-all-on-4.jpg",
    imageAlt: "Patient smiling after All on 4 same-day teeth at Smile Concepts Sydney",
    imagePosition: "center 25%",
  },

  // ─── SLIDE 4: VS INDIVIDUAL IMPLANTS & BOTH JAWS ───
  {
    id: "individual",
    category: "Treatment Options",
    categoryIcon: <Layers size={16} />,
    heading: "All on 4 Surgery vs Individual Implants",
    headingLevel: 3,
    description: [
      "Individual implants usually replace one or several teeth with crowns or smaller bridges. All on 4 supports an entire arch with one fixed bridge.",
      "If you only have a few missing teeth and your remaining teeth are healthy, individual implants or another tooth-preserving option may be more appropriate.",
      "Neither approach is automatically cheaper or better; the plan depends on bone requirements, restorative design, and the number of teeth being replaced.",
    ],
    checklistTitle: "Do I need All on 4 on both upper and lower Jaws?",
    checklist: [
      "An arch means the upper or lower set of teeth. One arch can be treated independently.",
      "You may not need both arches to be treated. That is why a detailed assessment is required to make that decision. Your remaining teeth, opposing bite and oral health guide the plan.",
      "Pricing is quoted per arch.",
    ],
    ctaText: "Book an Assessment",
    ctaHref: "#book",
    imageSrc: "/assets/services/dental-implants.jpg",
    imageAlt: "Single dental implant model compared with full arch All on 4 treatment",
    imagePosition: "center center",
  },

  // ─── SLIDE 5: TEMPORARY & FINAL TEETH ───
  {
    id: "timeline",
    category: "Prosthetics (Teeth)",
    categoryIcon: <Sparkles size={16} />,
    heading: "Temporary Teeth and Final Teeth: What To Expect",
    headingLevel: 2,
    description: [
      "Will you be without teeth during treatment? For most suitable patients, no.",
      "A fixed temporary bridge may be fitted on the day of surgery or shortly afterwards if implant stability and other clinical factors allow. If immediate loading is unsuitable, your dentist will explain the alternative plan. Temporary teeth require a modified diet during healing. [1]",
      "Once healing is complete, the final bridge is designed and fitted. We walk you through your material options at consultation, including the difference between acrylic and zirconia, so you can make a decision that actually makes sense for your budget and your priorities rather than just accepting whatever is standard.",
      "It is worth understanding the difference between the two stages when you are comparing costs, because the materials and work involved are quite different.",
    ],
    checklist: [],
    ctaText: "Compare Final Teeth Options",
    ctaHref: "#cost",
    imageSrc: "/assets/allon4/temporary-final-teeth-bridge.jpg",
    imageAlt: "All on 4 temporary and final teeth bridge at Smile Concepts",
    imagePosition: "center 48%",
  },
];

export default function AllOn4ScrollFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // References for animation targets
  const visualWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const photoFrameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile carousel state
  const [mobileIndex, setMobileIndex] = React.useState(0);
  const touchStartXRef = useRef<number | null>(null);

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
        const photo = photoFrameRefs.current[idx];
        const textEl = textContentRefs.current[idx];

        if (idx === 0) {
          if (wrapper) gsap.set(wrapper, { opacity: 1, zIndex: 10 });
          if (photo) gsap.set(photo, { opacity: 1, y: 0, scale: 1 });
          if (textEl) gsap.set(textEl, { opacity: 1, y: 0, zIndex: 10, pointerEvents: "auto" });
        } else {
          if (wrapper) gsap.set(wrapper, { opacity: 0, zIndex: 1 });
          if (photo) gsap.set(photo, { opacity: 0, y: 40, scale: 0.95 });
          if (textEl) gsap.set(textEl, { opacity: 0, y: 30, zIndex: 1, pointerEvents: "none" });
        }
      });

      // Master Timeline linked directly to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalTransitions * 90}vh`,
          pin: stage,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Build transitions
      for (let i = 1; i < totalSlides; i++) {
        const prevIdx = i - 1;

        const outWrapper = visualWrapperRefs.current[prevIdx];
        const outPhoto = photoFrameRefs.current[prevIdx];
        const outText = textContentRefs.current[prevIdx];

        const inWrapper = visualWrapperRefs.current[i];
        const inPhoto = photoFrameRefs.current[i];
        const inText = textContentRefs.current[i];

        const stepTime = (i - 1) * 2;

        // 1. OUTGOING SLIDE
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
        }}
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

          </div>

          {/* CONTENT SECTION BELOW CARD */}
          <div style={{ textAlign: "left" }}>
            {/* Category / Section Title with subtle mark */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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

            {/* Slide title (the desktop view carries the heading tags) */}
            <p
              role="heading"
              aria-level={currentMobileSlide.headingLevel}
              style={{
                fontFamily: "var(--font-assistant), sans-serif",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#1C1C1E",
                lineHeight: 1.35,
                textAlign: "center",
                margin: "0 0 10px 0",
              }}
            >
              {currentMobileSlide.heading}
            </p>

            {/* Description */}
            {toParagraphs(currentMobileSlide.description).map((para, pIdx) => (
              <p
                key={pIdx}
                style={{
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  color: "#4A4A50",
                  textAlign: "center",
                  margin: "0 0 12px 0",
                }}
              >
                {para}
              </p>
            ))}

            {currentMobileSlide.checklistTitle && (
              <p
                style={{
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#1C1C1E",
                  textAlign: "center",
                  margin: "4px 0 8px 0",
                }}
              >
                {currentMobileSlide.checklistTitle}
              </p>
            )}

            {/* Checklist */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: currentMobileSlide.footnote ? "12px" : "24px",
              }}
            >
              {currentMobileSlide.checklist.map((item, cIdx) => (
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
                      fontWeight: 500,
                      fontFamily: "var(--font-assistant), sans-serif",
                      lineHeight: 1.4,
                    }}
                  >
                    {renderChecklistItem(item)}
                  </span>
                </div>
              ))}
            </div>

            {currentMobileSlide.footnote && (
              <p
                style={{
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "0.86rem",
                  lineHeight: 1.55,
                  color: "#6A6A70",
                  textAlign: "center",
                  margin: "0 0 24px 0",
                }}
              >
                {currentMobileSlide.footnote}
              </p>
            )}

            {/* CTA Button matching brand */}
            <div style={{ marginBottom: "26px", display: "flex", justifyContent: "center" }}>
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
            paddingTop: "80px",
            boxSizing: "border-box",
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
            {/* ─── LEFT COLUMN: ARCHITECTURAL GALLERY FRAME ─── */}
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
                  {/* PREMIUM GALLERY FRAME: Edge-to-edge fill */}
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

                </div>
              ))}
            </div>

            {/* ─── RIGHT COLUMN: SIGNATURE BRAND TYPOGRAPHY & BUTTON ─── */}
            <div
              className="sc-showcase-right"
              style={{
                flex: "1 1 48%",
                maxWidth: "530px",
                minHeight: "540px",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              {slidesData.map((slide, idx) => {
                const HeadingTag = slide.headingLevel === 2 ? "h2" : "h3";
                return (
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
                  <HeadingTag
                    style={{
                      fontFamily: "var(--font-prata), Georgia, serif",
                      fontSize: "clamp(1.25rem, 2.3vw, 1.85rem)",
                      color: "#1C1C1E",
                      fontWeight: 400,
                      lineHeight: 1.25,
                      margin: "0 0 6px 0",
                    }}
                  >
                    {slide.heading}
                  </HeadingTag>

                  {/* Authoritative Clinical Description */}
                  {toParagraphs(slide.description).map((para, pIdx) => (
                    <p
                      key={pIdx}
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.93rem",
                        lineHeight: 1.62,
                        color: "#4A4A50",
                        margin: "0 0 12px 0",
                        fontWeight: 400,
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  {slide.checklistTitle && (
                    <h4
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#1C1C1E",
                        margin: "4px 0 8px 0",
                      }}
                    >
                      {slide.checklistTitle}
                    </h4>
                  )}

                  {/* Feature Checklist */}
                  <div
                    className="sc-showcase-checklist"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      marginBottom: slide.footnote ? "10px" : "18px",
                      width: "100%",
                    }}
                  >
                    {slide.checklist.map((item, cIdx) => (
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
                            fontSize: "0.84rem",
                            color: "#2C2C2E",
                            fontWeight: 500,
                            fontFamily: "var(--font-assistant), sans-serif",
                            lineHeight: 1.38,
                          }}
                        >
                          {renderChecklistItem(item)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {slide.footnote && (
                    <p
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.86rem",
                        lineHeight: 1.55,
                        color: "#6A6A70",
                        margin: "0 0 14px 0",
                      }}
                    >
                      {slide.footnote}
                    </p>
                  )}

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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
