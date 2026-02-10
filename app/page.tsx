import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />

      <HeroSection />

      <ProblemsSection />

      <div className="section-divider"></div>

      <SolutionsSection />

      <div className="section-divider"></div>

      <FeaturesSection />

      <HowItWorksSection />

      <div className="section-divider"></div>

      <ComparisonSection />

      <div className="section-divider"></div>

      <PricingSection />

      <div className="section-divider"></div>

      <TestimonialsSection />

      <CTASection />

      <FAQSection />

      <div className="section-divider"></div>

      <ContactSection />

      <Footer />

      <WhatsAppFloat />
    </main>
  );
}
