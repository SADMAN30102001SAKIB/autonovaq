/**
 * AutoNovaQ business module suite.
 *
 * Every string is bilingual ({ bn, en }) to match the pattern used across
 * data/content.ts. Icons are stored as lucide-react component names and
 * resolved inside components/ModulesSection.tsx — keep them in sync there.
 */

export type Bilingual = { bn: string; en: string };

export interface ModuleGroup {
  title: Bilingual;
  items: Bilingual[];
}

export interface BusinessModule {
  id: string;
  /** lucide-react icon name — must exist in MODULE_ICONS */
  icon: string;
  name: Bilingual;
  /** 1–2 word rail label */
  short: Bilingual;
  tagline: Bilingual;
  /** gradient stops, applied via inline CSS vars (Tailwind can't JIT dynamic names) */
  from: string;
  to: string;
  groups: ModuleGroup[];
}

export const moduleSuiteHeader = {
  eyebrow: {
    bn: "এক প্ল্যাটফর্ম, পুরো বিজনেস",
    en: "One platform, your entire business",
  },
  title: {
    bn: "CRM, HRM, ERP, অ্যাকাউন্টিং, পেরোল",
    en: "CRM, HRM, ERP, Accounting, Payroll",
  },
  titleEnd: {
    bn: "— সবকিছু একসাথে",
    en: "— all in one place",
  },
  subtitle: {
    bn: "আলাদা আলাদা সফটওয়্যার কেনার দরকার নেই। একটাই সিস্টেম, একটাই ডেটাবেজ, একটাই লগইন — যেখানে আপনার সেলস, স্টক, হিসাব, কর্মচারী আর বেতন সব এক জায়গায় চলে।",
    en: "Stop stitching together five different tools. One system, one database, one login — sales, stock, accounts, people and payroll finally speaking the same language.",
  },
  note: {
    bn: "প্রতিটি মডিউল আলাদাভাবে চালু করা যায় — আপনি যেটা লাগবে সেটাই নিন।",
    en: "Every module can be switched on independently — pay for what you actually use.",
  },
};

