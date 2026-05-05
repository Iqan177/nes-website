# NES Energy Group — Website

## Starten

```cmd
cd C:\Users\Admin\Downloads\nes
npm install
npm run dev
```

Browser: **http://localhost:3000**

---

## E-Mail einrichten (einmalig)

Damit das Kontaktformular echte E-Mails sendet:

1. Im `nes`-Ordner eine neue Datei anlegen: `.env.local`
2. Folgenden Inhalt einfügen (Passwort anpassen):

```
SMTP_HOST=smtp.ionos.de
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@nes-energygroup.com
SMTP_PASS=IhrPasswortHier
```

SMTP_HOST je nach Anbieter: ionos.de → `smtp.ionos.de` · strato.de → `smtp.strato.de` · gmail → `smtp.gmail.com`

3. `npm run dev` neu starten — fertig.

Funktionsweise: Kunde sendet Formular → E-Mail geht an `info@nes-energygroup.com` → Antworten per Klick auf "Antworten" direkt zum Kunden.

---

## Inhalte anpassen: lib/data.js

- Telefonnummern ergänzen (COMPANY.phone, TEAM[1].phone)
- Alle Texte zentral in dieser Datei
