"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";
export default function AnimatedNumber({ value, prefix = "", suffix = "", duration = 1.6, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => v.toFixed(decimals));
  const [display, setDisplay] = useState("0");
  useEffect(() => { const u = rounded.on("change", (v) => setDisplay(v)); return () => u(); }, [rounded]);
  useEffect(() => {
    if (inView) { const c = animate(motionValue, value, { duration, ease: [0.16, 1, 0.3, 1] }); return () => c.stop(); }
  }, [inView, value, duration, motionValue]);
  return <span ref={ref} className="tabular">{prefix}{display}{suffix}</span>;
}
