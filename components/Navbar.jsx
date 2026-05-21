"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();
  const isDE = lang === "de";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn(); window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-pearl/85 border-b border-petrol/10" : "bg-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-petrol shadow-sm">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M6 18V6h2l8 8V6h2v12h-2l-8-8v8H6z" fill="#00D4D8" /><circle cx="20" cy="6" r="1.5" fill="#00D4D8" /></svg>
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-xl tracking-tightest text-petrol">{COMPANY.name}</span>
            <span className="font-sans text-[9px] text-petrol/50 mt-0.5">Next Energy Solution</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.slice(1, -1).map((link) => (
            <Link key={link.href} href={link.href} className="px-3.5 py-2 text-[13.5px] font-medium text-petrol/70 hover:text-petrol transition-colors rounded-full hover:bg-petrol/5">
              {isDE ? link.label : link.labelEn}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={toggle} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-petrol/15 hover:border-petrol/40 transition-all text-[13px] font-mono font-medium text-petrol/70 hover:text-petrol">
            <span className={isDE ? "text-petrol font-bold" : "text-petrol/40"}>DE</span>
            <span className="text-petrol/20 mx-0.5">|</span>
            <span className={!isDE ? "text-petrol font-bold" : "text-petrol/40"}>EN</span>
          </button>
          <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-petrol text-pearl px-5 py-2.5 rounded-full text-[13.5px] font-medium hover:bg-petrol-700 transition-all">
            {isDE ? "Anfrage stellen" : "Get in touch"}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-petrol/5">
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-petrol transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-petrol transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-pearl-50 border-t border-petrol/10">
            <nav className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.slice(1).map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-petrol border-b border-petrol/10">
                  {isDE ? link.label : link.labelEn}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-4">
                <button onClick={toggle} className="px-3 py-1.5 rounded-full border border-petrol/15 text-[13px] font-mono text-petrol">
                  <span className={isDE ? "font-bold" : "opacity-40"}>DE</span> | <span className={!isDE ? "font-bold" : "opacity-40"}>EN</span>
                </button>
                <Link href="/kontakt" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center bg-petrol text-pearl px-5 py-3 rounded-full text-sm font-medium">
                  {isDE ? "Anfrage stellen" : "Get in touch"}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
