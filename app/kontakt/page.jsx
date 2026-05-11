"use client";

import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { COMPANY, TEAM } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";

export default function KontaktPage() {
  const { lang } = useLang();
  const isDE = lang === "de";

  return (
    <section className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5">
          <span className="inline-block w-6 h-px bg-cyan-700" />
          {isDE ? "Kontakt" : "Contact"}
        </p>
        <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.98] text-petrol max-w-5xl">
          {isDE ? <>Sprechen Sie<br />mit uns.</> : <>Get in<br />touch.</>}
        </h1>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            {/* Direktkontakt */}
            <div className="rounded-2xl border border-petrol/10 bg-pearl-50 p-7 lg:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-6">
                {isDE ? "Direktkontakt" : "Direct contact"}
              </p>
              <div className="space-y-5">
                <ContactRow icon="mail" label="E-Mail" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
                <ContactRow icon="pin" label={isDE ? "Standort" : "Location"} value={COMPANY.location} />
              </div>
            </div>

            {/* Team */}
            <div className="rounded-2xl border border-petrol/10 bg-pearl-50 p-7 lg:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-5">
                {isDE ? "Unser Team" : "Our Team"}
              </p>
              <div className="space-y-4">
                {TEAM.map((member) => (
                  <div key={member.name} className="flex items-start gap-3 py-4 border-b border-petrol/10 last:border-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-petrol to-petrol-700 flex items-center justify-center shrink-0">
                      <span className="font-display text-sm font-bold text-cyan">
                        {member.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-base font-medium tracking-tighter-2 text-petrol leading-tight">{member.name}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-700 mt-0.5">{member.role}</p>
                      <div className="mt-2 space-y-1">
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-[12px] text-petrol/60 hover:text-petrol transition-colors">
                            <Icon name="mail" className="w-3.5 h-3.5 text-cyan-700" />{member.email}
                          </a>
                        )}
                        {member.phone && (
                          <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-[12px] text-petrol/60 hover:text-petrol transition-colors">
                            <Icon name="phone" className="w-3.5 h-3.5 text-cyan-700" />{member.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Konfigurator-Shortcut */}
            <div className="rounded-2xl border border-cyan/30 bg-cyan/5 p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-700 mb-3 flex items-center gap-2">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-cyan opacity-60 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-cyan-600" />
                </span>
                {isDE ? "Schneller Weg" : "Quick way"}
              </p>
              <p className="font-display text-xl font-medium tracking-tighter-2 text-petrol mb-3">
                {isDE ? "Speicher direkt konfigurieren." : "Configure storage directly."}
              </p>
              <a href="/konfigurator"
                className="inline-flex items-center gap-2 bg-petrol text-pearl px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-petrol-700 transition-all">
                {isDE ? "Zum Konfigurator →" : "To configurator →"}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-3">
      <Icon name={icon} className="w-4 h-4 text-cyan-700 shrink-0" />
      <div>
        {label && <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50 mb-0.5">{label}</p>}
        <p className="text-[14px] text-petrol font-medium break-all">{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href} className="block hover:opacity-70 transition-opacity">{content}</a>;
  return <div>{content}</div>;
}
