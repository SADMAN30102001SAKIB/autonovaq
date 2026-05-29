// All bilingual content for AutoNovaQ website
// bn = বাংলা (Bangla), en = English

export const companyInfo = {
  name: "AutoNovaQ",
  phone: "+880 1648-234724",
  whatsapp: "+8801648234724",
  email: "sadman30102001sakib@gmail.com",
  address: {
    bn: "তালাইমারি, রাজশাহী",
    en: "Talaimari, Rajshahi",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/sadman.sakib.232100",
    whatsapp: "https://wa.me/8801648234724",
    linkedin: "https://www.linkedin.com/in/sadmansakib30102001",
    youtube: "https://www.youtube.com/@buildwithsakib",
  },
};

export const navItems = [
  { bn: "হোম", en: "Home", href: "#home" },
  { bn: "সমস্যা", en: "Problems", href: "#problems" },
  { bn: "সেবাসমূহ", en: "Solutions", href: "#solutions" },
  { bn: "ফিচারস", en: "Features", href: "#features" },
  { bn: "তুলনা", en: "Comparison", href: "#comparison" },
  { bn: "মূল্য", en: "Pricing", href: "#pricing" },
  { bn: "ভিডিও গাইড", en: "Video Guides", href: "#videos" },
  { bn: "আমাদের সম্পর্কে", en: "About Us", href: "#about" },
  { bn: "প্রশ্নোত্তর", en: "FAQ", href: "#faq" },
  { bn: "যোগাযোগ", en: "Contact", href: "#contact" },
];

export const heroContent = {
  badge: {
    bn: "🚀 বাংলাদেশের ব্যবসার জন্য তৈরি",
    en: "🚀 Built for Bangladeshi Businesses",
  },
  headline: {
    bn: "আপনার ব্যবসার সম্পূর্ণ ",
    en: "Complete ",
  },
  headlineHighlight: {
    bn: "অটোমেশন",
    en: "Automation",
  },
  headlineEnd: {
    bn: " সল্যুশন",
    en: " for Your Business",
  },
  subheadline: {
    bn: "Excel, ম্যানুয়াল ডেলিভারি, আলাদা ডেভেলপার - সব ঝামেলা বাদ দিন। একবারের পেমেন্টে পান দুইটি শক্তিশালী ওয়েবসাইট যা আপনার পুরো ই-কমার্স ব্যবসা অটোমেটিক চালাবে।",
    en: "Ditch Excel, manual delivery, and expensive developers. Get two powerful websites that run your entire ecommerce business automatically - with a single one-time payment.",
  },
  ctaPrimary: {
    bn: "এখনই শুরু করুন",
    en: "Get Started Now",
  },
  ctaSecondary: {
    bn: "ফ্রি ডেমো দেখুন",
    en: "Watch Free Demo",
  },
  trustedBy: {
    bn: "ইতিমধ্যে বিশ্বস্ত",
    en: "Already Trusted By",
  },
  typewriterWords: {
    bn: [
      "ই-কমার্স অটোমেশন",
      "ইনভেন্টরি ম্যানেজমেন্ট",
      "কুরিয়ার অটোমেশন",
      "বিজনেস অ্যানালিটিক্স",
    ],
    en: [
      "E-Commerce Automation",
      "Inventory Management",
      "Courier Automation",
      "Business Analytics",
    ],
  },
};

export const statsData = [
  {
    value: "50+",
    label: { bn: "সন্তুষ্ট ক্লায়েন্ট", en: "Happy Clients" },
  },
  {
    value: "10,000+",
    label: { bn: "অর্ডার প্রসেসড", en: "Orders Processed" },
  },
  {
    value: "99.9%",
    label: { bn: "আপটাইম গ্যারান্টি", en: "Uptime Guarantee" },
  },
  {
    value: "৳0",
    label: { bn: "মাসিক খরচ", en: "Monthly Cost" },
  },
];

export const problemsContent = {
  sectionTitle: {
    bn: "আপনার ব্যবসার ",
    en: "Your Business ",
  },
  sectionTitleHighlight: {
    bn: "সমস্যাগুলো",
    en: "Pain Points",
  },
  sectionSubtitle: {
    bn: "এই সমস্যাগুলো কি আপনারও আছে? বেশিরভাগ ই-কমার্স ব্যবসা এই কারণে ক্ষতির মুখে পড়ে।",
    en: "Do these problems sound familiar? Most ecommerce businesses face losses due to these issues.",
  },
  problems: [
    {
      icon: "FileSpreadsheet",
      title: {
        bn: "Excel-এ ম্যানুয়াল ডাটা এন্ট্রি",
        en: "Manual Data Entry in Excel",
      },
      description: {
        bn: "প্রতিটা অর্ডার Excel-এ বসাতে ২-৩ জন লোক লাগে। বড় ডাটা হলে সময় নষ্ট আর ভুল এন্ট্রি হয়।",
        en: "Every order requires 2-3 people to enter in Excel. Large data means wasted time and entry errors.",
      },
    },
    {
      icon: "Truck",
      title: {
        bn: "কুরিয়ার ওয়েবসাইটে আবার এন্ট্রি",
        en: "Double Entry in Courier Portal",
      },
      description: {
        bn: "Excel-এ বসানোর পর আবার কুরিয়ার ওয়েবসাইটে নাম, ফোন, ঠিকানা, COD টাইপ করতে হয়। একই কাজ দুইবার।",
        en: "After Excel, you retype name, phone, address, COD in courier portals. Same work done twice.",
      },
    },
    {
      icon: "PackageX",
      title: { bn: "স্টক হিসাব মিলছে না", en: "Stock Count Never Matches" },
      description: {
        bn: "বিক্রি হচ্ছে কিন্তু Excel-এ স্টক কাটে না। Size-Color অনুযায়ী হিসাব গরমিল, আউট-অফ-স্টক প্রোডাক্ট বিক্রি হয়ে যায়।",
        en: "Products sell but Excel stock doesn't update. Size-Color mismatch leads to overselling out-of-stock items.",
      },
    },
    {
      icon: "CircleDollarSign",
      title: {
        bn: "দিনের শেষে লাভ কত জানা যায় না",
        en: "Daily Profit is Unknown",
      },
      description: {
        bn: "Buying price আর selling price আলাদা করে হিসাব করতে হয়। দিন শেষে আসল লাভ কত - কেউ নিশ্চিত না।",
        en: "Buying and selling prices must be manually compared. At day's end, actual profit remains uncertain.",
      },
    },
    {
      icon: "TrendingDown",
      title: {
        bn: "কোন প্রোডাক্ট ভালো চলছে বোঝা যায় না",
        en: "No Insight on Product Performance",
      },
      description: {
        bn: "কোন প্রোডাক্ট কত % বিক্রি হচ্ছে, কোনটা slow - ম্যানুয়ালি গুনতে হয়। সিদ্ধান্ত নিতে হয় আন্দাজে।",
        en: "Which product sells what %, which is slow - requires manual counting. Decisions are made by guesswork.",
      },
    },
    {
      icon: "UsersRound",
      title: { bn: "বেশি স্টাফ দরকার হচ্ছে", en: "Too Many Staff Needed" },
      description: {
        bn: "শুধু ম্যানেজমেন্টের জন্যই ২-৩ জন আলাদা স্টাফ। অর্ডার বাড়লেই আরও লোক লাগে, খরচ বাড়ে।",
        en: "Just management requires 2-3 dedicated staff. More orders mean more people and higher costs.",
      },
    },
  ],
};

export const solutionsContent = {
  sectionTitle: {
    bn: "আমাদের ",
    en: "Our ",
  },
  sectionTitleHighlight: {
    bn: "সল্যুশন",
    en: "Solutions",
  },
  sectionSubtitle: {
    bn: "দুইটি শক্তিশালী প্ল্যাটফর্ম যা একসাথে আপনার পুরো ব্যবসা চালায়",
    en: "Two powerful platforms that together run your entire business",
  },
  products: [
    {
      id: "ecommerce",
      icon: "ShoppingCart",
      name: { bn: "ই-কমার্স ওয়েবসাইট", en: "E-Commerce Website" },
      tagline: { bn: "অনলাইনে বিক্রির জন্য", en: "For Online Selling" },
      description: {
        bn: "আধুনিক, দ্রুত ও কনভার্শন-ফোকাসড ই-কমার্স ওয়েবসাইট যেখানে কাস্টমার সরাসরি অর্ডার করতে পারে।",
        en: "Modern, fast, conversion-focused ecommerce website where customers can order directly.",
      },
      features: [
        {
          bn: "আধুনিক ও দ্রুত লোডিং ডিজাইন",
          en: "Modern & Fast Loading Design",
        },
        { bn: "AI-পাওয়ার্ড প্রোডাক্ট সার্চ", en: "AI-Powered Product Search" },
        { bn: "কার্ট ও চেকআউট সিস্টেম", en: "Cart & Checkout System" },
        { bn: "অনলাইন পেমেন্ট ইন্টিগ্রেশন", en: "Online Payment Integration" },
        {
          bn: "রিয়েল-টাইম চ্যাট ও কল সাপোর্ট",
          en: "Real-time Chat & Call Support",
        },
        {
          bn: "User/Admin রোল-বেসড এক্সেস",
          en: "User/Admin Role-based Access",
        },
        { bn: "মোবাইল-অপটিমাইজড ডিজাইন", en: "Mobile-optimized Design" },
        { bn: "SEO অপটিমাইজড", en: "SEO Optimized" },
      ],
    },
    {
      id: "inventory",
      icon: "BarChart3",
      name: {
        bn: "ইনভেন্টরি ও বিজনেস ম্যানেজমেন্ট",
        en: "Inventory & Business Management",
      },
      tagline: {
        bn: "পুরো ব্যবসা ম্যানেজ করার জন্য",
        en: "For Complete Business Management",
      },
      description: {
        bn: "স্টক, অর্ডার, ডেলিভারি, হিসাব, কাস্টমার - সব একটি অ্যাপে। Excel-এর বিকল্প।",
        en: "Stock, orders, delivery, accounts, customers - all in one app. The Excel replacement.",
      },
      features: [
        {
          bn: "অটোমেটিক স্টক আপডেট (Size/Color)",
          en: "Auto Stock Update (Size/Color)",
        },
        { bn: "এক ক্লিকে কুরিয়ার বুকিং", en: "One-click Courier Booking" },
        { bn: "প্রফিট ট্র্যাকিং ও রিপোর্ট", en: "Profit Tracking & Reports" },
        { bn: "ABC প্রোডাক্ট এনালাইসিস", en: "ABC Product Analysis" },
        { bn: "সেলস ফোরকাস্টিং", en: "Sales Forecasting" },
        {
          bn: "কাস্টমার র‍্যাঙ্কিং (VIP/Gold/Silver)",
          en: "Customer Ranking (VIP/Gold/Silver)",
        },
        {
          bn: "স্টাফ ম্যানেজমেন্ট ও একটিভিটি লগ",
          en: "Staff Management & Activity Log",
        },
        { bn: "অটোমেটিক ক্লাউড ব্যাকআপ", en: "Automatic Cloud Backup" },
      ],
    },
  ],
};

