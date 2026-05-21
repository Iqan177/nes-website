import { NextResponse } from "next/server";
import { Resend } from "resend";

// Empfänger aller Anfragen
const TO_EMAIL = "info@nes-energygroup.com";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, interest, message, config } = body;

    if (!email || !name) {
      return NextResponse.json({ success: false, error: "Name und E-Mail erforderlich." }, { status: 400 });
    }

    const isConfig = !!config;
    const subject = isConfig
      ? `Konfigurator-Anfrage: ${name}${company ? ` · ${company}` : ""}`
      : `Kontaktanfrage: ${name}${company ? ` · ${company}` : ""}`;

    // 1) Benachrichtigung an NES
    await resend.emails.send({
      from: "NES Website <onboarding@resend.dev>",
      to: [TO_EMAIL],
      reply_to: email,
      subject,
      html: buildNotificationEmail({ name, company, email, phone, interest, message, config }),
    });

    // 2) Bestätigung an den Kunden
    await resend.emails.send({
      from: "Next Energy Solution <onboarding@resend.dev>",
      to: [email],
      subject: "Ihre Anfrage bei Next Energy Solution",
      html: buildConfirmationEmail({ name, isConfig }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend Fehler:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// ── E-Mail-Templates ─────────────────────────────────────────────────

function row(label, value) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #EFE9DD;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#6B675F;font-family:monospace;white-space:nowrap">${label}</td>
      <td style="padding:10px 0 10px 20px;border-bottom:1px solid #EFE9DD;font-size:14px;font-weight:600;color:#0A2540;text-align:right">${value}</td>
    </tr>`;
}

function buildNotificationEmail({ name, company, email, phone, interest, message, config }) {
  const rows = [
    row("Name", name),
    row("Unternehmen", company),
    row("E-Mail", email),
    row("Telefon", phone),
    row("Thema", interest),
    row("Technologie", config?.technology),
    row("Anwendung", config?.application),
    row("Kapazität", config?.capacity ? `${config.capacity} kWh` : null),
    row("Zeitrahmen", config?.timeline),
  ].join("");

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px;background:#F7F4EE;font-family:Arial,Helvetica,sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(10,37,64,0.08)">

    <!-- Header -->
    <div style="background:#0A2540;padding:36px 40px">
      <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#00D4D8;font-family:monospace">Next Energy Solution</p>
      <h1 style="margin:0;font-size:24px;font-weight:700;color:#F7F4EE;line-height:1.2">Neue ${config ? "Konfigurator-Anfrage" : "Kontaktanfrage"}</h1>
    </div>

    <!-- Body -->
    <div style="padding:36px 40px">
      <table style="width:100%;border-collapse:collapse">${rows}</table>

      ${message ? `
      <div style="margin-top:24px;padding:20px;background:#F7F4EE;border-radius:10px">
        <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#6B675F;font-family:monospace">Nachricht</p>
        <p style="margin:0;font-size:14px;color:#0A2540;line-height:1.7">${message.replace(/\n/g, "<br>")}</p>
      </div>` : ""}

      <div style="margin-top:28px">
        <a href="mailto:${email}" style="display:inline-block;background:#0A2540;color:#F7F4EE;padding:12px 28px;border-radius:50px;text-decoration:none;font-size:14px;font-weight:600">
          Direkt antworten →
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:20px 40px;background:#F7F4EE;border-top:1px solid #EFE9DD">
      <p style="margin:0;font-size:11px;color:#9E9A91;font-family:monospace">Next Energy Solution · info@nes-energygroup.com</p>
    </div>
  </div>
</body>
</html>`;
}

function buildConfirmationEmail({ name, isConfig }) {
  const firstName = name.split(" ")[0];
  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px;background:#F7F4EE;font-family:Arial,Helvetica,sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(10,37,64,0.08)">

    <!-- Header -->
    <div style="background:#0A2540;padding:36px 40px">
      <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#00D4D8;font-family:monospace">Next Energy Solution</p>
      <h1 style="margin:0;font-size:24px;font-weight:700;color:#F7F4EE;line-height:1.2">Ihre Anfrage ist eingegangen.</h1>
    </div>

    <!-- Body -->
    <div style="padding:40px 40px">
      <p style="font-size:18px;font-weight:600;color:#0A2540;margin:0 0 16px">Sehr geehrte/r ${firstName},</p>

      <p style="font-size:15px;color:#4A4842;line-height:1.7;margin:0 0 16px">
        vielen Dank für Ihre ${isConfig ? "Konfigurator-Anfrage" : "Anfrage"} bei <strong>Next Energy Solution</strong>.
      </p>

      <p style="font-size:15px;color:#4A4842;line-height:1.7;margin:0 0 24px">
        Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
      </p>

      <!-- Accent box -->
      <div style="padding:20px 24px;background:#F7F4EE;border-radius:12px;border-left:3px solid #00D4D8;margin-bottom:28px">
        <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#6B675F;font-family:monospace">Direktkontakt</p>
        <a href="mailto:info@nes-energygroup.com" style="font-size:14px;color:#0A2540;font-weight:600;text-decoration:none">info@nes-energygroup.com</a>
      </div>

      <p style="font-size:15px;color:#4A4842;line-height:1.7;margin:0">
        Mit freundlichen Grüßen,<br>
        <strong>Next Energy Solution</strong>
      </p>
    </div>

    <!-- Footer -->
    <div style="padding:20px 40px;background:#F7F4EE;border-top:1px solid #EFE9DD">
      <p style="margin:0;font-size:11px;color:#9E9A91;font-family:monospace">Next Energy Solution · info@nes-energygroup.com</p>
    </div>
  </div>
</body>
</html>`;
}
