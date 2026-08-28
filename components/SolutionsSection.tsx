"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  CloudCog,
  DatabaseZap,
  Gauge,
  PackageCheck,
  Radio,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UsersRound,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { solutionsContent } from "@/data/content";
import ProductCommandCenter, {
  type ProductView,
} from "@/components/ProductCommandCenter";
import Reveal from "@/components/Reveal";

const productMeta = [
  {
    icon: ShoppingBag,
    view: "storefront" as ProductView,
    number: "01",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    icon: BarChart3,
    view: "operations" as ProductView,
    number: "02",
    accent: "from-violet-400 to-fuchsia-500",
  },
];

const sharedSuite = [
  { icon: UsersRound, bn: "CRM", en: "CRM" },
  { icon: UsersRound, bn: "HRM ও পেরোল", en: "HRM & Payroll" },
  { icon: BarChart3, bn: "অ্যাকাউন্টিং", en: "Accounting" },
  { icon: Boxes, bn: "ERP", en: "ERP" },
  { icon: Truck, bn: "কুরিয়ার", en: "Couriers" },
  { icon: Radio, bn: "Facebook অ্যাড", en: "Facebook Ads" },
  { icon: Sparkles, bn: "AI লাইভ রিপ্লাই", en: "AI Live Reply" },
  { icon: Gauge, bn: "অ্যানালিটিক্স", en: "Analytics" },
  { icon: CloudCog, bn: "এজ ক্লাউড", en: "Edge Cloud" },
  { icon: ShieldCheck, bn: "সিকিউরিটি", en: "Security" },
];

function FlowNode({
  icon: Icon,
  label,
  tone,
}: {
  icon: typeof ShoppingBag;
  label: string;
  tone: string;
}) {
  return (
    <div className="relative z-10 flex min-w-[108px] flex-1 flex-col items-center rounded-2xl border border-white/[0.08] bg-[#0b111e]/90 px-3 py-4 text-center shadow-xl backdrop-blur-lg">
      <span className={`flex size-9 items-center justify-center rounded-xl ${tone}`}>
        <Icon size={17} />
      </span>
      <span className="mt-2 text-[10px] font-bold text-slate-300">{label}</span>
      <span className="mt-1 inline-flex items-center gap-1 text-[8px] font-semibold text-emerald-400">
        <Check size={9} strokeWidth={3} /> Synced
      </span>
    </div>
  );
}

