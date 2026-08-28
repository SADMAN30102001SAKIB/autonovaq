"use client";

import {
  BarChart3,
  Bot,
  Boxes,
  Calculator,
  Contact,
  Globe2,
  MessageCircleReply,
  PackageCheck,
  ShoppingCart,
  Truck,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

function CardTitle({ icon: Icon, title, subtitle, tone }: { icon: typeof ShoppingCart; title: string; subtitle: string; tone: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className={`flex size-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035] ${tone}`}><Icon size={15} /></span>
          <strong className="truncate text-sm font-black text-white">{title}</strong>
        </div>
        <p className="ml-10 mt-1 text-[10px] font-semibold text-slate-500">{subtitle}</p>
      </div>
      <span className="flex shrink-0 items-center gap-1 text-[7px] font-black uppercase tracking-widest text-emerald-400"><span className="nova-live-dot size-1.5 rounded-full bg-emerald-400" /> Live</span>
    </div>
  );
}

export default function FeatureVisualOverview() {
  const { lang } = useLanguage();
  const t = (bn: string, en: string) => lang === "bn" ? bn : en;
  const flow = [
    { icon: MessageCircleReply, bn: "মেসেজ", en: "Message", tone: "text-cyan-300" },
    { icon: Bot, bn: "AI উত্তর", en: "AI reply", tone: "text-violet-300" },
    { icon: Contact, bn: "CRM", en: "CRM", tone: "text-blue-300" },
    { icon: ShoppingCart, bn: "অর্ডার", en: "Order", tone: "text-indigo-300" },
    { icon: Boxes, bn: "স্টক", en: "Stock", tone: "text-amber-300" },
    { icon: Truck, bn: "কুরিয়ার", en: "Courier", tone: "text-cyan-300" },
    { icon: Calculator, bn: "হিসাব", en: "Accounts", tone: "text-emerald-300" },
    { icon: BarChart3, bn: "রিপোর্ট", en: "Report", tone: "text-fuchsia-300" },
  ];

  return (
    <div className="mb-12 space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Reveal className="platform-node overflow-hidden rounded-3xl border border-blue-400/10 bg-[#070d19] p-5">
          <CardTitle icon={ShoppingCart} title={t("বিক্রি ও ই-কমার্স", "Sales & Ecommerce")} subtitle={t("অর্ডার, বিক্রি ও লাভ", "Orders, sales and profit")} tone="text-blue-300" />
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[[t("অর্ডার", "Orders"), "184", "+12.7%"], [t("বিক্রি", "Revenue"), "৳3.18M", "+18.4%"], [t("লাভ", "Profit"), "৳1.24M", "+21.2%"]].map(([label, value, change]) => <div key={label} className="rounded-xl border border-white/[0.055] bg-white/[0.025] p-2"><span className="block text-[8px] font-semibold text-slate-600">{label}</span><strong className="mt-1 block truncate text-xs text-white">{value}</strong><span className="text-[7px] font-bold text-emerald-400">{change}</span></div>)}
          </div>
          <div className="relative mt-4 h-20">
            <div className="absolute inset-0 flex flex-col justify-between">{[0,1,2].map(i => <span key={i} className="border-t border-dashed border-white/[0.06]" />)}</div>
            <svg viewBox="0 0 420 90" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <defs><linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#6366f1" stopOpacity=".5"/><stop offset="1" stopColor="#6366f1" stopOpacity="0"/></linearGradient><linearGradient id="salesLine" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#a78bfa"/></linearGradient></defs>
              <polygon points="0,82 0,70 42,59 84,64 126,35 168,48 210,24 252,40 294,15 336,30 378,12 420,22 420,82" fill="url(#salesFill)" />
              <polyline points="0,70 42,59 84,64 126,35 168,48 210,24 252,40 294,15 336,30 378,12 420,22" fill="none" stroke="url(#salesLine)" strokeWidth="2.5" className="nova-chart-line" />
            </svg>
          </div>
        </Reveal>

        <Reveal index={1} className="platform-node rounded-3xl border border-violet-400/10 bg-[#070d19] p-5">
          <CardTitle icon={Contact} title={t("CRM, বিজ্ঞাপন ও AI", "CRM, Ads & AI")} subtitle={t("লিড থেকে কাস্টমার", "Lead to customer")} tone="text-violet-300" />
          <div className="mt-5 grid grid-cols-[1fr_auto] gap-4">
            <div className="space-y-3">
              {[[t("নতুন লিড", "New leads"), "320", "w-[88%] bg-blue-400"], [t("কথা চলছে", "In conversation"), "186", "w-[62%] bg-violet-400"], [t("অর্ডার হয়েছে", "Converted"), "74", "w-[38%] bg-emerald-400"]].map(([label,value,width]) => <div key={label}><div className="mb-1 flex justify-between text-[8px]"><span className="text-slate-500">{label}</span><strong className="text-white">{value}</strong></div><div className="h-1 rounded-full bg-white/[0.05]"><div className={`h-full rounded-full ${width}`} /></div></div>)}
            </div>
            <div className="flex size-20 flex-col items-center justify-center rounded-full border border-violet-400/15 bg-violet-400/[0.05] text-center"><strong className="text-lg text-white">4.8x</strong><span className="text-[7px] font-bold text-violet-300">META ROAS</span></div>
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.045] p-3"><span className="flex size-8 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300"><Bot size={15}/></span><div className="min-w-0"><strong className="block text-[10px] text-white">{t("AI লাইভ রিপ্লাই চালু", "AI live reply is on")}</strong><span className="block truncate text-[8px] text-slate-500">{t("মেসেঞ্জারে ১২ সেকেন্ডে উত্তর", "Messenger replies in 12 seconds")}</span></div><span className="ml-auto rounded-full bg-emerald-400/10 px-2 py-1 text-[7px] font-black text-emerald-400">98%</span></div>
        </Reveal>

        <Reveal index={2} className="platform-node rounded-3xl border border-cyan-400/10 bg-[#070d19] p-5">
          <CardTitle icon={UsersRound} title={t("HRM ও Payroll", "HRM & Payroll")} subtitle={t("স্টাফ, হাজিরা ও বেতন", "People, attendance and salary")} tone="text-cyan-300" />
          <div className="mt-5 flex items-center gap-5">
            <div className="relative flex size-28 shrink-0 items-center justify-center rounded-full" style={{background:"conic-gradient(#22d3ee 0 96%, rgba(255,255,255,.06) 96% 100%)"}}><div className="flex size-[82px] flex-col items-center justify-center rounded-full bg-[#070d19]"><strong className="text-xl text-white">96%</strong><span className="text-[7px] font-bold text-cyan-300">{t("উপস্থিত", "PRESENT")}</span></div></div>
            <div className="min-w-0 flex-1 space-y-2">
              {[[t("মোট স্টাফ", "Total staff"), "126"], [t("ছুটিতে", "On leave"), "5"], [t("এই মাসের বেতন", "Monthly payroll"), "৳3.92M"]].map(([label,value]) => <div key={label} className="flex items-center justify-between gap-2 rounded-lg border border-white/[0.05] bg-white/[0.02] px-2.5 py-2 text-[8px]"><span className="truncate text-slate-500">{label}</span><strong className="shrink-0 text-white">{value}</strong></div>)}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[8px] font-bold text-emerald-400"><WalletCards size={11}/>{t("বেতন হিসাব ও পে-স্লিপ তৈরি", "Salary calculated and payslips ready")}</div>
        </Reveal>

        <Reveal className="platform-node rounded-3xl border border-amber-400/10 bg-[#070d19] p-5">
          <CardTitle icon={Boxes} title={t("ERP ও ইনভেন্টরি", "ERP & Inventory")} subtitle={t("কেনা, স্টক ও সরবরাহকারী", "Purchasing, stock and suppliers")} tone="text-amber-300" />
          <div className="mt-5 grid grid-cols-4 items-end gap-2 rounded-2xl border border-white/[0.05] bg-black/10 p-3">
            {[42,68,54,86,63,96,72,88].map((h,i)=><span key={i} className={`nova-data-bar rounded-t-sm ${i > 5 ? "bg-rose-400/70" : "bg-gradient-to-t from-amber-500/25 to-amber-300"}`} style={{height:`${h}px`,animationDelay:`${i*90}ms`}} />)}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">{[[t("পণ্য", "Products"),"4,860"],[t("লো স্টক", "Low stock"),"12"],[t("সাপ্লায়ার", "Suppliers"),"38"]].map(([label,value])=><div key={label}><strong className="block text-xs text-white">{value}</strong><span className="text-[7px] text-slate-600">{label}</span></div>)}</div>
        </Reveal>

        <Reveal index={1} className="platform-node rounded-3xl border border-emerald-400/10 bg-[#070d19] p-5">
          <CardTitle icon={Calculator} title={t("Accounting ও Finance", "Accounting & Finance")} subtitle={t("আয়, খরচ ও লাভ-ক্ষতি", "Income, expenses and P&L")} tone="text-emerald-300" />
          <div className="mt-5 grid grid-cols-2 gap-2">{[[t("মোট আয়", "Income"),"৳3.18M","text-emerald-300"],[t("মোট খরচ", "Expense"),"৳1.94M","text-rose-300"],[t("পাওনা", "Receivable"),"৳286K","text-amber-300"],[t("নিট লাভ", "Net profit"),"৳1.24M","text-blue-300"]].map(([label,value,tone])=><div key={label} className="rounded-xl border border-white/[0.055] bg-white/[0.025] p-3"><span className="text-[8px] text-slate-600">{label}</span><strong className={`mt-1 block text-sm ${tone}`}>{value}</strong></div>)}</div>
          <div className="mt-4 flex items-center gap-1.5 text-[8px] font-bold text-emerald-400"><PackageCheck size={11}/>{t("Profit & Loss রিপোর্ট আপডেট", "Profit & Loss report is updated")}</div>
        </Reveal>

        <Reveal index={2} className="platform-node overflow-hidden rounded-3xl border border-blue-400/10 bg-[#070d19] p-5">
          <CardTitle icon={Globe2} title={t("Cloud, Security ও Recovery", "Cloud, Security & Recovery")} subtitle={t("দ্রুত, নিরাপদ ও ফেরত আনা যায়", "Fast, protected and recoverable")} tone="text-blue-300" />
          <div className="relative mt-4 flex h-28 items-center justify-center">
            <span className="absolute left-[7%] top-[20%] size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]"/><span className="absolute right-[8%] top-[25%] size-2 rounded-full bg-violet-300 shadow-[0_0_14px_#c4b5fd]"/><span className="absolute bottom-[10%] left-[20%] size-2 rounded-full bg-blue-300 shadow-[0_0_14px_#93c5fd]"/><span className="absolute bottom-[13%] right-[18%] size-2 rounded-full bg-emerald-300 shadow-[0_0_14px_#6ee7b7]"/>
            <div className="nova-orbit absolute size-28 rounded-full border border-dashed border-blue-400/20"/><div className="nova-orbit-reverse absolute size-20 rounded-full border border-dashed border-violet-400/25"/>
            <div className="z-10 flex size-14 flex-col items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/[0.08]"><strong className="text-sm text-white">99.9%</strong><span className="text-[6px] font-black text-blue-300">UPTIME</span></div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[7px] font-bold text-slate-500"><span>{t("অটো স্কেল", "AUTO-SCALE")}</span><span>{t("এজ নিরাপত্তা", "EDGE SECURITY")}</span><span>{t("টাইম ট্রাভেল", "TIME TRAVEL")}</span></div>
        </Reveal>
      </div>

      <Reveal index={2} className="overflow-hidden rounded-3xl border border-violet-400/15 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,.1),transparent_48%),#070d19] p-5 sm:p-7">
        <div className="text-center"><span className="text-[9px] font-black uppercase tracking-[0.2em] text-violet-300">{t("একটি অর্ডারের অটোমেশন ম্যাপ", "One-order automation map")}</span><h3 className="mt-2 text-xl font-black text-white sm:text-2xl">{t("এক কাজ শেষ হলে পরের কাজ নিজে থেকেই শুরু", "Every completed step starts the next one automatically")}</h3><p className="mx-auto mt-2 max-w-2xl text-xs font-medium leading-5 text-slate-500">{t("কাস্টমারের মেসেজ থেকে শেষ রিপোর্ট পর্যন্ত—একই তথ্য আটটি ধাপে নিজে থেকেই যায়।", "From the first customer message to the final report, the same data moves through every step automatically.")}</p></div>
        <div className="module-rail relative mt-7 overflow-x-auto pb-2">
          <div className="nova-flow-line absolute left-[54px] right-[54px] top-[27px] h-px" />
          <div className="relative mx-auto flex min-w-[760px] justify-between gap-3">
            {flow.map((item,index)=>{const Icon=item.icon;return <div key={item.en} className="w-[78px] shrink-0 text-center"><span className={`relative mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#0b1220] shadow-xl ${item.tone}`}><Icon size={20}/><span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-blue-500 text-[7px] font-black text-white">{index+1}</span></span><strong className="mt-2 block text-[9px] text-slate-300">{lang === "bn" ? item.bn : item.en}</strong></div>})}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
