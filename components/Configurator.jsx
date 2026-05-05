"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG_OPTIONS } from "@/lib/data";
import Icon from "./Icon";

const STEPS = ["Anwendung", "Kapazität", "Zeitrahmen", "Kontakt"];

export default function Configurator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [config, setConfig] = useState({
    application: "",
    capacity: 0,
    timeline: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  function update(key, value) {
    setConfig((c) => ({ ...c, [key]: value }));
  }

  function canProceed() {
    if (currentStep === 0) return !!config.application;
    if (currentStep === 1) return config.capacity > 0;
    if (currentStep === 2) return !!config.timeline;
    if (currentStep === 3) return config.name && config.email;
    return false;
  }

  function next() {
    if (currentStep < STEPS.length - 1) setCurrentStep((s) => s + 1);
    else handleSubmit();
  }

  function prev() {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }

  async function handleSubmit() {
    setSubmitStatus("sending");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: config.name,
          company: config.company,
          email: config.email,
          phone: config.phone,
          message: config.notes,
          config: {
            application: config.application,
            capacity: config.capacity,
            timeline: config.timeline,
          },
        }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else setSubmitStatus("error");
    } catch {
      setSubmitStatus("error");
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-petrol/10 bg-pearl-50 p-10 lg:p-16 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan mb-6 glow-cyan">
          <Icon name="check" className="w-7 h-7" strokeColor="#0A2540" />
        </div>
        <h3 className="font-display text-3xl lg:text-4xl font-medium tracking-tighter-2 text-petrol mb-4">
          Vielen Dank, {config.name.split(" ")[0]}.
        </h3>
        <p className="text-petrol/70 max-w-lg mx-auto leading-relaxed">
          Wir haben Ihre Konfiguration erhalten und melden uns innerhalb
          von <span className="text-petrol font-medium">24 Stunden</span> mit
          einem maßgeschneiderten Angebot bei Ihnen zurück.
        </p>
        <div className="mt-8 inline-flex gap-2 px-5 py-2.5 rounded-full bg-petrol/5 border border-petrol/10">
          <span className="font-mono text-[11px] text-petrol/60">
            Anfrage-ID: NES-{Date.now().toString().slice(-6)}
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-petrol/10 bg-pearl-50 overflow-hidden">
      {/* Progress bar */}
      <div className="px-6 lg:px-10 pt-6 lg:pt-8 pb-5 border-b border-petrol/10">
        <div className="flex items-center justify-between mb-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50">
            Schritt {currentStep + 1} von {STEPS.length}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-700 font-semibold">
            {STEPS[currentStep]}
          </p>
        </div>
        <div className="relative h-1 bg-petrol/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-600 to-cyan rounded-full"
          />
        </div>
      </div>

      {/* Step content */}
      <div className="p-6 lg:p-10 min-h-[460px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && (
              <Step
                title="Wofür benötigen Sie Energiespeicher?"
                subtitle="Wählen Sie den primären Anwendungsfall."
              >
                <div className="grid md:grid-cols-2 gap-3">
                  {CONFIG_OPTIONS.applications.map((opt) => (
                    <OptionCard
                      key={opt.value}
                      label={opt.label}
                      selected={config.application === opt.value}
                      onClick={() => update("application", opt.value)}
                    />
                  ))}
                </div>
              </Step>
            )}

            {currentStep === 1 && (
              <Step
                title="Welche Kapazität benötigen Sie?"
                subtitle="Sie können später flexibel skalieren — auch modular."
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                  {CONFIG_OPTIONS.capacities.map((opt) => (
                    <CapacityCard
                      key={opt.value}
                      label={opt.label}
                      suitable={opt.suitable}
                      selected={config.capacity === opt.value}
                      onClick={() => update("capacity", opt.value)}
                    />
                  ))}
                </div>
              </Step>
            )}

            {currentStep === 2 && (
              <Step
                title="Wann möchten Sie in Betrieb gehen?"
                subtitle="Unsere Standard-Lieferzeit liegt zwischen 16 und 24 Wochen."
              >
                <div className="grid md:grid-cols-2 gap-3">
                  {CONFIG_OPTIONS.timeline.map((opt) => (
                    <OptionCard
                      key={opt.value}
                      label={opt.label}
                      selected={config.timeline === opt.value}
                      onClick={() => update("timeline", opt.value)}
                    />
                  ))}
                </div>
              </Step>
            )}

            {currentStep === 3 && (
              <Step
                title="Ihre Kontaktdaten"
                subtitle="Wir melden uns binnen 24 Stunden mit einem persönlichen Angebot."
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    label="Name"
                    required
                    value={config.name}
                    onChange={(v) => update("name", v)}
                    placeholder="Vor- und Nachname"
                  />
                  <Input
                    label="Unternehmen"
                    value={config.company}
                    onChange={(v) => update("company", v)}
                    placeholder="Optional"
                  />
                  <Input
                    label="E-Mail"
                    required
                    type="email"
                    value={config.email}
                    onChange={(v) => update("email", v)}
                    placeholder="ihre@adresse.de"
                  />
                  <Input
                    label="Telefon"
                    type="tel"
                    value={config.phone}
                    onChange={(v) => update("phone", v)}
                    placeholder="Optional"
                  />
                </div>
                <div className="mt-5">
                  <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">
                    Anmerkungen (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={config.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder="Besondere Anforderungen, Standortinformationen, …"
                    className="w-full bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors resize-none"
                  />
                </div>

                {/* Summary */}
                <div className="mt-8 p-5 rounded-xl bg-petrol/5 border border-petrol/10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/50 mb-3">
                    Ihre Konfiguration
                  </p>
                  <div className="space-y-2 text-[14px]">
                    <SummaryRow label="Anwendung" value={CONFIG_OPTIONS.applications.find(a => a.value === config.application)?.label} />
                    <SummaryRow label="Kapazität" value={CONFIG_OPTIONS.capacities.find(c => c.value === config.capacity)?.label} />
                    <SummaryRow label="Zeitrahmen" value={CONFIG_OPTIONS.timeline.find(t => t.value === config.timeline)?.label} />
                  </div>
                </div>
              </Step>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="px-6 lg:px-10 py-5 border-t border-petrol/10 flex items-center justify-between bg-pearl">
        <button
          onClick={prev}
          disabled={currentStep === 0}
          className="text-[14px] font-medium text-petrol/60 hover:text-petrol transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Zurück
        </button>
        <button
          onClick={next}
          disabled={!canProceed() || submitStatus === "sending"}
          className="group inline-flex items-center gap-2 bg-petrol hover:bg-petrol-700 text-pearl px-6 py-3 rounded-full text-[14px] font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {submitStatus === "sending" ? (
            <><span className="inline-block w-4 h-4 border-2 border-pearl/30 border-t-pearl rounded-full animate-spin" />Wird gesendet…</>
          ) : (
            <>{currentStep === STEPS.length - 1 ? "Anfrage senden" : "Weiter"}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function Step({ title, subtitle, children }) {
  return (
    <div>
      <h3 className="font-display text-2xl lg:text-3xl font-medium tracking-tighter-2 text-petrol mb-2">
        {title}
      </h3>
      <p className="text-[15px] text-petrol/60 mb-8">{subtitle}</p>
      {children}
    </div>
  );
}

function OptionCard({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group relative p-5 rounded-xl border-2 text-left transition-all ${
        selected
          ? "border-cyan bg-cyan/5"
          : "border-petrol/10 hover:border-petrol/30 bg-pearl"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-medium text-petrol">{label}</span>
        <span
          className={`flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all ${
            selected ? "border-cyan bg-cyan" : "border-petrol/20"
          }`}
        >
          {selected && <Icon name="check" className="w-3 h-3" strokeColor="#0A2540" />}
        </span>
      </div>
    </button>
  );
}

function CapacityCard({ label, suitable, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group relative p-5 rounded-xl border-2 text-left transition-all ${
        selected
          ? "border-cyan bg-cyan/5"
          : "border-petrol/10 hover:border-petrol/30 bg-pearl"
      }`}
    >
      <p className="font-display text-2xl font-bold text-petrol tabular tracking-tighter-2 mb-1">
        {label}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50">
        {suitable}
      </p>
    </button>
  );
}

function Input({ label, value, onChange, type = "text", placeholder, required }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">
        {label} {required && <span className="text-cyan-700">*</span>}
      </label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors"
      />
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-petrol/50">
        {label}
      </span>
      <span className="text-petrol font-medium">{value || "—"}</span>
    </div>
  );
}
