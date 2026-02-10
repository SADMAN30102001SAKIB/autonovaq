"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { problemsContent } from "@/data/content";
import Icon from "@/components/IconMap";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="problems" className="py-20 lg:py-28 px-4 relative scroll-mt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/3 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
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
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemsContent.problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glow-border rounded-xl p-6 hover:bg-[var(--surface-hover)] transition-all group">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
