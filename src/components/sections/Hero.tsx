"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

// URL helper for the WebP frames
const getFrameUrl = (index: number) => {
  const frameNum = String(index + 1).padStart(4, "0");
  return `/hero%20video%20frame/smileconcepts_webp_frames/frame_${frameNum}.webp`;
};

const heroFeatures = [
  { num: "01", title: "Immediate", subtitle: "Function", desc: "Teeth in 1–3 Days" },
  { num: "02", title: "Rejuvenation", subtitle: "Age-Rewind", desc: "Facial Support" },
  { num: "03", title: "Expertise", subtitle: "30+ Years", desc: "Dr. Manish Shah" },
  { num: "04", title: "All Teeth on 4", subtitle: "Protocol", desc: "No Bone Grafting" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef<number>(0);
  const [loadedCount, setLoadedCount] = useState(0);

  // Render a specific frame onto the canvas with cover sizing
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Look for requested frame or nearest available loaded frame
    let img = imagesRef.current[index];
    if (!img || !img.complete) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = imagesRef.current[index - offset];
        if (prev && prev.complete) {
          img = prev;
          break;
        }
        const next = imagesRef.current[index + offset];
        if (next && next.complete) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const x = (cw - nw) / 2;
    const y = (ch - nh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, nw, nh);
  }, []);

  // Set canvas resolution to device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Preload frames progressively
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);

    // 1. Immediately load frame 1 for instant display
    const firstImg = new window.Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      setLoadedCount(1);
      resizeCanvas();
      renderFrame(0);
    };

    // 2. Preload remaining frames in background
    let loaded = 1;
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        imagesRef.current[i] = img;
        loaded++;
        if (loaded % 20 === 0 || loaded === TOTAL_FRAMES) {
          setLoadedCount(loaded);
        }
      };
    }

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas, renderFrame]);

  // GSAP ScrollTrigger across 200vh container
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Scrub through the 240 frames across 200vh
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.15,
        onUpdate: (self) => {
          const progress = self.progress;
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1)))
          );
          if (frameIndex !== currentFrameRef.current) {
            currentFrameRef.current = frameIndex;
            renderFrame(frameIndex);
          }

          // Content fades and shifts gently as scroll progresses past 40%
          if (content) {
            if (progress < 0.35) {
              gsap.to(content, { opacity: 1, y: 0, duration: 0.1, overwrite: "auto" });
            } else if (progress >= 0.35 && progress < 0.8) {
              const fadeProg = (progress - 0.35) / 0.45;
              gsap.to(content, {
                opacity: Math.max(0, 1 - fadeProg * 1.2),
                y: -fadeProg * 60,
                duration: 0.1,
                overwrite: "auto",
              });
            } else {
              gsap.to(content, { opacity: 0, y: -60, duration: 0.1, overwrite: "auto" });
            }
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, [renderFrame]);

  return (
    <section
      ref={containerRef}
      id="hero-scroll-container"
      aria-label="All on 4 Dental Implants Sydney Hero Interactive Video"
      style={{
        position: "relative",
        height: "200vh", // Ends on scroll 200vh as requested
        backgroundColor: "#0C0D17",
      }}
    >
      {/* ── Sticky Viewport (100vh) ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Canvas for Scroll-Driven Video Frame Sequence */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundColor: "#0C0D17",
          }}
        />

        {/* Gradient overlays to guarantee text legibility */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(12, 13, 23, 0.88) 0%, rgba(12, 13, 23, 0.62) 50%, rgba(12, 13, 23, 0.3) 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(12, 13, 23, 0.85) 0%, transparent 45%)",
            pointerEvents: "none",
          }}
        />

        {/* Hero Content Overlay */}
        <div
          ref={contentRef}
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "clamp(5rem, 12vh, 7.5rem)",
            paddingBottom: "3rem",
            pointerEvents: "auto",
          }}
        >
          <div className="container-sc" style={{ width: "100%" }}>
            <div style={{ maxWidth: "720px" }}>
              {/* Eyebrow */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.35rem 0.9rem",
                  backgroundColor: "rgba(244, 122, 74, 0.15)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "999px",
                  border: "1px solid rgba(244, 122, 74, 0.3)",
                  marginBottom: "1.25rem",
                }}
              >
                <Sparkles size={14} color="#F47A4A" />
                <span
                  style={{
                    fontFamily: "var(--font-assistant)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#F47A4A",
                  }}
                >
                  Turn Back The Clock · Sydney CBD
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: "var(--font-prata)",
                  fontWeight: 400,
                  fontSize: "clamp(2.4rem, 6vw, 5.2rem)",
                  lineHeight: 1.08,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                All on 4{" "}
                <em style={{ color: "#F47A4A", fontStyle: "italic" }}>Dental Implants</em>
                <br />
                Sydney
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                  lineHeight: 1.68,
                  maxWidth: "600px",
                  marginBottom: "1.75rem",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 300,
                }}
              >
                Smile Concepts brings you painless, state-of-the-art All on 4 dental implants in the heart of Sydney CBD. Replace failing or missing teeth with a permanent, natural-looking full arch restoration in 1 to 3 days. No bone grafting in most cases.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a
                  href="#book"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.95rem 2rem",
                    background: "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)",
                    color: "#fff",
                    fontFamily: "var(--font-assistant)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    borderRadius: "4px",
                    boxShadow: "0 4px 18px rgba(244, 122, 74, 0.45)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "linear-gradient(135deg, #e06934 0%, #cb5222 100%)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "linear-gradient(135deg, #F47A4A 0%, #ea6935 100%)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  Book Free Consultation
                  <ArrowRight size={16} />
                </a>

                <a
                  href="tel:0292677777"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.95rem 2rem",
                    border: "2px solid rgba(255,255,255,0.75)",
                    color: "#fff",
                    fontFamily: "var(--font-assistant)",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    borderRadius: "4px",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#fff";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.75)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <Phone size={15} color="#F47A4A" />
                  02 9267 7777
                </a>
              </div>

              {/* 4 Feature Badges from Live Page */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "0.85rem",
                }}
              >
                {heroFeatures.map((card) => (
                  <div
                    key={card.num}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.14)",
                      borderRadius: "10px",
                      padding: "0.85rem 1rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#F47A4A",
                        letterSpacing: "0.1em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {card.num}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-prata)",
                        fontSize: "0.95rem",
                        color: "#ffffff",
                        fontWeight: 400,
                        lineHeight: 1.2,
                      }}
                    >
                      {card.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.74rem",
                        fontWeight: 600,
                        color: "rgba(255, 255, 255, 0.75)",
                        marginTop: "0.1rem",
                      }}
                    >
                      {card.subtitle}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-assistant)",
                        fontSize: "0.68rem",
                        color: "rgba(255, 255, 255, 0.45)",
                        marginTop: "0.25rem",
                      }}
                    >
                      {card.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2.5rem",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(8px)",
            padding: "0.5rem 1rem",
            borderRadius: "999px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-assistant)",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            Scroll to scrub video
          </span>
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#F47A4A",
              boxShadow: "0 0 8px #F47A4A",
            }}
          />
        </div>
      </div>
    </section>
  );
}
