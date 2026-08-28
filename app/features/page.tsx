import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ContactFloat from "@/components/ContactFloat";

export const metadata: Metadata = {
  title: "Complete Feature Explorer | AutoNovaQ",
  description: "Explore every AutoNovaQ ecommerce, CRM, HRM, payroll, ERP, accounting, AI, cloud and admin-panel feature.",
};

export default function FeaturesPage() {
  return (
    <main className="relative overflow-x-hidden pt-10">
      <Navigation />
      <FeaturesSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <ContactFloat />
    </main>
  );
}
