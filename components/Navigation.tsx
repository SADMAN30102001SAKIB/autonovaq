"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { navItems } from "@/data/content";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "glass-strong border-b border-border/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <a
              href="#home"
              onClick={e => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-xl lg:text-2xl font-bold gradient-text tracking-tight">
              AutoNovaQ
            </a>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="nav-link relative text-muted-foreground hover:text-foreground hover:scale-105 px-3 py-2 text-xs font-semibold transition-all duration-200 whitespace-nowrap">
                {lang === "bn" ? item.bn : item.en}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 glass rounded-full hover:bg-[var(--surface-overlay)] transition-all"
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
              aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-sm font-medium hover:bg-[var(--surface-overlay)] transition-all"
              title={lang === "bn" ? "Switch to English" : "বাংলায় দেখুন"}>
              <Globe size={16} />
              <span>{lang === "bn" ? "EN" : "বাং"}</span>
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 glass rounded-full"
              aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 glass rounded-full text-xs font-medium">
              <Globe size={14} />
              <span>{lang === "bn" ? "EN" : "বাং"}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none p-1">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}>
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-muted-foreground hover:text-foreground hover:bg-foreground/5 block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200">
                  {lang === "bn" ? item.bn : item.en}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
