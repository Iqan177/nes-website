import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Empfänger — feste Adresse, die alle Anfragen erhält
const RECIPIENT = "info@nes-energygroup.com";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, interest, message, config } = body;

    // SMTP-Transporter — Zugangsdaten aus .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-Mail-Inhalt
    const subject = config
      ? `NES Konfigurator-Anfrage von ${name}${company ? ` (${company})` : ""}`
      : `NES Kontaktanfrage von ${name}${company ? ` (${company})` : ""}`;

    const html = config
      ? buildConfigEmail({ name, company, email, phone, notes: message, config })
      : buildContactEmail({ name, company, email, phone, interest, message });

    await transporter.sendMail({
      from: `"NES Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email, // Direkte Antwort geht an den Absender
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("E-Mail-Fehler:", error);
    return NextResponse.json(
      { success: false, error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}

// ── E-Mail-Templates ──────────────────────────────────────────────────

function buildContactEmail({ name, company, email, phone, interest, message }) {
  return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><style>
  body { font-family: 'Geist', Arial, sans-serif; background: #F7F4EE; margin: 0; padding: 20px; }
  .card { background: #fff; border-radius: 16px; max-width: 600px; margin: 0 auto; overflow: hidden; }
  .header { background: #0A2540; padding: 32px 36px; }
  .header h1 { color: #00D4D8; font-size: 22px; margin: 0 0 4px; }
  .header p { color: rgba(247,244,238,0.6); font-size: 13px; margin: 0; }
  .body { padding: 32px 36px; }
  .row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #EFE9DD; }
  .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #6B675F; font-family: monospace; }
  .value { font-size: 14px; color: #0A2540; font-weight: 500; text-align: right; max-width: 60%; }
  .message-box { background: #F7F4EE; border-radius: 10px; padding: 16px; margin-top: 20px; font-size: 14px; color: #0A2540; line-height: 1.6; }
  .footer { padding: 20px 36px; background: #F7F4EE; font-size: 11px; color: #9E9A91; font-family: monospace; }
  .reply-btn { display: inline-block; background: #0A2540; color: #F7F4EE; padding: 12px 24px; border-radius: 50px; text-decoration: none; font-size: 14px; font-weight: 600; margin-top: 20px; }
</style></head>
<body>
<div class="card">
  <div class="header">
    <h1>Neue Kontaktanfrage</h1>
    <p>NES Energy Group — Website-Formular</p>
  </div>
  <div class="body">
    <div class="row"><span class="label">Name</span><span class="value">${name}</span></div>
    ${company ? `<div class="row"><span class="label">Unternehmen</span><span class="value">${company}</span></div>` : ""}
    <div class="row"><span class="label">E-Mail</span><span class="value">${email}</span></div>
    ${phone ? `<div class="row"><span class="label">Telefon</span><span class="value">${phone}</span></div>` : ""}
    ${interest ? `<div class="row"><span class="label">Thema</span><span class="value">${interest}</span></div>` : ""}
    ${message ? `<div class="message-box"><strong>Nachricht:</strong><br><br>${message.replace(/\n/g, "<br>")}</div>` : ""}
    <a href="mailto:${email}" class="reply-btn">Direkt antworten →</a>
  </div>
  <div class="footer">NES Energy Group · Nordhorn, Niedersachsen · info@nes-energygroup.com</div>
</div>
</body></html>`;
}

function buildConfigEmail({ name, company, email, phone, notes, config }) {
  const { application, capacity, timeline } = config;
  return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><style>
  body { font-family: 'Geist', Arial, sans-serif; background: #F7F4EE; margin: 0; padding: 20px; }
  .card { background: #fff; border-radius: 16px; max-width: 600px; margin: 0 auto; overflow: hidden; }
  .header { background: #0A2540; padding: 32px 36px; }
  .header h1 { color: #00D4D8; font-size: 22px; margin: 0 0 4px; }
  .header p { color: rgba(247,244,238,0.6); font-size: 13px; margin: 0; }
  .body { padding: 32px 36px; }
  .config-box { background: #0A2540; border-radius: 12px; padding: 24px; margin-bottom: 24px; }
  .config-box h2 { color: #00D4D8; font-size: 13px; text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 16px; font-family: monospace; }
  .config-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .config-label { font-size: 11px; text-transform: uppercase; color: rgba(247,244,238,0.5); font-family: monospace; }
  .config-value { font-size: 14px; color: #F7F4EE; font-weight: 600; }
  .row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #EFE9DD; }
  .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #6B675F; font-family: monospace; }
  .value { font-size: 14px; color: #0A2540; font-weight: 500; text-align: right; }
  .reply-btn { display: inline-block; background: #0A2540; color: #F7F4EE; padding: 12px 24px; border-radius: 50px; text-decoration: none; font-size: 14px; font-weight: 600; margin-top: 20px; }
  .footer { padding: 20px 36px; background: #F7F4EE; font-size: 11px; color: #9E9A91; font-family: monospace; }
</style></head>
<body>
<div class="card">
  <div class="header">
    <h1>Neue Konfigurator-Anfrage</h1>
    <p>NES Energy Group — Produkt-Konfigurator</p>
  </div>
  <div class="body">
    <div class="config-box">
      <h2>Konfiguration</h2>
      ${application ? `<div class="config-row"><span class="config-label">Anwendung</span><span class="config-value">${application}</span></div>` : ""}
      ${capacity ? `<div class="config-row"><span class="config-label">Kapazität</span><span class="config-value">${capacity} kWh</span></div>` : ""}
      ${timeline ? `<div class="config-row"><span class="config-label">Zeitrahmen</span><span class="config-value">${timeline}</span></div>` : ""}
    </div>
    <div class="row"><span class="label">Name</span><span class="value">${name}</span></div>
    ${company ? `<div class="row"><span class="label">Unternehmen</span><span class="value">${company}</span></div>` : ""}
    <div class="row"><span class="label">E-Mail</span><span class="value">${email}</span></div>
    ${phone ? `<div class="row"><span class="label">Telefon</span><span class="value">${phone}</span></div>` : ""}
    ${notes ? `<div class="row"><span class="label">Anmerkungen</span><span class="value" style="text-align:right;max-width:60%">${notes}</span></div>` : ""}
    <a href="mailto:${email}" class="reply-btn">Direkt antworten →</a>
  </div>
  <div class="footer">NES Energy Group · Nordhorn, Niedersachsen · info@nes-energygroup.com</div>
</div>
</body></html>`;
}
