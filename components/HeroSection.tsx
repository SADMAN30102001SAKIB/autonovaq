"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { heroContent, statsData } from "@/data/content";
import { useEffect, useRef, useState, useCallback } from "react";

type Phase = "typing" | "pausing" | "deleting" | "waiting";

function TypewriterEffect() {
  const { lang } = useLanguage();
  const [displayText, setDisplayText] = useState("");

  const words =
    lang === "bn"
      ? heroContent.typewriterWords.bn
      : heroContent.typewriterWords.en;

  const phaseRef = useRef<Phase>("typing");
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTickRef = useRef(0);

  // Reset everything when language changes
  useEffect(() => {
    phaseRef.current = "typing";
    wordIndexRef.current = 0;
    charIndexRef.current = 0;
    setDisplayText("");
    lastTickRef.current = 0;
  }, [lang]);

  const getDelay = useCallback((phase: Phase) => {
    switch (phase) {
      case "typing":
        return 90;
      case "pausing":
        return 2000;
      case "deleting":
        return 40;
      case "waiting":
        return 300;
    }
  }, []);

  useEffect(() => {
    const tick = (timestamp: number) => {
      const elapsed = timestamp - lastTickRef.current;
      const delay = getDelay(phaseRef.current);

      if (elapsed >= delay) {
        lastTickRef.current = timestamp;
        const word = words[wordIndexRef.current];

        switch (phaseRef.current) {
          case "typing": {
            charIndexRef.current++;
            const newText = word.slice(0, charIndexRef.current);
            setDisplayText(newText);
            if (charIndexRef.current >= word.length) {
              phaseRef.current = "pausing";
            }
            break;
          }
          case "pausing": {
            phaseRef.current = "deleting";
            break;
          }
          case "deleting": {
            charIndexRef.current--;
            setDisplayText(word.slice(0, charIndexRef.current));
            if (charIndexRef.current <= 0) {
              phaseRef.current = "waiting";
            }
            break;
          }
          case "waiting": {
            wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
            charIndexRef.current = 0;
            phaseRef.current = "typing";
            break;
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [words, getDelay]);

  return (
    <span className="gradient-text font-bold">
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

export default function HeroSection() {
  const { lang, t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-cyan-600/10"></div>

      {/* Floating blobs */}
      <div className="absolute top-20 -left-20 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-[var(--blob-blue)] rounded-full blur-3xl float"></div>
      <div
        className="absolute bottom-20 -right-20 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-[var(--blob-purple)] rounded-full blur-3xl float"
        style={{ animationDelay: "-2s" }}></div>
      <div
        className="absolute top-1/3 left-1/4 w-32 md:w-48 h-32 md:h-48 bg-[var(--blob-cyan)] rounded-full blur-3xl float"
        style={{ animationDelay: "-4s" }}></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center pt-20">
        {/* Badge */}
        <motion.div {...fadeInUp}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            {lang === "bn" ? heroContent.badge.bn : heroContent.badge.en}
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight px-2 leading-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}>
          {lang === "bn" ? heroContent.headline.bn : heroContent.headline.en}
          <span className="gradient-text">
            {lang === "bn"
              ? heroContent.headlineHighlight.bn
              : heroContent.headlineHighlight.en}
          </span>
          {lang === "bn"
            ? heroContent.headlineEnd.bn
            : heroContent.headlineEnd.en}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="text-xl sm:text-2xl md:text-3xl mb-6 min-h-[2.5rem] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <TypewriterEffect />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          {lang === "bn"
            ? heroContent.subheadline.bn
            : heroContent.subheadline.en}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
            {lang === "bn"
              ? heroContent.ctaPrimary.bn
              : heroContent.ctaPrimary.en}
            <ArrowRight size={20} />
          </a>
          <a
            href="#solutions"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector("#solutions")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-xl font-semibold text-lg hover:bg-[var(--surface-overlay)] transition-all">
            <Play size={20} />
            {lang === "bn"
              ? heroContent.ctaSecondary.bn
              : heroContent.ctaSecondary.en}
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}>
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-xl px-4 py-5 text-center bg-[var(--surface-subtle)] border border-[var(--glass-border)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {lang === "bn" ? stat.label.bn : stat.label.en}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
    </section>
  );
}
