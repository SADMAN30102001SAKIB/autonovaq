"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { howItWorksContent } from "@/data/content";

export default function HowItWorksSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 px-4 bg-card/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn"
              ? howItWorksContent.sectionTitle.bn
              : howItWorksContent.sectionTitle.en}
            <span className="gradient-text">
              {lang === "bn"
                ? howItWorksContent.sectionTitleHighlight.bn
                : howItWorksContent.sectionTitleHighlight.en}
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden lg:block"></div>

          {howItWorksContent.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative mb-12 last:mb-0 lg:flex items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}>
              {/* Step number circle */}
              <div className="hidden lg:flex absolute lg:left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {lang === "bn" ? step.step : step.stepEn}
                  </span>
                </div>
              </div>

              {/* Content card */}
              <div
                className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-20" : "lg:pl-20"}`}>
                <div className="glass rounded-xl p-6 hover:bg-[var(--surface-subtle)] transition-all">
                  <div className="flex items-center gap-3 mb-3 lg:hidden">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {lang === "bn" ? step.step : step.stepEn}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">
                      {lang === "bn" ? step.title.bn : step.title.en}
                    </h3>
                  </div>
                  <h3 className="hidden lg:block text-xl font-bold mb-3">
                    {lang === "bn" ? step.title.bn : step.title.en}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {lang === "bn" ? step.description.bn : step.description.en}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
