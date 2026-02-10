"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { comparisonContent } from "@/data/content";

export default function ComparisonSection() {
  const { lang } = useLanguage();

  return (
    <section id="comparison" className="py-20 lg:py-28 px-4 scroll-mt-0">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn"
              ? comparisonContent.sectionTitle.bn
              : comparisonContent.sectionTitle.en}
            <span className="gradient-text">
              {lang === "bn"
                ? comparisonContent.sectionTitleHighlight.bn
                : comparisonContent.sectionTitleHighlight.en}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {lang === "bn"
              ? comparisonContent.sectionSubtitle.bn
              : comparisonContent.sectionSubtitle.en}
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}>
          <table className="w-full min-w-[700px]">
            <thead>
              <tr>
                <th className="text-left p-4 text-muted-foreground font-medium text-sm">
                  {lang === "bn"
                    ? comparisonContent.headers.feature.bn
                    : comparisonContent.headers.feature.en}
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <X size={20} className="text-red-600 dark:text-red-400" />
                    <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
                      {lang === "bn"
                        ? comparisonContent.headers.traditional.bn
                        : comparisonContent.headers.traditional.en}
                    </span>
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <Minus
                      size={20}
                      className="text-amber-600 dark:text-amber-400"
                    />
                    <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm">
                      {lang === "bn"
                        ? comparisonContent.headers.shopify.bn
                        : comparisonContent.headers.shopify.en}
                    </span>
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <Check
                      size={20}
                      className="text-green-600 dark:text-green-400"
                    />
                    <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                      {lang === "bn"
                        ? comparisonContent.headers.autonovaq.bn
                        : comparisonContent.headers.autonovaq.en}
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonContent.rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-border/50 hover:bg-[var(--surface-hover)] transition-colors">
                  <td className="p-4 font-medium text-sm text-foreground/90">
                    {lang === "bn" ? row.feature.bn : row.feature.en}
                  </td>
                  <td className="p-4 text-center text-sm text-red-600 dark:text-red-400">
                    {lang === "bn" ? row.traditional.bn : row.traditional.en}
                  </td>
                  <td className="p-4 text-center text-sm text-amber-600 dark:text-amber-400">
                    {lang === "bn" ? row.shopify.bn : row.shopify.en}
                  </td>
                  <td className="p-4 text-center text-sm font-semibold text-green-600 dark:text-green-400">
                    {lang === "bn" ? row.autonovaq.bn : row.autonovaq.en}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
