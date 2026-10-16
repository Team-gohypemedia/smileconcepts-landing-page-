"use client";

import React from "react";

export default function AllOn4VsAllOnX() {
  return (
    <section
      id="all-on-4-vs-all-on-x"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(4rem, 7vw, 6rem) 1.25rem clamp(3rem, 5vw, 4.5rem)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 clamp(0.5rem, 2vw, 2rem)",
        }}
      >
        {/* Main Title Matching Reference */}
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.55rem, 3.8vw, 3.1rem)",
            fontWeight: 400,
            color: "#E86337",
            lineHeight: 1.25,
            margin: "0 0 1.75rem 0",
            letterSpacing: "-0.01em",
          }}
        >
          All on 4 vs All on X: What Do These Names Actually Mean?
        </h2>

        {/* Primary Explanatory Paragraph - Relaxed wide lines without excessive word wrap */}
        <p
          style={{
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "clamp(0.96rem, 1.4vw, 1.05rem)",
            lineHeight: 1.7,
            color: "#4A4D57",
            margin: "0 auto 1.5rem",
            fontWeight: 400,
            maxWidth: "1280px",
          }}
        >
          If you&apos;ve been researching fixed teeth, you&apos;ve probably seen both &ldquo;All on 4&rdquo; and &ldquo;All on X&rdquo; and wondered whether they are different treatments. They&apos;re not. They are two names for the same thing: a full arch of fixed teeth supported by dental implants, so you never take them out.
        </p>

        {/* Secondary Clinical Distinction Paragraph */}
        <p
          style={{
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "clamp(0.94rem, 1.35vw, 1.03rem)",
            lineHeight: 1.7,
            color: "#4A4D57",
            margin: "0 auto 2rem",
            fontWeight: 400,
            maxWidth: "1320px",
          }}
        >
          &ldquo;All on 4&rdquo; is simply the best-known name for this treatment. It began as a treatment concept where a full arch is supported on four implants. &ldquo;All on X&rdquo; is the umbrella term the profession uses, where &ldquo;X&rdquo; stands for the number of implants, because the right number varies for every patient. How we decide that number, and why it never changes your price, is explained further down this page.
        </p>

        {/* Trademark & Independence Clinical Disclaimer */}
        <p
          style={{
            fontFamily: "var(--font-assistant), sans-serif",
            fontSize: "clamp(0.82rem, 1.1vw, 0.9rem)",
            lineHeight: 1.65,
            color: "#7E828E",
            fontStyle: "italic",
            margin: "0 auto 2.5rem",
            maxWidth: "1200px",
          }}
        >
          All on 4® is a registered trademark and treatment concept of Nobel Biocare. Smile Concepts is an independent practice and plans each full arch case using the implant system best suited to your case, which may include Neoss, DIO, Nobel Biocare, Straumann, NeoDent, Southern Implants or other leading implant systems.
        </p>
      </div>
    </section>
  );
}
