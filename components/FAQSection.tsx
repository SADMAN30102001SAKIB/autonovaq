"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Play, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { faqContent, videoGuidesContent } from "@/data/content";
import VideoModal from "@/components/VideoModal";

// Category definitions
const CATEGORIES = [
  { id: "all", bn: "সবগুলো", en: "All" },
  { id: "general", bn: "সাধারণ জিজ্ঞাসা", en: "General FAQ" },
  { id: "speed", bn: "স্পিড ও পারফরম্যান্স", en: "Speed & Performance" },
  { id: "comparison", bn: "প্লাটফর্ম তুলনা", en: "Platform Comparison" },
  { id: "pricing", bn: "প্যাকেজ ও খরচ", en: "Pricing & Cost" },
  { id: "security", bn: "নিরাপত্তা ও রিলায়েবিলিটি", en: "Security & Reliability" },
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Video modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideoId, setModalVideoId] = useState("");
  const [modalTime, setModalTime] = useState<number | undefined>(undefined);

  // Compile and categorize all FAQs (Static + Video FAQs)
  const allFaqs = useMemo<MergedFaq[]>(() => {
    const items: MergedFaq[] = [];

    // 1. Add static FAQs from content.ts with manual categories
    const staticCategories = [
      "general",  // 0. How long does setup take?
      "general",  // 1. Technical knowledge?
      "pricing",  // 2. Monthly charges?
      "security", // 3. Website crashes?
      "general",  // 4. Which couriers?
      "speed",    // 5. Product/order limits?
      "general",  // 6. Who is this for?
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
    const videoCategories = ["speed", "comparison", "general", "pricing", "security"];
    videoGuidesContent.videos.forEach((video, videoIndex) => {
      const category = videoCategories[videoIndex] || "general";
      video.faqs.forEach((faq) => {
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

  // Filter & Search Logic
  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      
      const qText = (lang === "bn" ? faq.question.bn : faq.question.en).toLowerCase();
      const aText = (lang === "bn" ? faq.answer.bn : faq.answer.en).toLowerCase();
      const search = searchQuery.toLowerCase();
      
      const matchesSearch = qText.includes(search) || aText.includes(search);
      
      return matchesCategory && matchesSearch;
    });
  }, [allFaqs, activeCategory, searchQuery, lang]);

  const handlePlayVideo = (videoId: string, seconds?: number) => {
    setModalVideoId(videoId);
    setModalTime(seconds);
    setModalOpen(true);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 px-4 bg-card/30 scroll-mt-16 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn" ? faqContent.sectionTitle.bn : faqContent.sectionTitle.en}
            <span className="gradient-text">
              {lang === "bn"
                ? faqContent.sectionTitleHighlight.bn
                : faqContent.sectionTitleHighlight.en}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            {lang === "bn"
              ? "আমাদের সার্ভিস, স্পিড, হোস্টিং খরচ, নিরাপত্তা এবং ব্যবসায়িক অটোমেশন নিয়ে সাধারণ প্রশ্ন ও তাদের সরাসরি সমাধান।"
              : "Common questions and direct solutions regarding our services, performance, cost, and integrations."}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative max-w-lg mx-auto mb-10 group"
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={lang === "bn" ? "উত্তর খুঁজতে এখানে লিখুন..." : "Search FAQs..."}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIndex(null); // Reset accordion state when searching
            }}
            className="w-full pl-11 pr-4 py-3.5 bg-background/50 border border-border/80 rounded-2xl text-sm outline-none focus:border-primary/50 transition-all shadow-lg group-hover:border-border/100"
          />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenIndex(null); // Reset accordion
                }}
                className={`relative px-4 py-2 text-xs md:text-sm font-semibold rounded-full border transition-all duration-300 ${
                  isActive
                    ? "border-primary text-primary bg-primary/5"
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {lang === "bn" ? category.bn : category.en}
                {isActive && (
                  <motion.span
                    layoutId="faq-category-indicator"
                    className="absolute inset-0 rounded-full border border-primary pointer-events-none"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 min-h-[150px]">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const questionText = lang === "bn" ? faq.question.bn : faq.question.en;
                const answerText = lang === "bn" ? faq.answer.bn : faq.answer.en;

                return (
                  <motion.div
                    key={questionText}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="glow-border rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--surface-hover)] transition-colors"
                    >
                      <span className="font-bold text-sm md:text-base pr-4 text-foreground/90 flex items-start gap-2.5">
                        <HelpCircle size={18} className="text-primary/70 mt-0.5 flex-shrink-0" />
                        <span>{questionText}</span>
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
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
                                  onClick={() => handlePlayVideo(faq.videoId!, faq.seconds)}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-xs font-bold text-primary transition-all border border-primary/20"
                                >
                                  <Play size={10} className="fill-primary" />
                                  <span>
                                    {lang === "bn" ? `টাইমস্ট্যাম্প: ${faq.timestamp}` : `Watch at ${faq.timestamp}`}
                                  </span>
                                </button>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-muted-foreground text-sm"
              >
                {lang === "bn" ? "কোনো মিল পাওয়া যায়নি!" : "No matches found!"}
              </motion.div>
            )}
          </AnimatePresence>
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
