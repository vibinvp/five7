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
  title: "Five7 | Premium Men's Fashion",
  description:
    "Experience premium men's fashion with Five7. Discover our high-quality collections and retail locations across Kerala and beyond.",
  keywords: [
    "mens clothing kerala",
    "menswear kerala brand",
    "kerala fashion brand",
    "mens clothing export dubai",
    "Five7",
    "FS Club",
    "FS Polo",
  ],
  icons: {
    icon: "/favicon.png",
  },
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
