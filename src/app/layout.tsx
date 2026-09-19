import type { Metadata } from "next";
import { Prata, Assistant, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: "400",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Smile Concepts: Leading Dentist Sydney CBD | Dental Clinic Pitt Street",
  description:
    "Expert dentist in Sydney with 40+ years of creating flawless smiles. Offering General, Implant & Cosmetic dentistry.",
  keywords: ["dentist Sydney", "cosmetic dentistry", "dental implants", "Pitt Street dental"],
  openGraph: {
    title: "Smile Concepts: Leading Dentist Sydney CBD",
    description: "Expert dentist in Sydney with 40+ years of creating flawless smiles.",
    url: "https://www.smileconcepts.com.au",
    siteName: "Smile Concepts",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${assistant.variable} ${playfair.variable}`}
    >
      <body className="min-h-full antialiased bg-white text-gray-800">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
