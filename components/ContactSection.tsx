"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageCircle, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactContent, companyInfo } from "@/data/content";

export default function ContactSection() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Build WhatsApp message
    const whatsappMsg = encodeURIComponent(
      `নাম: ${formData.name}\nফোন: ${formData.phone}\nব্যবসা: ${formData.business}\nবার্তা: ${formData.message}`,
    );
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace("+", "")}?text=${whatsappMsg}`;

    try {
      // Save to database first, await completion
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        console.warn("DB save returned error:", res.status);
      }
    } catch (err) {
      console.warn("DB save failed:", err);
    }

    // Only open WhatsApp AFTER DB save completes (or fails)
    window.open(whatsappUrl, "_blank");

    setSending(false);
    setSent(true);
    setFormData({ name: "", phone: "", business: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-4 scroll-mt-0">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === "bn"
              ? contactContent.sectionTitle.bn
              : contactContent.sectionTitle.en}
            <span className="gradient-text">
              {lang === "bn"
                ? contactContent.sectionTitleHighlight.bn
                : contactContent.sectionTitleHighlight.en}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {lang === "bn"
              ? contactContent.sectionSubtitle.bn
              : contactContent.sectionSubtitle.en}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <form
              onSubmit={handleSubmit}
              className="glow-border rounded-2xl p-6 lg:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    {lang === "bn"
                      ? contactContent.form.name.bn
                      : contactContent.form.name.en}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                    placeholder={
                      lang === "bn" ? "আপনার নাম লিখুন" : "Enter your name"
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    {lang === "bn"
                      ? contactContent.form.phone.bn
                      : contactContent.form.phone.en}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                    placeholder={
                      lang === "bn" ? "01XXX-XXXXXX" : "01XXX-XXXXXX"
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  {lang === "bn"
                    ? contactContent.form.business.bn
                    : contactContent.form.business.en}
                </label>
                <input
                  type="text"
                  value={formData.business}
                  onChange={e =>
                    setFormData({ ...formData, business: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                  placeholder={
                    lang === "bn" ? "আপনার ব্যবসার নাম" : "Your business name"
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  {lang === "bn"
                    ? contactContent.form.message.bn
                    : contactContent.form.message.en}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none text-sm"
                  placeholder={
                    lang === "bn"
                      ? "আপনার ব্যবসা সম্পর্কে আমাদের জানান..."
                      : "Tell us about your business..."
                  }
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all hover:scale-[1.01] shadow-lg shadow-primary/20 disabled:opacity-60">
                {sent ? (
                  <span className="inline-flex items-center gap-2">
                    <Check size={18} />
                    {lang === "bn" ? "পাঠানো হয়েছে!" : "Sent!"}
                  </span>
                ) : sending ? (
                  <span>
                    {lang === "bn" ? "পাঠানো হচ্ছে..." : "Sending..."}
                  </span>
                ) : (
                  <>
                    <Send size={18} />
                    {lang === "bn"
                      ? contactContent.form.submit.bn
                      : contactContent.form.submit.en}
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group glow-border rounded-xl p-6 flex items-center gap-4 hover:bg-[var(--surface-subtle)] transition-all">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} className="text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">
                  {lang === "bn"
                    ? contactContent.whatsappCta.bn
                    : contactContent.whatsappCta.en}
                </p>
                <p className="text-muted-foreground text-xs">
                  {companyInfo.whatsapp}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${companyInfo.phone}`}
              className="group glow-border rounded-xl p-6 flex items-center gap-4 hover:bg-[var(--surface-subtle)] transition-all">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">
                  {lang === "bn"
                    ? contactContent.phoneCta.bn
                    : contactContent.phoneCta.en}
                </p>
                <p className="text-muted-foreground text-xs">
                  {companyInfo.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${companyInfo.email}`}
              className="group glow-border rounded-xl p-6 flex items-center gap-4 hover:bg-[var(--surface-subtle)] transition-all">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-purple-400" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">
                  {lang === "bn"
                    ? contactContent.emailCta.bn
                    : contactContent.emailCta.en}
                </p>
                <p className="text-muted-foreground text-xs">
                  {companyInfo.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="glow-border rounded-xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-orange-400" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">
                  {lang === "bn" ? "অবস্থান" : "Location"}
                </p>
                <p className="text-muted-foreground text-xs">
                  {lang === "bn"
                    ? companyInfo.address.bn
                    : companyInfo.address.en}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
