import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = "Musawar.Khawaja@nes-energygroup.com";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, interest, message, config } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const isConfig = !!config;
    const subject = isConfig
      ? `NES Konfigurator-Anfrage von ${name}${company ? ` (${company})` : ""}`
      : `NES Kontaktanfrage von ${name}${company ? ` (${company})` : ""}`;

    // 1) Benachrichtigung an NES
    await transporter.sendMail({
      from: `"NES Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject,
      html: buildNotificationEmail({ name, company, email, phone, interest, message, config }),
    });

    // 2) Bestätigungs-E-Mail an den Kunden
    if (email) {
      await transporter.sendMail({
        from: `"NES Energy Group" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Ihre Anfrage bei NES Energy Group",
        html: buildConfirmationEmail({ name, isConfig }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("E-Mail-Fehler:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

function buildNotificationEmail({ name, company, email, phone, interest, message, config }) {
  const td1 = `style="color:#6B675F;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;padding:10px 0;border-bottom:1px solid #EFE9DD"`;
  const td2 = `style="font-size:14px;font-weight:600;color:#0A2540;text-align:right;padding:10px 0;border-bottom:1px solid #EFE9DD"`;
  const rows = [
    company && `<tr><td ${td1}>Unternehmen</td><td ${td2}>${company}</td></tr>`,
    `<tr><td ${td1}>E-Mail</td><td ${td2}>${email}</td></tr>`,
    phone && `<tr><td ${td1}>Telefon</td><td ${td2}>${phone}</td></tr>`,
    interest && `<tr><td ${td1}>Thema</td><td ${td2}>${interest}</td></tr>`,
    config?.technology && `<tr><td ${td1}>Technologie</td><td ${td2}>${config.technology}</td></tr>`,
    config?.application && `<tr><td ${td1}>Anwendung</td><td ${td2}>${config.application}</td></tr>`,
    config?.capacity && `<tr><td ${td1}>Kapazität</td><td ${td2}>${config.capacity} kWh</td></tr>`,
    config?.timeline && `<tr><td ${td1}>Zeitrahmen</td><td ${td2}>${config.timeline}</td></tr>`,
  ].filter(Boolean).join("");

  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:20px;background:#F7F4EE;font-family:Arial,sans-serif"><div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden"><div style="background:#0A2540;padding:32px 36px"><p style="color:#00D4D8;font-size:22px;font-weight:700;margin:0 0 4px">Neue Anfrage</p><p style="color:rgba(247,244,238,0.6);font-size:13px;margin:0">Von: ${name}</p></div><div style="padding:32px 36px"><table style="width:100%;border-collapse:collapse"><tr><td ${td1}>Name</td><td ${td2}>${name}</td></tr>${rows}</table>${message ? `<div style="background:#F7F4EE;border-radius:10px;padding:16px;margin-top:20px;font-size:14px;color:#0A2540;line-height:1.6"><strong>Nachricht:</strong><br><br>${message.replace(/\n/g, "<br>")}</div>` : ""}<a href="mailto:${email}" style="display:inline-block;margin-top:20px;background:#0A2540;color:#F7F4EE;padding:12px 24px;border-radius:50px;text-decoration:none;font-size:14px;font-weight:600">Direkt antworten →</a></div><div style="padding:16px 36px;background:#F7F4EE;font-size:11px;color:#9E9A91">NES Energy Group · Birkenstr. 24, 48531 Nordhorn</div></div></body></html>`;
}

function buildConfirmationEmail({ name, isConfig }) {
  const firstName = name.split(" ")[0];
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:20px;background:#F7F4EE;font-family:Arial,sans-serif"><div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden"><div style="background:#0A2540;padding:32px 36px"><p style="color:#00D4D8;font-size:22px;font-weight:700;margin:0 0 4px">NES Energy Group</p><p style="color:rgba(247,244,238,0.6);font-size:13px;margin:0">Ihre Anfrage ist eingegangen.</p></div><div style="padding:40px 36px"><p style="font-size:18px;font-weight:600;color:#0A2540;margin:0 0 16px">Sehr geehrte/r ${firstName},</p><p style="font-size:15px;color:#4A4842;line-height:1.7;margin:0 0 16px">vielen Dank für Ihre ${isConfig ? "Konfigurator-Anfrage" : "Anfrage"} bei NES Energy Group.</p><p style="font-size:15px;color:#4A4842;line-height:1.7;margin:0 0 16px">Wir haben Ihre Nachricht erhalten und arbeiten bereits an Ihrer Anfrage. Unser Team wird sich persönlich bei Ihnen melden.</p><div style="background:#F7F4EE;border-radius:12px;padding:20px;margin:24px 0;border-left:3px solid #00D4D8"><p style="font-size:13px;color:#0A2540;margin:0;font-weight:600">Ihr direkter Kontakt:</p><p style="font-size:13px;color:#4A4842;margin:6px 0 0">A. Musawar Khawaja — Co-Founder</p><p style="font-size:13px;margin:4px 0 0"><a href="mailto:Musawar.Khawaja@nes-energygroup.com" style="color:#0A2540">Musawar.Khawaja@nes-energygroup.com</a></p></div><p style="font-size:15px;color:#4A4842;line-height:1.7;margin:0">Mit freundlichen Grüßen,<br><strong>NES Energy Group</strong></p></div><div style="padding:16px 36px;background:#F7F4EE;font-size:11px;color:#9E9A91">NES Energy Group · Birkenstr. 24, 48531 Nordhorn · <a href="https://nes-energygroup.netlify.app" style="color:#9E9A91">nes-energygroup.com</a></div></div></body></html>`;
}
