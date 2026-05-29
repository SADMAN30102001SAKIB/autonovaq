"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  ExternalLink, 
  Linkedin, 
  Globe, 
  Phone, 
  Facebook, 
  Building2, 
  Rocket, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Compass,
  Play
} from "lucide-react";

// Bilingual core sections content
const sectionContent = {
  tag: {
    en: "About AutoNovaQ",
    bn: "AutoNovaQ সম্পর্কে জানুন",
  },
  title: {
    en: "We Build Digital Ecosystems That",
    titleHighlight: {
      en: "Shape The Future",
      bn: "ভবিষ্যতকে রূপ দেয়",
    },
    bn: "আমরা তৈরি করি ডিজিটাল ইকোসিস্টেম যা",
  },
  companyIntroTitle: {
    en: "Our Slogan & Mission",
    bn: "আমাদের স্লোগান ও লক্ষ্য",
  },
  companyIntroText: {
    en: "At AutoNovaQ, we are driven by innovation, technology, and a vision to build modern digital solutions that create real impact. Founded by passionate software engineers, AutoNovaQ combines technical excellence with strategic creativity to develop powerful software solutions, business automation systems, and scalable digital ecosystems that help organizations grow and adapt in a rapidly evolving world.",
    bn: "AutoNovaQ-এ আমরা উদ্ভাবন, প্রযুক্তি এবং একটি দূরদর্শী ভাবনার মাধ্যমে এমন আধুনিক ডিজিটাল সলিউশন তৈরি করতে প্রতিশ্রুতিবদ্ধ যা বাস্তব প্রভাব ফেলে। একদল উৎসাহী সফটওয়্যার ইঞ্জিনিয়ারদের দ্বারা প্রতিষ্ঠিত, AutoNovaQ কারিগরি দক্ষতা এবং কৌশলগত সৃজনশীলতার সমন্বয়ে শক্তিশালী সফটওয়্যার সলিউশন, ব্যবসায়িক অটোমেশন সিস্টেম এবং স্কেলেবল ডিজিটাল ইকোসিস্টেম তৈরি করে, যা প্রতিষ্ঠানগুলোকে দ্রুত পরিবর্তনশীল বিশ্বের সাথে তাল মিলিয়ে এগিয়ে যেতে ও বড় হতে সাহায্য করে।",
  },
  foundersHeading: {
    en: "Meet Our Founders",
    bn: "আমাদের প্রতিষ্ঠাতা দ্বয়",
  },
  foundersSubtitle: {
    en: "The visionaries and software leads architecting AutoNovaQ's high-scale digital solutions.",
    bn: "AutoNovaQ-এর অটোমেশন ইকোসিস্টেম ও হাই-স্কেল ডিজিটাল সলিউশনের পেছনের স্বপ্নদ্রষ্টা ও কারিগরি দল।",
  },
  partnerHeading: {
    en: "Strategic & Marketing Partner",
    bn: "স্ট্র্যাটেজিক ও মার্কেটিং পার্টনার",
  },
  partnerName: {
    en: "Hexa Agencies Limited",
    bn: "হেক্সা এজেন্সিজ লিমিটেড",
  },
  partnerDescription: {
    en: "Hexa Agencies Limited is the strategic and marketing partner of AutoNovaQ, supporting branding, business growth, digital expansion, and operational strategy. Through its ecosystem of innovative companies and technology-focused initiatives, Hexa Agencies contributes to the long-term vision and growth of AutoNovaQ.",
    bn: "হেক্সা এজেন্সিজ লিমিটেড হলো AutoNovaQ-এর স্ট্র্যাটেজিক ও মার্কেটিং পার্টনার, যা ব্র্যান্ডিং, ব্যবসায়িক প্রবৃদ্ধি, ডিজিটাল সম্প্রসারণ এবং কার্যপ্রণালীগত কৌশল তৈরিতে সহযোগিতা করে। এর উদ্ভাবনী কোম্পানি এবং প্রযুক্তি-কেন্দ্রিক উদ্যোগগুলোর ইকোসিস্টেমের মাধ্যমে হেক্সা এজেন্সিজ AutoNovaQ-এর দীর্ঘমেয়াদী লক্ষ্য ও প্রবৃদ্ধিতে সরাসরি অবদান রাখছে।",
  },
  partnerSlogan: {
    en: "Together, we aim to build innovative digital products, empower businesses with technology, and create solutions that shape the future.",
    bn: "একসাথে কাজ করার মাধ্যমে আমরা এমন সব উদ্ভাবনী ডিজিটাল প্রোডাক্ট তৈরি করতে চাই যা প্রযুক্তির মাধ্যমে ব্যবসাকে শক্তিশালী করে এবং ভবিষ্যতের রূপ দেয়।",
  },
  footerNote: {
    en: "Our Clients: Zargon (http://zargon.bid/), YarnHouseBD (http://yarnhousebd.com/), OnlyOneBD (https://onlyonebd.com/) and much more. Themes we provide to the clients are in these videos: https://youtu.be/CJslkng8xAI, https://youtu.be/HXHFWxg4wrE",
    bn: "আমাদের ক্লায়েন্টসমূহ: Zargon (http://zargon.bid/), YarnHouseBD (http://yarnhousebd.com/), OnlyOneBD (https://onlyonebd.com/) এবং আরও অনেকে। ক্লায়েন্টদের জন্য আমাদের দেওয়া থিমগুলো দেখতে এই ভিডিওগুলো দেখুন: https://youtu.be/CJslkng8xAI, https://youtu.be/HXHFWxg4wrE",
  }
};

