// NES Energy Group — Zentrale Datendatei

export const COMPANY = {
  name: "NES",
  fullName: "NES Energy Group",
  tagline: "Batteriespeicher für Industrie & Energiehandel",
  location: "Nordhorn, Niedersachsen",
  address: "Birkenstr. 24, 48531 Nordhorn",
  country: "Deutschland",
  email: "Musawar.Khawaja@nes-energygroup.com",
  phone: "+49 160 5162245",
  contactEmail: "Musawar.Khawaja@nes-energygroup.com",
  geschaeftsfuehrer: "Attaul-Haleem Ahmad",
  handelsregister: "HRB 221420",
  amtsgericht: "Landgericht Osnabrück",
  ustId: "DE452656013",
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
  cycles: 6500, energyDensity: 170, costSavings: 20, lcos: 90, marketGrowth: 20,
  operatingTempMin: -40, operatingTempMax: 80,
};

// Sodium-Ion Vorteile — korrigiert, keine falschen Aussagen
export const SODIUM_ADVANTAGES = [
  {
    icon: "shield",
    title: "Thermisch stabil",
    titleEn: "Thermally stable",
    description: "Sodium-Ionen-Zellen weisen ein geringeres Risiko für thermisches Durchgehen auf als konventionelle Lithium-Ionen-Systeme.",
    descriptionEn: "Sodium-ion cells have a lower risk of thermal runaway than conventional lithium-ion systems.",
  },
  {
    icon: "leaf",
    title: "Umweltfreundlich",
    titleEn: "Environmentally friendly",
    description: "Ohne Cobalt oder Nickel. Vollständig recyclebar — kein Einsatz kritischer Rohstoffe.",
    descriptionEn: "Without cobalt or nickel. Fully recyclable — no use of critical raw materials.",
  },
  {
    icon: "euro",
    title: "Bis zu 20 % günstiger",
    titleEn: "Up to 20% cheaper",
    description: "Niedrigere Gesamtkosten gegenüber Standard-Lithium-Ionen-Speichern. LCOS unter 90 €/kWh.",
    descriptionEn: "Lower total cost compared to standard lithium-ion storage. LCOS below 90 €/kWh.",
  },
  {
    icon: "thermometer",
    title: "Extreme Temperaturen",
    titleEn: "Extreme temperatures",
    description: "Stabiler Betrieb von −40 °C bis +80 °C — auch in anspruchsvollen Klimazonen.",
    descriptionEn: "Stable operation from −40°C to +80°C — even in demanding climate zones.",
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
    title: "After Sales aus Deutschland",
    titleEn: "After Sales from Germany",
    description: "Persönlicher Service und Kundenbetreuung direkt aus Deutschland — in Ihrer Sprache.",
    descriptionEn: "Personal service and customer support directly from Germany — in your language.",
  },
];

// Lithium-Ion (Lisiner) Vorteile
export const LITHIUM_ADVANTAGES = [
  {
    icon: "bolt",
    title: "Hohe Energiedichte",
    titleEn: "High energy density",
    description: "LFP-Zellen bieten eine der höchsten volumetrischen Energiedichten — ideal für platzkritische Anwendungen.",
    descriptionEn: "LFP cells offer one of the highest volumetric energy densities — ideal for space-critical applications.",
  },
  {
    icon: "loop",
    title: "Bewährte Technologie",
    titleEn: "Proven technology",
    description: "Jahrelang erprobt in industriellen Anwendungen weltweit. Hohe Verfügbarkeit und ausgereifte Lieferketten.",
    descriptionEn: "Proven for years in industrial applications worldwide. High availability and mature supply chains.",
  },
  {
    icon: "shield",
    title: "Smart Energy Management",
    titleEn: "Smart energy management",
    description: "Intelligentes BMS mit Fernüberwachung (SESCLOUD), automatischem Schutz und optimiertem Lademanagement.",
    descriptionEn: "Intelligent BMS with remote monitoring (SESCLOUD), automatic protection and optimised charge management.",
  },
  {
    icon: "cube",
    title: "Modulares Design",
    titleEn: "Modular design",
    description: "Skalierbar von kleinen Gewerbespeichern bis zu Utility-Scale-Anlagen. Flexible AC/DC-Konfiguration.",
    descriptionEn: "Scalable from small commercial storage to utility-scale plants. Flexible AC/DC configuration.",
  },
  {
    icon: "euro",
    title: "Kosteneffizient",
    titleEn: "Cost-efficient",
    description: "Minimale Wandlungsverluste und optimierter Betrieb sorgen für niedrige Betriebskosten über die Lebensdauer.",
    descriptionEn: "Minimal conversion losses and optimised operation ensure low operating costs over the service life.",
  },
  {
    icon: "europe",
    title: "Multi-Energie-Integration",
    titleEn: "Multi-energy integration",
    description: "Unterstützt Solar, Wind, Netz und Notstrom — inkl. Microgrid-Fähigkeit (Lisiner IPower Series).",
    descriptionEn: "Supports solar, wind, grid and emergency power — incl. microgrid capability (Lisiner IPower Series).",
  },
];

