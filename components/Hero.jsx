"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ContainerVisual from "./ContainerVisual";
import AnimatedNumber from "./AnimatedNumber";
import { TECH_SPECS } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Background glow */}
      <div
        aria-hidden
        className="absolute top-1/4 -right-32 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0, 212, 216, 0.15), rgba(0, 212, 216, 0) 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 -left-32 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201, 123, 71, 0.08), rgba(201, 123, 71, 0) 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10 lg:mb-14"
        >
          <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-petrol/15 bg-pearl-50/80 backdrop-blur-sm">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-cyan opacity-60 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-cyan-600" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-petrol/80">
              Sodium-Ion Technology · Made in Germany
            </span>
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Headline */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium text-[12vw] sm:text-[10vw] lg:text-[6.5vw] xl:text-[6.5rem] leading-[0.92] tracking-tightest text-petrol"
            >
              Energiespeicher,
              <br />
              die <span className="italic font-normal text-petrol/70">sicher</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-petrol">begeistern.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="absolute inset-x-0 bottom-1 h-3 bg-cyan/40 -z-0"
                  aria-hidden
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-lg lg:text-xl text-petrol/70 leading-relaxed max-w-xl"
            >
              Sodium-Ionen Container für Industrie, Stadtwerke und Energiehandel.
              Schlüsselfertig geliefert — von Planung bis Betrieb.
              <span className="text-petrol font-medium"> Bis zu 20 % günstiger als Lithium-Ionen.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/konfigurator"
                className="group inline-flex items-center gap-3 bg-petrol hover:bg-petrol-700 text-pearl px-7 py-4 rounded-full text-[15px] font-medium transition-all shadow-lg shadow-petrol/20"
              >
                Speicher konfigurieren
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="/produkte"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-[15px] font-medium text-petrol border border-petrol/15 hover:border-petrol/40 hover:bg-pearl-50 transition-all"
              >
                Produkte ansehen
              </Link>
            </motion.div>
          </div>

          {/* Right: Container visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <ContainerVisual className="w-full h-auto" />
          </motion.div>
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 border-t border-petrol/10"
        >
          <Stat label="Lebensdauer" value={TECH_SPECS.cycles} suffix=" Zyklen" prefix="> " />
          <Stat label="LCOS" value={TECH_SPECS.lcos} suffix=" €/kWh" prefix="< " border />
          <Stat label="Marktwachstum" value={TECH_SPECS.marketGrowth} suffix=" % p.a." prefix="> " border />
          <Stat label="Betriebstemperatur" value={`−40 bis +80`} suffix=" °C" prefix="" border noAnimate />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value, prefix = "", suffix = "", border = false, noAnimate = false }) {
  return (
    <div className={`py-6 px-1 ${border ? "lg:border-l lg:border-petrol/10" : ""}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-2">
        {label}
      </p>
      <p className="font-display text-2xl lg:text-3xl font-medium tracking-tighter-2 text-petrol tabular">
        {prefix}
        {noAnimate ? value : <AnimatedNumber value={value} />}
        {suffix}
      </p>
    </div>
  );
}
