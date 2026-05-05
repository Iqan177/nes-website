"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import { TECH_ADVANTAGES, SERVICE_STEPS, CONTAINER_PRODUCTS, APPLICATIONS, CERTIFICATIONS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* USP / Marketing claims strip */}
      <section className="border-y border-petrol/10 bg-pearl-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
            {[
              { icon: "shield", text: "Nicht entflammbar" },
              { icon: "leaf", text: "Umweltfreundlich" },
              { icon: "euro", text: "20 % günstiger als LiB" },
              { icon: "europe", text: "Made in Germany" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-center gap-3"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan/15 text-cyan-700">
                  <Icon name={item.icon} className="w-5 h-5" />
                </span>
                <span className="text-[14px] font-medium text-petrol">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sodium / Tech advantages */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Warum Sodium-Ionen"
                title="Die nächste Generation der Energiespeicher."
                description="Unsere Sodium-Ionen-Technologie ist sicher, kostengünstig und umweltfreundlich — entwickelt für die anspruchsvollsten Anwendungen in Industrie, Stadtwerken und Energiehandel."
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-petrol/10 border border-petrol/10 rounded-2xl overflow-hidden">
            {TECH_ADVANTAGES.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-pearl-50 p-7 lg:p-8 hover:bg-pearl transition-colors group"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 text-cyan-700 mb-5 group-hover:bg-cyan/20 transition-colors">
                  <Icon name={adv.icon} className="w-6 h-6" />
                </span>
                <h3 className="font-display text-xl lg:text-2xl font-medium tracking-tighter-2 text-petrol mb-3 leading-tight">
                  {adv.title}
                </h3>
                <p className="text-[14.5px] text-petrol/70 leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/technologie"
              className="group inline-flex items-center gap-3 text-[15px] font-medium text-petrol hover:text-cyan-700 transition-colors"
            >
              <span className="border-b border-petrol/30 group-hover:border-cyan-700 transition-colors">
                Technologie im Detail
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="py-24 lg:py-32 bg-pearl-100 border-y border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14 items-end">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Unsere Container-Reihe"
                title="Schlüsselfertig. Skalierbar. Sofort einsatzbereit."
                description="Vier Standard-Container für jede Größenordnung — von 200 kWh bis in den Multi-MWh-Bereich. Alle individuell anpassbar."
              />
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                href="/produkte"
                className="group inline-flex items-center gap-3 text-[15px] font-medium text-petrol hover:text-cyan-700 transition-colors"
              >
                <span className="border-b border-petrol/30 group-hover:border-cyan-700 transition-colors">
                  Alle Produkte
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {CONTAINER_PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Service / Schlüsselfertig */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            eyebrow="Unser Service"
            title="Eine Lösung. Vier Schritte. Null Komplikation."
            description="Wir begleiten Sie von der ersten Anfrage bis zum laufenden Betrieb — in deutscher Sprache, mit deutscher Servicequalität."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-petrol/10 border border-petrol/10 rounded-2xl overflow-hidden">
            {SERVICE_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-pearl-50 p-7 lg:p-9 relative"
              >
                <p className="font-display text-5xl font-bold text-cyan/30 tabular mb-5">
                  {step.step}
                </p>
                <h3 className="font-display text-xl lg:text-2xl font-medium tracking-tighter-2 text-petrol mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-petrol/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anwendungsfelder */}
      <section className="py-24 lg:py-32 bg-pearl-100 border-y border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            eyebrow="Anwendungsfelder"
            title="Wo unsere Container heute schon Werte schaffen."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {APPLICATIONS.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-xl border border-petrol/10 bg-pearl-50 p-7 group hover:border-cyan/40 hover:bg-pearl transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[10px] tabular text-petrol/40 mt-1.5">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tighter-2 text-petrol mb-2 group-hover:text-cyan-700 transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-[14.5px] text-petrol/70 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip — certifications */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-3 flex items-center gap-2.5">
                <span className="inline-block w-6 h-px bg-cyan-700" />
                Zertifiziert & geprüft
              </p>
              <h3 className="font-display text-3xl font-medium tracking-tighter-2 text-petrol leading-tight">
                Sicherheit, die international anerkannt ist.
              </h3>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.code}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-xl border border-petrol/10 bg-pearl-50 p-5 text-center"
                >
                  <p className="font-display text-xl font-bold text-petrol mb-1">
                    {cert.code}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="In 4 Schritten zum Speicher"
        title="Konfigurieren Sie Ihren NES Container."
        description="Beantworten Sie vier kurze Fragen — wir melden uns mit einem maßgeschneiderten Angebot innerhalb von 24 Stunden."
      />
    </>
  );
}
