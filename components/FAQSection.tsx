"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { faqContent } from "@/data/content";

export default function FAQSection() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 px-4 bg-card/30 scroll-mt-0">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn"
              ? faqContent.sectionTitle.bn
              : faqContent.sectionTitle.en}
            <span className="gradient-text">
              {lang === "bn"
                ? faqContent.sectionTitleHighlight.bn
                : faqContent.sectionTitleHighlight.en}
            </span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqContent.faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glow-border rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--surface-hover)] transition-colors">
                <span className="font-semibold text-sm md:text-base pr-4">
                  {lang === "bn" ? faq.question.bn : faq.question.en}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden">
                <div className="px-5 pb-5">
                  <div className="h-px bg-border/50 mb-4"></div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {lang === "bn" ? faq.answer.bn : faq.answer.en}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
