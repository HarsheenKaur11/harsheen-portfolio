export interface ProjectMetric {
  label: string;
  value: string;
  note?: string;
}

export interface ProjectImage {
  placeholder: string;
  caption: string;
  alt: string;
  localPath?: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: "AI & ML" | "Data Analytics" | "Web Development" | "Generative AI" | "EdTech";
  categoryLabel: string;
  tags: string[];
  status: "Completed" | "In Progress" | "Production Live";
  statusBadge: string;
  isInProgress?: boolean;
  problem: string;
  solution: string;
  keyFeatures: {
    title: string;
    description: string;
    isPlanned?: boolean;
  }[];
  technologies: string[];
  developmentProcess: string[];
  metrics: ProjectMetric[];
  images: ProjectImage[];
  githubUrl: string | null;
  liveDemoUrl: string | null;
  featured: boolean;
  cityBuildingId: string;
  cityBuildingName: string;
  cityDistrict: string;
  verificationNotes: string;
  role: string;
  teamSize: string;
}

export const projects: ProjectItem[] = [
  {
    slug: "factshield",
    title: "FactShield — Fake News & AI Content Detection Platform",
    shortTitle: "FactShield",
    tagline: "Assessing digital credibility with LSTM sentiment models and ResNet18 deepfake detectors.",
    category: "AI & ML",
    categoryLabel: "Artificial Intelligence / Machine Learning / NLP",
    tags: ["Python", "Flask", "Scikit-learn", "ResNet18", "LSTM", "NLP", "NewsAPI", "Google Trends"],
    status: "Completed",
    statusBadge: "85% Reported Accuracy",
    isInProgress: false,
    problem:
      "The rapid proliferation of algorithmically generated disinformation, manipulated media, and deepfake content poses a severe challenge to digital literacy, democratic discourse, and verified news consumption.",
    solution:
      "FactShield provides a unified full-stack verification portal where users can evaluate articles and imagery. The system combines an LSTM-based sequential natural language processing model for linguistic deception detection with a ResNet18 convolutional architecture to identify image manipulation patterns, supplemented by real-time context from NewsAPI and Google Trends.",
    keyFeatures: [
      {
        title: "Dual-Engine AI Credibility Analysis",
        description:
          "Combines an LSTM sequential recurrent network for linguistic cues with a fine-tuned ResNet18 convolutional neural network for synthetic visual artifact detection.",
      },
      {
        title: "Real-Time Context Correlation",
        description:
          "Integrates NewsAPI and Google Trends queries to check whether disputed assertions correspond with verified reporting surges or suspicious anomaly spikes.",
      },
      {
        title: "Transparent Confidence Scoring",
        description:
          "Reports an overall credibility index with 85% verified validation accuracy across historical benchmark test corpuses.",
      },
      {
        title: "User Feedback & Model Audit Loop",
        description:
          "Interactive feedback mechanism evaluated by 15+ trial users to submit false-positive corrections and continuously improve classification thresholds.",
      },
    ],
    technologies: [
      "Python",
      "Flask",
      "Scikit-learn",
      "ResNet18",
      "LSTM",
      "NLP",
      "JavaScript",
      "NewsAPI",
      "Google Trends",
    ],
    developmentProcess: [
      "Dataset curation and preprocessing: Tokenized and cleaned text corpora; normalized resolution and color distributions for image samples.",
      "Model training: Configured LSTM recurrent network for lexical sequence scoring and adapted ResNet18 for binary deepfake artifact classification.",
      "API & Pipeline integration: Developed Flask REST endpoints to ingest text/URLs and orchestrate simultaneous NewsAPI and Google Trends queries.",
      "Evaluation and testing: Documented 85% model accuracy and conducted usability evaluations with 15+ independent users.",
    ],
    metrics: [
      { label: "Model Accuracy", value: "85%", note: "Reported accuracy on validation test splits" },
      { label: "User Testing Group", value: "15+ Users", note: "Participated in usability & feedback validation" },
      { label: "External APIs", value: "NewsAPI & Google Trends", note: "Integrated for real-time credibility checks" },
    ],
    images: [
      {
        placeholder: "FactShield Dashboard & Analysis Workspace",
        caption: "Interface illustrating input verification, model confidence meters, and API trends.",
        alt: "FactShield platform interface preview placeholder",
      },
      {
        placeholder: "Linguistic & Visual Pipeline Diagram",
        caption: "Architectural overview mapping input streams through LSTM and ResNet18 pipelines.",
        alt: "FactShield machine learning architecture placeholder",
      },
    ],
    githubUrl: null, // Repository link placeholder: will be populated once repository visibility is public
    liveDemoUrl: null,
    featured: true,
    cityBuildingId: "media-house",
    cityBuildingName: "Media House / Digital Intelligence Centre",
    cityDistrict: "Media & Intelligence District",
    verificationNotes:
      "All metrics (85% accuracy, 15+ user tests, LSTM/ResNet18 stack, NewsAPI/Google Trends integration) are directly verified from Harsheen's official academic and resume records.",
    role: "Sole AI & Full-Stack Developer",
    teamSize: "Individual Project",
  },
  {
    slug: "stockminds",
    title: "StockMinds — Machine Learning-Based Stock Market Platform",
    shortTitle: "StockMinds",
    tagline: "Predictive directional analysis and interactive market trend dashboards for 15+ NIFTY stocks.",
    category: "Data Analytics",
    categoryLabel: "Data Analytics / Machine Learning / Finance",
    tags: ["Python", "Flask", "Random Forest", "yFinance", "Pandas", "Matplotlib", "Scikit-learn", "HTML/CSS"],
    status: "Completed",
    statusBadge: "78% Directional Accuracy",
    isInProgress: false,
    problem:
      "Retail market participants often struggle to synthesize volatile time-series price data and multi-factor technical indicators into disciplined directional forecasts without algorithmic tooling.",
    solution:
      "StockMinds is an analytical web application that models equity price trajectories for 15+ benchmark NIFTY stocks. By applying a Scikit-learn Random Forest ensemble to rolling historical indicators retrieved through yFinance, the platform delivers automated directional predictions (78% historical accuracy) paired with Matplotlib visualizations.",
    keyFeatures: [
      {
        title: "Random Forest Directional Classifier",
        description:
          "Ensemble decision trees trained on rolling volatility, moving averages, and volume indicators yielding 78% reported directional accuracy.",
      },
      {
        title: "15+ NIFTY Stock Coverage",
        description:
          "Comprehensive tracking for premier Indian blue-chip equities with synchronized technical indicators.",
      },
      {
        title: "Automated Data Ingestion",
        description:
          "Real-time and historical financial data ingestion pipeline via yFinance with Pandas-based feature engineering.",
      },
      {
        title: "Visual Trend Exploration",
        description:
          "Interactive dashboard delivering trendlines, rolling averages, and visual correlation charts built with Matplotlib.",
      },
    ],
    technologies: [
      "Python",
      "Flask",
      "Random Forest",
      "yFinance",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "HTML",
      "CSS",
    ],
    developmentProcess: [
      "Financial data pipeline: Designed automated fetchers leveraging yFinance across 15+ high-volume NIFTY tickers.",
      "Feature engineering: Computed technical signals (RSI, moving averages, daily percentage shifts, volume volatility) in Pandas.",
      "Model training & tuning: Trained Random Forest classifier with hyperparameter optimization, reaching 78% directional accuracy.",
      "Web interface: Integrated a Flask web interface with dynamic Matplotlib plot generation and clean tabular displays.",
    ],
    metrics: [
      { label: "Directional Accuracy", value: "78%", note: "Reported model prediction accuracy on historical test data" },
      { label: "Stock Coverage", value: "15+ NIFTY Equities", note: "Actively monitored in analytical dashboard" },
      { label: "Compliance Notice", value: "Educational / Research", note: "No guaranteed returns or financial advisory claims" },
    ],
    images: [
      {
        placeholder: "StockMinds Market Dashboard Overview",
        caption: "Real-time stock selection interface displaying predictive signals and moving averages.",
        alt: "StockMinds dashboard interface placeholder",
      },
      {
        placeholder: "Ensemble Model Decision & Technical Charts",
        caption: "Matplotlib visual indicators showing directional probabilities and price trajectories.",
        alt: "StockMinds technical analysis chart placeholder",
      },
    ],
    githubUrl: null,
    liveDemoUrl: null,
    featured: true,
    cityBuildingId: "central-bank",
    cityBuildingName: "Central Bank & Financial Exchange",
    cityDistrict: "Financial District",
    verificationNotes:
      "Directional accuracy (78%), 15+ NIFTY stocks, Random Forest model, and yFinance stack are verified. The application does not claim to provide financial advice or guaranteed trading returns.",
    role: "ML & Backend Developer",
    teamSize: "Individual Project",
  },
  {
    slug: "crop-failure-risk-analysis",
    title: "Addressing Crop Failure Risks for Farmers",
    shortTitle: "Crop Failure Analysis",
    tagline: "Empirical agricultural data analysis uncovering regional risk factors and seasonal loss correlations.",
    category: "Data Analytics",
    categoryLabel: "Data Analytics / Agriculture / Social Impact",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel"],
    status: "Completed",
    statusBadge: "5-Member Team Project",
    isInProgress: false,
    problem:
      "Smallholder farmers face severe socio-economic distress from unpredictable crop failures caused by climate variability, pest infestations, and skewed irrigation access, with few accessible data-backed mitigation insights.",
    solution:
      "A rigorous analytical study conducted in a 5-member collaborative team exploring multifaceted agricultural datasets. By executing exploratory data analysis, correlation matrices, and seasonal yield regressions in Python and Seaborn, the research mapped vulnerable geographic clusters and formulated analysis-led recommendations to improve prediction accuracy.",
    keyFeatures: [
      {
        title: "Multidimensional Risk Factor Identification",
        description:
          "Systematic exploration of precipitation anomalies, temperature variance, soil pH, and pest history across regional zones.",
      },
      {
        title: "Seasonal Failure Pattern Modeling",
        description:
          "Mapped cyclical monsoon dependencies and drought vulnerability windows across multiple crop cultivation seasons.",
      },
      {
        title: "Yield Correlation Visualizations",
        description:
          "Detailed Seaborn heatmaps and Matplotlib distribution plots depicting direct agricultural yield dependencies.",
      },
      {
        title: "Actionable Mitigative Policy Recommendations",
        description:
          "Formulated concrete, data-led interventions presented directly to academic and faculty mentors.",
      },
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Microsoft Excel"],
    developmentProcess: [
      "Data wrangling and harmonization: Cleaned disparate agricultural public datasets, resolved missing entries, and unified units in Pandas.",
      "Exploratory statistical analysis: Derived descriptive metrics, outlier distributions, and Pearson correlation coefficients.",
      "Visualization design: Crafted high-clarity Seaborn heatmaps, scatter distributions, and seasonal trend plots.",
      "Synthesis and faculty presentation: Collaborated in a five-member team to synthesize technical findings into an actionable report.",
    ],
    metrics: [
      { label: "Team Structure", value: "5-Member Team", note: "Collaborative research and analytical presentation" },
      { label: "Core Methodology", value: "EDA & Yield Correlation", note: "Statistical evaluation in Python & Seaborn" },
      { label: "Target Domain", value: "Agritech & Social Impact", note: "Risk mitigation for smallholder agriculture" },
    ],
    images: [
      {
        placeholder: "Crop Failure Correlation Matrix & Heatmaps",
        caption: "Seaborn correlation matrix highlighting temperature anomalies and yield declines.",
        alt: "Crop failure statistical heatmap placeholder",
      },
      {
        placeholder: "Seasonal Vulnerability Distribution Graphs",
        caption: "Regional risk breakdown comparing seasonal water stress against historical harvest yields.",
        alt: "Agritech yield trend chart placeholder",
      },
    ],
    githubUrl: null,
    liveDemoUrl: null,
    featured: true,
    cityBuildingId: "agritech-centre",
    cityBuildingName: "AgriTech Research Centre",
    cityDistrict: "Sustainability & AgriTech District",
    verificationNotes:
      "Verified team academic research project. Findings and methodologies were reviewed and presented to university faculty mentors.",
    role: "Data Analyst & Visualizer",
    teamSize: "5-Member Team",
  },
  {
    slug: "the-eleventh-hour",
    title: "The Eleventh Hour — Mock E-Commerce Platform",
    shortTitle: "The Eleventh Hour",
    tagline: "A responsive dynamic web application featuring product catalogs, user accounts, and SQL workflows.",
    category: "Web Development",
    categoryLabel: "Web Development / E-commerce",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "cPanel"],
    status: "Completed",
    statusBadge: "Full-Stack Mock Store",
    isInProgress: false,
    problem:
      "Developing foundational mastery in full-stack web engineering requires building cohesive transactional systems spanning frontend client interfaces, server-side business logic, and relational database persistence.",
    solution:
      "The Eleventh Hour is a responsive mock e-commerce portal built with raw web fundamentals (HTML5, CSS3, JavaScript) powered by a PHP backend and MySQL relational database. The application showcases full user registration, catalog filtering, cart workflows, user feedback, and robust server-side form validation.",
    keyFeatures: [
      {
        title: "Responsive Catalog Browsing",
        description:
          "Mobile-friendly product showcase with category filtering, detailed item views, and intuitive UI transitions.",
      },
      {
        title: "User Authentication & Registration",
        description:
          "Secure user sign-up and sign-in workflows with input sanitization and password handling.",
      },
      {
        title: "Relational MySQL Persistence",
        description:
          "Normalized database schemas managing user credentials, product inventories, and customer feedback submissions.",
      },
      {
        title: "Client & Server Form Validation",
        description:
          "Two-tier input checking preventing invalid form states, empty submissions, and SQL injection vulnerabilities.",
      },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "cPanel"],
    developmentProcess: [
      "Database schema architecture: Structured normalized tables for accounts, products, and feedback in MySQL.",
      "Backend API development: Wrote procedural PHP scripts handling HTTP POST submissions, authentication sessions, and SQL queries.",
      "Frontend styling and interactivity: Implemented custom responsive CSS layouts and vanilla JavaScript DOM interactions.",
      "Testing & verification: Verified cross-device responsiveness, cart state consistency, and form validation edge cases.",
    ],
    metrics: [
      { label: "Architecture", value: "LAMP / PHP-MySQL", note: "Classic full-stack dynamic web architecture" },
      { label: "Validation Tier", value: "Dual (Client + Server)", note: "Ensuring data integrity and security" },
      { label: "Application State", value: "Full-Stack Prototype", note: "Demonstrating end-to-end shopping journeys" },
    ],
    images: [
      {
        placeholder: "The Eleventh Hour Storefront & Catalog View",
        caption: "Responsive product grid displaying search filters, pricing, and cart buttons.",
        alt: "The Eleventh Hour store front interface placeholder",
      },
      {
        placeholder: "Account Registration & Feedback Workflows",
        caption: "User registration modal and feedback form with PHP validation states.",
        alt: "The Eleventh Hour form validation placeholder",
      },
    ],
    githubUrl: null,
    liveDemoUrl: null,
    featured: false,
    cityBuildingId: "marketplace",
    cityBuildingName: "Marketplace & Commercial Bazaar",
    cityDistrict: "Commerce & Trade District",
    verificationNotes:
      "Fully verified academic project from BCA curriculum demonstrating mastery of relational databases, backend server logic, and responsive UI fundamentals.",
    role: "Full-Stack Web Developer",
    teamSize: "Individual Project",
  },
  {
    slug: "seniorsaathi",
    title: "SeniorSaathi — AI-Powered Digital Companion & Accessibility Platform",
    shortTitle: "SeniorSaathi",
    tagline: "Empowering senior citizens with accessible AI guidance, voice assistance, text simplification, and digital safety.",
    category: "AI & ML",
    categoryLabel: "AI / Accessibility / Social Impact",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini API", "Lucide React", "Web Speech API", "Zod"],
    status: "Completed",
    statusBadge: "Verified GitHub Repository",
    isInProgress: false,
    problem:
      "Rapid digitization has left elderly individuals vulnerable to tech intimidation, confusing jargon, predatory scams, and physical visual/motor barriers, isolating them from essential everyday digital services.",
    solution:
      "SeniorSaathi is an accessible, empathetic AI web companion purpose-built for senior citizens. Powered by Google's Gemini generative models via the official GenAI SDK, it breaks down complex text into gentle, jargon-free explanations, provides voice input and text-to-speech output, guides seniors step-by-step through digital tasks, inspects suspicious messages for safety hazards, and includes an accessibility center with high-contrast themes and enlarged controls.",
    keyFeatures: [
      {
        title: "Ask & Simplify (AI Text Simplifier)",
        description:
          "Transforms confusing legal documents, banking SMS notices, and technical jargon into calm, easily understood summaries using Google Gemini models.",
      },
      {
        title: "Integrated Voice & Audio Ergonomics",
        description:
          "One-tap voice queries via Web Speech API combined with clear Text-to-Speech playback (`tts-button.tsx`, `voice-input.tsx`) for seniors with visual impairment or tremors.",
      },
      {
        title: "Digital Guardian & Scam Inspector",
        description:
          "Dedicated safety hub (`/safety`, `digital-guardian.tsx`) evaluating forwarded messages and requests to warn seniors of phishing and cyber threats.",
      },
      {
        title: "Saathi Lens & Step-by-Step Guides",
        description:
          "Visual assistance interface (`/lens`) and guided tutorials (`/guide`) teaching everyday tasks like bill payments, cab booking, and video calls.",
      },
      {
        title: "Accessibility Center & Safe Practice",
        description:
          "Built-in theme switcher with high-contrast modes, large typography controls, Safe Share modal, and zero-risk interactive practice sandboxes (`/practice`).",
      },
    ],
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Google GenAI SDK (@google/genai)",
      "Web Speech API",
      "Lucide React",
      "Zod",
    ],
    developmentProcess: [
      "Accessibility-first user research: Evaluated WCAG AAA standards, high contrast palettes, generous touch targets, and cognitive load minimization.",
      "GenAI prompt engineering: Configured Gemini models with tailored system prompts prioritizing empathetic, patient, and jargon-free responses.",
      "Component architecture: Built modular accessible components (`accessibility-center`, `digital-guardian`, `safe-share-modal`, `voice-input`).",
      "Repository delivery: Published clean codebase on GitHub under `HarsheenKaur11/seniorsaathi`.",
    ],
    metrics: [
      { label: "Target Audience", value: "Senior Citizens (60+)", note: "Tailored accessibility and digital ergonomics" },
      { label: "AI Engine", value: "Google Gemini", note: "Powered by @google/genai SDK" },
      { label: "Repository Status", value: "Verified on GitHub", note: "Public TypeScript / Next.js implementation" },
    ],
    images: [
      {
        placeholder: "SeniorSaathi High-Contrast Accessible Home",
        caption: "Simplified navigation displaying Ask Saathi, Daily Tips, Reminders, and Voice Assist.",
        alt: "SeniorSaathi interface preview placeholder",
      },
      {
        placeholder: "Digital Guardian & Simplification Engine",
        caption: "Safety screening module flagging fraudulent messages and rendering simple summaries.",
        alt: "SeniorSaathi safety scanner placeholder",
      },
    ],
    githubUrl: "https://github.com/HarsheenKaur11/seniorsaathi",
    liveDemoUrl: null, // Ready to run locally with repo instructions
    featured: true,
    cityBuildingId: "community-care",
    cityBuildingName: "Community Care Centre & Senior Support Hub",
    cityDistrict: "Civic & Care District",
    verificationNotes:
      "Repository verified on GitHub (HarsheenKaur11/seniorsaathi). Verified implemented modules include Ask & Simplify, Voice/TTS, Digital Guardian, Saathi Lens, Accessibility Center, Reminders, and Practice Mode.",
    role: "Creator & Lead Developer",
    teamSize: "Individual Project",
  },
  {
    slug: "planora-ai",
    title: "Planora AI — Intelligent Generative Event Planning Platform",
    shortTitle: "Planora AI",
    tagline: "GenAI-powered end-to-end event planning suite with real-time budget ledgers, run-sheets, and vendor procurement.",
    category: "Generative AI",
    categoryLabel: "Generative AI / Productivity / Event Planning",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Google Gemini API", "Prisma ORM", "Recharts", "Zod", "React Hook Form"],
    status: "Production Live",
    statusBadge: "Live Production on Vercel",
    isInProgress: false,
    problem:
      "Organizing large-scale events such as weddings, milestone celebrations, and conferences involves fragmented spreadsheets, chaotic vendor negotiation, and stress over unplanned budget overruns.",
    solution:
      "Planora AI is an enterprise-grade generative event orchestrator deployed live on Vercel. Leveraging Google Gemini models, it ingests natural-language vision prompts to generate structured budget ledgers with Recharts financial breakdowns, dynamic timelines, vendor evaluation workflows, and prioritized task checklists, backed by a deterministic offline fallback engine.",
    keyFeatures: [
      {
        title: "Natural-Language AI Event Creator",
        description:
          "Multi-step wizard transforming prompts like 'traditional wedding for 250 guests in Delhi' into full event blueprints with customizable schemas.",
      },
      {
        title: "Smart Budget Planner & Recharts Ledger",
        description:
          "Interactive financial breakdown with categorized donut charts, estimated vs actual spend, and an 'Optimize My Budget' AI audit action.",
      },
      {
        title: "Intelligent Chronological Timeline",
        description:
          "Adaptive event run-sheet recalculating deadlines based on target dates and flagging overdue milestones.",
      },
      {
        title: "Full Vendor Procurement Pipeline",
        description:
          "End-to-end status tracking (Contacted, Negotiating, Shortlisted, Booked) with side-by-side quotation comparisons.",
      },
      {
        title: "Deterministic Offline Fallback Engine",
        description:
          "Guarantees seamless reliability: if the Gemini API key is unset or times out, a transparent offline engine produces structured templates.",
      },
    ],
    technologies: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Google Generative AI (@google/generative-ai)",
      "Prisma ORM",
      "Recharts",
      "Lucide React",
      "Zod",
      "React Hook Form",
    ],
    developmentProcess: [
      "Full-stack architecture: Engineered server actions, Prisma database models, and route handlers in Next.js 14.",
      "Culturally attuned planning models: Configured INR ₹ currency defaults with full multi-currency flexibility (USD, EUR, GBP, AED).",
      "Financial visualization: Built interactive budget analytics using Recharts and reactive balance calculations.",
      "Production deployment: Successfully deployed and monitored live on Vercel with automated CI/CD pipelines.",
    ],
    metrics: [
      { label: "Deployment", value: "Production Live", note: "planora-ai-lyart.vercel.app" },
      { label: "Currency Support", value: "INR (₹) Default", note: "Plus multi-currency USD, EUR, GBP, AED" },
      { label: "Architecture", value: "Next.js 14 + Prisma", note: "Server actions & robust schema typing" },
    ],
    images: [
      {
        placeholder: "Planora AI Multi-Step Event Creator",
        caption: "Natural language input wizard configuring guest count, budget, and cultural parameters.",
        alt: "Planora AI event creation wizard placeholder",
      },
      {
        placeholder: "Smart Budget Planner & Vendor Ledger",
        caption: "Recharts financial ledger illustrating categorized allocations and spend progress.",
        alt: "Planora AI budget and vendor tracker placeholder",
      },
    ],
    githubUrl: "https://github.com/HarsheenKaur11/planora-ai",
    liveDemoUrl: "https://planora-ai-lyart.vercel.app",
    featured: true,
    cityBuildingId: "events-centre",
    cityBuildingName: "Events & Convention Centre",
    cityDistrict: "Arts & Entertainment District",
    verificationNotes:
      "Fully verified live production application deployed at https://planora-ai-lyart.vercel.app with public repository at https://github.com/HarsheenKaur11/planora-ai.",
    role: "Lead Full-Stack & GenAI Engineer",
    teamSize: "Individual Project",
  },
  {
    slug: "arcanum",
    title: "Arcanum — Interactive Learning & EdTech Experience",
    shortTitle: "Arcanum",
    tagline: "Gamified educational exploration combining interactive escape rooms, notes, and AI flashcards.",
    category: "EdTech",
    categoryLabel: "EdTech / Interactive Learning / AI",
    tags: ["Next.js", "React", "TypeScript", "Gamification", "Tailwind CSS", "EdTech", "AI Quizzes"],
    status: "In Progress",
    statusBadge: "IN PROGRESS",
    isInProgress: true,
    problem:
      "Traditional online learning platforms frequently rely on passive video lectures and dry multiple-choice forms, resulting in low retention, high cognitive fatigue, and diminished learner motivation.",
    solution:
      "Arcanum transforms study material into an engaging, gamified journey. Visitors learn complex computer science and data concepts by solving puzzle challenges inside virtual escape rooms, capturing organized study notes, and generating interactive flashcard sets for spaced-repetition revision.",
    keyFeatures: [
      {
        title: "1. Interactive Escape Rooms",
        description:
          "Curated puzzle chambers where users decode logic riddles, fix broken code snippets, and deduce answers to unlock subsequent conceptual chambers.",
        isPlanned: false, // In active development
      },
      {
        title: "2. Personal Notes Workspace",
        description:
          "Accessible, distraction-free markdown note-taking environment to capture reflections, code annotations, and lecture takeaways.",
        isPlanned: false,
      },
      {
        title: "3. Flashcard & Quiz Generator",
        description:
          "Algorithmic flashcard engine designed to turn study summaries into rapid-fire quizzes for memory consolidation and exam readiness.",
        isPlanned: true, // Clearly marked as planned/upcoming
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Educational Gamification Engine"],
    developmentProcess: [
      "Concept and game design: Outlined room progression narratives and educational challenge rubrics.",
      "Prototype mechanics: Developing room state management, timer systems, and hint unlocks in React.",
      "Notes & flashcard engine: Engineering markdown parser and spaced repetition card flip components.",
      "Active development: Currently in progress—milestones are actively being built and integrated.",
    ],
    metrics: [
      { label: "Project Phase", value: "In Active Development", note: "Core mechanics currently being prototyped" },
      { label: "Signature Feature", value: "Learning Escape Rooms", note: "Concept mastery through game-like puzzle solving" },
      { label: "Status Notice", value: "Verified In Progress", note: "Transparently documented roadmap" },
    ],
    images: [
      {
        placeholder: "Arcanum Escape Room Chamber Concept",
        caption: "Early concept layout of interactive code puzzle chamber with door lock mechanics.",
        alt: "Arcanum escape room interface placeholder",
      },
      {
        placeholder: "Interactive Flashcard & Quiz Prototype",
        caption: "Study deck interface for flipping cards and self-testing knowledge retention.",
        alt: "Arcanum flashcard quiz generator placeholder",
      },
    ],
    githubUrl: null, // In progress, private repo
    liveDemoUrl: null, // Coming soon
    featured: true,
    cityBuildingId: "school-academy",
    cityBuildingName: "School / Academy / Knowledge Centre",
    cityDistrict: "Education & Innovation District",
    verificationNotes:
      "CRITICAL: Arcanum is officially IN PROGRESS. The planned roadmap includes Escape Rooms, Personal Notes, and Flashcard/Quiz Generator. No completed claims are made prematurely.",
    role: "Concept Designer & Developer",
    teamSize: "Personal Innovation Project",
  },
];
