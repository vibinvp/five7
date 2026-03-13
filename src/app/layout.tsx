import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Five7 — Premium Men's Fashion | Kerala & Dubai",
  description:
    "Five7 is a premium men's clothing brand from Kerala, India. Explore our fashion brands, retail stores, and export operations to Dubai & GCC markets.",
  keywords: [
    "mens clothing kerala",
    "menswear kerala brand",
    "kerala fashion brand",
    "mens clothing export dubai",
    "Five7",
    "FS Club",
    "FS Polo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <div className="pt-[70px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
