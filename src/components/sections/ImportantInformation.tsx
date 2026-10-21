"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, ChevronDown } from "lucide-react";
import { images } from "@/lib/images";

const infoRows = [
  {
    label: "Surgical Risks",
    text: "All on 4 involves dental implant surgery. Any surgical or invasive procedure carries risks. Before proceeding, you should seek a second opinion from an appropriately qualified health practitioner.",
    images: [{ src: images.practice.p1, alt: "Smile Concepts surgery suite in Sydney CBD", position: "center 60%" }],
  },
  {
    label: "Individual Results",
    text: "Individual results vary and are not guaranteed. All on 4 may not be suitable for everyone, and suitability is confirmed only after a full clinical assessment and 3D imaging. Full treatment typically takes three to six months from implant placement to your final fixed bridge.",
    images: [{ src: images.misc.pointScanBone, alt: "Dentist reviewing a jaw X-ray with a patient during assessment", position: "center 30%" }],
  },
  {
    label: "Pricing",
    text: "Prices shown are starting “from” prices, are current at the time of publication and may change. Your final fee depends on your individual assessment, treatment requirements and material selections.",
    images: [{ src: "/assets/services/implant-cost.jpg", alt: "Dental implant model used to explain treatment options and costs", position: "center center" }],
  },
  {
    label: "AHPRA Registration",
    text: "Your Smile Concepts dentists are registered with the Australian Health Practitioner Regulation Agency (AHPRA): Dr Manish Shah, AHPRA Reg DEN0001361239 (Dental) and MED0001361238 (Medical), and Dr Kinnar Shah, AHPRA Reg DEN0001309395.",
    images: [
      { src: images.team.drManishShah, alt: "Dr Manish Shah", position: "center 20%", caption: "Dr Manish Shah" },
      { src: images.team.drKinnarShah, alt: "Dr Kinnar Shah", position: "center 20%", caption: "Dr Kinnar Shah" },
    ],
  },
];

const references = [
  {
    text: "ITI. Loading Protocols for Fixed Prostheses in Edentulous Jaws. 2013 consensus.",
    url: "https://academy.iti.org/academy/consensus-database/consensus-statement/-/consensus/loading-protocols-for-fixed-prostheses-in-edentulous-jaws/1313",
  },
  {
    text: "Maló P et al. All on 4 mandibular rehabilitation with 10 to 18 years of follow-up. Clinical Implant Dentistry and Related Research. 2019;21:565–577.",
    url: "https://pubmed.ncbi.nlm.nih.gov/30924309/",
  },
  {
    text: "Maló P et al. All on 4 maxillary rehabilitation with 5 to 13 years of follow-up. Clinical Implant Dentistry and Related Research. 2019;21:538–549.",
    url: "https://pubmed.ncbi.nlm.nih.gov/30924250/",
  },
  {
    text: "Mustapha AD, Salame Z, Chrcanovic BR. Smoking and Dental Implants: A Systematic Review and Meta-Analysis. Medicina. 2022;58:39.",
    url: "https://pubmed.ncbi.nlm.nih.gov/35056347/",
  },
  {
    text: "Herrera D et al. Prevention and treatment of peri-implant diseases: EFP S3 clinical practice guideline. 2023.",
    url: "https://pubmed.ncbi.nlm.nih.gov/37271498/",
  },
  {
    text: "Services Australia. Health care and Medicare.",
    url: "https://www.servicesaustralia.gov.au/health-care-and-medicare?context=60092",
  },
  {
    text: "Australian Taxation Office. Access on compassionate grounds.",
    url: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/withdrawing-and-using-your-super/early-access-to-super/access-on-compassionate-grounds",
  },
];

const sourceHost = (url: string) => new URL(url).hostname.replace(/^www\./, "");

const eyebrowStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.45rem",
  backgroundColor: "rgba(232, 99, 55, 0.08)",
  border: "1px solid rgba(232, 99, 55, 0.2)",
  borderRadius: "999px",
  padding: "0.35rem 0.85rem",
  fontFamily: "var(--font-assistant), sans-serif",
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#E86337",
} as const;

const h2Style = {
  fontFamily: "var(--font-prata), Georgia, serif",
  fontSize: "clamp(1.5rem, 3.6vw, 2.4rem)",
  color: "#1C1C1E",
  fontWeight: 400,
  lineHeight: 1.22,
  margin: "0.9rem 0 0",
} as const;

const MOBILE_QUERY = "(max-width: 640px)";
const MOBILE_VISIBLE_REFS = 3;
const AUTOPLAY_MS = 5000;
const RESUME_AFTER_TOUCH_MS = 6000;

