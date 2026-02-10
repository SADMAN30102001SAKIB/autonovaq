"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { companyInfo } from "@/data/content";

export default function ContactFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Sticky left-side tab */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 group"
        aria-label="Contact us">
        <div className="flex items-center bg-gradient-to-b from-blue-500 via-violet-500 to-purple-600 text-white py-4 px-2 rounded-r-xl shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:px-3 transition-all duration-300">
          <span
            className="text-xs font-bold tracking-wider whitespace-nowrap"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            {t("যোগাযোগ করুন", "CONTACT US")}
          </span>
        </div>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <motion.div
                className="relative w-full max-w-sm rounded-2xl overflow-hidden"
                initial={{ scale: 0.85, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.85, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={e => e.stopPropagation()}>
                {/* Gradient border wrapper */}
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600">
                  <div className="bg-card rounded-2xl p-6 sm:p-8 relative">
                    {/* Close button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full glass hover:bg-foreground/10 transition-colors"
                      aria-label="Close">
                      <X size={18} />
                    </button>

                    {/* Icon */}
                    <div className="flex justify-center mb-5">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                        <MessageCircle size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-center mb-2">
                      {t("কথা বলা যাক!", "Let's Talk!")}
                    </h3>
                    <p className="text-muted-foreground text-sm text-center mb-8 leading-relaxed">
                      {t(
                        "আপনার ব্যবসার জন্য কীভাবে সাহায্য করতে পারি জানতে এখনই যোগাযোগ করুন!",
                        "Reach out to learn how we can help your business grow!",
                      )}
                    </p>

                    {/* WhatsApp button */}
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                        t(
                          "হ্যালো, AutoNovaQ সম্পর্কে জানতে চাই।",
                          "Hello, I want to know about AutoNovaQ.",
                        ),
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl text-white font-semibold text-base transition-all hover:scale-[1.02] hover:shadow-lg"
                      style={{ background: "#25D366" }}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        width={22}
                        height={22}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {t("WhatsApp-এ বার্তা পাঠান", "Message on WhatsApp")}
                    </a>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5">
                      <div className="flex-1 h-px bg-border/50"></div>
                      <span className="text-muted-foreground text-xs font-medium">
                        {t("অথবা", "or")}
                      </span>
                      <div className="flex-1 h-px bg-border/50"></div>
                    </div>

                    {/* Call button */}
                    <a
                      href={`tel:${companyInfo.whatsapp}`}
                      className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] glass hover:bg-[var(--surface-overlay)] border border-border/50">
                      <Phone
                        size={20}
                        className="text-violet-400 flex-shrink-0"
                      />
                      <span className="whitespace-nowrap">
                        {t("কল করুন:", "Call us:")}{" "}
                        <span className="gradient-text font-bold">
                          {companyInfo.phone}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