export default function SolutionsSection() {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const product = solutionsContent.products[activeIndex];
  const meta = productMeta[activeIndex];

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="solutions"
      className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-[#050914] dark:block" aria-hidden />
      <div className="solutions-spotlight absolute inset-0 -z-10" aria-hidden />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.1] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" aria-hidden />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.06] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-violet-300">
            <span className="size-1.5 rounded-full bg-violet-300" />
            {t("এক প্ল্যাটফর্মে পুরো ব্যবসা", "Your whole business. One platform.")}
          </div>
          <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
            {t("স্টোর থেকে স্টাফ।", "Storefront to staff.")}
            <span className="mt-2 block bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
              {t("অর্ডার থেকে হিসাব।", "Orders to accounting.")}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-slate-400 sm:text-lg">
            {t(
              "ওয়েবসাইট, অর্ডার, CRM, HRM, বেতন, স্টক, হিসাব, কুরিয়ার, বিজ্ঞাপন ও AI—সব এক জায়গা থেকে সহজে চালান।",
              "Run your website, orders, CRM, HRM, payroll, stock, accounting, couriers, ads and AI from one clear workspace.",
            )}
          </p>
        </Reveal>

        <Reveal className="mb-5 mt-12 text-center">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-300">
            {t("একটি প্ল্যাটফর্ম ব্যবহারের দুইটি অংশ", "Two experiences inside one complete platform")}
          </span>
          <p className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">
            {t("কাস্টমার কিনবে সুন্দর স্টোরে। আপনার টিম সব কাজ চালাবে একটি পূর্ণ অ্যাডমিন প্যানেল থেকে।", "Customers shop in a premium store. Your team runs every operation from one complete admin panel.")}
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
          {solutionsContent.products.map((item, index) => {
            const Icon = productMeta[index].icon;
            return (
              <Reveal key={item.id} index={index} className={`relative overflow-hidden rounded-[28px] border bg-[#080d18] p-6 sm:p-8 lg:p-9 ${index === 1 ? "border-violet-400/22 shadow-[0_28px_80px_rgba(84,51,170,.12)]" : "border-blue-400/15"}`}>
                <div className={`absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent ${index === 1 ? "via-violet-300" : "via-blue-300"} to-transparent`} />
                <span className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${productMeta[index].accent} text-white shadow-lg`}><Icon size={22} /></span>
                <h3 className="mt-6 text-2xl font-black tracking-tight text-white sm:text-3xl">{item.name[lang]}</h3>
                <p className={`mt-2 text-sm font-black ${index === 1 ? "text-violet-300" : "text-blue-300"}`}>{item.tagline[lang]}</p>
                <p className="mt-4 text-sm font-medium leading-6 text-slate-500">{item.description[lang]}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {item.features.map(feature => (
                    <div key={feature.en} className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-slate-300"><Check size={13} strokeWidth={3} className="mt-0.5 shrink-0 text-emerald-400" /> {feature[lang]}</div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal index={2} className="mt-6 rounded-3xl border border-white/[0.075] bg-white/[0.025] p-5 sm:p-7">
          <div className="flex flex-col gap-2 text-center sm:text-left"><span className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-300">{t("সব মডিউল একই ডেটায় যুক্ত", "Every module shares the same live data")}</span><h3 className="text-lg font-black text-white sm:text-xl">{t("CRM থেকে Payroll, ERP থেকে Accounting—কিছুই আলাদা নয়।", "CRM to payroll, ERP to accounting—nothing is disconnected.")}</h3></div>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {sharedSuite.map(module => { const Icon = module.icon; return <div key={module.en} className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-[#09111f] px-3 py-2.5 text-[10px] font-bold text-slate-400"><Icon size={13} className="shrink-0 text-violet-300" /> {lang === "bn" ? module.bn : module.en}</div>; })}
          </div>
        </Reveal>

        <Reveal index={1} className="mt-12">
          <div className="mb-5 text-center"><span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-300">{t("ইন্টারেক্টিভ প্রোডাক্ট ভিউ", "Interactive product view")}</span><h3 className="mt-2 text-xl font-black text-white sm:text-2xl">{t("কাস্টমার কী দেখবে, টিম কীভাবে চালাবে—দুটিই দেখুন।", "See the customer experience and the team workspace.")}</h3></div>
          <div
            role="tablist"
            aria-label={t("প্রোডাক্ট বেছে নিন", "Choose a product")}
            className="mx-auto grid max-w-3xl gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-1.5 sm:grid-cols-2">
            {solutionsContent.products.map((item, index) => {
              const Icon = productMeta[index].icon;
              const active = activeIndex === index;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex min-h-16 items-center gap-3 rounded-xl px-4 text-left transition-all duration-300 ${
                    active
                      ? "bg-white/[0.09] text-white shadow-[0_12px_32px_rgba(0,0,0,.24),inset_0_1px_0_rgba(255,255,255,.08)]"
                      : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-300"
                  }`}>
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${active ? "bg-gradient-to-br " + productMeta[index].accent + " text-white shadow-lg" : "bg-white/[0.04]"}`}>
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-black uppercase tracking-[0.18em] opacity-50">System {productMeta[index].number}</span>
                    <span className="mt-0.5 block truncate text-xs font-extrabold sm:text-sm">{item.name[lang]}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal index={2} className="mt-6">
          <div className="overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080d18]/80 shadow-[0_38px_120px_rgba(0,0,0,.45)] backdrop-blur-2xl">
            <div className="grid lg:grid-cols-[.78fr_1.38fr]">
              <div className="relative flex flex-col border-b border-white/[0.07] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r ${meta.accent}`} />
                <div key={`${lang}-${activeIndex}`} className="panel-enter">
                  <span className={`inline-flex items-center gap-2 bg-gradient-to-r ${meta.accent} bg-clip-text text-[10px] font-black uppercase tracking-[0.2em] text-transparent`}>
                    <Radio size={12} className="text-blue-300" />
                    {product.tagline[lang]}
                  </span>
                  <h3 className="mt-5 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
                    {product.name[lang]}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-6 text-slate-400 sm:text-base sm:leading-7">
                    {product.description[lang]}
                  </p>

                  <div className="mt-7 space-y-3">
                    {product.features.map(feature => (
                      <div key={feature.en} className="flex items-start gap-3 text-xs font-semibold leading-5 text-slate-300 sm:text-sm">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-emerald-400/15 bg-emerald-400/[0.08] text-emerald-400">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {feature[lang]}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-white">
                    {t("এই সিস্টেমটি দেখুন", "Explore this system")}
                    <span className="flex size-7 items-center justify-center rounded-full bg-white/[0.07] text-blue-300 transition group-hover:translate-x-1 group-hover:bg-blue-500 group-hover:text-white">
                      <ArrowRight size={13} />
                    </span>
                  </button>
                </div>

                <div className="mt-auto hidden items-center gap-3 border-t border-white/[0.06] pt-7 lg:flex">
                  <div className="flex -space-x-2">
                    {["AN", "SA", "RQ"].map((initials, index) => (
                      <span key={initials} className={`flex size-8 items-center justify-center rounded-full border-2 border-[#080d18] bg-gradient-to-br ${index === 0 ? "from-blue-400 to-indigo-500" : index === 1 ? "from-violet-400 to-fuchsia-500" : "from-cyan-400 to-emerald-500"} text-[8px] font-black text-white`}>{initials}</span>
                    ))}
                  </div>
                  <div><div className="text-[10px] font-bold text-slate-300">{t("লাইভ অনবোর্ডিং সাপোর্ট", "Live onboarding support")}</div><div className="text-[9px] text-slate-600">{t("আপনার টিমের সাথে, ধাপে ধাপে", "With your team, step by step")}</div></div>
                </div>
              </div>

              <div className="relative min-w-0 p-3 sm:p-5 lg:p-7">
                <div className="absolute right-8 top-5 flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/[0.06] px-2.5 py-1 text-[8px] font-bold text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 nova-live-dot" /> LIVE DATA
                </div>
                <div key={meta.view} className="panel-enter pt-7 lg:pt-3">
                  <ProductCommandCenter view={meta.view} lang={lang} className="solution-product-frame" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.45fr_.75fr_.75fr]">
          <Reveal index={1} className="premium-bento relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="absolute -right-16 -top-20 size-64 rounded-full bg-blue-500/[0.08] blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">{t("জিরো-টাচ অটোমেশন", "Zero-touch automation")}</span>
                  <h3 className="mt-2 text-xl font-black tracking-tight text-white sm:text-2xl">{t("একটি অর্ডার। সবকিছু আপডেট।", "One order. Everything updates.")}</h3>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-300"><Zap size={19} /></span>
              </div>
              <p className="mt-3 max-w-xl text-xs font-medium leading-5 text-slate-500 sm:text-sm">{t("অর্ডার আসলেই স্টক কাটে, কুরিয়ার বুক হয়, কাস্টমার নোটিফাই হয় এবং লাভের হিসাব আপডেট হয়।", "The moment an order lands, stock moves, courier is booked, the customer is notified and profit updates.")}</p>

              <div className="relative mt-7 overflow-x-auto pb-2">
                <div className="nova-flow-line absolute left-[12%] right-[12%] top-[34px] h-px" />
                <div className="relative flex min-w-[520px] gap-3">
                  <FlowNode icon={ShoppingBag} label={t("অর্ডার", "Order")} tone="bg-blue-400/10 text-blue-300" />
                  <FlowNode icon={Boxes} label={t("স্টক", "Inventory")} tone="bg-violet-400/10 text-violet-300" />
                  <FlowNode icon={Truck} label={t("কুরিয়ার", "Courier")} tone="bg-cyan-400/10 text-cyan-300" />
                  <FlowNode icon={PackageCheck} label={t("প্রফিট", "Profit")} tone="bg-emerald-400/10 text-emerald-300" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal index={2} className="premium-bento group relative overflow-hidden rounded-3xl p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,.13),transparent_42%)]" />
            <div className="relative flex h-full min-h-[260px] flex-col">
              <span className="flex size-10 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.07] text-violet-300"><DatabaseZap size={19} /></span>
              <div className="mt-auto">
                <div className="mb-5 flex items-end gap-1.5">
                  {[34, 52, 43, 72, 58, 86, 68, 96, 78].map((height, index) => (
                    <span key={index} className="nova-data-bar flex-1 rounded-t-sm bg-gradient-to-t from-blue-500/35 to-violet-400" style={{ height: `${height}px`, animationDelay: `${index * 90}ms` }} />
                  ))}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-violet-300">{t("লাইভ ইন্টেলিজেন্স", "Live intelligence")}</span>
                <h3 className="mt-2 text-lg font-black text-white">{t("অনুমান নয়। সিদ্ধান্ত।", "No guessing. Decisions.")}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{t("প্রফিট, স্টক ও কাস্টমার ট্রেন্ড এক নজরে।", "Profit, stock and customer trends at a glance.")}</p>
              </div>
            </div>
          </Reveal>

          <Reveal index={3} className="premium-bento relative overflow-hidden rounded-3xl p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(16,185,129,.13),transparent_42%)]" />
            <div className="relative flex h-full min-h-[260px] flex-col">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.07] text-emerald-300"><CloudCog size={19} /></span>
                <span className="inline-flex items-center gap-1.5 text-[8px] font-bold text-emerald-400"><span className="size-1.5 rounded-full bg-emerald-400 nova-live-dot" /> OPERATIONAL</span>
              </div>
              <div className="my-auto py-5 text-center">
                <div className="relative mx-auto flex size-28 items-center justify-center rounded-full border border-emerald-400/10 bg-emerald-400/[0.035]">
                  <div className="absolute inset-2 rounded-full border border-dashed border-emerald-400/20 nova-orbit" />
                  <div><strong className="block text-2xl font-black text-white">99.9%</strong><span className="text-[8px] font-bold uppercase tracking-widest text-emerald-400">Uptime</span></div>
                </div>
              </div>
              <h3 className="text-lg font-black text-white">{t("সর্বদা চালু। সর্বদা সুরক্ষিত।", "Always on. Always protected.")}</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-[8px] font-bold text-slate-500"><span className="inline-flex items-center gap-1"><ShieldCheck size={10} className="text-emerald-400" /> Edge security</span><span className="inline-flex items-center gap-1"><Gauge size={10} className="text-cyan-400" /> Auto-scale</span></div>
            </div>
          </Reveal>
        </div>

        <Reveal index={2} className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-center sm:flex-row sm:text-left lg:mt-16 lg:px-7">
          <div className="flex items-center gap-4">
            <span className="hidden size-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg sm:flex"><UsersRound size={19} /></span>
            <div><strong className="block text-sm text-white sm:text-base">{t("আপনার ব্যবসা কি আলাদা? সিস্টেমটিও হতে পারে।", "Your business is unique. Your system can be too.")}</strong><span className="mt-1 block text-xs text-slate-500">{t("আমরা আপনার ওয়ার্কফ্লো অনুযায়ী মডিউল কনফিগার করি।", "We configure every module around the way your team actually works.")}</span></div>
          </div>
          <button onClick={scrollToContact} className="premium-cta group inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-xs font-extrabold text-white">{t("সমাধান ডিজাইন করুন", "Design my solution")} <ArrowRight size={14} className="transition group-hover:translate-x-0.5" /></button>
        </Reveal>
      </div>
    </section>
  );
}
