"use client";
import { motion } from "framer-motion";
export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const center = align === "center";
  return (
    <div className={`max-w-3xl ${center ? "text-center mx-auto" : "text-left"}`}>
      {eyebrow && (
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5" style={center ? { justifyContent: "center" } : {}}>
          <span className="inline-block w-6 h-px bg-cyan-700" />{eyebrow}
        </motion.p>
      )}
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter-2 leading-[1.02] text-petrol">
        {title}
      </motion.h2>
      {description && (
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 text-lg lg:text-xl text-petrol/70 max-w-2xl leading-relaxed">
          {description}
        </motion.p>
      )}
    </div>
  );
}
