"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Curated Unsplash photos for energy storage & container topics
const PHOTOS = {
  // Large-scale battery energy storage park / outdoor containers
  batteryPark: {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80&auto=format&fit=crop",
    alt: "Großes Batteriespeicher-Feld / Large-scale battery energy storage park",
    credit: "Unsplash",
  },
  // Solar + storage / renewable energy installation
  solarStorage: {
    src: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1600&q=80&auto=format&fit=crop",
    alt: "Solar- und Energiespeicher-Anlage / Solar and energy storage installation",
    credit: "Unsplash",
  },
  // Industrial power infrastructure / grid connection
  powerGrid: {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80&auto=format&fit=crop",
    alt: "Energieinfrastruktur / Power infrastructure",
    credit: "Unsplash",
  },
  // Industrial container facility
  containerFacility: {
    src: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=1600&q=80&auto=format&fit=crop",
    alt: "Industrielle Container-Anlage / Industrial container facility",
    credit: "Unsplash",
  },
  // Battery technology / cells close-up
  batteryCells: {
    src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80&auto=format&fit=crop",
    alt: "Batteriezellen-Technologie / Battery cell technology",
    credit: "Unsplash",
  },
  // Wind & energy / renewables
  windEnergy: {
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80&auto=format&fit=crop",
    alt: "Erneuerbare Energie / Renewable energy",
    credit: "Unsplash",
  },
};

export default function BatteryParkImage({
  variant = "batteryPark",
  className = "",
  priority = false,
  overlay = true,
  rounded = true,
}) {
  const photo = PHOTOS[variant] || PHOTOS.batteryPark;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative overflow-hidden ${rounded ? "rounded-2xl" : ""} ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 700px"
      />
      {/* Subtle overlay for readability */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-petrol/40 via-transparent to-transparent" />
      )}
    </motion.div>
  );
}

// Inline image banner with title overlay
export function ImageBanner({ variant = "batteryPark", title, subtitle, height = "h-72 lg:h-96" }) {
  const photo = PHOTOS[variant] || PHOTOS.batteryPark;
  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-2xl`}>
      <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-petrol/80 via-petrol/20 to-transparent" />
      {(title || subtitle) && (
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          {subtitle && <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan mb-2">{subtitle}</p>}
          {title && <h3 className="font-display text-2xl lg:text-4xl font-medium tracking-tighter-2 text-pearl leading-tight">{title}</h3>}
        </div>
      )}
    </div>
  );
}

// Three-image grid
export function ImageGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        { variant: "batteryPark", title: "Großspeicher-Anlage" },
        { variant: "solarStorage", title: "Solar & Speicher" },
        { variant: "powerGrid", title: "Netzinfrastruktur" },
      ].map((item) => (
        <div key={item.variant} className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={PHOTOS[item.variant].src}
            alt={PHOTOS[item.variant].alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-petrol/70 via-transparent to-transparent" />
          <p className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.15em] text-pearl/80">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}
