import type { Metadata, Viewport } from "next";
import { Prata, Assistant, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import allOn4Schema from "@/data/all-on-4-schema.json";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
  title: "All on 4 Dental Implants & All on X Sydney | Cost From $18k/Arch",
  description:
    "All on 4 dental implants cost in Sydney from $18,000 per arch. Also known as All on X or full mouth dental implants. 25+ years' experience.",
  keywords: [
    "All on 4 Dental Implants Sydney",
    "All on X Sydney",
    "All on four dental implants Sydney",
    "All on Four Cost",
    "full arch dental implants Sydney",
    "All Teeth On 4 Implants Sydney",
    "All Teeth On 4 Implants Cost",
    "dental implants Sydney CBD",
    "full mouth dental implants Sydney",
    "Pitt Street dental implants",
    "permanent dentures Sydney",
    "super fund dental implants",
  ],
  openGraph: {
    title: "All on 4 Dental Implants & All on X Sydney | Cost From $18k/Arch",
    description:
      "All on 4 dental implants cost in Sydney from $18,000 per arch. Also known as All on X or full mouth dental implants. 25+ years' experience.",
    url: "https://www.smileconcepts.com.au/dental-implants/all-on-4-dental-implants-sydney.html",
    siteName: "Smile Concepts",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/assets/brand/cropped-favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/brand/cropped-favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/assets/brand/cropped-favicon-180x180.png",
    shortcut: "/assets/brand/cropped-favicon-32x32.png",
  },
  verification: {
    google: "jzagH1Kn22XN1lF4JTew6XuNGpapqfA0DzwuHf5xP3I",
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQ9CF65N');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(allOn4Schema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body id="top" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQ9CF65N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <style>{`
          /* Custom Premium Scrollbar - Vibrant Signature Orange */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.03) !important;
          }
          ::-webkit-scrollbar-thumb {
            background: #F47A4A !important;
            border-radius: 999px !important;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #e06030 !important;
          }
          * {
            scrollbar-width: thin !important;
            scrollbar-color: #F47A4A rgba(0, 0, 0, 0.03) !important;
          }
        `}</style>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
