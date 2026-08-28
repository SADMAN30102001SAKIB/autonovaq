"use client";

import Image from "next/image";
import {
  BarChart3,
  Bot,
  Boxes,
  Calculator,
  CloudCog,
  Contact,
  Facebook,
  Fingerprint,
  MessageCircleMore,
  ReceiptText,
  ShoppingBag,
  Sparkles,
  Truck,
  UsersRound,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

type Visual = "bars" | "ring" | "pulse";

type PlatformProduct = {
  icon: LucideIcon;
  title: { bn: string; en: string };
  sub: { bn: string; en: string };
  metric: string;
  visual: Visual;
  tone: string;
};

const platformProducts: PlatformProduct[] = [
  { icon: ShoppingBag, title: { bn: "প্রিমিয়াম ই-কমার্স", en: "Premium Ecommerce" }, sub: { bn: "স্টোর, SEO, চেকআউট", en: "Store, SEO, checkout" }, metric: "4.82%", visual: "bars", tone: "#60a5fa" },
  { icon: Boxes, title: { bn: "ইনভেন্টরি ও ERP", en: "Inventory & ERP" }, sub: { bn: "ভ্যারিয়েন্ট, স্টক, সাপ্লাই", en: "Variants, stock, supply" }, metric: "98.7%", visual: "ring", tone: "#818cf8" },
  { icon: Contact, title: { bn: "CRM", en: "CRM" }, sub: { bn: "লিড, পাইপলাইন, রিটেনশন", en: "Leads, pipeline, retention" }, metric: "1.8K", visual: "pulse", tone: "#f472b6" },
  { icon: UsersRound, title: { bn: "HRM ও পেরোল", en: "HRM & Payroll" }, sub: { bn: "স্টাফ, উপস্থিতি, বেতন", en: "People, attendance, pay" }, metric: "128", visual: "bars", tone: "#a78bfa" },
  { icon: Calculator, title: { bn: "অ্যাকাউন্টিং", en: "Accounting" }, sub: { bn: "লেজার, P&L, ক্যাশফ্লো", en: "Ledger, P&L, cashflow" }, metric: "৳1.24M", visual: "bars", tone: "#34d399" },
  { icon: Truck, title: { bn: "কুরিয়ার অটোমেশন", en: "Courier Automation" }, sub: { bn: "বুকিং, ট্র্যাকিং, COD", en: "Booking, tracking, COD" }, metric: "96.3%", visual: "ring", tone: "#22d3ee" },
  { icon: Facebook, title: { bn: "ফেসবুক অ্যাড ইন্টেলিজেন্স", en: "Facebook Ad Intelligence" }, sub: { bn: "ROAS ও অটো পজ", en: "ROAS and auto-pause" }, metric: "5.62×", visual: "bars", tone: "#3b82f6" },
  { icon: MessageCircleMore, title: { bn: "শপ AI লাইভ রিপ্লাই", en: "Shop AI Live Reply" }, sub: { bn: "Messenger, inbox, sales", en: "Messenger, inbox, sales" }, metric: "24/7", visual: "pulse", tone: "#f59e0b" },
  { icon: BarChart3, title: { bn: "বিজনেস অ্যানালিটিক্স", en: "Business Analytics" }, sub: { bn: "রেভিনিউ, প্রফিট, ফোরকাস্ট", en: "Revenue, profit, forecast" }, metric: "+24.3%", visual: "bars", tone: "#8b5cf6" },
  { icon: Bot, title: { bn: "AI ম্যানেজমেন্ট", en: "AI Management" }, sub: { bn: "কপাইলট, অ্যাকশন, অ্যালার্ট", en: "Copilot, actions, alerts" }, metric: "86%", visual: "ring", tone: "#c084fc" },
  { icon: CloudCog, title: { bn: "সার্ভারলেস এজ ক্লাউড", en: "Serverless Edge Cloud" }, sub: { bn: "অটো স্কেল ও CDN", en: "Auto-scale and CDN" }, metric: "36ms", visual: "pulse", tone: "#2dd4bf" },
  { icon: Fingerprint, title: { bn: "সিকিউরিটি ও গভর্নেন্স", en: "Security & Governance" }, sub: { bn: "রোল, অডিট, IP ব্লক", en: "Roles, audit, IP block" }, metric: "99.9%", visual: "ring", tone: "#4ade80" },
];

function MiniVisual({ type, tone, metric }: { type: Visual; tone: string; metric: string }) {
  if (type === "ring") {
    return (
      <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full" style={{ background: `conic-gradient(${tone} 0 78%, rgba(255,255,255,.055) 78% 100%)` }}>
        <div className="absolute inset-[4px] rounded-full bg-[#09101d]" />
        <span className="relative text-[8px] font-black text-white">{metric}</span>
      </div>
    );
  }

  if (type === "pulse") {
    return (
      <div className="relative flex h-11 w-14 shrink-0 items-center justify-center">
        <span className="absolute size-8 rounded-full opacity-15" style={{ backgroundColor: tone }} />
        <span className="absolute size-5 rounded-full opacity-25 nova-signal-pulse" style={{ backgroundColor: tone }} />
        <span className="relative size-2 rounded-full" style={{ backgroundColor: tone, boxShadow: `0 0 14px ${tone}` }} />
        <span className="absolute bottom-0 text-[7px] font-black text-slate-400">{metric}</span>
      </div>
    );
  }

  return (
    <div className="flex h-10 w-14 shrink-0 items-end gap-1">
      {[42, 66, 52, 86, 72].map((height, index) => (
        <span key={index} className="nova-data-bar flex-1 rounded-t-[2px]" style={{ height: `${height}%`, backgroundColor: tone, opacity: 0.35 + index * 0.12, animationDelay: `${index * 100}ms` }} />
      ))}
    </div>
  );
}

function ProductCard({ product, lang }: { product: PlatformProduct; lang: "bn" | "en" }) {
  const Icon = product.icon;
  return (
    <article className="platform-node group flex min-h-[96px] items-center gap-3 rounded-2xl border border-white/[0.075] bg-[#08101d]/95 p-3.5 shadow-[0_16px_44px_rgba(0,0,0,.24)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/[0.14]">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border" style={{ color: product.tone, borderColor: `${product.tone}30`, backgroundColor: `${product.tone}13` }}><Icon size={18} /></span>
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[11px] font-black text-slate-200 xl:text-xs">{product.title[lang]}</h3>
        <p className="mt-1 truncate text-[9px] font-medium text-slate-600 xl:text-[10px]">{product.sub[lang]}</p>
      </div>
      <MiniVisual type={product.visual} tone={product.tone} metric={product.metric} />
    </article>
  );
}

const flow = [
  { icon: MessageCircleMore, bn: "মেসেজ", en: "Message" },
  { icon: Bot, bn: "AI রিপ্লাই", en: "AI reply" },
  { icon: Contact, bn: "CRM লিড", en: "CRM lead" },
  { icon: ReceiptText, bn: "অর্ডার", en: "Order" },
  { icon: Boxes, bn: "স্টক", en: "Stock" },
  { icon: Truck, bn: "কুরিয়ার", en: "Courier" },
  { icon: WalletCards, bn: "হিসাব", en: "Accounts" },
  { icon: BarChart3, bn: "ইনসাইট", en: "Insight" },
];

export default function PlatformEcosystemSection() {
  const { lang, t } = useLanguage();
  const left = platformProducts.slice(0, 6);
  const right = platformProducts.slice(6);

  return (
    <section id="platform" className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-[#050914]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_42%_at_50%_48%,rgba(99,102,241,.14),transparent_72%)]" />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-violet-300"><Sparkles size={12} /> {t("এক প্ল্যাটফর্ম, সব সফটওয়্যার", "Every system, one platform")}</span>
          <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
            {t("বারোটি আলাদা টুল নয়।", "Not twelve disconnected tools.")}
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">{t("একটি জীবন্ত বিজনেস সিস্টেম।", "One living business system.")}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-400 sm:text-lg">{t("CRM, HRM, পেরোল, ইনভেন্টরি, ই-কমার্স, অ্যাকাউন্টিং, বিজ্ঞাপন, AI, কুরিয়ার ও ক্লাউড—প্রতিটি মডিউল একই ডেটাবেজে কথা বলে।", "CRM, HRM, payroll, inventory, ecommerce, accounting, ads, AI, couriers and cloud infrastructure—all speaking through one shared data layer.")}</p>
        </Reveal>

        <Reveal index={1} className="relative mt-14 hidden min-h-[720px] lg:block">
          <svg viewBox="0 0 1200 720" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
            <defs>
              <linearGradient id="ecosystemLine" x1="0" x2="1"><stop stopColor="#22d3ee" stopOpacity=".12" /><stop offset=".5" stopColor="#818cf8" stopOpacity=".7" /><stop offset="1" stopColor="#c084fc" stopOpacity=".12" /></linearGradient>
            </defs>
            {[64, 182, 300, 418, 536, 654].map((y, index) => <path key={`l-${y}`} d={`M 272 ${y} C ${395 + index * 5} ${y}, 420 360, 600 360`} fill="none" stroke="url(#ecosystemLine)" strokeWidth="1.5" strokeDasharray="7 9" className="nova-connector" />)}
            {[64, 182, 300, 418, 536, 654].map((y, index) => <path key={`r-${y}`} d={`M 928 ${y} C ${805 - index * 5} ${y}, 780 360, 600 360`} fill="none" stroke="url(#ecosystemLine)" strokeWidth="1.5" strokeDasharray="7 9" className="nova-connector" />)}
          </svg>

          <div className="absolute inset-0 grid grid-cols-[285px_1fr_285px] items-center gap-12 xl:grid-cols-[310px_1fr_310px] xl:gap-16">
            <div className="space-y-4">{left.map(product => <ProductCard key={product.title.en} product={product} lang={lang} />)}</div>
            <div className="relative mx-auto flex size-[330px] items-center justify-center xl:size-[380px]">
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/15 nova-orbit" />
              <div className="absolute inset-8 rounded-full border border-violet-400/15 nova-orbit-reverse" />
              <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_16px_#22d3ee]" />
              <span className="absolute bottom-8 right-9 size-2 rounded-full bg-violet-300 shadow-[0_0_16px_#a78bfa]" />
              <div className="relative flex size-[220px] flex-col items-center justify-center rounded-full border-[6px] border-white/[0.07] bg-[radial-gradient(circle_at_35%_25%,#35459a,#18133f_68%)] text-center shadow-[0_35px_80px_rgba(28,22,76,.7)] xl:size-[248px]">
                <Image src="/assets/autonovaq-mark.png" alt="" width={64} height={64} className="h-14 w-14 object-contain" />
                <strong className="mt-2 text-xl font-black tracking-[-0.04em] text-white xl:text-2xl">AutoNova<span className="text-blue-300">Q</span></strong>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-violet-200/65">Business OS</span>
                <div className="mt-4 flex gap-2"><span className="rounded-full bg-white/[0.07] px-2 py-1 text-[7px] font-bold text-cyan-200">ONE LOGIN</span><span className="rounded-full bg-white/[0.07] px-2 py-1 text-[7px] font-bold text-violet-200">ONE DATABASE</span></div>
              </div>
            </div>
            <div className="space-y-4">{right.map(product => <ProductCard key={product.title.en} product={product} lang={lang} />)}</div>
          </div>
        </Reveal>

        <div className="mt-10 lg:hidden">
          <Reveal className="mx-auto mb-7 flex size-48 flex-col items-center justify-center rounded-full border-4 border-white/[0.06] bg-[radial-gradient(circle_at_35%_25%,#35459a,#18133f_70%)] text-center shadow-2xl">
            <Image src="/assets/autonovaq-mark.png" alt="" width={52} height={52} className="size-12 object-contain" />
            <strong className="mt-2 text-lg font-black text-white">AutoNova<span className="text-blue-300">Q</span></strong>
            <span className="text-[8px] font-bold tracking-[0.18em] text-violet-200/60">ONE BUSINESS OS</span>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">{platformProducts.map((product, index) => <Reveal key={product.title.en} index={index % 4}><ProductCard product={product} lang={lang} /></Reveal>)}</div>
        </div>

        <Reveal index={2} className="mt-10 overflow-hidden rounded-3xl border border-white/[0.075] bg-white/[0.025] p-5 sm:p-7 lg:mt-14">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div><span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">{t("একটি অটোমেটেড যাত্রা", "One automated journey")}</span><h3 className="mt-2 text-xl font-black text-white sm:text-2xl">{t("মেসেজ থেকে প্রফিট রিপোর্ট—মানুষের কপি-পেস্ট ছাড়াই।", "From message to profit report—without human copy-paste.")}</h3></div>
            <span className="text-[10px] font-bold text-emerald-400">8 {t("ধাপ অটো-সিঙ্ক", "steps auto-synced")}</span>
          </div>
          <div className="module-rail mt-7 overflow-x-auto pb-2">
            <div className="relative flex min-w-[860px] items-center justify-between gap-3">
              <div className="nova-flow-line absolute left-[5%] right-[5%] top-[22px] h-px" />
              {flow.map((step, index) => {
                const Icon = step.icon;
                return <div key={step.en} className="relative z-10 flex min-w-[92px] flex-col items-center"><span className="flex size-11 items-center justify-center rounded-2xl border border-white/[0.09] bg-[#09111f] text-blue-300 shadow-xl"><Icon size={18} /></span><span className="mt-2 text-[9px] font-bold text-slate-400">{lang === "bn" ? step.bn : step.en}</span><span className="mt-1 text-[7px] text-slate-700">0{index + 1}</span></div>;
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
