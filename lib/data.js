// NES — Zentrale Datendatei
// Quellen: NES-SIB Pitch Deck (Dez 2025), Veken Cell Supplier

export const COMPANY = {
  name: "NES",
  fullName: "NES Energy Group",
  tagline: "Sodium-Ionen Batteriespeicher · Made in Germany",
  location: "Nordhorn, Niedersachsen",
  email: "info@nes-energygroup.com",
  phone: "+49 ___ ___",
  // Empfänger-Adresse für alle Kontaktformular-Emails
  contactEmail: "info@nes-energygroup.com",
};

export const NAV_LINKS = [
  { href: "/", label: "Start" },
  { href: "/produkte", label: "Produkte" },
  { href: "/konfigurator", label: "Konfigurator" },
  { href: "/technologie", label: "Technologie" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export const TECH_SPECS = {
  cycles: 6500,
  energyDensity: 170,
  costSavings: 20,
  lcos: 90,
  marketGrowth: 20,
  operatingTempMin: -40,
  operatingTempMax: 80,
};

export const TECH_ADVANTAGES = [
  {
    icon: "shield",
    title: "Inhärent sicher",
    description:
      "Wasserbasierte, nicht entflammbare Sodium-Ionen-Zellen. Kein Brandrisiko, keine teuren Brandschutzsysteme nötig.",
  },
  {
    icon: "leaf",
    title: "Umweltfreundlich",
    description:
      "Ohne Lithium, Cobalt oder Nickel. Vollständig recyclebar — Vision: Net-Zero-Produktion.",
  },
  {
    icon: "euro",
    title: "Bis zu 20 % günstiger",
    description:
      "Niedrigere Gesamtkosten gegenüber Lithium-Ionen-Speichern. LCOS unter 90 €/kWh.",
  },
  {
    icon: "thermometer",
    title: "Extreme Temperaturen",
    description:
      "Stabiler Betrieb von −40 °C bis +80 °C. Auch in arktischen Klimazonen einsatzfähig.",
  },
  {
    icon: "loop",
    title: "Lange Lebensdauer",
    description:
      "Über 6.500 Zyklen Lebensdauer. Über 170 Wh/kg Energiedichte.",
  },
  {
    icon: "europe",
    title: "Europäische Lieferkette",
    description:
      "Robuste, lokale Lieferkette. Unabhängigkeit von kritischen Rohstoffen.",
  },
];

export const SERVICE_STEPS = [
  {
    step: "01",
    title: "Beratung & Planung",
    description:
      "Bedarfsanalyse, technische Auslegung und Wirtschaftlichkeitsberechnung — kostenfrei und unverbindlich.",
  },
  {
    step: "02",
    title: "Konfiguration",
    description:
      "Maßgeschneiderte Auslegung Ihres Container-Speichersystems nach Ihren Anforderungen.",
  },
  {
    step: "03",
    title: "Lieferung & Installation",
    description:
      "Schlüsselfertige Lieferung inklusive EPC: Engineering, Procurement, Construction.",
  },
  {
    step: "04",
    title: "Betrieb & Service",
    description:
      "Inbetriebnahme, Monitoring und langfristige Wartung — alles aus einer Hand.",
  },
];

export const CONTAINER_PRODUCTS = [
  {
    id: "nes-c20",
    name: "NES Container C20",
    capacity: 200,
    capacityUnit: "kWh",
    power: 100,
    application: "Gewerbe & kleine Industrie",
    cellType: "Prismatisch S50",
    cycles: 6500,
    footprint: "10 ft Container",
    deliveryWeeks: 16,
    featured: false,
  },
  {
    id: "nes-c50",
    name: "NES Container C50",
    capacity: 500,
    capacityUnit: "kWh",
    power: 250,
    application: "Mittelständische Industrie",
    cellType: "Prismatisch S170",
    cycles: 6500,
    footprint: "20 ft Container",
    deliveryWeeks: 18,
    featured: true,
  },
  {
    id: "nes-c100",
    name: "NES Container C100",
    capacity: 1000,
    capacityUnit: "kWh",
    power: 500,
    application: "Großindustrie & Stadtwerke",
    cellType: "Prismatisch S170",
    cycles: 6500,
    footprint: "40 ft Container",
    deliveryWeeks: 20,
    featured: false,
  },
  {
    id: "nes-c-modular",
    name: "NES Container Modular",
    capacity: null,
    capacityUnit: "MWh+",
    power: null,
    application: "Großspeicher & Energiehandel",
    cellType: "Prismatisch S170",
    cycles: 6500,
    footprint: "Skalierbar",
    deliveryWeeks: 24,
    featured: false,
  },
];

export const CERTIFICATIONS = [
  { code: "ISO 9001", description: "Qualitätsmanagement" },
  { code: "UN 38.3", description: "Transportzulassung Batterien" },
  { code: "MSDS", description: "Sicherheitsdatenblatt" },
  { code: "UL 9540A", description: "Brandsicherheit Speichersysteme" },
];

export const APPLICATIONS = [
  {
    title: "Industrielle Lastspitzenkappung",
    description:
      "Senken Sie hohe Energiekosten durch das Abfangen von Lastspitzen.",
  },
  {
    title: "Energiehandel",
    description:
      "Nutzen Sie schwankende Strompreise gewinnbringend — kaufen wenn günstig, verkaufen wenn teuer.",
  },
  {
    title: "Erneuerbare-Integration",
    description:
      "Vermeiden Sie Abregelung von Solar- und Windstrom durch flexible Speicherung.",
  },
  {
    title: "Notstrom & Backup",
    description:
      "Sichere Energieversorgung — auch bei Netzausfall durchgehend verfügbar.",
  },
];

export const CONFIG_OPTIONS = {
  capacities: [
    { value: 200, label: "200 kWh", suitable: "Gewerbe" },
    { value: 500, label: "500 kWh", suitable: "Industrie" },
    { value: 1000, label: "1 MWh", suitable: "Großindustrie" },
    { value: 2000, label: "2 MWh", suitable: "Großspeicher" },
    { value: 5000, label: "5 MWh+", suitable: "Energiehandel" },
  ],
  applications: [
    { value: "peak", label: "Lastspitzenkappung" },
    { value: "trading", label: "Energiehandel" },
    { value: "renewables", label: "Erneuerbare-Integration" },
    { value: "backup", label: "Notstromversorgung" },
    { value: "combined", label: "Kombiniert" },
  ],
  timeline: [
    { value: "asap", label: "So schnell wie möglich" },
    { value: "6m", label: "Innerhalb 6 Monaten" },
    { value: "12m", label: "Innerhalb 12 Monaten" },
    { value: "open", label: "Zeitlich flexibel" },
  ],
};

// Team
export const TEAM = [
  {
    name: "Attaul Haleem Ahmad",
    role: "Co-Founder & CEO",
    email: "Attaul.Haleem@nes-energygroup.com",
    phone: "+49 160 5162245",
  },
];
