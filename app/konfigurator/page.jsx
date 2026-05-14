"use client";
import { motion } from "framer-motion";
import Configurator from "@/components/Configurator";
import Icon from "@/components/Icon";
import { useLang } from "@/lib/LanguageContext";

export default function KonfiguratorPage() {
  const { lang } = useLang();
  const isDE = lang === "de";
  return (
    <section className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5"><span className="inline-block w-6 h-px bg-cyan-700" />{isDE ? "Konfigurator" : "Configurator"}</p>
            <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl tracking-tightest leading-[0.98] text-petrol">{isDE ? <>In 5 Schritten<br />zum Speicher.</> : <>5 steps to<br />your storage.</>}</h1>
            <p className="mt-8 text-lg text-petrol/70 leading-relaxed max-w-md">{isDE ? "Beantworten Sie fünf kurze Fragen. Sie erhalten sofort eine Bestätigungs-E-Mail und wir melden uns persönlich." : "Answer five short questions. You will immediately receive a confirmation email and we will get back to you personally."}</p>
            <div className="mt-10 space-y-4">
              {[
                { icon: "check", text: isDE ? "Kostenlos & unverbindlich" : "Free & non-binding" },
                { icon: "check", text: isDE ? "Bestätigung per E-Mail" : "Confirmation by email" },
                { icon: "check", text: isDE ? "Sodium-Ion & Lithium-Ion" : "Sodium-ion & lithium-ion" },
                { icon: "check", text: isDE ? "Persönliche Beratung" : "Personal advice" },
              ].map((item, i) => (
                <motion.div key={item.text} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 + 0.3 }} className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan/15 text-cyan-700"><Icon name={item.icon} className="w-3.5 h-3.5" /></span>
                  <span className="text-[15px] text-petrol">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7"><Configurator /></div>
        </div>
      </div>
    </section>
  );
}