interface Translation {
  en: string;
  bn: string;
}

interface FounderLinks {
  linkedin: string;
  phone: string;
  portfolio?: string;
  facebook?: string;
}

interface Founder {
  name: string;
  role: Translation;
  title: Translation;
  bio: Translation;
  bullets: Translation[];
  badges: Translation[];
  links: FounderLinks;
  avatar: string;
  gradient: string;
}

// Founders data
const founders: Founder[] = [
  {
    name: "Sadman Sakib",
    role: {
      en: "Co-Founder, AutoNovaQ",
      bn: "সহ-প্রতিষ্ঠাতা, AutoNovaQ",
    },
    title: {
      en: "Senior Software Engineer & Technical Lead",
      bn: "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার ও টেকনিক্যাল লিড",
    },
    bio: {
      en: "Sadman Sakib is a Senior Software Engineer and Technical Lead at Hexa Agencies Limited. He also serves in CTO-level leadership roles across multiple companies under Hexa Agencies, including Zargon and MasterStitch. With strong expertise in software architecture, product development, and technical leadership, he plays a key role in driving innovation and scalable technology solutions.",
      bn: "সাদমান সাকিব হেক্সা এজেন্সিজ লিমিটেডের একজন সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার এবং টেকনিক্যাল লিড। তিনি হেক্সা এজেন্সিজের অধীনস্থ একাধিক কোম্পানি যেমন জারগন (Zargon) এবং মাস্টারস্টিচ (MasterStitch)-এ সিটিও (CTO) পর্যায়ের নেতৃত্বমূলক ভূমিকা পালন করছেন। সফটওয়্যার আর্কিটেকচার, প্রোডাক্ট ডেভেলপমেন্ট এবং টেকনিক্যাল লিডারশিপে তার সুগভীর দক্ষতা দিয়ে তিনি উদ্ভাবন এবং স্কেলেবল প্রযুক্তিগত সলিউশন পরিচালনায় অগ্রণী ভূমিকা রাখছেন।",
    },
    bullets: [
      { en: "RUET CSE 21-22 Batch", bn: "রুয়েট সিএসই ২১-২২ ব্যাচ" },
      { en: "Co-Founder of AutoNovaQ", bn: "AutoNovaQ-এর সহ-প্রতিষ্ঠাতা" },
      { en: "Co-Founder of Nexus Future Fund", bn: "Nexus Future Fund-এর সহ-প্রতিষ্ঠাতা" },
      { en: "Senior Software Engineer & Tech Lead at Hexa Agencies Limited", bn: "হেক্সা এজেন্সিজ লিমিটেডের সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার ও টেকনিক্যাল লিড" },
    ],
    badges: [
      { en: "RUET CSE", bn: "রুয়েট সিএসই" },
      { en: "CTO @ Zargon", bn: "সিটিও @ জারগন" },
      { en: "CTO @ MasterStitch", bn: "সিটিও @ মাস্টারস্টিচ" },
      { en: "Nexus Future Fund", bn: "নেক্সাস ফিউচার ফান্ড" },
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/sadmansakib30102001/",
      portfolio: "https://sadman.me/",
      phone: "01764789457",
    },
    avatar: "SS",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
  },
  {
    name: "MD Wariul Mohaimin",
    role: {
      en: "Co-Founder, AutoNovaQ",
      bn: "সহ-প্রতিষ্ঠাতা, AutoNovaQ",
    },
    title: {
      en: "Senior Software Engineer & Technical Lead",
      bn: "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার ও টেকনিক্যাল লিড",
    },
    bio: {
      en: "MD Wariul Mohaimin is a Senior Software Engineer and Technical Lead at Hexa Agencies Limited, contributing to multiple technology-driven brands and platforms under the organization. He also serves in CTO-level leadership roles across multiple companies under Hexa Agencies, including Zargon and MasterStitch. With a passion for scalable systems, modern web technologies, and digital innovation, he focuses on building impactful software products and long-term technological growth.",
      bn: "মো. ওয়ারিউল মোহাইমিন হেক্সা এজেন্সিজ লিমিটেডের একজন সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার এবং টেকনিক্যাল লিড, যেখানে তিনি প্রতিষ্ঠানের অধীনে থাকা একাধিক প্রযুক্তি-চালিত ব্র্যান্ড এবং প্ল্যাটফর্মের উন্নয়নে অবদান রাখছেন। তিনি হেক্সা এজেন্সিজের অধীনে থাকা বেশ কয়েকটি কোম্পানিতে (যেমন জারগন এবং মাস্টারস্টিচ) সিটিও (CTO) স্তরের নেতৃত্বমূলক ভূমিকা পালন করছেন। স্কেলেবল সিস্টেম, আধুনিক ওয়েব প্রযুক্তি এবং ডিজিটাল উদ্ভাবনের প্রতি ভালোবাসার কারণে তিনি প্রধানত প্রভাবশালী সফটওয়্যার প্রোডাক্ট এবং দীর্ঘমেয়াদী প্রযুক্তির প্রসারে মনোনিবেশ করে থাকেন।",
    },
    bullets: [
      { en: "RUET CSE 21-22 Batch", bn: "রুয়েট সিএসই ২১-২২ ব্যাচ" },
      { en: "Co-Founder of AutoNovaQ", bn: "AutoNovaQ-এর সহ-প্রতিষ্ঠাতা" },
      { en: "Senior Software Engineer & Tech Lead at Hexa Agencies Limited", bn: "হেক্সা এজেন্সিজ লিমিটেডের সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার ও টেকনিক্যাল লিড" },
    ],
    badges: [
      { en: "RUET CSE", bn: "রুয়েট সিএসই" },
      { en: "CTO @ Zargon", bn: "সিটিও @ জারগন" },
      { en: "CTO @ MasterStitch", bn: "সিটিও @ মাস্টারস্টিচ" },
      { en: "SaaS Architect", bn: "স্যাস আর্কিটেক্ট" },
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/wariul-mohaimin-743899293/",
      facebook: "https://www.facebook.com/md.wariul.mohaimin",
      phone: "01751154790",
    },
    avatar: "WM",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  }
];

