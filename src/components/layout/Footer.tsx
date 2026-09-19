"use client";

import { Phone, MapPin, Mail } from "lucide-react";

const treatments = [
  "Porcelain Veneers", "Dental Implants", "Invisalign", "Clear Braces",
  "Gum Lift", "Laser Dentistry", "Sleep Dentistry", "TMJ Treatment",
];
const practice = ["About Us", "Our Team", "Smile Gallery", "Blog", "Payment Plans", "Contact Us"];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/SmileConceptsSydney",
    svg: <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.9v-2.89h2.538V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />,
  },
  {
    label: "Instagram",
    href: "#",
    svg: <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />,
  },
  {
    label: "YouTube",
    href: "#",
    svg: <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />,
  },
];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#0f0f1a", color: "rgba(255,255,255,0.7)" }}>
      {/* Main grid */}
      <div
        className="container-sc footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1.2fr 1.2fr 1.6fr",
          gap: "3rem",
          padding: "5rem 0",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#F47A4A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-prata)", color: "#fff", fontSize: "1.1rem", fontWeight: 700 }}>S</span>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-prata)", color: "#fff", fontSize: "1rem", fontWeight: 400, lineHeight: 1 }}>Smile Concepts</div>
              <div style={{ fontFamily: "var(--font-assistant)", color: "#F47A4A", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "3px" }}>Dental · Sydney CBD</div>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "280px" }}>
            Award-winning dental clinic in the heart of Sydney CBD. Creating beautiful, healthy smiles for over 40 years.
          </p>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            {socialLinks.map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social-btn"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.35)",
                  transition: "all 0.25s",
                  textDecoration: "none",
                }}
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">{svg}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* Treatments */}
        <div>
          <h4 style={{ fontFamily: "var(--font-assistant)", color: "#fff", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Treatments</h4>
          <ul style={{ listStyle: "none" }}>
            {treatments.map(item => (
              <li key={item} style={{ marginBottom: "0.5rem" }}>
                <a href="#" className="footer-nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice */}
        <div>
          <h4 style={{ fontFamily: "var(--font-assistant)", color: "#fff", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Practice</h4>
          <ul style={{ listStyle: "none" }}>
            {practice.map(item => (
              <li key={item} style={{ marginBottom: "0.5rem" }}>
                <a href="#" className="footer-nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Hours */}
        <div>
          <h4 style={{ fontFamily: "var(--font-assistant)", color: "#fff", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Contact Us</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.75rem" }}>
            {[
              { icon: <Phone size={15} />, href: "tel:0292677777", text: "02 9267 7777" },
              { icon: <Mail size={15} />, href: "mailto:info@smileconcepts.com.au", text: "info@smileconcepts.com.au" },
            ].map(({ icon, href, text }) => (
              <a
                key={text}
                href={href}
                className="footer-nav-link"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
              >
                <span style={{ color: "#F47A4A", flexShrink: 0 }}>{icon}</span>
                {text}
              </a>
            ))}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
              <MapPin size={15} color="#F47A4A" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>Suite 201, 210 Pitt Street,<br />Sydney NSW 2000</span>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.25rem" }}>
            <h5 style={{ fontFamily: "var(--font-assistant)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem" }}>Hours</h5>
            {[["Mon – Fri", "8:00am – 6:00pm"], ["Saturday", "9:00am – 2:00pm"], ["Sunday", "Closed"]].map(([day, hrs]) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: "0.4rem" }}>
                <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>{day}</span>
                <span style={{ fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: day === "Sunday" ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.55)" }}>{hrs}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-sc" style={{ padding: "1.25rem 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--font-assistant)", fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Smile Concepts. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map(item => (
              <a key={item} href="#" className="footer-legal-link">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-social-btn:hover {
          border-color: #F47A4A !important;
          color: #F47A4A !important;
        }
        .footer-nav-link {
          font-family: var(--font-assistant);
          font-size: 0.875rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
          display: block;
          padding: 0.2rem 0;
        }
        .footer-nav-link:hover {
          color: #F47A4A !important;
        }
        .footer-legal-link {
          font-family: var(--font-assistant);
          font-size: 0.78rem;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal-link:hover {
          color: rgba(255,255,255,0.6) !important;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

