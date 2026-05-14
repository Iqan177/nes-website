"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({ lang: "de", toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("de");
  useEffect(() => {
    const saved = localStorage.getItem("nes-lang");
    if (saved === "en" || saved === "de") setLang(saved);
  }, []);
  function toggle() {
    const next = lang === "de" ? "en" : "de";
    setLang(next);
    localStorage.setItem("nes-lang", next);
  }
  return <LanguageContext.Provider value={{ lang, toggle }}>{children}</LanguageContext.Provider>;
}

export function useLang() { return useContext(LanguageContext); }
export function t(de, en, lang) { return lang === "en" && en ? en : de; }
