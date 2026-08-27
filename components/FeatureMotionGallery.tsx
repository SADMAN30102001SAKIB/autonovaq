"use client";

import {
  Bot,
  Boxes,
  Calculator,
  Check,
  CloudCog,
  Contact,
  DatabaseBackup,
  ShieldCheck,
  Target,
  Truck,
  WalletCards,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

type StoryType = "time" | "scale" | "stock" | "crm" | "payroll" | "accounts" | "courier" | "ads" | "ai" | "security";

type Story = {
  type: StoryType;
  icon: LucideIcon;
  number: string;
  title: { bn: string; en: string };
  description: { bn: string; en: string };
  tags: { bn: string; en: string }[];
  tone: string;
  glow: string;
};

const stories: Story[] = [
  { type: "time", icon: DatabaseBackup, number: "01", title: { bn: "Database Time Travel", en: "Database time travel" }, description: { bn: "ভুল করে order বা product মুছে গেলে নির্দিষ্ট second বেছে আগের অবস্থায় ফিরুন।", en: "Choose a precise second and restore orders or products deleted by mistake." }, tags: [{bn:"Second-level restore",en:"Second-level restore"},{bn:"PITR",en:"PITR"},{bn:"Safe recovery",en:"Safe recovery"}], tone: "text-blue-300", glow: "from-blue-500/15" },
  { type: "scale", icon: CloudCog, number: "02", title: { bn: "Traffic বাড়লে Auto Scale", en: "Capacity follows traffic" }, description: { bn: "Visitor বাড়লে নতুন edge capacity নিজে থেকে চালু হয়; traffic কমলে আবার কমে।", en: "New edge capacity appears as visitors rise and scales down when demand falls." }, tags: [{bn:"Serverless",en:"Serverless"},{bn:"Global edge",en:"Global edge"},{bn:"No RAM ceiling",en:"No RAM ceiling"}], tone: "text-violet-300", glow: "from-violet-500/15" },
  { type: "stock", icon: Boxes, number: "03", title: { bn: "Live Inventory Sync", en: "Live inventory sync" }, description: { bn: "Order, return, POS ও warehouse—সব জায়গার stock একই মুহূর্তে বদলে যায়।", en: "Orders, returns, POS and warehouses update the same stock in real time." }, tags: [{bn:"Low-stock alert",en:"Low-stock alert"},{bn:"Variant stock",en:"Variant stock"},{bn:"Multi-warehouse",en:"Multi-warehouse"}], tone: "text-amber-300", glow: "from-amber-500/15" },
  { type: "crm", icon: Contact, number: "04", title: { bn: "CRM Lead Journey", en: "CRM lead journey" }, description: { bn: "প্রথম message থেকে confirmed order পর্যন্ত প্রতিটি customer কোন ধাপে আছে দেখুন।", en: "See every customer move from first message to confirmed order." }, tags: [{bn:"Lead pipeline",en:"Lead pipeline"},{bn:"Follow-up",en:"Follow-up"},{bn:"Customer 360°",en:"Customer 360°"}], tone: "text-cyan-300", glow: "from-cyan-500/15" },
  { type: "payroll", icon: WalletCards, number: "05", title: { bn: "HRM ও Payroll Cycle", en: "HRM and payroll cycle" }, description: { bn: "Attendance, leave, overtime ও deduction থেকে salary এবং payslip নিজে তৈরি হয়।", en: "Attendance, leave, overtime and deductions automatically produce salary and payslips." }, tags: [{bn:"Attendance",en:"Attendance"},{bn:"Payslip",en:"Payslip"},{bn:"Tax & deduction",en:"Tax & deduction"}], tone: "text-fuchsia-300", glow: "from-fuchsia-500/15" },
  { type: "accounts", icon: Calculator, number: "06", title: { bn: "Accounting Live Flow", en: "Live accounting flow" }, description: { bn: "Sale, expense, courier charge ও payment এলেই ledger এবং profit report update হয়।", en: "Sales, expenses, courier fees and payments update ledgers and profit reports." }, tags: [{bn:"Ledger",en:"Ledger"},{bn:"Cash flow",en:"Cash flow"},{bn:"Profit & Loss",en:"Profit & Loss"}], tone: "text-emerald-300", glow: "from-emerald-500/15" },
  { type: "courier", icon: Truck, number: "07", title: { bn: "One-click Courier Journey", en: "One-click courier journey" }, description: { bn: "Booking থেকে delivery পর্যন্ত status নিজে sync হয় এবং customer update পায়।", en: "Status syncs automatically from booking to delivery while customers stay informed." }, tags: [{bn:"Auto booking",en:"Auto booking"},{bn:"Tracking",en:"Tracking"},{bn:"Status SMS",en:"Status SMS"}], tone: "text-sky-300", glow: "from-sky-500/15" },
  { type: "ads", icon: Target, number: "08", title: { bn: "Stock শেষ হলে Ad Pause", en: "Ads pause at zero stock" }, description: { bn: "Product stock শূন্য হলে সেই product-এর Meta ad বন্ধ হয়—অকারণে dollar burn হয় না।", en: "When product stock reaches zero, its Meta ad pauses before budget is wasted." }, tags: [{bn:"Product mapping",en:"Product mapping"},{bn:"Instant pause",en:"Instant pause"},{bn:"Cost saved",en:"Cost saved"}], tone: "text-rose-300", glow: "from-rose-500/15" },
  { type: "ai", icon: Bot, number: "09", title: { bn: "AI Live Reply", en: "AI live reply" }, description: { bn: "Messenger ও shop chat-এ বাংলা-ইংরেজিতে product, price ও order প্রশ্নের উত্তর দেয়।", en: "Answers product, price and order questions in Bangla or English across chat channels." }, tags: [{bn:"Bangla AI",en:"Bangla AI"},{bn:"Product-aware",en:"Product-aware"},{bn:"24/7 reply",en:"24/7 reply"}], tone: "text-indigo-300", glow: "from-indigo-500/15" },
  { type: "security", icon: ShieldCheck, number: "10", title: { bn: "Live Security Shield", en: "Live security shield" }, description: { bn: "Risky request, blocked IP এবং unusual login real time-এ detect ও stop করে।", en: "Risky requests, blocked IPs and unusual logins are detected and stopped in real time." }, tags: [{bn:"Threat detect",en:"Threat detect"},{bn:"IP block",en:"IP block"},{bn:"Activity log",en:"Activity log"}], tone: "text-teal-300", glow: "from-teal-500/15" },
];

function MotionVisual({ type, lang }: { type: StoryType; lang: "bn" | "en" }) {
  if (type === "time") return (
    <div className="feature-motion-stage p-4" aria-hidden>
      <div className="flex justify-between text-[7px] font-black text-slate-700"><span>AUG 21</span><span>AUG 24</span><span>NOW</span></div>
      <div className="relative mt-7 h-12"><div className="absolute inset-x-2 top-2 h-px bg-white/[0.09]"/>{[5,27,50,73,95].map((left,index)=><span key={left} className="absolute top-[2px] size-3 -translate-x-1/2 rounded-full border-2 border-[#07101c] bg-slate-700" style={{left:`${left}%`}}><span className={`absolute inset-0 rounded-full ${index===2?"feature-time-pulse bg-blue-300":""}`}/></span>)}<span className="feature-time-cursor absolute top-[-3px] size-5 -translate-x-1/2 rounded-full border border-blue-300/40 bg-blue-400/10"><span className="absolute inset-[6px] rounded-full bg-blue-300 shadow-[0_0_15px_#60a5fa]"/></span><span className="feature-time-label absolute top-7 rounded-md bg-blue-500/10 px-2 py-1 text-[7px] font-black text-blue-300">24 AUG · 02:14:08</span></div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-white/[0.025] px-3 py-2 text-[8px]"><span className="text-slate-600">Restore point selected</span><strong className="text-blue-300">RESTORE</strong></div>
    </div>
  );

  if (type === "scale") return (
    <div className="feature-motion-stage grid grid-cols-[1fr_1.1fr] gap-3 p-4" aria-hidden>
      <div className="flex h-[112px] items-end gap-1 rounded-xl bg-black/10 p-3">{[25,38,31,58,46,76,62,92,71,84].map((height,index)=><span key={index} className="feature-traffic-bar flex-1 rounded-t-sm bg-violet-400" style={{height:`${height}%`,animationDelay:`${index*90}ms`}}/>)}</div>
      <div className="space-y-2">{["EDGE CPU 01","EDGE CPU 02","EDGE CPU 03"].map((name,index)=><div key={name} className="feature-server-row flex items-center gap-2 rounded-lg bg-white/[0.025] px-2.5 py-2" style={{animationDelay:`${index*.55}s`}}><span className="size-1.5 rounded-full bg-emerald-400"/><span className="text-[7px] font-bold text-slate-600">{name}</span><strong className="ml-auto text-[7px] text-emerald-400">AUTO</strong></div>)}<div className="pt-1 text-center text-[7px] font-black text-cyan-300"><Zap size={9} className="mr-1 inline"/> SCALE IN MS</div></div>
    </div>
  );

  if (type === "stock") return (
    <div className="feature-motion-stage relative overflow-hidden p-4" aria-hidden>
      <div className="feature-stock-scan absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-[0_0_14px_#fbbf24]"/>
      <div className="grid grid-cols-4 gap-2">{[["Shirt","84%"],["Shoes","62%"],["Bag","18%"],["Watch","47%"]].map(([name,value],index)=><div key={name} className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-2"><div className={`feature-stock-box mx-auto h-11 rounded-lg ${index===2?"bg-rose-400/10":"bg-amber-400/[0.07]"}`} style={{animationDelay:`${index*.2}s`}}/><strong className="mt-2 block text-[7px] text-slate-400">{name}</strong><span className={`text-[7px] font-black ${index===2?"text-rose-300":"text-emerald-400"}`}>{value}</span></div>)}</div>
      <div className="mt-3 flex justify-between text-[7px] font-bold text-slate-600"><span>POS ✓</span><span>WAREHOUSE ✓</span><span>STORE ✓</span></div>
    </div>
  );

  if (type === "crm") return (
    <div className="feature-motion-stage relative p-4" aria-hidden>
      <div className="space-y-2">{[["NEW LEAD","92%","bg-cyan-400/10"],["FOLLOW-UP","69%","bg-blue-400/10"],["READY TO BUY","46%","bg-violet-400/10"],["CUSTOMER","25%","bg-emerald-400/10"]].map(([label,width,color],index)=><div key={label} className="relative h-7 overflow-hidden rounded-lg bg-white/[0.025]" style={{width,marginInline:"auto"}}><div className={`feature-crm-fill absolute inset-y-0 left-0 ${color}`} style={{animationDelay:`${index*.35}s`}}/><span className="relative z-10 flex h-full items-center justify-center text-[7px] font-black text-slate-500">{label}</span></div>)}</div>
      <span className="feature-lead-dot absolute left-1/2 top-5 size-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]"/>
    </div>
  );

  if (type === "payroll") return (
    <div className="feature-motion-stage flex items-center gap-5 p-4" aria-hidden>
      <div className="feature-payroll-ring relative flex size-28 shrink-0 items-center justify-center rounded-full"><div className="absolute inset-[7px] rounded-full bg-[#07101c]"/><div className="relative text-center"><strong className="block text-lg text-white">126</strong><span className="text-[7px] font-black text-fuchsia-300">STAFF PAID</span></div></div>
      <div className="min-w-0 flex-1 space-y-2">{[["Attendance","96%"],["Overtime","142h"],["Deductions","৳28K"],["Payroll","৳3.92M"]].map(([label,value],index)=><div key={label} className="feature-payroll-row flex items-center justify-between rounded-lg bg-white/[0.025] px-2.5 py-2 text-[7px]" style={{animationDelay:`${index*.4}s`}}><span className="text-slate-600">{label}</span><strong className="text-white">{value}</strong></div>)}</div>
    </div>
  );

  if (type === "accounts") return (
    <div className="feature-motion-stage grid grid-cols-[1.2fr_.8fr] gap-3 p-4" aria-hidden>
      <div className="space-y-3 pt-2"><div className="relative h-8 overflow-hidden rounded-full bg-emerald-400/[0.04]"><span className="feature-cash-in absolute top-1/2 -translate-y-1/2 rounded-full bg-emerald-400/15 px-2 py-1 text-[7px] font-black text-emerald-300">+ ৳48,000</span></div><div className="relative h-8 overflow-hidden rounded-full bg-rose-400/[0.04]"><span className="feature-cash-out absolute top-1/2 -translate-y-1/2 rounded-full bg-rose-400/15 px-2 py-1 text-[7px] font-black text-rose-300">− ৳12,400</span></div><div className="relative h-px bg-white/[0.06]"><span className="feature-ledger-dot absolute -top-1 size-2 rounded-full bg-emerald-300"/></div></div>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] text-center"><span className="text-[7px] font-bold text-slate-600">NET PROFIT</span><strong className="mt-1 text-lg text-white">৳1.24M</strong><span className="mt-1 text-[7px] font-black text-emerald-400">+21.2%</span></div>
    </div>
  );

  if (type === "courier") return (
    <div className="feature-motion-stage relative overflow-hidden p-4" aria-hidden>
      <svg viewBox="0 0 420 125" preserveAspectRatio="none" className="absolute inset-x-4 top-3 h-[120px] w-[calc(100%_-_2rem)]"><path d="M22 94 C92 10, 154 112, 225 45 S334 96, 397 23" fill="none" stroke="#38bdf8" strokeOpacity=".24" strokeWidth="2" strokeDasharray="6 7"/></svg>
      {[{x:"6%",y:"74%",n:"BOOKED"},{x:"50%",y:"34%",n:"TRANSIT"},{x:"91%",y:"16%",n:"DELIVERED"}].map((node,index)=><div key={node.n} className="absolute -translate-x-1/2 text-center" style={{left:node.x,top:node.y}}><span className={`feature-route-node mx-auto block size-3 rounded-full ${index===2?"bg-emerald-300":"bg-sky-300"}`} style={{animationDelay:`${index*.65}s`}}/><span className="mt-2 block text-[6px] font-black text-slate-600">{node.n}</span></div>)}
      <span className="feature-courier-truck absolute flex size-8 items-center justify-center rounded-xl border border-sky-400/20 bg-[#0b1826] text-sky-300 shadow-xl"><Truck size={14}/></span>
    </div>
  );

  if (type === "ads") return (
    <div className="feature-motion-stage grid grid-cols-[1fr_auto] items-center gap-4 p-4" aria-hidden>
      <div className="rounded-2xl border border-white/[0.055] bg-white/[0.025] p-3"><div className="flex items-center gap-3"><span className="feature-ad-product flex size-12 items-center justify-center rounded-xl bg-rose-400/[0.08]"><Boxes size={18} className="text-rose-300"/></span><div><strong className="block text-[9px] text-white">Signature Jacket</strong><span className="feature-stock-zero text-[8px] font-black text-rose-300">STOCK: 0</span></div></div><div className="mt-3 flex items-center justify-between text-[7px]"><span className="text-slate-600">Meta campaign #A-204</span><span className="feature-ad-status font-black text-rose-300">PAUSED</span></div></div>
      <div><div className="feature-ad-toggle relative h-7 w-14 rounded-full border border-rose-400/20 bg-rose-400/10"><span className="feature-ad-toggle-knob absolute top-1 size-5 rounded-full bg-rose-300 shadow-[0_0_14px_rgba(251,113,133,.55)]"/></div><div className="mt-2 text-center text-[6px] font-black text-slate-600">AUTO CONTROL</div></div>
    </div>
  );

  if (type === "ai") return (
    <div className="feature-motion-stage space-y-3 p-4" aria-hidden>
      <div className="ml-auto max-w-[76%] rounded-2xl rounded-br-sm bg-blue-500/15 px-3 py-2 text-[8px] text-blue-100">{lang==="bn"?"কালো শার্টটি কি স্টকে আছে?":"Is the black shirt in stock?"}</div>
      <div className="feature-typing flex w-16 gap-1 rounded-2xl rounded-bl-sm bg-white/[0.045] px-3 py-3">{[0,1,2].map(i=><span key={i} className="feature-typing-dot size-1.5 rounded-full bg-violet-300" style={{animationDelay:`${i*.18}s`}}/>)}</div>
      <div className="feature-ai-reply max-w-[86%] rounded-2xl rounded-bl-sm border border-violet-400/10 bg-violet-400/[0.07] px-3 py-2 text-[8px] leading-4 text-slate-300">{lang==="bn"?"হ্যাঁ, M ও L size আছে। আজ অর্ডার করলে ঢাকায় কাল delivery হবে।":"Yes—sizes M and L are available. Order today for Dhaka delivery tomorrow."}</div>
      <div className="flex items-center gap-1 text-[7px] font-black text-emerald-400"><Check size={9}/> PRODUCT DATA VERIFIED</div>
    </div>
  );

  return (
    <div className="feature-motion-stage relative flex items-center justify-center overflow-hidden p-4" aria-hidden>
      <div className="feature-security-orbit absolute size-36 rounded-full border border-dashed border-teal-400/20"/>
      <div className="feature-shield relative flex size-24 items-center justify-center overflow-hidden rounded-[30px] border border-teal-400/20 bg-teal-400/[0.06]"><ShieldCheck size={38} className="text-teal-300"/><span className="feature-shield-scan absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent shadow-[0_0_14px_#5eead4]"/></div>
      {["left-[8%] top-[20%]","right-[9%] top-[26%]","bottom-[14%] left-[14%]","bottom-[12%] right-[15%]"].map((position,index)=><span key={position} className={`feature-threat absolute ${position} size-2 rounded-full bg-rose-400 shadow-[0_0_12px_#fb7185]`} style={{animationDelay:`${index*.55}s`}}/>)}
      <span className="absolute bottom-3 rounded-full bg-emerald-400/[0.08] px-3 py-1 text-[7px] font-black text-emerald-400">2,841 REQUESTS PROTECTED</span>
    </div>
  );
}

export default function FeatureMotionGallery() {
  const { lang, t } = useLanguage();

  return (
    <section aria-labelledby="motion-feature-title" className="mb-14">
      <Reveal className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div><span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">{t("১০টি লাইভ ফিচার স্টোরি", "10 live feature stories")}</span><h3 id="motion-feature-title" className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">{t("ফিচার পড়বেন না—কাজ করতে দেখুন", "Don’t just read features—watch them work")}</h3><p className="mt-2 max-w-2xl text-xs font-medium leading-5 text-slate-500 sm:text-sm">{t("প্রতিটি animation একটি আলাদা feature এবং তার subfeature কীভাবে কাজ করে তা দেখায়।", "Every animation demonstrates a different feature and the subfeatures working underneath it.")}</p></div>
        <span className="shrink-0 text-[9px] font-bold text-slate-600">{t("মোবাইলে swipe করুন →", "Swipe on mobile →")}</span>
      </Reveal>

      <div className="module-rail -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:gap-5">
        {stories.map((story,index)=>{
          const Icon=story.icon;
          return (
            <Reveal key={story.type} index={index%4} className="feature-motion-card relative min-w-[86vw] snap-center overflow-hidden rounded-3xl border border-white/[0.075] bg-[#080e19] p-5 shadow-[0_24px_70px_rgba(0,0,0,.22)] sm:min-w-[390px] md:min-w-0 sm:p-6">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${story.glow} via-transparent to-transparent opacity-55`}/><span className="absolute right-5 top-1 text-6xl font-black tracking-[-0.08em] text-white/[0.025]">{story.number}</span>
              <div className="relative"><div className="flex items-start gap-3"><span className={`flex size-10 shrink-0 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.035] ${story.tone}`}><Icon size={18}/></span><div><span className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-600">FEATURE {story.number}</span><h4 className="mt-1 text-lg font-black text-white sm:text-xl">{story.title[lang]}</h4></div></div><p className="mt-4 min-h-10 text-xs font-medium leading-5 text-slate-500 sm:text-sm">{story.description[lang]}</p><MotionVisual type={story.type} lang={lang}/><div className="mt-4 flex flex-wrap gap-2">{story.tags.map((tag,tagIndex)=><span key={tag.en} className="feature-subchip rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[7px] font-black text-slate-500 sm:text-[8px]" style={{animationDelay:`${tagIndex*.45}s`}}>{tag[lang]}</span>)}</div></div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
