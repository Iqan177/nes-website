"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ComparisonChart from "@/components/ComparisonChart";
import MarketGrowthChart from "@/components/MarketGrowthChart";
import AnimatedNumber from "@/components/AnimatedNumber";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { TECH_ADVANTAGES, TECH_SPECS } from "@/lib/data";

export default function TechnologiePage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(closest-side, rgba(0, 212, 216, 0.12), rgba(0, 212, 216, 0) 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5">
            <span className="inline-block w-6 h-px bg-cyan-700" />
            Technologie
          </p>
          <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.98] text-petrol max-w-5xl">
            Sodium-Ionen.
            <br />
            <span className="text-petrol/60">Die sichere Alternative.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-petrol/70 leading-relaxed">
            Unsere Sodium-Ionen Speicher kombinieren das Beste aus mehreren
            Welten: Lithium-Performance bei deutlich niedrigeren Kosten,
            inhärenter Sicherheit und ohne kritische Rohstoffe.
          </p>
        </div>
      </section>

      {/* Big stats */}
      <section className="py-16 lg:py-20 border-t border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <BigStat label="Lebensdauer" value={TECH_SPECS.cycles} prefix="> " suffix="" caption="Vollzyklen" />
            <BigStat label="Energiedichte" value={TECH_SPECS.energyDensity} prefix="> " suffix=" Wh/kg" caption="Auf Zellebene" />
            <BigStat label="Kostenersparnis" value={TECH_SPECS.costSavings} prefix="" suffix=" %" caption="vs. Lithium-Ionen" />
            <BigStat label="LCOS" value={TECH_SPECS.lcos} prefix="< " suffix=" €/kWh" caption="Stromgestehungskosten" />
          </div>
        </div>
      </section>

      {/* Advantages grid */}
      <section className="py-24 lg:py-32 bg-pearl-100 border-y border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            eyebrow="Sechs Argumente"
            title="Warum Sodium-Ionen?"
            description="Sechs Eigenschaften machen Sodium-Ionen-Zellen zur ersten Wahl für stationäre Großspeicher."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-petrol/10 border border-petrol/10 rounded-2xl overflow-hidden">
            {TECH_ADVANTAGES.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-pearl-50 p-8 lg:p-10"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 text-cyan-700 mb-6">
                  <Icon name={adv.icon} className="w-6 h-6" />
                </span>
                <h3 className="font-display text-2xl font-medium tracking-tighter-2 text-petrol mb-3 leading-tight">
                  {adv.title}
                </h3>
                <p className="text-[14.5px] text-petrol/70 leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison chart */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Im direkten Vergleich"
                title="Sodium-Ionen vs. Lithium-Ionen."
                description="Die wichtigsten Kennzahlen im direkten Vergleich. Sodium punktet in den entscheidenden Disziplinen für stationäre Speicher."
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 rounded-2xl border border-petrol/10 bg-pearl-50 p-7 lg:p-10"
            >
              <ComparisonChart />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market growth */}
      <section className="py-24 lg:py-32 bg-pearl-100 border-y border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5">
                <span className="inline-block w-6 h-px bg-cyan-700" />
                Marktwachstum
              </p>
              <p className="font-display font-medium text-[14vw] sm:text-[10vw] lg:text-[10rem] leading-[0.85] tracking-tightest text-petrol">
                <span className="text-petrol/40">&gt;</span>
                <AnimatedNumber value={TECH_SPECS.marketGrowth} />
                <span className="text-cyan-700">%</span>
              </p>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-petrol/50 mt-3">
                Jährliches Wachstum · ESS-Markt
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 rounded-2xl border border-petrol/10 bg-pearl-50 p-7 lg:p-9"
            >
              <MarketGrowthChart />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Tiefer einsteigen?"
        title="Wir teilen technische Datenblätter."
        description="Auf Anfrage stellen wir detaillierte Zell-Spezifikationen und Auslegungsdetails zur Verfügung."
        primaryLabel="Datenblatt anfordern"
        primaryHref="/kontakt"
      />
    </>
  );
}

function BigStat({ label, value, prefix = "", suffix = "", caption }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-3">
        {label}
      </p>
      <p className="font-display text-3xl lg:text-5xl font-medium tracking-tightest text-petrol tabular leading-none mb-2">
        {prefix}
        <AnimatedNumber value={value} />
        {suffix}
      </p>
      <p className="font-mono text-[10px] text-petrol/50">{caption}</p>
    </motion.div>
  );
}
