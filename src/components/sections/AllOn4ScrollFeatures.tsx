"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ShieldCheck, Clock, Layers, Award, PhoneCall } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Phone CTA: label first, phone icon at the end (matches the other call buttons)
const renderCta = (label: string) => (
  <a
    href="tel:0292677777"
    aria-label={`${label}: call 02 9267 7777`}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45rem",
      padding: "0.78rem 1.5rem",
      backgroundColor: "#E86337",
      color: "#ffffff",
      borderRadius: "8px",
      fontFamily: "var(--font-assistant)",
      fontWeight: 700,
      fontSize: "0.92rem",
      textDecoration: "none",
      boxShadow: "0 6px 18px rgba(232,99,55,0.25)",
    }}
  >
    <span>{label}</span>
    <PhoneCall size={15} aria-hidden />
  </a>
);

const toParagraphs =(description: string | string[]) =>
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
  // The treatment-option headings sit under Same-Day Teeth.
  headingLevel: 2 | 3;
  description: string | string[];
  checklistTitle?: string;
  checklist: string[];
  footnote?: string;
  cta?: string;
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
    cta: "Check If I’m Suitable",
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
    cta: "Ask About Teeth In A Day",
    imageSrc: "/assets/allon4/sunset-all-on-4.jpg",
    imageAlt: "Patient smiling after All on 4 same-day teeth at Smile Concepts Sydney",
    imagePosition: "center 25%",
  },

  // ─── SLIDE 4: VS INDIVIDUAL IMPLANTS ───
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
    checklist: [],
    imageSrc: "/assets/services/dental-implants.jpg",
    imageAlt: "Single dental implant model compared with full arch All on 4 treatment",
    imagePosition: "center center",
  },

  // ─── SLIDE 5: UPPER AND LOWER JAWS ───
  {
    id: "both-jaws",
    category: "Treatment Options",
    categoryIcon: <Layers size={16} />,
    heading: "Do I need All on 4 on both upper and lower Jaws?",
    headingLevel: 3,
    description: [
      "An arch means the upper or lower set of teeth. One arch can be treated independently.",
      "You may not need both arches to be treated. That is why a detailed assessment is required to make that decision. Your remaining teeth, opposing bite and oral health guide the plan.",
      "Pricing is quoted per arch.",
    ],
    checklist: [],
    imageSrc: "/assets/allon4/all-on-4-904x1024.jpg",
    imageAlt: "A full arch implant-supported dental bridge",
    imagePosition: "center center",
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

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dx = reduced ? 0 : 24;
      const dy = reduced ? 0 : 12;
      const ty = reduced ? 0 : 20;
      const pick = <T,>(refs: (T | null)[], i: number) => refs[i] ?? undefined;

      // Pointer events and stacking follow the slide that is currently on screen
      let shownIndex = -1;
      const markActive = (progress: number) => {
        const idx = Math.max(0, Math.min(totalSlides - 1, Math.round(progress * totalTransitions)));
        if (idx === shownIndex) return;
        shownIndex = idx;
        slidesData.forEach((_, i) => {
          const wrapper = pick(visualWrapperRefs.current, i);
          const textEl = pick(textContentRefs.current, i);
          if (wrapper) wrapper.style.zIndex = i === idx ? "10" : "1";
          if (textEl) {
            textEl.style.zIndex = i === idx ? "10" : "1";
            textEl.style.pointerEvents = i === idx ? "auto" : "none";
          }
        });
      };

      // Start state: first slide shown, the rest hidden
      slidesData.forEach((_, i) => {
        const wrapper = pick(visualWrapperRefs.current, i);
        const photo = pick(photoFrameRefs.current, i);
        const textEl = pick(textContentRefs.current, i);
        if (wrapper) gsap.set(wrapper, { autoAlpha: i === 0 ? 1 : 0 });
        if (photo) gsap.set(photo, { x: 0, y: 0, scale: 1, opacity: 1 });
        if (textEl) gsap.set(textEl, { autoAlpha: i === 0 ? 1 : 0, y: 0 });
      });
      markActive(0);

      // One scrubbed timeline: every slide holds still for most of its step and
      // crossfades into the next while you scroll, so the page responds directly to
      // the scroll position with no snapping. Wheel events are never captured.
      const TRANSITION_START = 0.3;
      const TRANSITION_LENGTH = 0.4;
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalTransitions * Math.round(Math.max(480, window.innerHeight * 0.9))}`,
          pin: stage,
          scrub: 0.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => markActive(self.progress),
          onRefresh: (self) => markActive(self.progress),
        },
      });

      for (let i = 0; i < totalTransitions; i++) {
        const at = i + TRANSITION_START;
        const fade = { duration: TRANSITION_LENGTH, ease: "power1.inOut" };
        const outWrapper = pick(visualWrapperRefs.current, i);
        const outPhoto = pick(photoFrameRefs.current, i);
        const outText = pick(textContentRefs.current, i);
        const inWrapper = pick(visualWrapperRefs.current, i + 1);
        const inPhoto = pick(photoFrameRefs.current, i + 1);
        const inText = pick(textContentRefs.current, i + 1);

        if (outWrapper) tl.to(outWrapper, { autoAlpha: 0, ...fade }, at);
        if (outPhoto) tl.to(outPhoto, { x: -dx, y: -dy, scale: reduced ? 1 : 0.965, ...fade }, at);
        if (outText) tl.to(outText, { autoAlpha: 0, y: -ty, ...fade }, at);
        if (inWrapper) tl.fromTo(inWrapper, { autoAlpha: 0 }, { autoAlpha: 1, ...fade }, at);
        if (inPhoto) tl.fromTo(inPhoto, { x: dx, y: dy, scale: reduced ? 1 : 0.965 }, { x: 0, y: 0, scale: 1, ...fade }, at);
        if (inText) tl.fromTo(inText, { autoAlpha: 0, y: ty }, { autoAlpha: 1, y: 0, ...fade }, at);
      }
      // Pad the timeline to a whole number of steps so the last slide also holds
      tl.to({}, { duration: 0.001 }, totalTransitions - 0.001);

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  const currentMobileSlide = slidesData[mobileIndex];
  const MobileHeadingTag = currentMobileSlide.headingLevel === 2 ? "h2" : "h3";

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

            {/* Slide title */}
            <MobileHeadingTag
              style={{
                fontFamily: "var(--font-prata), Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "#1C1C1E",
                lineHeight: 1.35,
                textAlign: "center",
                margin: "0 0 10px 0",
              }}
            >
              {currentMobileSlide.heading}
            </MobileHeadingTag>

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
              <h3
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
              </h3>
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

            {currentMobileSlide.cta && (
              <div style={{ display: "flex", justifyContent: "center", margin: "0 0 24px 0" }}>
                {renderCta(currentMobileSlide.cta)}
              </div>
            )}

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
                    opacity: idx === 0 ? 1 : 0,
                    visibility: idx === 0 ? "visible" : "hidden",
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
                    opacity: idx === 0 ? 1 : 0,
                    visibility: idx === 0 ? "visible" : "hidden",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Main Heading in Signature Prata Serif */}
                  <HeadingTag
                    style={{
                      fontFamily: "var(--font-prata), Georgia, serif",
                      fontSize: "var(--fs-card-title)",
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
                    <h3
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#1C1C1E",
                        margin: "4px 0 8px 0",
                      }}
                    >
                      {slide.checklistTitle}
                    </h3>
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

                  {slide.cta && <div style={{ marginTop: "4px" }}>{renderCta(slide.cta)}</div>}
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
