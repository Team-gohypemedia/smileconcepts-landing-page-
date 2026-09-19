"use client";

import React from 'react';
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { Globe, Phone, MapPin, ArrowRight } from 'lucide-react';

// Icon component for contact details using lucide-react with inline styles
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
  return (
    <div
      style={{
        marginRight: "0.65rem",
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "rgba(244, 122, 74, 0.15)",
        color: "#F47A4A",
      }}
    >
      {type === 'website' && <Globe size={15} />}
      {type === 'phone' && <Phone size={15} />}
      {type === 'address' && <MapPin size={15} />}
    </div>
  );
};

// Prop types for the HeroSection component
export interface HeroSectionProps extends Omit<HTMLMotionProps<"section">, "title"> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, style, ...props }, ref) => {

    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.15,
        },
      },
    };

    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.55,
          ease: "easeOut",
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={`sc-hero2-container ${className || ""}`}
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "#0C0D17",
          color: "#ffffff",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between",
          minHeight: "620px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          ...style,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        {...props}
      >
        <style>{`
          @media (max-width: 890px) {
            .sc-hero2-container {
              flex-direction: column !important;
            }
            .sc-hero2-content {
              padding: 2.75rem 1.25rem 2.25rem !important;
              max-width: 100% !important;
              text-align: center !important;
              align-items: center !important;
            }
            .sc-hero2-content header {
              justify-content: center !important;
            }
            .sc-hero2-title {
              text-align: center !important;
              font-size: clamp(1.75rem, 5.8vw, 2.6rem) !important;
              line-height: 1.2 !important;
            }
            .sc-hero2-divider {
              margin: 1.15rem auto 1.35rem auto !important;
            }
            .sc-hero2-subtitle {
              text-align: center !important;
              font-size: clamp(0.92rem, 3.5vw, 1.05rem) !important;
              line-height: 1.65 !important;
              margin: 0 auto 1.75rem auto !important;
            }
            .sc-hero2-cta-wrap {
              display: flex !important;
              justify-content: center !important;
              width: 100% !important;
            }
            .sc-hero2-footer-links {
              justify-content: center !important;
              text-align: center !important;
              gap: 0.85rem 1.25rem !important;
            }
            .sc-hero2-image {
              min-height: 340px !important;
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important;
            }
          }
        `}</style>

        {/* Left Side: Content Column */}
        <div
          className="sc-hero2-content"
          style={{
            flex: "1 1 540px",
            maxWidth: "680px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(2.5rem, 5vw, 4.25rem) clamp(1.5rem, 4.5vw, 4rem)",
            zIndex: 2,
            boxSizing: "border-box",
          }}
        >
          {/* Brand Logo & Slogan Header (only rendered if logo or slogan is provided) */}
          {(logo || slogan) && (
            <motion.header
              variants={itemVariants}
              style={{
                marginBottom: "clamp(1.5rem, 2.5vw, 2.25rem)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {logo && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.15rem",
                    flexWrap: "wrap",
                  }}
                >
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    style={{
                      height: "36px",
                      maxWidth: "185px",
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                  {(logo.text || slogan) && (
                    <div
                      style={{
                        borderLeft: "1px solid rgba(255, 255, 255, 0.22)",
                        paddingLeft: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      {logo.text && (
                        <span
                          style={{
                            fontFamily: "var(--font-assistant)",
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            color: "#ffffff",
                            lineHeight: 1.2,
                          }}
                        >
                          {logo.text}
                        </span>
                      )}
                      {slogan && (
                        <span
                          style={{
                            fontFamily: "var(--font-assistant)",
                            fontSize: "0.72rem",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            color: "#F47A4A",
                            lineHeight: 1.3,
                          }}
                        >
                          {slogan}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </motion.header>
          )}

          {/* Main Typography & Body */}
          <motion.main variants={containerVariants}>
            <motion.div
              variants={itemVariants}
              className="sc-hero2-title"
              style={{
                fontFamily: "var(--font-prata)",
                fontSize: "clamp(2rem, 3.6vw, 3.3rem)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              {title}
            </motion.div>

            {/* Accent Orange Divider */}
            <motion.div
              variants={itemVariants}
              className="sc-hero2-divider"
              style={{
                margin: "1.35rem 0 1.5rem 0",
                height: "3px",
                width: "56px",
                backgroundColor: "#F47A4A",
                borderRadius: "2px",
              }}
            />

            <motion.p
              variants={itemVariants}
              className="sc-hero2-subtitle"
              style={{
                fontFamily: "var(--font-assistant)",
                fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                lineHeight: 1.72,
                color: "rgba(255, 255, 255, 0.78)",
                maxWidth: "520px",
                marginBottom: "2rem",
                fontWeight: 300,
              }}
            >
              {subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="sc-hero2-cta-wrap">
              <a
                href={callToAction.href}
                className="sc-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  backgroundColor: "#F47A4A",
                  color: "#ffffff",
                  padding: "0.85rem 1.85rem",
                  borderRadius: "8px",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(244, 122, 74, 0.35)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#e06934";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 10px 28px rgba(244, 122, 74, 0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#F47A4A";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 6px 20px rgba(244, 122, 74, 0.35)";
                }}
              >
                {callToAction.text}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.main>

          {/* Contact Details Footer */}
          <motion.footer
            variants={itemVariants}
            style={{
              marginTop: "clamp(2rem, 3.5vw, 2.75rem)",
              paddingTop: "1.25rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              width: "100%",
            }}
          >
            <div
              className="sc-hero2-footer-links"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem 2rem",
                fontFamily: "var(--font-assistant)",
                fontSize: "0.82rem",
                color: "rgba(255, 255, 255, 0.65)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <InfoIcon type="website" />
                <span>{contactInfo.website}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <InfoIcon type="phone" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)")}
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <InfoIcon type="address" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.footer>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div
          className="sc-hero2-image"
          style={{
            flex: "1 1 440px",
            minHeight: "560px",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center 22%",
            backgroundRepeat: "no-repeat",
            position: "relative",
            boxSizing: "border-box",
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          whileInView={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle gradient vignette to blend into dark background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(12, 13, 23, 0.5) 0%, transparent 35%)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
export default HeroSection;
