import Link from "next/link";
import { Phone, MapPin, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const links = {
  Treatments: [
    "Porcelain Veneers",
    "Dental Implants",
    "Invisalign",
    "Clear Braces",
    "Gum Lift",
    "Laser Dentistry",
    "Sleep Dentistry",
    "TMJ Treatment",
  ],
  Practice: ["About Us", "Our Team", "Smile Gallery", "Blog", "Payment Plans", "Contact Us"],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0f0f1a] text-white/70"
      style={{ fontFamily: "var(--font-assistant)" }}
    >
      {/* Main grid */}
      <div className="container-sc py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-[#F47A4A] flex items-center justify-center shrink-0">
              <span
                className="text-white text-xl font-bold"
                style={{ fontFamily: "var(--font-prata)" }}
              >
                S
              </span>
            </div>
            <div>
              <div
                className="text-white text-base font-bold leading-none"
                style={{ fontFamily: "var(--font-prata)" }}
              >
                Smile Concepts
              </div>
              <div className="text-[#F47A4A] text-[10px] tracking-[0.2em] uppercase mt-0.5">
                Dental · Sydney CBD
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6 max-w-xs">
            Award-winning dental clinic in the heart of Sydney CBD. Creating beautiful, healthy smiles for over 40 years.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/SmileConceptsSydney" },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Youtube, label: "YouTube", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#F47A4A] hover:text-[#F47A4A] transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(links).map(([category, items]) => (
          <div key={category}>
            <h4
              className="text-white text-sm font-semibold mb-5 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-assistant)" }}
            >
              {category}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/50 hover:text-[#F47A4A] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4
            className="text-white text-sm font-semibold mb-5 uppercase tracking-wider"
            style={{ fontFamily: "var(--font-assistant)" }}
          >
            Contact Us
          </h4>
          <div className="flex flex-col gap-4">
            <a
              href="tel:0292677777"
              className="flex items-start gap-3 text-sm text-white/50 hover:text-[#F47A4A] transition-colors group"
            >
              <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#F47A4A]" />
              02 9267 7777
            </a>
            <a
              href="mailto:info@smileconcepts.com.au"
              className="flex items-start gap-3 text-sm text-white/50 hover:text-[#F47A4A] transition-colors"
            >
              <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#F47A4A]" />
              info@smileconcepts.com.au
            </a>
            <div className="flex items-start gap-3 text-sm text-white/50">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#F47A4A]" />
              <span>Suite 201, 210 Pitt Street,<br />Sydney NSW 2000</span>
            </div>
          </div>

          {/* Hours */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <h5 className="text-white/70 text-xs uppercase tracking-wider mb-3">Hours</h5>
            <div className="text-xs text-white/40 flex flex-col gap-1.5">
              <div className="flex justify-between gap-4">
                <span>Mon – Fri</span><span className="text-white/60">8:00am – 6:00pm</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Saturday</span><span className="text-white/60">9:00am – 2:00pm</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sunday</span><span className="text-white/30">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-sc py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Smile Concepts. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
