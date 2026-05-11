"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

export default function ContactForm() {
  const { lang } = useLang();
  const isDE = lang === "de";
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", interest: "", message: "" });

  const INTERESTS = isDE
    ? ["Speicher konfigurieren", "Erstberatung", "Industriekunde", "Stadtwerk / Versorger", "Energiehandel", "Sonstiges"]
    : ["Configure storage", "Initial consultation", "Industrial customer", "Utility / supplier", "Energy trading", "Other"];

  function update(key, value) { setForm((f) => ({ ...f, [key]: value })); }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "success") {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-petrol/10 bg-pearl-50 p-10 lg:p-14 text-center">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan mb-6">
          <Icon name="check" className="w-6 h-6" strokeColor="#0A2540" />
        </span>
        <h3 className="font-display text-3xl font-medium tracking-tighter-2 text-petrol mb-3">
          {isDE ? "Vielen Dank." : "Thank you."}
        </h3>
        <p className="text-petrol/70 max-w-md mx-auto">
          {isDE ? "Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns bei Ihnen zurück."
                 : "Your request has been sent successfully. We will get back to you."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-petrol/10 bg-pearl-50 p-7 lg:p-10">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label={isDE ? "Name" : "Name"} required value={form.name} onChange={(v) => update("name", v)} placeholder={isDE ? "Vor- und Nachname" : "Full name"} />
        <Field label={isDE ? "Unternehmen" : "Company"} value={form.company} onChange={(v) => update("company", v)} placeholder={isDE ? "Optional" : "Optional"} />
        <Field label="E-Mail" required type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="ihre@adresse.de" />
        <Field label={isDE ? "Telefon" : "Phone"} type="tel" value={form.phone} onChange={(v) => update("phone", v)} placeholder={isDE ? "Optional" : "Optional"} />
      </div>

      <div className="mt-7">
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-3 block">
          {isDE ? "Worum geht es?" : "What is it about?"}
        </label>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((opt) => (
            <button type="button" key={opt} onClick={() => update("interest", opt)}
              className={`px-4 py-2 rounded-full text-[13.5px] font-medium border transition-all ${
                form.interest === opt ? "bg-petrol text-pearl border-petrol" : "bg-transparent text-petrol/70 border-petrol/15 hover:border-petrol/40"
              }`}>{opt}</button>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">
          {isDE ? "Nachricht" : "Message"}
        </label>
        <textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)}
          placeholder={isDE ? "Beschreiben Sie kurz Ihr Projekt oder Ihre Frage." : "Briefly describe your project or question."}
          className="w-full bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors resize-none" />
      </div>

      {status === "error" && (
        <div className="mt-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-[13px] text-red-700">
          {isDE ? "Beim Senden ist ein Fehler aufgetreten. Schreiben Sie uns direkt an " : "An error occurred. Please write to us directly at "}
          <a href="mailto:Musawar.Khawaja@nes-energygroup.com" className="underline">Musawar.Khawaja@nes-energygroup.com</a>
        </div>
      )}

      <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-end gap-4 pt-6 border-t border-petrol/10">
        <button type="submit" disabled={status === "sending"}
          className="group inline-flex items-center gap-3 bg-petrol text-pearl hover:bg-petrol-700 px-6 py-3.5 rounded-full text-[14.5px] font-medium transition-all shadow-lg shadow-petrol/15 disabled:opacity-60 disabled:cursor-not-allowed">
          {status === "sending" ? (
            <><span className="inline-block w-4 h-4 border-2 border-pearl/30 border-t-pearl rounded-full animate-spin" />
              {isDE ? "Wird gesendet…" : "Sending…"}</>
          ) : (
            <>{isDE ? "Anfrage senden" : "Send request"}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({ label, value, onChange, type = "text", placeholder, required }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-petrol/50 mb-2 block">
        {label} {required && <span className="text-cyan-700">*</span>}
      </label>
      <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-petrol/15 focus:border-cyan-700 outline-none py-3 text-[15px] text-petrol placeholder:text-petrol/40 transition-colors" />
    </div>
  );
}
