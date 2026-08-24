import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CursorSpotlight from "@/components/CursorSpotlight";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sayaintellicall.com"),
  title: "Saya Intellicall | Leading Telecalling, Call Center & BPO Services in India",
  description:
    "Saya Intellicall provides exceptional Inbound & Outbound Telecalling, SMS & WhatsApp Marketing, Multi-Level IVR, and BPO Consultancy solutions across India.",
  keywords: [
    "Saya Intellicall",
    "Telecalling Services India",
    "Call Center Services Aurangabad Pune",
    "Inbound Call Center",
    "Outbound Telecalling",
    "SMS Marketing",
    "WhatsApp Marketing API",
    "Multi Level IVR",
    "BPO Services India"
  ],
  authors: [{ name: "Saya Intellicall" }],
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
  },
  openGraph: {
    title: "Saya Intellicall | Telecalling, Call Center & BPO Services",
    description:
      "Transform first impressions into lasting partnerships with our inbound and outbound telecalling expertise across India.",
    url: "https://sayaintellicall.com",
    siteName: "Saya Intellicall",
    images: [
      {
        url: "/images/company/company-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saya Intellicall Operations",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        <CursorSpotlight />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

