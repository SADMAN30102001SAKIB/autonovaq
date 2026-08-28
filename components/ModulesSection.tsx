"use client";

import { useState } from "react";
import {
  Contact,
  UsersRound,
  Wallet,
  Calculator,
  Boxes,
  ScanBarcode,
  ShoppingBag,
  FolderKanban,
  Headset,
  BarChart3,
  Sparkles,
  ShieldCheck,
  Check,
  ArrowRight,
  Layers,
  Fingerprint,
  Infinity as InfinityIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";
import {
  businessModules,
  moduleSuiteHeader,
  totalModuleFeatures,
} from "@/data/modules";

const MODULE_ICONS: Record<string, LucideIcon> = {
  Contact,
  UsersRound,
  Wallet,
  Calculator,
  Boxes,
  ScanBarcode,
  ShoppingBag,
  FolderKanban,
  Headset,
  BarChart3,
  Sparkles,
  ShieldCheck,
};

/** rounds 268 -> 250 so the claim always reads conservative */
const featureFloor = Math.floor(totalModuleFeatures / 50) * 50;

export default function ModulesSection() {
  const { lang, t } = useLanguage();
  const [activeId, setActiveId] = useState(businessModules[0].id);

  const active =
    businessModules.find(m => m.id === activeId) ?? businessModules[0];
  const ActiveIcon = MODULE_ICONS[active.icon] ?? Layers;
  const activeCount = active.groups.reduce((n, g) => n + g.items.length, 0);

  const stats = [
    {
      icon: Layers,
      value: `${businessModules.length}`,
      label: t("বিজনেস মডিউল", "Business modules"),
    },
    {
      icon: Check,
      value: `${featureFloor}+`,
      label: t("রেডি ফিচার", "Ready features"),
    },
    {
      icon: Fingerprint,
      value: "1",
      label: t("লগইন, এক ডেটাবেজ", "Login, one database"),
    },
    {
      icon: InfinityIcon,
      value: t("আনলিমিটেড", "Unlimited"),
      label: t("ইউজার ও প্রোডাক্ট", "Users & products"),
    },
  ];

  return (
    <section id="modules" className="relative py-20 lg:py-28 overflow-hidden">
      {/* static ambient wash — no animation, painted once */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 45% at 15% 0%, var(--blob-blue), transparent 70%), radial-gradient(50% 40% at 90% 20%, var(--blob-purple), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── header ─────────────────────────────────────────── */}
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold tracking-wide text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {lang === "bn"
              ? moduleSuiteHeader.eyebrow.bn
              : moduleSuiteHeader.eyebrow.en}
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.9rem] font-extrabold leading-[1.15] tracking-tight">
            <span className="gradient-text">
              {lang === "bn"
                ? moduleSuiteHeader.title.bn
                : moduleSuiteHeader.title.en}
            </span>
            <span className="block text-foreground/90 mt-1 text-2xl sm:text-3xl lg:text-4xl">
              {lang === "bn"
                ? moduleSuiteHeader.titleEnd.bn
                : moduleSuiteHeader.titleEnd.en}
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {lang === "bn"
              ? moduleSuiteHeader.subtitle.bn
              : moduleSuiteHeader.subtitle.en}
          </p>
        </Reveal>

        {/* ── stat strip ─────────────────────────────────────── */}
        <Reveal
          index={1}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 rounded-2xl glass overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-3 px-5 py-4 ${
                i % 2 === 1 ? "" : "border-r border-border/40"
              } ${i < 2 ? "border-b lg:border-b-0 border-border/40" : ""} ${
                i === 2 ? "lg:border-r lg:border-border/40" : ""
              }`}>
              <stat.icon size={18} className="metric-icon shrink-0 text-primary" />
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-bold leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-muted-foreground truncate">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </Reveal>

        {/* ── rail + panel ───────────────────────────────────── */}
        <div className="mt-10 lg:mt-12 grid lg:grid-cols-[19rem_1fr] gap-5 lg:gap-8 items-start">
          {/* module rail */}
          <div
            role="tablist"
            aria-label={t("বিজনেস মডিউল", "Business modules")}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x lg:snap-none lg:sticky lg:top-24 module-rail">
            {businessModules.map(mod => {
              const Icon = MODULE_ICONS[mod.icon] ?? Layers;
              const isActive = mod.id === activeId;
              const count = mod.groups.reduce((n, g) => n + g.items.length, 0);

              return (
                <button
                  key={mod.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="module-panel"
                  onClick={() => setActiveId(mod.id)}
                  className={`group relative shrink-0 snap-start flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-colors duration-200 lg:w-full ${
                    isActive
                      ? "module-active-tab border-primary/40 text-foreground"
                      : "border-border/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-[var(--surface-hover)]"
                  }`}
                  style={
                    isActive
                      ? {
                          background: `linear-gradient(100deg, ${mod.from}22, ${mod.to}0d 60%, transparent)`,
                        }
                      : undefined
                  }>
                  <span
                    className={`grid place-items-center w-9 h-9 rounded-lg shrink-0 transition-opacity duration-200 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-60 group-hover:opacity-90"
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${mod.from}, ${mod.to})`,
                    }}>
                    <Icon size={17} className="text-white" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-semibold whitespace-nowrap lg:whitespace-normal">
                      {lang === "bn" ? mod.short.bn : mod.short.en}
                    </span>
                    <span className="hidden lg:block text-[11px] text-muted-foreground">
                      {count} {t("ফিচার", "features")}
                    </span>
                  </span>

                  {isActive && (
                    <ArrowRight
                      size={15}
                      className="hidden lg:block ml-auto text-primary shrink-0"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* detail panel */}
          <div
            id="module-panel"
            role="tabpanel"
            className="module-panel-live rounded-2xl glow-border p-6 sm:p-8 lg:p-9 min-h-[30rem]">
            {/* panel header */}
            <div
              key={`${active.id}-head`}
              className="panel-enter flex flex-col sm:flex-row sm:items-start gap-4 pb-6 border-b border-border/50">
              <span
                className="grid place-items-center w-12 h-12 rounded-xl shrink-0"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${active.from}, ${active.to})`,
                }}>
                <ActiveIcon size={23} className="text-white" />
              </span>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {lang === "bn" ? active.name.bn : active.name.en}
                </h3>
                <p className="mt-1.5 text-sm sm:text-[0.95rem] text-muted-foreground leading-relaxed">
                  {lang === "bn" ? active.tagline.bn : active.tagline.en}
                </p>
              </div>

              <span
                className="self-start shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border"
                style={{
                  borderColor: `${active.from}59`,
                  background: `${active.from}14`,
                  color: active.from,
                }}>
                {activeCount} {t("ফিচার", "features")}
              </span>
            </div>

            {/* feature groups */}
            <div
              key={active.id}
              className="panel-enter mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-7">
              {active.groups.map(group => (
                <div key={group.title.en}>
                  <h4 className="flex items-center gap-2.5 text-sm font-bold tracking-tight">
                    <span
                      className="w-1 h-4 rounded-full shrink-0"
                      style={{
                        backgroundImage: `linear-gradient(${active.from}, ${active.to})`,
                      }}
                    />
                    {lang === "bn" ? group.title.bn : group.title.en}
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {group.items.map(item => (
                      <li
                        key={item.en}
                        className="flex items-start gap-2.5 text-[0.82rem] sm:text-sm text-muted-foreground leading-snug">
                        <Check
                          size={14}
                          strokeWidth={3}
                          className="mt-[3px] shrink-0"
                          style={{ color: active.from }}
                        />
                        <span>{lang === "bn" ? item.bn : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── footer note + CTA ──────────────────────────────── */}
        <Reveal className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl glass px-6 py-5">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            {lang === "bn"
              ? moduleSuiteHeader.note.bn
              : moduleSuiteHeader.note.en}
          </p>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            {t("আপনার মডিউল বাছাই করুন", "Pick your modules")}
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
