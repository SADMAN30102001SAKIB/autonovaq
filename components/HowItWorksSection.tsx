"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { howItWorksContent } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function HowItWorksSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 px-4 bg-card/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
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
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="process-rail absolute bottom-0 top-0 hidden w-px overflow-hidden bg-gradient-to-b from-primary/50 via-primary/20 to-transparent lg:left-1/2 lg:block"></div>

          {howItWorksContent.steps.map((step, index) => (
            <Reveal
              key={index}
              index={index}
              className={`relative mb-12 last:mb-0 lg:flex items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}>
              {/* Step number circle */}
              <div className="hidden lg:flex absolute lg:left-1/2 -translate-x-1/2 z-10">
                <div className="process-step-dot flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/20" style={{ animationDelay: `${index * 0.7}s` }}>
                  <span className="text-xl font-bold text-primary">
                    {lang === "bn" ? step.step : step.stepEn}
                  </span>
                </div>
              </div>

              {/* Content card */}
              <div
                className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-20" : "lg:pl-20"}`}>
                <div className="process-card glass rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-subtle)] hover:shadow-[0_18px_50px_rgba(59,130,246,.1)]">
                  <div className="flex items-center gap-3 mb-3 lg:hidden">
                    <div className="process-step-dot flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-primary/20" style={{ animationDelay: `${index * 0.7}s` }}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
