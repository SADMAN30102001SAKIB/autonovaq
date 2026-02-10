"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { featuresContent } from "@/data/content";
import Icon from "@/components/IconMap";

const tabColors = [
  { bg: "bg-blue-500/10", text: "text-blue-400" },
  { bg: "bg-orange-500/10", text: "text-orange-400" },
  { bg: "bg-amber-500/10", text: "text-amber-400" },
  { bg: "bg-emerald-500/10", text: "text-emerald-400" },
  { bg: "bg-violet-500/10", text: "text-violet-400" },
  { bg: "bg-cyan-500/10", text: "text-cyan-400" },
];

export default function FeaturesSection() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="features" className="py-20 lg:py-28 px-4 scroll-mt-0">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn"
              ? featuresContent.sectionTitle.bn
              : featuresContent.sectionTitle.en}
            <span className="gradient-text">
              {lang === "bn"
                ? featuresContent.sectionTitleHighlight.bn
                : featuresContent.sectionTitleHighlight.en}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {lang === "bn"
              ? featuresContent.sectionSubtitle.bn
              : featuresContent.sectionSubtitle.en}
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}>
          {featuresContent.categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass hover:bg-[var(--surface-overlay)]"
              }`}>
              <Icon
                name={category.icon}
                size={16}
                className={
                  activeTab === index
                    ? "text-primary-foreground"
                    : tabColors[index]?.text || "text-primary"
                }
              />
              <span className="hidden sm:inline">
                {lang === "bn" ? category.title.bn : category.title.en}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Active features */}
        <motion.div
          key={activeTab}
          className="glow-border rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`w-10 h-10 rounded-xl ${tabColors[activeTab]?.bg || "bg-primary/10"} flex items-center justify-center`}>
              <Icon
                name={featuresContent.categories[activeTab].icon}
                size={22}
                className={tabColors[activeTab]?.text || "text-primary"}
              />
            </div>
            <h3 className="text-2xl font-bold">
              {lang === "bn"
                ? featuresContent.categories[activeTab].title.bn
                : featuresContent.categories[activeTab].title.en}
            </h3>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}>
            {featuresContent.categories[activeTab].features.map(
              (feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--surface-hover)] transition-colors">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed">
                    {lang === "bn" ? feature.bn : feature.en}
                  </span>
                </motion.div>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