// Hexa Highlights
const partnerHighlights = [
  { icon: Sparkles, en: "Branding & Positioning", bn: "ব্র্যান্ডিং ও পজিশনিং" },
  { icon: TrendingUp, en: "Business Growth", bn: "ব্যবসায়িক প্রবৃদ্ধি" },
  { icon: Globe, en: "Digital Expansion", bn: "ডিজিটাল সম্প্রসারণ" },
  { icon: Compass, en: "Operational Strategy", bn: "কার্যপ্রণালীগত কৌশল" },
];

export default function AboutSection() {
  const { lang } = useLanguage();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-12 bg-black/20">
      {/* Decorative Blur Blobs */}
      <div 
        className="absolute top-1/4 left-1/10 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 65%)" }} 
      />
      <div 
        className="absolute bottom-1/4 right-1/10 w-[550px] h-[550px] rounded-full blur-3xl opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7, transparent 65%)" }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* 1. Header & Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 text-xs font-semibold uppercase tracking-widest bg-primary/5 text-primary mb-2 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Users className="w-3.5 h-3.5" />
              {lang === "bn" ? sectionContent.tag.bn : sectionContent.tag.en}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {lang === "bn" ? sectionContent.title.bn : sectionContent.title.en}{" "}
              <span className="gradient-text">
                {lang === "bn" ? sectionContent.title.titleHighlight.bn : sectionContent.title.titleHighlight.en}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {lang === "bn" ? sectionContent.companyIntroText.bn : sectionContent.companyIntroText.en}
            </p>
          </motion.div>

          {/* 2. Founders Title & Subtitle */}
          <motion.div variants={itemVariants} className="text-center space-y-3 -mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              {lang === "bn" ? sectionContent.foundersHeading.bn : sectionContent.foundersHeading.en}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              {lang === "bn" ? sectionContent.foundersSubtitle.bn : sectionContent.foundersSubtitle.en}
            </p>
          </motion.div>

          {/* 3. Founders Cards Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="group relative rounded-3xl border border-border/40 p-8 sm:p-10 bg-card/60 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:translate-y-[-4px] hover:border-primary/30"
              >
                {/* Accent Top Border Glow */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${founder.gradient} rounded-t-3xl`} />

                {/* Subtle Ambient Hover Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${founder.gradient} pointer-events-none`} />

                <div className="relative z-10 space-y-6">
                  {/* Card Top: Avatar, Name, Main Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-6 border-b border-border/40">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white font-black text-2xl shadow-[0_8px_20px_rgba(0,0,0,0.3)] flex-shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                      <span className="relative z-10">{founder.avatar}</span>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-2xl font-bold tracking-tight text-foreground">{founder.name}</h4>
                      <p className="text-sm font-semibold gradient-text uppercase tracking-wider">
                        {lang === "bn" ? founder.role.bn : founder.role.en}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Briefcase className="w-3.5 h-3.5 text-primary/70" />
                        <span>{lang === "bn" ? founder.title.bn : founder.title.en}</span>
                      </div>
                    </div>
                  </div>

                  {/* Badges container */}
                  <div className="flex flex-wrap gap-2">
                    {founder.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full border border-border/60 bg-muted/40 text-muted-foreground tracking-wide hover:border-primary/20 hover:text-foreground transition-all duration-200"
                      >
                        {lang === "bn" ? badge.bn : badge.en}
                      </span>
                    ))}
                  </div>

                  {/* Biography */}
                  <p className="text-sm leading-relaxed text-muted-foreground/90 font-medium">
                    {lang === "bn" ? founder.bio.bn : founder.bio.en}
                  </p>

                  {/* Key Highlights list */}
                  <ul className="space-y-2.5 pt-2">
                    {founder.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-normal">
                        <div className="mt-0.5 rounded-full p-0.5 bg-primary/10 text-primary flex-shrink-0">
                          <Rocket className="w-3 h-3" />
                        </div>
                        <span className="font-semibold text-foreground/80">
                          {lang === "bn" ? bullet.bn : bullet.en}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Social and Contact Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-border/40">
                    <a
                      href={founder.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 bg-[#0a66c2]/10 border border-[#0a66c2]/20 hover:bg-[#0a66c2]/20 text-[#60a5fa] hover:scale-105"
                    >
                      <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>

                    {founder.links.portfolio && (
                      <a
                        href={founder.links.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 bg-primary/10 border border-primary/20 hover:bg-primary/20 text-foreground hover:scale-105"
                      >
                        <Globe className="w-4 h-4 text-primary" />
                        {lang === "bn" ? "পোর্টফোলিও" : "Portfolio"}
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    )}

                    {"facebook" in founder.links && founder.links.facebook && (
                      <a
                        href={founder.links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 text-[#60a5fa] hover:scale-105"
                      >
                        <Facebook className="w-4 h-4 text-blue-500" />
                        Facebook
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    )}

                    <a
                      href={`tel:${founder.links.phone}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-400 hover:scale-105 ml-auto sm:ml-0"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      {founder.links.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 4. Strategic & Marketing Partner Section */}
          <motion.div 
            variants={itemVariants}
            className="rounded-3xl border border-violet-500/20 p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-violet-950/20 via-purple-950/20 to-indigo-950/20 shadow-2xl hover:border-violet-500/30 transition-all duration-500"
          >
            {/* Visual background element */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Logo and branding */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20 flex-shrink-0">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                    {lang === "bn" ? sectionContent.partnerHeading.bn : sectionContent.partnerHeading.en}
                  </span>
                  <h3 className="text-3xl font-black text-foreground tracking-tight mt-0.5">
                    {lang === "bn" ? sectionContent.partnerName.bn : sectionContent.partnerName.en}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 max-w-4xl">
                <p className="text-base sm:text-lg text-muted-foreground/90 leading-relaxed font-medium">
                  {lang === "bn" ? sectionContent.partnerDescription.bn : sectionContent.partnerDescription.en}
                </p>
                <div className="p-4 rounded-2xl border border-violet-500/20 bg-violet-500/5 text-violet-300 font-bold text-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {lang === "bn" ? sectionContent.partnerSlogan.bn : sectionContent.partnerSlogan.en}
                  </span>
                </div>
              </div>

              {/* Highlights capabilities grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {partnerHighlights.map((highlight, idx) => {
                  const IconComp = highlight.icon;
                  return (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md hover:border-violet-500/20 hover:bg-violet-950/10 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center flex-shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold tracking-tight text-foreground/90">
                        {lang === "bn" ? highlight.bn : highlight.en}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* 5. Bottom Connection Blurb */}
          <motion.div variants={itemVariants} className="text-center pt-4 flex flex-col gap-2">
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto font-medium">
              {lang === "bn" ? "আমাদের ক্লায়েন্টসমূহ: " : "Our Clients: "}
              <a href="http://zargon.bid/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Zargon</a>,{" "}
              <a href="http://yarnhousebd.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">YarnHouseBD</a>,{" "}
              <a href="https://onlyonebd.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OnlyOneBD</a> 
              {lang === "bn" ? " এবং আরও অনেকে।" : " and much more."}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto font-medium">
              {lang === "bn" ? "ক্লায়েন্টদের জন্য আমাদের দেওয়া থিমগুলো:" : "Themes we provide to the clients:"}
              <br/>
              <a href="https://youtu.be/CJslkng8xAI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center justify-center gap-1 mt-1">
                <Play className="w-3 h-3" /> Theme Preview 1 (YouTube)
              </a>
              <a href="https://youtu.be/HXHFWxg4wrE" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center justify-center gap-1 mt-1">
                <Play className="w-3 h-3" /> Theme Preview 2 (YouTube)
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
