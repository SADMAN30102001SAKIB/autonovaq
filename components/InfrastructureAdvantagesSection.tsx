"use client";

import {
  ArrowRight,
  BadgeDollarSign,
  Boxes,
  Check,
  CloudCog,
  DatabaseBackup,
  Facebook,
  Gauge,
  Globe2,
  PackageX,
  PauseCircle,
  RefreshCcw,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

function TimeTravelVisual() {
  return (
    <div className="relative mt-6 rounded-2xl border border-blue-400/10 bg-[#060d1a] p-4">
      <div className="flex items-center justify-between text-[8px] font-bold text-slate-600"><span>AUG 21</span><span>AUG 24</span><span>NOW</span></div>
      <div className="relative mt-4 h-8">
        <div className="absolute left-1 right-1 top-3 h-px bg-white/[0.09]" />
        {[6, 25, 47, 68, 91].map((left, index) => <span key={left} className={`absolute top-[7px] size-3 -translate-x-1/2 rounded-full border-2 border-[#060d1a] ${index === 2 ? "bg-blue-400 shadow-[0_0_16px_#3b82f6]" : "bg-slate-700"}`} style={{ left: `${left}%` }} />)}
        <span className="absolute left-[47%] top-6 -translate-x-1/2 whitespace-nowrap rounded-md bg-blue-500/10 px-2 py-1 text-[7px] font-black text-blue-300">24 AUG · 02:14:08</span>
      </div>
      <div className="mt-6 flex items-center justify-between rounded-xl bg-white/[0.03] p-2.5"><span className="text-[8px] text-slate-500">Restore point selected</span><span className="inline-flex items-center gap-1 text-[8px] font-black text-blue-300"><RefreshCcw size={9} /> RESTORE</span></div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div className="mt-6 grid grid-cols-[.8fr_1.2fr] gap-3">
      <div className="rounded-2xl border border-violet-400/10 bg-[#060d1a] p-3">
        <span className="text-[7px] font-bold text-slate-600">LIVE TRAFFIC</span>
        <div className="mt-4 flex h-20 items-end gap-1">{[22, 34, 30, 56, 44, 78, 62, 92, 70, 84].map((height, index) => <span key={index} className="nova-data-bar flex-1 rounded-t-sm bg-violet-400" style={{ height: `${height}%`, opacity: 0.28 + index * 0.05, animationDelay: `${index * 80}ms` }} />)}</div>
      </div>
      <div className="space-y-2 rounded-2xl border border-cyan-400/10 bg-[#060d1a] p-3">
        {["EDGE CPU 01", "EDGE CPU 02", "EDGE CPU 03"].map((name, index) => <div key={name} className="flex items-center gap-2 rounded-lg bg-white/[0.03] p-2"><span className={`size-1.5 rounded-full ${index === 2 ? "bg-cyan-400 nova-live-dot" : "bg-emerald-400"}`} /><span className="text-[7px] font-bold text-slate-500">{name}</span><span className="ml-auto text-[7px] font-black text-emerald-400">AUTO</span></div>)}
        <div className="flex items-center justify-center gap-1 pt-1 text-[7px] font-bold text-cyan-300"><Zap size={9} /> scale in milliseconds</div>
      </div>
    </div>
  );
}

function BandwidthVisual() {
  return (
    <div className="mt-6 flex items-center gap-5 rounded-2xl border border-emerald-400/10 bg-[#060d1a] p-4">
      <div className="relative flex size-24 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#34d399_0_84%,rgba(255,255,255,.05)_84%_100%)]"><div className="absolute inset-[6px] rounded-full bg-[#07101d]" /><div className="relative text-center"><strong className="block text-lg font-black text-white">৳0</strong><span className="text-[7px] font-bold text-emerald-400">DELIVERY FEE</span></div></div>
      <div className="min-w-0 flex-1"><div className="text-[8px] font-bold text-slate-600">EDGE DELIVERY</div><strong className="mt-1 block text-xl font-black text-white">12.8 TB</strong><div className="mt-3 h-1.5 rounded-full bg-white/[0.05]"><div className="h-full w-[84%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" /></div><div className="mt-2 text-[7px] text-slate-600">No VPS bandwidth surprise</div></div>
    </div>
  );
}

function EdgeVisual() {
  return (
    <div className="relative mt-6 h-[142px] overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#060d1a]">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,#67e8f9_1px,transparent_1px)] [background-size:12px_12px]" />
      <svg viewBox="0 0 360 142" className="absolute inset-0 h-full w-full" aria-hidden><path d="M30 97 C85 25, 139 117, 187 55 S280 92, 334 34" fill="none" stroke="#22d3ee" strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="5 7" /><path d="M31 97 L188 55 L333 34" fill="none" stroke="#818cf8" strokeOpacity=".28" /></svg>
      {[{x:"8%",y:"68%",n:"Visitor"},{x:"50%",y:"35%",n:"Best edge"},{x:"90%",y:"20%",n:"Origin"}].map((node,index)=><div key={node.n} className="absolute -translate-x-1/2 -translate-y-1/2 text-center" style={{left:node.x,top:node.y}}><span className={`mx-auto block size-3 rounded-full ${index===1?"bg-cyan-300 shadow-[0_0_18px_#22d3ee]":"bg-violet-400"}`} /><span className="mt-2 block whitespace-nowrap text-[7px] font-bold text-slate-500">{node.n}</span></div>)}
      <span className="absolute bottom-3 right-3 rounded-full bg-cyan-400/10 px-2 py-1 text-[7px] font-black text-cyan-300">SMART ROUTING</span>
    </div>
  );
}

function CacheVisual() {
  return (
    <div className="mt-6 rounded-2xl border border-amber-400/10 bg-[#060d1a] p-4">
      <div className="flex items-center justify-between">
        {[{n:"HOME",ms:"18ms"},{n:"PRODUCT",ms:"22ms"},{n:"CART",ms:"16ms"},{n:"CHECKOUT",ms:"24ms"}].map((page,index)=><div key={page.n} className="relative flex flex-col items-center"><span className={`flex size-9 items-center justify-center rounded-xl border ${index===1?"border-amber-400/30 bg-amber-400/10 text-amber-300":"border-white/[0.07] bg-white/[0.025] text-slate-500"}`}><Boxes size={14} /></span><span className="mt-2 text-[6px] font-black text-slate-600">{page.n}</span><span className="text-[7px] font-black text-emerald-400">{page.ms}</span></div>)}
      </div>
      <div className="relative mx-5 mt-4 h-px bg-white/[0.07]"><div className="nova-flow-line absolute inset-0" /></div>
      <div className="mt-4 flex items-center justify-between text-[7px]"><span className="text-slate-600">Cache hit ratio</span><strong className="text-amber-300">94.8%</strong></div>
    </div>
  );
}

function AdVisual() {
  const nodes = [
    { icon: PackageX, label: "Stock = 0", tone: "text-rose-300 bg-rose-400/10" },
    { icon: Zap, label: "Rule fires", tone: "text-violet-300 bg-violet-400/10" },
    { icon: PauseCircle, label: "Ad paused", tone: "text-blue-300 bg-blue-400/10" },
    { icon: BadgeDollarSign, label: "Spend saved", tone: "text-emerald-300 bg-emerald-400/10" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-blue-400/10 bg-[#060d1a] p-4">
      <div className="relative flex min-w-[350px] items-center justify-between gap-2">{nodes.map((node,index)=>{const Icon=node.icon;return <div key={node.label} className="relative z-10 flex flex-col items-center"><span className={`flex size-10 items-center justify-center rounded-xl ${node.tone}`}><Icon size={16} /></span><span className="mt-2 text-[7px] font-bold text-slate-500">{node.label}</span>{index<nodes.length-1&&<ArrowRight size={11} className="absolute -right-5 top-4 text-slate-700" />}</div>})}</div>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-emerald-400/[0.05] px-3 py-2 text-[8px]"><span className="inline-flex items-center gap-1.5 font-bold text-emerald-400"><Check size={10} /> Protected while you sleep</span><strong className="text-white">৳3,240 saved</strong></div>
    </div>
  );
}

const benefits = [
  { id: "time", number: "01", icon: DatabaseBackup, eyebrow: { bn: "Point-in-Time Recovery", en: "Point-in-Time Recovery" }, title: { bn: "ডেটাবেজ টাইম ট্রাভেল", en: "Database time travel" }, description: { bn: "ভুল করে অর্ডার বা প্রোডাক্ট ডিলিট? শুধু ব্যাকআপ নয়—নির্দিষ্ট দিন, ঘণ্টা, মিনিট ও সেকেন্ডের ডেটাবেজ অবস্থায় ফিরে যান।", en: "Deleted an order or product by mistake? Go beyond backups and restore the database to a precise day, hour, minute and second." }, visual: TimeTravelVisual },
  { id: "scale", number: "02", icon: ServerCog, eyebrow: { bn: "Serverless Auto-Scale", en: "Serverless Auto-Scale" }, title: { bn: "ট্রাফিক বাড়লে নিজেই স্কেল", en: "Traffic rises. Capacity follows." }, description: { bn: "একটি VPS-এর CPU বা RAM-এ আটকে নয়। Cloudflare Workers গ্লোবাল নেটওয়ার্কে অটো-স্কেল করে; ডিমান্ড কমলে রিসোর্সও কমে।", en: "Not trapped inside one VPS, CPU or RAM ceiling. Cloudflare Workers scale automatically across the global network as demand changes." }, visual: ScaleVisual },
  { id: "bandwidth", number: "03", icon: BadgeDollarSign, eyebrow: { bn: "Zero VPS Bandwidth Bill", en: "Zero VPS Bandwidth Bill" }, title: { bn: "ব্যান্ডউইথ সারপ্রাইজ: ৳০", en: "No bandwidth-bill surprise" }, description: { bn: "এজ ক্যাশড কনটেন্ট ডেলিভারির জন্য AutoNovaQ আলাদা VPS bandwidth charge যোগ করে না—হাই ট্রাফিকের পরও অপ্রত্যাশিত বিল নয়।", en: "AutoNovaQ does not add a separate VPS bandwidth line-item for edge-cached delivery, so a traffic spike does not become a surprise hosting bill." }, visual: BandwidthVisual },
  { id: "edge", number: "04", icon: Globe2, eyebrow: { bn: "Anycast Edge Routing", en: "Anycast Edge Routing" }, title: { bn: "সেরা উপলভ্য এজ থেকে ডেলিভারি", en: "Delivered from the best available edge" }, description: { bn: "Anycast routing ভিজিটরকে কম লেটেন্সি ও পর্যাপ্ত ক্যাপাসিটিসহ এজে পাঠায়—একটি দূরের সার্ভারের ওপর নির্ভরতা কমে।", en: "Anycast routing sends visitors to an edge with low latency and available capacity, reducing dependence on one distant origin server." }, visual: EdgeVisual },
  { id: "cache", number: "05", icon: Gauge, eyebrow: { bn: "CDN + Smart Cache", en: "CDN + Smart Cache" }, title: { bn: "শুধু লোড নয়—প্রতিটি ক্লিক দ্রুত", en: "Not just load time—every click feels fast" }, description: { bn: "ইমেজ, CSS, JavaScript ও উপযুক্ত পেজ কনটেন্ট এজে ক্যাশ হয়; প্রোডাক্ট থেকে কার্টে যাওয়ার অভিজ্ঞতাও দ্রুত ও মসৃণ থাকে।", en: "Images, CSS, JavaScript and eligible page content stay cached at the edge, keeping product-to-cart navigation responsive." }, visual: CacheVisual },
  { id: "ads", number: "06", icon: Facebook, eyebrow: { bn: "Auto Ad Guard", en: "Auto Ad Guard" }, title: { bn: "স্টক ০ হলে বিজ্ঞাপনও ০", en: "Stock hits zero. The ad stops." }, description: { bn: "রাত ৩টায়ও কোনো প্রোডাক্ট আউট-অফ-স্টক হলে সংশ্লিষ্ট Facebook বিজ্ঞাপন অটো-পজ হয়—অকারণে ডলার বার্ন বন্ধ।", en: "Even at 3 AM, when a product sells out, its mapped Facebook ad is automatically paused to stop wasted spend." }, visual: AdVisual },
];

export default function InfrastructureAdvantagesSection() {
  const { lang, t } = useLanguage();
  return (
    <section id="infrastructure" className="relative isolate overflow-hidden bg-[#030711] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_32%_at_15%_18%,rgba(14,165,233,.08),transparent_75%),radial-gradient(40%_35%_at_90%_70%,rgba(139,92,246,.08),transparent_75%)]" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300"><ShieldCheck size={12} /> {t("যা অন্য কোথাও সহজে পাবেন না", "Advantages that are hard to copy")}</span>
          <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">{t("ইনফ্রাস্ট্রাকচারও", "Infrastructure is")}
            <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">{t("একটি বিজনেস ফিচার।", "a business feature.")}</span>
          </h2>
          <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-400 sm:text-lg">{t("গতি, রিকভারি, স্কেলিং ও বিজ্ঞাপন সুরক্ষা—এসব ব্যাকএন্ডের শব্দ নয়; এগুলো সরাসরি আপনার বিক্রি, খরচ ও মানসিক শান্তিতে প্রভাব ফেলে।", "Speed, recovery, scaling and ad protection are not backend buzzwords—they directly affect revenue, cost and peace of mind.")}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const Visual = benefit.visual;
            return (
              <Reveal key={benefit.id} index={index % 3} className="premium-bento group relative overflow-hidden rounded-3xl p-5 sm:p-7 lg:p-8">
                <div className="absolute right-5 top-3 text-7xl font-black tracking-[-0.08em] text-white/[0.025]">{benefit.number}</div>
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-400/[0.07] text-blue-300"><Icon size={20} /></span>
                    <div><span className="text-[9px] font-black uppercase tracking-[0.19em] text-cyan-300">{benefit.eyebrow[lang]}</span><h3 className="mt-1.5 text-xl font-black tracking-tight text-white sm:text-2xl">{benefit.title[lang]}</h3></div>
                  </div>
                  <p className="mt-4 text-xs font-medium leading-6 text-slate-500 sm:text-sm">{benefit.description[lang]}</p>
                  <Visual />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal index={2} className="mt-7 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-[10px] leading-5 text-slate-600 sm:text-xs">
          <span className="font-black text-slate-400">{t("স্বচ্ছতা:", "Transparency:")}</span> {t("Cloudflare-এর routing ভৌগোলিকভাবে সবচেয়ে কাছের লোকেশন না-ও বেছে নিতে পারে; reliability ও available capacity বেশি ভালো হলে সেটিই অগ্রাধিকার পায়। নিরাপত্তা ঝুঁকি উল্লেখযোগ্যভাবে কমে, তবে কোনো সিস্টেমই শতভাগ hack-proof নয়।", "Cloudflare routing may select an edge other than the geographically closest when reliability or available capacity is better. The architecture substantially reduces attack surface, but no system should be described as 100% hack-proof.")}
        </Reveal>
      </div>
    </section>
  );
}
