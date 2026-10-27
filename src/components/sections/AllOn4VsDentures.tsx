"use client";

export default function AllOn4VsDentures() {
  // Exact Denture Comparison Table Matching Reference Website
  const comparisonData = [
    {
      feature: "Fixed in place",
      allon4: "Yes",
      dentures: "No",
    },
    {
      feature: "Removed for cleaning",
      allon4: "No",
      dentures: "Yes",
    },
    {
      feature: "Stability when eating",
      allon4: "Higher",
      dentures: "May vary",
    },
    {
      feature: "Denture adhesives required",
      allon4: "Usually not",
      dentures: "Often",
    },
    {
      feature: "Supported by implants",
      allon4: "Yes",
      dentures: "No",
    },
    {
      feature: "Designed as a fixed solution",
      allon4: "Yes",
      dentures: "No",
    },
  ];

  return (
    <section
      id="dentures-comparison"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(3.5rem, 6vw, 5.5rem) 1.25rem",
        position: "relative",
        borderTop: "1px solid #ECE7DE",
      }}
    >
      <style>{`
        .sc-dent-cards {
          display: none;
        }
        @media (max-width: 640px) {
          .sc-dent-table {
            display: none !important;
          }
          .sc-dent-cards {
            display: flex;
            flex-direction: column;
            gap: 0.65rem;
          }
        }
      `}</style>
      <div
        style={{
          maxWidth: "1060px",
          margin: "0 auto",
        }}
      >
        {/* Centered Coral Serif Heading (Balanced to fit in one line) */}
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
          All on 4 vs Traditional Dentures: How Do They Compare?
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "var(--fs-body)",
            color: "#4F4F4F",
            textAlign: "center",
            maxWidth: "960px",
            margin: "0 auto clamp(1.75rem, 3vw, 2.5rem)",
            lineHeight: 1.6,
          }}
        >
          While dentures remain a suitable option for some people, they are removable and may become loose over time as the jawbone changes. The most suitable option depends on your oral health, goals, and clinical assessment.
        </p>

        {/* Clean, Simple Table (Responsive & Easy to Read) */}
        <div
          className="sc-dent-table"
          style={{
            width: "100%",
            overflowX: "auto",
            borderRadius: "4px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
            border: "1px solid #ECE7DE",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: "620px",
              borderCollapse: "collapse",
              textAlign: "left",
              fontFamily: "var(--font-assistant), sans-serif",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#EB6B3D",
                  color: "#FFFFFF",
                }}
              >
                <th
                  style={{
                    padding: "1rem 1.4rem",
                    fontWeight: 700,
                    fontSize: "0.96rem",
                    letterSpacing: "0.02em",
                    width: "28%",
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    padding: "1rem 1.4rem",
                    fontWeight: 700,
                    fontSize: "0.96rem",
                    letterSpacing: "0.02em",
                    width: "36%",
                  }}
                >
                  All On 4
                </th>
                <th
                  style={{
                    padding: "1rem 1.4rem",
                    fontWeight: 700,
                    fontSize: "0.96rem",
                    letterSpacing: "0.02em",
                    width: "36%",
                  }}
                >
                  Traditional Dentures
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#F6F6F6",
                    transition: "background-color 0.15s ease",
                  }}
                >
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
                    style={{
                      padding: "1.05rem 1.4rem",
                      color: "#555555",
                      fontSize: "0.93rem",
                      lineHeight: 1.55,
                      borderBottom: "1px solid #ECE7DE",
                      verticalAlign: "top",
                    }}
                  >
                    {row.dentures}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: comparison as stacked cards */}
        <div className="sc-dent-cards">
          {comparisonData.map((row) => (
            <div
              key={row.feature}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECE7DE",
                borderRadius: "14px",
                overflow: "hidden",
                fontFamily: "var(--font-assistant), sans-serif",
              }}
            >
              <div style={{ backgroundColor: "#EB6B3D", color: "#FFFFFF", fontWeight: 700, fontSize: "0.9rem", padding: "0.6rem 0.95rem" }}>
                {row.feature}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div style={{ padding: "0.7rem 0.95rem", borderRight: "1px solid #ECE7DE" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#E86337", marginBottom: "0.2rem" }}>
                    All On 4
                  </div>
                  <div style={{ fontSize: "0.92rem", color: "#333333", fontWeight: 600 }}>{row.allon4}</div>
                </div>
                <div style={{ padding: "0.7rem 0.95rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#777777", marginBottom: "0.2rem" }}>
                    Traditional Dentures
                  </div>
                  <div style={{ fontSize: "0.92rem", color: "#555555", fontWeight: 600 }}>{row.dentures}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Footnote Matching Second Image */}
        <p
          style={{
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "0.92rem",
            color: "#666666",
            textAlign: "center",
            marginTop: "1.75rem",
            lineHeight: 1.6,
          }}
        >
          In our Sydney practice, one of the most common questions we hear from denture wearers is whether significant bone loss rules them out.
        </p>
      </div>
    </section>
  );
}
