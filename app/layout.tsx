import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

/* ==========================================
   Typography Setup
   DM Sans - Clean modern body text
   Playfair Display - Elegant serif headings
   ========================================== */

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Manodaya Tours & Travels | Sacred Journeys Through Uttarakhand",
  description:
    "Experience the divine beauty of Uttarakhand with curated Char Dham, Do Dham, Kedarnath & Badrinath Yatra packages. Family-run, locally rooted pilgrimage experts.",
  keywords: [
    "Char Dham Yatra",
    "Do Dham Yatra",
    "Kedarnath Yatra",
    "Badrinath Yatra",
    "Uttarakhand pilgrimage",
    "Himalayan tours",
  ],
  icons: {
    icon: "/Logo/logo.png",
    apple: "/Logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
