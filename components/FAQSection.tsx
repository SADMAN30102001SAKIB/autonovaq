"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search, Play, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { faqContent, videoGuidesContent } from "@/data/content";
import VideoModal from "@/components/VideoModal";
import Reveal from "@/components/Reveal";

// Category definitions
const CATEGORIES = [
  { id: "all", bn: "সবগুলো", en: "All" },
  { id: "general", bn: "সাধারণ জিজ্ঞাসা", en: "General FAQ" },
  { id: "speed", bn: "স্পিড ও পারফরম্যান্স", en: "Speed & Performance" },
  { id: "comparison", bn: "প্লাটফর্ম তুলনা", en: "Platform Comparison" },
  { id: "pricing", bn: "প্যাকেজ ও খরচ", en: "Pricing & Cost" },
  {
    id: "security",
    bn: "নিরাপত্তা ও রিলায়েবিলিটি",
    en: "Security & Reliability",
  },
];

interface MergedFaq {
  question: { bn: string; en: string };
  answer: { bn: string; en: string };
  category: string;
  isFromVideo?: boolean;
  videoId?: string;
  timestamp?: string;
  seconds?: number;
}

export default function FAQSection() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  // Keyed by question text, not list index: after filtering, index N is a
  // different question, so an index-keyed accordion opens the wrong card.
  const [openKey, setOpenKey] = useState<string | null>(null);

  // Video modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideoId, setModalVideoId] = useState("");
  const [modalTime, setModalTime] = useState<number | undefined>(undefined);

  // Compile and categorize all FAQs (Static + Video FAQs)
  const allFaqs = useMemo<MergedFaq[]>(() => {
    const items: MergedFaq[] = [];

    // 1. Add static FAQs from content.ts with manual categories
    const staticCategories = [
      "general", // 0. How long does setup take?
      "general", // 1. Technical knowledge?
      "pricing", // 2. Monthly charges?
      "security", // 3. Website crashes?
      "general", // 4. Which couriers?
      "speed", // 5. Product/order limits?
      "general", // 6. Who is this for?
      "security", // 7. Data secure?
    ];

    faqContent.faqs.forEach((faq, index) => {
      items.push({
        ...faq,
        category: staticCategories[index] || "general",
        isFromVideo: false,
      });
    });

    // 2. Add video FAQs
    const videoCategories = [
      "speed",
      "comparison",
      "general",
      "pricing",
      "security",
    ];
    videoGuidesContent.videos.forEach((video, videoIndex) => {
      const category = videoCategories[videoIndex] || "general";
      video.faqs.forEach(faq => {
        items.push({
          question: faq.question,
          answer: faq.answer,
          category,
          isFromVideo: true,
          videoId: video.id,
          timestamp: faq.timestamp,
          seconds: faq.seconds,
        });
      });
    });

    return items;
  }, []);

  // Per-category totals for the filter pills — computed once, not per render pass.
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allFaqs.length };
    for (const faq of allFaqs) {
      counts[faq.category] = (counts[faq.category] || 0) + 1;
    }
    return counts;
  }, [allFaqs]);

  // Filter & Search Logic
  const filteredFaqs = useMemo(() => {
    const search = searchQuery.trim().toLowerCase();

    return allFaqs.filter(faq => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      if (!matchesCategory) return false;
      if (!search) return true;

      const qText = (
        lang === "bn" ? faq.question.bn : faq.question.en
      ).toLowerCase();
      const aText = (
        lang === "bn" ? faq.answer.bn : faq.answer.en
      ).toLowerCase();

      return qText.includes(search) || aText.includes(search);
    });
  }, [allFaqs, activeCategory, searchQuery, lang]);

  const handlePlayVideo = (videoId: string, seconds?: number) => {
    setModalVideoId(videoId);
    setModalTime(seconds);
    setModalOpen(true);
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 px-4 bg-card/30 scroll-mt-16 relative overflow-hidden">
      {/* Background radial effects */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn"
              ? faqContent.sectionTitle.bn
              : faqContent.sectionTitle.en}
            <span className="gradient-text">
              {lang === "bn"
                ? faqContent.sectionTitleHighlight.bn
                : faqContent.sectionTitleHighlight.en}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            {lang === "bn"
              ? "আমাদের সার্ভিস, স্পিড, হোস্টিং খরচ, নিরাপত্তা এবং ব্যবসায়িক অটোমেশন নিয়ে সাধারণ প্রশ্ন ও তাদের সরাসরি সমাধান।"
              : "Common questions and direct solutions regarding our services, performance, cost, and integrations."}
          </p>
        </Reveal>

        {/* Search Bar */}
        <Reveal index={1} className="relative max-w-lg mx-auto mb-8 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={
              lang === "bn" ? "উত্তর খুঁজতে এখানে লিখুন..." : "Search FAQs..."
            }
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
              setOpenKey(null);
            }}
            aria-label={lang === "bn" ? "প্রশ্ন খুঁজুন" : "Search FAQs"}
            className="w-full pl-11 pr-4 py-3.5 bg-background/50 border border-border/80 rounded-2xl text-sm outline-none focus:border-primary/50 transition-colors shadow-lg group-hover:border-border"
          />
        </Reveal>

        {/* Category Filters */}
        <Reveal
          index={2}
          className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {CATEGORIES.map(category => {
            const isActive = activeCategory === category.id;
            const count = categoryCounts[category.id] || 0;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenKey(null);
                }}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold rounded-full border transition-colors duration-200 ${
                  isActive
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                }`}>
                {lang === "bn" ? category.bn : category.en}
                <span
                  className={`text-[10px] font-bold tabular-nums ${
                    isActive ? "text-primary/70" : "text-muted-foreground/60"
                  }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </Reveal>

        {/* Result count */}
        <p className="text-center text-xs text-muted-foreground mb-8">
          {lang === "bn"
            ? `${filteredFaqs.length}টি প্রশ্ন দেখানো হচ্ছে`
            : `Showing ${filteredFaqs.length} question${filteredFaqs.length === 1 ? "" : "s"}`}
        </p>

        {/* FAQ Accordion List */}
        <div className="space-y-3 min-h-[150px]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => {
              const questionText =
                lang === "bn" ? faq.question.bn : faq.question.en;
              const answerText = lang === "bn" ? faq.answer.bn : faq.answer.en;
              const isOpen = openKey === questionText;

              return (
                <div
                  key={questionText}
                  className="glow-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenKey(isOpen ? null : questionText)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--surface-hover)] transition-colors">
                    <span className="font-bold text-sm md:text-base pr-4 text-foreground/90 flex items-start gap-2.5">
                      <HelpCircle
                        size={18}
                        className="text-primary/70 mt-0.5 flex-shrink-0"
                      />
                      <span>{questionText}</span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* CSS-driven height animation — no per-frame measurement. */}
                  <div className="accordion-body" data-open={isOpen}>
                    <div>
                      <div className="px-5 pb-5 pt-1">
                        <div className="h-px bg-border/40 mb-4" />
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {answerText}
                        </p>

                        {/* Video Reference Indicator & Play Button */}
                        {faq.isFromVideo && faq.videoId && (
                          <div className="flex flex-wrap items-center gap-3 pt-1">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-violet-500/10 text-[10px] md:text-xs font-bold text-violet-400 border border-violet-500/20">
                              🎥 {lang === "bn" ? "ভিডিও সোর্স" : "Video Source"}
                            </span>
                            <button
                              onClick={() =>
                                handlePlayVideo(faq.videoId!, faq.seconds)
                              }
                              tabIndex={isOpen ? 0 : -1}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-xs font-bold text-primary transition-colors border border-primary/20">
                              <Play size={10} className="fill-primary" />
                              <span>
                                {lang === "bn"
                                  ? `টাইমস্ট্যাম্প: ${faq.timestamp}`
                                  : `Watch at ${faq.timestamp}`}
                              </span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-muted-foreground text-sm">
              {lang === "bn" ? "কোনো মিল পাওয়া যায়নি!" : "No matches found!"}
            </div>
          )}
        </div>
      </div>

      {/* Embedded Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoId={modalVideoId}
        startTime={modalTime}
      />
    </section>
  );
}
