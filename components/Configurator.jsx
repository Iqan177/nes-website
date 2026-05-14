"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG_OPTIONS } from "@/lib/data";
import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

const STEPS_DE = ["Anwendung", "Technologie", "Kapazität", "Zeitrahmen", "Kontakt"];
const STEPS_EN = ["Application", "Technology", "Capacity", "Timeline", "Contact"];

export default function Configurator() {
  const { lang } = useLang();
  const isDE = lang === "de";
  const STEPS = isDE ? STEPS_DE : STEPS_EN;
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("idle");
  const [config, setConfig] = useState({ application: "", technology: "", capacity: 0, timeline: "", name: "", company: "", email: "", phone: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  function update(key, value) { setConfig((c) => ({ ...c, [key]: value })); }

  function canProceed() {
    if (step === 0) return !!config.application;
    if (step === 1) return !!config.technology;
    if (step === 2) return config.capacity > 0;
    if (step === 3) return !!config.timeline;
    if (step === 4) return config.name && config.email;
    return false;
  }

  async function next() {
    if (step < STEPS.length - 1) { setStep((s) => s + 1); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: config.name, company: config.company, email: config.email, phone: config.phone, message: config.notes, config: { application: config.application, technology: config.technology, capacity: config.capacity, timeline: config.timeline } }) });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-petrol/10 bg-pearl-50 p-10 lg:p-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan mb-6"><Icon name="check" className="w-7 h-7" strokeColor="#0A2540" /></div>
        <h3 className="font-display text-3xl lg:text-4xl font-medium tracking-tighter-2 text-petrol mb-4">{isDE ? `Vielen Dank, ${config.name.split(" ")[0]}.` : `Thank you, ${config.name.split(" ")[0]}.`}</h3>
        <p className="text-petrol/70 max-w-lg mx-auto leading-relaxed">{isDE ? "Wir haben Ihre Konfiguration erhalten und arbeiten bereits an Ihrer Anfrage. Sie erhalten in Kürze eine Bestätigung per E-Mail." : "We have received your configuration and are already working on your request. You will shortly receive a confirmation by email."}</p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-petrol/10 bg-pearl-50 overflow-hidden">
      <div className="px-6 lg:px-10 pt-6 lg:pt-8 pb-5 border-b border-petrol/10">
        <div className="flex items-center justify-between mb-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50">{isDE ? "Schritt" : "Step"} {step + 1} / {STEPS.length}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-700 font-semibold">{STEPS[step]}</p>
        </div>
        <div className="relative h-1 bg-petrol/10 rounded-full overflow-hidden">
          <motion.div animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }} transition={{ duration: 0.4 }} className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-600 to-cyan rounded-full" />
        </div>
      </div>

      <div className="p-6 lg:p-10 min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            {step === 0 && <StepShell title={isDE ? "Wofür benötigen Sie Energiespeicher?" : "What do you need energy storage for?"} sub={isDE ? "Wählen Sie den primären Anwendungsfall." : "Select the primary use case."}>
              <div className="grid md:grid-cols-2 gap-3">{CONFIG_OPTIONS.applications.map((o) => <OptionCard key={o.value} label={isDE ? o.label : o.labelEn} selected={config.application === o.value} onClick={() => update("application", o.value)} />)}</div>
            </StepShell>}
            {step === 1 && <StepShell title={isDE ? "Welche Technologie bevorzugen Sie?" : "Which technology do you prefer?"} sub={isDE ? "Sodium-Ionen oder Lithium-Ionen — wir beraten Sie gerne." : "Sodium-ion or lithium-ion — we are happy to advise you."}>
              <div className="grid md:grid-cols-3 gap-3">{CONFIG_OPTIONS.technologies.map((o) => <OptionCard key={o.value} label={isDE ? o.label : o.labelEn} selected={config.technology === o.value} onClick={() => update("technology", o.value)} />)}</div>
            </StepShell>}
            {step === 2 && <StepShell title={isDE ? "Welche Kapazität benötigen Sie?" : "What capacity do you need?"} sub={isDE ? "Modulare Skalierung möglich." : "Modular scaling possible."}>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">{CONFIG_OPTIONS.capacities.map((o) => <CapCard key={o.value} label={o.label} suitable={isDE ? o.suitable : o.suitableEn} selected={config.capacity === o.value} onClick={() => update("capacity", o.value)} />)}</div>
            </StepShell>}
            {step === 3 && <StepShell title={isDE ? "Wann möchten Sie starten?" : "When do you want to start?"} sub={isDE ? "Lieferzeit 14–24 Wochen." : "Delivery time 14–24 weeks."}>
              <div className="grid md:grid-cols-2 gap-3">{CONFIG_OPTIONS.timeline.map((o) => <OptionCard key={o.value} label={isDE ? o.label : o.labelEn} selected={config.timeline === o.value} onClick={() => update("timeline", o.value)} />)}</div>
            </StepShell>}
            {step === 4 && <StepShell title={isDE ? "Ihre Kontaktdaten" : "Your contact details"} sub={isDE ? "Sie erhalten sofort eine Bestätigung per E-Mail." : "You will immediately receive a confirmation by email."}>
              <div className="grid md:grid-cols-2 gap-5">
                <CField label={isDE ? "Name" : "Name"} required value={config.name} onChange={(v) => update("name", v)} placeholder={isDE ? "Vor- und Nachname" : "Full name"} />
                <CField label={isDE ? "Unternehmen" : "Company"} value={config.company} onChange={(v) => update("company", v)} placeholder="Optional" />
                <CField label="E-Mail" required type="email" value={config.email} onChange={(v) => update("email", v)} placeholder="ihre@adresse.de" />
                <CField label={isDE ? "Telefon" : "Phone"} type="tel" value={config.phone} onChange={(v) => update("phone", v)} placeholder="Optional" />
              </div>
              <div className="mt-5"><label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">{isDE ? "Anmerkungen" : "Notes"}</label><textarea rows={3} value={config.notes} onChange={(e) => update("notes", e.target.value)} placeholder={isDE ? "Besondere Anforderungen…" : "Special requirements…"} className="w-full bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors resize-none" /></div>
              <div className="mt-6 p-5 rounded-xl bg-petrol/5 border border-petrol/10">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-3">{isDE ? "Ihre Konfiguration" : "Your configuration"}</p>
                <div className="space-y-2 text-[14px]">
                  <SRow label={isDE ? "Anwendung" : "Application"} value={config.application} />
                  <SRow label={isDE ? "Technologie" : "Technology"} value={config.technology} />
                  <SRow label={isDE ? "Kapazität" : "Capacity"} value={CONFIG_OPTIONS.capacities.find(c => c.value === config.capacity)?.label} />
                  <SRow label={isDE ? "Zeitrahmen" : "Timeline"} value={config.timeline} />
                </div>
              </div>
              {status === "error" && <div className="mt-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-[13px] text-red-700">{isDE ? "Fehler beim Senden. Bitte versuchen Sie es erneut." : "Error sending. Please try again."}</div>}
            </StepShell>}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-6 lg:px-10 py-5 border-t border-petrol/10 flex items-center justify-between bg-pearl">
        <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="text-[14px] font-medium text-petrol/60 hover:text-petrol transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
          ← {isDE ? "Zurück" : "Back"}
        </button>
        <button onClick={next} disabled={!canProceed() || status === "sending"} className="group inline-flex items-center gap-2 bg-petrol hover:bg-petrol-700 text-pearl px-6 py-3 rounded-full text-[14px] font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed">
          {status === "sending" ? <><span className="inline-block w-4 h-4 border-2 border-pearl/30 border-t-pearl rounded-full animate-spin" />{isDE ? "Sendet…" : "Sending…"}</> : <>{step === STEPS.length - 1 ? (isDE ? "Anfrage senden" : "Send request") : (isDE ? "Weiter" : "Continue")}<svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></>}
        </button>
      </div>
    </div>
  );
}

