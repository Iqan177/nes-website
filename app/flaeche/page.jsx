"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Icon from "@/components/Icon";
import { useLang } from "@/lib/LanguageContext";

export default function FlaechePage() {
  const { lang } = useLang();
  const isDE = lang === "de";
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-5 flex items-center gap-2.5"><span className="inline-block w-6 h-px bg-cyan-700" />{isDE ? "Fläche vermieten" : "Lease your land"}</p>
          <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.98] text-petrol max-w-5xl">{isDE ? <>Fläche nahe<br /><span className="text-petrol/60">Umspannstation?</span></> : <>Land near a<br /><span className="text-petrol/60">substation?</span></>}</h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-petrol/70 leading-relaxed">{isDE ? "Wir suchen Grundstücke für unsere Batteriespeicher-Container. Wenn Sie eine Fläche in der Nähe einer Umspannstation besitzen, unterbreiten wir Ihnen ein attraktives Verpachtungsangebot." : "We are looking for land for our battery storage containers. If you own a plot near a substation, we will make you an attractive lease offer."}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-t border-petrol/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-px bg-petrol/10 border border-petrol/10 rounded-2xl overflow-hidden mb-20">
            {[
              { icon: "euro", title: isDE ? "Attraktive Pachteinnahmen" : "Attractive lease income", desc: isDE ? "Regelmäßige, zuverlässige Einnahmen durch langfristige Pachtverträge." : "Regular, reliable income through long-term lease agreements." },
              { icon: "shield", title: isDE ? "Langfristige Partnerschaft" : "Long-term partnership", desc: isDE ? "Wir schließen langfristige Verträge mit fairen Konditionen." : "We conclude long-term contracts with fair conditions." },
              { icon: "leaf", title: isDE ? "Aktiver Beitrag zur Energiewende" : "Active contribution", desc: isDE ? "Ihre Fläche wird Teil der modernen Energieinfrastruktur." : "Your land becomes part of modern energy infrastructure." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-pearl-50 p-8 lg:p-10">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 text-cyan-700 mb-5"><Icon name={item.icon} className="w-6 h-6" /></span>
                <h3 className="font-display text-xl lg:text-2xl font-medium tracking-tighter-2 text-petrol mb-3">{item.title}</h3>
                <p className="text-[14.5px] text-petrol/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <SectionHeader eyebrow={isDE ? "Jetzt anfragen" : "Enquire now"} title={isDE ? "Teilen Sie uns Ihre Fläche mit." : "Tell us about your land."} />
              <p className="mt-6 text-base text-petrol/70 leading-relaxed">{isDE ? "Füllen Sie das Formular aus — wir melden uns mit einem individuellen Angebot." : "Fill out the form — we will get back to you with an individual offer."}</p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: "check", text: isDE ? "Kostenlose Erstbewertung" : "Free initial assessment" },
                  { icon: "check", text: isDE ? "Individuelle Konditionen" : "Individual conditions" },
                  { icon: "check", text: isDE ? "Bestätigung per E-Mail" : "Confirmation by email" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan/15 text-cyan-700"><Icon name={item.icon} className="w-3.5 h-3.5" /></span>
                    <span className="text-[15px] text-petrol">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7"><FlaecheForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}

function FlaecheForm() {
  const { lang } = useLang();
  const isDE = lang === "de";
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", flaeche: "", einheit: "m²", entfernung: "", entfernungEinheit: "m", adresse: "", bemerkungen: "" });
  function update(key, value) { setForm((f) => ({ ...f, [key]: value })); }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.name, company: form.company, email: form.email, phone: form.phone, interest: isDE ? "Flächenverpachtung" : "Land lease", message: `Fläche: ${form.flaeche} ${form.einheit}\nEntfernung Umspannstation: ${form.entfernung} ${form.entfernungEinheit}\nAdresse: ${form.adresse}\nBemerkungen: ${form.bemerkungen}` }) });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "success") {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-petrol/10 bg-pearl-50 p-10 lg:p-14 text-center">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan mb-6"><Icon name="check" className="w-6 h-6" strokeColor="#0A2540" /></span>
        <h3 className="font-display text-3xl font-medium tracking-tighter-2 text-petrol mb-3">{isDE ? "Vielen Dank!" : "Thank you!"}</h3>
        <p className="text-petrol/70 max-w-md mx-auto">{isDE ? "Wir haben Ihre Flächenanfrage erhalten und arbeiten bereits daran. Sie erhalten in Kürze eine Bestätigung per E-Mail." : "We have received your land enquiry and are already working on it. You will shortly receive a confirmation by email."}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-petrol/10 bg-pearl-50 p-7 lg:p-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-700 mb-5 flex items-center gap-2"><span className="inline-block w-4 h-px bg-cyan-700" />{isDE ? "Ihre Kontaktdaten" : "Your contact details"}</p>
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <FF label={isDE ? "Name" : "Name"} required value={form.name} onChange={(v) => update("name", v)} placeholder={isDE ? "Vor- und Nachname" : "Full name"} />
        <FF label={isDE ? "Unternehmen" : "Company"} value={form.company} onChange={(v) => update("company", v)} placeholder="Optional" />
        <FF label="E-Mail" required type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="ihre@adresse.de" />
        <FF label={isDE ? "Telefon" : "Phone"} type="tel" value={form.phone} onChange={(v) => update("phone", v)} placeholder="Optional" />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-700 mb-5 flex items-center gap-2 pt-6 border-t border-petrol/10"><span className="inline-block w-4 h-px bg-cyan-700" />{isDE ? "Flächeninformationen" : "Land information"}</p>
      <div className="mb-5">
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">{isDE ? "Flächengröße *" : "Area size *"}</label>
        <div className="flex gap-3">
          <input required type="number" value={form.flaeche} onChange={(e) => update("flaeche", e.target.value)} placeholder={isDE ? "z. B. 5000" : "e.g. 5000"} className="flex-1 bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors" />
          <select value={form.einheit} onChange={(e) => update("einheit", e.target.value)} className="bg-pearl border border-petrol/15 rounded-lg px-3 py-2 text-[14px] text-petrol outline-none focus:border-cyan-700 transition-colors"><option value="m²">m²</option><option value="ha">ha</option></select>
        </div>
      </div>
      <div className="mb-5">
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">{isDE ? "Entfernung zur nächsten Umspannstation *" : "Distance to nearest substation *"}</label>
        <div className="flex gap-3">
          <input required type="number" value={form.entfernung} onChange={(e) => update("entfernung", e.target.value)} placeholder={isDE ? "z. B. 200" : "e.g. 200"} className="flex-1 bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors" />
          <select value={form.entfernungEinheit} onChange={(e) => update("entfernungEinheit", e.target.value)} className="bg-pearl border border-petrol/15 rounded-lg px-3 py-2 text-[14px] text-petrol outline-none focus:border-cyan-700 transition-colors"><option value="m">Meter</option><option value="km">km</option></select>
        </div>
        <p className="font-mono text-[10px] text-petrol/40 mt-2">{isDE ? "Je näher an einer Umspannstation, desto attraktiver das Angebot." : "The closer to a substation, the more attractive the offer."}</p>
      </div>
      <div className="mb-5">
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">{isDE ? "Adresse / Standort *" : "Address / Location *"}</label>
        <input required type="text" value={form.adresse} onChange={(e) => update("adresse", e.target.value)} placeholder={isDE ? "Straße, PLZ, Ort" : "Street, postcode, city"} className="w-full bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors" />
      </div>
      <div className="mb-5">
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">{isDE ? "Weitere Informationen" : "Additional information"}</label>
        <textarea rows={4} value={form.bemerkungen} onChange={(e) => update("bemerkungen", e.target.value)} placeholder={isDE ? "z. B. Bodenbeschaffenheit, bestehende Infrastruktur…" : "e.g. soil conditions, existing infrastructure…"} className="w-full bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors resize-none" />
      </div>
      {status === "error" && <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-[13px] text-red-700">{isDE ? "Fehler beim Senden." : "Error sending."}</div>}
      <div className="flex justify-end pt-5 border-t border-petrol/10">
        <button type="submit" disabled={status === "sending"} className="group inline-flex items-center gap-3 bg-petrol text-pearl hover:bg-petrol-700 px-7 py-4 rounded-full text-[15px] font-medium transition-all shadow-lg shadow-petrol/15 disabled:opacity-60">
          {status === "sending" ? <><span className="inline-block w-4 h-4 border-2 border-pearl/30 border-t-pearl rounded-full animate-spin" />{isDE ? "Sendet…" : "Sending…"}</> : <>{isDE ? "Flächenanfrage senden" : "Send land enquiry"}<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></>}
        </button>
      </div>
    </form>
  );
}
function FF({ label, value, onChange, type = "text", placeholder, required }) {
  return <div><label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">{label} {required && <span className="text-cyan-700">*</span>}</label><input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors" /></div>;
}
