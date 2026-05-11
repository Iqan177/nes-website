// NES Energy Group — Zentrale Datendatei

export const COMPANY = {
  name: "NES",
  fullName: "NES Energy Group",
  tagline: "Sodium-Ionen Batteriespeicher",
  location: "Nordhorn, Niedersachsen",
  email: "Musawar.Khawaja@nes-energygroup.com",
  phone: "+49 ___ ___",
  contactEmail: "Musawar.Khawaja@nes-energygroup.com",
};

export const NAV_LINKS = [
  { href: "/", label: "Start", labelEn: "Home" },
  { href: "/produkte", label: "Produkte", labelEn: "Products" },
  { href: "/konfigurator", label: "Konfigurator", labelEn: "Configurator" },
  { href: "/technologie", label: "Technologie", labelEn: "Technology" },
  { href: "/flaeche", label: "Fläche vermieten", labelEn: "Lease Land" },
  { href: "/ueber-uns", label: "Über uns", labelEn: "About" },
  { href: "/kontakt", label: "Kontakt", labelEn: "Contact" },
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
    titleEn: "Inherently safe",
    description: "Wasserbasierte, nicht entflammbare Sodium-Ionen-Zellen. Kein Brandrisiko, keine teuren Brandschutzsysteme nötig.",
    descriptionEn: "Water-based, non-flammable sodium-ion cells. No fire risk, no expensive fire suppression systems needed.",
  },
  {
    icon: "leaf",
    title: "Umweltfreundlich",
    titleEn: "Environmentally friendly",
    description: "Ohne Lithium, Cobalt oder Nickel. Vollständig recyclebar — Vision: Net-Zero-Produktion.",
    descriptionEn: "No lithium, cobalt, or nickel. Fully recyclable — vision: Net-Zero production.",
  },
  {
    icon: "euro",
    title: "Bis zu 20 % günstiger",
    titleEn: "Up to 20% cheaper",
    description: "Niedrigere Gesamtkosten gegenüber Lithium-Ionen-Speichern. LCOS unter 90 €/kWh.",
    descriptionEn: "Lower total cost compared to lithium-ion storage. LCOS below 90 €/kWh.",
  },
  {
    icon: "thermometer",
    title: "Extreme Temperaturen",
    titleEn: "Extreme temperatures",
    description: "Stabiler Betrieb von −40 °C bis +80 °C. Auch in arktischen Klimazonen einsatzfähig.",
    descriptionEn: "Stable operation from −40°C to +80°C. Suitable even in arctic climates.",
  },
  {
    icon: "loop",
    title: "Lange Lebensdauer",
    titleEn: "Long service life",
    description: "Über 6.500 Zyklen Lebensdauer. Über 170 Wh/kg Energiedichte.",
    descriptionEn: "Over 6,500 cycle lifetime. Over 170 Wh/kg energy density.",
  },
  {
    icon: "europe",
    title: "After Sales & Kundenbetreuung aus Deutschland",
    titleEn: "After Sales & Customer Support from Germany",
    description: "Persönlicher Service und Kundenbetreuung direkt aus Deutschland — in Ihrer Sprache.",
    descriptionEn: "Personal service and customer support directly from Germany — in your language.",
  },
];

export const SERVICE_STEPS = [
  {
    step: "01",
    title: "Beratung & Planung",
    titleEn: "Consulting & Planning",
    description: "Bedarfsanalyse, technische Auslegung und Wirtschaftlichkeitsberechnung — kostenfrei und unverbindlich.",
    descriptionEn: "Needs analysis, technical design and economic calculation — free and non-binding.",
  },
  {
    step: "02",
    title: "Konfiguration",
    titleEn: "Configuration",
    description: "Maßgeschneiderte Auslegung Ihres Container-Speichersystems nach Ihren Anforderungen.",
    descriptionEn: "Custom design of your container storage system according to your requirements.",
  },
  {
    step: "03",
    title: "Lieferung & Installation",
    titleEn: "Delivery & Installation",
    description: "Schlüsselfertige Lieferung inklusive EPC: Engineering, Procurement, Construction.",
    descriptionEn: "Turnkey delivery including EPC: Engineering, Procurement, Construction.",
  },
  {
    step: "04",
    title: "Betrieb & Service",
    titleEn: "Operation & Service",
    description: "Inbetriebnahme, Monitoring und langfristige Wartung — alles aus einer Hand.",
    descriptionEn: "Commissioning, monitoring and long-term maintenance — everything from a single source.",
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
    applicationEn: "Commerce & small industry",
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
    applicationEn: "Mid-sized industry",
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
    applicationEn: "Large industry & utilities",
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
    applicationEn: "Large storage & energy trading",
    cellType: "Prismatisch S170",
    cycles: 6500,
    footprint: "Skalierbar",
    deliveryWeeks: 24,
    featured: false,
  },
];