export const featuresContent = {
  sectionTitle: {
    bn: "সম্পূর্ণ ",
    en: "Complete ",
  },
  sectionTitleHighlight: {
    bn: "ফিচার লিস্ট",
    en: "Feature List",
  },
  sectionSubtitle: {
    bn: "আপনার ব্যবসা চালানোর জন্য যা যা দরকার - সব একটি প্যাকেজে",
    en: "Everything you need to run your business - all in one package",
  },
  categories: [
    {
      id: "ecommerce-core",
      icon: "ShoppingBag",
      title: { bn: "ই-কমার্স কোর ফিচারস", en: "E-Commerce Core Features" },
      features: [
        {
          bn: "ইমেইল/সোশ্যাল লগইন (Google, Facebook)",
          en: "Email/Social Login (Google, Facebook)",
        },
        {
          bn: "রোল-বেসড এক্সেস কন্ট্রোল (User/Admin/Superadmin)",
          en: "Role-based Access Control (User/Admin/Superadmin)",
        },
        {
          bn: "প্রোডাক্ট CRUD ও ভেরিয়েন্ট (Size/Color)",
          en: "Product CRUD & Variants (Size/Color)",
        },
        {
          bn: "প্রোডাক্ট ইমেজ গ্যালারি (Cloudinary)",
          en: "Product Image Gallery (Cloudinary)",
        },
        { bn: "ফিল্টার ও সার্চ সিস্টেম", en: "Filter & Search System" },
        {
          bn: "Persistent কার্ট (লগইন ও গেস্ট)",
          en: "Persistent Cart (Login & Guest)",
        },
        { bn: "Stripe পেমেন্ট ইন্টিগ্রেশন", en: "Stripe Payment Integration" },
      ],
    },
    {
      id: "order-delivery",
      icon: "Truck",
      title: { bn: "অর্ডার ও ডেলিভারি", en: "Order & Delivery" },
      features: [
        { bn: "অর্ডার লাইফসাইকেল ট্র্যাকিং", en: "Order Lifecycle Tracking" },
        {
          bn: "অটোমেটিক কুরিয়ার বুকিং (Steadfast, Pathao, RedX)",
          en: "Auto Courier Booking (Steadfast, Pathao, RedX)",
        },
        { bn: "শিপমেন্ট ট্র্যাকিং সিস্টেম", en: "Shipment Tracking System" },
        { bn: "ডেলিভারি ভাউচার এক্সপোর্ট", en: "Delivery Voucher Export" },
        { bn: "ব্যাচ ডেলিভারি সিলেকশন", en: "Batch Delivery Selection" },
        { bn: "Webhook ইন্টিগ্রেশন", en: "Webhook Integration" },
      ],
    },
    {
      id: "inventory-stock",
      icon: "Package",
      title: { bn: "স্টক ও ইনভেন্টরি", en: "Stock & Inventory" },
      features: [
        {
          bn: "স্মার্ট প্রোডাক্ট ট্র্যাকিং (ছবি, কালার, সাইজ)",
          en: "Smart Product Tracking (Photo, Color, Size)",
        },
        {
          bn: "বিক্রি হলেই অটোমেটিক স্টক কাটা",
          en: "Auto Stock Deduction on Sale",
        },
        { bn: "লো-স্টক এলার্ট", en: "Low Stock Alerts" },
        {
          bn: "কোড/কালার/বিবরণ দিয়ে ইনস্ট্যান্ট সার্চ",
          en: "Instant Search by Code/Color/Description",
        },
        {
          bn: "একাধিক প্রোডাক্ট ইমেজ আপলোড",
          en: "Multiple Product Image Upload",
        },
        {
          bn: "বাল্ক আপডেট ও বাল্ক অপারেশন",
          en: "Bulk Update & Bulk Operations",
        },
      ],
    },
    {
      id: "analytics",
      icon: "BarChart3",
      title: { bn: "বিজনেস অ্যানালিটিক্স", en: "Business Analytics" },
      features: [
        { bn: "মডুলার অ্যাডমিন ড্যাশবোর্ড", en: "Modular Admin Dashboard" },
        {
          bn: "ইন্টারেক্টিভ চার্ট (Area, Bar, Donut)",
          en: "Interactive Charts (Area, Bar, Donut)",
        },
        {
          bn: "ABC প্রোডাক্ট এনালাইসিস (A/B/C গ্রেড)",
          en: "ABC Product Analysis (A/B/C Grade)",
        },
        { bn: "সেলস ফোরকাস্টিং", en: "Sales Forecasting" },
        {
          bn: "কাস্টমার স্পেন্ডিং প্যাটার্ন",
          en: "Customer Spending Patterns",
        },
        { bn: "রেভিনিউ ও প্রফিট ট্রেন্ড", en: "Revenue & Profit Trends" },
        {
          bn: "দৈনিক/সাপ্তাহিক/মাসিক রিপোর্ট",
          en: "Daily/Weekly/Monthly Reports",
        },
      ],
    },
    {
      id: "customer-management",
      icon: "Users",
      title: { bn: "কাস্টমার ম্যানেজমেন্ট", en: "Customer Management" },
      features: [
        {
          bn: "অটোমেটিক কাস্টমার র‍্যাঙ্কিং (VIP/Gold/Silver/Bronze)",
          en: "Auto Customer Ranking (VIP/Gold/Silver/Bronze)",
        },
        {
          bn: "Repeat vs One-time কাস্টমার ট্র্যাক",
          en: "Repeat vs One-time Customer Track",
        },
        { bn: "কাস্টমার অর্ডার হিস্ট্রি", en: "Customer Order History" },
        { bn: "কাস্টমার যোগাযোগ তথ্য সেভ", en: "Customer Contact Info Saved" },
      ],
    },
    {
      id: "security",
      icon: "ShieldCheck",
      title: { bn: "সিকিউরিটি ও ব্যাকআপ", en: "Security & Backup" },
      features: [
        { bn: "এনক্রিপ্টেড পাসওয়ার্ড", en: "Encrypted Passwords" },
        {
          bn: "সিকিউর লগইন ও সেশন ম্যানেজমেন্ট",
          en: "Secure Login & Session Management",
        },
        { bn: "অটোমেটিক ক্লাউড ব্যাকআপ", en: "Automatic Cloud Backup" },
        { bn: "ডাটা রিস্টোর সিস্টেম", en: "Data Restore System" },
        {
          bn: "স্টাফ একটিভিটি লগ ও অডিট ট্রেইল",
          en: "Staff Activity Log & Audit Trail",
        },
        {
          bn: "JWT অথেনটিকেশন ও API সিকিউরিটি",
          en: "JWT Authentication & API Security",
        },
      ],
    },
  ],
};

export const howItWorksContent = {
  sectionTitle: {
    bn: "কিভাবে ",
    en: "How It ",
  },
  sectionTitleHighlight: {
    bn: "কাজ করে",
    en: "Works",
  },
  steps: [
    {
      step: "০১",
      stepEn: "01",
      title: { bn: "যোগাযোগ করুন", en: "Contact Us" },
      description: {
        bn: "আমাদের সাথে WhatsApp বা ফোনে যোগাযোগ করুন। আপনার ব্যবসার ধরন ও চাহিদা জানান।",
        en: "Contact us via WhatsApp or phone. Tell us about your business type and requirements.",
      },
    },
    {
      step: "০২",
      stepEn: "02",
      title: { bn: "কাস্টমাইজেশন", en: "Customization" },
      description: {
        bn: "আপনার ব্যবসা অনুযায়ী ওয়েবসাইট ও ইনভেন্টরি সিস্টেম কাস্টমাইজ করা হবে। প্রোডাক্ট, ক্যাটাগরি, ব্র্যান্ডিং সেটআপ।",
        en: "We customize the website and inventory system for your business. Products, categories, and branding setup.",
      },
    },
    {
      step: "০৩",
      stepEn: "03",
      title: { bn: "ডেলিভারি ও ট্রেনিং", en: "Delivery & Training" },
      description: {
        bn: "রেডি ওয়েবসাইট হ্যান্ডওভার এবং সিস্টেম ব্যবহারে ট্রেনিং দেওয়া হবে।",
        en: "Ready website handover and system usage training provided.",
      },
    },
    {
      step: "০৪",
      stepEn: "04",
      title: { bn: "ব্যবসা চলুক অটোমেটিক", en: "Business Runs Automatically" },
      description: {
        bn: "সেটআপের পর ৫ দিন কাস্টমাইজেশন উইন্ডো। কোনো সমস্যা হলে আমরাই ঠিক করব।",
        en: "5-day customization window after setup. Any issues will be fixed by us.",
      },
    },
  ],
};