export const TECH_ADVANTAGES = SODIUM_ADVANTAGES;

export const SERVICE_STEPS = [
  { step: "01", title: "Beratung & Planung", titleEn: "Consulting & Planning", description: "Bedarfsanalyse, technische Auslegung und Wirtschaftlichkeitsberechnung — kostenfrei und unverbindlich.", descriptionEn: "Needs analysis, technical design and economic calculation — free and non-binding." },
  { step: "02", title: "Konfiguration", titleEn: "Configuration", description: "Maßgeschneiderte Auslegung — Sodium-Ionen oder Lithium-Ionen, je nach Bedarf.", descriptionEn: "Custom design — sodium-ion or lithium-ion, according to your needs." },
  { step: "03", title: "Lieferung & Installation", titleEn: "Delivery & Installation", description: "Schlüsselfertige Lieferung inklusive EPC: Engineering, Procurement, Construction.", descriptionEn: "Turnkey delivery including EPC: Engineering, Procurement, Construction." },
  { step: "04", title: "Betrieb & Service", titleEn: "Operation & Service", description: "Inbetriebnahme, Monitoring und langfristige Wartung — betreut aus Deutschland.", descriptionEn: "Commissioning, monitoring and long-term maintenance — managed from Germany." },
];

export const CONTAINER_PRODUCTS = [
  { id: "nes-c20", name: "NES C20", type: "sodium", capacity: 200, capacityUnit: "kWh", power: 100, application: "Gewerbe & kleine Industrie", applicationEn: "Commerce & small industry", cellType: "Sodium-Ion", cycles: 6500, footprint: "10 ft Container", deliveryWeeks: 16, featured: false },
  { id: "nes-c50", name: "NES C50", type: "sodium", capacity: 500, capacityUnit: "kWh", power: 250, application: "Mittelständische Industrie", applicationEn: "Mid-sized industry", cellType: "Sodium-Ion", cycles: 6500, footprint: "20 ft Container", deliveryWeeks: 18, featured: true },
  { id: "nes-c100", name: "NES C100", type: "sodium", capacity: 1000, capacityUnit: "kWh", power: 500, application: "Großindustrie & Stadtwerke", applicationEn: "Large industry & utilities", cellType: "Sodium-Ion", cycles: 6500, footprint: "40 ft Container", deliveryWeeks: 20, featured: false },
];