export const businessModules: BusinessModule[] = [
  /* ─────────────────────────── CRM ─────────────────────────── */
  {
    id: "crm",
    icon: "Contact",
    name: { bn: "CRM — কাস্টমার রিলেশনশিপ", en: "CRM — Customer Relationships" },
    short: { bn: "CRM", en: "CRM" },
    tagline: {
      bn: "প্রথম মেসেজ থেকে রিপিট অর্ডার পর্যন্ত প্রতিটি কাস্টমারের পুরো গল্প এক স্ক্রিনে।",
      en: "Every customer's full story — from first message to repeat order — on one screen.",
    },
    from: "#3b82f6",
    to: "#6366f1",
    groups: [
      {
        title: { bn: "লিড ও পাইপলাইন", en: "Leads & Pipeline" },
        items: [
          { bn: "ওয়েব ফর্ম, ফেসবুক, ইনস্টাগ্রাম ও WhatsApp থেকে অটো লিড ক্যাপচার", en: "Auto lead capture from web forms, Facebook, Instagram & WhatsApp" },
          { bn: "লিড স্কোরিং — কোন লিড কিনবে সেটা আগেই বোঝা", en: "Lead scoring so you know which lead will actually buy" },
          { bn: "রাউন্ড-রবিন ও রুল-ভিত্তিক অটো অ্যাসাইনমেন্ট", en: "Round-robin and rule-based auto assignment" },
          { bn: "ডুপ্লিকেট লিড ডিটেকশন ও মার্জ", en: "Duplicate lead detection and merge" },
          { bn: "কাস্টমাইজেবল ড্র্যাগ-অ্যান্ড-ড্রপ ডিল পাইপলাইন", en: "Customisable drag-and-drop deal pipeline" },
          { bn: "ডিল ভ্যালু, প্রোবাবিলিটি ও এক্সপেক্টেড ক্লোজ ডেট", en: "Deal value, probability and expected close date" },
          { bn: "উইন/লস রিজন ট্র্যাকিং", en: "Win/loss reason tracking" },
          { bn: "মাস ও কোয়ার্টারভিত্তিক সেলস ফোরকাস্ট", en: "Monthly and quarterly sales forecasting" },
        ],
      },
      {
        title: { bn: "কন্টাক্ট ও ৩৬০° প্রোফাইল", en: "Contacts & 360° Profiles" },
        items: [
          { bn: "প্রতিটি কাস্টমারের ৩৬০° ভিউ — অর্ডার, পেমেন্ট, কমপ্লেইন, চ্যাট", en: "Full 360° view — orders, payments, complaints, chats" },
          { bn: "কোম্পানি ও ব্রাঞ্চ হায়ারার্কি (B2B অ্যাকাউন্ট)", en: "Company and branch hierarchy for B2B accounts" },
          { bn: "সম্পূর্ণ অ্যাক্টিভিটি টাইমলাইন", en: "Complete chronological activity timeline" },
          { bn: "ট্যাগ ও ডায়নামিক সেগমেন্টেশন", en: "Tags and dynamic segmentation" },
          { bn: "আনলিমিটেড কাস্টম ফিল্ড", en: "Unlimited custom fields" },
          { bn: "বাল্ক ইমপোর্ট/এক্সপোর্ট ও ডেটা ক্লিনআপ", en: "Bulk import/export with data cleanup" },
          { bn: "কনসেন্ট ও অপ্ট-আউট রেকর্ড", en: "Consent and opt-out records" },
        ],
      },
      {
        title: { bn: "সেলস অ্যাক্টিভিটি", en: "Sales Activity" },
        items: [
          { bn: "কল, মিটিং ও ভিজিট লগ", en: "Call, meeting and field-visit logging" },
          { bn: "ফলো-আপ রিমাইন্ডার ও টাস্ক অ্যাসাইন", en: "Follow-up reminders and task assignment" },
          { bn: "রেডিমেড SMS, ইমেইল ও WhatsApp টেমপ্লেট", en: "Ready-made SMS, email and WhatsApp templates" },
          { bn: "এক ক্লিকে WhatsApp চ্যাট শুরু", en: "One-click WhatsApp click-to-chat" },
          { bn: "টিম নোট, মেনশন ও ইন্টারনাল কমেন্ট", en: "Team notes, @mentions and internal comments" },
          { bn: "ফিল্ড টিমের জন্য মোবাইল চেক-ইন", en: "Mobile check-in for field sales teams" },
        ],
      },
      {
        title: { bn: "কোটেশন ও অর্ডার", en: "Quotes & Orders" },
        items: [
          { bn: "প্রফেশনাল কোটেশন বিল্ডার (বাংলা/ইংরেজি)", en: "Professional quotation builder (Bangla/English)" },
          { bn: "মাল্টিপল প্রাইস লিস্ট ও ডিসকাউন্ট রুল", en: "Multiple price lists and discount rules" },
          { bn: "ডিসকাউন্ট অনুমোদনের অ্যাপ্রোভাল ফ্লো", en: "Approval flow for discount thresholds" },
          { bn: "এক ক্লিকে কোটেশন → ইনভয়েস কনভার্সন", en: "One-click quote → invoice conversion" },
          { bn: "রিকারিং ও সাবস্ক্রিপশন অর্ডার", en: "Recurring and subscription orders" },
        ],
      },
      {
        title: { bn: "মার্কেটিং ও রিটেনশন", en: "Marketing & Retention" },
        items: [
          { bn: "SMS, ইমেইল ও WhatsApp ব্রডকাস্ট ক্যাম্পেইন", en: "SMS, email and WhatsApp broadcast campaigns" },
          { bn: "অ্যাবান্ডনড কার্ট রিকভারি অটোমেশন", en: "Abandoned-cart recovery automation" },
          { bn: "কুপন, ফ্ল্যাশ সেল ও ক্যাম্পেইন অ্যাট্রিবিউশন", en: "Coupons, flash sales and campaign attribution" },
          { bn: "লয়্যালটি পয়েন্ট ও রেফারেল প্রোগ্রাম", en: "Loyalty points and referral programme" },
          { bn: "চার্ন রিস্ক ও রিপিট-বায়ার সেগমেন্ট", en: "Churn risk and repeat-buyer segments" },
        ],
      },
      {
        title: { bn: "সেলস রিপোর্টিং", en: "Sales Reporting" },
        items: [
          { bn: "লাইভ সেলস ড্যাশবোর্ড", en: "Live sales dashboard" },
          { bn: "সেলস রেপ লিডারবোর্ড ও টার্গেট ট্র্যাকিং", en: "Rep leaderboard and target tracking" },
          { bn: "কনভার্সন ফানেল ও পাইপলাইন ভেলোসিটি", en: "Conversion funnel and pipeline velocity" },
          { bn: "সোর্স-ভিত্তিক ROI (কোন চ্যানেল লাভ দিচ্ছে)", en: "Source-wise ROI — which channel actually pays" },
          { bn: "ফোরকাস্ট vs অ্যাকচুয়াল ভ্যারিয়েন্স", en: "Forecast vs actual variance" },
        ],
      },
    ],
  },

  /* ─────────────────────────── HRM ─────────────────────────── */
  {
    id: "hrm",
    icon: "UsersRound",
    name: { bn: "HRM — হিউম্যান রিসোর্স", en: "HRM — Human Resources" },
    short: { bn: "HRM", en: "HRM" },
    tagline: {
      bn: "নিয়োগ থেকে অবসর — কর্মচারীর পুরো জীবনচক্র কাগজ ছাড়াই।",
      en: "Hire to retire — the full employee lifecycle without a single paper file.",
    },
    from: "#8b5cf6",
    to: "#d946ef",
    groups: [
      {
        title: { bn: "এমপ্লয়ি রেকর্ড", en: "Employee Records" },
        items: [
          { bn: "ডিজিটাল পার্সোনেল ফাইল — সব ডকুমেন্ট এক জায়গায়", en: "Digital personnel file with every document attached" },
          { bn: "ইন্টার‌্যাক্টিভ অর্গানোগ্রাম ও রিপোর্টিং লাইন", en: "Interactive org chart and reporting lines" },
          { bn: "জব হিস্ট্রি, প্রমোশন ও ট্রান্সফার রেকর্ড", en: "Job history, promotion and transfer records" },
          { bn: "কন্ট্রাক্ট ও NID/পাসপোর্ট এক্সপায়ারি অ্যালার্ট", en: "Contract and NID/passport expiry alerts" },
          { bn: "ইমার্জেন্সি কন্টাক্ট ও নমিনি তথ্য", en: "Emergency contact and nominee details" },
          { bn: "কনফিডেনশিয়াল ফিল্ডে রোল-ভিত্তিক অ্যাক্সেস", en: "Role-based access on confidential fields" },
          { bn: "এমপ্লয়ি সেলফ-সার্ভিস পোর্টাল ও মোবাইল অ্যাপ", en: "Employee self-service portal and mobile app" },
        ],
      },
      {
        title: { bn: "রিক্রুটমেন্ট (ATS)", en: "Recruitment (ATS)" },
        items: [
          { bn: "জব রিকুইজিশন ও অ্যাপ্রোভাল", en: "Job requisition and approval" },
          { bn: "নিজস্ব ক্যারিয়ার পেজ ও অ্যাপ্লিকেশন ফর্ম", en: "Branded careers page and application form" },
          { bn: "ক্যান্ডিডেট পাইপলাইন ও CV ডেটাব্যাংক", en: "Candidate pipeline and CV databank" },
          { bn: "ইন্টারভিউ শিডিউল ও স্কোরকার্ড", en: "Interview scheduling and scorecards" },
          { bn: "অফার লেটার জেনারেশন", en: "Offer letter generation" },
          { bn: "স্ট্রাকচার্ড অনবোর্ডিং চেকলিস্ট", en: "Structured onboarding checklist" },
        ],
      },
      {
        title: { bn: "অ্যাটেনডেন্স ও শিফট", en: "Attendance & Shifts" },
        items: [
          { bn: "বায়োমেট্রিক, QR ও জিও-ফেন্সড মোবাইল চেক-ইন", en: "Biometric, QR and geo-fenced mobile check-in" },
          { bn: "শিফট, রোস্টার ও উইকলি অফ প্ল্যানিং", en: "Shift, roster and weekly-off planning" },
          { bn: "লেট, আর্লি-আউট ও গ্রেস পিরিয়ড রুল", en: "Late, early-out and grace period rules" },
          { bn: "ওভারটাইম ক্যালকুলেশন ও অ্যাপ্রোভাল", en: "Overtime calculation and approval" },
          { bn: "টাইমশিট ও প্রজেক্ট-ওয়াইজ আওয়ার", en: "Timesheets and project-wise hours" },
          { bn: "মান্থলি অ্যাটেনডেন্স রেজিস্টার ও রিপোর্ট", en: "Monthly attendance register and reports" },
        ],
      },
      {
        title: { bn: "ছুটি ব্যবস্থাপনা", en: "Leave Management" },
        items: [
          { bn: "কাস্টম লিভ টাইপ ও পলিসি", en: "Custom leave types and policies" },
          { bn: "অ্যাক্রুয়াল, ক্যারি-ফরওয়ার্ড ও এনক্যাশমেন্ট", en: "Accrual, carry-forward and encashment" },
          { bn: "বাংলাদেশ হলিডে ক্যালেন্ডার প্রি-লোডেড", en: "Bangladesh holiday calendar pre-loaded" },
          { bn: "মাল্টি-লেভেল অ্যাপ্রোভাল চেইন", en: "Multi-level approval chain" },
          { bn: "লাইভ লিভ ব্যালান্স ও টিম ক্যালেন্ডার", en: "Live leave balance and team calendar" },
          { bn: "মাতৃত্বকালীন ও বিশেষ ছুটির আলাদা হিসাব", en: "Separate handling for maternity and special leave" },
        ],
      },
      {
        title: { bn: "পারফরম্যান্স ম্যানেজমেন্ট", en: "Performance Management" },
        items: [
          { bn: "KPI ও OKR গোল সেটিং", en: "KPI and OKR goal setting" },
          { bn: "অ্যাপ্রাইজাল সাইকেল ও রেটিং স্কেল", en: "Appraisal cycles with rating scales" },
          { bn: "৩৬০° ফিডব্যাক ও পিয়ার রিভিউ", en: "360° feedback and peer review" },
          { bn: "ওয়ান-অন-ওয়ান মিটিং নোট", en: "One-on-one meeting notes" },
          { bn: "কম্পিটেন্সি ম্যাট্রিক্স ও স্কিল গ্যাপ", en: "Competency matrix and skill-gap view" },
          { bn: "ইনক্রিমেন্ট ও প্রমোশন সুপারিশ ট্র্যাকিং", en: "Increment and promotion recommendation tracking" },
        ],
      },
      {
        title: { bn: "লার্নিং ও কালচার", en: "Learning & Culture" },
        items: [
          { bn: "ট্রেনিং প্ল্যান ও অ্যাটেনডেন্স রেকর্ড", en: "Training plans and attendance records" },
          { bn: "সার্টিফিকেশন ও লাইসেন্স ট্র্যাকিং", en: "Certification and licence tracking" },
          { bn: "কোম্পানি অ্যানাউন্সমেন্ট ও নোটিশ বোর্ড", en: "Company announcements and notice board" },
          { bn: "এমপ্লয়ি হ্যান্ডবুক ও পলিসি লাইব্রেরি", en: "Employee handbook and policy library" },
          { bn: "রিকগনিশন, অ্যাওয়ার্ড ও পালস সার্ভে", en: "Recognition, awards and pulse surveys" },
        ],
      },
      {
        title: { bn: "অফবোর্ডিং ও কমপ্লায়েন্স", en: "Offboarding & Compliance" },
        items: [
          { bn: "রেজিগনেশন ও নোটিশ পিরিয়ড ওয়ার্কফ্লো", en: "Resignation and notice-period workflow" },
          { bn: "এক্সিট ইন্টারভিউ ফর্ম ও অ্যানালিটিক্স", en: "Exit interview forms and analytics" },
          { bn: "ক্লিয়ারেন্স চেকলিস্ট ও অ্যাসেট রিটার্ন", en: "Clearance checklist and asset return" },
          { bn: "ফাইনাল সেটেলমেন্ট ক্যালকুলেশন", en: "Final settlement calculation" },
          { bn: "শ্রম আইন ২০০৬ অনুযায়ী সার্ভিস বেনিফিট", en: "Service benefits per Labour Act 2006" },
          { bn: "সম্পূর্ণ HR অডিট লগ", en: "Complete HR audit log" },
        ],
      },
    ],
  },

  /* ───────────────────────── PAYROLL ───────────────────────── */
  {
    id: "payroll",
    icon: "Wallet",
    name: { bn: "পেরোল ও বেতন", en: "Payroll & Compensation" },
    short: { bn: "পেরোল", en: "Payroll" },
    tagline: {
      bn: "অ্যাটেনডেন্স থেকে ব্যাংক অ্যাডভাইস — মাসের বেতন এক ক্লিকে, ভুল ছাড়া।",
      en: "Attendance to bank advice — the whole month's payroll in one click, without the errors.",
    },
    from: "#10b981",
    to: "#14b8a6",
    groups: [
      {
        title: { bn: "স্যালারি স্ট্রাকচার", en: "Salary Structure" },
        items: [
          { bn: "আনলিমিটেড আর্নিং ও ডিডাকশন হেড", en: "Unlimited earning and deduction heads" },
          { bn: "গ্রেড, ব্যান্ড ও ডেজিগনেশন-ভিত্তিক স্কেল", en: "Grade, band and designation-based scales" },
          { bn: "বেসিক, হাউজ রেন্ট, মেডিকেল, কনভেয়েন্স অটো ব্রেকডাউন", en: "Auto breakdown of basic, house rent, medical, conveyance" },
          { bn: "জয়েনিং ও রিজাইন মাসে প্রো-রেটা হিসাব", en: "Pro-rata calculation for joining and exit months" },
          { bn: "ইফেক্টিভ ডেট সহ স্যালারি রিভিশন ও অ্যারিয়ার", en: "Salary revisions with effective date and arrears" },
        ],
      },
      {
        title: { bn: "পেরোল প্রসেসিং", en: "Payroll Processing" },
        items: [
          { bn: "এক ক্লিকে মান্থলি পেরোল রান", en: "One-click monthly payroll run" },
          { bn: "অ্যাটেনডেন্স ও লিভ ডেটা অটো সিঙ্ক", en: "Automatic attendance and leave sync" },
          { bn: "ওভারটাইম ও হলিডে ডিউটি পেমেন্ট", en: "Overtime and holiday-duty pay" },
          { bn: "ফেস্টিভাল বোনাস ও পারফরম্যান্স বোনাস", en: "Festival bonus and performance bonus" },
          { bn: "সেলস কমিশন ও ইনসেন্টিভ ইন্টিগ্রেশন", en: "Sales commission and incentive integration" },
          { bn: "অ্যাডভান্স ও লোন ইনস্টলমেন্ট অটো কাটা", en: "Automatic advance and loan installment deduction" },
        ],
      },
      {
        title: { bn: "বাংলাদেশ কমপ্লায়েন্স", en: "Bangladesh Compliance" },
        items: [
          { bn: "NBR ট্যাক্স স্ল্যাব অনুযায়ী TDS ক্যালকুলেশন", en: "TDS calculation on current NBR tax slabs" },
          { bn: "ট্যাক্স কার্ড ও ইনভেস্টমেন্ট রিবেট হিসাব", en: "Tax card and investment rebate handling" },
          { bn: "প্রভিডেন্ট ফান্ড (কর্মচারী ও কোম্পানি অংশ)", en: "Provident fund — employee and company share" },
          { bn: "গ্র্যাচুইটি ও সার্ভিস বেনিফিট প্রভিশন", en: "Gratuity and service-benefit provision" },
          { bn: "বছর শেষে ট্যাক্স স্টেটমেন্ট ও সার্টিফিকেট", en: "Year-end tax statements and certificates" },
        ],
      },
      {
        title: { bn: "ডিসবার্সমেন্ট", en: "Disbursement" },
        items: [
          { bn: "ব্যাংক অ্যাডভাইস ফাইল (এক্সেল/টেক্সট ফরম্যাট)", en: "Bank advice file in Excel/text format" },
          { bn: "bKash, নগদ ও রকেট ডিসবার্সমেন্ট শিট", en: "bKash, Nagad and Rocket disbursement sheets" },
          { bn: "ক্যাশ পেমেন্ট শিট ও সিগনেচার রেজিস্টার", en: "Cash payment sheet with signature register" },
          { bn: "ব্যাচ অ্যাপ্রোভাল ও রিলিজ কন্ট্রোল", en: "Batch approval and release control" },
        ],
      },
      {
        title: { bn: "পে-স্লিপ ও রেকর্ড", en: "Payslips & Records" },
        items: [
          { bn: "বাংলা/ইংরেজি পে-স্লিপ PDF", en: "Bangla/English payslip PDF" },
          { bn: "ইমেইল ও WhatsApp-এ অটো পে-স্লিপ ডেলিভারি", en: "Automatic payslip delivery over email and WhatsApp" },
          { bn: "স্যালারি সার্টিফিকেট ও ব্যাংক লেটার", en: "Salary certificates and bank letters" },
          { bn: "পেরোল রেজিস্টার ও মান্থলি সামারি", en: "Payroll register and monthly summary" },
        ],
      },
      {
        title: { bn: "কন্ট্রোল ও অডিট", en: "Controls & Audit" },
        items: [
          { bn: "মেকার-চেকার অ্যাপ্রোভাল", en: "Maker-checker approval" },
          { bn: "প্রসেস শেষে পেরোল লক", en: "Payroll lock after processing" },
          { bn: "আগের মাসের সাথে ভ্যারিয়েন্স রিপোর্ট", en: "Variance report against previous month" },
          { bn: "ডিপার্টমেন্ট ও কস্ট-সেন্টার ওয়াইজ খরচ", en: "Department and cost-centre wise cost allocation" },
          { bn: "অ্যাকাউন্টিং-এ অটো জার্নাল পোস্টিং", en: "Automatic journal posting into Accounting" },
        ],
      },
    ],
  },

  /* ──────────────────── ACCOUNTING & FINANCE ──────────────────── */
  {
    id: "accounting",
    icon: "Calculator",
    name: { bn: "অ্যাকাউন্টিং ও ফাইন্যান্স", en: "Accounting & Finance" },
    short: { bn: "অ্যাকাউন্টিং", en: "Accounting" },
    tagline: {
      bn: "খাতা-কলম বাদ। ডাবল-এন্ট্রি লেজার থেকে ব্যালান্স শিট — সব অটো, সব অডিট-রেডি।",
      en: "Retire the ledger book. Double-entry to balance sheet, generated automatically and audit-ready.",
    },
    from: "#f59e0b",
    to: "#f97316",
    groups: [
      {
        title: { bn: "কোর লেজার", en: "Core Ledger" },
        items: [
          { bn: "কাস্টমাইজেবল চার্ট অফ অ্যাকাউন্টস", en: "Customisable chart of accounts" },
          { bn: "অটোমেটিক ডাবল-এন্ট্রি বুককিপিং", en: "Automatic double-entry bookkeeping" },
          { bn: "জার্নাল ভাউচার ও ম্যানুয়াল অ্যাডজাস্টমেন্ট", en: "Journal vouchers and manual adjustments" },
          { bn: "মাল্টি-ব্রাঞ্চ ও মাল্টি-কোম্পানি অ্যাকাউন্টিং", en: "Multi-branch and multi-company accounting" },
          { bn: "কস্ট সেন্টার ও প্রজেক্ট-ওয়াইজ হিসাব", en: "Cost centre and project-wise accounting" },
          { bn: "ফিসক্যাল ইয়ার ক্লোজিং ও ওপেনিং ব্যালান্স", en: "Fiscal year closing and opening balances" },
        ],
      },
      {
        title: { bn: "রিসিভেবল (বাকি আদায়)", en: "Receivables" },
        items: [
          { bn: "প্রফেশনাল ইনভয়েস ও মুশক-রেডি ফরম্যাট", en: "Professional invoices in Mushak-ready formats" },
          { bn: "কাস্টমার লেজার ও এজিং রিপোর্ট", en: "Customer ledger and aging report" },
          { bn: "পার্শিয়াল পেমেন্ট ও অ্যাডভান্স অ্যাডজাস্টমেন্ট", en: "Partial payments and advance adjustment" },
          { bn: "ক্রেডিট লিমিট ও ব্লক কন্ট্রোল", en: "Credit limits with blocking controls" },
          { bn: "অটো ডিউ রিমাইন্ডার (SMS/WhatsApp/ইমেইল)", en: "Automatic due reminders over SMS/WhatsApp/email" },
          { bn: "ক্রেডিট নোট ও রিফান্ড", en: "Credit notes and refunds" },
        ],
      },
      {
        title: { bn: "পেয়েবল (দেনা)", en: "Payables" },
        items: [
          { bn: "পারচেজ বিল ও ভেন্ডর ইনভয়েস এন্ট্রি", en: "Purchase bills and vendor invoice entry" },
          { bn: "ভেন্ডর লেজার ও এজিং", en: "Vendor ledger and aging" },
          { bn: "পেমেন্ট শিডিউলিং ও প্ল্যানিং", en: "Payment scheduling and planning" },
          { bn: "এমপ্লয়ি এক্সপেন্স ক্লেইম ও রিইম্বার্সমেন্ট", en: "Employee expense claims and reimbursement" },
          { bn: "পেটি ক্যাশ ও ডেইলি এক্সপেন্স", en: "Petty cash and daily expense tracking" },
          { bn: "ডেবিট নোট ও পারচেজ রিটার্ন", en: "Debit notes and purchase returns" },
        ],
      },
      {
        title: { bn: "ব্যাংক ও ক্যাশ", en: "Banking & Cash" },
        items: [
          { bn: "মাল্টিপল ব্যাংক ও মোবাইল ব্যাংকিং অ্যাকাউন্ট", en: "Multiple bank and mobile-banking accounts" },
          { bn: "ব্যাংক রিকনসিলিয়েশন", en: "Bank reconciliation" },
          { bn: "চেক রেজিস্টার ও পোস্ট-ডেটেড চেক ট্র্যাকিং", en: "Cheque register with post-dated cheque tracking" },
          { bn: "ক্যাশ বুক ও ডেইলি ক্লোজিং", en: "Cash book and daily closing" },
          { bn: "ইন্টার-অ্যাকাউন্ট ফান্ড ট্রান্সফার", en: "Inter-account fund transfers" },
        ],
      },
      {
        title: { bn: "ট্যাক্স ও VAT", en: "Tax & VAT" },
        items: [
          { bn: "VAT ক্যালকুলেশন ও মুশক ৬.৩ ইনভয়েস", en: "VAT calculation and Mushak 6.3 invoicing" },
          { bn: "VDS ও TDS ট্র্যাকিং", en: "VDS and TDS tracking" },
          { bn: "ইনপুট-আউটপুট VAT সামারি", en: "Input-output VAT summary" },
          { bn: "উইথহোল্ডিং ট্যাক্স রিপোর্ট", en: "Withholding tax reports" },
          { bn: "প্রতিটি এন্ট্রির ইমিউটেবল অডিট ট্রেইল", en: "Immutable audit trail on every entry" },
        ],
      },
      {
        title: { bn: "অ্যাসেট ও ইনভেস্টমেন্ট", en: "Assets & Investment" },
        items: [
          { bn: "ফিক্সড অ্যাসেট রেজিস্টার", en: "Fixed asset register" },
          { bn: "স্ট্রেইট-লাইন ও রিডিউসিং ব্যালান্স ডিপ্রিসিয়েশন", en: "Straight-line and reducing-balance depreciation" },
          { bn: "অ্যাসেট ডিসপোজাল, ট্রান্সফার ও রিভ্যালুয়েশন", en: "Asset disposal, transfer and revaluation" },
          { bn: "লোন ও লিজ শিডিউল ট্র্যাকিং", en: "Loan and lease schedule tracking" },
        ],
      },
      {
        title: { bn: "ফাইন্যান্সিয়াল স্টেটমেন্ট", en: "Financial Statements" },
        items: [
          { bn: "ট্রায়াল ব্যালান্স ও জেনারেল লেজার", en: "Trial balance and general ledger" },
          { bn: "প্রফিট অ্যান্ড লস স্টেটমেন্ট", en: "Profit and loss statement" },
          { bn: "ব্যালান্স শিট", en: "Balance sheet" },
          { bn: "ক্যাশ ফ্লো স্টেটমেন্ট", en: "Cash flow statement" },
          { bn: "বাজেট vs অ্যাকচুয়াল ভ্যারিয়েন্স", en: "Budget vs actual variance" },
          { bn: "যেকোনো রিপোর্ট থেকে ভাউচার পর্যন্ত ড্রিল-ডাউন", en: "Drill down from any report to the source voucher" },
        ],
      },
    ],
  },

  /* ──────────────── ERP: INVENTORY & SUPPLY CHAIN ──────────────── */
  {
    id: "erp-inventory",
    icon: "Boxes",
    name: { bn: "ERP — ইনভেন্টরি ও সাপ্লাই চেইন", en: "ERP — Inventory & Supply Chain" },
    short: { bn: "ইনভেন্টরি", en: "Inventory" },
    tagline: {
      bn: "কোন গুদামে কত স্টক, কোন ব্যাচ কবে এক্সপায়ার — রিয়েল-টাইমে, অনুমান ছাড়া।",
      en: "Exactly what's in every warehouse, and which batch expires when — live, not guessed.",
    },
    from: "#06b6d4",
    to: "#3b82f6",
    groups: [
      {
        title: { bn: "প্রোডাক্ট মাস্টার", en: "Product Master" },
        items: [
          { bn: "SKU, ভ্যারিয়েন্ট (সাইজ/কালার) ও অ্যাট্রিবিউট", en: "SKUs, variants (size/colour) and attributes" },
          { bn: "বারকোড ও QR কোড জেনারেশন ও প্রিন্ট", en: "Barcode and QR generation and printing" },
          { bn: "ব্যাচ, লট ও এক্সপায়ারি ডেট ট্র্যাকিং", en: "Batch, lot and expiry-date tracking" },
          { bn: "সিরিয়াল নম্বর ও IMEI ট্র্যাকিং", en: "Serial number and IMEI tracking" },
          { bn: "মাল্টি-ইউনিট ও ইউনিট কনভার্সন", en: "Multi-unit support with conversions" },
          { bn: "বান্ডেল, কম্বো ও কিট প্রোডাক্ট", en: "Bundles, combos and kit products" },
        ],
      },
      {
        title: { bn: "স্টক কন্ট্রোল", en: "Stock Control" },
        items: [
          { bn: "মাল্টি-ওয়্যারহাউস ও মাল্টি-আউটলেট স্টক", en: "Multi-warehouse and multi-outlet stock" },
          { bn: "বিন ও র‌্যাক লোকেশন ম্যাপিং", en: "Bin and rack location mapping" },
          { bn: "রিয়েল-টাইম স্টক লেভেল ও রিজার্ভড কোয়ান্টিটি", en: "Real-time stock levels and reserved quantity" },
          { bn: "স্টক ট্রান্সফার ও ইন-ট্রানজিট ট্র্যাকিং", en: "Stock transfers with in-transit tracking" },
          { bn: "সাইকেল কাউন্ট ও ফিজিক্যাল স্টক অডিট", en: "Cycle counts and physical stock audit" },
          { bn: "রি-অর্ডার লেভেল ও লো-স্টক অ্যালার্ট", en: "Reorder levels and low-stock alerts" },
          { bn: "ডেড স্টক ও স্লো-মুভিং রিপোর্ট", en: "Dead stock and slow-moving reports" },
        ],
      },
      {
        title: { bn: "প্রকিউরমেন্ট", en: "Procurement" },
        items: [
          { bn: "পারচেজ রিকুইজিশন ও অ্যাপ্রোভাল", en: "Purchase requisition and approval" },
          { bn: "RFQ ও ভেন্ডর প্রাইস কম্পারিজন", en: "RFQ and vendor price comparison" },
          { bn: "পারচেজ অর্ডার ও পার্শিয়াল রিসিভ", en: "Purchase orders with partial receipt" },
          { bn: "GRN (গুডস রিসিভড নোট) ও কোয়ালিটি চেক", en: "Goods Received Note with quality check" },
          { bn: "ল্যান্ডেড কস্ট — ফ্রেইট, ডিউটি, C&F বিতরণ", en: "Landed cost with freight, duty and C&F allocation" },
          { bn: "ভেন্ডর স্কোরকার্ড ও লিড-টাইম হিস্ট্রি", en: "Vendor scorecards and lead-time history" },
        ],
      },
      {
        title: { bn: "অর্ডার ফুলফিলমেন্ট", en: "Order Fulfilment" },
        items: [
          { bn: "অটো স্টক অ্যালোকেশন ও পিক-প্যাক-শিপ", en: "Auto stock allocation and pick-pack-ship" },
          { bn: "প্যাকিং স্লিপ ও শিপিং লেবেল প্রিন্ট", en: "Packing slip and shipping label printing" },
          { bn: "Steadfast, Pathao, RedX, সুন্দরবন কুরিয়ার ইন্টিগ্রেশন", en: "Steadfast, Pathao, RedX and Sundarban courier integration" },
          { bn: "COD রিকনসিলিয়েশন ও কুরিয়ার সেটেলমেন্ট", en: "COD reconciliation and courier settlement" },
          { bn: "রিটার্ন, এক্সচেঞ্জ ও RMA ওয়ার্কফ্লো", en: "Returns, exchange and RMA workflow" },
          { bn: "ডেলিভারি পারফরম্যান্স ও রিটার্ন রেট রিপোর্ট", en: "Delivery performance and return-rate reports" },
        ],
      },
      {
        title: { bn: "কস্টিং ও ভ্যালুয়েশন", en: "Costing & Valuation" },
        items: [
          { bn: "FIFO ও ওয়েটেড অ্যাভারেজ কস্টিং", en: "FIFO and weighted-average costing" },
          { bn: "স্টক ভ্যালুয়েশন রিপোর্ট", en: "Stock valuation report" },
          { bn: "প্রতি SKU-তে প্রকৃত মার্জিন", en: "True margin per SKU" },
          { bn: "স্টক লেজার ও মুভমেন্ট হিস্ট্রি", en: "Stock ledger and movement history" },
        ],
      },
      {
        title: { bn: "ম্যানুফ্যাকচারিং", en: "Manufacturing" },
        items: [
          { bn: "মাল্টি-লেভেল BOM (বিল অফ ম্যাটেরিয়ালস)", en: "Multi-level bill of materials" },
          { bn: "ওয়ার্ক অর্ডার ও প্রোডাকশন প্ল্যানিং", en: "Work orders and production planning" },
          { bn: "রাউটিং, ওয়ার্কস্টেশন ও ক্যাপাসিটি", en: "Routing, workstations and capacity" },
          { bn: "WIP ট্র্যাকিং ও স্টেজ-ওয়াইজ প্রোগ্রেস", en: "WIP tracking and stage-wise progress" },
          { bn: "স্ক্র্যাপ, ইয়েল্ড ও ওয়েস্টেজ হিসাব", en: "Scrap, yield and wastage accounting" },
          { bn: "সাব-কন্ট্রাক্টিং ও জব ওয়ার্ক", en: "Sub-contracting and job work" },
          { bn: "ব্যাচ ট্রেসেবিলিটি — কাঁচামাল থেকে ফিনিশড গুডস", en: "Batch traceability from raw material to finished goods" },
        ],
      },
    ],
  },

  /* ─────────────────────── POS & RETAIL ─────────────────────── */
  {
    id: "pos",
    icon: "ScanBarcode",
    name: { bn: "POS ও রিটেইল", en: "POS & Retail" },
    short: { bn: "POS", en: "POS" },
    tagline: {
      bn: "দোকানের কাউন্টারে বিদ্যুৎ বা নেট গেলেও বিক্রি থামে না।",
      en: "The counter keeps selling even when the power or the internet does not.",
    },
    from: "#ec4899",
    to: "#f43f5e",
    groups: [
      {
        title: { bn: "কাউন্টার সেলস", en: "Counter Sales" },
        items: [
          { bn: "কীবোর্ড-শর্টকাট চালিত ফাস্ট বিলিং স্ক্রিন", en: "Fast billing screen driven by keyboard shortcuts" },
          { bn: "বারকোড স্ক্যান ও কুইক প্রোডাক্ট সার্চ", en: "Barcode scan and quick product search" },
          { bn: "অফলাইন মোড — নেট ফিরলে অটো সিঙ্ক", en: "Offline mode with automatic sync on reconnect" },
          { bn: "হোল্ড ও পার্ক বিল (একসাথে অনেক কাস্টমার)", en: "Hold and park bills for multiple customers at once" },
          { bn: "স্প্লিট পেমেন্ট — ক্যাশ + কার্ড + bKash", en: "Split payment across cash, card and bKash" },
          { bn: "থার্মাল রিসিট প্রিন্টার ও ক্যাশ ড্রয়ার সাপোর্ট", en: "Thermal receipt printer and cash drawer support" },
        ],
      },
      {
        title: { bn: "প্রাইসিং ও অফার", en: "Pricing & Offers" },
        items: [
          { bn: "আউটলেট-ওয়াইজ আলাদা প্রাইস লিস্ট", en: "Outlet-wise price lists" },
          { bn: "আইটেম ও বিল লেভেল ডিসকাউন্ট রুল", en: "Item-level and bill-level discount rules" },
          { bn: "কুপন, কম্বো অফার ও হ্যাপি আওয়ার", en: "Coupons, combo offers and happy-hour pricing" },
          { bn: "লয়্যালটি পয়েন্ট রিডিম", en: "Loyalty point redemption" },
        ],
      },
      {
        title: { bn: "শিফট ও ক্যাশ কন্ট্রোল", en: "Shift & Cash Control" },
        items: [
          { bn: "ডে ওপেন/ক্লোজ ও Z-রিপোর্ট", en: "Day open/close with Z-report" },
          { bn: "শিফট-ওয়াইজ ক্যাশ ড্রয়ার রিকনসিলিয়েশন", en: "Shift-wise cash drawer reconciliation" },
          { bn: "কাউন্টার-ওয়াইজ সেলস ও শর্টেজ রিপোর্ট", en: "Counter-wise sales and shortage reports" },
          { bn: "রিফান্ড, এক্সচেঞ্জ ও বিল ক্যান্সেল অ্যাপ্রোভাল", en: "Refund, exchange and bill-cancel approvals" },
        ],
      },
    ],
  },

  /* ──────────────── E-COMMERCE & STOREFRONT ──────────────── */
  {
    id: "ecommerce",
    icon: "ShoppingBag",
    name: { bn: "ই-কমার্স ও ওয়েবসাইট", en: "E-commerce & Website" },
    short: { bn: "ই-কমার্স", en: "E-commerce" },
    tagline: {
      bn: "নিজের ডোমেইনে নিজের স্টোর — কমিশন ছাড়া, ব্র্যান্ড আপনার।",
      en: "Your own store on your own domain — no marketplace commission, no borrowed brand.",
    },
    from: "#6366f1",
    to: "#8b5cf6",
    groups: [
      {
        title: { bn: "স্টোরফ্রন্ট", en: "Storefront" },
        items: [
          { bn: "মোবাইল-ফার্স্ট রেডিমেড থিম", en: "Mobile-first ready-made themes" },
          { bn: "ক্যাটাগরি, ফিল্টার ও ইনস্ট্যান্ট সার্চ", en: "Categories, filters and instant search" },
          { bn: "প্রোডাক্ট গ্যালারি, জুম ও ভিডিও", en: "Product gallery with zoom and video" },
          { bn: "রিভিউ, রেটিং ও Q&A", en: "Reviews, ratings and Q&A" },
          { bn: "বাংলা ও ইংরেজি — দুই ভাষার স্টোর", en: "Bilingual store in Bangla and English" },
        ],
      },
      {
        title: { bn: "চেকআউট ও পেমেন্ট", en: "Checkout & Payment" },
        items: [
          { bn: "ওয়ান-পেজ ও গেস্ট চেকআউট", en: "One-page and guest checkout" },
          { bn: "bKash, নগদ, কার্ড ও SSLCommerz গেটওয়ে", en: "bKash, Nagad, card and SSLCommerz gateways" },
          { bn: "ক্যাশ অন ডেলিভারি ও পার্শিয়াল অ্যাডভান্স", en: "Cash on delivery and partial advance" },
          { bn: "জোন-ভিত্তিক ডেলিভারি চার্জ (ঢাকা/আউট অফ ঢাকা)", en: "Zone-based delivery charges (inside/outside Dhaka)" },
          { bn: "ফেক অর্ডার ও রিস্ক স্কোরিং", en: "Fake-order and risk scoring" },
        ],
      },
      {
        title: { bn: "গ্রোথ ও SEO", en: "Growth & SEO" },
        items: [
          { bn: "টেকনিক্যাল SEO, স্কিমা ও সাইটম্যাপ", en: "Technical SEO, schema and sitemap" },
          { bn: "ফেসবুক ক্যাটালগ ও Pixel/CAPI ইন্টিগ্রেশন", en: "Facebook catalogue and Pixel/CAPI integration" },
          { bn: "Google Analytics ও Tag Manager", en: "Google Analytics and Tag Manager" },
          { bn: "ল্যান্ডিং পেজ, ব্লগ ও CMS", en: "Landing pages, blog and CMS" },
          { bn: "ফ্ল্যাশ সেল ও ক্যাম্পেইন পেজ", en: "Flash sale and campaign pages" },
        ],
      },
    ],
  },

  /* ──────────────────── PROJECTS & SERVICES ──────────────────── */
  {
    id: "projects",
    icon: "KanbanSquare",
    name: { bn: "প্রজেক্ট ও সার্ভিস ম্যানেজমেন্ট", en: "Projects & Services" },
    short: { bn: "প্রজেক্ট", en: "Projects" },
    tagline: {
      bn: "কোন কাজ কার কাছে আটকে আছে আর কোন প্রজেক্টে লাভ হচ্ছে — দুটোই পরিষ্কার।",
      en: "See which task is stuck with whom, and which project is actually profitable.",
    },
    from: "#0ea5e9",
    to: "#06b6d4",
    groups: [
      {
        title: { bn: "প্ল্যানিং ও এক্সিকিউশন", en: "Planning & Execution" },
        items: [
          { bn: "প্রজেক্ট, টাস্ক ও সাব-টাস্ক হায়ারার্কি", en: "Project, task and sub-task hierarchy" },
          { bn: "কানবান বোর্ড, লিস্ট ও টাইমলাইন ভিউ", en: "Kanban board, list and timeline views" },
          { bn: "মাইলস্টোন ও ডিপেন্ডেন্সি", en: "Milestones and dependencies" },
          { bn: "রিকারিং টাস্ক ও চেকলিস্ট টেমপ্লেট", en: "Recurring tasks and checklist templates" },
          { bn: "ফাইল অ্যাটাচমেন্ট ও থ্রেডেড কমেন্ট", en: "File attachments and threaded comments" },
        ],
      },
      {
        title: { bn: "টাইম ও বাজেট", en: "Time & Budget" },
        items: [
          { bn: "টাইম ট্র্যাকিং ও বিলেবল আওয়ার", en: "Time tracking and billable hours" },
          { bn: "বাজেট vs অ্যাকচুয়াল স্পেন্ড", en: "Budget vs actual spend" },
          { bn: "রিসোর্স লোড ও ক্যাপাসিটি ভিউ", en: "Resource load and capacity view" },
          { bn: "প্রজেক্ট-ওয়াইজ প্রফিটেবিলিটি", en: "Project-wise profitability" },
        ],
      },
      {
        title: { bn: "ক্লায়েন্ট ও কন্ট্রাক্ট", en: "Clients & Contracts" },
        items: [
          { bn: "ক্লায়েন্ট পোর্টাল ও প্রোগ্রেস শেয়ারিং", en: "Client portal with progress sharing" },
          { bn: "রিটেইনার ও সার্ভিস কন্ট্রাক্ট রিনিউয়াল", en: "Retainer and service contract renewals" },
          { bn: "SLA ও রেসপন্স টাইম কমিটমেন্ট", en: "SLA and response-time commitments" },
          { bn: "টাইমশিট থেকে অটো ইনভয়েস", en: "Auto-invoice straight from timesheets" },
        ],
      },
    ],
  },

  /* ──────────────────── HELPDESK & SUPPORT ──────────────────── */
  {
    id: "helpdesk",
    icon: "Headset",
    name: { bn: "হেল্পডেস্ক ও সাপোর্ট", en: "Helpdesk & Support" },
    short: { bn: "হেল্পডেস্ক", en: "Helpdesk" },
    tagline: {
      bn: "WhatsApp, ইমেইল, ফোন — সব অভিযোগ এক ইনবক্সে, একটাও হারায় না।",
      en: "WhatsApp, email, phone — every complaint in one inbox, none of them lost.",
    },
    from: "#f43f5e",
    to: "#f59e0b",
    groups: [
      {
        title: { bn: "টিকেট ম্যানেজমেন্ট", en: "Ticket Management" },
        items: [
          { bn: "অমনিচ্যানেল টিকেট — WhatsApp, ইমেইল, ফোন, ওয়েব ফর্ম", en: "Omnichannel tickets from WhatsApp, email, phone and web forms" },
          { bn: "প্রায়োরিটি, ক্যাটাগরি ও SLA টাইমার", en: "Priority, category and SLA timers" },
          { bn: "অটো অ্যাসাইনমেন্ট ও এসকেলেশন রুল", en: "Auto assignment and escalation rules" },
          { bn: "ক্যানড রিপ্লাই ও ম্যাক্রো", en: "Canned replies and macros" },
          { bn: "টিকেট মার্জ, স্প্লিট ও লিঙ্কিং", en: "Ticket merge, split and linking" },
        ],
      },
      {
        title: { bn: "রেজোলিউশন ও কোয়ালিটি", en: "Resolution & Quality" },
        items: [
          { bn: "CRM ও অর্ডার হিস্ট্রির সাথে সরাসরি লিঙ্ক", en: "Direct link to CRM and order history" },
          { bn: "নলেজ বেস ও সেলফ-সার্ভিস FAQ", en: "Knowledge base and self-service FAQ" },
          { bn: "CSAT ও রেজোলিউশন টাইম রিপোর্ট", en: "CSAT and resolution-time reporting" },
          { bn: "এজেন্ট পারফরম্যান্স ড্যাশবোর্ড", en: "Agent performance dashboard" },
          { bn: "রিপিট কমপ্লেইন ও রুট-কজ অ্যানালিসিস", en: "Repeat-complaint and root-cause analysis" },
        ],
      },
    ],
  },

  /* ──────────────────── ANALYTICS & BI ──────────────────── */
  {
    id: "analytics",
    icon: "BarChart3",
    name: { bn: "অ্যানালিটিক্স ও রিপোর্ট", en: "Analytics & Reporting" },
    short: { bn: "অ্যানালিটিক্স", en: "Analytics" },
    tagline: {
      bn: "অনুমানে সিদ্ধান্ত নয় — লাইভ সংখ্যা দেখে সিদ্ধান্ত।",
      en: "Decisions from live numbers, not from gut feel.",
    },
    from: "#14b8a6",
    to: "#22c55e",
    groups: [
      {
        title: { bn: "ড্যাশবোর্ড", en: "Dashboards" },
        items: [
          { bn: "রোল-ভিত্তিক ড্যাশবোর্ড — মালিক, ম্যানেজার, স্টাফ", en: "Role-based dashboards for owner, manager and staff" },
          { bn: "লাইভ KPI টাইল ও ট্রেন্ড ইন্ডিকেটর", en: "Live KPI tiles with trend indicators" },
          { bn: "ব্রাঞ্চ, আউটলেট ও টিম কম্পারিজন", en: "Branch, outlet and team comparison" },
          { bn: "মোবাইল ড্যাশবোর্ড — হাতের মুঠোয় পুরো বিজনেস", en: "Mobile dashboard — the whole business in your pocket" },
        ],
      },
      {
        title: { bn: "রিপোর্ট লাইব্রেরি", en: "Report Library" },
        items: [
          { bn: "সেলস, স্টক, ফাইন্যান্স, HR ও পেরোল রিপোর্ট", en: "Sales, stock, finance, HR and payroll reports" },
          { bn: "প্রোডাক্ট ও ক্যাটাগরি ওয়াইজ প্রফিট অ্যানালিসিস", en: "Product and category-wise profit analysis" },
          { bn: "কাস্টমার কোহর্ট ও রিটেনশন অ্যানালিসিস", en: "Customer cohort and retention analysis" },
          { bn: "কাস্টম রিপোর্ট বিল্ডার (কোড ছাড়াই)", en: "Custom report builder with no code" },
          { bn: "শিডিউলড ইমেইল রিপোর্ট (দৈনিক/সাপ্তাহিক)", en: "Scheduled email reports, daily or weekly" },
          { bn: "Excel, CSV ও PDF এক্সপোর্ট", en: "Excel, CSV and PDF export" },
        ],
      },
    ],
  },

  /* ──────────────────── AI & AUTOMATION ──────────────────── */
  {
    id: "ai",
    icon: "Sparkles",
    name: { bn: "AI ও অটোমেশন", en: "AI & Automation" },
    short: { bn: "AI", en: "AI" },
    tagline: {
      bn: "যে কাজগুলো প্রতিদিন হাতে করতে হয়, সেগুলো সিস্টেম নিজেই করে ফেলে।",
      en: "The work you redo every single day — handed over to the system.",
    },
    from: "#a855f7",
    to: "#6366f1",
    groups: [
      {
        title: { bn: "প্রেডিকশন ও ইনসাইট", en: "Prediction & Insight" },
        items: [
          { bn: "ডিমান্ড ফোরকাস্ট — কোন প্রোডাক্ট কত লাগবে", en: "Demand forecasting per product" },
          { bn: "স্মার্ট রি-অর্ডার সাজেশন", en: "Smart reorder suggestions" },
          { bn: "সেলস ট্রেন্ড ও সিজনালিটি ইনসাইট", en: "Sales trend and seasonality insight" },
          { bn: "কাস্টমার চার্ন রিস্ক স্কোর", en: "Customer churn risk score" },
          { bn: "ফেক ও রিস্কি অর্ডার ডিটেকশন", en: "Fake and risky order detection" },
        ],
      },
      {
        title: { bn: "অটোমেশন", en: "Automation" },
        items: [
          { bn: "নো-কোড ওয়ার্কফ্লো বিল্ডার (if-this-then-that)", en: "No-code workflow builder (if-this-then-that)" },
          { bn: "অটো রিমাইন্ডার — ডিউ, স্টক, ছুটি, রিনিউয়াল", en: "Auto reminders for dues, stock, leave and renewals" },
          { bn: "বাংলা ও ইংরেজি AI চ্যাটবট", en: "AI chatbot in Bangla and English" },
          { bn: "AI প্রোডাক্ট ডেসক্রিপশন ও ক্যাপশন", en: "AI product descriptions and captions" },
          { bn: "OCR দিয়ে বিল ও ভাউচার অটো এন্ট্রি", en: "OCR-based bill and voucher auto-entry" },
          { bn: "স্মার্ট সার্চ — বাংলায় লিখলেও কাজ করে", en: "Smart search that understands Bangla queries" },
        ],
      },
    ],
  },

  /* ──────────────── ADMIN, SECURITY & GOVERNANCE ──────────────── */
  {
    id: "governance",
    icon: "ShieldCheck",
    name: { bn: "অ্যাডমিন, সিকিউরিটি ও গভর্নেন্স", en: "Admin, Security & Governance" },
    short: { bn: "গভর্নেন্স", en: "Governance" },
    tagline: {
      bn: "কে কী দেখতে পাবে, কে কী বদলাল — সবকিছুর হিসাব থাকে।",
      en: "Who can see what, and who changed what — always on the record.",
    },
    from: "#64748b",
    to: "#3b82f6",
    groups: [
      {
        title: { bn: "অ্যাক্সেস কন্ট্রোল", en: "Access Control" },
        items: [
          { bn: "আনলিমিটেড রোল ও পারমিশন ম্যাট্রিক্স", en: "Unlimited roles and a full permission matrix" },
          { bn: "ফিল্ড ও রিপোর্ট লেভেল পারমিশন", en: "Field-level and report-level permissions" },
          { bn: "মাল্টি-কোম্পানি ও মাল্টি-ব্রাঞ্চ ডেটা আইসোলেশন", en: "Multi-company and multi-branch data isolation" },
          { bn: "টু-ফ্যাক্টর অথেনটিকেশন (2FA)", en: "Two-factor authentication" },
          { bn: "IP রেস্ট্রিকশন ও সেশন কন্ট্রোল", en: "IP restriction and session control" },
        ],
      },
      {
        title: { bn: "কন্ট্রোল ও অডিট", en: "Control & Audit" },
        items: [
          { bn: "মাল্টি-লেভেল অ্যাপ্রোভাল ওয়ার্কফ্লো", en: "Multi-level approval workflows" },
          { bn: "প্রতিটি পরিবর্তনের ইমিউটেবল অডিট লগ", en: "Immutable audit log on every change" },
          { bn: "লাইভ ইউজার অ্যাক্টিভিটি ফিড", en: "Live user activity feed" },
          { bn: "অটোমেটেড ব্যাকআপ ও পয়েন্ট-ইন-টাইম রিস্টোর", en: "Automated backups and point-in-time restore" },
          { bn: "ডেটা এক্সপোর্ট — আপনার ডেটা সবসময় আপনার", en: "Full data export — your data stays yours" },
        ],
      },
    ],
  },
];

/** Total distinct capabilities listed above — used for the headline stat. */
export const totalModuleFeatures = businessModules.reduce(
  (sum, mod) => sum + mod.groups.reduce((n, g) => n + g.items.length, 0),
  0,
);
