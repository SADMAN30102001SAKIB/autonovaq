"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pricingContent, perfectFor } from "@/data/content";
import Icon from "@/components/IconMap";

const perfectForColors = [
  { bg: "bg-pink-500/10", text: "text-pink-400" },
  { bg: "bg-blue-500/10", text: "text-blue-400" },
  { bg: "bg-indigo-500/10", text: "text-indigo-400" },
  { bg: "bg-emerald-500/10", text: "text-emerald-400" },
  { bg: "bg-amber-500/10", text: "text-amber-400" },
  { bg: "bg-violet-500/10", text: "text-violet-400" },
];

export default function PricingSection() {
  const { lang, t } = useLanguage();
  const plan = pricingContent.mainPlan;
  const breakdown = pricingContent.costBreakdown;

  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 px-4 bg-card/30 relative overflow-hidden scroll-mt-0">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn"
              ? pricingContent.sectionTitle.bn
              : pricingContent.sectionTitle.en}
            <span className="gradient-text">
              {lang === "bn"
                ? pricingContent.sectionTitleHighlight.bn
                : pricingContent.sectionTitleHighlight.en}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {lang === "bn"
              ? pricingContent.sectionSubtitle.bn
              : pricingContent.sectionSubtitle.en}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Main pricing card */}
          <motion.div
            className="glow-border-active rounded-2xl p-8 lg:p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                <Sparkles size={12} />
                {t("সবচেয়ে জনপ্রিয়", "Most Popular")}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">
              {lang === "bn" ? plan.name.bn : plan.name.en}
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              {lang === "bn" ? plan.description.bn : plan.description.en}
            </p>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl md:text-6xl font-bold gradient-text">
                {plan.price}
              </span>
            </div>
            <p className="text-primary text-sm font-medium mb-8">
              {lang === "bn" ? plan.priceLabel.bn : plan.priceLabel.en}
            </p>

            <div className="space-y-3 mb-8">
              {plan.includes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-green-400" />
                  </div>
                  <span className="text-sm text-foreground/80">
                    {lang === "bn" ? item.bn : item.en}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={e => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/25">
              {lang === "bn" ? plan.cta.bn : plan.cta.en}
              <ArrowRight size={20} />
            </a>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              {lang === "bn" ? plan.note.bn : plan.note.en}
            </p>
          </motion.div>

          {/* Cost breakdown table */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}>
            <div className="glow-border rounded-2xl p-6 lg:p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">
                {lang === "bn" ? breakdown.title.bn : breakdown.title.en}
              </h3>

              <table
                className="w-full text-sm"
                style={{
                  borderCollapse: "separate",
                  borderSpacing: "0 0.5rem",
                }}>
                <thead>
                  <tr>
                    <th className="text-left px-4 pb-3 text-muted-foreground font-medium w-[40%]">
                      {lang === "bn"
                        ? breakdown.headers.method.bn
                        : breakdown.headers.method.en}
                    </th>
                    <th className="text-center px-4 pb-3 text-muted-foreground font-medium w-[20%]">
                      {lang === "bn"
                        ? breakdown.headers.initial.bn
                        : breakdown.headers.initial.en}
                    </th>
                    <th className="text-center px-4 pb-3 text-muted-foreground font-medium w-[20%]">
                      {lang === "bn"
                        ? breakdown.headers.monthly.bn
                        : breakdown.headers.monthly.en}
                    </th>
                    <th className="text-center px-4 pb-3 text-muted-foreground font-medium w-[20%]">
                      {lang === "bn"
                        ? breakdown.headers.yearly.bn
                        : breakdown.headers.yearly.en}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {breakdown.items.map((item, index) => (
                    <tr
                      key={index}
                      className={`${item.highlight ? "highlight-row" : ""}`}>
                      <td
                        className={`px-4 py-4 font-medium ${!item.highlight ? "border-b border-border/30" : ""} ${item.highlight ? "text-primary" : "text-foreground/80"}`}>
                        {lang === "bn" ? item.label.bn : item.label.en}
                      </td>
                      <td
                        className={`px-4 py-4 text-center ${!item.highlight ? "border-b border-border/30" : ""} ${item.highlight ? "text-green-400 font-bold" : "text-red-400"}`}>
                        {item.initial}
                      </td>
                      <td
                        className={`px-4 py-4 text-center ${!item.highlight ? "border-b border-border/30" : ""} ${item.highlight ? "text-green-400 font-bold" : "text-red-400"}`}>
                        {item.monthly}
                      </td>
                      <td
                        className={`px-4 py-4 text-center ${!item.highlight ? "border-b border-border/30" : ""} ${item.highlight ? "text-green-400 font-bold" : "text-red-400"}`}>
                        {item.yearly}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Perfect for section */}
            <div className="glow-border rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold mb-6">
                {lang === "bn" ? perfectFor.title.bn : perfectFor.title.en}
                <span className="gradient-text">
                  {lang === "bn"
                    ? perfectFor.titleHighlight.bn
                    : perfectFor.titleHighlight.en}
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {perfectFor.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}>
                    <div
                      className={`w-8 h-8 rounded-lg ${perfectForColors[index]?.bg || "bg-primary/10"} flex items-center justify-center flex-shrink-0`}>
                      <Icon
                        name={item.icon}
                        size={16}
                        className={
                          perfectForColors[index]?.text || "text-primary"
                        }
                      />
                    </div>
                    <span>{lang === "bn" ? item.bn : item.en}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
