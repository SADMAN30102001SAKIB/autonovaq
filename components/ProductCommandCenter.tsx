import Image from "next/image";
import {
  BarChart3,
  Bell,
  Bot,
  Boxes,
  Calculator,
  Check,
  ChevronDown,
  CircleDollarSign,
  CloudCog,
  Contact,
  Eye,
  Flag,
  History,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  PackageCheck,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Target,
  TicketPercent,
  TrendingUp,
  Truck,
  UsersRound,
  WalletCards,
} from "lucide-react";

export type ProductView = "overview" | "storefront" | "operations";

type Props = {
  view?: ProductView;
  lang?: "bn" | "en";
  className?: string;
};

const chartPoints = "0,154 34,136 70,143 106,94 142,110 178,58 214,76 250,42 286,72 322,29 358,62 394,48 430,82 466,28 502,52 538,18 574,46 610,22 646,38";
const areaPoints = `0,190 ${chartPoints} 646,190`;

const copy = {
  en: {
    overview: "Executive overview",
    storefront: "Commerce storefront",
    operations: "Operations cloud",
    revenue: "Net revenue",
    orders: "Orders today",
    conversion: "Conversion",
    profit: "Net profit",
    live: "Live system",
  },
  bn: {
    overview: "এক্সিকিউটিভ ওভারভিউ",
    storefront: "কমার্স স্টোরফ্রন্ট",
    operations: "অপারেশনস ক্লাউড",
    revenue: "নিট রেভিনিউ",
    orders: "আজকের অর্ডার",
    conversion: "কনভার্শন",
    profit: "নিট প্রফিট",
    live: "সিস্টেম লাইভ",
  },
};

function MiniStat({
  label,
  value,
  change,
  tone,
}: {
  label: string;
  value: string;
  change: string;
  tone: "blue" | "violet" | "emerald";
}) {
  const tones = {
    blue: "from-blue-500/18 to-cyan-500/5 text-blue-300 border-blue-400/15",
    violet:
      "from-violet-500/18 to-fuchsia-500/5 text-violet-300 border-violet-400/15",
    emerald:
      "from-emerald-500/18 to-teal-500/5 text-emerald-300 border-emerald-400/15",
  };

  return (
    <div
      className={`rounded-xl border bg-gradient-to-br ${tones[tone]} p-3 sm:p-4 min-w-0`}>
      <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-slate-400 truncate">
        {label}
      </div>
      <div className="mt-1.5 flex items-end justify-between gap-2">
        <strong className="text-base sm:text-xl text-white tracking-tight truncate">
          {value}
        </strong>
        <span className="text-[9px] sm:text-[10px] text-emerald-400 shrink-0">
          {change}
        </span>
      </div>
    </div>
  );
}

const adminMenuGroups = [
  {
    label: "COMMERCE",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", id: "overview" },
      { icon: ShoppingBag, label: "Products", id: "products" },
      { icon: Boxes, label: "Categories", id: "categories" },
      { icon: SlidersHorizontal, label: "Attributes", id: "attributes" },
      { icon: Flag, label: "Product Flags", id: "flags" },
      { icon: Boxes, label: "Inventory", id: "inventory" },
      { icon: ShoppingBag, label: "Orders", id: "orders" },
      { icon: History, label: "Incomplete Orders", id: "incomplete" },
      { icon: UsersRound, label: "Customers", id: "customers" },
      { icon: MessageSquare, label: "Reviews", id: "reviews" },
      { icon: TicketPercent, label: "Coupons", id: "coupons" },
    ],
  },
  {
    label: "GROWTH",
    items: [
      { icon: BarChart3, label: "Analytics", id: "analytics" },
      { icon: Eye, label: "Visitors", id: "visitors" },
      { icon: Target, label: "Ad Management", id: "ads" },
      { icon: TrendingUp, label: "Ad Analytics", id: "ad-analytics" },
      { icon: Megaphone, label: "Announcements", id: "announcements" },
      { icon: Bot, label: "AI Assistant", id: "ai" },
    ],
  },
  {
    label: "OPERATIONS",
    items: [
      { icon: Contact, label: "CRM", id: "crm" },
      { icon: UsersRound, label: "HRM", id: "hrm" },
      { icon: WalletCards, label: "Payroll", id: "payroll" },
      { icon: Boxes, label: "ERP", id: "erp" },
      { icon: Calculator, label: "Accounting", id: "accounting" },
      { icon: Truck, label: "Couriers", id: "courier" },
    ],
  },
  {
    label: "SYSTEM",
    items: [
      { icon: History, label: "Activity Log", id: "activity" },
      { icon: UsersRound, label: "Staff", id: "staff" },
      { icon: ShieldCheck, label: "Blocked IPs", id: "blocked" },
      { icon: CloudCog, label: "Cloud Usage", id: "cloud" },
      { icon: TrendingUp, label: "System Health", id: "health" },
      { icon: Settings, label: "Settings", id: "settings" },
    ],
  },
];

