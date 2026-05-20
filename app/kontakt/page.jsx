"use client";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { COMPANY } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";

export default function KontaktPage() {
  const { lang } = useLang();
  const isDE = lang === "de";
  return (
    <section className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5">
          <span className="inline-block w-6 h-px bg-cyan-700" />{isDE ? "Kontakt" : "Contact"}
        </p>
        <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.98] text-petrol max-w-5xl">
          {isDE ? <>Sprechen Sie<br />mit uns.</> : <>Get in<br />touch.</>}
        </h1>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            {/* Direktkontakt — nur E-Mail */}
            <div className="rounded-2xl border border-petrol/10 bg-pearl-50 p-7 lg:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-6">
                {isDE ? "Direktkontakt" : "Direct contact"}
              </p>
              <a href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 group">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 text-cyan-700 group-hover:bg-cyan/20 transition-colors">
                  <Icon name="mail" className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50 mb-0.5">E-Mail</p>
                  <p className="text-[15px] text-petrol font-medium group-hover:text-cyan-700 transition-colors">
                    {COMPANY.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Konfigurator shortcut */}
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
              <p className="text-[14px] text-petrol/70 mb-5">
                {isDE
                  ? "Mit dem Konfigurator erhalten Sie ein maßgeschneidertes Angebot."
                  : "With the configurator you receive a customised offer."}
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
