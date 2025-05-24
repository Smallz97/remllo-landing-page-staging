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