export const LITHIUM_PRODUCTS = [
  { id: "lis-lv", name: "Lisiner LV Series", type: "lithium", application: "Gewerbe & Industrie (Niederspannung)", applicationEn: "Commercial & industrial (LV)", cellType: "LFP Lithium-Ion", features: ["Hohe Energieeffizienz", "Modulares Design", "Smart Monitoring (SESCLOUD)"], featuresEn: ["High energy efficiency", "Modular design", "Smart monitoring (SESCLOUD)"], footprint: "Rack / Container", deliveryWeeks: 16, featured: false },
  { id: "lis-mv", name: "Lisiner MV & HV Series", type: "lithium", application: "Utility-Scale & Großspeicher", applicationEn: "Utility-scale & large storage", cellType: "LFP Lithium-Ion", features: ["Utility-Scale", "Multi-Energie-Integration", "SESCLOUD Monitoring"], featuresEn: ["Utility-scale", "Multi-energy integration", "SESCLOUD monitoring"], footprint: "Container / Anlage", deliveryWeeks: 20, featured: true },
  { id: "lis-ibp", name: "Lisiner IBP Series", type: "lithium", application: "Industrielle Notstromversorgung", applicationEn: "Industrial emergency power", cellType: "LFP Lithium-Ion", features: ["Schnelle Reaktionszeit", "AC/DC-Konfiguration", "Microgrid-fähig"], featuresEn: ["Fast response time", "AC/DC configuration", "Microgrid-capable"], footprint: "Rack-System", deliveryWeeks: 14, featured: false },
];

export const CERTIFICATIONS = [
  { code: "ISO 9001", description: "Qualitätsmanagement", descriptionEn: "Quality Management" },
  { code: "UN 38.3", description: "Transportzulassung Batterien", descriptionEn: "Battery Transport Approval" },
  { code: "MSDS", description: "Sicherheitsdatenblatt", descriptionEn: "Safety Data Sheet" },
  { code: "UL 9540A", description: "Brandsicherheit Speichersysteme", descriptionEn: "Fire Safety Storage Systems" },
];

export const APPLICATIONS = [
  { title: "Industrielle Lastspitzenkappung", titleEn: "Industrial peak shaving", description: "Senken Sie hohe Energiekosten durch das Abfangen von Lastspitzen.", descriptionEn: "Reduce high energy costs by intercepting load peaks." },
  { title: "Energiehandel", titleEn: "Energy trading", description: "Nutzen Sie schwankende Strompreise gewinnbringend.", descriptionEn: "Profitably use fluctuating electricity prices." },
  { title: "Erneuerbare-Integration", titleEn: "Renewable integration", description: "Vermeiden Sie Abregelung von Solar- und Windstrom durch flexible Speicherung.", descriptionEn: "Avoid curtailment of solar and wind power through flexible storage." },
  { title: "Notstrom & Backup", titleEn: "Emergency power & backup", description: "Sichere Energieversorgung — auch bei Netzausfall.", descriptionEn: "Reliable energy supply — even during grid outages." },
];

export const CONFIG_OPTIONS = {
  capacities: [
    { value: 200, label: "200 kWh", suitable: "Gewerbe", suitableEn: "Commerce" },
    { value: 500, label: "500 kWh", suitable: "Industrie", suitableEn: "Industry" },
    { value: 1000, label: "1 MWh", suitable: "Großindustrie", suitableEn: "Large industry" },
    { value: 2000, label: "2 MWh", suitable: "Großspeicher", suitableEn: "Large storage" },
    { value: 5000, label: "5 MWh+", suitable: "Energiehandel", suitableEn: "Energy trading" },
  ],
  technologies: [
    { value: "sodium", label: "Sodium-Ionen (NES)", labelEn: "Sodium-ion (NES)" },
    { value: "lithium", label: "Lithium-Ionen (Lisiner)", labelEn: "Lithium-ion (Lisiner)" },
    { value: "beratung", label: "Beratung gewünscht", labelEn: "Consultation desired" },
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

export const TEAM = [
  { name: "Attaul Haleem Ahmad", role: "Founder", email: "Attaul.Haleem@nes-energygroup.com", phone: "+49 160 5162245" },
  { name: "A. Musawar Khawaja", role: "Co-Founder", email: "Musawar.Khawaja@nes-energygroup.com", phone: "" },
  { name: "M. Ahsan Sadiq", role: "Co-Founder", email: "", phone: "" },
  { name: "Patrick Kosek", role: "Co-Founder", email: "", phone: "" },
];
