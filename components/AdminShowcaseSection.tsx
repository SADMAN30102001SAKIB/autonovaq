"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  CloudCog,
  DatabaseBackup,
  Radio,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

const signals = [
  { icon: Boxes, value: "12", bn: "কোর মডিউল", en: "core modules", tone: "text-blue-300 bg-blue-400/10" },
  { icon: Bot, value: "24/7", bn: "AI লাইভ রিপ্লাই", en: "AI live reply", tone: "text-violet-300 bg-violet-400/10" },
  { icon: DatabaseBackup, value: "PITR", bn: "সেকেন্ড-লেভেল রিস্টোর", en: "second-level restore", tone: "text-cyan-300 bg-cyan-400/10" },
  { icon: CloudCog, value: "EDGE", bn: "অটো স্কেলিং", en: "auto scaling", tone: "text-emerald-300 bg-emerald-400/10" },
];

export default function AdminShowcaseSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="command-center" className="relative isolate overflow-hidden bg-[#030711] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_38%,rgba(59,130,246,.13),transparent_72%)]" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.1] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      <div className="mx-auto max-w-[1480px]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
            <Radio size={12} /> {t("লাইভ বিজনেস কমান্ড সেন্টার", "Live business command center")}
          </span>
          <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
            {t("শুধু একটি ড্যাশবোর্ড নয়।", "Not another dashboard.")}
            <span className="mt-2 block bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
              {t("আপনার ব্যবসার সম্পূর্ণ কন্ট্রোল রুম।", "Your entire business control room.")}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-400 sm:text-lg">
            {t(
              "রেভিনিউ থেকে পেরোল, স্টক থেকে বিজ্ঞাপন, AI রিপ্লাই থেকে সার্ভার হেলথ—প্রতিটি গুরুত্বপূর্ণ সিগন্যাল একই স্ক্রিনে দেখুন এবং কাজ করুন।",
              "Revenue to payroll, inventory to ads, AI replies to infrastructure health—see every important signal and act from one unified screen.",
            )}
          </p>
        </Reveal>

        <Reveal index={1} className="mt-12 lg:mt-16">
          <div className="relative rounded-[28px] border border-white/[0.1] bg-[#07101e] p-1.5 shadow-[0_45px_140px_rgba(0,0,0,.65)] sm:p-2.5 lg:rounded-[38px] lg:p-3">
            <div className="absolute inset-x-[12%] -top-px h-px bg-gradient-to-r from-transparent via-blue-400/80 to-transparent" />
            <div className="overflow-hidden rounded-[22px] border border-white/[0.065] bg-[#030814] lg:rounded-[29px]">
              <a href="/assets/autonovaq-admin-command-center.png" target="_blank" rel="noreferrer" aria-label={t("পূর্ণ আকারে অ্যাডমিন প্যানেল দেখুন", "Open the admin panel at full size")}>
                <Image
                  src="/assets/autonovaq-admin-command-center.png"
                  alt={t(
                    "AutoNovaQ সম্পূর্ণ অ্যাডমিন প্যানেল—ই-কমার্স, CRM, HRM, পেরোল, ERP, অ্যাকাউন্টিং, বিজ্ঞাপন, AI, কুরিয়ার এবং ক্লাউড হেলথ",
                    "AutoNovaQ complete admin panel with ecommerce, CRM, HRM, payroll, ERP, accounting, ads, AI, couriers and cloud health",
                  )}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 768px) 100vw, 94vw"
                  className="h-auto w-full transition duration-500 hover:scale-[1.006]"
                />
              </a>
            </div>
            <div className="pointer-events-none absolute inset-x-8 -bottom-7 h-12 rounded-full bg-blue-500/15 blur-2xl" />
          </div>
          <p className="mt-3 text-center text-[9px] font-bold text-slate-600 sm:text-[10px]">{t("মোবাইলে বিস্তারিত দেখতে ছবিতে ট্যাপ করুন", "Tap the dashboard to inspect every detail")}</p>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <Reveal key={signal.en} index={index} className="rounded-2xl border border-white/[0.075] bg-white/[0.025] p-4 backdrop-blur-xl sm:flex sm:items-center sm:gap-3 lg:p-5">
                <span className={`flex size-9 items-center justify-center rounded-xl ${signal.tone}`}><Icon size={17} /></span>
                <div className="mt-3 min-w-0 sm:mt-0">
                  <strong className="block text-sm font-black text-white sm:text-base">{signal.value}</strong>
                  <span className="block truncate text-[10px] font-semibold text-slate-500 sm:text-xs">{lang === "bn" ? signal.bn : signal.en}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal index={2} className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-5 text-center sm:flex-row sm:text-left lg:px-7">
          <div className="flex items-center gap-3">
            <span className="hidden size-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 sm:flex"><ShieldCheck size={18} /></span>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-400 nova-live-dot" /> {t("এক স্ক্রিনে রিয়েল-টাইম সত্য", "One real-time source of truth")}</div>
              <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">{t("আলাদা সফটওয়্যার, আলাদা লগইন এবং অসম্পূর্ণ রিপোর্টের দিন শেষ।", "No more disconnected tools, duplicate logins or incomplete reports.")}</p>
            </div>
          </div>
          <a href="#platform" className="group inline-flex items-center gap-2 text-xs font-black text-white">{t("সম্পূর্ণ ম্যাপ দেখুন", "Explore the full map")} <ArrowUpRight size={14} className="text-blue-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        </Reveal>
      </div>
    </section>
  );
}
