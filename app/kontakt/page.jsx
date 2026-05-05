"use client";

import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { COMPANY, TEAM } from "@/lib/data";

export default function KontaktPage() {
  return (
    <section className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5">
          <span className="inline-block w-6 h-px bg-cyan-700" />
          Kontakt
        </p>
        <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.98] text-petrol max-w-5xl">
          Sprechen Sie
          <br />
          mit uns.
        </h1>
        <p className="mt-8 max-w-xl text-lg lg:text-xl text-petrol/70 leading-relaxed">
          Jede Anfrage wird persönlich beantwortet — innerhalb von 24 Stunden,
          auf Deutsch.
        </p>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">

            {/* Direktkontakt */}
            <div className="rounded-2xl border border-petrol/10 bg-pearl-50 p-7 lg:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-6">
                Direktkontakt
              </p>
              <div className="space-y-5">
                <ContactRow
                  icon="mail"
                  label="E-Mail"
                  value={COMPANY.email}
                  href={`mailto:${COMPANY.email}`}
                />
                <ContactRow
                  icon="phone"
                  label="Telefon"
                  value={COMPANY.phone}
                  href={`tel:${COMPANY.phone}`}
                />
                <ContactRow
                  icon="pin"
                  label="Standort"
                  value={COMPANY.location}
                />
              </div>
            </div>

            {/* Team-Karten */}
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-petrol/10 bg-pearl-50 p-7"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-petrol to-petrol-700 flex items-center justify-center shrink-0">
                    <span className="font-display text-lg font-bold text-cyan">
                      {member.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium tracking-tighter-2 text-petrol leading-tight">
                      {member.name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-700 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-petrol/10">
                  <ContactRow
                    icon="mail"
                    label=""
                    value={member.email}
                    href={`mailto:${member.email}`}
                    small
                  />
                  {member.phone && !member.phone.includes("___") && (
                    <ContactRow
                      icon="phone"
                      label=""
                      value={member.phone}
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      small
                    />
                  )}
                </div>
              </div>
            ))}

            {/* Konfigurator-Shortcut */}
            <div className="rounded-2xl border border-cyan/30 bg-cyan/5 p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-700 mb-3 flex items-center gap-2">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-cyan opacity-60 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-cyan-600" />
                </span>
                Schneller Weg
              </p>
              <p className="font-display text-xl font-medium tracking-tighter-2 text-petrol mb-3">
                Speicher direkt konfigurieren.
              </p>
              <p className="text-[14px] text-petrol/70 mb-5">
                Mit dem Konfigurator erhalten Sie ein Angebot noch schneller.
              </p>
              <a
                href="/konfigurator"
                className="inline-flex items-center gap-2 bg-petrol text-pearl px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-petrol-700 transition-all"
              >
                Zum Konfigurator →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href, small = false }) {
  const content = (
    <div className="flex items-center gap-3">
      <Icon
        name={icon}
        className={`${small ? "w-4 h-4" : "w-4 h-4"} text-cyan-700 shrink-0`}
      />
      <div>
        {label && (
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50 mb-0.5">
            {label}
          </p>
        )}
        <p className={`${small ? "text-[13px]" : "text-[14px]"} text-petrol font-medium break-all`}>
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-70 transition-opacity">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}
