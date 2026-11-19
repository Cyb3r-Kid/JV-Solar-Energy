export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  address: {
    line1: string;
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmarkNote: string;
  };
  metrics: {
    experienceYears: string;
    deployedCapacityMWp: string;
    projectSitesCount: string;
    disclaimer: string;
  };
  workingHours: string;
  whatsappNumber: string;
  social: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
}

export const COMPANY_CONFIG: CompanyInfo = {
  name: "JV Solar Energy Pvt Ltd",
  shortName: "JV Solar",
  tagline: "Engineering Smarter Solar Solutions for a Sustainable Tomorrow",
  heroHeadline: "Powering Progress.\nOne Sun at a Time.",
  heroSubheadline: "Engineering smarter solar solutions for industries, businesses and communities. From rooftop installations to large-scale solar power plants, we turn clean energy ambitions into reality.",
  phonePrimary: "+91 9840571770",
  phoneSecondary: "+91 9840561770",
  email: "jv.solarenergy@gmail.com",
  address: {
    line1: "No. 1/149, Ground Floor",
    street: "Pazhandi Amman Kovil Street, Thalambur Road",
    area: "Navalur (Near Ponmar / Polachery)",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600130",
    landmarkNote: "Company records also reference operations in Ponmar / Polachery area, Chennai."
  },
  metrics: {
    experienceYears: "9+",
    deployedCapacityMWp: "60+",
    projectSitesCount: "30+",
    disclaimer: "Figures reflect company-reported operational records and cumulative installations across sites."
  },
  workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM IST",
  whatsappNumber: "919840571770",
  social: {
    linkedin: "https://linkedin.com/company/jv-solar-energy",
  }
};

export interface ProjectData {
  id: string;
  name: string;
  client: string;
  location: string;
  capacity: string;
  capacityKW: number;
  category: 'Rooftop Solar' | 'Ground Mounted' | 'Industrial' | 'Solar Water Pump';
  scope: string;
  executionPeriod?: string;
  description: string;
  featured: boolean;
  image: string;
  isIllustrativeVisual: boolean;
  technicalHighlights: string[];
}