function StepShell({ title, sub, children }) {
  return <div><h3 className="font-display text-2xl lg:text-3xl font-medium tracking-tighter-2 text-petrol mb-2">{title}</h3><p className="text-[15px] text-petrol/60 mb-8">{sub}</p>{children}</div>;
}
function OptionCard({ label, selected, onClick }) {
  return <button onClick={onClick} className={`group p-5 rounded-xl border-2 text-left transition-all ${selected ? "border-cyan bg-cyan/5" : "border-petrol/10 hover:border-petrol/30 bg-pearl"}`}>
    <div className="flex items-center justify-between"><span className="text-[15px] font-medium text-petrol">{label}</span><span className={`flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all ${selected ? "border-cyan bg-cyan" : "border-petrol/20"}`}>{selected && <Icon name="check" className="w-3 h-3" strokeColor="#0A2540" />}</span></div>
  </button>;
}
function CapCard({ label, suitable, selected, onClick }) {
  return <button onClick={onClick} className={`p-5 rounded-xl border-2 text-left transition-all ${selected ? "border-cyan bg-cyan/5" : "border-petrol/10 hover:border-petrol/30 bg-pearl"}`}>
    <p className="font-display text-2xl font-bold text-petrol tabular tracking-tighter-2 mb-1">{label}</p>
    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50">{suitable}</p>
  </button>;
}
function CField({ label, value, onChange, type = "text", placeholder, required }) {
  return <div><label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">{label} {required && <span className="text-cyan-700">*</span>}</label><input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors" /></div>;
}
function SRow({ label, value }) {
  return <div className="flex items-baseline justify-between gap-4"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50">{label}</span><span className="text-petrol font-medium">{value || "—"}</span></div>;
}
