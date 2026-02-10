import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoNovaQ - আপনার ব্যবসার সম্পূর্ণ অটোমেশন সল্যুশন",
  description:
    "দুইটি শক্তিশালী ওয়েবসাইট দিয়ে আপনার পুরো ই-কমার্স ব্যবসা অটোমেটিক করুন। E-commerce Website + Inventory Management - একবারের পেমেন্টে।",
  keywords: [
    "AutoNovaQ",
    "ই-কমার্স",
    "ইনভেন্টরি ম্যানেজমেন্ট",
    "বাংলাদেশ",
    "ব্যবসা অটোমেশন",
    "ecommerce bangladesh",
    "inventory management",
  ],
  authors: [{ name: "AutoNovaQ" }],
  creator: "AutoNovaQ",
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://autonovaq.com",
    title: "AutoNovaQ - আপনার ব্যবসার সম্পূর্ণ অটোমেশন সল্যুশন",
    description:
      "দুইটি শক্তিশালী ওয়েবসাইট দিয়ে আপনার পুরো ই-কমার্স ব্যবসা অটোমেটিক করুন।",
    siteName: "AutoNovaQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoNovaQ - Complete Business Automation",
    description:
      "Two powerful websites to automate your entire ecommerce business. One-time payment.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className="dark notranslate"
      translate="no"
      suppressHydrationWarning={true}>
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}>
        <LanguageProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-background text-foreground">
              {children}
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
