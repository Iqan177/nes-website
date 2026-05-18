"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import MarketGrowthChart from "@/components/MarketGrowthChart";
import AnimatedNumber from "@/components/AnimatedNumber";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { SODIUM_ADVANTAGES, LITHIUM_ADVANTAGES, TECH_SPECS } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";

export default function TechnologiePage() {
  const { lang } = useLang();
  const isDE = lang === "de";

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5"><span className="inline-block w-6 h-px bg-cyan-700" />{isDE ? "Technologie" : "Technology"}</p>
          <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.98] text-petrol max-w-5xl">{isDE ? <>Sodium-Ionen &<br /><span className="text-petrol/60">Lithium-Ionen.</span></> : <>Sodium-Ion &<br /><span className="text-petrol/60">Lithium-Ion.</span></>}</h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-petrol/70 leading-relaxed">{isDE ? "Jede Technologie hat ihre Stärken. NES bietet beide — damit Sie die für Ihre Anforderung optimale Lösung erhalten." : "Each technology has its strengths. NES offers both — so you get the optimal solution for your requirements."}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: isDE ? "Sodium: Lebensdauer" : "Sodium: lifetime", value: TECH_SPECS.cycles, prefix: "> ", suffix: "" },
              { label: "Sodium: LCOS", value: TECH_SPECS.lcos, prefix: "< ", suffix: " €/kWh" },
              { label: isDE ? "Sodium: Kostenersparnis" : "Sodium: cost savings", value: TECH_SPECS.costSavings, prefix: "", suffix: " %" },
              { label: isDE ? "Betriebstemperatur" : "Operating temp.", value: "−40–+80", noAnimate: true, suffix: " °C" },
            ].map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-3">{s.label}</p>
                <p className="font-display text-3xl lg:text-4xl font-medium tracking-tightest text-petrol tabular leading-none">{s.prefix}{s.noAnimate ? s.value : <AnimatedNumber value={s.value} />}{s.suffix}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sodium advantages */}
      <section className="py-24 lg:py-32 bg-pearl-100 border-y border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-3 h-3 rounded-full bg-petrol" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-petrol/60">NES — Sodium-Ion</p>
          </div>
          <SectionHeader eyebrow="" title={isDE ? "Vorteile: Sodium-Ionen" : "Advantages: Sodium-ion"} description={isDE ? "Sodium-Ionen-Technologie ist die zukunftssichere Alternative für stationäre Großspeicher." : "Sodium-ion technology is the future-proof alternative for large stationary storage."} />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-petrol/10 border border-petrol/10 rounded-2xl overflow-hidden">
            {SODIUM_ADVANTAGES.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.06 }} className="bg-pearl-50 p-8 lg:p-10">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 text-cyan-700 mb-5"><Icon name={a.icon} className="w-6 h-6" /></span>
                <h3 className="font-display text-2xl font-medium tracking-tighter-2 text-petrol mb-3">{isDE ? a.title : a.titleEn}</h3>
                <p className="text-[14.5px] text-petrol/70 leading-relaxed">{isDE ? a.description : a.descriptionEn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lithium advantages */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-3 h-3 rounded-full bg-cyan-600" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700">Lithium-Ion</p>
          </div>
          <SectionHeader eyebrow="" title={isDE ? "Vorteile: Lithium-Ionen (LFP)" : "Advantages: Lithium-ion (LFP)"} description={isDE ? "Bewährte LFP-Technologie — für Anwendungen, die auf hohe Energiedichte und etablierte Infrastruktur setzen." : "Proven LFP technology — for applications relying on high energy density and established infrastructure."} />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-petrol/10 border border-petrol/10 rounded-2xl overflow-hidden">
            {LITHIUM_ADVANTAGES.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.06 }} className="bg-pearl-50 p-8 lg:p-10">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 text-cyan-700 mb-5"><Icon name={a.icon} className="w-6 h-6" /></span>
                <h3 className="font-display text-2xl font-medium tracking-tighter-2 text-petrol mb-3">{isDE ? a.title : a.titleEn}</h3>
                <p className="text-[14.5px] text-petrol/70 leading-relaxed">{isDE ? a.description : a.descriptionEn}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-petrol/40">{isDE ? "Lithium-Ionen Produkte werden geliefert." : "Lithium-ion products are delivered."}</p>
        </div>
      </section>

      {/* Market growth */}
      <section className="py-24 lg:py-32 bg-pearl-100 border-y border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5"><span className="inline-block w-6 h-px bg-cyan-700" />{isDE ? "Marktwachstum" : "Market growth"}</p>
              <p className="font-display font-medium text-[14vw] sm:text-[10vw] lg:text-[10rem] leading-[0.85] tracking-tightest text-petrol">
                <span className="text-petrol/40">&gt;</span><AnimatedNumber value={TECH_SPECS.marketGrowth} /><span className="text-cyan-700">%</span>
              </p>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-petrol/50 mt-3">CAGR · {isDE ? "Energiespeichermarkt" : "Energy storage market"}</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="lg:col-span-7 rounded-2xl border border-petrol/10 bg-pearl-50 p-7 lg:p-9">
              <MarketGrowthChart />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection eyebrow={isDE ? "Welche Technologie passt?" : "Which technology fits?"} title={isDE ? "Jetzt konfigurieren & beraten lassen." : "Configure now & get advice."} description={isDE ? "Im Konfigurator wählen Sie Technologie, Kapazität und Zeitrahmen — wir melden uns mit dem passenden Angebot." : "In the configurator you select technology, capacity and timeline — we will get back to you with the right offer."} />
    </>
  );
}
