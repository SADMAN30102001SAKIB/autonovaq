"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Globe,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { navItems } from "@/data/content";

const desktopLinks = navItems.filter(item =>
  ["#solutions", "#platform", "#modules", "#features", "#pricing"].includes(
    item.href,
  ),
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 32;
        setScrolled(current => (current === next ? current : next));
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const destinationFor = (href: string) => {
    return pathname === "/" ? href : `/${href}`;
  };

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== "/") {
      setIsOpen(false);
      return;
    }
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled || isOpen
            ? "border-white/[0.09] bg-[#060b16]/85 shadow-[0_18px_60px_rgba(0,0,0,.38)] backdrop-blur-2xl"
            : "border-white/[0.065] bg-[#060b16]/45 backdrop-blur-xl"
        }`}>
        <div className="flex h-[60px] items-center justify-between px-3 sm:px-4 lg:px-5">
          <a
            href={pathname === "/" ? "#home" : "/"}
            onClick={event => {
              if (pathname === "/") {
                event.preventDefault();
                scrollToSection("#home");
              }
            }}
            className="group flex items-center gap-2.5">
            <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 text-white shadow-[0_8px_28px_rgba(79,70,229,.35)]">
              <span className="absolute inset-px rounded-[11px] bg-gradient-to-br from-white/20 to-transparent" />
              <Image src="/assets/autonovaq-mark.png" alt="" width={25} height={25} className="relative h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110" />
            </span>
            <span>
              <span className="block text-base font-black tracking-[-0.035em] text-white sm:text-lg">
                AutoNova<span className="text-blue-400">Q</span>
              </span>
              <span className="hidden text-[7px] font-bold uppercase tracking-[0.22em] text-slate-600 sm:block">
                Business operating system
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {desktopLinks.map(item => (
              <a
                key={item.href}
                href={destinationFor(item.href)}
                onClick={event => handleNavigation(event, item.href)}
                className="rounded-lg px-3 py-2 text-[11px] font-bold text-slate-400 transition hover:bg-white/[0.045] hover:text-white xl:px-4 xl:text-xs">
                {item[lang]}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={toggleTheme}
              className="flex size-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-slate-400 transition hover:border-white/[0.14] hover:text-white"
              aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex h-9 items-center gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 text-[11px] font-bold text-slate-300 transition hover:border-white/[0.14] hover:text-white">
              <Globe size={14} />
              {lang === "bn" ? "EN" : "বাং"}
            </button>
            <a
              href={pathname === "/" ? "#contact" : "/#contact"}
              onClick={event => {
                if (pathname === "/") {
                  event.preventDefault();
                  scrollToSection("#contact");
                }
              }}
              className="premium-cta group flex h-9 items-center gap-2 rounded-xl px-4 text-[11px] font-extrabold text-white">
              {t("ফ্রি ডেমো", "Book a demo")}
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="flex items-center gap-1.5 lg:hidden">
            <button onClick={toggleLanguage} className="flex size-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-slate-300" aria-label="Toggle language">
              <Globe size={15} />
            </button>
            <button
              onClick={() => setIsOpen(open => !open)}
              className="flex size-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-white"
              aria-expanded={isOpen}
              aria-label="Toggle menu">
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="panel-enter border-t border-white/[0.06] px-3 pb-3 pt-2 lg:hidden">
            <div className="grid gap-1 sm:grid-cols-2">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={destinationFor(item.href)}
                  onClick={event => handleNavigation(event, item.href)}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-bold text-slate-400 transition hover:bg-white/[0.045] hover:text-white">
                  {item[lang]}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] py-2.5 text-xs font-bold text-slate-300">
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              {theme === "dark" ? t("লাইট মোড", "Light mode") : t("ডার্ক মোড", "Dark mode")}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
