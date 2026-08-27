import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SITE } from "@/data/site.js";

import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/hero.css";
import "@/styles/cards.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI-Powered SEO & Digital Growth Agency | 4Core Digital",
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: "AI-Powered SEO & Digital Growth Agency | 4Core Digital",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered SEO & Digital Growth Agency | 4Core Digital",
    description: SITE.description,
  },
  keywords: [
    "AI SEO",
    "SEO agency",
    "GEO",
    "AEO",
    "technical SEO",
    "local SEO",
    "eCommerce SEO",
    "4Core Digital",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
