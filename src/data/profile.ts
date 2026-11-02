export interface SocialLinks {
  github: string;
  linkedin: string;
  credly?: string;
  email: string;
}

export interface ProfileData {
  name: string;
  preferredName: string;
  title: string;
  tagline: string;
  headline: string;
  supportingText: string;
  location: string;
  email: string;
  social: SocialLinks;
  resumeUrl: string;
  summary: {
    short: string;
    editorial: string[];
    recruiterBrief: string;
  };
  keyHighlights: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Harsheen Kaur",
  preferredName: "Harsheen",
  title: "Data Operations Analyst & Software Technologist",
  tagline: "Data Analytics • AI & Machine Learning • Full-Stack Development",
  headline: "Turning curiosity into things that work.",
  supportingText:
    "An analytical thinker with a passion for technology, data and building meaningful digital experiences.",
  location: "Delhi, India",
  email: "harsheen1105@gmail.com",
  social: {
    github: "https://github.com/HarsheenKaur11",
    linkedin: "https://www.linkedin.com/in/harsheenkaur11/",
    credly: "https://www.credly.com", // Placeholder: replace with direct profile URL when available
    email: "mailto:harsheen1105@gmail.com",
  },
  resumeUrl: "/resume.pdf",
  summary: {
    short:
      "BCA graduate (CGPA 9.48) with professional experience in data operations, quality assurance, analytical workflows and full-stack software development.",
    editorial: [
      "I am an analytical thinker who finds joy at the crossroads of structured data, thoughtful user design, and intelligent software systems. Having graduated with a BCA from Vivekananda Institute of Professional Studies with a 9.48 CGPA, I bring a rigorous grounding in computer applications combined with real-world operational ownership.",
      "At NielsenIQ (NIQ), I manage critical Master Data Quality Control (MDQC) and coding activities across an entire sector, driving data validation, retail metric reconciliation, and time-critical client deliverables. Receiving the NIQ Thumbs Up Award reinforced my commitment to accuracy, ownership, and dependable execution under tight SLAs.",
      "Beyond daily data operations, I design and build software systems—from full-stack fake news & deepfake detectors using LSTM and ResNet18 to accessible AI companions for senior citizens and intelligent generative event-planning suites. I care deeply about building things that are not merely concepts, but real, accessible tools that solve human problems.",
    ],
    recruiterBrief:
      "Analytical, results-focused BCA graduate (9.48 CGPA) currently serving as Data Operations Analyst at NielsenIQ. Winner of the NIQ Thumbs Up Award for sector-wide data quality and delivery excellence. Proficient in Python, SQL, Advanced Excel, Power BI, Machine Learning (Scikit-learn, LSTM), and modern TypeScript web development. Strong problem solver with verified hands-on experience in both enterprise data pipelines and end-to-end full-stack software development.",
  },
  keyHighlights: [
    {
      label: "Academic Standing",
      value: "9.48 CGPA",
      detail: "Bachelor of Computer Applications (VIPS, Delhi)",
    },
    {
      label: "Industry Recognition",
      value: "NIQ Thumbs Up",
      detail: "Awarded for exceptional data quality & coding leadership",
    },
    {
      label: "Sector Ownership",
      value: "End-to-End",
      detail: "Sole ownership of sector deliverables within 6 months",
    },
    {
      label: "Certifications",
      value: "Top 1% & 5%",
      detail: "NPTEL IIIT Delhi & IIT Madras honors",
    },
  ],
};
