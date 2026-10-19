"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const placementRows = [
  {
    title: "Conventional and All on 4 with Slanted Implants",
    images: [
      { src: "/assets/allon4/doc/placement-conventional.jpg", caption: "Conventional", alt: "X-ray of conventional upright full arch dental implants" },
      { src: "/assets/allon4/doc/placement-slanted.jpg", caption: "All on 4 with slanted implants", alt: "X-ray of All on 4 with angled rear implants in the upper jaw" },
    ],
  },
  {
    title: "Zygomatic Implants",
    images: [
      { src: "/assets/allon4/doc/placement-zygomatic-1.jpg", caption: "Zygomatic Implants", alt: "Illustration of zygomatic implants anchored in the cheekbone supporting a full arch bridge" },
      { src: "/assets/allon4/doc/placement-zygomatic-2.jpg", caption: "Zygomatic Implants", alt: "Illustration of quad zygomatic implants supporting an upper full arch" },
    ],
  },
  {
    title: "Subperiosteal Implants",
    images: [
      { src: "/assets/allon4/doc/placement-subperiosteal-1.jpg", caption: "Subperiosteal Implants", alt: "Illustration of a custom subperiosteal implant framework on the upper jaw" },
      { src: "/assets/allon4/doc/placement-subperiosteal-2.jpg", caption: "Subperiosteal Implants", alt: "Illustration of subperiosteal implants supporting upper and lower full arch bridges" },
    ],
  },
];

const technology = [
  {
    title: "3D CBCT imaging",
    text: "a full three-dimensional scan of your jaw so your implants are planned around your real anatomy, nerves and available bone before surgery begins.",
  },
  {
    title: "4th generation digital guided implant technology",
    text: "digital planning translated into precise, guided placement for predictable positioning across whichever implant system suits your case.",
  },
  {
    title: "Laser dentistry",
    text: "used to support minimally invasive treatment and comfortable healing.",
  },
];

const h2Style = {
  fontFamily: "var(--font-prata), Georgia, serif",
  fontSize: "clamp(1.45rem, 3.6vw, 2.35rem)",
  color: "#1C1C1E",
  fontWeight: 400,
  lineHeight: 1.22,
  margin: "0 0 1rem",
} as const;

const pStyle = {
  fontFamily: "var(--font-assistant), sans-serif",
  fontSize: "clamp(0.92rem, 2.2vw, 1rem)",
  lineHeight: 1.68,
  color: "#444449",
  margin: "0 0 0.9rem",
} as const;

const blockStyle = {
  maxWidth: "1060px",
  margin: "0 auto",
  padding: "clamp(2.5rem, 5vw, 4rem) 0 0",
} as const;

