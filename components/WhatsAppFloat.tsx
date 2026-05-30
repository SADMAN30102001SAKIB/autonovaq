"use client";

import { useState, useRef, useEffect } from "react";
import { companyInfo } from "@/data/content";
import { X, MessageCircle } from "lucide-react";

// Messenger env variable support: process.env.NEXT_PUBLIC_MESSENGER_URL
const MESSENGER_URL =
  process.env.NEXT_PUBLIC_MESSENGER_URL ||
  "https://m.me/your.messenger.page"; // replaced via env

// WhatsApp icon (original SVG path)
function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Messenger icon
function MessengerIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242a13.072 13.072 0 003.443.457c6.628 0 12-4.975 12-11.104C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.4l3.131 3.26 5.888-3.26-6.56 6.563z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [bouncing, setBouncing] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  // Auto-collapse bounce after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setBouncing(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const waUrl = `https://wa.me/${companyInfo.whatsapp.replace("+", "")}`;

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
      {/* Expanded option menu */}
      {open && (
        <div
          className="flex flex-col gap-2 animate-slideUp"
          style={{ animationDuration: "0.2s" }}>
          {/* WhatsApp option */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl transition-all duration-200 hover:scale-105 group"
            style={{
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              color: "white",
              boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
              minWidth: "180px",
            }}>
            <span className="flex-shrink-0">
              <WhatsAppIcon size={20} />
            </span>
            <div>
              <div className="text-xs font-bold leading-tight">WhatsApp</div>
              <div className="text-[10px] opacity-80">মেসেজ করুন</div>
            </div>
          </a>

          {/* Messenger option */}
          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0084FF, #0668E1)",
              color: "white",
              boxShadow: "0 4px 20px rgba(0,132,255,0.45)",
              minWidth: "180px",
            }}>
            <span className="flex-shrink-0">
              <MessengerIcon size={20} />
            </span>
            <div>
              <div className="text-xs font-bold leading-tight">Messenger</div>
              <div className="text-[10px] opacity-80">মেসেজ করুন</div>
            </div>
          </a>
        </div>
      )}

      {/* Main FAB button */}
      <button
        id="chat-fab-button"
        onClick={() => setOpen((p) => !p)}
        aria-label="Chat with us"
        className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none ${bouncing && !open ? "animate-whatsapp-bounce" : ""}`}
        style={{
          background: open
            ? "linear-gradient(135deg, #374151, #1f2937)"
            : "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          boxShadow: open
            ? "0 4px 20px rgba(0,0,0,0.35)"
            : "0 4px 20px rgba(37,211,102,0.5)",
        }}>
        {/* Red notification dot */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-lg ring-2 ring-[#25D366]">
            1
          </span>
        )}
        {/* Icon toggle */}
        <span className="transition-all duration-300" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          {open ? <X size={22} /> : <MessageCircle size={24} />}
        </span>
      </button>
    </div>
  );
}
