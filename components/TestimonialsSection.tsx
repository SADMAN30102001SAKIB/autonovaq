"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { testimonialsContent } from "@/data/content";

export default function TestimonialsSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn"
              ? testimonialsContent.sectionTitle.bn
              : testimonialsContent.sectionTitle.en}
            <span className="gradient-text">
              {lang === "bn"
                ? testimonialsContent.sectionTitleHighlight.bn
                : testimonialsContent.sectionTitleHighlight.en}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glow-border rounded-xl p-6 lg:p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}>
              <Quote
                size={32}
                className="text-primary/20 absolute top-4 right-4"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                &quot;
                {lang === "bn" ? testimonial.text.bn : testimonial.text.en}
                &quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {(lang === "bn"
                      ? testimonial.name
                      : testimonial.nameEn
                    ).charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">
                    {lang === "bn" ? testimonial.name : testimonial.nameEn}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {lang === "bn"
                      ? testimonial.business.bn
                      : testimonial.business.en}
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
