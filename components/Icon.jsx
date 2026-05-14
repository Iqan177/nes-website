"use client";
const ICONS = {
  shield: <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" strokeWidth="1.5" fill="none" />,
  leaf: <><path d="M21 3c0 9-7 15-15 15-1.5 0-3-.5-3-.5S3 4 21 3z" strokeWidth="1.5" fill="none" /><path d="M5 19c4-3 7-7 9-13" strokeWidth="1.5" fill="none" /></>,
  euro: <><circle cx="12" cy="12" r="9" strokeWidth="1.5" fill="none" /><path d="M15 9c-1-1-2-1.5-3.5-1.5C9 7.5 7 9.5 7 12s2 4.5 4.5 4.5C13 16.5 14 16 15 15M5 11h6M5 13h6" strokeWidth="1.5" fill="none" strokeLinecap="round" /></>,
  thermometer: <><path d="M14 14V5a2 2 0 10-4 0v9a4 4 0 104 0z" strokeWidth="1.5" fill="none" /><circle cx="12" cy="17" r="1.5" fill="currentColor" /></>,
  loop: <path d="M21 12a9 9 0 11-3-6.7L21 8M21 4v4h-4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  europe: <><circle cx="12" cy="12" r="9" strokeWidth="1.5" fill="none" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" strokeWidth="1.5" fill="none" /></>,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeWidth="1.5" fill="none" strokeLinejoin="round" />,
  cube: <><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" strokeWidth="1.5" fill="none" strokeLinejoin="round" /><path d="M3 7l9 5 9-5M12 12v10" strokeWidth="1.5" fill="none" /></>,
  check: <path d="M5 12l5 5 9-11" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  phone: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.91.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" strokeWidth="1.5" fill="none" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="1.5" fill="none" /><path d="M2 7l10 7 10-7" strokeWidth="1.5" fill="none" /></>,
  pin: <><path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" strokeWidth="1.5" fill="none" /><circle cx="12" cy="9" r="2.5" strokeWidth="1.5" fill="none" /></>,
};
export default function Icon({ name, className = "w-6 h-6", strokeColor = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} stroke={strokeColor} fill="none" strokeLinecap="round">
      {ICONS[name] || null}
    </svg>
  );
}
