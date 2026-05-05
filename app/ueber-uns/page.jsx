"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { COMPANY, TEAM } from "@/lib/data";

export default function UeberUnsPage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5">
            <span className="inline-block w-6 h-px bg-cyan-700" />
            Über uns
          </p>
          <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.98] text-petrol max-w-5xl">
            Wir liefern
            <br />
            <span className="text-petrol/60">Energiezukunft.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-petrol/70 leading-relaxed">
            NES ist ein deutsches Unternehmen mit Sitz in Nordhorn, Niedersachsen.
            Wir vertreiben und liefern maßgeschneiderte Sodium-Ionen
            Batteriespeicher-Container — schlüsselfertig, in deutscher Sprache
            und mit höchster Servicequalität.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 border-t border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Unsere Mission"
                title="Sichere Speicher. Für alle."
              />
            </div>
            <div className="lg:col-span-7 lg:pt-3 space-y-5 text-lg text-petrol/80 leading-relaxed">
              <p>
                Energiespeicher sind der Schlüssel zur Energiewende. Doch
                bisherige Lösungen sind teuer, brandgefährlich oder abhängig
                von kritischen Rohstoffen.
              </p>
              <p>
                NES bietet eine bessere Alternative: Sodium-Ionen-Container,
                die sicher, umweltfreundlich und bis zu 20 % günstiger als
                Lithium-Ionen-Systeme sind — geliefert und betreut in
                Deutschland, auf Deutsch, mit deutschen Servicemaßstäben.
              </p>
              <p className="text-petrol font-medium">
                Maßgeschneidert. Schlüsselfertig. Zuverlässig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standort */}
      <section className="py-24 lg:py-32 bg-pearl-100 border-y border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Unser Standort"
                title="Nordhorn, Niedersachsen."
                description="Im Herzen Nordwestdeutschlands — bestens vernetzt für den deutschlandweiten Vertrieb und Service."
              />
              <div className="mt-8 flex items-center gap-3 text-petrol/70">
                <Icon name="pin" className="w-5 h-5 text-cyan-700" />
                <span className="text-base">{COMPANY.location}</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl border border-petrol/10 bg-petrol overflow-hidden aspect-[4/3]">
                <MapVisual />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            eyebrow="Unser Team"
            title="Menschen hinter NES."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-petrol/10 bg-pearl-50 p-7 lg:p-8"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-petrol to-petrol-700 flex items-center justify-center mb-5">
                  <span className="font-display text-2xl font-bold text-cyan">
                    {member.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-medium tracking-tighter-2 text-petrol mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-700 mb-5">
                  {member.role}
                </p>
                <div className="space-y-2 pt-4 border-t border-petrol/10">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2.5 text-[13px] text-petrol/70 hover:text-petrol transition-colors"
                  >
                    <Icon name="mail" className="w-4 h-4 text-cyan-700" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 text-[13px] text-petrol/70 hover:text-petrol transition-colors"
                  >
                    <Icon name="phone" className="w-4 h-4 text-cyan-700" />
                    {member.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Sprechen Sie uns an"
        title="Lernen Sie NES kennen."
        description="Wir freuen uns auf jede Anfrage — egal ob Großprojekt oder erste Fragen."
      />
    </>
  );
}

function MapVisual() {
  return (
    <svg viewBox="0 0 600 450" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="mapGlow" cx="42%" cy="35%" r="40%">
          <stop offset="0%" stopColor="rgba(0, 212, 216, 0.25)" />
          <stop offset="100%" stopColor="rgba(0, 212, 216, 0)" />
        </radialGradient>
      </defs>
      <rect width="600" height="450" fill="#0A2540" />
      <rect width="600" height="450" fill="url(#mapGlow)" />

      {/* Simplified Germany outline */}
      <path
        d="M 250 60 L 300 50 L 360 70 L 390 90 L 400 130 L 420 140 L 430 170
           L 410 200 L 430 230 L 420 260 L 400 280 L 380 310 L 350 340 L 310 350
           L 280 360 L 250 350 L 220 330 L 200 300 L 180 280 L 170 250 L 180 220
           L 160 190 L 170 160 L 190 140 L 200 110 L 220 80 Z"
        fill="rgba(10, 37, 64, 0.5)"
        stroke="rgba(0, 212, 216, 0.3)"
        strokeWidth="1.5"
      />

      {/* Nordhorn pin */}
      <g transform="translate(215, 155)">
        <circle r="18" fill="rgba(0, 212, 216, 0.2)" />
        <circle r="8" fill="#00D4D8" />
        <circle r="4" fill="#0A2540" />
        <circle r="18">
          <animate attributeName="r" values="18;30;18" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Label */}
      <text x="240" y="160" fill="#00D4D8" fontFamily="Geist Mono, monospace" fontSize="11" letterSpacing="1">
        Nordhorn
      </text>
      <text x="240" y="174" fill="rgba(247,244,238,0.5)" fontFamily="Geist Mono, monospace" fontSize="9">
        Niedersachsen
      </text>

      {/* Grid lines */}
      {[...Array(8)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 56} x2="600" y2={i * 56}
          stroke="rgba(0,212,216,0.05)" strokeWidth="1" />
      ))}
      {[...Array(10)].map((_, i) => (
        <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="450"
          stroke="rgba(0,212,216,0.05)" strokeWidth="1" />
      ))}
    </svg>
  );
}
