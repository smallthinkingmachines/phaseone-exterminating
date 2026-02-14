import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Phaseone Exterminating | Professional Pest Control NYC Metro & Tri-State",
  description:
    "Expert pest control services in NYC Metro & Tri-State Area. Green Shield Certified, licensed & insured. Rodent proofing, termite inspection, 24-hour emergency services.",
  keywords: [
    "pest control",
    "exterminator",
    "NYC",
    "rodent proofing",
    "termite inspection",
    "emergency pest control",
    "Green Shield Certified",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
