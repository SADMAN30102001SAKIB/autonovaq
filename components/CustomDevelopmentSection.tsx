"use client";

import {
  ArrowRight,
  Blocks,
  Bot,
  Braces,
  Check,
  CloudCog,
  DatabaseZap,
  GitBranch,
  PlugZap,
  Rocket,
  ScanSearch,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

const steps = [
  { icon: ScanSearch, bn: "প্রয়োজন বুঝি", en: "Understand", subBn: "আপনার কাজের ধাপ দেখি", subEn: "Map how your team works" },
  { icon: GitBranch, bn: "Flow ডিজাইন", en: "Design", subBn: "সহজ workflow বানাই", subEn: "Design the cleanest flow" },
  { icon: Blocks, bn: "Module তৈরি", en: "Build", subBn: "যা দরকার শুধু তাই", subEn: "Build only what matters" },
  { icon: PlugZap, bn: "সবকিছু যুক্ত", en: "Integrate", subBn: "API ও data sync করি", subEn: "Connect APIs and data" },
  { icon: DatabaseZap, bn: "ভালোভাবে পরীক্ষা", en: "Test", subBn: "ভুল ও চাপ পরীক্ষা করি", subEn: "Verify errors and load" },
  { icon: Rocket, bn: "লাইভ ও সাপোর্ট", en: "Launch", subBn: "চালু করি, পাশে থাকি", subEn: "Launch and support" },
];

export default function CustomDevelopmentSection() {
  const { lang, t } = useLanguage();

  const scrollToContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="custom-development" className="relative isolate overflow-hidden bg-[#040813] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="custom-ambient absolute -left-28 top-1/4 -z-10 size-[420px] rounded-full bg-blue-500/[0.08] blur-3xl" />
      <div className="custom-ambient-reverse absolute -right-28 bottom-0 -z-10 size-[420px] rounded-full bg-violet-500/[0.09] blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300"><Braces size={13} /> {t("কাস্টম ডেভেলপমেন্ট", "Custom development")}</span>
            <h2 className="mt-6 text-4xl font-black leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              {t("আপনার ব্যবসার নিয়ম।", "Your business rules.")}
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">{t("সিস্টেমও ঠিক সেভাবেই।", "A system built around them.")}</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-slate-400 sm:text-base">{t("রেডিমেড feature যথেষ্ট না হলে আমরা আপনার approval, report, API, automation এবং staff workflow অনুযায়ী নতুন module তৈরি করি। সহজ ভাষায়—software আপনার কাজ শিখবে; আপনাকে software-এর নিয়ম শিখতে হবে না।", "When ready-made features are not enough, we build around your approvals, reports, APIs, automation and staff workflow. The software adapts to your business—not the other way around.")}</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.en} index={index} className="custom-dev-step group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5 transition hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045]">
                  <div className="flex items-center justify-between"><span className="flex size-8 items-center justify-center rounded-xl bg-blue-400/[0.08] text-blue-300"><Icon size={15} /></span><span className="text-[8px] font-black text-slate-700">0{index + 1}</span></div>
                  <strong className="mt-3 block text-xs text-white">{lang === "bn" ? step.bn : step.en}</strong>
                  <span className="mt-1 block text-[9px] font-medium leading-4 text-slate-600">{lang === "bn" ? step.subBn : step.subEn}</span>
                </Reveal>
              );
            })}
          </div>

          <Reveal index={2} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={scrollToContact} className="premium-cta group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-black text-white">{t("আমার workflow নিয়ে কথা বলুন", "Discuss my workflow")} <ArrowRight size={14} className="transition group-hover:translate-x-1" /></button>
            <a href="/features" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-xs font-black text-slate-400 transition hover:text-white">{t("API ও custom feature দেখুন", "Explore custom features")} <Braces size={14} /></a>
          </Reveal>
        </div>

        <Reveal index={1} className="relative">
          <div className="custom-console relative overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#070d18] p-3 shadow-[0_45px_130px_rgba(0,0,0,.6)] sm:p-5">
            <div className="custom-scan-line pointer-events-none absolute inset-x-0 z-20 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_18px_#22d3ee]" />
            <div className="flex h-10 items-center gap-2 border-b border-white/[0.06] px-1 text-[8px] font-bold text-slate-600"><span className="size-2 rounded-full bg-rose-400/70"/><span className="size-2 rounded-full bg-amber-400/70"/><span className="size-2 rounded-full bg-emerald-400/70"/><span className="ml-3">workflow.autonovaq.com</span><span className="custom-cursor ml-auto h-3 w-px bg-cyan-300" /></div>
            <div className="grid min-h-[410px] gap-3 pt-3 sm:grid-cols-[128px_1fr]">
              <div className="hidden space-y-2 rounded-2xl border border-white/[0.055] bg-black/10 p-2.5 sm:block">
                {["CRM", "HRM", "Payroll", "ERP", "Accounting", "Courier", "AI Agent"].map((item, index) => <div key={item} className={`custom-code-line flex items-center gap-2 rounded-lg px-2 py-2 text-[8px] font-bold ${index === 5 ? "bg-blue-500 text-white" : "text-slate-600"}`} style={{animationDelay:`${index * 130}ms`}}><span className="size-1.5 rounded-full bg-current opacity-60"/>{item}</div>)}
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[radial-gradient(circle_at_50%_45%,rgba(79,70,229,.16),transparent_52%),#070c16] p-4">
                <div className="flex items-center justify-between"><div><span className="text-[8px] font-black uppercase tracking-widest text-cyan-300">CUSTOM WORKFLOW</span><h3 className="mt-1 text-sm font-black text-white sm:text-base">Order risk → approval → courier</h3></div><span className="flex items-center gap-1 rounded-full bg-emerald-400/[0.08] px-2 py-1 text-[7px] font-black text-emerald-400"><Check size={8}/> LIVE</span></div>

                <div className="relative mt-5 flex h-[220px] items-center justify-center">
                  <div className="custom-orbit-ring absolute size-52 rounded-full border border-dashed border-blue-400/20" />
                  <div className="custom-orbit-ring-reverse absolute size-36 rounded-full border border-dashed border-violet-400/25" />
                  <div className="custom-core relative z-10 flex size-24 flex-col items-center justify-center rounded-[28px] border border-blue-400/20 bg-[radial-gradient(circle_at_35%_25%,#35459a,#171438_72%)] shadow-[0_22px_60px_rgba(40,46,140,.45)]"><Sparkles size={22} className="text-cyan-200"/><strong className="mt-2 text-xs text-white">Rule engine</strong><span className="text-[7px] text-violet-300">12 automations</span></div>
                  {[
                    { icon: Bot, label: "Fraud AI", cls: "left-[2%] top-[18%]", delay: "0s" },
                    { icon: GitBranch, label: "Approval", cls: "right-[0%] top-[20%]", delay: "-.8s" },
                    { icon: PlugZap, label: "Courier API", cls: "bottom-[4%] left-[8%]", delay: "-1.6s" },
                    { icon: CloudCog, label: "Live sync", cls: "bottom-[2%] right-[6%]", delay: "-2.4s" },
                  ].map(node => { const Icon = node.icon; return <div key={node.label} className={`custom-floating-node absolute ${node.cls} flex items-center gap-2 rounded-xl border border-white/[0.075] bg-[#0b1322]/95 px-3 py-2 shadow-xl`} style={{animationDelay:node.delay}}><Icon size={13} className="text-blue-300"/><span className="text-[8px] font-bold text-slate-400">{node.label}</span></div>; })}
                  {["left-[17%] top-[34%]","right-[18%] top-[40%]","bottom-[22%] left-[31%]"].map((position,index)=><span key={position} className={`custom-spark absolute ${position} size-1.5 rounded-full ${index===1?"bg-violet-300":"bg-cyan-300"}`} style={{animationDelay:`${index*.45}s`}} />)}
                </div>

                <div className="rounded-xl border border-white/[0.055] bg-white/[0.025] p-3"><div className="flex items-center justify-between text-[8px]"><span className="font-bold text-slate-500">Deployment readiness</span><strong className="text-emerald-400">100%</strong></div><div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.05]"><div className="custom-pipeline-progress h-full origin-left rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300" /></div></div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-8 left-[12%] right-[12%] h-16 rounded-full bg-blue-500/15 blur-3xl" />
        </Reveal>
      </div>
    </section>
  );
}