function SideRail({ view }: { view: ProductView }) {

  const active = view === "storefront" ? "orders" : view === "operations" ? "analytics" : "overview";

  return (
    <aside className="hidden sm:flex w-[154px] lg:w-[188px] shrink-0 flex-col overflow-hidden border-r border-white/[0.07] bg-[#070b15]/85 p-2.5 lg:p-3">
      <div className="flex items-center gap-2 px-1.5 pb-2.5">
        <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 shadow-[0_0_24px_rgba(99,102,241,.3)]">
          <Image src="/assets/autonovaq-mark.png" alt="" width={20} height={20} className="size-5 object-contain" />
        </span>
        <span className="text-xs font-extrabold tracking-tight text-white">
          NOVA<span className="text-blue-400">Q</span>
        </span>
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_bottom,black_88%,transparent)]">
        <nav className="nova-sidebar-scroll space-y-2 pb-8">
          {adminMenuGroups.map(group => (
            <div key={group.label}>
              <div className="mb-0.5 px-1.5 text-[5px] font-black tracking-[0.16em] text-blue-300/45">{group.label}</div>
              <div className="space-y-px">
                {group.items.map(item => {
                  const Icon = item.icon;
                  const isActive = item.id === active;
                  return (
                    <div key={`${group.label}-${item.id}`} className={`flex items-center gap-1.5 rounded-md px-1.5 py-[3px] text-[7px] font-semibold transition-colors lg:text-[8px] ${isActive ? "bg-blue-500 text-white shadow-[0_6px_18px_rgba(59,130,246,.2)]" : "text-slate-500"}`}>
                      <Icon size={9} />
                      <span className="truncate">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-1 rounded-lg border border-emerald-400/15 bg-emerald-400/[0.06] p-1.5">
        <div className="mb-1 flex items-center gap-1.5 text-[9px] font-bold text-emerald-400">
          <ShieldCheck size={11} /> ALL SYSTEMS
        </div>
        <div className="text-[7px] text-slate-500">Edge network healthy</div>
      </div>
    </aside>
  );
}

function StorefrontView({ lang }: { lang: "bn" | "en" }) {
  const labels =
    lang === "bn"
      ? { title: "নতুন কালেকশন", sub: "আধুনিক স্টাইল, আপনার জন্য", buy: "এখনই কিনুন", bag: "শপিং ব্যাগ", checkout: "চেকআউট" }
      : { title: "The new collection", sub: "Quiet luxury, designed for every day", buy: "Shop collection", bag: "Shopping bag", checkout: "Secure checkout" };

  return (
    <div className="relative grid h-full min-h-[330px] grid-cols-[1fr_104px] gap-3 overflow-hidden p-3 sm:p-4 lg:grid-cols-[1fr_148px] lg:gap-4">
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#f4f0ea] text-slate-950">
        <div className="flex h-10 items-center justify-between border-b border-black/[0.07] px-3 lg:px-5">
          <span className="text-[9px] font-black tracking-[0.25em]">ATELIER</span>
          <div className="hidden items-center gap-4 text-[7px] font-bold text-slate-500 md:flex">
            <span>NEW</span><span>SHOP</span><span>STORY</span>
          </div>
          <ShoppingBag size={13} />
        </div>
        <div className="relative h-[155px] overflow-hidden bg-[#c8b5a0] px-4 py-5 lg:h-[185px] lg:px-7 lg:py-7">
          <div className="absolute inset-y-0 right-0 w-[52%] bg-gradient-to-br from-[#9a7d63] via-[#d8c8b5] to-[#6d5648] opacity-90" />
          <div className="absolute -right-5 top-3 h-44 w-28 rotate-12 rounded-[50%_42%_45%_55%] bg-gradient-to-br from-[#222126] via-[#716b70] to-[#19191d] shadow-2xl lg:right-7" />
          <div className="relative z-10 max-w-[62%]">
            <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-stone-600">Edition 02 / 2026</div>
            <h3 className="mt-3 max-w-[240px] font-serif text-2xl leading-[0.9] tracking-tight sm:text-3xl lg:text-[40px]">
              {labels.title}
            </h3>
            <p className="mt-2 max-w-[190px] text-[8px] text-stone-700 lg:text-[10px]">{labels.sub}</p>
            <button className="mt-4 rounded-full bg-slate-950 px-3 py-1.5 text-[7px] font-bold text-white lg:px-4 lg:py-2">
              {labels.buy}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-2.5 lg:p-3">
          {["#d8d2cc", "#b5aa9f", "#302e32"].map((color, i) => (
            <div key={color} className="min-w-0">
              <div
                className="relative h-16 overflow-hidden rounded-lg lg:h-[74px]"
                style={{ background: color }}>
                <div className="absolute left-1/2 top-2 h-14 w-8 -translate-x-1/2 rounded-t-[45%] border-[5px] border-white/50 border-b-0" />
              </div>
              <div className="mt-1 truncate text-[7px] font-bold">Signature piece 0{i + 1}</div>
              <div className="text-[7px] text-slate-500">৳{(2490 + i * 500).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#0a0f1c] shadow-2xl">
        <div className="mx-auto mt-2 h-1 w-7 rounded-full bg-white/10" />
        <div className="border-b border-white/[0.07] p-2.5 lg:p-3">
          <div className="text-[8px] font-bold text-white lg:text-[9px]">{labels.bag}</div>
          <div className="mt-1 text-[7px] text-slate-500">2 items reserved</div>
        </div>
        <div className="space-y-2 p-2 lg:p-3">
          {["Essential shirt", "Studio trouser"].map((name, i) => (
            <div key={name} className="flex gap-2">
              <div className={`size-7 shrink-0 rounded-md ${i ? "bg-stone-600" : "bg-stone-300"}`} />
              <div className="min-w-0">
                <div className="truncate text-[7px] font-semibold text-slate-200">{name}</div>
                <div className="text-[7px] text-slate-500">Qty 1 · M</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto p-2 lg:p-3">
          <div className="mb-2 flex justify-between text-[7px] text-slate-400"><span>Total</span><strong className="text-white">৳6,480</strong></div>
          <div className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-2 py-2 text-center text-[7px] font-bold text-white">
            {labels.checkout}
          </div>
          <div className="mt-2 flex items-center justify-center gap-1 text-[6px] text-emerald-400"><ShieldCheck size={8} /> SSL protected</div>
        </div>
      </div>
    </div>
  );
}

function OperationsView({ lang }: { lang: "bn" | "en" }) {
  const c = copy[lang];
  const moduleSignals = [
    { icon: Contact, en: "CRM leads", bn: "CRM লিড", value: "1,248", tone: "text-blue-300", bar: "w-[78%] bg-blue-400" },
    { icon: UsersRound, en: "HRM present", bn: "HRM উপস্থিত", value: "96%", tone: "text-cyan-300", bar: "w-[96%] bg-cyan-400" },
    { icon: WalletCards, en: "Payroll paid", bn: "বেতন পরিশোধ", value: "৳3.92M", tone: "text-violet-300", bar: "w-[88%] bg-violet-400" },
    { icon: Boxes, en: "ERP stock", bn: "ERP স্টক", value: "4,860", tone: "text-amber-300", bar: "w-[67%] bg-amber-400" },
    { icon: Calculator, en: "Net profit", bn: "নিট লাভ", value: "৳1.24M", tone: "text-emerald-300", bar: "w-[72%] bg-emerald-400" },
  ];
  return (
    <div className="p-3 sm:p-4 lg:p-5">
      <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        <MiniStat label={c.revenue} value="৳3.18M" change="+18.4%" tone="blue" />
        <MiniStat label={c.orders} value="184" change="+12.7%" tone="violet" />
        <MiniStat label={c.conversion} value="4.82%" change="+0.8%" tone="emerald" />
        <MiniStat label={c.profit} value="৳1.24M" change="+21.2%" tone="blue" />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.65fr_.8fr]">
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5 lg:p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-white lg:text-xs">Revenue intelligence</div>
              <div className="mt-0.5 text-[8px] text-slate-500">Orders, revenue and profit · 30 days</div>
            </div>
            <div className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[8px] text-slate-400">30D <ChevronDown size={9} className="ml-1 inline" /></div>
          </div>
          <div className="relative mt-3 h-[128px] lg:h-[146px]">
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3].map(i => <span key={i} className="border-t border-dashed border-white/[0.06]" />)}
            </div>
            <svg viewBox="0 0 646 190" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <linearGradient id="novaArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity=".42" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="novaLine" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#38bdf8" /><stop offset=".52" stopColor="#818cf8" /><stop offset="1" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              <polygon points={areaPoints} fill="url(#novaArea)" />
              <polyline points={chartPoints} fill="none" stroke="url(#novaLine)" strokeWidth="4" vectorEffect="non-scaling-stroke" className="nova-chart-line" />
            </svg>
          </div>
          <div className="flex justify-between text-[7px] text-slate-600"><span>01 Aug</span><span>08 Aug</span><span>15 Aug</span><span>22 Aug</span><span>28 Aug</span></div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5 lg:p-4">
          <div className="text-[10px] font-bold text-white lg:text-xs">Order pipeline</div>
          <div className="mt-4 space-y-3">
            {[
              ["Confirmed", "126", "bg-blue-400", "76%"],
              ["Packed", "94", "bg-violet-400", "58%"],
              ["In transit", "71", "bg-cyan-400", "44%"],
              ["Delivered", "58", "bg-emerald-400", "35%"],
            ].map(([label, value, color, width]) => (
              <div key={label}>
                <div className="mb-1.5 flex justify-between text-[8px]"><span className="text-slate-400">{label}</span><strong className="text-slate-200">{value}</strong></div>
                <div className="h-1 rounded-full bg-white/[0.05]"><div className={`h-full rounded-full ${color}`} style={{ width }} /></div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.05] p-2.5">
            <PackageCheck size={15} className="text-emerald-400" />
            <div><div className="text-[8px] font-bold text-emerald-300">98.7% synced</div><div className="text-[7px] text-slate-500">Stock + courier status</div></div>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {moduleSignals.map(signal => {
          const Icon = signal.icon;
          return (
            <div key={signal.en} className="platform-node min-w-0 rounded-xl border border-white/[0.065] bg-white/[0.025] p-2.5">
              <div className="flex items-center gap-1.5">
                <Icon size={11} className={signal.tone} />
                <span className="truncate text-[7px] font-bold text-slate-500 lg:text-[8px]">{lang === "bn" ? signal.bn : signal.en}</span>
              </div>
              <strong className="mt-1.5 block truncate text-[10px] font-black text-white lg:text-xs">{signal.value}</strong>
              <div className="mt-1.5 h-0.5 overflow-hidden rounded-full bg-white/[0.05]"><div className={`h-full rounded-full ${signal.bar}`} /></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ProductCommandCenter({
  view = "overview",
  lang = "en",
  className = "",
}: Props) {
  const c = copy[lang];
  return (
    <div className={`premium-window relative overflow-hidden rounded-[22px] border border-white/[0.11] bg-[#080d18] shadow-[0_40px_120px_rgba(0,0,0,.6)] ${className}`}>
      <div className="nova-window-shine" aria-hidden />
      <div className="flex h-10 items-center gap-3 border-b border-white/[0.07] bg-[#0b101c] px-3 sm:px-4">
        <div className="flex gap-1.5"><span className="size-2 rounded-full bg-rose-400/70" /><span className="size-2 rounded-full bg-amber-400/70" /><span className="size-2 rounded-full bg-emerald-400/70" /></div>
        <div className="mx-auto flex max-w-[220px] flex-1 items-center justify-center gap-1.5 rounded-md border border-white/[0.06] bg-black/20 py-1 text-[7px] text-slate-600">
          <ShieldCheck size={8} /> app.autonovaq.com
        </div>
        <div className="hidden items-center gap-1.5 text-[7px] font-semibold text-emerald-400 sm:flex"><span className="size-1.5 rounded-full bg-emerald-400 nova-live-dot" /> {c.live}</div>
      </div>

      <div className="flex min-h-[350px] lg:min-h-[390px]">
        <SideRail view={view} />
        <div className="min-w-0 flex-1 bg-[radial-gradient(circle_at_65%_0%,rgba(79,70,229,.1),transparent_34%)]">
          <header className="flex h-12 items-center justify-between border-b border-white/[0.06] px-3 sm:px-4 lg:px-5">
            <div>
              <div className="text-[10px] font-bold text-white lg:text-xs">{c[view]}</div>
              <div className="hidden text-[7px] text-slate-600 sm:block">Friday, 28 August · Dhaka</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden w-32 items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.025] px-2 py-1.5 text-[8px] text-slate-600 lg:flex"><Search size={9} /> Search anything</div>
              <span className="flex size-6 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03]"><Bell size={10} className="text-slate-400" /></span>
              <span className="flex size-6 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-violet-500 text-[8px] font-black text-white">AN</span>
            </div>
          </header>

          <div className="module-rail flex gap-1.5 overflow-x-auto border-b border-white/[0.055] px-3 py-2 sm:hidden">
            {adminMenuGroups.flatMap(group => group.items).map(item => {
              const Icon = item.icon;
              return (
                <span key={`mobile-${item.id}`} className="flex shrink-0 items-center gap-1 rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-1 text-[7px] font-semibold text-slate-500">
                  <Icon size={8} /> {item.label}
                </span>
              );
            })}
          </div>

          {view === "storefront" ? <StorefrontView lang={lang} /> : <OperationsView lang={lang} />}
        </div>
      </div>
    </div>
  );
}

export function LiveInsightCard({ lang = "en" }: { lang?: "bn" | "en" }) {
  return (
    <div className="nova-float-card flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d1422]/95 p-3 shadow-2xl backdrop-blur-xl">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400"><CircleDollarSign size={18} /></span>
      <div>
        <div className="text-[9px] font-semibold text-slate-500">{lang === "bn" ? "আজকের নিট প্রফিট" : "Today’s net profit"}</div>
        <div className="text-sm font-black text-white">৳48,260 <span className="ml-1 text-[9px] font-bold text-emerald-400">+21.2%</span></div>
      </div>
    </div>
  );
}

export function AutomationCard({ lang = "en" }: { lang?: "bn" | "en" }) {
  return (
    <div className="nova-float-card-reverse rounded-2xl border border-white/10 bg-[#0d1422]/95 p-3 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-2 text-[9px] font-bold text-violet-300"><Sparkles size={12} /> {lang === "bn" ? "অটোমেশন চালু" : "Automation completed"}</div>
      <div className="mt-1 text-[9px] text-slate-500">Order #NQ-2841 → courier booked</div>
      <div className="mt-2 flex items-center gap-1 text-[8px] font-bold text-emerald-400"><Check size={10} /> 4 manual steps saved</div>
    </div>
  );
}
