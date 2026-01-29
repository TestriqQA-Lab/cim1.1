import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProviderClient from "@/components/ThemeProviderClient"; // client wrapper
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "CIM - Digital Solutions",
  description:
    "Web Design, Mobile App Development, UI/UX Branding, and Digital Marketing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>

      {/* Put ThemeProviderClient inside the <body> */}
      <body className={`${inter.className} antialiased bg-white dark:bg-black text-gray-900 dark:text-white`} suppressHydrationWarning>
        <ThemeProviderClient>
          <Navbar />
          {children}
          <Footer />
        </ThemeProviderClient>
        <GoogleAnalytics gaId="G-X378ZPPV30" />
      </body>
    </html>
  );
}