export const comparisonContent = {
  sectionTitle: {
    bn: "তুলনামূলক ",
    en: "Detailed ",
  },
  sectionTitleHighlight: {
    bn: "বিশ্লেষণ",
    en: "Comparison",
  },
  sectionSubtitle: {
    bn: "Traditional পদ্ধতি, Shopify-টাইপ প্ল্যাটফর্ম আর আমাদের সল্যুশন - কোনটা আপনার জন্য সেরা?",
    en: "Traditional method, Shopify-type platform, and our solution - which is best for you?",
  },
  headers: {
    feature: { bn: "বিষয়", en: "Feature" },
    traditional: { bn: "Traditional পদ্ধতি", en: "Traditional Method" },
    shopify: { bn: "Shopify / SaaS", en: "Shopify / SaaS" },
    autonovaq: { bn: "AutoNovaQ", en: "AutoNovaQ" },
  },
  rows: [
    {
      feature: { bn: "প্রাথমিক খরচ", en: "Initial Cost" },
      traditional: {
        bn: "৳50,000+ (ডেভেলপার টিম)",
        en: "৳50,000+ (Developer Team)",
      },
      shopify: { bn: "কম, তবে ডেভেলপার লাগে", en: "Low, but developer needed" },
      autonovaq: {
        bn: "মাত্র ৳15,000 (One-time)",
        en: "Only ৳15,000 (One-time)",
      },
    },
    {
      feature: { bn: "মাসিক খরচ", en: "Monthly Cost" },
      traditional: {
        bn: "৳10,000+/মাস (সার্ভার + Maintenance)",
        en: "৳10,000+/month (Server + Maintenance)",
      },
      shopify: {
        bn: "~$70 ≈ ৳7,500-৳8,000/মাস",
        en: "~$70 ≈ ৳7,500-৳8,000/month",
      },
      autonovaq: { bn: "৳0 মাসিক খরচ", en: "৳0 Monthly Cost" },
    },
    {
      feature: { bn: "কাস্টমাইজেশন", en: "Customization" },
      traditional: {
        bn: "সময়সাপেক্ষ ও ব্যয়বহুল",
        en: "Time-consuming & Expensive",
      },
      shopify: {
        bn: "সীমিত (Extra অ্যাপ দরকার)",
        en: "Limited (Extra apps needed)",
      },
      autonovaq: { bn: "সম্পূর্ণ কাস্টমাইজযোগ্য", en: "Fully Customizable" },
    },
    {
      feature: { bn: "ইনভেন্টরি ম্যানেজমেন্ট", en: "Inventory Management" },
      traditional: {
        bn: "Excel-নির্ভর, Manual",
        en: "Excel-dependent, Manual",
      },
      shopify: {
        bn: "বেসিক, Advanced হলে extra অ্যাপ",
        en: "Basic, Advanced needs extra app",
      },
      autonovaq: {
        bn: "Advanced, Automated, Real-time",
        en: "Advanced, Automated, Real-time",
      },
    },
    {
      feature: { bn: "ডেলিভারি অটোমেশন", en: "Delivery Automation" },
      traditional: {
        bn: "Manual এন্ট্রি, Excel আপলোড",
        en: "Manual Entry, Excel Upload",
      },
      shopify: {
        bn: "Native নয়, third-party অ্যাপ",
        en: "Not native, third-party app",
      },
      autonovaq: {
        bn: "Direct API (Steadfast, Pathao, RedX)",
        en: "Direct API (Steadfast, Pathao, RedX)",
      },
    },
    {
      feature: { bn: "অ্যানালিটিক্স ও রিপোর্ট", en: "Analytics & Reports" },
      traditional: { bn: "সীমিত বা Manual", en: "Limited or Manual" },
      shopify: {
        bn: "ভালো কিন্তু App-dependent",
        en: "Good but App-dependent",
      },
      autonovaq: {
        bn: "Full analytics built-in",
        en: "Full analytics built-in",
      },
    },
    {
      feature: { bn: "বিজনেস ইনসাইটস", en: "Business Insights" },
      traditional: {
        bn: "নেই বা Manual হিসাব",
        en: "None or Manual Calculation",
      },
      shopify: { bn: "আংশিক", en: "Partial" },
      autonovaq: {
        bn: "ABC Analysis, Forecasting, VIP",
        en: "ABC Analysis, Forecasting, VIP",
      },
    },
    {
      feature: { bn: "স্টাফ ম্যানেজমেন্ট", en: "Staff Management" },
      traditional: { bn: "আলাদা সিস্টেম দরকার", en: "Separate system needed" },
      shopify: { bn: "Per-user খরচ", en: "Per-user cost" },
      autonovaq: {
        bn: "Unlimited users, Role-based",
        en: "Unlimited users, Role-based",
      },
    },
    {
      feature: { bn: "ডাটা ব্যাকআপ ও সিকিউরিটি", en: "Data Backup & Security" },
      traditional: {
        bn: "Developer-এর ওপর নির্ভর",
        en: "Depends on Developer",
      },
      shopify: { bn: "Platform-controlled", en: "Platform-controlled" },
      autonovaq: {
        bn: "Auto backup, Full ownership",
        en: "Auto backup, Full ownership",
      },
    },
    {
      feature: { bn: "স্কেলেবিলিটি", en: "Scalability" },
      traditional: { bn: "খরচ বাড়ে দ্রুত", en: "Cost increases rapidly" },
      shopify: {
        bn: "মাসিক খরচ বাড়তেই থাকে",
        en: "Monthly cost keeps increasing",
      },
      autonovaq: { bn: "একই খরচে স্কেল করা যায়", en: "Scale at same cost" },
    },
    {
      feature: { bn: "ওনারশিপ", en: "Ownership" },
      traditional: { bn: "Developer dependent", en: "Developer dependent" },
      shopify: { bn: "Platform dependent", en: "Platform dependent" },
      autonovaq: { bn: "সম্পূর্ণ আপনার নিজের", en: "Completely yours" },
    },
  ],
};

export const pricingContent = {
  sectionTitle: {
    bn: "সহজ ও স্বচ্ছ ",
    en: "Simple & Transparent ",
  },
  sectionTitleHighlight: {
    bn: "মূল্য",
    en: "Pricing",
  },
  sectionSubtitle: {
    bn: "কোনো লুকানো চার্জ নেই। কোনো মাসিক ফি নেই। একবার পেমেন্ট, চিরকালের সল্যুশন।",
    en: "No hidden charges. No monthly fees. One-time payment, lifetime solution.",
  },
  mainPlan: {
    name: { bn: "কমপ্লিট বিজনেস প্যাকেজ", en: "Complete Business Package" },
    price: "৳15,000",
    priceLabel: { bn: "একবারের পেমেন্ট", en: "One-time Payment" },
    description: {
      bn: "দুইটি ওয়েবসাইট + সম্পূর্ণ অটোমেশন",
      en: "Two Websites + Complete Automation",
    },
    includes: [
      {
        bn: "ফুল ফিচারড ই-কমার্স ওয়েবসাইট",
        en: "Full Featured E-Commerce Website",
      },
      {
        bn: "ইনভেন্টরি ও বিজনেস ম্যানেজমেন্ট অ্যাপ",
        en: "Inventory & Business Management App",
      },
      {
        bn: "কুরিয়ার অটোমেশন (Steadfast, Pathao, RedX)",
        en: "Courier Automation (Steadfast, Pathao, RedX)",
      },
      {
        bn: "সম্পূর্ণ বিজনেস অ্যানালিটিক্স",
        en: "Complete Business Analytics",
      },
      {
        bn: "স্টাফ ম্যানেজমেন্ট ও রোল সিস্টেম",
        en: "Staff Management & Role System",
      },
      { bn: "অটোমেটিক ক্লাউড ব্যাকআপ", en: "Automatic Cloud Backup" },
      { bn: "কাস্টমাইজেশন ও ব্র্যান্ডিং", en: "Customization & Branding" },
      {
        bn: "সেটআপের পর ৫ দিন ফ্রি সাপোর্ট",
        en: "5 Days Free Support After Setup",
      },
      { bn: "বাগ ফিক্স ও এরর রিকভারি", en: "Bug Fix & Error Recovery" },
    ],
    cta: { bn: "এখনই অর্ডার করুন", en: "Order Now" },
    note: {
      bn: "⚡ Shopify-এর ১ মাসের সাবস্ক্রিপশনের চেয়েও কম খরচে আপনি পুরো সিস্টেম পাচ্ছেন - চিরকালের জন্য।",
      en: "⚡ You're getting the complete system for less than 1 month of Shopify subscription - for a lifetime.",
    },
  },
  costBreakdown: {
    title: { bn: "খরচের তুলনা", en: "Cost Comparison" },
    items: [
      {
        label: { bn: "Traditional ডেভেলপমেন্ট", en: "Traditional Development" },
        initial: "৳50,000+",
        monthly: "৳10,000+",
        yearly: "৳1,70,000+",
      },
      {
        label: { bn: "Shopify / SaaS", en: "Shopify / SaaS" },
        initial: "৳5,000+",
        monthly: "৳7,500+",
        yearly: "৳95,000+",
      },
      {
        label: { bn: "AutoNovaQ", en: "AutoNovaQ" },
        initial: "৳15,000",
        monthly: "৳0",
        yearly: "৳15,000",
        highlight: true,
      },
    ],
    headers: {
      method: { bn: "পদ্ধতি", en: "Method" },
      initial: { bn: "প্রাথমিক খরচ", en: "Initial Cost" },
      monthly: { bn: "মাসিক", en: "Monthly" },
      yearly: { bn: "১ম বছরের মোট", en: "1st Year Total" },
    },
  },
};

export const testimonialsContent = {
  sectionTitle: {
    bn: "ক্লায়েন্টদের ",
    en: "Client ",
  },
  sectionTitleHighlight: {
    bn: "অভিজ্ঞতা",
    en: "Testimonials",
  },
  testimonials: [
    {
      name: "রাহিম উদ্দিন",
      nameEn: "Rahim Uddin",
      business: { bn: "ফ্যাশন হাউজ রাজশাহী", en: "Fashion House Rajshahi" },
      text: {
        bn: "আগে ৩ জন লোক শুধু অর্ডার ম্যানেজ করতো। এখন একজনেই পুরো কাজ হয়ে যায়। Excel ছাড়া ব্যবসা ভাবতেও পারতাম না, এখন সব অটোমেটিক।",
        en: "Previously 3 people just managed orders. Now one person handles everything. Couldn't imagine business without Excel, now everything is automatic.",
      },
      rating: 4,
    },
    {
      name: "তানভীর আহমেদ",
      nameEn: "Tanvir Ahmed",
      business: { bn: "স্টাইলজোন অনলাইন", en: "StyleZone Online" },
      text: {
        bn: "কুরিয়ার বুকিং এক ক্লিকে হয়ে যায়! আগে প্রতিদিন ১-২ ঘণ্টা শুধু কুরিয়ার এন্ট্রিতে যেত। এখন সেই সময়টা ব্যবসা বাড়াতে ব্যবহার করি।",
        en: "Courier booking happens in one click! Previously 1-2 hours daily went to courier entry. Now I use that time to grow my business.",
      },
      rating: 5,
    },
    {
      name: "নাজমুল হাসান",
      nameEn: "Nazmul Hasan",
      business: { bn: "ঢাকা ট্রেডার্স", en: "Dhaka Traders" },
      text: {
        bn: "সবচেয়ে ভালো লাগে যে প্রতিদিনের প্রফিট ক্লিয়ার দেখা যায়। আগে মাস শেষে গুনে বের করতে হতো। এখন ড্যাশবোর্ডে এক নজরে সব বুঝি।",
        en: "Best part is seeing daily profit clearly. Before, had to count at month end. Now I understand everything at a glance on the dashboard.",
      },
      rating: 5,
    },
    {
      name: "ফাতিমা আক্তার",
      nameEn: "Fatima Akter",
      business: { bn: "গ্রেস বুটিক", en: "Grace Boutique" },
      text: {
        bn: "১৫ হাজার টাকায় এত কিছু পাওয়া যাবে ভাবতেই পারিনি। Shopify-তে মাসে ৮ হাজার যেত। এখন সেই টাকাটা সেভ হচ্ছে।",
        en: "Never imagined getting so much for 15,000 taka. Was paying 8,000 monthly for Shopify. Now that money is being saved.",
      },
      rating: 4,
    },
  ],
};

