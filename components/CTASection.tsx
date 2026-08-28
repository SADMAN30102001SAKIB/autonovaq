"use client";

import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ctaContent } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function CTASection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 px-4 relative overflow-hidden">
      {/* Background — static */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div
        aria-hidden
        className="absolute top-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn" ? ctaContent.headline.bn : ctaContent.headline.en}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {lang === "bn"
              ? ctaContent.subheadline.bn
              : ctaContent.subheadline.en}
          </p>

          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5">
            {lang === "bn" ? ctaContent.cta.bn : ctaContent.cta.en}
            <ArrowRight size={22} />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
            {(lang === "bn"
              ? [
                  "মাসিক বা এককালীন অপশন",
                  "সেটআপ ও ট্রেনিং সাপোর্ট",
                  "সম্পূর্ণ কাস্টমাইজেশন",
                ]
              : ["Monthly or One-time", "Setup & Training Support", "Full Customization"]
            ).map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check size={10} className="text-green-400" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
