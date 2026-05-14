"use client";
import { COMPANY } from "@/lib/data";

export default function DatenschutzPage() {
  return (
    <section className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-[860px] mx-auto px-6 lg:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5">
          <span className="inline-block w-6 h-px bg-cyan-700" />Rechtliches
        </p>
        <h1 className="font-display font-medium text-5xl md:text-6xl tracking-tightest leading-[0.98] text-petrol mb-16">
          Datenschutzerklärung
        </h1>
        <div className="space-y-12 text-[15px] text-petrol/80 leading-relaxed">
          <Block title="1. Datenschutz auf einen Blick">
            <p><strong className="text-petrol">Allgemeine Hinweise</strong></p>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </Block>

          <Block title="2. Datenerfassung auf dieser Website">
            <p><strong className="text-petrol">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:</p>
            <p>{COMPANY.fullName}<br />{COMPANY.address}<br />{COMPANY.country}</p>
            <p className="mt-3"><strong className="text-petrol">Wie erfassen wir Ihre Daten?</strong></p>
            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen — z. B. über unser Kontaktformular oder den Konfigurator. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (technische Daten wie Browser, Betriebssystem, Uhrzeit des Seitenaufrufs).</p>
            <p className="mt-3"><strong className="text-petrol">Wofür nutzen wir Ihre Daten?</strong></p>
            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens oder zur Bearbeitung Ihrer Anfrage verwendet werden.</p>
          </Block>

          <Block title="3. Kontaktformular">
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            <p className="mt-3">Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Die bis zum Widerruf erfolgte Datenverarbeitung bleibt rechtmäßig.</p>
            <p className="mt-3">Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen — insbesondere Aufbewahrungsfristen — bleiben unberührt.</p>
          </Block>

          <Block title="4. Ihre Rechte">
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
              <li>die Einschränkung der Verarbeitung zu verlangen</li>
              <li>der Verarbeitung zu widersprechen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
              <li>Beschwerde bei einer Aufsichtsbehörde einzureichen</li>
            </ul>
          </Block>

          <Block title="5. Analyse-Tools und Tools von Drittanbietern">
            <p>Diese Website verwendet keine Analyse-Tools oder Tracking-Software von Drittanbietern. Es werden keine Cookies zu Analysezwecken gesetzt.</p>
          </Block>

          <Block title="6. Hosting">
            <p>Diese Website wird bei Netlify (Netlify, Inc., 512 2nd Street, Ste 200, San Francisco, CA 94107, USA) gehostet. Details zur Datenverarbeitung finden Sie in der Datenschutzerklärung von Netlify: <a href="https://www.netlify.com/privacy/" className="text-petrol hover:text-cyan-700 transition-colors underline" target="_blank" rel="noopener noreferrer">netlify.com/privacy</a></p>
          </Block>

          <Block title="7. Kontakt Datenschutz">
            <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
            <p className="mt-2">{COMPANY.fullName}<br />{COMPANY.address}<br />E-Mail: <a href={`mailto:${COMPANY.email}`} className="text-petrol hover:text-cyan-700 transition-colors">{COMPANY.email}</a></p>
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
      <div className="space-y-2 pl-4 border-l-2 border-cyan/30">{children}</div>
    </div>
  );
}
