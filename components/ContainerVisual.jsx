"use client";

import { motion } from "framer-motion";

// Custom SVG illustration of a battery storage container
// Premium technical illustration style
export default function ContainerVisual({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="containerBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B3A5E" />
          <stop offset="100%" stopColor="#0A2540" />
        </linearGradient>
        <linearGradient id="containerTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D4A6A" />
          <stop offset="100%" stopColor="#0A2540" />
        </linearGradient>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(10, 37, 64, 0.08)" />
          <stop offset="100%" stopColor="rgba(10, 37, 64, 0)" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0, 212, 216, 0.3)" />
          <stop offset="100%" stopColor="rgba(0, 212, 216, 0)" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="300" cy="340" rx="220" ry="14" fill="url(#floor)" />

      {/* Glow behind container */}
      <ellipse cx="300" cy="220" rx="280" ry="120" fill="url(#glow)" opacity="0.6" />

      {/* Container body — main shipping container shape */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Side panel */}
        <path
          d="M 100 130 L 500 130 L 510 140 L 510 320 L 500 330 L 100 330 L 90 320 L 90 140 Z"
          fill="url(#containerBody)"
        />
        {/* Top */}
        <path
          d="M 100 130 L 500 130 L 510 140 L 90 140 Z"
          fill="url(#containerTop)"
        />
        {/* Top edge highlight */}
        <line x1="100" y1="130" x2="500" y2="130" stroke="#3D5A7A" strokeWidth="1.5" />

        {/* Corrugated panel lines on container side (signature shipping container detail) */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <line
            key={i}
            x1={120 + i * 30}
            y1="145"
            x2={120 + i * 30}
            y2="320"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        ))}

        {/* Door panel detail (right side) */}
        <rect x="460" y="155" width="35" height="160" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" rx="2" />
        <rect x="465" y="160" width="25" height="150" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

        {/* Bottom rail */}
        <rect x="90" y="320" width="420" height="10" fill="#06182A" />

        {/* NES branding */}
        <text
          x="200"
          y="220"
          fill="#F7F4EE"
          fontFamily="Bricolage Grotesque, sans-serif"
          fontSize="48"
          fontWeight="700"
          letterSpacing="-1"
        >
          NES
        </text>
        <text
          x="200"
          y="245"
          fill="#00D4D8"
          fontFamily="Geist Mono, monospace"
          fontSize="11"
          letterSpacing="2"
        >
          SODIUM-ION ESS
        </text>

        {/* Status indicator panel */}
        <g transform="translate(360, 195)">
          <rect width="100" height="60" fill="rgba(0,0,0,0.3)" rx="3" stroke="rgba(0, 212, 216, 0.3)" strokeWidth="0.5" />
          {/* LED indicators */}
          <circle cx="12" cy="12" r="3" fill="#00D4D8">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="12" cy="24" r="3" fill="#00D4D8" opacity="0.5" />
          <circle cx="12" cy="36" r="3" fill="#C97B47" />
          <circle cx="12" cy="48" r="3" fill="#00D4D8" opacity="0.4" />
          {/* Mini display */}
          <rect x="22" y="8" width="70" height="44" fill="#06182A" rx="2" />
          <text x="28" y="22" fill="#00D4D8" fontFamily="Geist Mono" fontSize="9">SOC</text>
          <text x="28" y="34" fill="#F7F4EE" fontFamily="Geist Mono" fontSize="11" fontWeight="600">87.3 %</text>
          <text x="28" y="46" fill="#00D4D8" fontFamily="Geist Mono" fontSize="7" opacity="0.6">ONLINE</text>
        </g>

        {/* Ventilation grilles */}
        <g opacity="0.4">
          <rect x="115" y="155" width="30" height="3" fill="#06182A" />
          <rect x="115" y="161" width="30" height="3" fill="#06182A" />
          <rect x="115" y="167" width="30" height="3" fill="#06182A" />
        </g>

        {/* Corner reinforcements */}
        <rect x="90" y="130" width="14" height="14" fill="#06182A" />
        <rect x="496" y="130" width="14" height="14" fill="#06182A" />
        <rect x="90" y="316" width="14" height="14" fill="#06182A" />
        <rect x="496" y="316" width="14" height="14" fill="#06182A" />
      </motion.g>

      {/* Floating energy particles */}
      <g>
        {[
          { x: 150, y: 90, delay: 0 },
          { x: 280, y: 70, delay: 0.5 },
          { x: 410, y: 95, delay: 1 },
          { x: 480, y: 75, delay: 1.5 },
        ].map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="2"
            fill="#00D4D8"
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="3s"
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${p.y};${p.y - 30};${p.y - 60}`}
              dur="3s"
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

      {/* Power line from top */}
      <path
        d="M 300 30 L 300 80 L 320 90 L 320 130"
        stroke="#00D4D8"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 4"
        opacity="0.6"
      >
        <animate attributeName="stroke-dashoffset" values="0;-7" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
