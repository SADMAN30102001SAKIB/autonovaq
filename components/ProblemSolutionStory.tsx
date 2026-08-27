"use client";

import {
  ArrowDown,
  ArrowRight,
  Bot,
  Boxes,
  Calculator,
  CloudCog,
  DatabaseZap,
  FileSpreadsheet,
  MegaphoneOff,
  MessageSquareWarning,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  Target,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

const transitions = [
  { problemIcon: FileSpreadsheet, solutionIcon: DatabaseZap, problem: { bn: "Excel-এ একই তথ্য বারবার লেখা", en: "Repeated entry across spreadsheets" }, solution: { bn: "একটি ডেটাবেজে সব তথ্য", en: "One shared database" } },
  { problemIcon: ShieldAlert, solutionIcon: Boxes, problem: { bn: "ওয়েবসাইট ও warehouse stock আলাদা", en: "Store and warehouse stock disagree" }, solution: { bn: "Live inventory sync", en: "Live inventory sync" } },
  { problemIcon: MessageSquareWarning, solutionIcon: Bot, problem: { bn: "Customer message উত্তর ছাড়া থাকে", en: "Customer messages go unanswered" }, solution: { bn: "AI reply ও CRM follow-up", en: "AI reply and CRM follow-up" } },
  { problemIcon: MegaphoneOff, solutionIcon: Target, problem: { bn: "Stock শেষ, তবুও ad budget খরচ", en: "Ads spend after stock reaches zero" }, solution: { bn: "Stock zero হলে ad auto-pause", en: "Ads auto-pause at zero stock" } },
  { problemIcon: UsersRound, solutionIcon: WalletCards, problem: { bn: "হাজিরা ও বেতন হাতে হিসাব", en: "Attendance and payroll calculated by hand" }, solution: { bn: "HRM থেকে payroll তৈরি", en: "HRM produces payroll" } },
  { problemIcon: Calculator, solutionIcon: CloudCog, problem: { bn: "হিসাব আলাদা, server চাপের ভয়", en: "Disconnected accounts and server limits" }, solution: { bn: "Live accounting ও auto-scale cloud", en: "Live accounting and auto-scale cloud" } },
];

export default function ProblemSolutionStory() {
  const { lang, t } = useLanguage();

  return (
    <Reveal className="mb-14 overflow-hidden rounded-[30px] border border-white/[0.075] bg-[#060b15] shadow-[0_32px_90px_rgba(0,0,0,.3)]">
      <div className="border-b border-white/[0.06] px-5 py-6 text-center sm:px-8">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-300">{t("সমস্যা থেকে সমাধান", "From problem to solution")}</span>
        <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">{t("লাল সংকেতগুলো অটোমেশনে বদলে যায়", "Watch every red flag turn into automation")}</h3>
        <p className="mx-auto mt-2 max-w-2xl text-xs font-medium leading-5 text-slate-500 sm:text-sm">{t("বাম পাশে এখনকার সমস্যা। ডান পাশে AutoNovaQ চালু হওয়ার পর একই কাজ কীভাবে সহজ হয়।", "The left side shows the current problem. The right shows what changes after AutoNovaQ takes over.")}</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_116px_1fr]">
        <div className="problem-red-zone relative overflow-hidden border-b border-rose-400/10 bg-rose-500/[0.035] p-4 sm:p-6 lg:border-b-0 lg:border-r">
          <div className="problem-red-scan pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent shadow-[0_0_18px_#fb7185]" />
          <div className="mb-4 flex items-center justify-between"><span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] text-rose-300"><ShieldAlert size={13}/> {t("আগের অবস্থা", "Before")}</span><span className="rounded-full bg-rose-400/10 px-2 py-1 text-[7px] font-black text-rose-300">MANUAL RISK</span></div>
          <div className="space-y-2.5">
            {transitions.map((item,index)=>{const Icon=item.problemIcon;return <div key={item.problem.en} className="problem-alert-row flex items-center gap-3 rounded-xl border border-rose-400/10 bg-[#130b13]/75 p-3" style={{animationDelay:`${index*.42}s`}}><span className="problem-alert-icon flex size-8 shrink-0 items-center justify-center rounded-xl bg-rose-400/10 text-rose-300"><Icon size={14}/></span><span className="text-[10px] font-bold leading-4 text-rose-100/65 sm:text-xs">{item.problem[lang]}</span><span className="ml-auto size-1.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_10px_#fb7185]"/></div>})}
          </div>
        </div>

        <div className="relative flex min-h-28 items-center justify-center border-b border-white/[0.06] bg-[#080e19] lg:min-h-0 lg:border-b-0 lg:border-r">
          <div className="problem-transform-ring absolute size-20 rounded-full border border-dashed border-blue-400/25"/>
          <div className="problem-transform-core relative z-10 flex size-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-[radial-gradient(circle_at_35%_25%,#3550a3,#17163b_72%)] text-cyan-200 shadow-[0_16px_45px_rgba(49,70,180,.38)]"><RefreshCw size={21}/></div>
          <div className="problem-flow-beam absolute hidden h-px w-full overflow-hidden bg-white/[0.06] lg:block"><span className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"/></div>
          <ArrowRight size={15} className="relative z-10 ml-1 hidden text-cyan-300 lg:block"/><ArrowDown size={15} className="relative z-10 ml-1 text-cyan-300 lg:hidden"/>
          <span className="absolute bottom-2 text-[6px] font-black tracking-widest text-slate-700">AUTOMATING</span>
        </div>

        <div className="solution-zone relative overflow-hidden bg-[linear-gradient(140deg,rgba(16,185,129,.035),rgba(59,130,246,.025))] p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between"><span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] text-emerald-300"><Sparkles size={13}/> {t("সমাধানের পরে", "After")}</span><span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[7px] font-black text-emerald-300">AUTO-SYNCED</span></div>
          <div className="space-y-2.5">
            {transitions.map((item,index)=>{const Icon=item.solutionIcon;return <div key={item.solution.en} className="solution-arrive-row flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.035] p-3" style={{animationDelay:`${index*.42}s`}}><span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300"><Icon size={14}/></span><span className="text-[10px] font-bold leading-4 text-slate-300 sm:text-xs">{item.solution[lang]}</span><span className="ml-auto flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">✓</span></div>})}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
