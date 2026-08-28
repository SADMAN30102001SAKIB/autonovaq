"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  CirclePlay,
  Globe2,
  Infinity as InfinityIcon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { heroContent, statsData } from "@/data/content";
import { businessModules, totalModuleFeatures } from "@/data/modules";
import ProductCommandCenter, {
  AutomationCard,
  LiveInsightCard,
} from "@/components/ProductCommandCenter";
import VideoModal from "@/components/VideoModal";

const SWAP_MS = 2600;
const featureFloor = Math.floor(totalModuleFeatures / 50) * 50;

function RotatingCapability() {
  const { lang } = useLanguage();
  const words = heroContent.typewriterWords[lang];
  const [index, setIndex] = useState(0);

  useEffect(() => setIndex(0), [lang]);

  useEffect(() => {
    if (words.length < 2) return;
    const id = window.setInterval(
      () => setIndex(current => (current + 1) % words.length),
      SWAP_MS,
    );
    return () => window.clearInterval(id);
  }, [words.length]);

  return (
    <span key={`${lang}-${index}`} className="word-swap inline-flex items-center gap-2">
      <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,.8)]" />
      {words[index]}
    </span>
  );
}

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);

  const scrollTo = (selector: string) =>
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative isolate min-h-[100dvh] overflow-hidden px-4 pb-16 pt-28 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="hero-aurora absolute inset-0 -z-20" aria-hidden />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.14] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" aria-hidden />
      <div className="absolute left-1/2 top-12 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[110px]" aria-hidden />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 xl:grid-cols-[.92fr_1.28fr] xl:gap-10">
          <div className="relative z-10 max-w-2xl xl:pb-8">
            <div className="hero-in inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.045] px-3.5 py-2 text-[11px] font-bold tracking-wide text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-xl sm:text-xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {t("আপনার ব্যবসার সম্পূর্ণ অটোমেশন সল্যুশন", "The complete automation system for your business")}
              <span className="h-3 w-px bg-white/10" />
              <Sparkles size={12} className="text-violet-300" />
            </div>

            <h1
              className="hero-in mt-7 text-[2.8rem] font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.7rem] xl:text-[4.25rem] 2xl:text-[4.8rem]"
              style={{ animationDelay: "80ms" }}>
              {t("পুরো ব্যবসা।", "Every moving part.")}
              <span className="mt-2 block bg-gradient-to-r from-[#75b7ff] via-[#8d8bff] to-[#c38cff] bg-clip-text pb-1 text-transparent">
                {t("এক বুদ্ধিমান সিস্টেমে।", "One intelligent system.")}
              </span>
            </h1>

            <p
              className="hero-in mt-7 max-w-xl text-base font-medium leading-7 text-slate-400 sm:text-lg sm:leading-8"
              style={{ animationDelay: "150ms" }}>
              {t(
                "স্টোরফ্রন্ট, CRM, অর্ডার, স্টক, কুরিয়ার, হিসাব, HRM ও অ্যানালিটিক্স—একটি সুন্দর ক্লাউড প্ল্যাটফর্মে, একটি ডেটাবেজে।",
                "Storefront, CRM, orders, inventory, couriers, accounting, HRM and analytics—beautifully connected in one cloud platform and one source of truth.",
              )}
            </p>

            <div
              className="hero-in mt-5 flex h-7 items-center text-xs font-bold text-cyan-200/90 sm:text-sm"
              style={{ animationDelay: "210ms" }}>
              <RotatingCapability />
            </div>

            <div
              className="hero-in mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "270ms" }}>
              <a
                href="#contact"
                onClick={event => {
                  event.preventDefault();
                  scrollTo("#contact");
                }}
                className="premium-cta group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-extrabold text-white shadow-[0_16px_40px_rgba(70,91,255,.28)]">
                {t("ফ্রি ডেমো শুরু করুন", "Start your free demo")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <button
                onClick={() => setDemoOpen(true)}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.035] px-6 text-sm font-bold text-slate-200 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.065]">
                <CirclePlay size={17} className="text-violet-300 transition-transform group-hover:scale-110" />
                {t("২ মিনিটে দেখুন", "See it in 2 minutes")}
              </button>
            </div>

            <div
              className="hero-in mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-slate-500 sm:text-xs"
              style={{ animationDelay: "330ms" }}>
              {[
                t("৭ দিনের ফ্রি ট্রায়াল", "7-day free trial"),
                t("কোনো সার্ভার বিল নেই", "No server bill"),
                t("বাংলা সাপোর্ট", "Bangla support"),
              ].map(item => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check size={12} strokeWidth={3} className="text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-in relative mx-auto w-full max-w-[790px] xl:-mr-20 2xl:-mr-28" style={{ animationDelay: "180ms" }}>
            <div className="absolute -inset-8 -z-10 rounded-[44px] bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-violet-500/15 blur-3xl" />
            <ProductCommandCenter view="overview" lang={lang} className="hero-product-frame" />

            <div className="absolute -bottom-7 -left-3 hidden sm:block lg:-left-8">
              <LiveInsightCard lang={lang} />
            </div>
            <div className="absolute -right-3 top-20 hidden sm:block lg:-right-8">
              <AutomationCard lang={lang} />
            </div>
          </div>
        </div>

        <div
          className="hero-in mt-20 grid overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] shadow-[inset_0_1px_0_rgba(255,255,255,.035)] sm:grid-cols-2 lg:mt-28 lg:grid-cols-[1.1fr_1fr_1fr_1fr]"
          style={{ animationDelay: "430ms" }}>
          <div className="flex items-center gap-3 border-b border-white/[0.06] p-4 sm:border-r lg:border-b-0 lg:p-5">
            <span className="flex size-9 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.07] text-blue-300"><InfinityIcon size={18} /></span>
            <div><strong className="block text-sm text-white">{businessModules.length} {t("মডিউল", "modules")}</strong><span className="text-[10px] text-slate-500">{featureFloor}+ {t("সমন্বিত ফিচার", "connected features")}</span></div>
          </div>
          {statsData.slice(0, 3).map((stat, index) => {
            const icons = [Globe2, ShieldCheck, Sparkles];
            const StatIcon = icons[index];
            return (
              <div key={stat.value} className="flex items-center gap-3 border-b border-white/[0.06] p-4 sm:odd:border-r lg:border-b-0 lg:border-l lg:p-5">
                <StatIcon size={17} className={index === 1 ? "text-emerald-400" : index === 2 ? "text-violet-300" : "text-cyan-300"} />
                <div><strong className="block text-sm text-white">{stat.value}</strong><span className="text-[10px] text-slate-500">{stat.label[lang]}</span></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" aria-hidden />

      <VideoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        videoId="xYkgn79hEKk"
      />
    </section>
  );
}
