export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  startDate: string;
  endDate: string;
  type: "Full-Time" | "Internship" | "Leadership";
  highlights: string[];
  skillsUsed: string[];
  award?: string;
  featured?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "niq-data-operations",
    role: "Data Operations Analyst",
    organization: "NielsenIQ (NIQ)",
    location: "New Delhi, India",
    period: "December 2025 – Present",
    startDate: "2025-12",
    endDate: "Present",
    type: "Full-Time",
    award: "NIQ Thumbs Up Award",
    featured: true,
    highlights: [
      "Awarded the prestigious NIQ Thumbs Up Award for managing critical coding and MDQC (Master Data Quality Control) operations while consistently achieving high productivity and accuracy standards.",
      "Assumed sole end-to-end deadline management and submissions for an entire market sector within six months of joining, driving cross-team coordination and SLA adherence.",
      "Managed time-sensitive coding, MDQC activities, and sector deliverables with zero tolerance for data discrepancy.",
      "Validated and audited high-volume retail and consumer datasets utilizing advanced Excel (PivotTables, VLOOKUP), data discrepancy identification checks, and proprietary NIQ enterprise data systems.",
    ],
    skillsUsed: [
      "Data Quality Management",
      "MDQC",
      "Advanced Excel",
      "PivotTables",
      "VLOOKUP",
      "Data Validation",
      "Operational Quality",
      "Sector Ownership",
    ],
  },
  {
    id: "salo-digital-marketing",
    role: "Digital Marketing Associate (Intern)",
    organization: "Salo Orthotics",
    location: "Delhi, India",
    period: "August 2025 – October 2025",
    startDate: "2025-08",
    endDate: "2025-10",
    type: "Internship",
    featured: false,
    highlights: [
      "Managed brand social channels, website content updates, and foundational search engine optimization (SEO) initiatives.",
      "Conceptualized and designed branded marketing and product assets using Canva.",
      "Monitored audience conversion metrics, reach, and demographic insights via Meta Business Suite.",
      "Contributed to organic community growth of 450+ Facebook followers, significantly elevating patient brand awareness.",
    ],
    skillsUsed: [
      "Digital Marketing",
      "SEO",
      "Content Strategy",
      "Canva",
      "Meta Business Suite",
      "Analytics",
    ],
  },
  {
    id: "ibm-data-analytics",
    role: "Data Analytics Summer Intern",
    organization: "IBM SkillsBuild (Virtual)",
    location: "Virtual / Remote",
    period: "June 2024 – August 2024",
    startDate: "2024-06",
    endDate: "2024-08",
    type: "Internship",
    featured: true,
    highlights: [
      "Analyzed retail and client market trends to discover customer segmentation insights using Python and Microsoft Excel.",
      "Engineered analytical dashboards to communicate distribution distributions, purchasing habits, and segment clusters.",
      "Collaborated effectively in a 5-member team, presenting final findings and business recommendations to faculty and industry mentors.",
    ],
    skillsUsed: [
      "Python",
      "Excel",
      "Market Trend Analysis",
      "Client Segmentation",
      "Data Visualization",
      "Team Collaboration",
    ],
  },
  {
    id: "samvaad-content-head",
    role: "Content Head",
    organization: "Samvaad — The Literary Society (VIPS)",
    location: "Delhi, India",
    period: "October 2022 – October 2023",
    startDate: "2022-10",
    endDate: "2023-10",
    type: "Leadership",
    featured: false,
    highlights: [
      "Directed all written communications, event copy, promotional newsletters, and official institutional post-event reports.",
      "Coordinated and executed university-wide literary fests, debater showcases, and creative workshops engaging 100+ active participants.",
      "Mentored junior editorial contributors on publication tone, brand consistency, and timely submission workflows.",
    ],
    skillsUsed: [
      "Content Leadership",
      "Editorial Direction",
      "Event Planning",
      "Team Management",
      "Public Relations",
    ],
  },
];
