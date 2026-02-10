"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ctaContent } from "@/data/content";

export default function CTASection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl float"></div>
      <div
        className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float"
        style={{ animationDelay: "-3s" }}></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}>
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
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30">
            {lang === "bn" ? ctaContent.cta.bn : ctaContent.cta.en}
            <ArrowRight size={22} />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
            {(lang === "bn"
              ? [
                  "কোনো মাসিক ফি নেই",
                  "৫ দিন ফ্রি সাপোর্ট",
                  "সম্পূর্ণ কাস্টমাইজেশন",
                ]
              : ["No Monthly Fees", "5 Days Free Support", "Full Customization"]
            ).map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check size={10} className="text-green-400" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