export default function ImportantInformation() {
  // Mobile-only swipe carousel for the info cards (desktop shows a 2×2 grid)
  const carouselRef = useRef<HTMLDivElement>(null);
  const pausedUntilRef = useRef(0);
  const [activeCard, setActiveCard] = useState(0);
  // Mobile shows the first few references; the rest expand on demand
  const [showAllRefs, setShowAllRefs] = useState(false);

  const scrollToCard = (idx: number) => {
    const scroller = carouselRef.current;
    const card = scroller?.children[idx] as HTMLElement | undefined;
    if (!scroller || !card) return;
    scroller.scrollTo({
      left: card.offsetLeft - (scroller.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
  };

  const handleCarouselScroll = () => {
    const scroller = carouselRef.current;
    if (!scroller) return;
    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(scroller.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = idx;
      }
    });
    setActiveCard(closest);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!window.matchMedia(MOBILE_QUERY).matches) return;
      if (Date.now() < pausedUntilRef.current) return;
      setActiveCard((prev) => {
        const next = (prev + 1) % infoRows.length;
        scrollToCard(next);
        return next;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="important-information"
      className="sc-info-section"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(3.5rem, 6vw, 6rem) 1.25rem",
        borderTop: "1px solid #ECE7DE",
      }}
    >
      <style>{`
        .sc-info-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1rem, 2.5vw, 1.5rem);
        }
        .sc-refs-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
        }
        .sc-ref-card {
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .sc-ref-card:hover {
          border-color: rgba(232, 99, 55, 0.45) !important;
          box-shadow: 0 10px 26px rgba(232, 99, 55, 0.1);
          transform: translateY(-2px);
        }
        @media (max-width: 760px) {
          .sc-refs-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .sc-info-section {
            padding: 2.75rem 1rem !important;
          }
          .sc-info-grid {
            display: flex;
            position: relative;
            gap: 0.85rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            margin: 0 -1rem;
            padding: 0.25rem 1rem 1.25rem;
            scroll-padding: 0 1rem;
          }
          .sc-info-grid::-webkit-scrollbar {
            display: none;
          }
          .sc-info-card {
            flex: 0 0 86%;
            scroll-snap-align: center;
          }
          .sc-info-dots {
            display: flex !important;
          }
          .sc-info-card-body {
            padding: 1rem 1.1rem 1.15rem !important;
          }
          .sc-info-card-body p {
            font-size: 0.92rem !important;
            line-height: 1.6 !important;
          }
          .sc-refs-panel {
            padding: 1.5rem 0.9rem !important;
            border-radius: 18px !important;
            margin-top: 2.5rem !important;
          }
          .sc-ref-card {
            padding: 0.75rem 0.85rem !important;
            gap: 0.65rem !important;
            border-radius: 12px !important;
          }
          .sc-refs-grid {
            gap: 0.6rem;
          }
          .sc-ref-num {
            width: 26px !important;
            height: 26px !important;
            font-size: 0.78rem !important;
          }
          .sc-ref-text {
            font-size: 0.84rem !important;
            line-height: 1.5 !important;
          }
          .sc-ref-extra {
            display: none !important;
          }
          .sc-refs-toggle {
            display: flex !important;
          }
          .sc-refs-panel .sc-refs-title {
            font-size: 1.35rem !important;
          }
          .sc-ref-card:hover {
            transform: none;
          }
          .sc-review-badge {
            flex-direction: column;
            text-align: center;
            padding: 1.25rem 1rem !important;
            gap: 0.85rem !important;
          }
          .sc-review-badge > div:last-child {
            flex: 1 1 auto !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* ─── Important Information: 2×2 card grid ─── */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto clamp(1.75rem, 3.5vw, 2.5rem)" }}>
          <span style={eyebrowStyle}>
            Before You Decide
          </span>
          <h2 style={h2Style}>Important Information About Your Treatment</h2>
        </div>

        <div
          ref={carouselRef}
          className="sc-info-grid"
          onScroll={handleCarouselScroll}
          onTouchStart={() => {
            pausedUntilRef.current = Infinity;
          }}
          onTouchEnd={() => {
            pausedUntilRef.current = Date.now() + RESUME_AFTER_TOUCH_MS;
          }}
        >
          {infoRows.map((row, idx) => (
            <div
              key={row.label}
              className="sc-info-card"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECE7DE",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 14px 36px -16px rgba(28, 28, 30, 0.16)",
              }}
            >
              {/* Media */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: row.images.length > 1 ? "1fr 1fr" : "1fr",
                  gap: "2px",
                  backgroundColor: "#ECE7DE",
                }}
              >
                {row.images.map((img) => (
                  <div
                    key={img.src}
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: row.images.length > 1 ? "8 / 9" : "16 / 9",
                      backgroundColor: "#F4F1EC",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 820px) 100vw, 540px"
                      style={{ objectFit: "cover", objectPosition: img.position }}
                    />
                    {"caption" in img && (
                      <span
                        style={{
                          position: "absolute",
                          left: "0.6rem",
                          bottom: "0.6rem",
                          padding: "0.25rem 0.6rem",
                          borderRadius: "999px",
                          backgroundColor: "rgba(255, 255, 255, 0.92)",
                          fontFamily: "var(--font-assistant), sans-serif",
                          fontSize: "0.76rem",
                          fontWeight: 700,
                          color: "#1C1C1E",
                        }}
                      >
                        {img.caption}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Text */}
              <div className="sc-info-card-body" style={{ padding: "1.15rem 1.35rem 1.35rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", marginBottom: "0.65rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#E86337",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")} · {row.label}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-assistant), sans-serif",
                    fontSize: "0.94rem",
                    lineHeight: 1.65,
                    color: "#444449",
                    margin: 0,
                  }}
                >
                  {row.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel dots */}
        <div
          className="sc-info-dots"
          style={{ display: "none", justifyContent: "center", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}
        >
          {infoRows.map((row, idx) => (
            <button
              key={row.label}
              type="button"
              aria-label={`Show ${row.label}`}
              onClick={() => {
                pausedUntilRef.current = Date.now() + RESUME_AFTER_TOUCH_MS;
                setActiveCard(idx);
                scrollToCard(idx);
              }}
              style={{
                width: activeCard === idx ? "24px" : "8px",
                height: "8px",
                borderRadius: "999px",
                border: "none",
                padding: 0,
                cursor: "pointer",
                backgroundColor: activeCard === idx ? "#E86337" : "#DDD7CD",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* ─── Clinical Evidence: numbered source cards ─── */}
        <div
          className="sc-refs-panel"
          style={{
            marginTop: "clamp(3.5rem, 7vw, 5.5rem)",
            backgroundColor: "#FAF9F6",
            borderRadius: "24px",
            border: "1px solid #ECE7DE",
            padding: "clamp(1.75rem, 4vw, 3rem)",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto clamp(1.75rem, 3.5vw, 2.5rem)" }}>
            <span style={eyebrowStyle}>
              References
            </span>
            <p className="sc-refs-title" style={h2Style}>Clinical Evidence and Patient Information Sources</p>
          </div>

          <ol className="sc-refs-grid" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {references.map((ref, idx) => (
              <li
                key={ref.url}
                className={idx >= MOBILE_VISIBLE_REFS && !showAllRefs ? "sc-ref-extra" : undefined}
                style={{ display: "flex" }}
              >
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sc-ref-card"
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E0D7",
                    borderRadius: "14px",
                    padding: "1rem 1.1rem",
                    textDecoration: "none",
                  }}
                >
                  <span
                    className="sc-ref-num"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#E86337",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-assistant), sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "0.45rem", minWidth: 0 }}>
                    <span
                      className="sc-ref-text"
                      style={{
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.55,
                        color: "#333338",
                      }}
                    >
                      {ref.text}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontFamily: "var(--font-assistant), sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "#E86337",
                      }}
                    >
                      {sourceHost(ref.url)}
                      <ExternalLink size={12} />
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <button
            type="button"
            className="sc-refs-toggle"
            onClick={() => setShowAllRefs((prev) => !prev)}
            aria-expanded={showAllRefs}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              width: "100%",
              marginTop: "0.85rem",
              padding: "0.75rem 1rem",
              borderRadius: "12px",
              border: "1px solid #E0DAD0",
              backgroundColor: "#FFFFFF",
              color: "#E86337",
              fontFamily: "var(--font-assistant), sans-serif",
              fontSize: "0.9rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {showAllRefs ? "Show fewer sources" : `Show all ${references.length} sources`}
            <ChevronDown
              size={16}
              style={{ transform: showAllRefs ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }}
            />
          </button>
        </div>

        {/* ─── Clinical review badge ─── */}
        <div
          className="sc-review-badge"
          style={{
            marginTop: "clamp(1.75rem, 3.5vw, 2.5rem)",
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            flexWrap: "wrap",
            padding: "1.25rem 1.5rem",
            borderRadius: "18px",
            border: "1px solid rgba(232, 99, 55, 0.25)",
            background: "linear-gradient(135deg, rgba(232, 99, 55, 0.06) 0%, rgba(232, 99, 55, 0.01) 100%)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #FFFFFF",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
              flexShrink: 0,
            }}
          >
            <Image
              src={images.team.drManishShah}
              alt="Dr Manish Shah"
              fill
              sizes="72px"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontFamily: "var(--font-assistant), sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#16A34A",
                marginBottom: "0.35rem",
              }}
            >
              Clinically Reviewed
            </div>
            <p
              style={{
                fontFamily: "var(--font-assistant), sans-serif",
                fontSize: "0.9rem",
                color: "#444449",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Clinically reviewed by <strong style={{ color: "#1C1C1E" }}>Dr Manish Shah</strong>, BDS (Hons), MBBS, MMED (Sleep Medicine), University of Sydney, AHPRA registration: DEN0001361239 (Dental) and MED0001361238 (Medical). Last reviewed: 15th October 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
