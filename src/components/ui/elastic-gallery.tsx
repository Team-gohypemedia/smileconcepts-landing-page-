"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export interface ElasticItemProps {
  id: string;
  title: string;
  category: string;
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
      category: "Advanced Care",
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&auto=format&fit=crop&q=80",
      alt: "State of the art dental operatory",
    },
    {
      id: "02",
      title: "Patient Lounge",
      category: "Environment",
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80",
      alt: "Warm welcoming reception",
    },
    {
      id: "03",
      title: "Clinical Team",
      category: "Specialists",
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&auto=format&fit=crop&q=80",
      alt: "Our experienced dental clinicians",
    },
    {
      id: "04",
      title: "Smile Design",
      category: "Cosmetics",
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&auto=format&fit=crop&q=80",
      alt: "Precision tooth and implant crafting",
    },
    {
      id: "05",
      title: "Smile Gallery",
      category: "Transformations",
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
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "0.65rem" : "0.75rem",
          height: isMobile ? "auto" : "560px",
          width: "100%",
          maxWidth: "1520px",
          margin: "0 auto",
        }}
      >
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
              style={{
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "16px",
                border: isActive
                  ? "1.5px solid rgba(244, 122, 74, 0.6)"
                  : "1px solid rgba(0, 0, 0, 0.08)",
                backgroundColor: "#111116",
                // Flex sizing on desktop, fixed height animation on mobile
                flex: isMobile ? "none" : isActive ? 4 : 1,
                height: isMobile ? (isActive ? "300px" : "62px") : "100%",
                minHeight: isMobile ? (isActive ? "300px" : "62px") : "auto",
                transition:
                  "flex 0.65s cubic-bezier(0.25, 1, 0.5, 1), height 0.45s cubic-bezier(0.25, 1, 0.5, 1), border 0.3s ease, box-shadow 0.3s ease, filter 0.4s ease",
                filter: isActive
                  ? "brightness(1)"
                  : isHovered
                  ? "brightness(0.85)"
                  : "brightness(0.65)",
                boxShadow: isActive
                  ? "0 18px 40px rgba(0, 0, 0, 0.22)"
                  : "0 4px 12px rgba(0, 0, 0, 0.04)",
              }}
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
                  sizes={isMobile ? "100vw" : "(max-width: 1200px) 35vw, 450px"}
                  style={{
                    objectFit: "cover",
                    transform: isActive ? "scale(1)" : "scale(1.08)",
                    transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                />

                {/* Dark Gradient Overlay for active readability */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isMobile && !isActive
                      ? "rgba(10, 12, 20, 0.68)"
                      : "linear-gradient(to top, rgba(10, 10, 14, 0.92) 0%, rgba(10, 10, 14, 0.35) 45%, rgba(0, 0, 0, 0.1) 100%)",
                    opacity: isActive ? 1 : isMobile ? 1 : 0.75,
                    transition: "opacity 0.4s ease",
                  }}
                />
              </div>

              {/* Mobile Collapsed State Bar (Clean, instant tap-to-expand) */}
              {isMobile && !isActive && (
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 1.25rem",
                    height: "100%",
                    color: "#ffffff",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#F47A4A",
                        backgroundColor: "rgba(244, 122, 74, 0.16)",
                        padding: "2px 8px",
                        borderRadius: "999px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.id}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        letterSpacing: "0.03em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.title}
                    </span>
                  </div>

                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                    }}
                  >
                    <ChevronDown size={16} />
                  </div>
                </div>
              )}

              {/* Active State Content (Both Desktop & Mobile) */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: isMobile ? "1.25rem" : "1.75rem 2rem",
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
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        backgroundColor: "rgba(255, 255, 255, 0.18)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        padding: "3px 10px",
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
                      fontSize: isMobile ? "1.5rem" : "clamp(1.6rem, 2.4vw, 2.4rem)",
                      fontWeight: 900,
                      color: "#ffffff",
                      textTransform: "uppercase",
                      lineHeight: 1.15,
                      margin: "2px 0 0 0",
                      letterSpacing: "0.02em",
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Call to Action */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "#F47A4A",
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: isMobile ? "0.82rem" : "0.88rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    <span>Explore Space</span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              )}

              {/* Desktop Collapsed Vertical Label */}
              {!isMobile && !isActive && (
                <div
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
                      color: "rgba(255, 255, 255, 0.92)",
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.7))",
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
