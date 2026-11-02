export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  distinction?: string;
  category: "Academic Honor" | "AI & ML" | "Data & Analytics" | "Security & HCI" | "Enterprise Recognition";
  description: string;
  skills: string[];
  verificationUrl?: string | null;
  certificateImage?: string | null;
  featured?: boolean;
}

export const certifications: CertificationItem[] = [
  {
    id: "niq-thumbs-up",
    title: "NIQ Thumbs Up Award",
    issuer: "NielsenIQ (NIQ)",
    distinction: "Operational Excellence & Quality Recognition",
    category: "Enterprise Recognition",
    description:
      "Awarded for exceptional performance in managing critical coding and Master Data Quality Control (MDQC) activities while delivering strong productivity and zero-defect data quality.",
    skills: ["Data Operations", "MDQC", "Process Ownership", "Retail Data Quality"],
    verificationUrl: null,
    certificateImage: null,
    featured: true,
  },
  {
    id: "nptel-hci",
    title: "Human-Computer Interaction",
    issuer: "NPTEL — IIIT Delhi",
    distinction: "Top 1% Elite Performer",
    category: "Security & HCI",
    description:
      "Nationally ranked in the Top 1% of candidates. Comprehensive study of user-centered interface design, heuristic evaluations, usability testing, and accessible digital ergonomics.",
    skills: ["HCI", "UX Research", "Usability Engineering", "Accessibility", "Design Principles"],
    verificationUrl: null,
    certificateImage: null,
    featured: true,
  },
  {
    id: "nptel-python",
    title: "The Joy of Computing with Python",
    issuer: "NPTEL — IIT Madras",
    distinction: "Top 5% Elite Performer",
    category: "Academic Honor",
    description:
      "Ranked in the top 5% nationally. Rigorous exploration of algorithms, computational problem-solving, data manipulation, and programming paradigms in Python.",
    skills: ["Python", "Algorithms", "Data Structures", "Computational Thinking"],
    verificationUrl: null,
    certificateImage: null,
    featured: true,
  },
  {
    id: "nptel-privacy-security",
    title: "Privacy & Security in Online Media",
    issuer: "NPTEL — IIIT Hyderabad",
    distinction: "Elite + Silver Medal",
    category: "Security & HCI",
    description:
      "Awarded Elite + Silver. In-depth analysis of social graph vulnerabilities, digital footprint tracking, misinformation dynamics, and privacy-preserving mechanisms.",
    skills: ["Online Security", "Privacy Engineering", "Threat Modeling", "OSINT"],
    verificationUrl: null,
    certificateImage: null,
    featured: true,
  },
  {
    id: "nptel-computer-vision",
    title: "Computer Vision and Image Processing",
    issuer: "NPTEL — IIT Guwahati",
    distinction: "Elite Certificate",
    category: "AI & ML",
    description:
      "Comprehensive study of convolutional neural networks, spatial filtering, feature extraction, morphological transforms, and deep learning image classification.",
    skills: ["Computer Vision", "Image Processing", "CNNs", "Feature Extraction"],
    verificationUrl: null,
    certificateImage: null,
    featured: false,
  },
  {
    id: "google-genai-exchange",
    title: "Gen AI Exchange Program",
    issuer: "Google Cloud",
    distinction: "Google Cloud Ecosystem",
    category: "AI & ML",
    description:
      "Hands-on program exploring Large Language Models, prompt engineering, multimodal architectures, and generative application design on Google Cloud.",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "Multimodal Systems", "Google Cloud"],
    verificationUrl: null,
    certificateImage: null,
    featured: true,
  },
  {
    id: "nptel-nlp",
    title: "Natural Language Processing",
    issuer: "NPTEL — IIT Kharagpur",
    distinction: "NPTEL Certified",
    category: "AI & ML",
    description:
      "Explored sequence-to-sequence models, recurrent architectures (LSTM/GRU), word embeddings, syntactic parsing, and sentiment analysis workflows.",
    skills: ["NLP", "LSTM", "Text Processing", "Tokenization", "Sentiment Analysis"],
    verificationUrl: null,
    certificateImage: null,
    featured: false,
  },
  {
    id: "nptel-ethical-hacking",
    title: "Ethical Hacking",
    issuer: "NPTEL — IIT Kharagpur",
    distinction: "NPTEL Certified",
    category: "Security & HCI",
    description:
      "Practical study of network reconnaissance, vulnerability assessment, penetration vectors, web application security (OWASP Top 10), and defensive countermeasures.",
    skills: ["Penetration Testing", "Network Security", "OWASP", "Vulnerability Assessment"],
    verificationUrl: null,
    certificateImage: null,
    featured: false,
  },
  {
    id: "google-analytics",
    title: "Google Analytics Certification",
    issuer: "Google",
    distinction: "Google Certified Professional",
    category: "Data & Analytics",
    description:
      "Proficiency in GA4 properties, event tracking, user acquisition funnels, conversion paths, audience segmentation, and performance reporting.",
    skills: ["GA4", "Web Analytics", "Conversion Funnels", "Audience Segmentation"],
    verificationUrl: null,
    certificateImage: null,
    featured: false,
  },
  {
    id: "ibm-ai-bootcamp",
    title: "AI Bootcamp (Machine Learning)",
    issuer: "IBM SkillsBuild",
    distinction: "IBM Verified Credential",
    category: "AI & ML",
    description:
      "Structured machine learning bootcamp addressing supervised and unsupervised learning, regression, classification, model validation, and deployment pipelines.",
    skills: ["Machine Learning", "Scikit-learn", "Data Pipelines", "Model Evaluation"],
    verificationUrl: null,
    certificateImage: null,
    featured: false,
  },
];
