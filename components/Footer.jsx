import Link from "next/link";
import { COMPANY, NAV_LINKS, CERTIFICATIONS } from "@/lib/data";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-petrol/10 bg-pearl-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* Big wordmark */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-[18vw] lg:text-[14rem] leading-[0.85] tracking-tightest text-petrol/8 select-none">
            {COMPANY.name}.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8 pb-12 border-b border-petrol/10">
          <div className="col-span-2 lg:col-span-5">
            <p className="font-display text-2xl lg:text-3xl tracking-tighter-2 text-petrol leading-tight max-w-md mb-6">
              Sodium-Ionen Batteriespeicher.
              <br />
              <span className="text-petrol/60">Made in Germany.</span>
            </p>
            <div className="flex items-center gap-3 text-sm text-petrol/70">
              <Icon name="pin" className="w-4 h-4" />
              <span>{COMPANY.location}</span>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 lg:col-start-7">
            <FooterColumn
              title="Navigation"
              items={NAV_LINKS.slice(1).map((l) => ({ label: l.label, href: l.href }))}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <FooterColumn
              title="Kunden"
              items={[
                { label: "Konfigurator", href: "/konfigurator" },
                { label: "Anfrage stellen", href: "/kontakt" },
                { label: "Produkte", href: "/produkte" },
              ]}
            />
          </div>

          <div className="col-span-2 lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-4">
              Zertifizierungen
            </p>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert.code}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pearl border border-petrol/15 text-[11px] font-mono text-petrol/80"
                >
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
          <div>© {new Date().getFullYear()} {COMPANY.fullName}. Alle Rechte vorbehalten.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-4">
        {title}
      </p>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[14px] text-petrol/80 hover:text-petrol transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
