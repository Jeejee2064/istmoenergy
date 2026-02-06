import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Istmo Energy | North American Wholesale Electricity Markets",
  description: "Independent energy trading and analytics firm focused on short term North American wholesale electricity markets. Driven by proprietary tools and market expertise.",
  keywords: ["Energy Trading", "Analytics", "Electricity Markets", "North America", "Istmo Energy", "Grid Reliability"],
  authors: [{ name: "Istmo Energy LLC" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/logo.png", // Utilise votre logo comme favicon
  },
  openGraph: {
    title: "Istmo Energy LLC",
    description: "Analytics and Trading in Wholesale Electricity Markets.",
    url: "https://istmoenergy.net",
    siteName: "Istmo Energy",
    images: [
      {
        url: "/social.png", // Image de partage social
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}