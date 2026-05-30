"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  Search, 
  Play, 
  Clock, 
  List, 
  ExternalLink, 
  Building2,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Settings,
  Sparkles,
  Zap,
  Layout,
  BookOpen
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Bilingual Category definitions for Pillar 1
const categories = [
  {
    id: "perf-infra",
    icon: Zap,
    title: { en: "Website Performance & Infrastructure", bn: "ওয়েবসাইট পারফরম্যান্স ও ইনফ্রাস্ট্রাকচার" },
    features: [
      { en: "Ultra Fast Website Performance", bn: "আলট্রা ফাস্ট ওয়েবসাইট পারফরম্যান্স" },
      { en: "Millisecond Level Loading Speed", bn: "মিলি-সেকেন্ড লেভেল লোডিং স্পিড" },
      { en: "Edge Computing Optimized System", bn: "এজ কম্পিউটিং অপ্টিমাইজড সিস্টেম" },
      { en: "Cloudflare CDN Integration", bn: "ক্লাউডফ্লেয়ার সিডিএন (CDN) ইন্টিগ্রেশন" },
      { en: "Advanced Cache Optimization", bn: "অ্যাডভান্সড ক্যাশ অপ্টিমাইজেশন" },
      { en: "Low Latency Infrastructure", bn: "লো ல্যাটেন্সি ইনফ্রাস্ট্রাকচার" },
      { en: "Global Edge Delivery System", bn: "গ্লোবাল এজ ডেলিভারি সিস্টেম" },
      { en: "Optimized Static Asset Delivery", bn: "অপ্টিমাইজড স্ট্যাটিক অ্যাসেট ডেলিভারি" },
      { en: "Core Web Vitals Optimization", bn: "কোর ওয়েব ভাইটালস অপ্টিমাইজেশন" },
      { en: "SEO Optimized Performance", bn: "এসইও অপ্টিমাইজড পারফরম্যান্স" },
      { en: "Mobile Optimized Architecture", bn: "মোবাইল অপ্টিমাইজড আর্কিটেকচার" },
      { en: "Enterprise Grade Hosting Infrastructure", bn: "এন্টারপ্রাইজ গ্রেড হোস্টিং ইনফ্রাস্ট্রাকচার" },
      { en: "Automatic Performance Scaling", bn: "অটোমেটিক পারফরম্যান্স স্কেলিং" },
      { en: "High Traffic Spike Handling", bn: "হাই ট্রাফিক স্পাইক হ্যান্ডলিং" },
      { en: "Shared Hosting Limitation Free Architecture", bn: "শেয়ার্ড হোস্টিং লিমিটেশন-মুক্ত আর্কিটেকচার" },
      { en: "Distributed Cloud Infrastructure", bn: "ডিস্ট্রিবিউটেড ক্লাউড ইনফ্রাস্ট্রাকচার" },
      { en: "High Availability System", bn: "হাই অ্যাভেইলেবিলিটি সিস্টেম" },
      { en: "Scalable Cloud Infrastructure", bn: "স্কেলেবল ক্লাউড আর্কিটেকচার" },
      { en: "Serverless Architecture", bn: "সার্ভারলেস আর্কিটেকচার" },
      { en: "Frontend, Backend & Database Separation", bn: "ফ্রন্টএন্ড, ব্যাকএন্ড ও ডেটাবেস সেপারেশন" },
      { en: "Faster API Response System", bn: "ফাস্টার এপিআই রেসপন্স সিস্টেম" },
      { en: "Distributed Resource Management", bn: "ডিস্ট্রিবিউটেড রিসোর্স ম্যানেজমেন্ট" },
      { en: "No Single Point of Failure", bn: "সিঙ্গেল পয়েন্ট অফ ফেইলিউর-মুক্ত সিস্টেম" },
      { en: "Modern SaaS Standard Infrastructure", bn: "মডার্ন স্যাস (SaaS) স্ট্যান্ডার্ড ইনফ্রাস্ট্রাকচার" }
    ]
  },
  {
    id: "security-protection",
    icon: ShieldCheck,
    title: { en: "Security & Protection", bn: "সিকিউরিটি ও সুরক্ষা" },
    features: [
      { en: "Advanced DDoS Protection", bn: "অ্যাডভান্সড ডিডস (DDoS) প্রটেকশন" },
      { en: "Firewall Protection System", bn: "ফায়ারওয়াল প্রটেকশন সিস্টেম" },
      { en: "Malicious Request Filtering", bn: "ম্যালিসিয়াস রিকোয়েস্ট ফিল্টারিং" },
      { en: "Brute Force Attack Prevention", bn: "ব্রুট ফোর্স অ্যাটাক প্রিভেনশন" },
      { en: "Real-time Security Monitoring", bn: "রিয়েল-টাইম সিকিউরিটি মনিটরিং" },
      { en: "Automated Threat Detection", bn: "অটোমেটেড থ্রেট ডিটেকশন" },
      { en: "Secure API Communication", bn: "সিকিউর এপিআই (API) কমিউনিকেশন" },
      { en: "Secure Database Communication", bn: "সিকিউর ডেটাবেস কমিউনিকেশন" },
      { en: "Access Control System", bn: "অ্যাক্সেস কন্ট্রোল সিস্টেম" },
      { en: "Role-Based Permission Management", bn: "রোল-ভিত্তিক পারমিশন ম্যানেজমেন্ট" },
      { en: "Fraud Customer Detection", bn: "ফ্রড কাস্টমার ডিটেকশন" },
      { en: "Fraud Customer Blocking", bn: "ফ্রড কাস্টমার ব্লকিং" },
      { en: "Login Security Optimization", bn: "লগইন সিকিউরিটি অপ্টিমাইজেশন" },
      { en: "Automated Security Monitoring", bn: "অটোমেটেড সিকিউরিটি মনিটরিং" },
      { en: "Secure Serverless Environment", bn: "সিকিউর সার্ভারলেস এনভায়রনমেন্ট" },
      { en: "Data Protection Mechanism", bn: "ডেটা প্রটেকশন মেকানিজম" }
    ]
  },
  {
    id: "db-backup-recovery",
    icon: Settings,
    title: { en: "Database, Backup & Recovery", bn: "ডেটাবেস, ব্যাকআপ ও রিকভারি" },
    features: [
      { en: "Automated Backup System", bn: "অটোমেটেড ব্যাকআপ সিস্টেম" },
      { en: "Point-in-Time Recovery", bn: "পয়েন্ট-ইন-টাইম রিকভারি" },
      { en: "Time-based Database Restore", bn: "টাইম-ভিত্তিক ডেটাবেস রিস্টোর" },
      { en: "Emergency Recovery Support", bn: "ইমার্জেন্সি রিকভারি সাপোর্ট" },
      { en: "Secure Backup Storage", bn: "সিকিউর ব্যাকআপ স্টোরেজ" },
      { en: "Database Monitoring", bn: "ডেটাবেস মনিটরিং" },
      { en: "Business Critical Data Protection", bn: "বিজনেস ক্রিটিকাল ডেটা প্রটেকশন" },
      { en: "Data Loss Prevention System", bn: "ডেটা লস প্রিভেনশন সিস্টেম" },
      { en: "Advanced Recovery Mechanism", bn: "অ্যাডভান্সড রিকভারি মেকানিজম" }
    ]
  },
  {
    id: "product-inventory",
    icon: Layout,
    title: { en: "Product, Inventory & Ecommerce", bn: "প্রোডাক্ট, ইনভেন্টরি ও ই-কমার্স" },
    features: [
      { en: "Professional Product Listing", bn: "প্রফেশনাল প্রোডাক্ট লিস্টিং" },
      { en: "Product Page Management", bn: "প্রোডাক্ট পেজ ম্যানেজমেন্ট" },
      { en: "Product SEO Optimization", bn: "প্রোডাক্ট এসইও (SEO) অপ্টিমাইজেশন" },
      { en: "Product Category Setup", bn: "প্রোডাক্ট ক্যাটাগরি সেটআপ" },
      { en: "Product Attribute Management", bn: "প্রোডাক্ট অ্যাট্রিবিউট ম্যানেজমেন্ট" },
      { en: "Size & Color Variation Management", bn: "সাইজ ও কালার ভ্যারিয়েশন ম্যানেজমেন্ট" },
      { en: "Product Variant Control", bn: "প্রোডাক্ট ভ্যারিয়েন্ট কন্ট্রোল" },
      { en: "Smart Product Organization", bn: "স্মার্ট প্রোডাক্ট অর্গানাইজেশন" },
      { en: "Product Dashboard Management", bn: "প্রোডাক্ট ড্যাশবোর্ড ম্যানেজমেন্ট" },
      { en: "Inventory Management System", bn: "ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম" },
      { en: "Real-time Stock Tracking", bn: "রিয়েল-টাইম স্টক ট্র্যাকিং" },
      { en: "Automatic Stock Update", bn: "অটোমেটিক স্টক আপডেট" },
      { en: "Low Stock Alert System", bn: "লো স্টক অ্যালার্ট সিস্টেম" },
      { en: "Smart Inventory Dashboard", bn: "স্মার্ট ইনভেন্টরি ড্যাশবোর্ড" },
      { en: "Inventory Automation", bn: "ইনভেন্টরি অটোমেশন" },
      { en: "Product Lifecycle Management", bn: "প্রোডাক্ট লাইফসাইকেল ম্যানেজমেন্ট" }
    ]
  },
  {
    id: "order-pos-delivery",
    icon: TrendingUp,
    title: { en: "Order, POS & Delivery", bn: "অর্ডার, পস ও ডেলিভারি অটোমেশন" },
    features: [
      { en: "Automated Order Management", bn: "অটোমেটেড অর্ডার ম্যানেজমেন্ট" },
      { en: "Smart Order Processing", bn: "স্মার্ট অর্ডার প্রসেসিং" },
      { en: "One-Click Courier Integration", bn: "ওয়ান-ক্লিক কুরিয়ার ইন্টিগ্রেশন" },
      { en: "Courier API Integration", bn: "কুরিয়ার এপিআই (API) ইন্টিগ্রেশন" },
      { en: "Pathao Integration", bn: "পাঠাও (Pathao) ইন্টিগ্রেশন" },
      { en: "Steadfast Integration", bn: "স্টেডফাস্ট (Steadfast) ইন্টিগ্রেশন" },
      { en: "Sundarban Integration", bn: "সুন্দরবন (Sundarban) ইন্টিগ্রেশন" },
      { en: "Automated Delivery Workflow", bn: "অটোমেটেড ডেলিভারি ওয়ার্কফ্লো" },
      { en: "Shipping Label Auto Generation", bn: "শিপিং লেবেল অটো জেনারেশন" },
      { en: "Live Order Tracking", bn: "লাইভ অর্ডার ট্র্যাকিং" },
      { en: "Automated Shipping Management", bn: "অটোমেটেড শিপিং ম্যানেজমেন্ট" },
      { en: "POS (Point of Sale) Integration", bn: "পস (POS) ইন্টিগ্রেশন" },
      { en: "Messenger to POS Entry System", bn: "ম্যাসেঞ্জার থেকে পস এন্ট্রি সিস্টেম" },
      { en: "Fast Order Processing Workflow", bn: "ফাস্ট অর্ডার প্রসেসিং ওয়ার্কফ্লো" },
      { en: "Delivery Status Automation", bn: "ডেলিভারি স্ট্যাটাস অটোমেশন" },
      { en: "Courier Sync Automation", bn: "কুরিয়ার সিঙ্ক অটোমেশন" }
    ]
  },
  {
    id: "customer-communication",
    icon: Settings,
    title: { en: "Customer Communication", bn: "কাস্টমার কমিউনিকেশন ও মার্কেটিং" },
    features: [
      { en: "Automated SMS Sending", bn: "অটোমেটেড এসএমএস সেন্ট" },
      { en: "Order Confirmation SMS", bn: "অর্ডার কনফার্মেশন এসএমএস" },
      { en: "Email Notification Automation", bn: "ইমেইল নোটিফিকেশন অটোমেশন" },
      { en: "Customer Engagement Automation", bn: "কাস্টমার এঙ্গেজমেন্ট অটোমেশন" },
      { en: "Personalized Customer Communication", bn: "পার্সোনালাইজড কাস্টমার কমিউনিকেশন" },
      { en: "Marketing Campaign Integration", bn: "মার্কেটিং ক্যাম্পেইন ইন্টিগ্রেশন" },
      { en: "Promotional Notification System", bn: "প্রমোশনাল নোটিফিকেশন সিস্টেম" },
      { en: "Retargeting Automation", bn: "রিটার্গেটিং অটোমেশন" },
      { en: "Announcement Bar System", bn: "অ্যানাউন্সমেন্ট বার সিস্টেম" },
      { en: "Urgent Offer Notification System", bn: "আর্জেন্ট অফার নোটিফিকেশন সিস্টেম" },
      { en: "Review Management System", bn: "রিভিউ ম্যানেজমেন্ট সিস্টেম" },
      { en: "Coupon & Discount Setup", bn: "কুপন ও ডিসকাউন্ট সেটআপ" },
      { en: "Customer Retention Optimization", bn: "কাস্টমার রিটেনশন অপ্টিমাইজেশন" }
    ]
  },
  {
    id: "analytics-monitoring",
    icon: TrendingUp,
    title: { en: "Analytics & Monitoring", bn: "অ্যানালিটিক্স ও ট্র্যাকিং" },
    features: [
      { en: "Dashboard Overview", bn: "ড্যাশবোর্ড ওভারভিউ" },
      { en: "Live Business Analytics", bn: "লাইভ বিজনেস অ্যানালিটিক্স" },
      { en: "Sales Graph Tracking", bn: "সেলস গ্রাফ ট্র্যাকিং" },
      { en: "Visitor Tracking System", bn: "ভিজিটর ট্র্যাকিং সিস্টেম" },
      { en: "Real-time Visitor Monitoring", bn: "রিয়েল-টাইম ভিজিটর মনিটরিং" },
      { en: "User Behavior Analysis", bn: "ইউজার বিহেভিয়ার অ্যানালাইসিস" },
      { en: "Google Analytics 4 Integration", bn: "গুগল অ্যানালিটিক্স ৪ (GA4) ইন্টিগ্রেশন" },
      { en: "Facebook Pixel Integration", bn: "ফেসবুক পিক্সেল (Facebook Pixel) ইন্টিগ্রেশন" },
      { en: "Google Tag Manager Setup", bn: "গুগল ট্যাগ ম্যানেজার (GTM) সেটআপ" },
      { en: "Microsoft Clarity Integration", bn: "মাইক্রোসফট ক্ল্যারিটি (Clarity) ইন্টিগ্রেশন" },
      { en: "Heatmap Tracking", bn: "হিটম্যাপ (Heatmap) ট্র্যাকিং" },
      { en: "Conversion Tracking Optimization", bn: "কনভার্শন ট্র্যাকিং অপ্টিমাইজেশন" },
      { en: "Business Growth Dashboard", bn: "বিজনেস গ্রোথ ড্যাশবোর্ড" },
      { en: "Profit & Expense Analytics", bn: "প্রফিট ও এক্সপেন্স অ্যানালিটিক্স" },
      { en: "Financial Reporting System", bn: "ফাইন্যান্সিয়াল রিপোর্টিং সিস্টেম" },
      { en: "Real-time Error Tracking", bn: "রিয়েল-টাইম এরর ট্র্যাকিং" },
      { en: "Logging & Monitoring System", bn: "লগিং ও মনিটরিং সিস্টেম" },
      { en: "Advanced Debugging Tools", bn: "অ্যাডভান্সড ডিবাগিং টুলস" },
      { en: "System Health Monitoring", bn: "সিস্টেম হেলথ মনিটরিং" },
      { en: "Usage Monitoring System", bn: "ইউজেস মনিটরিং সিস্টেম" },
      { en: "Free Tier Usage Tracking", bn: "ফ্রি টায়ার ইউজেস ট্র্যাকিং" },
      { en: "Performance Monitoring Dashboard", bn: "পারফরম্যান্স মনিটরিং ড্যাশবোর্ড" }
    ]
  },
  {
    id: "ai-automation",
    icon: Sparkles,
    title: { en: "AI & Automation", bn: "আর্টিফিশিয়াল ইন্টেলিজেন্স ও অটোমেশন" },
    features: [
      { en: "AI-Driven Business Automation", bn: "এআই-চালিত বিজনেস অটোমেশন" },
      { en: "AI Assisted Workflow System", bn: "এআই অ্যাসিস্টেড ওয়ার্কফ্লো সিস্টেম" },
      { en: "Ecommerce Process Automation", bn: "ই-কমার্স প্রসেস অটোমেশন" },
      { en: "Smart Decision Support System", bn: "স্মার্ট ডিসিশন সাপোর্ট সিস্টেম" },
      { en: "Automated Business Operations", bn: "অটোমেটেড বিজনেস অপারেশনস" },
      { en: "Automated Ad Optimization", bn: "অটোমেটেড অ্যাড অপ্টিমাইজেশন" },
      { en: "Facebook Ad Auto Control", bn: "ফেসবুক অ্যাড অটো কন্ট্রোল" },
      { en: "Automated Scaling Technology", bn: "অটোমেটেড স্কেলিং প্রযুক্তি" },
      { en: "Smart Business Growth Optimization", bn: "স্মার্ট বিজনেস গ্রোথ অপ্টিমাইজেশন" },
      { en: "AI-Based Operational Support", bn: "এআই-ভিত্তিক অপারেশনাল সাপোর্ট" },
      { en: "Automation-Based Workflow System", bn: "অটোমেশন-ভিত্তিক ওয়ার্কফ্লো সিস্টেম" }
    ]
  },
  {
    id: "staff-admin",
    icon: Building2,
    title: { en: "Staff, Admin & Access", bn: "স্টাফ, অ্যাডমিন ও অ্যাক্সেস কন্ট্রোল" },
    features: [
      { en: "Staff Activity Monitoring", bn: "স্টাফ অ্যাক্টিভিটি মনিটরিং" },
      { en: "Staff Performance Tracking", bn: "স্টাফ পারফরম্যান্স ট্র্যাকিং" },
      { en: "Super Admin Access Control", bn: "সুপার অ্যাডমিন অ্যাক্সেস কন্ট্রোল" },
      { en: "Staff Role Permission Management", bn: "স্টাফ রোল পারমিশন ম্যানেজমেন্ট" },
      { en: "Role-Based Dashboard Access", bn: "রোল-ভিত্তিক ড্যাশবোর্ড অ্যাক্সেস" },
      { en: "Advanced Permission System", bn: "অ্যাডভান্সড পারমিশন সিস্টেম" },
      { en: "Admin Panel Monitoring", bn: "অ্যাডমিন প্যানেল মনিটরিং" },
      { en: "Multi-Level User Access", bn: "মাল্টি-লেভেল ইউজার অ্যাক্সেস" },
      { en: "Operational Activity Logs", bn: "অপারেশনাল অ্যাক্টিভিটি লগস" },
      { en: "Staff Workflow Monitoring", bn: "স্টাফ ওয়ার্কফ্লো মনিটরিং" }
    ]
  },
  {
    id: "ui-ux",
    icon: Layout,
    title: { en: "UI/UX & Design", bn: "ইউআই/ইউএক্স ও ডিজাইন" },
    features: [
      { en: "Modern Premium UI Design", bn: "মডার্ন প্রিমিয়াম ইউআই ডিজাইন" },
      { en: "Luxury Color Palette", bn: "লাক্সারি কালার প্যালেট" },
      { en: "High Conversion UI/UX", bn: "হাই-কনভার্শন ইউআই/ইউএক্স" },
      { en: "Brand Identity Focused Design", bn: "ব্র্যান্ড আইডেন্টিটি ফোকাসড ডিজাইন" },
      { en: "Responsive Mobile-First Layout", bn: "রেস্পন্সিভ মোবাইল-ফার্স্ট লেআউট" },
      { en: "Smooth Browsing Experience", bn: "স্মুথ ব্রাউজিং এক্সপেরিয়েন্স" },
      { en: "Premium Ecommerce Interface", bn: "প্রিমিয়াম ই-কমার্স ইন্টারফেস" },
      { en: "Advanced Checkout Experience", bn: "অ্যাডভান্সড চেকআউট এক্সপেরিয়েন্স" },
      { en: "SaaS Standard User Experience", bn: "স্যাস (SaaS) স্ট্যান্ডার্ড ইউজার এক্সপেরিয়েন্স" },
      { en: "Customer Retention Optimized Design", bn: "কাস্টমার রিটেনশন অপ্টিমাইজড ডিজাইন" },
      { en: "Conversion Focused Interface", bn: "কনভার্শন ফোকাসড ইন্টারফেস" },
      { en: "Responsive Admin Dashboard", bn: "রেস্পন্সিভ অ্যাডমিন ড্যাশবোর্ড" }
    ]
  },
  {
    id: "cloudflare-edge",
    icon: Zap,
    title: { en: "Cloudflare Edge Delivery", bn: "ক্লাউডফ্লেয়ার এজ ডেলিভারি" },
    features: [
      { en: "Global CDN Optimization", bn: "গ্লোবাল সিডিএন (CDN) অপ্টিমাইজেশন" },
      { en: "Worldwide Edge Delivery", bn: "ওয়ার্ল্ডওয়াইড এজ ডেলিভারি" },
      { en: "Low Latency System", bn: "ലോ লেটেন্সি সিস্টেম" },
      { en: "Smart Edge Caching", bn: "স্মার্ট এজ ক্যাশিং" },
      { en: "Faster Static Delivery", bn: "ফাস্টার স্ট্যাটিক ডেলিভারি" },
      { en: "Global Performance Optimization", bn: "গ্লোবাল পারফরম্যান্স অপ্টিমাইজেশন" },
      { en: "Optimized Media Delivery", bn: "অপ্টিমাইজড মিডিয়া ডেলিভারি" },
      { en: "Cloudflare Integrated Infrastructure", bn: "ক্লাউডফ্লেয়ার ইন্টিগ্রেটেড ইনফ্রাস্ট্রাকচার" }
    ]
  },
  {
    id: "logging-monitoring-maintenance",
    icon: Settings,
    title: { en: "Logging & Maintenance", bn: "লগিং, মনিটরিং ও মেইনটেন্যান্স" },
    features: [
      { en: "Advanced Logging System", bn: "অ্যাডভান্সড লগিং সিস্টেম" },
      { en: "Real-time Error Detection", bn: "রিয়েল-টাইম এরর ডিটেকশন" },
      { en: "Debugging & Issue Tracking", bn: "ডিবাগিং ও ইস্যু ট্র্যাকিং" },
      { en: "Continuous Monitoring System", bn: "কন্টিনিউয়াস মনিটরিং সিস্টেম" },
      { en: "Automated Maintenance Monitoring", bn: "অটোমেটেড মেইনটেন্যান্স মনিটরিং" },
      { en: "Performance Optimization Monitoring", bn: "পারফরম্যান্স অপ্টিমাইজেশন মনিটরিং" },
      { en: "Staff Activity Monitoring", bn: "স্টাফ অ্যাক্টিভিটি মনিটরিং" },
      { en: "App Usage Monitoring", bn: "অ্যাপ ইউসেজ মনিটরিং" },
      { en: "Free Tier Tracking", bn: "ফ্রি টায়ার ট্র্যাকিং" },
      { en: "Advanced Operational Logs", bn: "অ্যাডভান্সড অপারেশনাল লগস" }
    ]
  },
  {
    id: "cost-optimization",
    icon: TrendingUp,
    title: { en: "Cost Optimization", bn: "খরচ কমানোর উপায়" },
    features: [
      { en: "VPS Maintenance Free Infrastructure", bn: "ভিপিএস (VPS) মেইনটেন্যান্স-মুক্ত ইনফ্রাস্ট্রাকচার" },
      { en: "Low Operational Cost", bn: "স্বল্প অপারেশনাল খরচ" },
      { en: "Budget Friendly Architecture", bn: "বাজেট ফ্রেন্ডলি আর্কিটেকচার" },
      { en: "Long-Term Cost Efficiency", bn: "লং-টার্ম কস্ট এফিশিয়েন্সি" },
      { en: "High Scaling Cost Reduction", bn: "হাই স্কেলিং কস্ট রিডাকশন" },
      { en: "Enterprise Performance at Lower Cost", bn: "কম খরচে এন্টারপ্রাইজ পারফরম্যান্স" },
      { en: "Optimized Cloud Resource Usage", bn: "অপ্টিমাইজড ক্লাউড রিসোর্স ইউসেজ" },
      { en: "Maintenance Cost Optimization", bn: "মেইনটেন্যান্স কস্ট অপ্টিমাইজেশন" }
    ]
  },
  {
    id: "custom-api",
    icon: Settings,
    title: { en: "Custom Development & API", bn: "কাস্টম ডেভেলপমেন্ট ও এপিআই" },
    features: [
      { en: "Custom Feature Development", bn: "কাস্টম ফিচার ডেভেলপমেন্ট" },
      { en: "Business-Specific Workflow Integration", bn: "বিজনেস-প্যাসিফিক ওয়ার্কফ্লো ইন্টিগ্রেশন" },
      { en: "Flexible API Architecture", bn: "ফ্লেক্সিবল এপিআই (API) আর্কিটেকচার" },
      { en: "Third-Party Service Integration", bn: "থার্ড-পার্টি সার্ভিস ইন্টিগ্রেশন" },
      { en: "Custom Ecommerce Solution", bn: "কাস্টম ই-কমার্স সলিউশন" },
      { en: "Advanced System Integration", bn: "অ্যাডভান্সড সিস্টেম ইন্টিগ্রেশন" },
      { en: "External API Synchronization", bn: "এক্সটার্নাল এপিআই সিঙ্ক্রোনাইজেশন" },
      { en: "Scalable Development Framework", bn: "স্কেলেবল ডেভেলপমেন্ট ফ্রেমওয়ার্ক" },
      { en: "Custom Automation Development", bn: "কাস্টম অটোমেশন ডেভেলপমেন্ট" }
    ]
  },
  {
    id: "payment-subscription",
    icon: Check,
    title: { en: "Payment & Subscription", bn: "পেমেন্ট ও সাবস্ক্রিপশন" },
    features: [
      { en: "One-Time Payment System", bn: "ওয়ান-টাইম পেমেন্ট সিস্টেম" },
      { en: "Lifetime Usage", bn: "লাইফটাইম ইউসেজ সুবিধা" },
      { en: "Long-Term Ownership", bn: "লং-টার্ম ওনারশিপ সুবিধা" },
      { en: "Affordable Monthly Pricing", bn: "অ্যাফোর্ডেবল মান্থলি প্রাইসিং" },
      { en: "Maintenance Included", bn: "মেইনটেন্যান্স ইনক্লুডেড" },
      { en: "Continuous Updates", bn: "কন্টিনিউয়াস আপডেটস" },
      { en: "Ongoing Feature Improvements", bn: "অনগোয়িং ফিচার ইম্প্রুভমেন্টস" }
    ]
  },
  {
    id: "trial-support",
    icon: ShieldCheck,
    title: { en: "Trial & Support", bn: "ট্রায়াল ও সাপোর্ট" },
    features: [
      { en: "7 Days Free Trial", bn: "৭ দিনের ফ্রি ট্রায়াল" },
      { en: "Free Setup Support", bn: "ফ্রি সেটআপ সাপোর্ট" },
      { en: "Business Workflow Testing", bn: "বিজনেস ওয়ার্কফ্লো টেস্টিং" },
      { en: "Demo System Access", bn: "ডেমো সিস্টেম অ্যাক্সেস" },
      { en: "Consultation & Initial Guidance", bn: "কনসালটেশন ও প্রাথমিক গাইডেন্স" },
      { en: "Free Domain in Selected Packages", bn: "নির্দিষ্ট প্যাকেজে ফ্রি ডোমেইন" },
      { en: "Onboarding Assistance", bn: "অনবোর্ডিং অ্যাসিস্ট্যান্স" }
    ]
  },
  {
    id: "growth-ux",
    icon: TrendingUp,
    title: { en: "User Experience & Growth", bn: "ইউজার এক্সপেরিয়েন্স ও বিজনেস গ্রোথ" },
    features: [
      { en: "Mobile Optimized System", bn: "মোবাইল অপ্টিমাইজড সিস্টেম" },
      { en: "Smooth Customer Journey", bn: "স্মুথ কাস্টমার জার্নি" },
      { en: "Faster Checkout Experience", bn: "ফাস্টার চেকআউট এক্সপেরিয়েন্স" },
      { en: "Lower Bounce Rate", bn: "লোয়ার বাউন্স রেট" },
      { en: "Higher Customer Retention", bn: "হায়ার কাস্টমার রিটেনশন" },
      { en: "Better User Engagement", bn: "বেটার ইউজার এঙ্গেজমেন্ট" },
      { en: "Business Growth Optimization", bn: "বিজনেস গ্রোথ অপ্টিমাইজেশন" },
      { en: "Conversion Focused System", bn: "কনভার্শন ফোকাসড সিস্টেম" },
      { en: "Retention Optimized Architecture", bn: "রিটেনশন অপ্টিমাইজড আর্কিটেকচার" },
      { en: "Long-Term Scalability", bn: "লং-টার্ম স্কেলেবিলিটি" },
      { en: "Growth Focused Technology Stack", bn: "গ্রোথ ফোকাসড টেকনোলজি স্ট্যাক" },
      { en: "Everything Optimized to Run Business Smoothly & Efficiently", bn: "সবকিছু অপ্টিমাইজ করা হয়েছে মসৃণভাবে বিজনেস চালানোর জন্য" }
    ]
  }
];

