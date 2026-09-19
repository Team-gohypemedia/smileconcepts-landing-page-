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
  title: "Smile Concepts | Leading Dentist Sydney CBD – Pitt Street",
  description:
    "Award-winning dental clinic in Sydney CBD. 40+ years of expert General, Cosmetic & Implant Dentistry. Book your consultation today.",
  keywords: [
    "dentist Sydney CBD",
    "cosmetic dentistry Sydney",
    "dental implants Sydney",
    "Pitt Street dentist",
    "porcelain veneers Sydney",
    "Invisalign Sydney",
  ],
  openGraph: {
    title: "Smile Concepts | Leading Dentist Sydney CBD",
    description:
      "40+ years of creating beautiful smiles in the heart of Sydney.",
    url: "https://www.smileconcepts.com.au",
    siteName: "Smile Concepts",
    type: "website",
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
