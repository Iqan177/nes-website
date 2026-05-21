"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { COMPANY } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import { ImageBanner } from "@/components/BatteryParkImage";

export default function UeberUnsPage() {
  const { lang } = useLang();
  const isDE = lang === "de";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5">
            <span className="inline-block w-6 h-px bg-cyan-700" />
            {isDE ? "Über uns" : "About us"}
          </p>
          <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.98] text-petrol max-w-5xl">
            {isDE
              ? <> Wir liefern<br /><span className="text-petrol/60">Energiezukunft.</span></>
              : <>We deliver<br /><span className="text-petrol/60">energy future.</span></>}
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-petrol/70 leading-relaxed">
            {isDE
              ? "Next Energy Solution vertreibt Sodium-Ionen und Lithium-Ionen Batteriespeicher — schlüsselfertig, mit After Sales & Kundenbetreuung direkt aus Deutschland."
              : "Next Energy Solution supplies sodium-ion and lithium-ion battery storage — turnkey, with after sales & customer support directly from Germany."}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 border-t border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={isDE ? "Unsere Mission" : "Our mission"}
                title={isDE ? "Sichere Speicher. Für alle." : "Safe storage. For everyone."}
              />
            </div>
            <div className="lg:col-span-7 lg:pt-3 space-y-5 text-lg text-petrol/80 leading-relaxed">
              <p>
                {isDE
                  ? "NES bietet zwei Technologiefamilien: Sodium-Ionen für zukunftssichere, rohstoffunabhängige Anwendungen und Lithium-Ionen für bewährte Hochleistungsanwendungen."
                  : "NES offers two technology families: sodium-ion for future-proof, raw material-independent applications and lithium-ion for proven high-performance applications."}
              </p>
              <p className="text-petrol font-medium">
                {isDE
                  ? "Maßgeschneidert. Schlüsselfertig. Betreut aus Deutschland."
                  : "Customised. Turnkey. Supported from Germany."}
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
                eyebrow={isDE ? "Unser Standort" : "Our location"}
                title="Nordhorn, Niedersachsen."
                description={isDE
                  ? "Nordwestdeutschland — ideal für den deutschlandweiten Service."
                  : "North-west Germany — ideal for nationwide service."}
              />
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-petrol/10 bg-petrol overflow-hidden aspect-[4/3]">
                <MapSvg />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bild */}
      <section className="py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ImageBanner
            variant="containerFacility"
            title={isDE ? "Schlüsselfertig. Von A bis Z." : "Turnkey. From A to Z."}
            subtitle="Next Energy Solution"
            height="h-64 lg:h-80"
          />
        </div>
      </section>

      <CTASection
        eyebrow={isDE ? "Sprechen Sie uns an" : "Get in touch"}
        title={isDE ? "Lernen Sie NES kennen." : "Get to know NES."}
        description={isDE ? "Wir freuen uns auf jede Anfrage." : "We look forward to every enquiry."}
      />
    </>
  );
}

function MapSvg() {
  return (
    <svg viewBox="0 0 600 450" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="mg" cx="42%" cy="35%" r="40%">
          <stop offset="0%" stopColor="rgba(0,212,216,0.25)" />
          <stop offset="100%" stopColor="rgba(0,212,216,0)" />
        </radialGradient>
      </defs>
      <rect width="600" height="450" fill="#0A2540" />
      <rect width="600" height="450" fill="url(#mg)" />
      <path
        d="M 250 60 L 300 50 L 360 70 L 390 90 L 400 130 L 420 140 L 430 170 L 410 200 L 430 230 L 420 260 L 400 280 L 380 310 L 350 340 L 310 350 L 280 360 L 250 350 L 220 330 L 200 300 L 180 280 L 170 250 L 180 220 L 160 190 L 170 160 L 190 140 L 200 110 L 220 80 Z"
        fill="rgba(10,37,64,0.5)" stroke="rgba(0,212,216,0.3)" strokeWidth="1.5"
      />
      <g transform="translate(215,155)">
        <circle r="18" fill="rgba(0,212,216,0.2)" />
        <circle r="8" fill="#00D4D8" />
        <circle r="4" fill="#0A2540" />
        <circle r="18">
          <animate attributeName="r" values="18;30;18" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
      <text x="240" y="160" fill="#00D4D8" fontFamily="Geist Mono,monospace" fontSize="11" letterSpacing="1">Nordhorn</text>
      {[...Array(8)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 56} x2="600" y2={i * 56} stroke="rgba(0,212,216,0.05)" strokeWidth="1" />
      ))}
      {[...Array(10)].map((_, i) => (
        <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="450" stroke="rgba(0,212,216,0.05)" strokeWidth="1" />
      ))}
    </svg>
  );
}
