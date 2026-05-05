"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { CONTAINER_PRODUCTS, TECH_SPECS } from "@/lib/data";

export default function ProdukktePage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5">
            <span className="inline-block w-6 h-px bg-cyan-700" />
            Produkte
          </p>
          <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.98] text-petrol max-w-5xl">
            Container für
            <br />
            <span className="text-petrol/60">jede Skalierung.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-petrol/70 leading-relaxed">
            Vier Standardgrößen, alle individuell anpassbar. Vom kompakten
            Gewerbespeicher bis zum Multi-MWh-Großspeicher — schlüsselfertig
            geliefert in 16–24 Wochen.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="pb-12 border-t border-petrol/10 pt-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {CONTAINER_PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Specs strip */}
      <section className="py-24 lg:py-32 bg-pearl-100 border-y border-petrol/10 mt-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            eyebrow="Technische Daten"
            title="Werte, die für sich sprechen."
            description="Alle NES Container basieren auf der gleichen leistungsstarken Sodium-Ionen-Zelltechnologie."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-petrol/10 border border-petrol/10 rounded-2xl overflow-hidden">
            <SpecCard
              eyebrow="Lebensdauer"
              value={`> ${TECH_SPECS.cycles.toLocaleString("de-DE")}`}
              unit="Zyklen"
              caption="Bei 80 % Restkapazität"
            />
            <SpecCard
              eyebrow="Energiedichte"
              value={`> ${TECH_SPECS.energyDensity}`}
              unit="Wh/kg"
              caption="Auf Zellebene"
              border
            />
            <SpecCard
              eyebrow="LCOS"
              value={`< ${TECH_SPECS.lcos}`}
              unit="€/kWh"
              caption="Stromgestehungskosten"
              border
            />
            <SpecCard
              eyebrow="Betriebstemperatur"
              value="−40 bis +80"
              unit="°C"
              caption="Erweiterte Bandbreite"
              border
            />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Im Lieferumfang"
                title="Alles drin. Plug & Play."
              />
            </div>
            <div className="lg:col-span-7 lg:pt-3">
              <ul className="divide-y divide-petrol/10 border-y border-petrol/10">
                {[
                  "Sodium-Ionen Zellpacks (zertifiziert)",
                  "Battery Management System (BMS)",
                  "Wechselrichter & Power Conversion System",
                  "Klimatisierung mit Mehrkreis-Flüssigkeitskühlung",
                  "IP65-Schutz · kondensationsfrei",
                  "Brandschutz- und Sicherheitssysteme",
                  "Monitoring-Software & Fernüberwachung",
                  "Komplette Engineering-, Bau- und Inbetriebnahmeleistung (EPC)",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="flex items-center gap-4 py-4"
                  >
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-cyan/10 text-cyan-700 shrink-0">
                      <Icon name="check" className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[15px] text-petrol">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Maßgeschneidert für Sie"
        title="Welcher Container passt zu Ihnen?"
        description="Beantworten Sie vier kurze Fragen — der Konfigurator schlägt Ihnen den passenden Container vor."
      />
    </>
  );
}

function SpecCard({ eyebrow, value, unit, caption, border = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-pearl-50 p-7 lg:p-9"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-4">
        {eyebrow}
      </p>
      <p className="font-display text-4xl lg:text-5xl font-medium tracking-tightest text-petrol tabular leading-[0.95]">
        {value}
        <span className="text-cyan-700 text-xl ml-1.5 font-normal">{unit}</span>
      </p>
      <p className="font-mono text-[10px] text-petrol/50 mt-3">{caption}</p>
    </motion.div>
  );
}
