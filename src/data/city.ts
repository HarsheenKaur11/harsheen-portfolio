export interface CityBuilding {
  id: string;
  name: string;
  subtitle: string;
  district: string;
  districtId: string;
  districtColor: string;
  type: "home" | "project" | "career" | "academic" | "honors" | "contact";
  projectSlug?: string;
  route: string;
  description: string;
  architecturalStyle: string;
  facadeDetails: string;
  techPreview: string[];
  badge?: string;
  // Isometric map position (grid unit coordinates in a 1200 x 860 isometric scene)
  gridPos: {
    isoX: number; // Center X on isometric plane
    isoY: number; // Center Y on isometric plane
    width: number;
    depth: number;
    height: number;
  };
  palette: {
    wallMain: string;
    wallShadow: string;
    roof: string;
    roofShadow: string;
    trim: string;
    windowGlow: string;
    accent: string;
  };
  roofStyle:
    | "comfort-cottage"
    | "classical-pediment"
    | "glass-skyscraper"
    | "media-studio"
    | "botanical-greenhouse"
    | "market-awnings"
    | "civic-support"
    | "event-atrium"
    | "brick-academy"
    | "collegiate-dome"
    | "museum-rotunda"
    | "town-gazebo";
  iconName: string;
  statLabel: string;
  statValue: string;
}

export interface CityDistrict {
  id: string;
  name: string;
  theme: string;
  description: string;
  color: string;
  accentBg: string;
  buildingIds: string[];
  ambientDetails: string[];
}

export const cityDistricts: CityDistrict[] = [
  {
    id: "residential-sanctuary",
    name: "Residential & Sanctuary",
    theme: "Cozy Storybook Living & Creative Life",
    description: "Tree-lined cobblestone lanes featuring My Comfort Home, peaceful gardens, flower beds, and the central community gazebo.",
    color: "#E11D48", // Rose Coral
    accentBg: "rgba(225, 29, 72, 0.15)",
    buildingIds: ["comfort-home", "city-connect"],
    ambientDetails: ["Flower boxes", "Stone chimney smoke", "Picket fence", "Mailbox", "Park gazebo"],
  },
  {
    id: "media-intelligence",
    name: "Media & Intelligence District",
    theme: "AI Fact Verification & Predictive Markets",
    description: "The intellectual core where automated LSTM credibility models meet neoclassical quantitative equity research.",
    color: "#8B5CF6", // Violet
    accentBg: "rgba(139, 92, 246, 0.15)",
    buildingIds: ["media-house", "central-bank"],
    ambientDetails: ["Broadcast antenna", "Live news ticker", "Stone colonnade", "Market indicators"],
  },
  {
    id: "civic-care",
    name: "Civic & Care District",
    theme: "Empathetic Technology & Elder Accessibility",
    description: "Warm, welcoming community pavilion designed with gentle sloping roofs, double doors, accessibility ramps, and rose gardens.",
    color: "#EC4899", // Warm Pink
    accentBg: "rgba(236, 72, 153, 0.15)",
    buildingIds: ["community-care"],
    ambientDetails: ["Accessibility ramp", "Double arched doors", "Rose gardens", "Warm glowing lanterns"],
  },
  {
    id: "commerce-culture",
    name: "Commerce & Culture District",
    theme: "Nighttime Marketplaces & Celebration Atriums",
    description: "Lively nighttime shopping and grand celebrations, featuring striped boutique awnings and fairy-lit glass atriums.",
    color: "#F59E0B", // Warm Amber
    accentBg: "rgba(245, 158, 11, 0.15)",
    buildingIds: ["marketplace", "events-centre"],
    ambientDetails: ["Striped canvas awnings", "Warm showcase windows", "Fairy lights", "Champagne glass canopy"],
  },
  {
    id: "innovation-academy",
    name: "Innovation & Academy Heights",
    theme: "Gamified Education & AgriTech Research",
    description: "Red-brick collegiate escape chambers and Victorian botanical glass conservatories safeguarding farmer crop yields.",
    color: "#10B981", // Emerald
    accentBg: "rgba(16, 185, 129, 0.15)",
    buildingIds: ["school-academy", "agritech-centre"],
    ambientDetails: ["Academy clock tower", "Greenhouse glass arches", "Raised soil crop beds", "Weather sensors"],
  },
  {
    id: "corporate-financial",
    name: "Financial & Corporate Centre",
    theme: "Enterprise Data Operations & Academic Honors",
    description: "The modern corporate skyline of NielsenIQ, the neoclassical Hall of Fame, and the grand copper dome of Guru Nanak Dev University.",
    color: "#3B82F6", // Cobalt Blue
    accentBg: "rgba(59, 130, 246, 0.15)",
    buildingIds: ["niq-tower", "university-campus", "hall-of-fame"],
    ambientDetails: ["Executive helipad", "Sky terraces", "Copper collegiate dome", "Hall of Fame rotunda"],
  },
];

