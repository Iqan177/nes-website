"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { TECH_SPECS } from "@/lib/data";

const SERIES = (() => {
  const start = 100;
  const years = 8;
  const cagr = TECH_SPECS.marketGrowth / 100;
  const out = [];
  let v = start;
  for (let i = 0; i < years; i++) {
    out.push({ year: 2025 + i, index: Math.round(v) });
    v = v * (1 + cagr);
  }
  return out;
})();

export default function MarketGrowthChart() {
  return (
    <div className="w-full">
      <div className="flex items-baseline justify-between mb-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50">
          Markt für Energiespeicher
        </p>
        <p className="font-mono text-[11px] text-cyan-700 font-semibold">
          &gt; {TECH_SPECS.marketGrowth} % CAGR
        </p>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={SERIES} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <defs>
              <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D4D8" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#00D4D8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(10,37,64,0.06)" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 11, fill: "#4A4842", fontFamily: "Geist Mono" }}
              axisLine={{ stroke: "rgba(10,37,64,0.1)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#4A4842", fontFamily: "Geist Mono" }}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip
              contentStyle={{
                background: "#FCFAF6",
                border: "1px solid rgba(10,37,64,0.12)",
                borderRadius: 10,
                fontFamily: "Geist Mono",
                fontSize: 12,
              }}
              formatter={(v) => [`Index ${v}`, "Marktgröße"]}
              labelFormatter={(l) => `Jahr ${l}`}
            />
            <Area
              type="monotone"
              dataKey="index"
              stroke="#00D4D8"
              strokeWidth={2.5}
              fill="url(#growthGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="font-mono text-[10px] text-petrol/40 mt-2">
        Indexierte Darstellung (2025 = 100) · Trendlinie auf Basis &gt; {TECH_SPECS.marketGrowth} % CAGR
      </p>
    </div>
  );
}
