export interface CityBuilding {
  id: string;
  name: string;
  subtitle: string;
  district: string;
  districtId: "creative-corner" | "innovation-ave" | "financial-dist" | "learning-lane" | "community-sq";
  districtColor: string;
  type: "home" | "project" | "career" | "academic" | "honors" | "contact";
  projectSlug?: string;
  route: string;
  description: string;
  architecturalStyle: string;
  facadeDetails: string;
  techPreview: string[];
  badge?: string;
  // Isometric map position (grid unit coordinates in a 1400 x 950 isometric scene)
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
  id: "creative-corner" | "innovation-ave" | "financial-dist" | "learning-lane" | "community-sq";
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
    id: "creative-corner",
    name: "Creative Corner",
    theme: "Cozy Residential & Personal Sanctuary",
    description: "A charming tree-lined residential lane featuring My Comfort Home, peaceful gardens, flower beds, and reading nooks.",
    color: "#E11D48", // Rose Coral
    accentBg: "rgba(225, 29, 72, 0.12)",
    buildingIds: ["comfort-home"],
    ambientDetails: ["Flower pots", "Wooden picket fence", "Mailbox", "Park bench", "Bicycle by the tree"],
  },
  {
    id: "innovation-ave",
    name: "Innovation Avenue",
    theme: "Cutting-Edge AI & Compassionate Systems",
    description: "The bustling technology district housing AI credibility detection, empathetic elder care companions, and generative event planning.",
    color: "#8B5CF6", // Violet
    accentBg: "rgba(139, 92, 246, 0.12)",
    buildingIds: ["media-house", "community-care", "events-centre"],
    ambientDetails: ["Digital news marquee", "Broadcast antenna", "Fairy-lit event terrace", "Civic garden"],
  },
  {
    id: "financial-dist",
    name: "Financial District",
    theme: "Enterprise Data & Predictive Markets",
    description: "Grand banking architecture and high-precision corporate data operations with blue-chip market analytics.",
    color: "#059669", // Emerald
    accentBg: "rgba(5, 150, 105, 0.12)",
    buildingIds: ["central-bank", "niq-tower"],
    ambientDetails: ["Ticker tape displays", "Stone steps & columns", "Executive helipad", "Reflective blue glass"],
  },
  {
    id: "learning-lane",
    name: "Learning Lane",
    theme: "Scholastic Rigor & Creative EdTech",
    description: "Collegiate red-brick academies, grand campus libraries, and the golden-domed Hall of Fame honoring Top 1% national rankings.",
    color: "#D97706", // Amber
    accentBg: "rgba(217, 119, 6, 0.12)",
    buildingIds: ["school-academy", "university-campus", "hall-of-fame"],
    ambientDetails: ["Academy clock tower", "Historic archways", "Museum terrace with statues", "Campus courtyard"],
  },
  {
    id: "community-sq",
    name: "Community Square",
    theme: "Agriculture, Local Commerce & Connections",
    description: "The vibrant heart of town with colorful marketplace awnings, botanical greenhouse research plots, and the town information gazebo.",
    color: "#0284C7", // Sky
    accentBg: "rgba(2, 132, 199, 0.12)",
    buildingIds: ["agritech-centre", "marketplace", "city-connect"],
    ambientDetails: ["Striped cafe awnings", "Outdoor fruit crates", "Botanical greenhouse glass", "Town clock gazebo"],
  },
];

