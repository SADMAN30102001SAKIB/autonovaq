"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { solutionsContent } from "@/data/content";
import Icon from "@/components/IconMap";

const productColors = [
  { bg: "bg-blue-500/10", text: "text-blue-400" },
  { bg: "bg-purple-500/10", text: "text-purple-400" },
];

export default function SolutionsSection() {
  const { lang } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="solutions"
      className="py-20 lg:py-28 px-4 bg-card/30 relative scroll-mt-0">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {lang === "bn"
                ? solutionsContent.sectionTitle.bn
                : solutionsContent.sectionTitle.en}
              <span className="gradient-text">
                {lang === "bn"
                  ? solutionsContent.sectionTitleHighlight.bn
                  : solutionsContent.sectionTitleHighlight.en}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {lang === "bn"
                ? solutionsContent.sectionSubtitle.bn
                : solutionsContent.sectionSubtitle.en}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutionsContent.products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="glow-border rounded-2xl p-8 hover:bg-[var(--surface-hover)] transition-all group relative overflow-hidden"
                whileHover={{ y: -5 }}>
                {/* Subtle gradient overlay */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 ${index === 0 ? "bg-blue-500/5" : "bg-purple-500/5"} rounded-full blur-3xl`}></div>

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl ${productColors[index]?.bg || "bg-blue-500/10"} flex items-center justify-center mb-4`}>
                    <Icon
                      name={product.icon}
                      size={28}
                      className={productColors[index]?.text || "text-blue-400"}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {lang === "bn" ? product.name.bn : product.name.en}
                  </h3>
                  <p className="text-sm font-semibold mb-4 gradient-text">
                    {lang === "bn" ? product.tagline.bn : product.tagline.en}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {lang === "bn"
                      ? product.description.bn
                      : product.description.en}
                  </p>

                  <div className="space-y-3">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="text-green-400 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-foreground/80">
                          {lang === "bn" ? feature.bn : feature.en}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#features"
                    onClick={e => {
                      e.preventDefault();
                      document
                        .querySelector("#features")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 mt-6 font-semibold text-sm transition-colors group/link gradient-text hover:opacity-80">
                    {lang === "bn" ? "বিস্তারিত দেখুন" : "View Details"}
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
