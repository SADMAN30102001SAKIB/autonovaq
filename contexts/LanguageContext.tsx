"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type Language = "bn" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (bn: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("bn");

  const toggleLanguage = useCallback(() => {
    setLang(prev => (prev === "bn" ? "en" : "bn"));
  }, []);

  const t = useCallback(
    (bn: string, en: string) => (lang === "bn" ? bn : en),
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