export const cityBuildings: CityBuilding[] = [
  // 1. CREATIVE CORNER: MY COMFORT HOME (Centerpiece!)
  {
    id: "comfort-home",
    name: "My Comfort Home",
    subtitle: "Harsheen's Personal Sanctuary & 6 Interactive Windows",
    district: "Creative Corner",
    districtId: "creative-corner",
    districtColor: "#E11D48",
    type: "home",
    route: "/world#comfort-home",
    description: "A warm, charming two-storey cottage with sloping terracotta roof, chimney smoke, front porch, mailbox, and six clickable windows opening into books, creative writing, music, travel, design, and curiosities.",
    architecturalStyle: "Warm Illustrated English Cottage",
    facadeDetails: "Terracotta gabled roof, stone chimney, wooden porch pillars, flower window-boxes, picket fence, and vintage mailbox.",
    techPreview: ["The Bookshelf", "The Writer's Nook", "The Listening Room", "Explorer's Window", "Creative Studio", "Curiosity Lab"],
    badge: "6 Interactive Windows",
    gridPos: { isoX: 380, isoY: 340, width: 150, depth: 130, height: 140 },
    palette: {
      wallMain: "#FFFBEB", // Warm Cream
      wallShadow: "#FDE68A", // Amber cream shadow
      roof: "#DC2626", // Terracotta Red-Orange
      roofShadow: "#991B1B",
      trim: "#78350F", // Dark wood
      windowGlow: "#FEF08A", // Warm golden light
      accent: "#E11D48",
    },
    roofStyle: "comfort-cottage",
    iconName: "Home",
    statLabel: "Sanctuary",
    statValue: "6 Cozy Rooms",
  },

  // 2. INNOVATION AVENUE: FACTSHIELD MEDIA HOUSE
  {
    id: "media-house",
    name: "FactShield Media House",
    subtitle: "AI Fake News & Deepfake Intelligence Centre",
    district: "Innovation Avenue",
    districtId: "innovation-ave",
    districtColor: "#8B5CF6",
    type: "project",
    projectSlug: "factshield",
    route: "/projects/factshield",
    description: "Contemporary media broadcasting studio with industrial loft windows, transmission dish, and dual-engine LSTM/ResNet18 verification labs.",
    architecturalStyle: "Contemporary Glass & Industrial Loft Studio",
    facadeDetails: "Translucent studio glass, broadcast antenna, satellite receiver, and glowing digital verification ticker.",
    techPreview: ["Python", "Flask", "LSTM", "ResNet18", "NewsAPI", "Google Trends"],
    badge: "85% Accuracy",
    gridPos: { isoX: 620, isoY: 260, width: 140, depth: 120, height: 165 },
    palette: {
      wallMain: "#E0E7FF", // Soft Indigo
      wallShadow: "#C7D2FE",
      roof: "#4F46E5", // Deep Indigo
      roofShadow: "#3730A3",
      trim: "#312E81",
      windowGlow: "#A5B4FC",
      accent: "#6366F1",
    },
    roofStyle: "media-studio",
    iconName: "Radio",
    statLabel: "Verification",
    statValue: "85% Accuracy",
  },

  // 3. INNOVATION AVENUE: SENIORSAATHI COMMUNITY SUPPORT CENTRE
  {
    id: "community-care",
    name: "SeniorSaathi Care Hub",
    subtitle: "AI-Powered Companion & Elder Accessibility Hub",
    district: "Innovation Avenue",
    districtId: "innovation-ave",
    districtColor: "#8B5CF6",
    type: "project",
    projectSlug: "seniorsaathi",
    route: "/projects/seniorsaathi",
    description: "Welcoming community pavilion designed with gentle sloping roofs, double doors, accessibility ramps, and rose gardens.",
    architecturalStyle: "Warm Civic Pavilion with Accessible Entrances",
    facadeDetails: "Double wooden doors, welcoming portico, soft peach facade, accessibility ramp, and blooming rose bushes.",
    techPreview: ["Next.js", "TypeScript", "Gemini API", "Web Speech API", "Tailwind CSS"],
    badge: "GitHub Verified",
    gridPos: { isoX: 790, isoY: 340, width: 145, depth: 130, height: 135 },
    palette: {
      wallMain: "#FCE7F3", // Soft Lavender Pink
      wallShadow: "#FBCFE8",
      roof: "#DB2777", // Warm Rose
      roofShadow: "#9D174D",
      trim: "#831843",
      windowGlow: "#FDE047",
      accent: "#EC4899",
    },
    roofStyle: "civic-support",
    iconName: "HeartHandshake",
    statLabel: "Target Group",
    statValue: "Seniors (60+)",
  },

  // 4. INNOVATION AVENUE: PLANORA AI EVENTS CENTRE
  {
    id: "events-centre",
    name: "Planora AI Convention Centre",
    subtitle: "Intelligent Generative Event Suite",
    district: "Innovation Avenue",
    districtId: "innovation-ave",
    districtColor: "#8B5CF6",
    type: "project",
    projectSlug: "planora-ai",
    route: "/projects/planora-ai",
    description: "Grand modern atrium pavilion featuring festive lighting, tiered glass balconies, and automated AI event orchestration.",
    architecturalStyle: "Modern Celebration Pavilion & Glass Atrium",
    facadeDetails: "Tiered glass canopy, champagne-gold structural pillars, string festoon lights, and wide grand entrance.",
    techPreview: ["Next.js 14", "Gemini API", "Prisma ORM", "Recharts", "Zod"],
    badge: "Production Live",
    gridPos: { isoX: 960, isoY: 420, width: 160, depth: 140, height: 175 },
    palette: {
      wallMain: "#FAF5FF", // Soft Purple
      wallShadow: "#F3E8FF",
      roof: "#9333EA", // Royal Violet
      roofShadow: "#6B21A8",
      trim: "#D4AF37", // Champagne Gold
      windowGlow: "#FEF08A",
      accent: "#A855F7",
    },
    roofStyle: "event-atrium",
    iconName: "Sparkles",
    statLabel: "Deployment",
    statValue: "Live on Vercel",
  },

  // 5. FINANCIAL DISTRICT: STOCKMINDS CENTRAL BANK
  {
    id: "central-bank",
    name: "StockMinds Central Bank",
    subtitle: "Machine Learning Market Direction & Financial Exchange",
    district: "Financial District",
    districtId: "financial-dist",
    districtColor: "#059669",
    type: "project",
    projectSlug: "stockminds",
    route: "/projects/stockminds",
    description: "Stately neoclassical institution with grand ionic colonnades, stone steps, brass doors, and rolling Random Forest NIFTY equity charts.",
    architecturalStyle: "Neoclassical Financial Exchange with Stone Portico",
    facadeDetails: "Six majestic fluted columns, triangular pediment, wide stone staircase, and bronze double doors.",
    techPreview: ["Random Forest", "yFinance", "Pandas", "Matplotlib", "Scikit-learn"],
    badge: "78% Directional",
    gridPos: { isoX: 740, isoY: 150, width: 150, depth: 130, height: 155 },
    palette: {
      wallMain: "#ECFDF5", // Soft Mint Cream
      wallShadow: "#D1FAE5",
      roof: "#059669", // Emerald Green
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

  // 6. FINANCIAL DISTRICT: NIQ CORPORATE TOWER
  {
    id: "niq-tower",
    name: "NIQ Corporate Tower",
    subtitle: "Data Operations, MDQC Leadership & Thumbs Up Award",
    district: "Financial District",
    districtId: "financial-dist",
    districtColor: "#059669",
    type: "career",
    route: "/experience",
    description: "Sleek, reflective blue-glass corporate skyscraper with cascading sky terraces, executive helipad, and sector-wide data operation hubs.",
    architecturalStyle: "Tiered Modern Corporate Skyscraper with Sky Terraces",
    facadeDetails: "Geometric glass curtain-walls, illuminated executive helipad on the crown, and green rooftop terrace gardens.",
    techPreview: ["MDQC", "Excel PivotTables", "Data Quality", "SLA Management"],
    badge: "Thumbs Up Award",
    gridPos: { isoX: 920, isoY: 220, width: 140, depth: 130, height: 210 },
    palette: {
      wallMain: "#EFF6FF", // Ice Blue
      wallShadow: "#DBEAFE",
      roof: "#1D4ED8", // Enterprise Cobalt
      roofShadow: "#1E40AF",
      trim: "#172554",
      windowGlow: "#BAE6FD",
      accent: "#2563EB",
    },
    roofStyle: "glass-skyscraper",
    iconName: "Building2",
    statLabel: "Sector Ownership",
    statValue: "End-to-End",
  },

  // 7. LEARNING LANE: ARCANUM ACADEMY
  {
    id: "school-academy",
    name: "Arcanum Academy",
    subtitle: "Interactive Learning Escape Rooms & EdTech",
    district: "Learning Lane",
    districtId: "learning-lane",
    districtColor: "#D97706",
    type: "project",
    projectSlug: "arcanum",
    route: "/projects/arcanum",
    description: "Picturesque red-brick collegiate academy with stone archways, an illuminated clock tower, learning escape chambers, and library.",
    architecturalStyle: "Red-Brick Collegiate Academy with Clock Tower",
    facadeDetails: "Rustic red brickwork, arched mullioned windows, functional clock face, and ivy-draped courtyard walls.",
    techPreview: ["Next.js", "React", "TypeScript", "Gamification Engine"],
    badge: "IN PROGRESS",
    gridPos: { isoX: 280, isoY: 530, width: 155, depth: 135, height: 165 },
    palette: {
      wallMain: "#FEF3C7", // Warm Brick Buff
      wallShadow: "#FDE68A",
      roof: "#B45309", // Warm Amber Brick
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

  // 8. LEARNING LANE: UNIVERSITY CAMPUS
  {
    id: "university-campus",
    name: "University Campus",
    subtitle: "VIPS BCA Graduate — 9.48 CGPA & Academic Honors",
    district: "Learning Lane",
    districtId: "learning-lane",
    districtColor: "#D97706",
    type: "academic",
    route: "/education",
    description: "Grand collegiate hall crowned with a majestic copper dome, wide lawn quadrangle, and marble steps honoring Harsheen's 9.48 CGPA.",
    architecturalStyle: "Classical Collegiate Campus with Copper Dome",
    facadeDetails: "Oxidized green copper dome, grand central portico, limestone facade, and manicured graduation lawn.",
    techPreview: ["BCA — 9.48 CGPA", "VIPS Delhi", "CBSE Science 86.8%"],
    badge: "9.48 CGPA",
    gridPos: { isoX: 470, isoY: 600, width: 160, depth: 140, height: 175 },
    palette: {
      wallMain: "#F8FAFC", // Off-White Limestone
      wallShadow: "#E2E8F0",
      roof: "#0D9488", // Oxidized Copper Teal
      roofShadow: "#115E59",
      trim: "#0F766E",
      windowGlow: "#FEF08A",
      accent: "#0D9488",
    },
    roofStyle: "collegiate-dome",
    iconName: "BookOpen",
    statLabel: "Scholastic Rank",
    statValue: "9.48 CGPA",
  },

  // 9. LEARNING LANE: HALL OF FAME
  {
    id: "hall-of-fame",
    name: "Hall of Fame",
    subtitle: "National Honors & Top 1% NPTEL Accreditations",
    district: "Learning Lane",
    districtId: "learning-lane",
    districtColor: "#D97706",
    type: "honors",
    route: "/achievements",
    description: "Gleaming marble rotunda with an illuminated golden glass dome, gallery of national competitive honors, and Google Cloud credentials.",
    architecturalStyle: "Golden Museum Rotunda with Statuary Terrace",
    facadeDetails: "Golden faceted dome, circular colonnade, trophy plinths, and marble terrace with ambient uplighting.",
    techPreview: ["NPTEL Top 1%", "NPTEL Top 5%", "Google Cloud", "IBM Bootcamp"],
    badge: "Top 1% NPTEL",
    gridPos: { isoX: 670, isoY: 680, width: 150, depth: 135, height: 160 },
    palette: {
      wallMain: "#FFFBEB", // Pale Gold
      wallShadow: "#FEF3C7",
      roof: "#D97706", // Polished Brass Gold
      roofShadow: "#92400E",
      trim: "#78350F",
      windowGlow: "#FEF08A",
      accent: "#F59E0B",
    },
    roofStyle: "museum-rotunda",
    iconName: "Award",
    statLabel: "Accreditations",
    statValue: "10+ Verified",
  },

  // 10. COMMUNITY SQUARE: AGRITECH RESEARCH CENTRE
  {
    id: "agritech-centre",
    name: "AgriTech Research Centre",
    subtitle: "Crop Failure Risk Mitigation & Agricultural Analytics",
    district: "Community Square",
    districtId: "community-sq",
    districtColor: "#0284C7",
    type: "project",
    projectSlug: "crop-failure-risk-analysis",
    route: "/projects/crop-failure-risk-analysis",
    description: "Lush botanical research greenhouse with arched glass conservatory roofs, solar panels, and outdoor trial farming plots.",
    architecturalStyle: "Botanical Glass Conservatory & Solar Agri-Lab",
    facadeDetails: "Curved glass greenhouse panes, solar panel arrays, outdoor raised soil beds, and weather vane.",
    techPreview: ["Python", "Pandas", "Seaborn", "NumPy", "EDA"],
    badge: "5-Member Study",
    gridPos: { isoX: 180, isoY: 220, width: 140, depth: 120, height: 130 },
    palette: {
      wallMain: "#F0FDF4", // Pale Green
      wallShadow: "#DCFCE7",
      roof: "#16A34A", // Botanical Green
      roofShadow: "#15803D",
      trim: "#14532D",
      windowGlow: "#86EFAC",
      accent: "#22C55E",
    },
    roofStyle: "botanical-greenhouse",
    iconName: "Sprout",
    statLabel: "Research Team",
    statValue: "5 Members",
  },

  // 11. COMMUNITY SQUARE: THE ELEVENTH HOUR MARKETPLACE
  {
    id: "marketplace",
    name: "The Eleventh Hour Marketplace",
    subtitle: "Vibrant E-Commerce Shopping Promenade",
    district: "Community Square",
    districtId: "community-sq",
    districtColor: "#0284C7",
    type: "project",
    projectSlug: "the-eleventh-hour",
    route: "/projects/the-eleventh-hour",
    description: "Bustling town retail promenade featuring striped coral and cream fabric awnings, fruit crates, and full-stack MySQL shopping workflows.",
    architecturalStyle: "Colourful European Market Arcade with Striped Awnings",
    facadeDetails: "Striped fabric awnings, shop display windows, outdoor crate stands, cafe chalkboard, and lantern sconces.",
    techPreview: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    badge: "LAMP Stack",
    gridPos: { isoX: 140, isoY: 380, width: 145, depth: 125, height: 125 },
    palette: {
      wallMain: "#FFF7ED", // Warm Peach
      wallShadow: "#FFEDD5",
      roof: "#EA580C", // Terracotta Orange
      roofShadow: "#C2410C",
      trim: "#7C2D12",
      windowGlow: "#FEF08A",
      accent: "#F97316",
    },
    roofStyle: "market-awnings",
    iconName: "ShoppingBag",
    statLabel: "Architecture",
    statValue: "PHP & MySQL",
  },

  // 12. COMMUNITY SQUARE: CITY CONNECT CENTRE
  {
    id: "city-connect",
    name: "City Connect Gazebo",
    subtitle: "Direct Contact, Email, LinkedIn & Resume Hub",
    district: "Community Square",
    districtId: "community-sq",
    districtColor: "#0284C7",
    type: "contact",
    route: "/contact",
    description: "Charming octagonal town pavilion with brass weather vane, community notice board, and direct instant links to Harsheen.",
    architecturalStyle: "Octagonal Town Square Gazebo & Information Kiosk",
    facadeDetails: "Decorative wooden railings, octagonal pitched roof, town clock face, and community bulletin board.",
    techPreview: ["Email", "LinkedIn", "GitHub", "Resume PDF"],
    badge: "Open for Roles",
    gridPos: { isoX: 380, isoY: 170, width: 125, depth: 125, height: 120 },
    palette: {
      wallMain: "#F0FDFA", // Pale Teal
      wallShadow: "#CCFBF1",
      roof: "#0D9488", // Teal Gazebo
      roofShadow: "#0F766E",
      trim: "#134E4A",
      windowGlow: "#5EEAD4",
      accent: "#14B8A6",
    },
    roofStyle: "town-gazebo",
    iconName: "Mail",
    statLabel: "Direct Email",
    statValue: "Active",
  },
];