// Every image sits in the same 16:10 frame. The full image is always shown
// (contain); any spare space is filled with a blurred copy of the same image
// so frames look uniform without cropping clinical detail.
function DocImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          borderRadius: "16px",
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          border: "1px solid #ECE7DE",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 700px) 100vw, 520px"
          style={{ objectFit: "cover", filter: "blur(22px)", transform: "scale(1.15)", opacity: 0.85 }}
        />
        <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 520px" style={{ objectFit: "contain" }} />
      </div>
      <figcaption
        style={{
          fontFamily: "var(--font-assistant), sans-serif",
          fontSize: "0.92rem",
          fontWeight: 700,
          color: "#1C1C1E",
          textAlign: "center",
          marginTop: "0.65rem",
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

const twoUpGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
  gap: "1.25rem",
} as const;

type SliderImage = { src: string; alt: string; caption: string };

// Grid of images on desktop; on phones (see .sc-img-slider CSS) a swipeable slider with dots
function ImageSlider({ images, style }: { images: SliderImage[]; style?: CSSProperties }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(track.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = idx;
      }
    });
    setActive(closest);
  };

  const goTo = (idx: number) => {
    const track = trackRef.current;
    const slide = track?.children[idx] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2, behavior: "smooth" });
    setActive(idx);
  };

  return (
    <div>
      <div ref={trackRef} className="sc-img-slider" onScroll={handleScroll} style={{ ...twoUpGrid, ...style }}>
        {images.map((img) => (
          <div key={img.src} className="sc-img-slide">
            <DocImage {...img} />
          </div>
        ))}
      </div>
      <div className="sc-img-dots" style={{ display: "none", justifyContent: "center", gap: "0.5rem", marginTop: "0.9rem" }}>
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Show image ${idx + 1}: ${img.caption}`}
            onClick={() => goTo(idx)}
            style={{
              width: active === idx ? "24px" : "8px",
              height: "8px",
              borderRadius: "999px",
              border: "none",
              padding: 0,
              cursor: "pointer",
              backgroundColor: active === idx ? "#E86337" : "#DDD7CD",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AllOn4ImplantSurgery() {
  return (
    <section
      id="implant-surgery"
      style={{
        backgroundColor: "#FAF9F6",
        padding: "clamp(1rem, 2vw, 1.5rem) 1.25rem clamp(3.5rem, 6vw, 5.5rem)",
        borderTop: "1px solid #ECE7DE",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .sc-surgery-h2 {
            text-align: center !important;
          }
          .sc-surgery-eyebrow {
            display: flex !important;
            justify-content: center !important;
            text-align: center !important;
            margin: 0 auto 0.75rem !important;
          }
        }
        @media (max-width: 640px) {
          .sc-img-slider {
            display: flex !important;
            position: relative;
            gap: 0.85rem !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            margin: 0 -1.25rem !important;
            padding: 0 1.25rem 0.25rem;
            scroll-padding: 0 1.25rem;
          }
          .sc-img-slider::-webkit-scrollbar {
            display: none;
          }
          .sc-img-slide {
            flex: 0 0 86%;
            scroll-snap-align: center;
          }
          .sc-img-dots {
            display: flex !important;
          }
        }
      `}</style>

      {/* ─── How many implants will I need? ─── */}
      <div style={blockStyle}>
        <span
          className="sc-surgery-eyebrow"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#E86337",
            marginBottom: "0.75rem",
          }}
        >
          All on 4 Implant Surgery
        </span>
        <h2 className="sc-surgery-h2" style={h2Style}>How many implants will I need? All on 2, All on 4, All on 6?</h2>
        <p style={pStyle}>
          The number of implants chosen is based on the type of teeth you have selected as the end product (your final teeth).
        </p>
        <p style={pStyle}>
          If you want fixed bridges (fixed teeth that you cannot remove), then we place between 4 and 8 implants. If, however, you choose removable teeth as the final option, then 2 to 4 implants are a better choice.
        </p>
        <p style={pStyle}>
          Your dentist selects the number of implants after an examination and imaging, rather than fixing it in advance. More implants are not automatically better; their position, bone support and bridge design also matter.
        </p>
        <p style={pStyle}>
          Many patients are treated with four implants, the classic &ldquo;all on 4&rdquo;. Others do better with six or eight dental implants, especially where the bone is softer, or the bite is heavier. That is &ldquo;all on 6&rdquo; or &ldquo;all on 8&rdquo;. Same treatment, same fixed teeth, just more support where your anatomy calls for it.
        </p>
        <p style={pStyle}>
          <strong>Here is what matters most: we don&apos;t charge per implant.</strong> After thoroughly analysing your X-rays and 3D CBCT scan, your dentist decides whether four, six, or eight implants will give you the strongest, longest-lasting result, and the price per arch stays the same either way. Your treatment is driven by your anatomy, not by a price list.
        </p>
        <p style={pStyle}>
          All on 2 implants and sometimes all on 4 implants may be used for supporting removable dentures.
        </p>
        <p style={{ ...pStyle, marginBottom: "1.75rem" }}>
          An implant-supported overdenture is removed for cleaning and may be an alternative to a fixed bridge. Gum disease should be assessed and managed before either option; a removable design does not eliminate the risk of disease around implants.
        </p>

        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <ImageSlider
            images={[
              { src: "/assets/allon4/doc/all-on-2.jpg", alt: "Illustration of a lower denture clipping onto two implants (All on 2)", caption: "All on 2" },
              { src: "/assets/allon4/doc/all-on-6.jpg", alt: "Illustration of a full arch bridge fixed onto six implants (All on 6)", caption: "All on 6" },
            ]}
          />
        </div>
      </div>

      {/* ─── How are All on 4 Dental Implants placed? ─── */}
      <div style={blockStyle}>
        <h2 className="sc-surgery-h2" style={h2Style}>How are All on 4 Dental Implants placed?</h2>
        <ImageSlider
          images={placementRows.flatMap((row) => row.images)}
          style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", rowGap: "2rem" }}
        />
      </div>

      {/* ─── The Dental Implants used at Smile Concepts ─── */}
      <div style={blockStyle}>
        <h2 className="sc-surgery-h2" style={h2Style}>The Dental Implants used at Smile Concepts</h2>
        <p style={pStyle}>
          We are not a single-brand clinic. Smile Concepts works with several of the world&apos;s leading implant systems, including Neoss, DIO, Nobel Biocare and Straumann, among others, and our dentists have trained on and worked with most major systems.
        </p>
        <p style={pStyle}>
          Why does this matter to you? Because your jaw is unique. A clinic tied to one brand has to make your anatomy fit their implant. We choose the implant system that best fits your bone, your bite and your long-term outcome, not the other way around. This is brand-agnostic, anatomy-first implant dentistry.
        </p>
        <p style={pStyle}>
          We also assess revision cases from other clinics and overseas. When a full arch treatment done elsewhere hasn&apos;t worked out, correcting it takes broad experience across different implant systems and complex bone situations. That is exactly the experience our team has built.
        </p>
        <p style={pStyle}>
          Assessment is needed before we can confirm whether existing implants or the bridge can be retained.
        </p>
      </div>

      {/* ─── Our All on 4 Technology ─── */}
      <div style={blockStyle}>
        <h2 className="sc-surgery-h2" style={h2Style}>Our All on 4 Technology</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {technology.map((item) => (
            <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
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
                  marginTop: "3px",
                }}
              >
                <Check size={12} strokeWidth={3} />
              </div>
              <p style={{ ...pStyle, margin: 0 }}>
                <strong style={{ color: "#1C1C1E" }}>{item.title}:</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── All on 4 or All on X with Bone Loss? ─── */}
      <div style={blockStyle}>
        <h2 className="sc-surgery-h2" style={h2Style}>All on 4 or All on X with Bone Loss?</h2>
        <p style={pStyle}>
          Bone loss after tooth loss is common and does not automatically rule out the All on 4 dental implant treatment concept.
        </p>
        <p style={pStyle}>As shown in the above images, we can approach implant treatment in several ways.</p>
        <p style={pStyle}>
          Angled implants may help use available bone while avoiding nearby structures. Some patients still need grafting or another approach. [1–3]
        </p>
        <p style={pStyle}>Our 3D imaging shows us exactly what is available before we make any recommendations.</p>
        <p style={{ ...pStyle, margin: 0 }}>Some cases may require bone grafting.</p>
      </div>
    </section>
  );
}