// 21 Admin Panel Video Guide items
const adminGuides = [
  {
    part: 1,
    title: { en: "Dashboard Overview", bn: "Dashboard Overview" },
    desc: {
      en: "Track all your business live updates, sales graphs, and critical data in just 1 minute.",
      bn: "ফিচার বিবরণ: মাত্র ১ মিনিটে আপনার ব্যবসায়ের যাবতীয় লাইভ আপডেট, সেলস গ্রাফ এবং প্রয়োজনীয় ডেটা ট্র্যাক করুন।"
    },
    videoTitle: { en: "Dashboard Masterclass", bn: "ড্যাশবোর্ড মাস্টারক্লাস" },
    duration: "01:00",
  },
  {
    part: 2,
    title: { en: "Professional Product Listing", bn: "Professional Product Listing" },
    desc: {
      en: "Add new products to your e-commerce website following correct and professional rules.",
      bn: "ফিচার বিবরণ: আপনার ই-কমার্স ওয়েবসাইটে সঠিক ও পেশাদার নিয়মে নতুন পণ্য বা প্রোডাক্ট যুক্ত করুন।"
    },
    videoTitle: { en: "Product Listing Guide (Part-02)", bn: "প্রোডাক্ট লিস্টিং গাইড (প্লেলিস্ট পার্ট-০২)" },
    duration: "08:12",
  },
  {
    part: 3,
    title: { en: "Product Page Management", bn: "Product Page Management" },
    desc: {
      en: "Arrange and manage your product page correctly to smartly boost your sales.",
      bn: "ফিচার বিবরণ: প্রোডাক্ট পেজ সঠিকভাবে সাজিয়ে এবং ম্যানেজ করে স্মার্টলি আপনার সেলস বৃদ্ধি করুন।"
    },
    videoTitle: { en: "Product Page Management Tricks (Part-03)", bn: "প্রোডাক্ট পেজ ম্যানেজমেন্ট ট্রিকস (প্লেলিস্ট পার্ট-০৩)" },
    duration: "01:04",
  },
  {
    part: 4,
    title: { en: "Product Category Setup", bn: "Product Category Setup" },
    desc: {
      en: "Organize your online shop products by categories, keeping them clean for customers.",
      bn: "ফিচার বিবরণ: অনলাইন শপের পণ্যগুলোকে ক্যাটাগরি অনুযায়ী সাজিয়ে কাস্টমারের জন্য একদম গোছানো রাখুন।"
    },
    videoTitle: { en: "Category Setup Tutorial (Part-04)", bn: "ক্যাটাগরি সেটআপ টিউটোরিয়াল (প্লেলিস্ট পার্ট-০৪)" },
    duration: "00:59",
  },
  {
    part: 5,
    title: { en: "Product Attribute Management", bn: "Product Attribute Management" },
    desc: {
      en: "Manage various product sizes, colors, and variations (Attributes) in just 30 seconds.",
      bn: "ফিচার বিবরণ: প্রোডাক্টের বিভিন্ন সাইজ, কালার বা ভেরিয়েশন (Attributes) মাত্র ৩০ সেকেন্ডে ম্যানেজ করার উপায়।"
    },
    videoTitle: { en: "Product Attribute Guide (Part-05)", bn: "প্রোডাক্ট এট্রিবিউট গাইড (প্লেলিস্ট পার্ট-০৫)" },
    duration: "00:30",
  },
  {
    part: 6,
    title: { en: "Inventory & Stock Management", bn: "Inventory & Stock Management" },
    desc: {
      en: "Accurately track and control your product stock through inventory management.",
      bn: "ফিচার বিবরণ: ইনভেন্টরি ম্যানেজমেন্টের মাধ্যমে ব্যবসায়ের প্রোডাক্ট স্টক নির্ভুলভাবে ট্র্যাক এবং কন্ট্রোল করুন।"
    },
    videoTitle: { en: "Inventory Tracking Guide (Part-06)", bn: "ইনভেন্টরি ট্র্যাকিং গাইড (প্লেলিস্ট পার্ট-০৬)" },
    duration: "04:59",
  },
  {
    part: 7,
    title: { en: "Automated Order Management", bn: "Automated Order Management" },
    desc: {
      en: "End manual hassle and process orders at a pro-level using automation.",
      bn: "ফিচার বিবরণ: ম্যানুয়াল ঝামেলার অবসান ঘটিয়ে অটোমেশনের মাধ্যমে প্রো-লেভেলে অর্ডার প্রসেস করুন।"
    },
    videoTitle: { en: "Order Automation Tutorial (Part-07)", bn: "অর্ডার অটোমেশন টিউটোরিয়াল (প্লেলিস্ট পার্ট-০৭)" },
    duration: "15:39",
  },
  {
    part: 8,
    title: { en: "POS (Point of Sale) Integration", bn: "POS (Point of Sale) Integration" },
    desc: {
      en: "Easily enter customer orders coming from Facebook or Messenger into the POS system to keep records.",
      bn: "ফিচার বিবরণ: ফেসবুক বা মেসেঞ্জারে আসা কাস্টমারদের অর্ডারগুলো সহজেই রেকর্ড রাখতে POS সিস্টেমে এন্ট্রি দিন।"
    },
    videoTitle: { en: "Messenger to POS Entry Guide (Part-08)", bn: "মেসেঞ্জার টু POS এন্ট্রি গাইড (প্লেলিস্ট পার্ট-০৮)" },
    duration: "03:55",
  },
  {
    part: 9,
    title: { en: "Customer Insights & Growth", bn: "Customer Insights & Growth" },
    desc: {
      en: "Secret tricks to increase business sales and growth by understanding customer buying behavior.",
      bn: "ফিচার বিবরণ: কাস্টমারদের কেনাকাটার আচরণ বুঝে ব্যবসার সেলস ও গ্রোথ বাড়ানোর সিক্রেট ট্রিকস।"
    },
    videoTitle: { en: "Customer Insights Tutorial (Part-09)", bn: "কাস্টমার ইনসাইটস টিউটোরিয়াল (প্লেলিস্ট পার্ট-০৯)" },
    duration: "03:15",
  },
  {
    part: 10,
    title: { en: "Review Management", bn: "Review Management" },
    desc: {
      en: "Keep website customer reviews under your control to build a positive brand image.",
      bn: "ফিচার বিবরণ: ওয়েবসাইটের কাস্টমার রিভিউগুলো নিজের নিয়ন্ত্রণে রেখে পজিটিভ ব্র্যান্ড ইমেজ তৈরি করুন।"
    },
    videoTitle: { en: "Review Management Strategy (Part-10)", bn: "রিভিউ ম্যানেজমেন্ট কৌশল (প্লেলিস্ট পার্ট-১০)" },
    duration: "02:00",
  },
  {
    part: 11,
    title: { en: "Coupon & Discount Setup", bn: "Coupon & Discount Setup" },
    desc: {
      en: "Set up discount coupons on your e-commerce site to encourage repeat purchases.",
      bn: "ফিচার বিবরণ: কাস্টমারদের বারবার কেনাকাটায় উৎসাহিত করতে ই-কমার্স সাইটে ডিসকাউন্ট কুপন সেটআপ করুন।"
    },
    videoTitle: { en: "Coupon Setup Guide (Part-11)", bn: "কুপন সেটআপ গাইড (প্লেলিস্ট পার্ট-১১)" },
    duration: "01:50",
  },
  {
    part: 12,
    title: { en: "Profit & Expense Analytics", bn: "Profit & Expense Analytics" },
    desc: {
      en: "See accurate analytics reports of your business profit-loss and every account in one click.",
      bn: "ফিচার বিবরণ: মাত্র এক ক্লিকেই আপনার ব্যবসায়ের লাভ-ক্ষতি এবং প্রতিটি হিসাবের নিখুঁত অ্যানালিটিক্স রিপোর্ট দেখুন।"
    },
    videoTitle: { en: "Business Profit Calculation (Part-12)", bn: "বিজনেস প্রফিট ক্যালকুলেশন (প্লেলিস্ট পার্ট-১২)" },
    duration: "03:34",
  },
  {
    part: 13,
    title: { en: "Visitor Page Tracking (Data-Driven Decisions)", bn: "Visitor Page Tracking (Data-Driven Decisions)" },
    desc: {
      en: "Track real-time visitors coming to your website and make data-driven business decisions.",
      bn: "ফিচার বিবরণ: আপনার ওয়েবসাইটে আসা রিয়েল-টাইম ভিজিটরদের ট্র্যাক করে ডেটা-ভিত্তিক সঠিক ব্যবসায়িক সিদ্ধান্ত নিন।"
    },
    videoTitle: { en: "Visitor Page Tracking (Part-13)", bn: "ভিজিটর পেজ ট্র্যাকিং (প্লেলিস্ট পার্ট-১৩)" },
    duration: "02:30",
  },
  {
    part: 14,
    title: { en: "Automated Facebook Ad Control", bn: "Automated Facebook Ad Control" },
    desc: {
      en: "Automatically turn off your Facebook advertisements (Ads) under specific conditions to prevent budget waste.",
      bn: "ফিচার বিবরণ: বাজেট অপচয় রোধ করতে নির্দিষ্ট শর্তে আপনার ফেসবুক বিজ্ঞাপন (Ads) স্বয়ংক্রিয়ভাবে বন্ধ করুন।"
    },
    videoTitle: { en: "Automatic Ad Optimization (Part-14)", bn: "অটোমেটিক অ্যাড অপ্টিমাইজেশন (প্লেলিস্ট পার্ট-১৪)" },
    duration: "05:24",
  },
  {
    part: 15,
    title: { en: "Announcement Bar & Urgent Offers", bn: "Announcement Bar & Urgent Offers" },
    desc: {
      en: "Double your sales by adding attractive notices or announcement bars to promote offers.",
      bn: "ফিচার বিবরণ: ওয়েবসাইটে আকর্ষণীয় নোটিশ বা এনাуন্সমেন্ট বার যুক্ত করে অফার প্রচারের মাধ্যমে সেল দ্বিগুণ করুন।"
    },
    videoTitle: { en: "Announcement Bar Setup (Part-15)", bn: "এনাউন্সমেন্ট বার সেটআপ (প্লেলিস্ট পার্ট-১৫)" },
    duration: "04:09",
  },
  {
    part: 16,
    title: { en: "AI-Driven Business Growth", bn: "AI-Driven Business Growth" },
    desc: {
      en: "Automate your business tasks using the magic of new Artificial Intelligence (AI) features.",
      bn: "ফিচার বিবরণ: নতুন কৃত্রিম বুদ্ধিমত্তা বা AI ফিচারের ম্যাজিক ব্যবহার করে ব্যবসায়ের কাজগুলোকে অটোমেট করুন।"
    },
    videoTitle: { en: "AI Business Automation (Part-16)", bn: "AI বিজনেস অটোমেশন (প্লেলিস্ট পার্ট-১৬)" },
    duration: "03:00",
  },
  {
    part: 17,
    title: { en: "Staff Activity Monitoring", bn: "Staff Activity Monitoring" },
    desc: {
      en: "Monitor and track whether your hired staff or employees are working properly in the panel.",
      bn: "ফিচার বিবরণ: আপনার নিয়োগ দেওয়া স্টাফ বা কর্মীরা প্যানেলে ঠিকঠাক কাজ করছে কিনা তা মনিটর ও ট্র্যাক করুন।"
    },
    videoTitle: { en: "Staff Monitoring Guide (Part-17)", bn: "স্টাফ মনিটরিং গাইড (প্লেলিস্ট পার্ট-১৭)" },
    duration: "02:16",
  },
  {
    part: 18,
    title: { en: "Super Admin vs Staff Access Control", bn: "Super Admin vs Staff Access Control" },
    desc: {
      en: "Keep shop control secure by maintaining differences between super admin and staff roles/permissions.",
      bn: "ফিচার বিবরণ: সুপার অ্যাডমিন এবং স্টাফদের রোল বা পারমিশনের মধ্যে পার্থক্য বজায় রেখে শপের নিয়ন্ত্রণ সুরক্ষিত রাখুন।"
    },
    videoTitle: { en: "Access Control & Permissions (Part-18)", bn: "অ্যাক্সেস কন্ট্রোল ও পারমিশন (প্লেলিস্ট পার্ট-১৮)" },
    duration: "02:02",
  },
  {
    part: 19,
    title: { en: "Fraud Customer Blocking", bn: "Fraud Customer Blocking" },
    desc: {
      en: "Identify fake orderers or fraud customers and block them from the website forever in just 1 minute.",
      bn: "ফিচার বিবরণ: ভুয়া অর্ডারকারী বা ফ্রড কাস্টমারদের চিহ্নিত করে মাত্র ১ মিনিটে চিরতরে ওয়েবসাইট থেকে ব্লক করুন।"
    },
    videoTitle: { en: "Fraud Customer Blocking Method (Part-19)", bn: "ফ্রড কাস্টমার ব্লক করার উপায় (প্লেলিস্ট পার্ট-১৯)" },
    duration: "01:30",
  },
  {
    part: 20,
    title: { en: "App Usage & Free Tier Tracker", bn: "App Usage & Free Tier Tracker" },
    desc: {
      en: "Easily check if your system or app free quotas/tier limits are running out.",
      bn: "ফিচার বিবরণ: আপনার সিস্টেম বা অ্যাপগুলোর ফ্রি কোটা/টায়ার লিমিট শেষ হয়ে যাচ্ছে কিনা তা সহজেই চেক করুন।"
    },
    videoTitle: { en: "Free Tier Limit Checking (Part-20)", bn: "ফ্রি টায়ার লিমিট চেকিং (প্লেলিস্ট পার্ট-২০)" },
    duration: "01:45",
  },
  {
    part: 21,
    title: { en: "Advanced Ecommerce Settings Configuration", bn: "Advanced Ecommerce Settings Configuration" },
    desc: {
      en: "Set up all the details and advanced configurations of your e-commerce site setting page in one video.",
      bn: "ফিচার বিবরণ: ই-কমার্স সাইটের সেটিং পেজের যাবতীয় খুঁটিনাটি ও অ্যাডভান্সড কনফিগারেশন এক ভিডিওতে সেটআপ করুন।"
    },
    videoTitle: { en: "Complete Settings Guide (Part-21)", bn: "কমপ্লিট সেটিংস গাইড (প্লেলিস্ট পার্ট-২১)" },
    duration: "08:46",
  }
];

