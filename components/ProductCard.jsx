"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Icon from "./Icon";

export default function ProductCard({ product, index = 0, compact = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl border bg-pearl-50 transition-all duration-300 ${
        product.featured
          ? "border-cyan/40 shadow-xl shadow-cyan/10"
          : "border-petrol/10 hover:border-petrol/30"
      }`}
    >
      {product.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan text-petrol text-[10px] font-semibold uppercase tracking-wider">
            <Icon name="bolt" className="w-3 h-3" />
            Beliebt
          </span>
        </div>
      )}

      {/* Visual */}
      <div className="relative h-48 bg-gradient-to-br from-petrol to-petrol-800 overflow-hidden">
        <ContainerMini featured={product.featured} />

        {/* Capacity badge */}
        <div className="absolute bottom-4 left-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-pearl/50 mb-1">
            Kapazität
          </p>
          <p className="font-display text-3xl font-bold text-pearl tabular tracking-tighter-2">
            {product.capacity ? product.capacity.toLocaleString("de-DE") : "—"}
            <span className="text-cyan text-lg ml-1">{product.capacityUnit}</span>
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 lg:p-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-700 mb-2">
          {String(index + 1).padStart(2, "0")} · Container-Reihe
        </p>
        <h3 className="font-display text-2xl font-medium tracking-tighter-2 text-petrol mb-2">
          {product.name}
        </h3>
        <p className="text-[14px] text-petrol/60 mb-5">{product.application}</p>

        <div className="space-y-2.5 pt-5 border-t border-petrol/10">
          {product.power && (
            <Row label="Leistung" value={`${product.power} kW`} />
          )}
          <Row label="Footprint" value={product.footprint} />
          <Row label="Zellen" value={product.cellType} />
          <Row label="Lebensdauer" value={`> ${product.cycles.toLocaleString("de-DE")} Zyklen`} />
          <Row label="Lieferzeit" value={`${product.deliveryWeeks} Wochen`} />
        </div>

        {!compact && (
          <Link
            href={`/konfigurator?model=${product.id}`}
            className="mt-6 group/btn inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-full bg-petrol hover:bg-petrol-700 text-pearl text-[14px] font-medium transition-all"
          >
            Konfigurieren
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover/btn:translate-x-0.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>
    </motion.article>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50 shrink-0">
        {label}
      </span>
      <span className="text-[13px] text-petrol font-medium text-right">{value}</span>
    </div>
  );
}

// Compact container illustration for product cards
function ContainerMini({ featured }) {
  return (
    <svg viewBox="0 0 300 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`pcBody-${featured ? "f" : "n"}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B3A5E" />
          <stop offset="100%" stopColor="#0A2540" />
        </linearGradient>
      </defs>

      {/* glow */}
      {featured && (
        <ellipse cx="150" cy="100" rx="200" ry="80" fill="rgba(0, 212, 216, 0.15)" />
      )}

      {/* container */}
      <g transform="translate(60, 60)">
        <rect width="180" height="100" fill={`url(#pcBody-${featured ? "f" : "n"})`} rx="2" />
        {/* corrugations */}
        {[...Array(15)].map((_, i) => (
          <line
            key={i}
            x1={10 + i * 12}
            y1="5"
            x2={10 + i * 12}
            y2="95"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}
        {/* NES branding */}
        <text x="22" y="55" fill="#F7F4EE" fontFamily="Bricolage Grotesque, sans-serif" fontSize="22" fontWeight="700">
          NES
        </text>
        <text x="22" y="68" fill="#00D4D8" fontFamily="Geist Mono, monospace" fontSize="6" letterSpacing="1.5">
          SODIUM-ION
        </text>
        {/* status panel */}
        <rect x="120" y="35" width="50" height="30" fill="rgba(0,0,0,0.3)" rx="2" />
        <circle cx="128" cy="42" r="2" fill="#00D4D8">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="128" cy="50" r="2" fill="#00D4D8" opacity="0.5" />
        <circle cx="128" cy="58" r="2" fill="#C97B47" />
      </g>
    </svg>
  );
}