export const PROJECTS_CONFIG: ProjectData[] = [
  {
    id: "ti-cycle-india",
    name: "TI Cycle India Rooftop Solar Plant",
    client: "TI Cycle India",
    location: "Chennai, Tamil Nadu",
    capacity: "200 KW",
    capacityKW: 200,
    category: "Industrial",
    scope: "Engineering, Procurement, Structural Analysis, Rooftop PV Installation, Grid Synchronization",
    description: "High-performance industrial rooftop solar installation engineered for TI Cycle India's manufacturing facility in Chennai, optimizing captive day-time power consumption and lowering operating overheads.",
    featured: true,
    image: "/assets/images/industrial-rooftop.jpg",
    isIllustrativeVisual: true,
    technicalHighlights: [
      "Custom non-penetrative roof mounting clamps",
      "High-efficiency monocrystalline solar modules",
      "Industrial SCADA and inverter remote monitoring integration"
    ]
  },
  {
    id: "aruppukottai-18mw",
    name: "Aruppukottai Utility Solar Power Plant",
    client: "Solar Power Plant Investor & IPP",
    location: "Aruppukottai, Virudhunagar, Tamil Nadu",
    capacity: "18 MW",
    capacityKW: 18000,
    category: "Ground Mounted",
    scope: "Complete Utility EPC: Civil Works, Tracker / Fixed Tilt Substructures, HT Switchyard, Substation Interconnection",
    description: "Major 18 MW ground-mounted utility-scale solar generation facility at Aruppukottai, engineered for superior generation yield and grid stability under Southern Tamil Nadu's high-solar irradiance conditions.",
    featured: true,
    image: "/assets/images/ground-mounted.jpg",
    isIllustrativeVisual: true,
    technicalHighlights: [
      "High-voltage central inverter stations and step-up transformers",
      "Optimized pitch distance to minimize inter-row shadowing",
      "Comprehensive lightning and surge protection grid network"
    ]
  },
  {
    id: "karur-5mw",
    name: "Karur Ground Mounted Solar Plant",
    client: "Commercial & Industrial Consortia",
    location: "Karur, Tamil Nadu",
    capacity: "5 MW",
    capacityKW: 5000,
    category: "Ground Mounted",
    scope: "Site Grading, Foundation Works, PV Array Deployment, HT Evacuation Line & SCADA Telemetry",
    description: "A 5 MW grid-tied ground mounted solar facility delivering green energy into the regional transmission network, engineered with robust civil foundations and durable anti-corrosion galvanized structures.",
    featured: true,
    image: "/assets/images/hero-solar-farm.jpg",
    isIllustrativeVisual: true,
    technicalHighlights: [
      "Hot-dip galvanized steel mounting structures with 140 km/h wind rating",
      "String-level fault detection and real-time generation monitoring",
      "Environmental and soil compatibility engineering"
    ]
  },
  {
    id: "tvs-brake-india-18mw",
    name: "TVS Brake India Clean Energy Project",
    client: "TVS Brake India",
    location: "Tirunelveli, Tamil Nadu",
    capacity: "18 MW",
    capacityKW: 18000,
    category: "Industrial",
    scope: "Turnkey EPC: Feasibility, Land Topography, High-Tension Transmission, Substation Integration",
    description: "Large-scale 18 MW dedicated solar project supplying clean power to TVS Brake India's industrial operations, contributing significantly to their industrial decarbonization and clean energy procurement roadmap.",
    featured: true,
    image: "/assets/images/ground-mounted.jpg",
    isIllustrativeVisual: true,
    technicalHighlights: [
      "High-tension power evacuation at dedicated feeder bay",
      "Tier-1 bifacial photovoltaic modules with high albedo gain",
      "Automated robotic / dry-cleaning maintenance infrastructure compatibility"
    ]
  },
  {
    id: "dindigul-15mw",
    name: "Dindigul Regional Solar Power Plant",
    client: "Solar Energy IPP",
    location: "Dindigul, Tamil Nadu",
    capacity: "15 MW",
    capacityKW: 15000,
    category: "Ground Mounted",
    scope: "Engineering Design, Module Procurement, String Inverter Arrays, Testing & Commissioning",
    description: "15 MW ground mounted solar power generation facility in Dindigul region providing reliable renewable power generation with stringent power quality adherence and remote operations analytics.",
    featured: true,
    image: "/assets/images/hero-solar-farm.jpg",
    isIllustrativeVisual: true,
    technicalHighlights: [
      "Optimized string inverter topology for maximum uptime",
      "Continuous insolation monitoring weather stations (pyranometers)",
      "Strict compliance with CEIG and grid interconnection protocols"
    ]
  },
  {
    id: "cmc-vellore-250kw",
    name: "CMC Vellore Institutional Rooftop Solar",
    client: "Christian Medical College (CMC)",
    location: "Vellore, Tamil Nadu",
    capacity: "250 KW",
    capacityKW: 250,
    category: "Rooftop Solar",
    scope: "Institutional Rooftop PV Engineering, Zero-Export & Synchronization Relays, Safety Compliance",
    description: "250 KW institutional solar rooftop plant deployed across hospital buildings at CMC Vellore, lowering medical center daytime operating electricity costs with zero interruption to sensitive medical facilities.",
    featured: true,
    image: "/assets/images/industrial-rooftop.jpg",
    isIllustrativeVisual: true,
    technicalHighlights: [
      "Hospital-grade zero electromagnetic interference inverters",
      "Advanced zero-export protection and seamless DG synchronizer integration",
      "Fire safety rated walk-ways and lifeline safety barriers"
    ]
  },
  {
    id: "amway-dindigul-750kw",
    name: "Amway Manufacturing Facility Solar Rooftop",
    client: "Amway India",
    location: "Dindigul, Tamil Nadu",
    capacity: "750 KW",
    capacityKW: 750,
    category: "Industrial",
    scope: "Industrial Rooftop EPC, Penetration-Free Fastening, String Inverters, Real-time Dashboard",
    description: "750 KW high-efficiency rooftop solar installation for Amway's state-of-the-art manufacturing campus in Dindigul, supporting clean industrial production standards with minimal structural roof stress.",
    featured: true,
    image: "/assets/images/industrial-rooftop.jpg",
    isIllustrativeVisual: true,
    technicalHighlights: [
      "Lightweight aerodynamic mounting frames tailored for industrial standing-seam sheet",
      "Smart monitoring with temperature and irradiance compensation",
      "Harmonics filtering compliant with IEEE 519 standards"
    ]
  },
  {
    id: "hospet-15mw",
    name: "Hospet Industrial Solar Power Plant",
    client: "Industrial Consortium",
    location: "Hospet, Karnataka",
    capacity: "15 MW",
    capacityKW: 15000,
    category: "Ground Mounted",
    scope: "EPC Execution, Soil Testing, Transformer Yard, Grid Tie-In, Multi-year O&M Setup",
    description: "15 MW utility-grade solar power installation in the Hospet industrial belt supplying reliable renewable energy, built to endure harsh industrial environments and heavy dust loads.",
    featured: true,
    image: "/assets/images/ground-mounted.jpg",
    isIllustrativeVisual: true,
    technicalHighlights: [
      "Heavy-duty anti-soiling coated solar modules",
      "Multi-mppt decentralized string architecture",
      "Dedicated HT switchgear and safety earthing mesh"
    ]
  }
];

