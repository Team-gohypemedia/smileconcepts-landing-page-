"use client";

import { ElasticGallery, ElasticItemProps } from "@/components/ui/elastic-gallery";
import { images } from "@/lib/images";

export default function OurPractice() {
  const practiceItems: ElasticItemProps[] = [
    {
      id: "p1",
      title: "Surgery Suite",
      category: "Advanced Tech",
      src: images.practice.p1,
      alt: "Smile Concepts modern dental treatment operatory room with state-of-the-art dental chair in Sydney",
    },
    {
      id: "p2",
      title: "Patient Lounge",
      category: "Welcoming Care",
      src: images.practice.p2,
      alt: "Smile Concepts welcoming reception and waiting lounge with lush indoor greenery in Sydney",
    },
    {
      id: "p3",
      title: "Clinical Team",
      category: "Specialists",
      src: images.practice.p3,
      alt: "The caring dental team and patient coordinators at Smile Concepts Sydney",
    },
    {
      id: "p5",
      title: "Advanced Care",
      category: "Excellence",
      src: images.practice.p5,
      alt: "Smile Concepts Centre for Advanced Dentistry official team apparel and branding",
    },
    {
      id: "p6",
      title: "Smile Design",
      category: "Precision Craft",
      src: images.practice.p6,
      alt: "Clinical dental education model and patient consultation suite at Smile Concepts",
    },
    {
      id: "p4",
      title: "Smile Gallery",
      category: "Real Results",
      src: images.practice.p4,
      alt: "Smile Gallery clinical portfolio book showcasing patient transformations by Dr. Kinnar Shah",
    },
  ];

  return (
    <section
      id="our-practice"
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        padding: "clamp(4rem, 6vw, 6.5rem) clamp(1rem, 3vw, 2.5rem)",
        overflow: "hidden",
      }}
    >
      {/* Dual Heading with Script Title and Subtle Watermark */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto clamp(1.5rem, 3vw, 2.5rem)",
          position: "relative",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
            color: "#E86337",
            fontWeight: 600,
            fontStyle: "italic",
            lineHeight: 1.15,
            margin: 0,
            position: "relative",
            zIndex: 2,
            letterSpacing: "-0.01em",
          }}
        >
          Our Practice
        </p>

        <h2
          style={{
            fontFamily: "var(--font-assistant), 'Helvetica Neue', Arial, sans-serif",
            fontSize: "clamp(2.8rem, 7.5vw, 6.2rem)",
            fontWeight: 800,
            color: "rgba(20, 24, 38, 0.05)",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            margin: "-1.5rem 0 0 0",
            position: "relative",
            zIndex: 1,
            userSelect: "none",
            textTransform: "none",
          }}
        >
          Smile Concepts
        </h2>
      </div>

      {/* Interactive Elastic Gallery */}
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1rem, 3.5vw, 3rem)" }}>
        <ElasticGallery items={practiceItems} defaultActiveId="p2" />
      </div>
    </section>
  );
}
