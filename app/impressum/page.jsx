"use client";
import { useLang } from "@/lib/LanguageContext";
import { COMPANY } from "@/lib/data";

export default function ImpressumPage() {
  const { lang } = useLang();
  return (
    <section className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-[860px] mx-auto px-6 lg:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5">
          <span className="inline-block w-6 h-px bg-cyan-700" />Rechtliches
        </p>
        <h1 className="font-display font-medium text-5xl md:text-6xl tracking-tightest leading-[0.98] text-petrol mb-16">
          Impressum
        </h1>
        <div className="space-y-12 text-[15px] text-petrol/80 leading-relaxed">
          <Block title="Angaben gemäß § 5 TMG">
            <p className="font-semibold text-petrol">{COMPANY.fullName}</p>
            <p>{COMPANY.address}</p>
            <p>{COMPANY.country}</p>
          </Block>
          <Block title="Handelsregister">
            <p>Registernummer: {COMPANY.handelsregister}</p>
            <p>Registergericht: {COMPANY.amtsgericht}</p>
          </Block>
          <Block title="Kontakt">
            <p>E-Mail: <a href={`mailto:${COMPANY.email}`} className="text-petrol hover:text-cyan-700 transition-colors">{COMPANY.email}</a></p>
          </Block>
          <Block title="Umsatzsteuer-ID">
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
            <p className="font-semibold text-petrol">{COMPANY.ustId}</p>
          </Block>
          <Block title="Haftung für Inhalte">
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
          </Block>
          <Block title="Haftung für Links">
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.</p>
          </Block>
          <Block title="Urheberrecht">
            <p>Die durch die Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Die Vervielfältigung außerhalb der Grenzen des Urheberrechtes bedarf der schriftlichen Zustimmung.</p>
          </Block>
          <p className="font-mono text-[10px] text-petrol/40 pt-8 border-t border-petrol/10">
            Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
          </p>
        </div>
      </div>
    </section>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-xl font-medium tracking-tighter-2 text-petrol mb-3">{title}</h2>
      <div className="space-y-1 pl-4 border-l-2 border-cyan/30">{children}</div>
    </div>
  );
}
