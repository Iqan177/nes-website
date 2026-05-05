"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, LabelList } from "recharts";

// Comparison data based on facts from the NES SIB deck
const COMPARISON_DATA = [
  { metric: "LCOS (€/kWh)", sodium: 90, lithium: 113, lower_is_better: true },
  { metric: "Lebensdauer (Zyklen)", sodium: 6500, lithium: 4000, lower_is_better: false },
  { metric: "Energiedichte (Wh/kg)", sodium: 170, lithium: 230, lower_is_better: false },
];

export default function ComparisonChart() {
  return (
    <div className="space-y-8">
      {COMPARISON_DATA.map((row) => (
        <CompareRow key={row.metric} {...row} />
      ))}
      <p className="font-mono text-[10px] text-petrol/40 pt-3 border-t border-petrol/10">
        Vergleichswerte basierend auf NES Sodium-Ion Spezifikationen vs. typischen LiB-Werten · Stand: 2025
      </p>
    </div>
  );
}

function CompareRow({ metric, sodium, lithium, lower_is_better }) {
  const max = Math.max(sodium, lithium);
  const sodiumWidth = (sodium / max) * 100;
  const lithiumWidth = (lithium / max) * 100;
  const sodiumWins = lower_is_better ? sodium < lithium : sodium > lithium;

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-petrol/60 mb-3">
        {metric}
      </p>

      {/* Sodium bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[13px] font-medium text-petrol flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan" />
            NES Sodium-Ion
          </span>
          <span className="font-mono text-[13px] tabular text-petrol font-semibold">
            {sodium.toLocaleString("de-DE")}
            {sodiumWins && <span className="ml-2 text-cyan-700 text-[10px] uppercase">★ Besser</span>}
          </span>
        </div>
        <div className="h-2 rounded-full bg-petrol/5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-600 to-cyan rounded-full transition-all duration-1000"
            style={{ width: `${sodiumWidth}%` }}
          />
        </div>
      </div>

      {/* Lithium bar */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[13px] text-petrol/60 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-petrol/30" />
            Lithium-Ion (Referenz)
          </span>
          <span className="font-mono text-[13px] tabular text-petrol/60">
            {lithium.toLocaleString("de-DE")}
          </span>
        </div>
        <div className="h-2 rounded-full bg-petrol/5 overflow-hidden">
          <div
            className="h-full bg-petrol/25 rounded-full transition-all duration-1000"
            style={{ width: `${lithiumWidth}%` }}
          />
        </div>
      </div>
    </div>
  );
}