export const CERTIFICATIONS = [
  { code: "ISO 9001", description: "Qualitätsmanagement", descriptionEn: "Quality Management" },
  { code: "UN 38.3", description: "Transportzulassung Batterien", descriptionEn: "Battery Transport Approval" },
  { code: "MSDS", description: "Sicherheitsdatenblatt", descriptionEn: "Safety Data Sheet" },
  { code: "UL 9540A", description: "Brandsicherheit Speichersysteme", descriptionEn: "Fire Safety Storage Systems" },
];

export const APPLICATIONS = [
  {
    title: "Industrielle Lastspitzenkappung",
    titleEn: "Industrial peak shaving",
    description: "Senken Sie hohe Energiekosten durch das Abfangen von Lastspitzen.",
    descriptionEn: "Reduce high energy costs by intercepting load peaks.",
  },
  {
    title: "Energiehandel",
    titleEn: "Energy trading",
    description: "Nutzen Sie schwankende Strompreise gewinnbringend — kaufen wenn günstig, verkaufen wenn teuer.",
    descriptionEn: "Profitably use fluctuating electricity prices — buy when cheap, sell when expensive.",
  },
  {
    title: "Erneuerbare-Integration",
    titleEn: "Renewable integration",
    description: "Vermeiden Sie Abregelung von Solar- und Windstrom durch flexible Speicherung.",
    descriptionEn: "Avoid curtailment of solar and wind power through flexible storage.",
  },
  {
    title: "Notstrom & Backup",
    titleEn: "Emergency power & backup",
    description: "Sichere Energieversorgung — auch bei Netzausfall durchgehend verfügbar.",
    descriptionEn: "Reliable energy supply — continuously available even during grid outages.",
  },
];

export const CONFIG_OPTIONS = {
  capacities: [
    { value: 200, label: "200 kWh", suitable: "Gewerbe", suitableEn: "Commerce" },
    { value: 500, label: "500 kWh", suitable: "Industrie", suitableEn: "Industry" },
    { value: 1000, label: "1 MWh", suitable: "Großindustrie", suitableEn: "Large industry" },
    { value: 2000, label: "2 MWh", suitable: "Großspeicher", suitableEn: "Large storage" },
    { value: 5000, label: "5 MWh+", suitable: "Energiehandel", suitableEn: "Energy trading" },
  ],
  applications: [
    { value: "Lastspitzenkappung", label: "Lastspitzenkappung", labelEn: "Peak shaving" },
    { value: "Energiehandel", label: "Energiehandel", labelEn: "Energy trading" },
    { value: "Erneuerbare-Integration", label: "Erneuerbare-Integration", labelEn: "Renewable integration" },
    { value: "Notstromversorgung", label: "Notstromversorgung", labelEn: "Emergency power" },
    { value: "Kombiniert", label: "Kombiniert", labelEn: "Combined" },
  ],
  timeline: [
    { value: "So schnell wie möglich", label: "So schnell wie möglich", labelEn: "As soon as possible" },
    { value: "Innerhalb 6 Monaten", label: "Innerhalb 6 Monaten", labelEn: "Within 6 months" },
    { value: "Innerhalb 12 Monaten", label: "Innerhalb 12 Monaten", labelEn: "Within 12 months" },
    { value: "Zeitlich flexibel", label: "Zeitlich flexibel", labelEn: "Flexible timing" },
  ],
};

// Team — alle CO-FOUNDER außer Attaul der FOUNDER ist
export const TEAM = [
  {
    name: "Attaul Haleem Ahmad",
    role: "Founder",
    email: "Attaul.Haleem@nes-energygroup.com",
    phone: "+49 160 5162245",
  },
  {
    name: "A. Musawar Khawaja",
    role: "Co-Founder",
    email: "Musawar.Khawaja@nes-energygroup.com",
    phone: "",
  },
  {
    name: "M. Ahsan Sadiq",
    role: "Co-Founder",
    email: "",
    phone: "",
  },
  {
    name: "Patrick Kosek",
    role: "Co-Founder",
    email: "",
    phone: "",
  },
];