export default function FeaturesSection() {
  const { lang } = useLanguage();
  const [activePillar, setActivePillar] = useState<"system" | "admin" | "store">("system");
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const tabColors = [
    { bg: "bg-blue-500/10", text: "text-blue-400" },
    { bg: "bg-orange-500/10", text: "text-orange-400" },
    { bg: "bg-amber-500/10", text: "text-amber-400" },
    { bg: "bg-emerald-500/10", text: "text-emerald-400" },
    { bg: "bg-violet-500/10", text: "text-violet-400" }
  ];

  // Filter 21 admin guides based on search query
  const filteredGuides = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return adminGuides;
    return adminGuides.filter(guide => 
      guide.title.en.toLowerCase().includes(query) ||
      guide.title.bn.toLowerCase().includes(query) ||
      guide.desc.en.toLowerCase().includes(query) ||
      guide.desc.bn.toLowerCase().includes(query) ||
      guide.videoTitle.en.toLowerCase().includes(query) ||
      guide.videoTitle.bn.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const handleOpenPlaylist = (index: number) => {
    window.open(
      `https://www.youtube.com/watch?list=PLu6gtzurTKkPQXjZ-cqjB6GB4srkWVem3&index=${index}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black/10 scroll-mt-12">
      {/* Visual Ambient Glows */}
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} 
      />
      <div 
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 text-xs font-semibold uppercase tracking-widest bg-primary/5 text-primary mb-3 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Sparkles className="w-3.5 h-3.5" />
            {lang === "bn" ? "কমপ্লিট ই-কমার্স ও অটোমেশন" : "Complete Ecommerce & Automation"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
            <span className="gradient-text">{lang === "bn" ? "AutoNovaQ – Complete Combined Feature List" : "AutoNovaQ – Complete Combined Feature List"}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto font-medium mb-4">
            {lang === "bn"
              ? "AutoNovaQ একটি আধুনিক AI-Driven Ecommerce & Business Automation System যেখানে Website Infrastructure, Business Automation, Analytics, Security, Inventory, Courier, AI Tools এবং Powerful Admin Panel — সবকিছু একসাথে যুক্ত করা হয়েছে।"
              : "AutoNovaQ is a modern AI-Driven Ecommerce & Business Automation System combining Website Infrastructure, Automation, Analytics, Security, Inventory, Courier, AI Tools, and a Powerful Admin Panel."}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-4xl mx-auto font-medium">
            {lang === "bn"
              ? "AutoNovaQ শুধুমাত্র একটি Website System নয় — এটি একটি Complete Business Operating System যেখানে Ecommerce, Automation, Analytics, AI, Security, Staff Management এবং Business Growth Tools একসাথে কাজ করে আপনার ব্যবসাকে আরও দ্রুত, স্মার্ট ও লাভজনকভাবে পরিচালনা করতে সাহায্য করে।"
              : "AutoNovaQ is not just a Website System — it's a Complete Business Operating System working together to help you run your business faster, smarter, and more profitably."}
          </p>
        </div>

        {/* Pillar Switcher Buttons */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 bg-card/60 backdrop-blur-md rounded-2xl border border-border/40 inline-flex items-center gap-2 shadow-2xl">
            <button
              onClick={() => setActivePillar("system")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 ${
                activePillar === "system"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-[var(--surface-hover)]"
              }`}
            >
              <Layout className="w-4 h-4" />
              {lang === "bn" ? "সিস্টেম ফিচার ও অটোমেশন" : "System Features & Automation"}
            </button>
            <button
              onClick={() => setActivePillar("admin")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 ${
                activePillar === "admin"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-[var(--surface-hover)]"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              {lang === "bn" ? "🛠️ অ্যাডমিন প্যানেল ভিডিও গাইড" : "🛠️ Admin Panel Video Guide"}
            </button>
            <button
              onClick={() => setActivePillar("store")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 ${
                activePillar === "store"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-[var(--surface-hover)]"
              }`}
            >
               <Layout className="w-4 h-4" />
              {lang === "bn" ? "🛍️ ই-কমার্স স্টোর গাইড ও থিম" : "🛍️ Ecommerce Store Guide & Themes"}
            </button>
          </div>
        </div>

        {/* Pillar 1 Content: System features by categories */}
        <AnimatePresence mode="wait">
          {activePillar === "system" && (
            <motion.div
              key="system-pillar"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Category tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categories.map((cat, index) => {
                  const IconComp = cat.icon;
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(index)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                        isActive
                          ? "bg-primary/10 border-primary/40 text-primary shadow-lg shadow-primary/5"
                          : "bg-card/40 border-border/40 hover:bg-[var(--surface-hover)] hover:border-border/80 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <IconComp className={`w-4 h-4 ${isActive ? "text-primary" : tabColors[index]?.text || "text-primary"}`} />
                      <span>{lang === "bn" ? cat.title.bn : cat.title.en}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Tab's features list container */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glow-border-active rounded-3xl p-6 sm:p-8 md:p-10 bg-card/30 backdrop-blur-xl shadow-2xl relative overflow-hidden"
              >
                {/* Visual glow element */}
                <div className={`absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-10 bg-primary`} />

                <div className="flex items-center gap-3.5 mb-8 border-b border-border/40 pb-5">
                  <div className={`w-12 h-12 rounded-2xl ${tabColors[activeTab]?.bg || "bg-primary/10"} flex items-center justify-center shadow-lg`}>
                    {(() => {
                      const IconComp = categories[activeTab].icon;
                      return <IconComp className={`w-6 h-6 ${tabColors[activeTab]?.text || "text-primary"}`} />;
                    })()}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {lang === "bn" ? categories[activeTab].title.bn : categories[activeTab].title.en}
                  </h3>
                </div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {categories[activeTab].features.map((feat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-card/40 border border-border/20 hover:border-primary/20 hover:bg-[var(--surface-hover)] transition-all duration-200"
                    >
                      <div className="mt-0.5 rounded-full p-0.5 bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-muted-foreground/90 font-medium text-xs sm:text-sm leading-relaxed">
                        {lang === "bn" ? feat.bn : feat.en}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          
          {/* Pillar 3 Content: Ecommerce Store Guide & Themes */}
          {activePillar === "store" && (
            <motion.div
              key="store-pillar"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >

              {/* Clients and Themes Card */}
              <div className="rounded-3xl border border-primary/20 p-6 sm:p-8 bg-card/60 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
                  <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                    {lang === "bn" ? "আমাদের ক্লায়েন্টসমূহ: " : "Our Clients: "}
                    <a href="http://zargon.bid/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Zargon</a>,{" "}
                    <a href="http://yarnhousebd.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">YarnHouseBD</a>,{" "}
                    <a href="https://onlyonebd.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">OnlyOneBD</a> 
                    {lang === "bn" ? " এবং আরও অনেকে।" : " and much more."}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                    {lang === "bn" ? "ক্লায়েন্টদের জন্য আমাদের দেওয়া থিমগুলো:" : "Themes we provide to the clients:"}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a href="https://youtu.be/CJslkng8xAI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600/10 hover:bg-red-600/20 text-red-500 font-bold text-sm transition-all border border-red-500/20">
                      <Play className="w-4 h-4" /> Theme Preview 1
                    </a>
                    <a href="https://youtu.be/HXHFWxg4wrE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600/10 hover:bg-red-600/20 text-red-500 font-bold text-sm transition-all border border-red-500/20">
                      <Play className="w-4 h-4" /> Theme Preview 2
                    </a>
                  </div>
                </div>
              </div>

                          </motion.div>
          )}

          {/* Pillar 2 Content: Interactive Admin Panel 21 videos checklist */}
          {activePillar === "admin" && (
            <motion.div
              key="admin-pillar"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* YouTube Playlist Promo Banner card */}
              <div 
                className="rounded-3xl border border-violet-500/20 p-6 sm:p-8 bg-gradient-to-r from-violet-950/20 via-purple-950/20 to-indigo-950/20 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                      {lang === "bn" ? "অফিসিয়াল ভিডিও টিউটোরিয়াল গাইড" : "Official Video Tutorial Guide"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                      {lang === "bn" ? "🛠️ AutoNovaQ অ্যাডমিন প্যানেল গাইড প্লেলিস্ট" : "🛠️ AutoNovaQ Admin Panel Playlist Guide"}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground/90 max-w-2xl font-semibold">
                      {lang === "bn"
                        ? "নিচের ২১টি মডিউলের বিস্তারিত বর্ণনা ও ভিডিও টিউটোরিয়াল সরাসরি ইউটিউব প্লেলিস্ট আকারে সাজানো রয়েছে।"
                        : "Detailed features description & video tutorials for all 21 modules are compiled in our official YouTube playlist."}
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/playlist?list=PLu6gtzurTKkPQXjZ-cqjB6GB4srkWVem3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-violet-600/20 flex-shrink-0"
                  >
                    <List className="w-4 h-4" />
                    {lang === "bn" ? "সম্পূর্ণ প্লেলিস্টটি ওপেন করুন" : "Open Full Playlist"}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              {/* Guide List Actions: Search Filter input */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full max-w-md ml-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={lang === "bn" ? "ফিচার বা মডিউল খুঁজুন..." : "Search features or modules..."}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="text-xs text-muted-foreground font-semibold px-2">
                  {lang === "bn" ? `মোট ${filteredGuides.length} টি ফিচার পাওয়া গেছে` : `Found ${filteredGuides.length} features`}
                </div>
              </div>

              {/* 21 Modules Interactive Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={filteredGuides.length}
              >
                {filteredGuides.map((guide) => (
                  <motion.div
                    key={guide.part}
                    variants={itemVariants}
                    className="group relative rounded-2xl border border-border/40 p-6 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all duration-300 hover:border-primary/20 flex flex-col justify-between hover:translate-y-[-2px] shadow-xl"
                  >
                    {/* Glowing highlight top-border on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/30 to-violet-500/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                    <div className="space-y-4">
                      {/* Top row: Part Badge + Duration */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400">
                          {lang === "bn" ? `পার্ট-০${guide.part}`.replace("০১০", "১০").replace("০১১", "১১").replace("০১২", "১২").replace("০১৩", "১৩").replace("০১৪", "১৪").replace("০১৫", "১৫").replace("০১৬", "১৬").replace("০১৭", "১৭").replace("০১৮", "১৮").replace("০১৯", "১৯").replace("০২০", "২০").replace("০২১", "২১") : `Part ${guide.part.toString().padStart(2, "0")}`}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                          <Clock className="w-3 h-3 text-muted-foreground/60" />
                          <span>{guide.duration}</span>
                        </div>
                      </div>

                      {/* Title & Desc */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-base text-foreground/90 group-hover:text-primary transition-colors leading-tight">
                          {lang === "bn" ? guide.title.bn : guide.title.en}
                        </h4>
                        <p className="text-xs text-muted-foreground/80 leading-relaxed font-semibold line-clamp-3">
                          {lang === "bn" ? guide.desc.bn : guide.desc.en}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action tutorial link */}
                    <div className="pt-5 mt-4 border-t border-border/30 flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-muted-foreground max-w-[130px] truncate">
                        {lang === "bn" ? guide.videoTitle.bn : guide.videoTitle.en}
                      </span>
                      <button
                        onClick={() => handleOpenPlaylist(guide.part)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-foreground hover:bg-primary/80 px-3 py-1.5 rounded-xl border border-primary/20 bg-primary/10 transition-all duration-200"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>{lang === "bn" ? "টিউটোরিয়াল" : "Watch Tute"}</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