export interface ServiceData {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  iconName: string;
  image: string;
  suitableFor: string[];
  features: string[];
  specifications: { label: string; value: string }[];
}

export const SERVICES_CONFIG: ServiceData[] = [
  {
    id: "rooftop-solar",
    title: "Rooftop Solar Solutions",
    category: "Commercial, Industrial & Residential",
    shortDesc: "Intelligent rooftop solar systems for commercial premises, residential properties, hospitals, and educational institutions.",
    fullDesc: "JV Solar Energy designs and installs bespoke rooftop solar photovoltaic systems that transform underutilized roof space into captive clean energy power plants. We handle structural weight load analysis, shadow modeling, high-efficiency module placement, and seamless integration with existing building power distribution panels.",
    iconName: "Home",
    image: "/assets/images/residential-rooftop.jpg",
    suitableFor: [
      "Commercial Buildings & Tech Parks",
      "Hospitals & Healthcare Facilities",
      "Educational Campuses & Universities",
      "Residential Villas & Gated Communities",
      "Warehouses & Logistics Sheds"
    ],
    features: [
      "Advanced 3D shadow analysis and structural roof integrity audit",
      "Tier-1 Mono PERC / TOPCon bifacial high-efficiency modules",
      "Smart bidirectional net metering and DG synchronization",
      "Remote performance telemetry accessible via mobile and web"
    ],
    specifications: [
      { label: "Capacity Range", value: "3 KW to 1000+ KW" },
      { label: "Mounting Style", value: "Non-penetrative ballast / elevated / trapezoidal clamps" },
      { label: "Grid Interface", value: "On-grid / Hybrid with zero-export protection" },
      { label: "Monitoring", value: "Cloud-connected IoT gateway" }
    ]
  },
  {
    id: "industrial-solar-epc",
    title: "Industrial Solar EPC",
    category: "Factories, Mills & Heavy Manufacturing",
    shortDesc: "End-to-end solar engineering, procurement, and turnkey project execution for manufacturing plants and industrial facilities.",
    fullDesc: "Designed for intensive energy consumers such as automotive plants, textile mills, cement facilities, and steel fabrication units. Our turnkey EPC service covers full site feasibility, civil and electrical design, Tier-1 equipment procurement, HT line evacuation, CEIG safety clearances, and precision commissioning.",
    iconName: "Factory",
    image: "/assets/images/industrial-rooftop.jpg",
    suitableFor: [
      "Heavy Manufacturing Plants",
      "Automotive & Engineering Units",
      "Textile & Garment Clusters",
      "Food Processing & Cold Storage Facilities",
      "Chemical & Pharmaceutical Factories"
    ],
    features: [
      "Tailored captive and group-captive power generation models",
      "High Tension (11KV / 22KV / 33KV) grid evacuation expertise",
      "Harmonic suppression and reactive power compensation",
      "Statutory approvals, CEIG clearances, and DISCOM liaison"
    ],
    specifications: [
      { label: "Capacity Scale", value: "500 KW to 50+ MW" },
      { label: "Inverter Tech", value: "High-power multi-MPPT industrial string inverters" },
      { label: "Standard Compliance", value: "CEA & State DISCOM grid interconnection regulations" },
      { label: "Turnkey Scope", value: "Engineering, Procurement, Construction & Testing" }
    ]
  },
  {
    id: "ground-mounted-plants",
    title: "Ground Mounted Solar Plants",
    category: "Utility Scale & Open Access Projects",
    shortDesc: "Large-scale ground-mounted solar infrastructure and utility-grade power generation projects for open access power buyers and IPPs.",
    fullDesc: "From multi-acre topography surveys and geotechnical pile testing to central inverter substation engineering and high-voltage power transmission, JV Solar brings extensive project execution capability across Tamil Nadu and South India.",
    iconName: "Sun",
    image: "/assets/images/ground-mounted.jpg",
    suitableFor: [
      "Independent Power Producers (IPPs)",
      "Open Access Corporate Power Buyers",
      "Industrial Consortia & Solar Parks",
      "Agricultural Land Developers"
    ],
    features: [
      "Automated ramming and pile foundation technology",
      "Wind load resilience tested up to 150 km/h structures",
      "Centralized transformer stations and switchyard infrastructure",
      "SCADA control rooms with high-frequency pyranometer weather stations"
    ],
    specifications: [
      { label: "Project Scale", value: "1 MW to 50+ MWp" },
      { label: "Substructure", value: "Hot-dip galvanized / PosMAC steel fixed-tilt & tracker ready" },
      { label: "Evacuation", value: "33KV, 66KV, 110KV Grid Substations" },
      { label: "Performance Ratio", value: "Engineered for 78% – 82% PR under standard test conditions" }
    ]
  },
  {
    id: "solar-water-pumps",
    title: "Solar Water Pump Systems",
    category: "Agriculture, Irrigation & Rural Water Supply",
    shortDesc: "Solar-powered water pumping solutions for agricultural irrigation, horticulture, community water supply, and remote estates.",
    fullDesc: "Empowering agricultural operations and rural water infrastructure with direct solar-powered pumping. Our solutions eliminate dependence on unreliable rural grid power and diesel fuel, delivering steady water discharge directly from borewells, rivers, and canals.",
    iconName: "Droplets",
    image: "/assets/images/solar-water-pump.jpg",
    suitableFor: [
      "Farming Estates & Agricultural Land",
      "Drip and Sprinkler Irrigation Setups",
      "Poultry and Dairy Farm Operations",
      "Rural Water Supply & Remote Communities",
      "Commercial Horticultural Nurseries"
    ],
    features: [
      "High-efficiency Variable Frequency Drive (VFD) solar controllers",
      "Automatic dry-run protection and tank overflow cut-offs",
      "Direct pump operation from dawn to dusk without batteries",
      "Heavy-duty submersible and surface pump configurations"
    ],
    specifications: [
      { label: "Pump Capacity", value: "3 HP, 5 HP, 7.5 HP, 10 HP to 25 HP" },
      { label: "Pump Types", value: "Submersible Borewell / Monoblock Surface / Solar Openwell" },
      { label: "Head Range", value: "10 meters to 250+ meters" },
      { label: "Controller", value: "MPPT Solar Pump VFD Controller with IP65 enclosure" }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    shortDesc: "Energy Demand Analysis",
    description: "We review your historical energy consumption, monthly utility bills, peak load requirements, and physical site parameters to map initial feasibility and project objectives.",
    icon: "ClipboardCheck"
  },
  {
    number: "02",
    title: "Site Assessment & Survey",
    shortDesc: "Topography & Shadow Modeling",
    description: "Our engineering team conducts on-site 3D drone mapping, structural load tests, roof integrity audits, and solar irradiance shadow modeling to verify site conditions.",
    icon: "Compass"
  },
  {
    number: "03",
    title: "Engineering & Design",
    shortDesc: "Custom CAD & Electrical Layouts",
    description: "We prepare detailed civil and electrical layout drawings, single-line diagrams (SLD), string configuration maps, and generation simulations adhering to statutory safety codes.",
    icon: "DraftingCompass"
  },
  {
    number: "04",
    title: "Procurement & Planning",
    shortDesc: "Tier-1 Component Sourcing",
    description: "We procure Tier-1 photovoltaic modules, certified inverters, galvanized mounting structures, and industrial switchgear with rigorous factory quality inspection.",
    icon: "ShieldCheck"
  },
  {
    number: "05",
    title: "Installation & Execution",
    shortDesc: "Precision Turnkey Construction",
    description: "Experienced solar EPC engineers execute mechanical assembly, structural fastening, electrical cabling, transformer placement, and lightning protection systems.",
    icon: "Wrench"
  },
  {
    number: "06",
    title: "Testing & Commissioning",
    shortDesc: "Grid Sync & Performance Audit",
    description: "Comprehensive insulation resistance, earth pit testing, DISCOM inspection, CEIG approvals, bidirectional meter installation, and cloud telemetry activation.",
    icon: "Zap"
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Engineering-Led Approach",
    description: "Every solar system is planned with detailed electrical load modeling, 3D shadow analysis, and structural integrity calculations by specialized solar engineers.",
    icon: "Cpu"
  },
  {
    title: "End-to-End EPC Execution",
    description: "Complete single-point accountability: from initial feasibility and statutory DISCOM liaison to procurement, turnkey installation, and post-commissioning support.",
    icon: "Layers"
  },
  {
    title: "Residential to Industrial Scale",
    description: "Demonstrated portfolio handling both 200 KW – 750 KW rooftop projects for marquee clients and large 5 MW – 18 MW ground-mounted utility solar plants.",
    icon: "Maximize"
  },
  {
    title: "Quality-Focused Implementation",
    description: "Zero compromise on components. We deploy Tier-1 modules, certified inverters, anti-corrosive galvanized mounting structures, and safety switchgear.",
    icon: "CheckCircle2"
  },
  {
    title: "Sustainable Energy Commitment",
    description: "Deeply committed to driving India's clean energy transition, helping industrial and commercial partners measurably reduce carbon footprint and grid costs.",
    icon: "Leaf"
  },
  {
    title: "Customer-Centric Project Support",
    description: "Dedicated project managers ensure clear communication, scheduled milestones, transparent documentation, and ongoing operational maintenance guidance.",
    icon: "Headphones"
  }
];
