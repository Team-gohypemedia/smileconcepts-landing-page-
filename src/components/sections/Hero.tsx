"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

// URL helper for the WebP frames
const getFrameUrl = (index: number) => {
  const frameNum = String(index + 1).padStart(4, "0");
  return `/hero%20video%20frame/smileconcepts_webp_frames/frame_${frameNum}.webp`;
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef<number>(0);
  const [, setLoadedCount] = useState(0);

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
    const indicator = scrollIndicatorRef.current;
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

          // Fade out scroll indicator once user starts scrolling
          if (indicator) {
            if (progress > 0.1) {
              gsap.to(indicator, { opacity: 0, y: 15, duration: 0.2, overwrite: "auto" });
            } else {
              gsap.to(indicator, { opacity: 1, y: 0, duration: 0.2, overwrite: "auto" });
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
        height: "200vh", // Ends on scroll 200vh
        backgroundColor: "#0C0D17",
      }}
    >
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
        All on 4 Dental Implants Sydney | Smile Concepts CBD
      </h1>

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

        {/* Subtle top vignette so the Navbar is easily readable */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "140px",
            background: "linear-gradient(to bottom, rgba(10, 11, 20, 0.75) 0%, rgba(10, 11, 20, 0) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Subtle bottom vignette to blend smoothly into the ticker */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100px",
            background: "linear-gradient(to top, rgba(12, 13, 23, 0.6) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Minimal Floating Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            padding: "0.5rem 1.25rem",
            borderRadius: "999px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "rgba(255, 255, 255, 0.85)",
            pointerEvents: "none",
            transition: "all 0.3s ease",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-assistant)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Scroll Down
          </span>
          <ChevronDown size={14} color="#F47A4A" />
        </div>
      </div>
    </section>
  );
}
