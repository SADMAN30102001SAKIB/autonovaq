"use client";

import {
  ArrowRight,
  Check,
  Crown,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pricingContent, perfectFor } from "@/data/content";
import Icon from "@/components/IconMap";
import Reveal from "@/components/Reveal";

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
  const plans = [pricingContent.starterPlan, pricingContent.mainPlan];
  const breakdown = pricingContent.costBreakdown;

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="relative isolate overflow-hidden bg-[#040812] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(42%_38%_at_50%_30%,rgba(99,102,241,.13),transparent_74%)]" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.09] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-violet-300"><Sparkles size={12} /> {t("আপনার স্টেজ অনুযায়ী প্ল্যান", "Pricing for your stage")}</span>
          <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">{pricingContent.sectionTitle[lang]}
            <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">{pricingContent.sectionTitleHighlight[lang]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-400 sm:text-lg">{pricingContent.sectionSubtitle[lang]}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-7">
          {plans.map((plan, index) => {
            const advanced = index === 1;
            const PlanIcon = advanced ? Crown : Rocket;
            return (
              <Reveal key={plan.name.en} index={index} className={`relative overflow-hidden rounded-[28px] border p-6 sm:p-8 lg:p-9 ${advanced ? "border-violet-400/25 bg-[linear-gradient(150deg,rgba(99,102,241,.13),rgba(139,92,246,.045)),#080d18] shadow-[0_35px_100px_rgba(64,50,160,.2)]" : "border-white/[0.08] bg-white/[0.025]"}`}>
                {advanced && <div className="absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />}
                <div className="flex items-start justify-between gap-4">
                  <span className={`flex size-11 items-center justify-center rounded-2xl border ${advanced ? "border-violet-400/20 bg-violet-400/10 text-violet-300" : "border-blue-400/15 bg-blue-400/[0.07] text-blue-300"}`}><PlanIcon size={20} /></span>
                  <span className={`rounded-full px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] ${advanced ? "bg-violet-400/10 text-violet-300" : "bg-blue-400/[0.07] text-blue-300"}`}>{advanced ? t("গ্রোয়িং ব্র্যান্ড", "Growing brands") : t("নতুন ব্যবসা", "New businesses")}</span>
                </div>

                <h3 className="mt-6 text-2xl font-black tracking-tight text-white sm:text-3xl">{plan.name[lang]}</h3>
                <p className="mt-3 min-h-[48px] text-xs font-medium leading-6 text-slate-500 sm:text-sm">{plan.description[lang]}</p>

                <div className="mt-7 flex items-end gap-2 border-b border-white/[0.07] pb-7">
                  <strong className={`text-5xl font-black tracking-[-0.055em] sm:text-6xl ${advanced ? "bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent" : "text-white"}`}>{plan.price}</strong>
                  <span className="pb-1.5 text-xs font-bold text-slate-500">{plan.priceLabel[lang]}</span>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {plan.includes.map(item => (
                    <div key={item.en} className="flex items-start gap-2.5 text-[11px] font-semibold leading-5 text-slate-300 sm:text-xs">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400"><Check size={9} strokeWidth={3} /></span>
                      {item[lang]}
                    </div>
                  ))}
                </div>

                <button onClick={scrollToContact} className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-black transition ${advanced ? "premium-cta text-white" : "border border-white/[0.1] bg-white/[0.045] text-white hover:bg-white/[0.08]"}`}>{plan.cta[lang]} <ArrowRight size={16} className="transition group-hover:translate-x-0.5" /></button>
                <p className="mt-4 text-center text-[9px] font-medium leading-4 text-slate-600 sm:text-[10px]">{plan.note[lang]}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal index={2} className="mt-8 rounded-[28px] border border-white/[0.075] bg-white/[0.025] p-5 sm:p-7 lg:p-9">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><span className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-300">{t("প্রথম বছরের বাস্তব চিত্র", "First-year reality")}</span><h3 className="mt-2 text-xl font-black text-white sm:text-2xl">{breakdown.title[lang]}</h3></div><span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-emerald-400"><ShieldCheck size={12} /> {t("হিডেন সার্ভার ফি নেই", "No hidden server fee")}</span></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {breakdown.items.map(item => (
              <div key={item.label.en} className={`rounded-2xl border p-4 ${item.highlight ? "border-emerald-400/15 bg-emerald-400/[0.045]" : "border-white/[0.065] bg-black/10"}`}>
                <strong className={`block text-xs font-black ${item.highlight ? "text-emerald-300" : "text-slate-300"}`}>{item.label[lang]}</strong>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[[breakdown.headers.initial[lang], item.initial], [breakdown.headers.monthly[lang], item.monthly], [breakdown.headers.yearly[lang], item.yearly]].map(([label, value]) => <div key={label} className="min-w-0"><span className="block truncate text-[7px] font-bold uppercase tracking-wider text-slate-700">{label}</span><strong className={`mt-1 block text-[10px] ${item.highlight ? "text-white" : "text-rose-300"}`}>{value}</strong></div>)}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[9px] leading-4 text-slate-700">* {t("অ্যাডভান্সড প্ল্যানে প্রথম বছরের পর আপডেট, মনিটরিং ও টেকনিক্যাল সাপোর্টের জন্য ছোট বার্ষিক মেইনটেন্যান্স ফি প্রযোজ্য; আপনার স্কোপ অনুযায়ী কোটে পরিমাণ জানানো হবে।", "After year one, the Advanced plan has a small annual maintenance fee for updates, monitoring and technical support; the exact amount is stated in your scope quotation.")}</p>
        </Reveal>

        <Reveal index={3} className="mt-8 rounded-3xl border border-white/[0.075] bg-[#080d18] p-5 sm:p-7 lg:p-9">
          <h3 className="text-lg font-black text-white sm:text-xl">{perfectFor.title[lang]}<span className="text-violet-300">{perfectFor.titleHighlight[lang]}</span></h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {perfectFor.items.map((item, index) => (
              <div key={item.en} className="flex items-center gap-3 rounded-2xl border border-white/[0.055] bg-white/[0.02] p-3 text-xs font-semibold text-slate-400">
                <span className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${perfectForColors[index]?.bg || "bg-primary/10"}`}><Icon name={item.icon} size={16} className={perfectForColors[index]?.text || "text-primary"} /></span>
                {item[lang]}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