export const faqContent = {
  sectionTitle: {
    bn: "সচরাচর ",
    en: "Frequently Asked ",
  },
  sectionTitleHighlight: {
    bn: "জিজ্ঞাসা",
    en: "Questions",
  },
  faqs: [
    {
      question: {
        bn: "সেটআপ করতে কত সময় লাগে?",
        en: "How long does setup take?",
      },
      answer: {
        bn: "সাধারণত ৩-৭ কার্যদিবসের মধ্যে সেটআপ সম্পন্ন হয়। এটা আপনার প্রোডাক্ট ও কাস্টমাইজেশনের পরিমাণের ওপর নির্ভর করে।",
        en: "Usually completed within 3-7 business days. It depends on your product count and customization requirements.",
      },
    },
    {
      question: {
        bn: "কোনো টেকনিক্যাল জ্ঞান লাগবে?",
        en: "Do I need any technical knowledge?",
      },
      answer: {
        bn: "একদমই না। আমাদের সিস্টেম যেকোনো মানুষ ব্যবহার করতে পারবে। আমরা সেটআপের সময় ট্রেনিংও দিই।",
        en: "Not at all. Anyone can use our system. We also provide training during setup.",
      },
    },
    {
      question: {
        bn: "মাসিক কোনো চার্জ আছে?",
        en: "Are there any monthly charges?",
      },
      answer: {
        bn: "না, কোনো মাসিক চার্জ নেই। ১৫,০০০ টাকা one-time পেমেন্ট। এরপর আর কোনো খরচ নেই।",
        en: "No, there are no monthly charges. ৳15,000 is a one-time payment. No further costs after that.",
      },
    },
    {
      question: {
        bn: "ওয়েবসাইট ক্র্যাশ করলে কী হবে?",
        en: "What happens if the website crashes?",
      },
      answer: {
        bn: "আমরা ক্র্যাশ বা এরর হলে ফ্রিতে ফিক্স করি। অটোমেটিক ব্যাকআপ থাকায় ডাটা হারানোর চিন্তা নেই।",
        en: "We fix crashes and errors for free. With automatic backups, there's no worry about data loss.",
      },
    },
    {
      question: {
        bn: "কোন কোন কুরিয়ার সার্ভিসের সাথে কাজ করে?",
        en: "Which courier services does it work with?",
      },
      answer: {
        bn: "Steadfast, Pathao, RedX সহ বাংলাদেশের প্রায় সব জনপ্রিয় কুরিয়ার সার্ভিসের সাথে কাজ করে। নতুন কুরিয়ার যোগ করাও সম্ভব।",
        en: "Works with Steadfast, Pathao, RedX and most popular Bangladeshi courier services. New couriers can be added too.",
      },
    },
    {
      question: {
        bn: "কত প্রোডাক্ট বা অর্ডার হ্যান্ডেল করতে পারে?",
        en: "How many products or orders can it handle?",
      },
      answer: {
        bn: "কোনো লিমিট নেই। ১০টা প্রোডাক্ট হোক বা ১০,০০০ - সিস্টেম একইভাবে কাজ করে।",
        en: "No limits. Whether 10 products or 10,000 - the system works the same way.",
      },
    },
    {
      question: {
        bn: "কাদের জন্য এই সিস্টেম?",
        en: "Who is this system for?",
      },
      answer: {
        bn: "Clothing ব্র্যান্ড, Facebook সেলার, অনলাইন স্টোর, Retail/Wholesale, যেকোনো ই-কমার্স ব্যবসার জন্য পারফেক্ট।",
        en: "Perfect for clothing brands, Facebook sellers, online stores, retail/wholesale, and any ecommerce business.",
      },
    },
    {
      question: {
        bn: "ডাটা কি সিকিউর থাকবে?",
        en: "Will my data be secure?",
      },
      answer: {
        bn: "হ্যাঁ। এনক্রিপ্টেড পাসওয়ার্ড, JWT অথেনটিকেশন, রোল-বেসড এক্সেস, এবং অটোমেটিক ক্লাউড ব্যাকআপ দিয়ে আপনার ডাটা সম্পূর্ণ সুরক্ষিত।",
        en: "Yes. Your data is fully protected with encrypted passwords, JWT authentication, role-based access, and automatic cloud backups.",
      },
    },
  ],
};

export const ctaContent = {
  headline: {
    bn: "আপনার ব্যবসা অটোমেট করুন আজই",
    en: "Automate Your Business Today",
  },
  subheadline: {
    bn: "একবার পেমেন্ট। দুইটা ওয়েবসাইট। পুরো ব্যবসা অটোমেটেড।",
    en: "One Payment. Two Websites. Complete Business Automated.",
  },
  cta: {
    bn: "এখনই যোগাযোগ করুন",
    en: "Contact Us Now",
  },
};

export const contactContent = {
  sectionTitle: {
    bn: "যোগাযোগ ",
    en: "Contact ",
  },
  sectionTitleHighlight: {
    bn: "করুন",
    en: "Us",
  },
  sectionSubtitle: {
    bn: "আপনার ব্যবসা নিয়ে আলোচনা করতে চান? আমাদের সাথে যোগাযোগ করুন। আমরা ৫ মিনিটে ডেমো দেখাতে পারি।",
    en: "Want to discuss your business? Contact us. We can show a demo in 5 minutes.",
  },
  form: {
    name: { bn: "আপনার নাম", en: "Your Name" },
    phone: { bn: "ফোন নম্বর", en: "Phone Number" },
    business: { bn: "ব্যবসার নাম", en: "Business Name" },
    message: { bn: "আপনার বার্তা", en: "Your Message" },
    submit: { bn: "বার্তা পাঠান", en: "Send Message" },
  },
  whatsappCta: {
    bn: "WhatsApp-এ মেসেজ করুন",
    en: "Message on WhatsApp",
  },
  phoneCta: {
    bn: "ফোন করুন",
    en: "Call Us",
  },
  emailCta: {
    bn: "ইমেইল করুন",
    en: "Email Us",
  },
};

export const footerContent = {
  tagline: {
    bn: "আপনার ব্যবসার সম্পূর্ণ অটোমেশন পার্টনার",
    en: "Your Complete Business Automation Partner",
  },
  quickLinks: {
    title: { bn: "দ্রুত লিংক", en: "Quick Links" },
  },
  services: {
    title: { bn: "আমাদের সেবা", en: "Our Services" },
    items: [
      { bn: "ই-কমার্স ওয়েবসাইট", en: "E-Commerce Website" },
      { bn: "ইনভেন্টরি ম্যানেজমেন্ট", en: "Inventory Management" },
      { bn: "কুরিয়ার অটোমেশন", en: "Courier Automation" },
      { bn: "বিজনেস অ্যানালিটিক্স", en: "Business Analytics" },
    ],
  },
  contact: {
    title: { bn: "যোগাযোগ", en: "Contact" },
  },
  copyright: {
    bn: `© ${new Date().getFullYear()} AutoNovaQ। সর্বস্বত্ব সংরক্ষিত।`,
    en: `© ${new Date().getFullYear()} AutoNovaQ. All rights reserved.`,
  },
  madeWith: {
    bn: "বাংলাদেশে ❤️ দিয়ে তৈরি",
    en: "Made with ❤️ in Bangladesh",
  },
};

export const perfectFor = {
  title: {
    bn: "কার জন্য ",
    en: "Perfect ",
  },
  titleHighlight: {
    bn: "পারফেক্ট?",
    en: "For?",
  },
  items: [
    {
      icon: "Shirt",
      bn: "Clothing ও Fashion ব্র্যান্ড",
      en: "Clothing & Fashion Brands",
    },
    { icon: "ShoppingCart", bn: "ই-কমার্স স্টোর", en: "E-Commerce Stores" },
    {
      icon: "Smartphone",
      bn: "Facebook ও সোশ্যাল মিডিয়া সেলার",
      en: "Facebook & Social Media Sellers",
    },
    {
      icon: "Store",
      bn: "Retail ও Wholesale ব্যবসা",
      en: "Retail & Wholesale Businesses",
    },
    { icon: "Package", bn: "অনলাইন সেলার", en: "Online Sellers" },
    {
      icon: "Building2",
      bn: "মাল্টি-লোকেশন ব্যবসা",
      en: "Multi-Location Businesses",
    },
  ],
};

