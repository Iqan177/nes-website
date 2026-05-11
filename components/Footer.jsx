"use client";

import Link from "next/link";
import { COMPANY, NAV_LINKS, CERTIFICATIONS } from "@/lib/data";
import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { lang } = useLang();
  const isDE = lang === "de";

  return (
    <footer className="relative mt-32 border-t border-petrol/10 bg-pearl-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="mb-16">
          <h2 className="font-display font-bold text-[18vw] lg:text-[14rem] leading-[0.85] tracking-tightest text-petrol/8 select-none">
            {COMPANY.name}.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8 pb-12 border-b border-petrol/10">
          <div className="col-span-2 lg:col-span-5">
            <p className="font-display text-2xl lg:text-3xl tracking-tighter-2 text-petrol leading-tight max-w-md mb-6">
              {isDE ? "Sodium-Ionen Batteriespeicher." : "Sodium-Ion Battery Storage."}
            </p>
            <div className="flex items-center gap-3 text-sm text-petrol/70">
              <Icon name="pin" className="w-4 h-4" />
              <span>{COMPANY.location}</span>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 lg:col-start-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-4">
              {isDE ? "Navigation" : "Navigation"}
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.slice(1).map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[14px] text-petrol/80 hover:text-petrol transition-colors">
                    {isDE ? item.label : item.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-4">
              {isDE ? "Kunden" : "Customers"}
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/konfigurator", de: "Konfigurator", en: "Configurator" },
                { href: "/kontakt", de: "Anfrage stellen", en: "Get in touch" },
                { href: "/flaeche", de: "Fläche vermieten", en: "Lease Land" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14px] text-petrol/80 hover:text-petrol transition-colors">
                    {isDE ? item.de : item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-4">
              {isDE ? "Zertifizierungen" : "Certifications"}
            </p>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((cert) => (
                <span key={cert.code}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pearl border border-petrol/15 text-[11px] font-mono text-petrol/80">
                  {cert.code}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs font-mono text-petrol/50">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-slow" />
            <span>NORDHORN — DEUTSCHLAND</span>
          </div>
          <div>© {new Date().getFullYear()} {COMPANY.fullName}. {isDE ? "Alle Rechte vorbehalten." : "All rights reserved."}</div>
        </div>
      </div>
    </footer>
  );
}
