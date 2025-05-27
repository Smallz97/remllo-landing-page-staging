import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./utilities/ui/components/navbar/Navbar";
import FooterBar from "./utilities/ui/components/footerbar/FooterBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remllo",
  description: "rethinking compliance for Africa's digital future",
  openGraph: {
    title: "Remllo",
    description: "rethinking compliance for Africa's digital future",
    url: "https://www.remllo.com",
    siteName: "Remllo",
    images: [
      {
        url: "https://www.remllo.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Remllo - Rethinking compliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remllo",
    description: "rethinking compliance for Africa's digital future",
    site: "@remllo",
    images: ["https://www.remllo.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`} >
        <Navbar />
        <main>{children}</main>
        <FooterBar />
      </body>
    </html>
  );
}
