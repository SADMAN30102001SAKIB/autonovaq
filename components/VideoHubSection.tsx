"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, ChevronDown, CheckCircle2, Video, HelpCircle, List, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { videoGuidesContent } from "@/data/content";
import VideoModal from "@/components/VideoModal";

// Type augmentation for the isPlaylist field
type VideoItem = (typeof videoGuidesContent.videos)[0] & { isPlaylist?: boolean };

export default function VideoHubSection() {
  const { lang } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTime, setModalTime] = useState<number | undefined>(undefined);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const activeVideo = videoGuidesContent.videos[activeIdx] as VideoItem;
  const isPlaylist = !!activeVideo.isPlaylist;
  const playlistId = isPlaylist ? activeVideo.id : undefined;

  const sectionTitle = lang === "bn" ? videoGuidesContent.sectionTitle.bn : videoGuidesContent.sectionTitle.en;
  const sectionTitleHighlight = lang === "bn" ? videoGuidesContent.sectionTitleHighlight.bn : videoGuidesContent.sectionTitleHighlight.en;
  const sectionSubtitle = lang === "bn" ? videoGuidesContent.sectionSubtitle.bn : videoGuidesContent.sectionSubtitle.en;

  const handleTimestampClick = (seconds: number) => {
    if (isPlaylist) return; // No timestamp seek for playlists
    setModalTime(seconds);
    setModalOpen(true);
  };

  const handlePlayClick = () => {
    setModalTime(undefined);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalTime(undefined);
  };

  // For playlist items, open YouTube playlist directly
  const handlePlaylistOpen = () => {
    window.open(`https://www.youtube.com/playlist?list=${playlistId}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="videos" className="py-20 lg:py-28 px-4 bg-background relative overflow-hidden scroll-mt-16">
      {/* Background Blobs */}
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-[var(--blob-purple)] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[var(--blob-blue)] rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-xs font-semibold border border-primary/20 mb-4">
            <Video size={14} className="text-primary animate-pulse" />
            <span className="gradient-text">
              {lang === "bn" ? "ভিডিও লার্নিং হাব" : "Video Learning Hub"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            {sectionTitle}
            <span className="gradient-text">{sectionTitleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Video List / Selector */}
          <div className="lg:col-span-5 space-y-4 max-h-[600px] lg:overflow-y-auto pr-0 lg:pr-2 scrollbar-thin">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 px-1">
              {lang === "bn" ? "ভিডিওসমূহ নির্বাচন করুন" : "Select a Video Guide"}
            </p>
            {(videoGuidesContent.videos as VideoItem[]).map((video, idx) => {
              const isActive = idx === activeIdx;
              const title = lang === "bn" ? video.title.bn : video.title.en;
              const thumbnailSrc = video.isPlaylist
                ? `https://img.youtube.com/vi/placeholder/mqdefault.jpg`
                : `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

              return (
                <motion.div
                  key={video.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setExpandedFaq(null);
                  }}
                  className={`group relative p-4 rounded-2xl cursor-pointer border transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--surface-raised)] border-primary/40 shadow-lg shadow-primary/5"
                      : "bg-card/40 border-border/40 hover:bg-[var(--surface-hover)] hover:border-border/80"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex gap-4 items-start">
                    {/* Thumbnail Preview mini */}
                    <div className="relative w-24 h-14 sm:w-28 sm:h-16 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-border/50">
                      {video.isPlaylist ? (
                        /* Playlist cover: gradient + icon */
                        <div className="w-full h-full bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 flex items-center justify-center">
                          <List size={24} className="text-white/80" />
                        </div>
                      ) : (
                        <img
                          src={thumbnailSrc}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        {video.isPlaylist
                          ? <List size={14} className="text-white" />
                          : <Play size={16} className={`text-white transition-transform ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                        }
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/75 px-1 py-0.5 rounded text-[10px] font-mono text-white flex items-center gap-0.5">
                        <Clock size={8} />
                        {video.duration}
                      </div>
                    </div>

                    {/* Text info */}
                    <div className="flex-1 min-w-0">
                      {video.isPlaylist && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1"
                          style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.3)" }}>
                          <List size={9} /> Playlist
                        </span>
                      )}
                      <h3 className={`text-sm font-bold line-clamp-2 leading-snug transition-colors ${
                        isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                      }`}>
                        {title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground mt-1 font-semibold flex items-center gap-1">
                        <span>{video.isPlaylist ? "📚" : "💡"}</span>
                        {video.isPlaylist
                          ? (lang === "bn" ? "সম্পূর্ণ অ্যাডমিন গাইড" : "Full Admin Guide Playlist")
                          : (lang === "bn" ? "কেস স্টাডি ও ব্যাখ্যা" : "Case Study & Insight")
                        }
                      </p>
                    </div>
                  </div>

                  {/* Highlight bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-3 bottom-3 w-1 bg-primary rounded-r"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Video Detail Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVideo.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glow-border-active rounded-3xl p-6 md:p-8 bg-card/20 shadow-2xl relative overflow-hidden"
              >
                {/* Large Video Preview / Playlist Cover */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-border/50 group/preview aspect-video mb-8">
                  {isPlaylist ? (
                    /* Playlist cover card */
                    <div className="w-full h-full bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-900 flex flex-col items-center justify-center gap-4 p-6">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <List size={40} className="text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                          {lang === "bn" ? "ইউটিউব প্লেলিস্ট" : "YouTube Playlist"}
                        </p>
                        <p className="text-white font-bold text-lg leading-tight">
                          {lang === "bn" ? "Zargon অ্যাডমিন গাইড" : "Zargon Admin Guide"}
                        </p>
                      </div>
                      <button
                        onClick={handlePlaylistOpen}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-purple-700 font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl mt-2"
                      >
                        <Play size={16} className="fill-purple-700" />
                        {lang === "bn" ? "প্লেলিস্ট দেখুন" : "View Full Playlist"}
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${activeVideo.id}/maxresdefault.jpg`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`;
                        }}
                        alt={lang === "bn" ? activeVideo.title.bn : activeVideo.title.en}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-105"
                      />
                      {/* Backdrop Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover/preview:bg-black/30 transition-colors duration-300" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <motion.button
                          onClick={handlePlayClick}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-lg shadow-primary/40 backdrop-blur-sm cursor-pointer z-10"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play size={28} className="fill-white translate-x-0.5 text-white" />
                        </motion.button>
                        <span className="mt-4 text-xs md:text-sm font-semibold text-white drop-shadow bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                          {lang === "bn" ? "সম্পূর্ণ ভিডিওটি প্লে করুন" : "Play Full Video"} ({activeVideo.duration})
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Video Info Header */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight text-foreground">
                  {lang === "bn" ? activeVideo.title.bn : activeVideo.title.en}
                </h3>

                {/* Playlist direct link button */}
                {isPlaylist && (
                  <a
                    href={`https://www.youtube.com/playlist?list=${playlistId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold mb-6 transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(139,92,246,0.15)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      color: "#a78bfa",
                    }}>
                    <ExternalLink size={14} />
                    {lang === "bn" ? "YouTube-এ সম্পূর্ণ প্লেলিস্ট দেখুন" : "Open Full Playlist on YouTube"}
                  </a>
                )}

                {/* Video Summary */}
                <div className="p-4 rounded-xl bg-[var(--surface-subtle)] border border-border/40 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    {lang === "bn" ? "সারসংক্ষেপ" : isPlaylist ? "Playlist Overview" : "Video Summary"}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lang === "bn" ? activeVideo.summary.bn : activeVideo.summary.en}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                    {lang === "bn" ? "মূল শিক্ষণীয় বিষয়সমূহ" : isPlaylist ? "What You'll Learn" : "Key Takeaways"}
                  </h4>
                  <div className="space-y-3">
                    {activeVideo.takeaways.map((takeaway, tIdx) => (
                      <div key={tIdx} className="flex gap-3 items-start">
                        <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-foreground/90 leading-relaxed">
                          {lang === "bn" ? takeaway.bn : takeaway.en}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video-specific FAQs */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-1.5">
                    <HelpCircle size={14} className="text-primary" />
                    {lang === "bn"
                      ? (isPlaylist ? "প্লেলিস্ট সংশ্লিষ্ট প্রশ্নোত্তর" : "ভিডিও সংশ্লিষ্ট প্রশ্নোত্তর (টাইমস্ট্যাম্প সহ)")
                      : (isPlaylist ? "Playlist FAQs" : "Video FAQs & Timestamps")
                    }
                  </h4>
                  {!isPlaylist && (
                    <p className="text-xs text-muted-foreground mb-4 leading-normal">
                      {lang === "bn"
                        ? "💡 প্রশ্নোত্তরটি ভিডিওর কোন অংশে রয়েছে তা দেখতে টাইমস্ট্যাম্পে ক্লিক করুন। সরাসরি ভিডিও ওই সময়ে প্লে হবে।"
                        : "💡 Click a timestamp to watch where the question is answered directly in the video."}
                    </p>
                  )}

                  <div className="space-y-2">
                    {activeVideo.faqs.map((faq, fIdx) => {
                      const isFaqExpanded = expandedFaq === fIdx;
                      const qText = lang === "bn" ? faq.question.bn : faq.question.en;
                      const aText = lang === "bn" ? faq.answer.bn : faq.answer.en;

                      return (
                        <div
                          key={fIdx}
                          className="border border-border/40 rounded-xl bg-card/30 overflow-hidden transition-all duration-200 hover:border-border/70"
                        >
                          <button
                            onClick={() => setExpandedFaq(isFaqExpanded ? null : fIdx)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--surface-hover)] transition-colors"
                          >
                            <span className="text-sm font-semibold pr-4 text-foreground/90 leading-snug">
                              {qText}
                            </span>
                            <ChevronDown
                              size={16}
                              className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                                isFaqExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isFaqExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="px-4 pb-4 pt-1">
                                  <div className="h-px bg-border/40 mb-3" />
                                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                    {aText}
                                  </p>
                                  {/* Timestamp Button — hide for playlists */}
                                  {!isPlaylist && (
                                    <button
                                      onClick={() => handleTimestampClick(faq.seconds)}
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-xs font-semibold text-primary transition-all duration-200 border border-primary/20"
                                    >
                                      <Play size={10} className="fill-primary" />
                                      <span>
                                        {lang === "bn" ? "ভিডিওতে দেখুন" : "Watch at"} ({faq.timestamp})
                                      </span>
                                    </button>
                                  )}
                                  {isPlaylist && (
                                    <a
                                      href={`https://www.youtube.com/playlist?list=${playlistId}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border"
                                      style={{
                                        background: "rgba(139,92,246,0.1)",
                                        borderColor: "rgba(139,92,246,0.3)",
                                        color: "#a78bfa",
                                      }}>
                                      <ExternalLink size={10} />
                                      <span>{lang === "bn" ? "প্লেলিস্টে দেখুন" : "View in Playlist"}</span>
                                    </a>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Video Modal (only for non-playlist) */}
      {!isPlaylist && (
        <VideoModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          videoId={activeVideo.id}
          startTime={modalTime}
        />
      )}
    </section>
  );
}
