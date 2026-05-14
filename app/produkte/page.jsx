"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { CONTAINER_PRODUCTS, LITHIUM_PRODUCTS, TECH_SPECS } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";

export default function ProdukktePage() {
  const { lang } = useLang();
  const isDE = lang === "de";

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5"><span className="inline-block w-6 h-px bg-cyan-700" />{isDE ? "Produkte" : "Products"}</p>
          <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.98] text-petrol max-w-5xl">{isDE ? <>Sodium-Ionen<br /><span className="text-petrol/60">& Lithium-Ionen.</span></> : <>Sodium-Ion<br /><span className="text-petrol/60">& Lithium-Ion.</span></>}</h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-petrol/70 leading-relaxed">{isDE ? "Zwei Technologiefamilien — schlüsselfertig geliefert, betreut aus Deutschland." : "Two technology families — delivered turnkey, supported from Germany."}</p>
        </div>
      </section>

      {/* Sodium-Ion */}
      <section className="py-16 lg:py-20 border-t border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-700 mb-2 flex items-center gap-2"><span className="inline-block w-4 h-px bg-cyan-700" />NES — Sodium-Ion</p>
              <h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tighter-2 text-petrol">{isDE ? "Sodium-Ionen Container" : "Sodium-Ion Containers"}</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CONTAINER_PRODUCTS.map((p, i) => (
              <motion.article key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className={`rounded-2xl border bg-pearl-50 overflow-hidden ${p.featured ? "border-cyan/40 shadow-xl shadow-cyan/10" : "border-petrol/10 hover:border-petrol/30"} transition-all`}>
                {p.featured && <div className="bg-cyan text-petrol text-center py-2 text-[11px] font-mono uppercase tracking-[0.2em] font-semibold">★ {isDE ? "Empfohlen" : "Recommended"}</div>}
                <div className="bg-petrol p-6">
                  <p className="font-mono text-[10px] text-cyan mb-2">{p.footprint}</p>
                  <p className="font-display text-5xl font-bold text-pearl tabular tracking-tighter-2">{p.capacity}<span className="text-cyan text-2xl ml-1">{p.capacityUnit}</span></p>
                  <p className="text-pearl/60 text-sm mt-1">{p.power} kW</p>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-medium tracking-tighter-2 text-petrol mb-1">{p.name}</h3>
                  <p className="text-[14px] text-petrol/60 mb-5">{isDE ? p.application : p.applicationEn}</p>
                  <div className="space-y-2 pt-4 border-t border-petrol/10">
                    <Row label={isDE ? "Zellen" : "Cells"} value={p.cellType} />
                    <Row label={isDE ? "Lebensdauer" : "Lifetime"} value={`> ${p.cycles.toLocaleString("de-DE")} ${isDE ? "Zyklen" : "cycles"}`} />
                    <Row label={isDE ? "Lieferzeit" : "Delivery"} value={`${p.deliveryWeeks} ${isDE ? "Wochen" : "weeks"}`} />
                  </div>
                  <Link href={`/konfigurator?model=${p.id}`} className="mt-5 inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-full bg-petrol hover:bg-petrol-700 text-pearl text-[14px] font-medium transition-all">
                    {isDE ? "Konfigurieren" : "Configure"}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-petrol/10 border border-petrol/10 rounded-2xl overflow-hidden">
            {[
              { label: isDE ? "Lebensdauer" : "Lifetime", value: `> ${TECH_SPECS.cycles.toLocaleString("de-DE")}`, unit: isDE ? "Zyklen" : "cycles" },
              { label: "LCOS", value: `< ${TECH_SPECS.lcos}`, unit: "€/kWh" },
              { label: isDE ? "Energiedichte" : "Energy density", value: `> ${TECH_SPECS.energyDensity}`, unit: "Wh/kg" },
              { label: isDE ? "Betriebstemperatur" : "Operating temp.", value: "−40 bis +80", unit: "°C" },
            ].map((s) => (
              <div key={s.label} className="bg-pearl-50 p-6 lg:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-3">{s.label}</p>
                <p className="font-display text-3xl lg:text-4xl font-medium tracking-tightest text-petrol tabular leading-none">{s.value}<span className="text-cyan-700 text-lg ml-1">{s.unit}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lithium-Ion */}
      <section id="lithium" className="py-16 lg:py-20 bg-pearl-100 border-y border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-700 mb-2 flex items-center gap-2"><span className="inline-block w-4 h-px bg-cyan-700" />Lisiner — Lithium-Ion</p>
              <h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tighter-2 text-petrol">{isDE ? "Lithium-Ionen Systeme" : "Lithium-Ion Systems"}</h2>
            </div>
            <a href="https://www.lisiner.com/en/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-[13px] font-mono text-petrol/50 hover:text-petrol transition-colors">
              lisiner.com ↗
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {LITHIUM_PRODUCTS.map((p, i) => (
              <motion.article key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className={`rounded-2xl border bg-pearl-50 overflow-hidden ${p.featured ? "border-cyan/40 shadow-xl shadow-cyan/10" : "border-petrol/10 hover:border-petrol/30"} transition-all`}>
                {p.featured && <div className="bg-cyan text-petrol text-center py-2 text-[11px] font-mono uppercase tracking-[0.2em] font-semibold">★ {isDE ? "Empfohlen" : "Recommended"}</div>}
                <div className="bg-petrol-700 p-6">
                  <p className="font-mono text-[10px] text-cyan mb-2">{p.cellType}</p>
                  <h3 className="font-display text-2xl font-medium tracking-tighter-2 text-pearl">{p.name}</h3>
                  <p className="text-pearl/60 text-sm mt-1">{p.footprint}</p>
                </div>
                <div className="p-6">
                  <p className="text-[14px] text-petrol/60 mb-5">{isDE ? p.application : p.applicationEn}</p>
                  <ul className="space-y-2 pt-4 border-t border-petrol/10">
                    {(isDE ? p.features : p.featuresEn).map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[13.5px] text-petrol">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyan/10 text-cyan-700 shrink-0"><Icon name="check" className="w-3 h-3" /></span>{f}
                      </li>
                    ))}
                    <li className="flex items-center gap-2 text-[13px] text-petrol/60 pt-1"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50">{isDE ? "Lieferzeit" : "Delivery"}</span><span className="ml-auto">{p.deliveryWeeks} {isDE ? "Wochen" : "weeks"}</span></li>
                  </ul>
                  <Link href="/konfigurator" className="mt-5 inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-full bg-petrol hover:bg-petrol-700 text-pearl text-[14px] font-medium transition-all">
                    {isDE ? "Anfragen" : "Enquire"}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow={isDE ? "Nicht sicher welche Technologie?" : "Not sure which technology?"} title={isDE ? "Lassen Sie sich beraten." : "Get advice."} description={isDE ? "Im Konfigurator wählen Sie einfach 'Beratung gewünscht' — wir empfehlen die optimale Lösung für Ihren Fall." : "In the configurator simply select 'Consultation desired' — we recommend the optimal solution for your case."} />
    </>
  );
}

function Row({ label, value }) {
  return <div className="flex items-baseline justify-between gap-4"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50">{label}</span><span className="text-[13px] text-petrol font-medium">{value}</span></div>;
}
