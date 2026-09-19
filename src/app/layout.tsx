import type { Metadata } from "next";
import { Prata, Assistant, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

/* ─── Google Fonts ──────────────────────────────────────────────── */
const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/* ─── SEO Metadata ──────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "All on 4 Dental Implants Sydney | Smile Concepts CBD – Permanent Teeth",
  description:
    "Sydney's leading All on 4 Dental Implants clinic at 210 Pitt St, Sydney CBD. Permanent teeth in 1-3 days, no bone grafting in most cases. Super fund release & payment plans available. Book now: 02 9267 7777.",
  keywords: [
    "All on 4 Dental Implants Sydney",
    "All on four dental implants Sydney",
    "All teeth on 4 Sydney cost",
    "dental implants Sydney CBD",
    "full mouth dental implants Sydney",
    "Pitt Street dental implants",
    "permanent dentures Sydney",
    "super fund dental implants",
  ],
  openGraph: {
    title: "All on 4 Dental Implants Sydney | Smile Concepts",
    description:
      "Transform your smile with permanent All on 4 dental implants in Sydney CBD. Over 40 years of surgical excellence.",
    url: "https://www.smileconcepts.com.au/dental-implants/all-on-4-dental-implants-sydney.html",
    siteName: "Smile Concepts",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/brand/cropped-favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/brand/cropped-favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/brand/cropped-favicon-180x180.png",
    shortcut: "/images/brand/cropped-favicon-32x32.png",
  },
};

/* ─── Root Layout ───────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${assistant.variable} ${playfair.variable}`}
    >
      <body
        style={{ fontFamily: "var(--font-assistant), 'Helvetica Neue', Arial, sans-serif" }}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
