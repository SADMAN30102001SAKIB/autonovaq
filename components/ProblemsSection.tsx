"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { problemsContent } from "@/data/content";
import Icon from "@/components/IconMap";
import Reveal from "@/components/Reveal";

const problemColors = [
  { bg: "bg-red-500/10", text: "text-red-400" },
  { bg: "bg-orange-500/10", text: "text-orange-400" },
  { bg: "bg-amber-500/10", text: "text-amber-400" },
  { bg: "bg-rose-500/10", text: "text-rose-400" },
  { bg: "bg-red-500/10", text: "text-red-400" },
  { bg: "bg-orange-500/10", text: "text-orange-400" },
];

export default function ProblemsSection() {
  const { lang } = useLanguage();

  return (
    <section id="problems" className="py-20 lg:py-28 px-4 relative scroll-mt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/3 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn"
              ? problemsContent.sectionTitle.bn
              : problemsContent.sectionTitle.en}
            <span className="gradient-text-gold">
              {lang === "bn"
                ? problemsContent.sectionTitleHighlight.bn
                : problemsContent.sectionTitleHighlight.en}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {lang === "bn"
              ? problemsContent.sectionSubtitle.bn
              : problemsContent.sectionSubtitle.en}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemsContent.problems.map((problem, index) => (
            <Reveal
              key={index}
              index={index}
              className="glow-border rounded-xl p-6 hover:bg-[var(--surface-hover)] transition-colors group">
              <div
                className={`w-12 h-12 rounded-xl ${problemColors[index]?.bg || "bg-red-500/10"} flex items-center justify-center mb-4`}>
                <Icon
                  name={problem.icon}
                  size={24}
                  className={problemColors[index]?.text || "text-red-400"}
                />
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                {lang === "bn" ? problem.title.bn : problem.title.en}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {lang === "bn"
                  ? problem.description.bn
                  : problem.description.en}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
