"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { SODIUM_ADVANTAGES, LITHIUM_ADVANTAGES, SERVICE_STEPS, APPLICATIONS, CERTIFICATIONS } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";

export default function HomePage() {
  const { lang } = useLang();
  const isDE = lang === "de";

  return (
    <>
      <Hero />

      {/* Zwei Technologien */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow={isDE ? "Unser Portfolio" : "Our portfolio"} title={isDE ? "Zwei Technologien. Eine Quelle." : "Two technologies. One source."} description={isDE ? "NES liefert Sodium-Ionen-Speicher aus eigenem Haus und Lithium-Ionen-Systeme — für jede Anforderung die passende Lösung." : "NES supplies sodium-ion storage in-house and lithium-ion — the right solution for every requirement."} />

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {/* Sodium */}
            <div className="rounded-2xl border border-petrol/10 bg-pearl-50 overflow-hidden">
              <div className="bg-petrol p-6 lg:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan mb-2">NES — Sodium-Ion</p>
                <h3 className="font-display text-3xl font-medium tracking-tighter-2 text-pearl">Sodium-Ionen Speicher</h3>
              </div>
              <div className="p-6 lg:p-8 grid grid-cols-2 gap-px bg-petrol/10 border-t border-petrol/10">
                {SODIUM_ADVANTAGES.slice(0, 4).map((a, i) => (
                  <div key={i} className="bg-pearl-50 p-4 flex flex-col gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-cyan/10 text-cyan-700"><Icon name={a.icon} className="w-4 h-4" /></span>
                    <p className="font-display text-sm font-medium tracking-tighter-2 text-petrol leading-tight">{isDE ? a.title : a.titleEn}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 pt-4"><Link href="/produkte" className="inline-flex items-center gap-2 text-[14px] font-medium text-petrol hover:text-cyan-700 transition-colors"><span className="border-b border-petrol/30 hover:border-cyan-700">{isDE ? "Sodium-Produkte ansehen" : "View sodium products"}</span> →</Link></div>
            </div>

            {/* Lithium */}
            <div className="rounded-2xl border border-cyan/20 bg-pearl-50 overflow-hidden">
              <div className="bg-petrol-700 p-6 lg:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan mb-2">Lithium-Ion</p>
                <h3 className="font-display text-3xl font-medium tracking-tighter-2 text-pearl">Lithium-Ionen Speicher</h3>
              </div>
              <div className="p-6 lg:p-8 grid grid-cols-2 gap-px bg-petrol/10 border-t border-petrol/10">
                {LITHIUM_ADVANTAGES.slice(0, 4).map((a, i) => (
                  <div key={i} className="bg-pearl-50 p-4 flex flex-col gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-cyan/10 text-cyan-700"><Icon name={a.icon} className="w-4 h-4" /></span>
                    <p className="font-display text-sm font-medium tracking-tighter-2 text-petrol leading-tight">{isDE ? a.title : a.titleEn}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 pt-4"><Link href="/produkte#lithium" className="inline-flex items-center gap-2 text-[14px] font-medium text-petrol hover:text-cyan-700 transition-colors"><span className="border-b border-petrol/30 hover:border-cyan-700">{isDE ? "Lithium-Produkte ansehen" : "View lithium products"}</span> →</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="py-24 lg:py-32 bg-pearl-100 border-y border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow={isDE ? "Unser Service" : "Our service"} title={isDE ? "Schlüsselfertig. Von A bis Z." : "Turnkey. From A to Z."} description={isDE ? "Von der ersten Beratung bis zum laufenden Betrieb — in deutscher Sprache, mit deutscher Servicequalität." : "From initial consultation to ongoing operation — in German, with German service quality."} />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-petrol/10 border border-petrol/10 rounded-2xl overflow-hidden">
            {SERVICE_STEPS.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-pearl-50 p-7 lg:p-9">
                <p className="font-display text-5xl font-bold text-cyan/30 tabular mb-5">{s.step}</p>
                <h3 className="font-display text-xl lg:text-2xl font-medium tracking-tighter-2 text-petrol mb-3">{isDE ? s.title : s.titleEn}</h3>
                <p className="text-[14px] text-petrol/70 leading-relaxed">{isDE ? s.description : s.descriptionEn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anwendungen */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow={isDE ? "Anwendungsfelder" : "Applications"} title={isDE ? "Für jeden Einsatzzweck." : "For every use case."} />
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {APPLICATIONS.map((app, i) => (
              <motion.div key={app.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.06 }} className="rounded-xl border border-petrol/10 bg-pearl-50 p-7 group hover:border-cyan/40 transition-all">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[10px] tabular text-petrol/40 mt-1.5">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tighter-2 text-petrol mb-2 group-hover:text-cyan-700 transition-colors">{isDE ? app.title : app.titleEn}</h3>
                    <p className="text-[14.5px] text-petrol/70 leading-relaxed">{isDE ? app.description : app.descriptionEn}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zertifizierungen */}
      <section className="py-20 bg-pearl-100 border-y border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-3 flex items-center gap-2.5"><span className="inline-block w-6 h-px bg-cyan-700" />{isDE ? "Zertifiziert & geprüft" : "Certified & tested"}</p>
              <h3 className="font-display text-3xl font-medium tracking-tighter-2 text-petrol">{isDE ? "International anerkannte Qualität." : "Internationally recognised quality."}</h3>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div key={cert.code} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="rounded-xl border border-petrol/10 bg-pearl-50 p-5 text-center">
                  <p className="font-display text-xl font-bold text-petrol mb-1">{cert.code}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50">{isDE ? cert.description : cert.descriptionEn}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection eyebrow={isDE ? "Jetzt konfigurieren" : "Configure now"} title={isDE ? "Finden Sie Ihren Speicher." : "Find your storage solution."} description={isDE ? "Sodium-Ionen oder Lithium-Ionen — der Konfigurator führt Sie in 5 Schritten zum passenden Angebot." : "Sodium-ion or lithium-ion — the configurator guides you to the right offer in 5 steps."} />
    </>
  );
}
