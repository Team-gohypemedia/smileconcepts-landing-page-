"use client";

import { Check } from "lucide-react";

const snapOnBenefits = [
  {
    title: "Much more secure",
    text: "Special locator attachments hold the denture in place while you eat, laugh and speak, greatly reducing the slipping, rubbing and sore spots common with conventional dentures.",
  },
  {
    title: "Removable for easy cleaning",
    text: "You unclip it yourself for daily cleaning and at night.",
  },
  {
    title: "Less palate coverage",
    text: "In the upper jaw, implant support often allows a slimmer denture that leaves more of the roof of your mouth uncovered, so food tastes better and the denture feels less bulky.",
  },
  {
    title: "A possible stepping stone",
    text: "Depending on your bone and implant positions, an implant denture can sometimes be upgraded to fixed All on 4 teeth later. Your dentist will tell you whether your implants could be reused.",
  },
  {
    title: "Worth knowing",
    text: "The small clip inserts wear over time and are replaced periodically as part of routine maintenance.",
  },
];

const comparisonData = [
  {
    feature: "Fixed or removable",
    allon4: "Fixed, only your dentist removes it",
    snapOn: "Removable, you unclip it daily",
  },
  {
    feature: "Number of implants",
    allon4: "Usually 4 to 6",
    snapOn: "Usually 2 lower, 4 upper",
  },
  {
    feature: "Price per arch",
    allon4: "From $18,000",
    snapOn: "From $12,000",
  },
  {
    feature: "Cleaning",
    allon4: "Brush and clean under the bridge daily",
    snapOn: "Remove and clean daily",
  },
  {
    feature: "Feel when eating",
    allon4: "Closest to natural teeth",
    snapOn: "Much more stable than a conventional denture",
  },
  {
    feature: "Palate coverage (upper)",
    allon4: "None",
    snapOn: "Reduced",
  },
];

export default function AllOn4SnapOn() {
  return (
    <section
      id="snap-on-dentures"
      className="sc-snap-section"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(3.5rem, 6vw, 5.5rem) 1.25rem",
        position: "relative",
        borderTop: "1px solid #ECE7DE",
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .sc-snap-section {
            padding: 2.75rem 1rem !important;
          }
          .sc-snap-intro-para {
            text-align: left !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "var(--fs-section-title)",
            fontWeight: 400,
            color: "#F47A4A",
            lineHeight: 1.25,
            textAlign: "center",
            margin: "0 auto 1.15rem",
            letterSpacing: "-0.01em",
          }}
        >
          Is There A Cheaper Alternative to All on 4?
        </h2>

        <p
          className="sc-snap-intro-para"
          style={{
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "var(--fs-body)",
            color: "#4F4F4F",
            textAlign: "center",
            maxWidth: "960px",
            margin: "0 auto clamp(2rem, 3.5vw, 2.75rem)",
            lineHeight: 1.6,
          }}
        >
          Yes. If fixed All on 4 teeth are outside your budget, Smile Concepts offers snap on implant dentures, also called an implant overdenture or All on 2, from <strong>$12,000 per arch</strong>. It is a removable denture that clips onto implants, giving far more stability than a conventional denture at a lower cost than fixed teeth.
        </p>

        <h3
          style={{
            fontFamily: "var(--font-prata), Georgia, serif",
            fontSize: "var(--fs-card-title)",
            color: "#1C1C1E",
            fontWeight: 400,
            lineHeight: 1.3,
            textAlign: "center",
            margin: "0 auto 0.75rem",
          }}
        >
          What Are Snap-on Implant Dentures or Clip-on Implant Dentures (All On 2)?
        </h3>

        <p
          style={{
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "0.95rem",
            color: "#444449",
            lineHeight: 1.65,
            margin: "0 0 1.25rem",
          }}
        >
          Unlike a conventional denture that rests on your gums and relies on suction or adhesive, a snap on implant denture is a custom made removable denture that clips securely onto dental implants placed in your jaw. In the lower jaw this usually means two implants, which is why it is often called All on 2. The upper jaw usually needs four implants because the bone is softer.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "0.75rem 1.5rem",
            marginBottom: "clamp(2.25rem, 4vw, 3rem)",
          }}
        >
          {snapOnBenefits.map((item) => (
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
                  marginTop: "2px",
                }}
              >
                <Check size={12} strokeWidth={3} />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-assistant), sans-serif",
                  fontSize: "0.9rem",
                  color: "#444449",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                <strong style={{ color: "#1C1C1E" }}>{item.title}:</strong> {item.text}
              </p>
            </div>
          ))}
        </div>

        <h3
          style={{
            fontFamily: "var(--font-prata), Georgia, serif",
            fontSize: "var(--fs-card-title)",
            color: "#1C1C1E",
            fontWeight: 400,
            lineHeight: 1.3,
            textAlign: "center",
            margin: "0 0 1.25rem",
          }}
        >
          All on 4 vs Snap On Implant Dentures at a Glance
        </h3>

        <div
          className="sc-cmp-wrap"
          style={{
            width: "100%",
            overflowX: "auto",
            borderRadius: "4px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
            border: "1px solid #ECE7DE",
          }}
        >
          <table
            className="sc-cmp-table"
            style={{
              width: "100%",
              minWidth: "620px",
              borderCollapse: "collapse",
              textAlign: "left",
              fontFamily: "var(--font-assistant), sans-serif",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#EB6B3D", color: "#FFFFFF" }}>
                <th style={{ padding: "1rem 1.4rem", fontWeight: 700, fontSize: "0.96rem", letterSpacing: "0.02em", width: "28%" }}>
                  &nbsp;
                </th>
                <th style={{ padding: "1rem 1.4rem", fontWeight: 700, fontSize: "0.96rem", letterSpacing: "0.02em", width: "36%" }}>
                  All on 4 (All on X)
                </th>
                <th style={{ padding: "1rem 1.4rem", fontWeight: 700, fontSize: "0.96rem", letterSpacing: "0.02em", width: "36%" }}>
                  Snap on implant dentures
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={row.feature} style={{ backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#F6F6F6" }}>
                  <td
                    style={{
                      padding: "1.05rem 1.4rem",
                      fontWeight: 600,
                      color: "#222222",
                      fontSize: "0.94rem",
                      borderBottom: "1px solid #ECE7DE",
                      verticalAlign: "top",
                    }}
                  >
                    {row.feature}
                  </td>
                  <td
                    data-label="All on 4 (All on X)"
                    style={{
                      padding: "1.05rem 1.4rem",
                      color: "#333333",
                      fontSize: "0.93rem",
                      lineHeight: 1.55,
                      borderBottom: "1px solid #ECE7DE",
                      verticalAlign: "top",
                    }}
                  >
                    {row.allon4}
                  </td>
                  <td
                    data-label="Snap on implant dentures"
                    style={{
                      padding: "1.05rem 1.4rem",
                      color: "#555555",
                      fontSize: "0.93rem",
                      lineHeight: 1.55,
                      borderBottom: "1px solid #ECE7DE",
                      verticalAlign: "top",
                    }}
                  >
                    {row.snapOn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "0.92rem",
            color: "#666666",
            textAlign: "center",
            maxWidth: "900px",
            margin: "1.75rem auto 0",
            lineHeight: 1.6,
          }}
        >
          Suitability depends on your jawbone, oral health and which jaw is being treated. We walk you through both fixed and snap on options at your consultation so you can compare them side by side, and interest free payment plans are available for either.
        </p>
      </div>
    </section>
  );
}
