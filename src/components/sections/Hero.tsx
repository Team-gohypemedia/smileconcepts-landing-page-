"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 595;
const GET_FRAME_PATH = (index: number, isMobile: boolean) => {
  if (isMobile) {
    const frameNum = String(index).padStart(5, "0");
    return `/hero%20video%20frame/smileconcepts_webp_frames/smiling_concept_webp_frames/mobile/frame_${frameNum}.webp`;
  }
  const frameNum = String(index).padStart(4, "0");
  return `/hero%20video%20frame/smileconcepts_webp_frames/smiling_concept_webp_frames/frame_${frameNum}.webp`;
};

const PHRASES = [
  {
    id: 1,
    text: "All on 4 Dental Implants Sydney",
    startPct: 0,
    endPct: 0.32,
  },
  {
    id: 2,
    text: "The Best All on Four Dental Implants Sydney",
    startPct: 0.36,
    endPct: 0.64,
  },
  {
    id: 3,
    text: "Painless dental implants with fixed teeth in 1 to 3 days",
    startPct: 0.68,
    endPct: 0.96,
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mobileIndicatorRef = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameObj = useRef({ frame: 0 });

  useEffect(() => {
    let isMobileMode = typeof window !== "undefined" ? window.innerWidth <= 768 : false;

    // Full screen object-cover Canvas drawing function
    const drawFrame = (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = imagesRef.current[index];
      if (!img || !img.complete) return;

      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      const rect = canvas.getBoundingClientRect();

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const imgAspect = img.width / img.height;
      const canvasAspect = rect.width / rect.height;

      let renderWidth = rect.width;
      let renderHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      // Full Cover math: Fill full canvas screen edge-to-edge
      if (canvasAspect > imgAspect) {
        renderWidth = rect.width;
        renderHeight = rect.width / imgAspect;
        offsetY = (rect.height - renderHeight) / 2;
      } else {
        renderHeight = rect.height;
        renderWidth = rect.height * imgAspect;
        offsetX = (rect.width - renderWidth) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
      ctx.restore();
    };

    const loadFramesForMode = (mobile: boolean) => {
      const imgs: HTMLImageElement[] = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = GET_FRAME_PATH(i, mobile);
        if (i === 1) {
          img.onload = () => drawFrame(currentFrameObj.current.frame);
        }
        imgs.push(img);
      }
      imagesRef.current = imgs;
      return imgs;
    };

    loadFramesForMode(isMobileMode);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Pin hero section and scrub frame sequence across 220% scroll travel for comfortable reading
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=220%", // Generous scroll distance so text doesn't disappear too fast
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;

          // Fade out mobile indicator as soon as user starts scrolling
          const mobileIndicator = mobileIndicatorRef.current;
          if (mobileIndicator) {
            const mobileFade = Math.max(0, 1 - progress * 25);
            mobileIndicator.style.opacity = String(mobileFade);
            mobileIndicator.style.transform = `translate(-50%, ${(1 - mobileFade) * 12}px)`;
            mobileIndicator.style.pointerEvents = mobileFade > 0.1 ? "auto" : "none";
          }

          // Update 3D Frame Index
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(progress * (TOTAL_FRAMES - 1))
          );
          currentFrameObj.current.frame = frameIndex;
          drawFrame(frameIndex);

          // Update 3 Centered Text Phrases & Character Fills
          PHRASES.forEach((phrase, pIdx) => {
            const phraseElem = section.querySelector(`.phrase-container-${pIdx}`);
            if (!phraseElem) return;

            // Determine phrase opacity and smooth float-into-center positioning
            let phraseOpacity = 0;
            let translateY = 0;
            const fadeBuffer = 0.035;

            if (progress >= phrase.startPct && progress <= phrase.endPct) {
              if (phrase.startPct > 0 && progress < phrase.startPct + fadeBuffer) {
                const ratio = (progress - phrase.startPct) / fadeBuffer;
                phraseOpacity = ratio;
                translateY = (1 - ratio) * 20; // Glides up into center
              } else if (progress > phrase.endPct - fadeBuffer) {
                const ratio = (phrase.endPct - progress) / fadeBuffer;
                phraseOpacity = ratio;
                translateY = (1 - ratio) * -20; // Glides gently upward as it leaves
              } else {
                phraseOpacity = 1;
                translateY = 0;
              }
            } else if (progress < phrase.startPct) {
              phraseOpacity = 0;
              translateY = 20;
            } else {
              phraseOpacity = 0;
              translateY = -20;
            }

            (phraseElem as HTMLElement).style.opacity = String(phraseOpacity);
            (phraseElem as HTMLElement).style.transform = `translate3d(0, ${translateY}px, 0)`;
            (phraseElem as HTMLElement).style.pointerEvents =
              phraseOpacity > 0.5 ? "auto" : "none";

            // Update Character Fill inside phrase
            if (phraseOpacity > 0) {
              const charSpans = phraseElem.querySelectorAll(".char-span");

              // Characters finish typing by 62% of the phrase's window.
              // For the remaining 38% of the window, the full completed phrase remains 100% visible!
              const typingSpan = (phrase.endPct - phrase.startPct) * 0.62;
              const phraseProg = Math.max(
                0,
                Math.min(
                  1,
                  (progress - phrase.startPct) / typingSpan
                )
              );
              const activeCharIdx = Math.floor(phraseProg * charSpans.length);

              charSpans.forEach((span, cIdx) => {
                const el = span as HTMLElement;
                if (phraseProg >= 1) {
                  // Phrase is 100% completed — keep fully visible, illuminated white with high contrast shadow
                  el.style.color = "#ffffff";
                  el.style.opacity = "1";
                  el.style.textShadow = "0 3px 20px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0, 0, 0, 0.9)";
                } else if (cIdx < activeCharIdx) {
                  // Already typed illuminated characters
                  el.style.color = "#ffffff";
                  el.style.opacity = "1";
                  el.style.textShadow = "0 2px 18px rgba(0, 0, 0, 0.9)";
                } else if (cIdx === activeCharIdx) {
                  // Active character cursor with signature orange glow
                  el.style.color = "#F47A4A";
                  el.style.opacity = "1";
                  el.style.textShadow = "0 0 24px rgba(244, 122, 74, 1), 0 2px 10px rgba(0, 0, 0, 0.9)";
                } else {
                  // Upcoming unread characters shown as subtle ghost text so user sees full sentence structure
                  el.style.color = "rgba(255, 255, 255, 0.35)";
                  el.style.opacity = "0.75";
                  el.style.textShadow = "0 2px 10px rgba(0, 0, 0, 0.7)";
                }
              });
            }
          });
        },
      });

      // Cursor follower quickSetter positioning (I&M implementation)
      const follower = followerRef.current;
      if (follower) {
        gsap.set(follower, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

        const xSetter = gsap.quickSetter(follower, "x", "px");
        const ySetter = gsap.quickSetter(follower, "y", "px");

        const onMouseMove = (e: MouseEvent) => {
          xSetter(e.clientX);
          ySetter(e.clientY);
        };

        const onMouseEnter = () => {
          gsap.to(follower, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
        };

        const onMouseLeave = () => {
          gsap.to(follower, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
        };

        section.addEventListener("mousemove", onMouseMove);
        section.addEventListener("mouseenter", onMouseEnter);
        section.addEventListener("mouseleave", onMouseLeave);

        // Fade out cursor follower when user begins scrolling down
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=20%",
          scrub: true,
          onUpdate: (self) => {
            gsap.set(follower, { opacity: Math.max(0, 1 - self.progress * 3.5) });
          },
        });
      }
    }, section);

    const handleResize = () => {
      const newMobile = window.innerWidth <= 768;
      if (newMobile !== isMobileMode) {
        isMobileMode = newMobile;
        loadFramesForMode(newMobile);
      } else {
        drawFrame(currentFrameObj.current.frame);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero-scroll-container"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "#000000",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
      }}
    >
      {/* Self-contained CSS styles for the metallic shiny text effect from I&M */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes shineSweep {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
          .shiny-text-effect {
            background: linear-gradient(110deg, rgba(255,255,255,0.45) 30%, rgba(255,255,255,1) 50%, #F47A4A 55%, rgba(255,255,255,0.45) 70%);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shineSweep 2.5s linear infinite;
          }
          @keyframes scrollRunnerFlow {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .mobile-scroll-runner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 12px;
            background: linear-gradient(to bottom, #FFA07A, #F47A4A);
            border-radius: 9999px;
            filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.8));
            animation: scrollRunnerFlow 1.8s ease-in-out infinite;
          }
          .mobile-scroll-indicator {
            display: flex;
          }
          @media (min-width: 1024px) {
            .mobile-scroll-indicator {
              display: none !important;
            }
          }
        `,
        }}
      />

      {/* Screen reader only H1 for SEO */}
      <h1
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        All on 4 Dental Implants Sydney - All on Four Cost | Smile Concepts
      </h1>

      {/* Custom Mouse Follower Container (I&M Pattern) */}
      <div
        ref={followerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 60,
          willChange: "transform",
        }}
        className="hidden lg:block"
      >
        <span
          className="shiny-text-effect"
          style={{
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "13px",
            letterSpacing: "0.28em",
            fontWeight: 800,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            filter: "drop-shadow(0 4px 14px rgba(0, 0, 0, 0.7))",
            display: "inline-block",
            padding: "0.3rem 0.6rem",
          }}
        >
          Scroll to Explore
        </span>
      </div>

      {/* 3D Frame Sequence Full Screen Canvas - 100% Clear with NO Overlay Shadow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Subtle top gradient so Navbar is legible against white frames */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "130px",
          background: "linear-gradient(to bottom, rgba(10, 11, 20, 0.6) 0%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content Overlay with 3 Phased Scroll-Revealed Phrases at Top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          maxWidth: "1920px",
          margin: "0 auto",
          padding: "clamp(5.5rem, 12vh, 8rem) 1.5rem 2rem",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          pointerEvents: "none",
        }}
      >
        {/* Centered Display Text Container with Character Reveal */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "160px",
            textAlign: "center",
          }}
        >
          {PHRASES.map((phrase, pIdx) => (
            <div
              key={phrase.id}
              className={`phrase-container-${pIdx}`}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: pIdx === 0 ? 1 : 0,
                transform: pIdx === 0 ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                pointerEvents: pIdx === 0 ? "auto" : "none",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-prata), serif",
                  fontSize: "clamp(22px, 4.2vw, 32px)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                  textAlign: "center",
                  maxWidth: "960px",
                  margin: "0 auto",
                  filter: "drop-shadow(0 4px 24px rgba(0, 0, 0, 0.95)) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.9))",
                }}
              >
                {phrase.text.split("").map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="char-span"
                    style={{
                      color: pIdx === 0 ? "#ffffff" : "rgba(255, 255, 255, 0.35)",
                      opacity: pIdx === 0 ? 1 : 0.75,
                      textShadow: pIdx === 0 ? "0 3px 20px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0, 0, 0, 0.9)" : "none",
                      transition: "all 0.08s ease",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-Only Scroll Indicator: Vertical Loading Line + SCROLL TO EXPLORE */}
      <div
        ref={mobileIndicatorRef}
        className="mobile-scroll-indicator"
        style={{
          position: "absolute",
          bottom: "clamp(2rem, 6vh, 3.5rem)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 25,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.85rem",
          pointerEvents: "none",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          willChange: "transform, opacity",
        }}
      >
        {/* Vertical Track Line with white background */}
        <div
          style={{
            position: "relative",
            width: "2.5px",
            height: "32px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
            borderRadius: "9999px",
            overflow: "hidden",
            contain: "paint",
          }}
        >
          <div className="mobile-scroll-runner" />
        </div>

        {/* Caption text exactly matching reference screenshot */}
        <span
          style={{
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "#ffffff",
            whiteSpace: "nowrap",
            filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.9))",
          }}
        >
          Scroll to Explore
        </span>
      </div>
    </section>
  );
}
