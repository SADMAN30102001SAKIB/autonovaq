import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "AutoNovaQ - আপনার ব্যবসার সম্পূর্ণ অটোমেশন সল্যুশন",
  description:
    "ই-কমার্স, CRM, HRM, Payroll, ERP, Accounting, Inventory, Courier, Ads ও AI—আপনার পুরো ব্যবসা এক প্ল্যাটফর্মে অটোমেট করুন।",
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
      "ই-কমার্স থেকে CRM, HRM, Payroll, ERP ও Accounting—পুরো ব্যবসা এক প্ল্যাটফর্মে চালান।",
    siteName: "AutoNovaQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoNovaQ - Complete Business Automation",
    description:
      "Run ecommerce, CRM, HRM, payroll, ERP, accounting, inventory, couriers, ads and AI from one platform.",
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
        {/* Scroll reveals start at opacity:0 and are switched on by an
            IntersectionObserver. Without JS there is no observer, so make
            every revealed block visible up front. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
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