export const videoGuidesContent = {
  sectionTitle: {
    bn: "আমাদের ভিডিও ",
    en: "Our Video ",
  },
  sectionTitleHighlight: {
    bn: "নির্দেশিকা ও কেস স্টাডি",
    en: "Guides & Case Studies",
  },
  sectionSubtitle: {
    bn: "ই-কমার্স ওয়েবসাইট, অটোমেশন, স্পিড, নিরাপত্তা এবং খরচ কমানোর খুঁটিনাটি সরাসরি ভিডিওতে দেখুন।",
    en: "Explore the details of e-commerce websites, automation, loading speed, security, and cost reduction directly in these videos.",
  },
  videos: [
    {
      id: "v_A3TwWHJYo",
      title: {
        bn: "কাস্টমার কেন ওয়েবসাইট ছেড়ে চলে যাচ্ছে? জানুন কেন আপনার স্পিডই আসল ভিলেন",
        en: "Why Customers Leave Your Site: Is Speed Your Ultimate Villain?",
      },
      duration: "06:36",
      summary: {
        bn: "এই ভিডিওটিতে আলোচনা করা হয়েছে কেন একটি ওয়েবসাইটের লোডিং স্পিড ব্যবসার সাফল্যের জন্য অত্যন্ত গুরুত্বপূর্ণ এবং কীভাবে স্লো ওয়েবসাইট কাস্টমারদের বিমুখ করে।",
        en: "This video discusses why a website's loading speed is critical to business success and how slow websites drive away customers.",
      },
      takeaways: [
        {
          bn: "লোডিং টাইম ৩ সেকেন্ডের বেশি হলে ৫৩% মোবাইল ব্যবহারকারী ওয়েবসাইট ছেড়ে চলে যায়। (০:০০-০:২৭)",
          en: "53% of mobile users abandon a website if its loading time exceeds 3 seconds. (0:00-0:27)"
        },
        {
          bn: "SolarWinds টুল দিয়ে বাংলাদেশের বেশ কিছু নামী ই-কমার্সের স্পিড পরীক্ষা করে দেখানো হয়েছে, যেখানে লোড হতে ১ থেকে ৬+ সেকেন্ডের বেশি সময় লেগেছে। (০:৫৬-৩:০৯)",
          en: "Tested several popular Bangladeshi e-commerce site speeds using SolarWinds, exposing major loading lags up to 6+ seconds. (0:56-3:09)"
        },
        {
          bn: "আমাদের ক্লায়েন্ট সাইট Jargon-এর লোডিং টাইম মাত্র ২৮৪ মিলি সেকেন্ড (০.২৮৪ সেকেন্ড) যা পেজ পরিবর্তন বা প্রোডাক্ট লোড হতে কোনো বাড়তি সময় নেয় না। (৩:১৩-৫:৩৮)",
          en: "Our client site Jargon loads in just 284 milliseconds (0.284 seconds) and changes pages instantly without loading lag. (3:13-5:38)"
        },
        {
          bn: "বড় ব্র্যান্ডগুলোর তুলনায় প্রায় ১% খরচে, জিরো মাসিক মেইনটেন্যান্স ফিতে আমরা দিচ্ছি ইনভেন্টরি, কুরিয়ার ও এসএমএস অটোমেশনযুক্ত সুপারফাস্ট ওয়েবসাইট। (৫:৪৩-৬:৩৬)",
          en: "Get a high-speed store with built-in inventory, courier, and SMS automation at ~1% of big brand costs, with zero monthly charges. (5:43-6:36)"
        }
      ],
      faqs: [
        {
          question: {
            bn: "ওয়েবসাইটের লোডিং স্পিড কেন ব্যবসার জন্য গুরুত্বপূর্ণ?",
            en: "Why is website loading speed critical for business?"
          },
          answer: {
            bn: "গবেষণায় দেখা গেছে, একটি ওয়েবসাইটের লোডিং টাইম ৩ সেকেন্ডের বেশি হলে ৫৩% মোবাইল ব্যবহারকারী ওয়েবসাইট ছেড়ে চলে যায়। এছাড়া লোডিং স্পিড ১ সেকেন্ডের বেশি হলে বার্ষিক আয়ের ওপরও নেতিবাচক প্রভাব পড়ে।",
            en: "Studies show that 53% of mobile users abandon a website if it takes more than 3 seconds to load. Furthermore, a load time over 1 second negatively impacts annual revenue."
          },
          timestamp: "০০:০০",
          seconds: 0
        },
        {
          question: {
            bn: "আমার ওয়েবসাইটের বর্তমান স্পিড কেমন তা কীভাবে যাচাই করব?",
            en: "How can I test my website's current speed?"
          },
          answer: {
            bn: "আপনি SolarWinds-এর মতো online tool ব্যবহার করে যেকোনো ওয়েবসাইটের ইউআরএল (URL) দিয়ে তার লোডিং টাইম বা পারফরম্যান্স পরীক্ষা করে দেখতে পারেন।",
            en: "You can test any website's loading time and performance by entering its URL into online speed test tools like SolarWinds."
          },
          timestamp: "০০:৫৬",
          seconds: 56
        },
        {
          question: {
            bn: "আপনাদের ই-কমার্স সলিউশনটি অন্যান্য ওয়েবসাইটের তুলনায় কতটা দ্রুত?",
            en: "How fast is your e-commerce solution compared to other websites?"
          },
          answer: {
            bn: "বাংলাদেশের প্রচলিত অনেক ই-কমার্স ওয়েবসাইটের লোডিং টাইম যেখানে ১ থেকে ৬ সেকেন্ডের বেশি, সেখানে আমাদের তৈরি করা ওয়েবসাইটগুলো মাত্র ২৮৪ মিলি সেকেন্ডের (০.২৮৪ সেকেন্ড) মতো অবিশ্বাস্য গতিতে লোড হতে সক্ষম।",
            en: "While popular e-commerce sites in Bangladesh take 1 to 6+ seconds to load, our sites load in just 284 milliseconds (0.284s), offering instant page transitions."
          },
          timestamp: "০৩:১৩",
          seconds: 193
        },
        {
          question: {
            bn: "ওয়েবসাইট তৈরির খরচ কেমন এবং কোনো মাসিক চার্জ আছে কি?",
            en: "What is the cost of website development, and is there a monthly fee?"
          },
          answer: {
            bn: "আমরা বড় ব্র্যান্ডগুলোর তুলনায় অনেক কম খরচে ওয়েবসাইট তৈরি করে দিই (প্রায় ১% খরচে) এবং আমাদের এই সার্ভিসের জন্য কোনো মাসিক চার্জ বা হিডেন কস্ট নেই।",
            en: "We offer high-performance e-commerce websites at a fraction of the cost (~1% of custom development) with zero monthly fees or hidden costs."
          },
          timestamp: "০৫:৪৩",
          seconds: 343
        },
        {
          question: {
            bn: "ওয়েবসাইট ছাড়াও আপনারা ব্যবসায়িক অটোমেশনের জন্য আর কী কী ফিচার দিচ্ছেন?",
            en: "What other business automation features do you provide besides the website?"
          },
          answer: {
            bn: "আমাদের সলিউশনে ইনভেন্টরি ম্যানেজমেন্ট, এক ক্লিকে কুরিয়ারে পণ্য পাঠানো, অটোমেটেড এসএমএস সার্ভিসসহ ব্যবসার যাবতীয় অটোমেশনের জন্য প্রয়োজনীয় সব ফিচার যুক্ত করা হয়েছে।",
            en: "Our package includes a complete suite of features like inventory management, one-click courier booking, and automated SMS marketing services."
          },
          timestamp: "০৬:০৮",
          seconds: 368
        }
      ]
    },
    {
      id: "fCFfhf1tsnw",
      title: {
        bn: "Shopify ও WordPress বনাম AutoNovaQ: কোন ই-কমার্স সলিউশনটি আপনার ব্যবসার জন্য সেরা?",
        en: "Shopify & WordPress vs AutoNovaQ: Choosing the Best E-commerce Solution"
      },
      duration: "08:23",
      summary: {
        bn: "এই ভিডিওটিতে ই-কমার্স ওয়েবসাইটের জন্য প্রচলিত প্ল্যাটফর্মগুলোর সীমাবদ্ধতা এবং 'AutoNovaQ'-এর অটোমেশন টুলের সুবিধাগুলোর তুলনা করা হয়েছে।",
        en: "This video compares the limitations of popular website builders (Shopify, WordPress) with the benefits of AutoNovaQ's automation tools."
      },
      takeaways: [
        {
          bn: "Shopify, WordPress বা Odoo কাস্টমাইজেশন সীমাবদ্ধতা এবং মেইনটেন্যান্সের ক্ষেত্রে বেশ জটিল ও অতিরিক্ত ব্যয়বহুল। (০:৪২-৩:৪৪)",
          en: "Shopify, WordPress, and Odoo have customization limits and can become complex and highly expensive to customize and run. (0:42-3:44)"
        },
        {
          bn: "ছোট পরিবর্তনের জন্যও ডেভেলপার নিয়োগ করতে হয় যা খরচ বাড়ায় এবং বড় কোনো সমস্যা হলে ভালো টেকনিক্যাল সাপোর্ট পাওয়া কষ্টকর।",
          en: "Minor revisions require hiring web developers, which increases costs, and finding good technical support is difficult."
        },
        {
          bn: "কাস্টম ডেভেলপমেন্ট ও আইটি ফার্ম থেকে ওয়েবসাইট তৈরি করা অত্যন্ত ব্যয়বহুল এবং ভিপিএস সার্ভারের মাসিক ভাড়া মেটাতে গিয়ে ব্যবসার লাভের ওপর নেতিবাচক প্রভাব পড়ে। (৪:৪৯-৫:৫৫)",
          en: "Custom development is very expensive. Dedicated VPS hosting incurs high monthly fees that escalate when upgrading servers to accommodate traffic growth. (4:49-5:55)"
        },
        {
          bn: "AutoNovaQ সলিউশনে ইনভেন্টরি ম্যানেজমেন্ট, অটোমেটিক স্টক আপডেট, এসএমএস মার্কেটিং এবং কুরিয়ার ডেলিভারি ইন্টিগ্রেশন বিল্ট-ইন থাকে এবং মাসিক চার্জ ছাড়াই কাজ করে। (৫:৫৬-৭:০৫)",
          en: "AutoNovaQ provides built-in inventory tracking, automated stock updates, SMS marketing, and courier integrations with zero monthly costs. (5:56-7:05)"
        },
        {
          bn: "ওয়ান-টাইম ১০,০০০ টাকায় লাইফটাইম অ্যাক্সেস অথবা মাসিক ২,০০০ টাকা সাবস্ক্রিপশন মডেলে নেওয়ার সুযোগ রয়েছে। সাথে ৭ দিনের ফ্রি ট্রায়াল অফার। (৭:০৬-৮:২৩)",
          en: "Available at a one-time BDT 10,000 lifetime fee or BDT 2,000 monthly subscription, backed by a 7-day free trial. (7:06-8:23)"
        }
      ],
      faqs: [
        {
          question: {
            bn: "প্রচলিত ওয়েবসাইট বিল্ডার (যেমন: Shopify, WordPress) ব্যবহারে প্রধান অসুবিধাগুলো কী কী?",
            en: "What are the main disadvantages of using traditional website builders like Shopify or WordPress?"
          },
          answer: {
            bn: "এগুলো ব্যবহারে কাস্টমাইজেশনের স্বাধীনতা কম এবং জটিল ফিচারের প্রয়োজন হলে ডেভেলপার নিয়োগ করতে হয়, যা খরচ বাড়ায়। এছাড়া এদের কারিগরি সাপোর্ট সব সময় সন্তোষজনক নয় এবং হাই-ট্রাফিকের সময় ওয়েবসাইট স্লো বা ক্র্যাশ হওয়ার সম্ভাবনা থাকে।",
            en: "Traditional builders limit customization freedom and require hiring developers for advanced features. Their customer support can be slow, and sites risk crashing or lagging during high-traffic spikes."
          },
          timestamp: "০০:৪২",
          seconds: 42
        },
        {
          question: {
            bn: "কাস্টম ওয়েবসাইট ডেভেলপমেন্টে কী ধরনের চ্যালেঞ্জ থাকে?",
            en: "What are the challenges of custom website development?"
          },
          answer: {
            bn: "কাস্টম ওয়েবসাইট তৈরি করা বেশ ব্যয়বহুল। এছাড়া ওয়েবসাইট হোস্ট করার জন্য মাসিক ভিপিএস (VPS) খরচ দিতে হয় এবং ট্রাফিক বাড়লে সার্ভারের ক্ষমতা বাড়ানোর জন্য নিয়মিত খরচ বৃদ্ধি পায়।",
            en: "Custom development has high upfront costs. Hosting on VPS servers demands monthly fees, and as traffic grows, upgrading servers leads to rising operational expenses."
          },
          timestamp: "০৪:৪৯",
          seconds: 289
        },
        {
          question: {
            bn: "AutoNovaQ-এর অটোমেশন টুলের সুবিধা কী?",
            en: "What are the benefits of using AutoNovaQ's automation tool?"
          },
          answer: {
            bn: "এটি অত্যন্ত সাশ্রয়ী এবং এতে ইনভেন্টরি ম্যানেজমেন্ট, অটোমেটিক স্টক আপডেট, এসএমএস মার্কেটিং এবং কুরিয়ার ডেলিভারি ইন্টিগ্রেশনের মতো শক্তিশালী ফিচার রয়েছে। এটি অনেক বেশি ট্রাফিক লোড হ্যান্ডেল করতে পারে এবং মাসিক রক্ষণাবেক্ষণ খরচ প্রায় নেই বললেই চলে।",
            en: "It is highly cost-effective, offering built-in inventory management, automatic stock tracking, SMS marketing, and courier integrations. It handles high traffic volumes smoothly with near-zero maintenance costs."
          },
          timestamp: "০৫:৫৬",
          seconds: 356
        },
        {
          question: {
            bn: "AutoNovaQ ব্যবহারের খরচ কেমন?",
            en: "What is the pricing model for AutoNovaQ?"
          },
          answer: {
            bn: "আপনি দুটি উপায়ে এটি নিতে পারেন: ১০,০০০ টাকায় এককালীন পেমেন্ট (ওয়ান-টাইম পেমেন্ট) অথবা মাসে মাত্র ২,০০০ টাকা সাবস্ক্রিপশন ফি দিয়ে।",
            en: "You can choose between two models: BDT 10,000 for lifetime access (one-time payment) or BDT 2,000 per month subscription."
          },
          timestamp: "০৭:০৬",
          seconds: 426
        },
        {
          question: {
            bn: "কোনো ফ্রি ট্রায়াল সুবিধা আছে কি?",
            en: "Is there a free trial available?"
          },
          answer: {
            bn: "হ্যাঁ, বর্তমানে সাত দিনের একটি লিমিটেড ফ্রি ট্রায়াল অফার করা হচ্ছে, যেখানে আপনি ওয়েবসাইট সেটআপ থেকে শুরু করে ব্যবসার যাবতীয় কার্যক্রম পরীক্ষা করে দেখার সুযোগ পাবেন।",
            en: "Yes, we offer a 7-day free trial where we set up the website and allow you to test all features and business activities."
          },
          timestamp: "০৭:৪৬",
          seconds: 466
        }
      ]
    },
    {
      id: "4Kib-5q4EJc",
      title: {
        bn: "ই-কমার্স ওয়েবসাইট বানাতে গিয়ে কি প্রতারিত হচ্ছেন? জেনে নিন বাস্তবতা",
        en: "Are You Getting Scammed Building E-commerce Sites? Know the Reality"
      },
      duration: "07:54",
      summary: {
        bn: "এই ভিডিওটিতে ই-কমার্স ওয়েবসাইট তৈরির ক্ষেত্রে সাধারণ ভুল এবং প্রতারণা থেকে বাঁচার উপায় সম্পর্কে আলোচনা করা হয়েছে।",
        en: "This video outlines common mistakes in building e-commerce websites and shares tips to avoid traps and frauds."
      },
      takeaways: [
        {
          bn: "ই-কমার্স ওয়েবসাইট তৈরির জন্য জনপ্রিয় প্ল্যাটফর্মগুলো (Shopify, WordPress, Odoo) কাস্টমাইজেশনে সীমাবদ্ধতা তৈরি করে এবং হাই-ট্রাফিকে ডাউন হয়। (০:২৫-৩:২০)",
          en: "Popular site builders (Shopify, WordPress, Odoo) impose customization limits and can crash under heavy traffic loads. (0:25-3:20)"
        },
        {
          bn: "আইটি ফার্ম বা ডেভেলপার দিয়ে কাস্টম ওয়েবসাইট ডেভেলপমেন্ট অনেক বেশি ব্যয়বহুল এবং এর পর প্রতি মাসে ভিপিএস সার্ভার ফি বড় চিন্তার বিষয়। (৩:২১-৪:২০)",
          en: "Custom site development from agencies is very expensive, and ongoing monthly VPS hosting bills are a big financial headache. (3:21-4:20)"
        },
        {
          bn: "কম খরচে ইনভেন্টরি, কুরিয়ার এপিআই বুকিং ও এসএমএস-এর মতো প্রিমিয়াম সুবিধা সম্পন্ন বিকল্প সলিউশন পাওয়া সম্ভব, যেখানে মান্থলি সার্ভার ফি নেই। (৫:৩০-৬:১০)",
          en: "Alternatives exist that offer premium features like inventory, courier booking, and SMS at a tiny fraction of typical costs with zero monthly server fees. (5:30-6:10)"
        },
        {
          bn: "AutoNovaQ প্যাকেজে ওয়ান টাইম ১০,০০০ টাকা অথবা মান্থলি মাত্র ২,০০০ টাকা সাবস্ক্রিপশন ফি দিয়ে ব্যবসা পরিচালনা করা সম্ভব। (৬:৫৫-৭:১৮)",
          en: "Our packages let you run your business at a one-time BDT 10,000 fee or BDT 2,000 monthly subscription with no hidden server costs. (6:55-7:18)"
        },
        {
          bn: "নতুন উদ্যোক্তাদের জন্য ৭ দিনের ফ্রি ট্রায়াল সুবিধা রয়েছে, যেখানে আমরা পুরো স্টোর ও অটোমেশন সেটআপ ফ্রিতে করে দেব। (৭:২০-৭:৫৪)",
          en: "Get a 7-day free trial where our team sets up the entire platform for you, letting you test the workflows completely free. (7:20-7:54)"
        }
      ],
      faqs: [
        {
          question: {
            bn: "ই-কমার্স ওয়েবসাইট তৈরির জন্য কোন প্ল্যাটফর্মগুলো সাধারণত ব্যবহার করা হয়?",
            en: "Which platforms are commonly used for e-commerce website development?"
          },
          answer: {
            bn: "ই-কমার্স ওয়েবসাইট তৈরির জন্য জনপ্রিয় প্ল্যাটফর্মগুলোর মধ্যে রয়েছে শপিফাই (Shopify), ওডু (Odoo) এবং ওয়ার্ডপ্রেস (WordPress)। তবে এগুলোর কাস্টমাইজেশন সীমাবদ্ধতা এবং মাসিক উচ্চমূল্যের কারণে ছোট ব্যবসার জন্য অনেক সময় এগুলো সাশ্রয়ী হয় না।",
            en: "Popular platforms include Shopify, Odoo, and WordPress. However, their customization limitations and high monthly costs often make them unviable for small businesses."
          },
          timestamp: "০০:২৫",
          seconds: 25
        },
        {
          question: {
            bn: "কাস্টম ওয়েবসাইট ডেভেলপার দিয়ে ওয়েবসাইট তৈরি করলে কী ধরনের সমস্যায় পড়তে হতে পারে?",
            en: "What issues can arise when hiring custom developers or agencies?"
          },
          answer: {
            bn: "কাস্টম ওয়েবসাইট তৈরি করা বেশ ব্যয়বহুল। এছাড়া ওয়েবসাইট হোস্ট করার জন্য ভিপিএস (VPS) সার্ভার বাবদ প্রতি মাসে বড় অঙ্কের খরচ দিতে হয় এবং ট্রাফিক বাড়লে সার্ভার আপগ্রেড করার জন্য খরচ আরও বাড়তে থাকে।",
            en: "Custom development is very expensive. Additionally, hosting on VPS servers incurs high monthly fees that escalate when upgrading servers to accommodate traffic growth."
          },
          timestamp: "০৩:২১",
          seconds: 201
        },
        {
          question: {
            bn: "কম খরচে ই-কমার্স ওয়েবসাইট পরিচালনার কি কোনো বিকল্প উপায় আছে?",
            en: "Is there a low-cost alternative for running e-commerce websites?"
          },
          answer: {
            bn: "হ্যাঁ, এমন কিছু সলিউশন আছে যা দিয়ে ইনভেন্টরি ম্যানেজমেন্ট, কুরিয়ার ইন্টিগ্রেশন এবং অটোমেটেড এসএমএস-এর মতো প্রিমিয়াম ফিচারগুলো অনেক কম খরচে পাওয়া সম্ভব, যেখানে মাসিক সার্ভার খরচ নেই বললেই চলে।",
            en: "Yes! There are advanced solutions that provide premium features like inventory management, courier API booking, and automated SMS at a low cost, without monthly server maintenance fees."
          },
          timestamp: "০৫:৩০",
          seconds: 330
        },
        {
          question: {
            bn: "আপনাদের প্ল্যাটফর্মে ওয়েবসাইট তৈরির খরচ কেমন?",
            en: "What is the pricing for website setup on your platform?"
          },
          answer: {
            bn: "আমরা দুটি প্যাকেজ অফার করছি: ওয়ান টাইম পেমেন্টে ১০,০০০ টাকা অথবা মাসিক সাবস্ক্রিপশন মডেলে মাত্র ২,০০০ টাকা, যেখানে কোনো অতিরিক্ত সার্ভার খরচ নেই।",
            en: "We offer two packages: BDT 10,000 one-time payment or BDT 2,000 monthly subscription with no extra server costs."
          },
          timestamp: "০৬:৫৫",
          seconds: 415
        },
        {
          question: {
            bn: "ওয়েবসাইট তৈরির আগে কি ট্রায়াল নেওয়ার সুযোগ আছে?",
            en: "Can I get a trial before ordering the website?"
          },
          answer: {
            bn: "হ্যাঁ, নতুন উদ্যোক্তাদের জন্য আমরা ৭ দিনের একটি ফ্রি ট্রায়াল দিচ্ছি, যেখানে পুরো সেটআপটি আমরা করে দেব যাতে আপনি কোনো খরচ ছাড়াই আপনার ব্যবসা পরীক্ষা করে দেখতে পারেন।",
            en: "Yes, we provide a 7-day free trial where we set up the system for you, allowing you to test everything risk-free."
          },
          timestamp: "০৭:২০",
          seconds: 440
        }
      ]
    },
    {
      id: "pm2sfZFxnjA",
      title: {
        bn: "ই-কমার্স ব্যবসার খরচ কমানোর উপায়: জিরো সার্ভার কস্ট সলিউশন",
        en: "Ways to Cut E-commerce Expenses: Zero Server Cost Solution"
      },
      duration: "08:55",
      summary: {
        bn: "এই ভিডিওটিতে ই-কমার্স ব্যবসার জন্য খরচ কমানোর এবং লাভ বাড়ানোর বিভিন্ন উপায় নিয়ে আলোচনা করা হয়েছে।",
        en: "This video shares various strategies to reduce operational costs and maximize profitability for e-commerce businesses."
      },
      takeaways: [
        {
          bn: "শপিফাই, ওডু বা ওয়ার্ডপ্রেসের মতো প্রচলিত প্ল্যাটফর্মগুলোর উচ্চ মাসিক ফি এবং অ্যাপ খরচ লাভের মার্জিন একদম কমিয়ে দেয়। (০:০০-৩:৩৭)",
          en: "High monthly subscription plans and app installation fees on Shopify/WordPress diminish most of your profit margin. (0:00-3:37)"
        },
        {
          bn: "কাস্টম ডেভেলপমেন্ট ও ভিপিএস সার্ভারের মাসিক বিল ব্যবসা বৃদ্ধির সাথে সাথে বাড়তে থাকে, যা ধরে রাখা কঠিন। (৩:৩৮-৬:০৫)",
          en: "Custom platforms on VPS servers accumulate high maintenance and hosting bills as traffic grows, which is hard to sustain."
        },
        {
          bn: "AutoNovaQ একটি আধুনিক 'জিরো সার্ভার কস্ট' সলিউশন অফার করছে, যেখানে সার্ভার বা হোস্টিং বাবদ কোনো মাসিক ফি দিতে হয় না। (৬:০৬-৭:৩৫)",
          en: "AutoNovaQ introduces a serverless framework providing a 'Zero Server Cost' solution with no monthly hosting bills. (6:06-7:35)"
        },
        {
          bn: "মাত্র ১০,০০০ টাকায় এককালীন পেমেন্টে লাইফটাইম অ্যাক্সেস অথবা মাসিক ২,০০০ টাকার সাবস্ক্রিপশন মডেলে পুরো অটোমেশন সেটআপ পাবেন। (৭:৩৬-৮:৫৫)",
          en: "Pay only BDT 10,000 for lifetime access or subscribe at BDT 2,000 per month for the complete automation suite. (7:36-8:55)"
        }
      ],
      faqs: [
        {
          question: {
            bn: "প্রচলিত ওয়েবসাইট বিল্ডার (যেমন: শপিফাই, ওয়ার্ডপ্রেস) কেন ই-কমার্স ব্যবসার জন্য সুবিধাজনক নয়?",
            en: "Why are traditional builders like Shopify or WordPress inconvenient for e-commerce?"
          },
          answer: {
            bn: "এই বিল্ডারগুলোতে কাস্টমাইজেশনের স্বাধীনতা কম এবং কোনো জটিল ফিচার বা কুরিয়ার ইন্টিগ্রেশন করতে চাইলে আলাদা ডেভেলপারের প্রয়োজন হয়, যা খরচ বাড়িয়ে দেয়। এছাড়া, এগুলোর মাসিক সাবস্ক্রিপশন চার্জ তুলনামূলক অনেক বেশি।",
            en: "They limit customization, requiring extra developers or costly plugins for tasks like courier booking. Furthermore, their monthly subscription fees are highly expensive for SMEs."
          },
          timestamp: "০০:৪৫",
          seconds: 45
        },
        {
          question: {
            bn: "কাস্টম ওয়েবসাইট ডেভেলপমেন্টের ক্ষেত্রে প্রধান সমস্যা কী?",
            en: "What is the main issue with custom website development?"
          },
          answer: {
            bn: "কাস্টম ওয়েবসাইট তৈরিতে প্রাথমিক ডেভেলপমেন্ট খরচ অনেক বেশি। এছাড়া ওয়েবসাইট বড় হওয়ার সাথে সাথে ভিজিটর ট্রাফিক সামাল দিতে ভিপিএস (VPS) সার্ভারের খরচ প্রতিনিয়ত বাড়তে থাকে, যা ব্যবসার লাভের ওপর নেতিবাচক প্রভাব ফেলে।",
            en: "Upfront development fees are high. Additionally, as traffic grows, VPS server hosting charges increase continuously, eating into the business profit margin."
          },
          timestamp: "০৩:৩৮",
          seconds: 218
        },
        {
          question: {
            bn: "'জিরো সার্ভার কস্ট' সলিউশন বলতে কী বোঝানো হয়েছে?",
            en: "What does the 'Zero Server Cost' solution mean?"
          },
          answer: {
            bn: "এটি এমন একটি ই-কমার্স সলিউশন যেখানে আপনাকে মাসে মাসে কোনো সার্ভার খরচ দিতে হবে না। এটি ইনভেন্টরি ম্যানেজমেন্ট, অটোমেটিক স্টক আপডেট এবং কুরিয়ার ডেলিভারি অটোমেশনের মতো আধুনিক সব ফিচার প্রদান করে।",
            en: "It is an e-commerce model where you pay nothing for hosting or servers. The platform comes with built-in stock tracking, order management, and shipping automation."
          },
          timestamp: "০৬:০৬",
          seconds: 366
        },
        {
          question: {
            bn: "আপনাদের প্যাকেজগুলোর খরচ কেমন?",
            en: "How much do your plans cost?"
          },
          answer: {
            bn: "আমাদের দুটি সাশ্রয়ী প্যাকেজ রয়েছে: প্রথমটি ১০,০০০ টাকার ওয়ান-টাইম পেমেন্ট এবং দ্বিতীয়টি প্রতি মাসে ২,০০০ টাকার সাবস্ক্রিপশন। উভয় ক্ষেত্রেই কোনো আলাদা সার্ভার খরচ নেই।",
            en: "We offer two affordable packages: BDT 10,000 for one-time lifetime access, or a monthly subscription of BDT 2,000. Both include zero server fees."
          },
          timestamp: "০৭:৫০",
          seconds: 470
        },
        {
          question: {
            bn: "আপনাদের সার্ভিসটি কি ট্রায়াল দিয়ে দেখার সুযোগ আছে?",
            en: "Do you offer a trial period for testing?"
          },
          answer: {
            bn: "হ্যাঁ, একটি সীমিত সময়ের অফার হিসেবে আমরা ৭ দিনের একটি ফ্রি ট্রায়াল দিচ্ছি, যেখানে আপনি আপনার পুরো ব্যবসার সেটআপ ফ্রিতে পরীক্ষা করতে পারবেন।",
            en: "Yes, we provide a 7-day promotional free trial where you can set up and run your e-commerce operations for free."
          },
          timestamp: "০৮:১৭",
          seconds: 497
        }
      ]
    },
    {
      id: "PmvEmkWJx_8",
      title: {
        bn: "ই-কমার্স ওয়েবসাইট কি হ্যাকারদের টার্গেট? নিরাপত্তা ও নির্ভরযোগ্যতা নিশ্চিত করো",
        en: "Is Your E-commerce Site a Hacker Target? Ensure Premium Security & Edge Reliability"
      },
      duration: "28:03",
      summary: {
        bn: "এই ভিডিওতে ই-কমার্স ওয়েবসাইটের নিরাপত্তা ও নির্ভরযোগ্যতা (Reliability) নিশ্চিত করার গুরুত্ব এবং প্রচলিত ভিপিএস (VPS) বা শেয়ারড হোস্টিং সিস্টেমের সীমাবদ্ধতাগুলো তুলে ধরা হয়েছে।",
        en: "This video highlights the security and stability risks of shared hosting/VPS and introduces AutoNovaQ's serverless edge architecture."
      },
      takeaways: [
        {
          bn: "সাধারণ ভিপিএস বা শেয়ারড হোস্টিংয়ে সিকিউরিটি দুর্বল থাকে, যা মেলওয়্যার ও DDoS অ্যাটাকের জন্য খুব ঝুঁকিপূর্ণ। (১:১৭-৩:৩০)",
          en: "Traditional VPS or shared hosting options have weak security defaults, leaving them prone to DDoS or malware. (1:17-3:30)"
        },
        {
          bn: "AutoNovaQ 'সার্ভারলেস এজ কম্পিউটিং' ব্যবহার করে, যা ফ্রন্ট এন্ড, ব্যাক এন্ড এবং ডেটাবেস সম্পূর্ণ আলাদা সার্ভারে বিভক্ত করে নিরাপত্তা বহুগুণ বাড়িয়ে দেয়। (৩:৫৭-১১:৩৫)",
          en: "AutoNovaQ decouples front-end, back-end, and database onto isolated, independent edge containers to increase site protection. (3:57-11:35)"
        },
        {
          bn: "ক্লাউডফ্লেয়ার (Cloudflare) ইন্টিগ্রেশনের মাধ্যমে কাস্টমারদের এজ লোকেশন থেকে মিলি-সেকেন্ডে সাইট লোড হয় এবং ট্রাফিক স্পাইক স্বয়ংক্রিয়ভাবে ম্যানেজ করা যায়।",
          en: "Cloudflare integration distributes content globally, loading stores in milliseconds and handling sudden traffic spikes without lag."
        },
        {
          bn: "ক্লাউডফ্লেয়ারের সিকিউরিটি পলিসি, রেট লিমিটিং, এবং ক্ষতিকর কোড ফিল্টারিং DDoS এবং ব্রুট ফোর্স অ্যাটাক রুখে দেয়। (১৪:৪৯-১৮:০৬)",
          en: "Integrated firewall security rules, rate limiting, and script filters prevent malicious traffic and DDoS. (14:49-18:06)"
        },
        {
          bn: "সার্ভিস প্যাকেজ ওয়ান টাইম ১০,০০০ টাকা অথবা মান্থলি ২,০০০ টাকা। সাথে ফ্রি ডট কম ডোমেইন এবং ৭ দিনের ফ্রি ট্রায়াল সুবিধা। (২৪:১১-২৮:০৩)",
          en: "Pricing starts at a one-time BDT 10,000 fee or BDT 2,000 monthly, including a free .com domain and a 7-day trial. (24:11-28:03)"
        }
      ],
      faqs: [
        {
          question: {
            bn: "সাধারণ ই-কমার্স ওয়েবসাইট কেন হ্যাকারদের টার্গেট হয়?",
            en: "Why do e-commerce websites often become targets for hackers?"
          },
          answer: {
            bn: "সাধারণ ই-কমার্স ওয়েবসাইটগুলোতে দুর্বল সিকিউরিটি বা ভিপিএস (VPS) ব্যবহার করা হয়, যা হ্যাকারদের জন্য DDoS অ্যাটাক বা মেলওয়্যার ইনজেক্ট করা সহজ করে দেয়।",
            en: "Traditional sites run on poorly secured VPS or shared hosting, making them easy targets for DDoS attacks, SQL injections, and malware distribution."
          },
          timestamp: "০০:৩২",
          seconds: 32
        },
        {
          question: {
            bn: "শেয়ারড হোস্টিং বা সাধারণ ভিপিএস (VPS) কেন ই-কমার্সের জন্য ঝুঁকিপূর্ণ?",
            en: "Why is shared hosting or basic VPS risky for e-commerce?"
          },
          answer: {
            bn: "শেয়ারড হোস্টিংয়ে রিসোর্স বা সার্ভারের ক্ষমতা শেয়ার করতে হয়, ফলে ট্রাফিক বাড়লে ওয়েবসাইট স্লো হয়ে যায়। অন্যদিকে, সাধারণ ভিপিএস একটি সিঙ্গেল মেশিন হওয়ায় তা ক্র্যাশ করলে পুরো ওয়েবসাইট ডাউন হয়ে যায় এবং এটি কোনো অটো-স্কেলেবিলিটি সাপোর্ট করে না।",
            en: "Shared hosting shares hardware limits, slowing down your store under load. A single VPS is a single point of failure; if the machine crashes, your store goes offline. It also lacks auto-scaling."
          },
          timestamp: "০১:৩১",
          seconds: 91
        },
        {
          question: {
            bn: "অটো-নোভা (AutoNovaQ) কীভাবে ওয়েবসাইটকে বেশি নির্ভরযোগ্য করে তোলে?",
            en: "How does AutoNovaQ ensure website reliability?"
          },
          answer: {
            bn: "আমরা 'সার্ভারলেস এজ কম্পিউটিং' ব্যবহার করি, যেখানে ফ্রন্ট এন্ড, ব্যাক এন্ড এবং ডেটাবেস আলাদা আলাদা সার্ভারে থাকে। এতে কোনো একটি সার্ভার সমস্যায় পড়লেও ওয়েবসাইট ডাউন হয় না।",
            en: "We utilize serverless edge computing, decoupling frontend, backend, database, and storage. If one component fails, the website remains online."
          },
          timestamp: "০৪:০৭",
          seconds: 247
        },
        {
          question: {
            bn: "ওয়েবসাইট লোডিং স্পিড বাড়ানোর উপায় কী?",
            en: "How is website loading speed optimized on AutoNovaQ?"
          },
          answer: {
            bn: "আমাদের সিস্টেমে ক্লাউডফ্লেয়ার (Cloudflare) সিডিএন ইন্টিগ্রেটেড থাকায়, ব্যবহারকারীর নিকটতম সার্ভার থেকে ওয়েবসাইট লোড হয়। এতে ওয়েবসাইট মিলি-সেকেন্ডে লোড হয়, যা ভিপিএস-এর চেয়ে অনেক দ্রুত।",
            en: "We integrate Cloudflare CDN, fetching content from the closest edge server to the user. This ensures sites load in milliseconds, outperforming conventional VPS servers."
          },
          timestamp: "০৬:৪২",
          seconds: 402
        },
        {
          question: {
            bn: "আপনাদের সার্ভার কি মাসে মাসে চার্জ নেয়?",
            en: "Do you charge monthly maintenance/hosting fees?"
          },
          answer: {
            bn: "না, আমাদের সিস্টেমে কোনো মাসিক সার্ভার মেইনটেন্যান্স খরচ নেই। আমরা ওয়ান-টাইম প্যাকেজ (১০,০০০ টাকা) এবং সাশ্রয়ী মান্থলি সাবস্ক্রিপশন (২,০০০ টাকা) প্রদান করি।",
            en: "No. Our edge system eliminates monthly server maintenance bills. We offer BDT 10,000 for one-time lifetime access or a BDT 2,000 monthly subscription."
          },
          timestamp: "২৪:১১",
          seconds: 1451
        },
        {
          question: {
            bn: "নতুন গ্রাহকদের জন্য কি কোনো ট্রায়াল সুবিধা আছে?",
            en: "Is there a trial option for new clients?"
          },
          answer: {
            bn: "হ্যাঁ, আমরা ৭ দিনের ফ্রি ট্রায়াল দিচ্ছি, যাতে আপনি কোনো খরচ ছাড়াই ওয়েবসাইট পরিচালনা করে এর কার্যকারিতা যাচাই করতে পারেন।",
            en: "Yes, we offer a 7-day free trial enabling you to test the setup and operations with zero financial risk."
          },
          timestamp: "২৭:৩০",
          seconds: 1650
        }
      ]
    },
    {
      id: "PLu6gtzurTKkPQXjZ-cqjB6GB4srkWVem3",
      isPlaylist: true,
      title: {
        bn: "Zargon অ্যাডমিন গাইড: সম্পূর্ণ ইকোসিস্টেম শিখুন (প্লেলিস্ট)",
        en: "Zargon Admin Guide: Complete Ecosystem Walkthrough (Full Playlist)"
      },
      duration: "Playlist",
      summary: {
        bn: "Zargon ইকোসিস্টেমের প্রতিটি পেজ এবং ফিচার কীভাবে ব্যবহার করবেন তার সম্পূর্ণ ধাপে ধাপে ভিডিও গাইড। অ্যাডমিন প্যানেল ম্যানেজমেন্ট থেকে শুরু করে অর্ডার প্রসেসিং, ইনভেন্টরি কন্ট্রোল এবং রিপোর্ট বিশ্লেষণ সবকিছুই শিখুন।",
        en: "A complete step-by-step video guide covering every page and feature of the Zargon ecosystem. Learn everything from admin panel management to order processing, inventory control, and report analysis."
      },
      takeaways: [
        {
          bn: "অ্যাডমিন ড্যাশবোর্ড কীভাবে নেভিগেট করবেন এবং মূল মেট্রিকগুলো বুঝবেন।",
          en: "How to navigate the admin dashboard and understand the key metrics at a glance."
        },
        {
          bn: "ইনভেন্টরি, প্রোডাক্ট ক্যাটালগ এবং স্টক লেভেল ম্যানেজ করার সম্পূর্ণ গাইড।",
          en: "Complete guide to managing inventory, product catalog, and stock levels."
        },
        {
          bn: "অর্ডার প্রসেস করা, কুরিয়ার বুকিং করা এবং ডেলিভারি ট্র্যাক করার ধাপ।",
          en: "Steps for processing orders, booking couriers, and tracking deliveries."
        },
        {
          bn: "সেলস রিপোর্ট, ABC অ্যানালিসিস এবং কাস্টমার ইনসাইট দেখার পদ্ধতি।",
          en: "How to view sales reports, ABC analysis, and customer insights for business decisions."
        },
        {
          bn: "স্টাফ ম্যানেজমেন্ট, রোল কনফিগারেশন এবং একটিভিটি লগ পর্যবেক্ষণ।",
          en: "Staff management, role configuration, and monitoring activity logs."
        }
      ],
      faqs: [
        {
          question: {
            bn: "Zargon অ্যাডমিন প্যানেল কীভাবে ব্যবহার করব?",
            en: "How do I use the Zargon admin panel?"
          },
          answer: {
            bn: "আমাদের সম্পূর্ণ ভিডিও প্লেলিস্টে Zargon ইকোসিস্টেমের প্রতিটি পেজ ও ফিচার বিস্তারিতভাবে দেখানো হয়েছে। প্লেলিস্টটি দেখুন এবং ধাপে ধাপে শিখুন।",
            en: "Our complete video playlist covers every page and feature of the Zargon ecosystem in detail. Watch the playlist to learn step-by-step."
          },
          timestamp: "০০:০০",
          seconds: 0
        },
        {
          question: {
            bn: "নতুন প্রোডাক্ট কীভাবে যোগ করব?",
            en: "How do I add a new product to the system?"
          },
          answer: {
            bn: "প্লেলিস্টে ইনভেন্টরি ম্যানেজমেন্ট ভিডিওতে দেখানো হয়েছে কীভাবে নতুন প্রোডাক্ট, ভেরিয়েন্ট (সাইজ/কালার) এবং ছবি যোগ করতে হয়।",
            en: "The inventory management video in the playlist demonstrates how to add new products, variants (size/color), and images to the system."
          },
          timestamp: "০০:০০",
          seconds: 0
        },
        {
          question: {
            bn: "কুরিয়ার বুকিং প্রক্রিয়া কেমন?",
            en: "What is the courier booking process?"
          },
          answer: {
            bn: "একটি অর্ডার সিলেক্ট করে এক ক্লিকে Steadfast, Pathao বা RedX-এ বুকিং করা যায়। বিস্তারিত প্রক্রিয়া প্লেলিস্টের অর্ডার ম্যানেজমেন্ট ভিডিওতে দেখুন।",
            en: "Select an order and book directly with Steadfast, Pathao, or RedX in a single click. See the detailed process in the order management video of the playlist."
          },
          timestamp: "০০:০০",
          seconds: 0
        }
      ]
    }
  ]
};