export const cityBuildings: CityBuilding[] = [
  // 1. MY COMFORT HOME (Centerpiece storybook cottage)
  {
    id: "comfort-home",
    name: "My Comfort Home",
    subtitle: "Harsheen's Personal Sanctuary & 6 Interactive Windows",
    district: "Residential & Sanctuary",
    districtId: "residential-sanctuary",
    districtColor: "#E11D48",
    type: "home",
    route: "/world#comfort-home",
    description: "A warm, charming two-storey storybook cottage with sloping terracotta roof, chimney smoke, front porch, mailbox, and six clickable illuminated windows opening into books, creative writing, music, travel, design, and curiosities.",
    architecturalStyle: "Two-Storey Storybook English Cottage",
    facadeDetails: "Sloping terracotta shingle roof, stone chimney with smoke puffs, front porch with wooden railings, flower boxes, picket fence, and 6 glowing windows.",
    techPreview: ["The Bookshelf", "The Writer's Nook", "The Listening Room", "Explorer's Window", "Creative Studio", "Curiosity Lab"],
    badge: "6 Interactive Windows",
    gridPos: { isoX: 340, isoY: 310, width: 140, depth: 120, height: 130 },
    palette: {
      wallMain: "#FFFBEB", // Warm Cream
      wallShadow: "#FDE68A",
      roof: "#DC2626", // Terracotta Red
      roofShadow: "#991B1B",
      trim: "#78350F", // Warm Timber
      windowGlow: "#FEF08A",
      accent: "#E11D48",
    },
    roofStyle: "comfort-cottage",
    iconName: "Home",
    statLabel: "Sanctuary",
    statValue: "6 Cozy Rooms",
  },

  // 2. FACTSHIELD MEDIA HOUSE
  {
    id: "media-house",
    name: "FactShield Media House",
    subtitle: "AI Fake News & Multimodal Intelligence Bureau",
    district: "Media & Intelligence District",
    districtId: "media-intelligence",
    districtColor: "#8B5CF6",
    type: "project",
    projectSlug: "factshield",
    route: "/projects/factshield",
    description: "Industrial brick news bureau with multi-pane studio windows, rooftop transmission dish, and dual-engine LSTM/ResNet18 verification labs.",
    architecturalStyle: "Contemporary Brick & Industrial Studio Bureau",
    facadeDetails: "Industrial warehouse multi-pane glass, broadcast transmission mast with flashing red beacon, and live news ticker band.",
    techPreview: ["Python", "Flask", "LSTM", "ResNet18", "NewsAPI", "Google Trends"],
    badge: "85% Accuracy",
    gridPos: { isoX: 560, isoY: 200, width: 130, depth: 110, height: 140 },
    palette: {
      wallMain: "#E0E7FF",
      wallShadow: "#C7D2FE",
      roof: "#4F46E5",
      roofShadow: "#3730A3",
      trim: "#312E81",
      windowGlow: "#FEF08A",
      accent: "#8B5CF6",
    },
    roofStyle: "media-studio",
    iconName: "Radio",
    statLabel: "Verification",
    statValue: "85% Accuracy",
  },

  // 3. STOCKMINDS FINANCIAL RESEARCH
  {
    id: "central-bank",
    name: "StockMinds Financial Research",
    subtitle: "Machine Learning Market Direction & Equity Exchange",
    district: "Media & Intelligence District",
    districtId: "media-intelligence",
    districtColor: "#8B5CF6",
    type: "project",
    projectSlug: "stockminds",
    route: "/projects/stockminds",
    description: "Neoclassical financial research house with fluted columns, classical pediment, wide stone steps, and rolling Random Forest NIFTY equity prediction charts.",
    architecturalStyle: "Neoclassical Financial House with Stone Colonnade",
    facadeDetails: "Fluted Greco-Roman columns, classical triangular pediment, stone staircase, and bronze double doors.",
    techPreview: ["Random Forest", "yFinance", "Pandas", "Matplotlib", "Scikit-learn"],
    badge: "78% Directional",
    gridPos: { isoX: 740, isoY: 180, width: 140, depth: 120, height: 135 },
    palette: {
      wallMain: "#ECFDF5",
      wallShadow: "#D1FAE5",
      roof: "#059669",
      roofShadow: "#065F46",
      trim: "#047857",
      windowGlow: "#FEF08A",
      accent: "#10B981",
    },
    roofStyle: "classical-pediment",
    iconName: "TrendingUp",
    statLabel: "Equities Monitored",
    statValue: "15+ NIFTY",
  },

  // 4. NIQ CORPORATE TOWER
  {
    id: "niq-tower",
    name: "NIQ Corporate Tower",
    subtitle: "Data Operations, MDQC Leadership & Thumbs Up Award",
    district: "Financial & Corporate Centre",
    districtId: "corporate-financial",
    districtColor: "#3B82F6",
    type: "career",
    route: "/experience",
    description: "Stepped corporate headquarters with deep indigo curtain walls, executive rooftop terrace garden, and illuminated helipad crown.",
    architecturalStyle: "Stepped Modern Corporate Headquarters with Sky Terrace",
    facadeDetails: "Geometric glass curtain-walls, illuminated executive helipad on the crown, and green rooftop terrace gardens.",
    techPreview: ["MDQC", "Excel PivotTables", "Data Quality", "SLA Management"],
    badge: "Thumbs Up Award",
    gridPos: { isoX: 930, isoY: 250, width: 130, depth: 120, height: 175 },
    palette: {
      wallMain: "#EFF6FF",
      wallShadow: "#DBEAFE",
      roof: "#1D4ED8",
      roofShadow: "#1E40AF",
      trim: "#172554",
      windowGlow: "#BAE6FD",
      accent: "#3B82F6",
    },
    roofStyle: "glass-skyscraper",
    iconName: "Building2",
    statLabel: "Sector Ownership",
    statValue: "End-to-End",
  },

  // 5. CITY CONNECT CENTRE (Town Gazebo & Telegraph)
  {
    id: "city-connect",
    name: "City Connect Centre",
    subtitle: "Official Resume, LinkedIn, GitHub & Direct Inquiries",
    district: "Residential & Sanctuary",
    districtId: "residential-sanctuary",
    districtColor: "#E11D48",
    type: "contact",
    route: "/contact",
    description: "Charming octagonal park gazebo with weather vane, open balustrades, community noticeboard, and direct links to connect with Harsheen.",
    architecturalStyle: "Octagonal Storybook Park Gazebo & Telegraph",
    facadeDetails: "Octagonal pointed copper roof, brass weather vane, open wooden balustrades, and illuminated message lantern.",
    techPreview: ["Email", "LinkedIn", "GitHub", "PDF Resume", "Next.js Form"],
    badge: "Direct Contact",
    gridPos: { isoX: 200, isoY: 420, width: 110, depth: 100, height: 105 },
    palette: {
      wallMain: "#CCFBF1",
      wallShadow: "#99F6E4",
      roof: "#0D9488",
      roofShadow: "#0F766E",
      trim: "#115E59",
      windowGlow: "#FEF08A",
      accent: "#14B8A6",
    },
    roofStyle: "town-gazebo",
    iconName: "Send",
    statLabel: "Response SLA",
    statValue: "< 24 Hours",
  },

  // 6. PLANORA AI EVENTS & CONVENTION CENTRE
  {
    id: "events-centre",
    name: "Planora AI Convention Centre",
    subtitle: "Intelligent Generative Celebration & Event Suite",
    district: "Commerce & Culture District",
    districtId: "commerce-culture",
    districtColor: "#F59E0B",
    type: "project",
    projectSlug: "planora-ai",
    route: "/projects/planora-ai",
    description: "Celebration glass atrium pavilion featuring festive lighting, tiered glass balconies, and automated AI event orchestration.",
    architecturalStyle: "Grand Celebration Glass Pavilion with Fairy Lights",
    facadeDetails: "Tiered glass canopy, champagne-gold structural pillars, string festoon lights, and wide grand entrance.",
    techPreview: ["Next.js 14", "Gemini API", "Prisma ORM", "Recharts", "Zod"],
    badge: "Production Live",
    gridPos: { isoX: 970, isoY: 420, width: 145, depth: 125, height: 145 },
    palette: {
      wallMain: "#FAF5FF",
      wallShadow: "#F3E8FF",
      roof: "#9333EA",
      roofShadow: "#6B21A8",
      trim: "#D4AF37",
      windowGlow: "#FEF08A",
      accent: "#F59E0B",
    },
    roofStyle: "event-atrium",
    iconName: "Sparkles",
    statLabel: "Deployment",
    statValue: "Live on Vercel",
  },

  // 7. THE ELEVENTH HOUR MARKETPLACE
  {
    id: "marketplace",
    name: "The Eleventh Hour Marketplace",
    subtitle: "Curated E-Commerce Boutique & Artisan Storefront",
    district: "Commerce & Culture District",
    districtId: "commerce-culture",
    districtColor: "#F59E0B",
    type: "project",
    projectSlug: "the-eleventh-hour",
    route: "/projects/the-eleventh-hour",
    description: "Charming nighttime storefront with warm glowing multi-pane showcase windows, striped canvas awnings, and overflowing potted plants.",
    architecturalStyle: "Charming Cozy Nighttime Storefront & Bakery",
    facadeDetails: "Deep green wooden storefront, striped orange-and-cream awnings, glowing showcase vitrine, and hanging potted ivy.",
    techPreview: ["React", "JavaScript", "Responsive Design", "Cart System"],
    badge: "E-Commerce",
    gridPos: { isoX: 820, isoY: 490, width: 130, depth: 115, height: 120 },
    palette: {
      wallMain: "#FFF7ED",
      wallShadow: "#FFEDD5",
      roof: "#EA580C",
      roofShadow: "#9A3412",
      trim: "#7C2D12",
      windowGlow: "#FEF08A",
      accent: "#F97316",
    },
    roofStyle: "market-awnings",
    iconName: "ShoppingBag",
    statLabel: "Shopping Experience",
    statValue: "Full Cart & Checkout",
  },

  // 8. SENIORSAATHI COMMUNITY CARE CENTRE
  {
    id: "community-care",
    name: "SeniorSaathi Care Hub",
    subtitle: "AI-Powered Companion & Elder Accessibility Hub",
    district: "Civic & Care District",
    districtId: "civic-care",
    districtColor: "#EC4899",
    type: "project",
    projectSlug: "seniorsaathi",
    route: "/projects/seniorsaathi",
    description: "Welcoming community pavilion designed with gentle sloping roofs, double doors, accessibility ramps, and blooming rose gardens.",
    architecturalStyle: "Warm Civic Care Pavilion with Accessible Entrances",
    facadeDetails: "Double wooden doors, welcoming portico, soft peach facade, accessibility ramp, and blooming rose bushes.",
    techPreview: ["Next.js", "TypeScript", "Gemini API", "Web Speech API", "Tailwind CSS"],
    badge: "GitHub Verified",
    gridPos: { isoX: 620, isoY: 570, width: 135, depth: 115, height: 115 },
    palette: {
      wallMain: "#FCE7F3",
      wallShadow: "#FBCFE8",
      roof: "#DB2777",
      roofShadow: "#9D174D",
      trim: "#831843",
      windowGlow: "#FEF08A",
      accent: "#EC4899",
    },
    roofStyle: "civic-support",
    iconName: "HeartHandshake",
    statLabel: "Target Group",
    statValue: "Seniors (60+)",
  },

  // 9. ARCANUM ACADEMY
  {
    id: "school-academy",
    name: "Arcanum Academy",
    subtitle: "Interactive Learning Escape Rooms & EdTech",
    district: "Innovation & Academy Heights",
    districtId: "innovation-academy",
    districtColor: "#10B981",
    type: "project",
    projectSlug: "arcanum",
    route: "/projects/arcanum",
    description: "Picturesque red-brick collegiate academy with stone archways, an illuminated clock tower, learning escape chambers, and library.",
    architecturalStyle: "Red-Brick Collegiate Academy with Clock Tower",
    facadeDetails: "Rustic red brickwork, arched mullioned windows, functional clock face, and ivy-draped courtyard walls.",
    techPreview: ["Next.js", "React", "TypeScript", "Gamification Engine"],
    badge: "IN PROGRESS",
    gridPos: { isoX: 300, isoY: 580, width: 140, depth: 125, height: 150 },
    palette: {
      wallMain: "#FEF3C7",
      wallShadow: "#FDE68A",
      roof: "#B45309",
      roofShadow: "#78350F",
      trim: "#451A03",
      windowGlow: "#FEF08A",
      accent: "#D97706",
    },
    roofStyle: "brick-academy",
    iconName: "GraduationCap",
    statLabel: "Status",
    statValue: "In Progress",
  },

  // 10. AGRITECH RESEARCH CENTRE (Crop Failure Risk)
  {
    id: "agritech-centre",
    name: "AgriTech Research Centre",
    subtitle: "Machine Learning Crop Failure & Yield Resilience",
    district: "Innovation & Academy Heights",
    districtId: "innovation-academy",
    districtColor: "#10B981",
    type: "project",
    projectSlug: "crop-failure-risk-analysis",
    route: "/projects/crop-failure-risk-analysis",
    description: "Victorian glass greenhouse laboratory with curved roofs, interior glowing cultivation bays, and outdoor precision farming soil plots.",
    architecturalStyle: "Victorian Botanical Glass Conservatory & Field Station",
    facadeDetails: "Curved arched glass panes, green iron ribs, internal hydroponic glow, and raised wooden farming planter beds.",
    techPreview: ["Python", "XGBoost", "SMOTE", "Feature Importance", "SHAP"],
    badge: "92% Accuracy",
    gridPos: { isoX: 470, isoY: 670, width: 135, depth: 115, height: 110 },
    palette: {
      wallMain: "#F0FDF4",
      wallShadow: "#DCFCE7",
      roof: "#16A34A",
      roofShadow: "#15803D",
      trim: "#14532D",
      windowGlow: "#86EFAC",
      accent: "#10B981",
    },
    roofStyle: "botanical-greenhouse",
    iconName: "Sprout",
    statLabel: "Predictive Score",
    statValue: "92% Yield Recall",
  },

  // 11. UNIVERSITY CAMPUS (GNDU Academic Hall)
  {
    id: "university-campus",
    name: "University Campus",
    subtitle: "VIPS BCA Graduate — 9.48 CGPA & Academic Honors",
    district: "Financial & Corporate Centre",
    districtId: "corporate-financial",
    districtColor: "#3B82F6",
    type: "academic",
    route: "/education",
    description: "Grand collegiate hall crowned with a majestic copper dome, wide lawn quadrangle, and marble steps honoring Harsheen's 9.48 CGPA.",
    architecturalStyle: "Classical Collegiate Campus with Copper Dome",
    facadeDetails: "Oxidized green copper dome, grand central portico, limestone facade, and manicured graduation lawn.",
    techPreview: ["9.48 CGPA", "Data Structures", "DBMS", "Operating Systems", "Software Eng."],
    badge: "9.48 CGPA",
    gridPos: { isoX: 810, isoY: 660, width: 145, depth: 125, height: 145 },
    palette: {
      wallMain: "#F8FAFC",
      wallShadow: "#E2E8F0",
      roof: "#0D9488", // Oxidized Copper
      roofShadow: "#0F766E",
      trim: "#334155",
      windowGlow: "#FEF08A",
      accent: "#0EA5E9",
    },
    roofStyle: "collegiate-dome",
    iconName: "BookOpen",
    statLabel: "Academic Merit",
    statValue: "Rank 1 Distinction",
  },

  // 12. HALL OF FAME
  {
    id: "hall-of-fame",
    name: "Hall of Fame",
    subtitle: "Top 1% National Honors, NIQ Awards & Certifications",
    district: "Financial & Corporate Centre",
    districtId: "corporate-financial",
    districtColor: "#3B82F6",
    type: "honors",
    route: "/achievements",
    description: "Neoclassical circular rotunda with domed cupola, trophy pedestals, classical frieze, victory laurel crest, and golden uplighting.",
    architecturalStyle: "Neoclassical Circular Rotunda with Golden Cupola",
    facadeDetails: "Circular stone colonnade, gilded cupola lantern, victory laurel wreath frieze, and illuminated trophy plinths.",
    techPreview: ["NIQ Thumbs Up", "NPTEL Top 1%", "NPTEL Top 5%", "Python Certification"],
    badge: "Top 1% National",
    gridPos: { isoX: 980, isoY: 600, width: 130, depth: 115, height: 130 },
    palette: {
      wallMain: "#FEFCE8",
      wallShadow: "#FEF9C3",
      roof: "#D97706",
      roofShadow: "#B45309",
      trim: "#78350F",
      windowGlow: "#FEF08A",
      accent: "#F59E0B",
    },
    roofStyle: "museum-rotunda",
    iconName: "Award",
    statLabel: "Key Recognition",
    statValue: "NIQ & IIT Honors",
  },
];
