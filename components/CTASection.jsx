"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function CTASection({ eyebrow, title, description, primaryHref = "/konfigurator", primaryLabel, secondaryHref = "/kontakt", secondaryLabel }) {
  const { lang } = useLang();
  const isDE = lang === "de";
  const pLabel = primaryLabel || (isDE ? "Jetzt konfigurieren" : "Configure now");
  const sLabel = secondaryLabel || (isDE ? "Direkt anfragen" : "Get in touch");

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-petrol via-petrol-700 to-petrol-800 text-pearl p-10 lg:p-20 overflow-hidden">
          <div aria-hidden className="absolute -top-1/2 -right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(closest-side, rgba(0,212,216,0.25), rgba(0,212,216,0) 70%)", filter: "blur(40px)" }} />
          <div className="relative grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              {eyebrow && (
                <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                  className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan flex items-center gap-2.5 mb-5">
                  <span className="inline-block w-6 h-px bg-cyan" />{eyebrow}
                </motion.p>
              )}
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="font-display font-medium text-4xl md:text-5xl lg:text-6xl tracking-tighter-2 leading-[1.02]">{title}</motion.h2>
              {description && (
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}
                  className="mt-5 text-base lg:text-lg text-pearl/70 max-w-xl leading-relaxed">{description}</motion.p>
              )}
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <Link href={primaryHref} className="group inline-flex items-center justify-between gap-3 bg-cyan hover:bg-cyan-400 text-petrol px-6 py-4 rounded-full text-[15px] font-semibold transition-all w-full lg:w-auto shadow-lg shadow-cyan/20">
                {pLabel}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href={secondaryHref} className="inline-flex items-center justify-between gap-3 px-6 py-4 rounded-full text-[15px] text-pearl border border-pearl/20 hover:border-pearl/50 transition-all w-full lg:w-auto">
                {sLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
