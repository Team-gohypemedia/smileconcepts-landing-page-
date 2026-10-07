"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export interface ElasticItemProps {
  id: string;
  title: string;
  category: string;
  desc?: string;
  src: string;
  alt: string;
  href?: string;
}

interface ElasticGalleryProps {
  items?: ElasticItemProps[];
  defaultActiveId?: string;
  style?: React.CSSProperties;
}

export function ElasticGallery({
  items: customItems,
  defaultActiveId,
  style,
}: ElasticGalleryProps = {}) {
  const defaultItems: ElasticItemProps[] = [
    {
      id: "01",
      title: "Surgery Suite",
      category: "Advanced Tech",
      desc: "Hospital-grade sterilization & digital 3D guided surgery operatory.",
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&auto=format&fit=crop&q=80",
      alt: "State of the art dental operatory",
    },
    {
      id: "02",
      title: "Patient Lounge",
      category: "Welcoming Care",
      desc: "Warm reception & tranquil waiting lounge with lush indoor greenery.",
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80",
      alt: "Warm welcoming reception",
    },
    {
      id: "03",
      title: "Clinical Team",
      category: "Specialists",
      desc: "30+ years experienced dental implant surgeons & caring staff.",
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&auto=format&fit=crop&q=80",
      alt: "Our experienced dental clinicians",
    },
    {
      id: "04",
      title: "Advanced Care",
      category: "Excellence",
      desc: "Gentle sedation & precision restorative procedures in Sydney CBD.",
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&auto=format&fit=crop&q=80",
      alt: "Precision tooth and implant crafting",
    },
    {
      id: "05",
      title: "Smile Design",
      category: "Precision Craft",
      desc: "Custom facial aesthetic mapping & biocompatible zirconia restorations.",
      src: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&auto=format&fit=crop&q=80",
      alt: "Clinical dental education model and patient consultation suite at Smile Concepts",
    },
    {
      id: "06",
      title: "Smile Gallery",
      category: "Real Results",
      desc: "Documented full arch transformations & life-changing smiles.",
      src: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&auto=format&fit=crop&q=80",
      alt: "Portfolio of life-changing smiles",
    },
  ];

  const items = customItems || defaultItems;
  const [activeId, setActiveId] = useState<string | null>(
    defaultActiveId || (items[1]?.id ?? items[0]?.id ?? "01")
  );
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100%", ...style }}>
      <style>{`
        /* Desktop styles */
        .sc-eg-gallery {
          display: flex;
          flex-direction: row;
          gap: 0.75rem;
          height: 560px;
          width: 100%;
          max-width: 1520px;
          margin: 0 auto;
        }
        .sc-eg-card {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 18px;
          background-color: #111116;
          transition: flex 0.65s cubic-bezier(0.25, 1, 0.5, 1), border 0.3s ease, box-shadow 0.3s ease;
        }
        .sc-eg-card.is-active {
          flex: 4;
          border: 1.5px solid rgba(244, 122, 74, 0.75);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
        }
        .sc-eg-card.is-collapsed {
          flex: 1;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }
        .sc-eg-desktop-label {
          display: block;
        }
        .sc-eg-mobile-pill-label {
          display: none;
        }

        /* Mobile Clarté Club Luxury Accordion Style */
        @media (max-width: 767px) {
          .sc-eg-gallery {
            flex-direction: column !important;
            gap: 0.65rem !important;
            height: auto !important;
          }
          .sc-eg-card {
            flex: none !important;
            width: 100% !important;
            transition: height 0.45s cubic-bezier(0.25, 1, 0.5, 1), border 0.3s ease, box-shadow 0.3s ease !important;
          }
          .sc-eg-card.is-active {
            height: 330px !important;
            border-radius: 20px !important;
            border: 1.5px solid rgba(244, 122, 74, 0.6) !important;
            box-shadow: 0 14px 35px rgba(0, 0, 0, 0.24) !important;
          }
          .sc-eg-card.is-collapsed {
            height: 56px !important;
            border-radius: 16px !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
          }
          .sc-eg-desktop-label {
            display: none !important;
          }
          .sc-eg-mobile-pill-label {
            display: flex !important;
          }
        }
      `}</style>

      <div className="sc-eg-gallery">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => {
                setHoveredId(item.id);
                if (!isMobile) setActiveId(item.id);
              }}
              onMouseLeave={() => setHoveredId(null)}
              className={`sc-eg-card ${isActive ? "is-active" : "is-collapsed"}`}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized={true}
                  sizes={isMobile ? "100vw" : "(max-width: 1200px) 50vw, 800px"}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 28%",
                    transform: isActive ? "scale(1)" : "scale(1.03)",
                    transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                />

                {/* Dark Overlay for Collapsed State (Desktop & Mobile) */}
                {!isActive && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: isMobile ? "rgba(20, 20, 26, 0.72)" : "rgba(0, 0, 0, 0.45)",
                      backdropFilter: isMobile ? "blur(6px)" : "none",
                      WebkitBackdropFilter: isMobile ? "blur(6px)" : "none",
                      transition: "background-color 0.3s ease",
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Active Card Bottom Gradient for Text Legibility */}
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "55%",
                      background:
                        "linear-gradient(to top, rgba(10, 10, 14, 0.95) 0%, rgba(10, 10, 14, 0.6) 50%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </div>

              {/* Active State Content (Both Desktop & Mobile) */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: isMobile ? "1.25rem 1.25rem 1.4rem" : "1.75rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                    zIndex: 10,
                    animation: "scActiveFade 0.4s ease forwards",
                  }}
                >
                  {/* Category Badge */}
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: isMobile ? "0.65rem" : "0.72rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        backgroundColor: "rgba(255, 255, 255, 0.18)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        border: "1px solid rgba(255, 255, 255, 0.28)",
                        padding: "3px 9px",
                        borderRadius: "999px",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: isMobile ? "1.35rem" : "clamp(1.6rem, 2.4vw, 2.4rem)",
                      fontWeight: 800,
                      color: "#ffffff",
                      textTransform: "uppercase",
                      lineHeight: 1.15,
                      margin: "2px 0 0 0",
                      letterSpacing: "0.06em",
                      textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Subtitle / Description (Clarté Reference Style) */}
                  {item.desc && (
                    <p
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: isMobile ? "0.82rem" : "0.92rem",
                        color: "rgba(255, 255, 255, 0.78)",
                        lineHeight: 1.4,
                        margin: "1px 0 2px",
                        fontWeight: 400,
                      }}
                    >
                      {item.desc}
                    </p>
                  )}

                  {/* Call to Action */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "#F47A4A",
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: isMobile ? "0.75rem" : "0.88rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginTop: "2px",
                    }}
                  >
                    <span>Explore Space</span>
                    <ArrowUpRight size={isMobile ? 13 : 15} />
                  </div>
                </div>
              )}

              {/* Mobile Collapsed State: Center-Aligned Luxury Pill Bar (Clarté Club Reference) */}
              {!isActive && (
                <div
                  className="sc-eg-mobile-pill-label"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 800,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                      textAlign: "center",
                      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.7))",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              )}

              {/* Desktop Collapsed Vertical Label */}
              {!isActive && (
                <div
                  className="sc-eg-desktop-label"
                  style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                    pointerEvents: "none",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      whiteSpace: "nowrap",
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "rgba(255, 255, 255, 0.95)",
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
