export interface SkillItem {
  name: string;
  category: "languages" | "web" | "analytics" | "ai_ml" | "libraries_tools" | "digital_tools";
  categoryLabel: string;
  projectSlugs: string[];
  description?: string;
  level?: "core" | "proficient" | "familiar";
}

export interface SkillCategory {
  id: "languages" | "web" | "analytics" | "ai_ml" | "libraries_tools" | "digital_tools";
  title: string;
  description: string;
  iconName: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Foundational and computational programming languages used across applications and data pipelines.",
    iconName: "Code2",
  },
  {
    id: "ai_ml",
    title: "AI & Machine Learning",
    description: "Deep learning models, natural language processing, predictive algorithms, and computer vision architectures.",
    iconName: "Cpu",
  },
  {
    id: "analytics",
    title: "Data Analytics & BI",
    description: "Enterprise visualization tools, business intelligence dashboards, and advanced spreadsheet engineering.",
    iconName: "BarChart3",
  },
  {
    id: "web",
    title: "Web & Full-Stack Development",
    description: "Modern web frameworks, backend application servers, RESTful APIs, and accessible frontend interfaces.",
    iconName: "Globe",
  },
  {
    id: "libraries_tools",
    title: "Scientific & Developer Tooling",
    description: "Numerical computation packages, version control, and collaborative scientific computing environments.",
    iconName: "Terminal",
  },
  {
    id: "digital_tools",
    title: "Digital Growth & Operations",
    description: "Audience analytics, visual communication platforms, and content distribution platforms.",
    iconName: "Sparkles",
  },
];

export const skillsList: SkillItem[] = [
  // Programming Languages
  {
    name: "Python",
    category: "languages",
    categoryLabel: "Programming Languages",
    projectSlugs: ["factshield", "stockminds", "crop-failure-risk-analysis"],
    description: "Core language for data analysis, machine learning pipelines, and backend APIs.",
  },
  {
    name: "SQL",
    category: "languages",
    categoryLabel: "Programming Languages",
    projectSlugs: ["the-eleventh-hour", "planora-ai"],
    description: "Relational database querying, schema structuring, joins, and data extraction.",
  },
  {
    name: "Java",
    category: "languages",
    categoryLabel: "Programming Languages",
    projectSlugs: [],
    description: "Object-oriented software principles, algorithms, and application architecture.",
  },
  {
    name: "TypeScript",
    category: "languages",
    categoryLabel: "Programming Languages",
    projectSlugs: ["seniorsaathi", "planora-ai", "arcanum"],
    description: "Type-safe modern web application architecture and design systems.",
  },

  // Web Development
  {
    name: "HTML",
    category: "web",
    categoryLabel: "Web Development",
    projectSlugs: ["the-eleventh-hour", "stockminds", "seniorsaathi", "planora-ai"],
    description: "Semantic document structure, web standards, and accessibility markup.",
  },
  {
    name: "CSS",
    category: "web",
    categoryLabel: "Web Development",
    projectSlugs: ["the-eleventh-hour", "stockminds", "seniorsaathi", "planora-ai"],
    description: "Modern layouts, responsive styling, design token systems, and animations.",
  },
  {
    name: "JavaScript",
    category: "web",
    categoryLabel: "Web Development",
    projectSlugs: ["the-eleventh-hour", "factshield", "seniorsaathi", "planora-ai", "arcanum"],
    description: "Client-side interactivity, DOM orchestration, and asynchronous API communication.",
  },
  {
    name: "Flask",
    category: "web",
    categoryLabel: "Web Development",
    projectSlugs: ["factshield", "stockminds"],
    description: "Lightweight Python microframework for serving machine learning models and web services.",
  },
  {
    name: "Next.js",
    category: "web",
    categoryLabel: "Web Development",
    projectSlugs: ["seniorsaathi", "planora-ai", "arcanum"],
    description: "Full-stack React framework with App Router, server-side rendering, and API routes.",
  },

  // Data Visualization and Analytics
  {
    name: "Power BI",
    category: "analytics",
    categoryLabel: "Data Visualization & Analytics",
    projectSlugs: [],
    description: "Interactive executive reporting, DAX measures, and dimensional data modeling.",
  },
  {
    name: "Tableau",
    category: "analytics",
    categoryLabel: "Data Visualization & Analytics",
    projectSlugs: [],
    description: "Visual exploration, storyboarding, and interactive metric dashboards.",
  },
  {
    name: "Microsoft Excel",
    category: "analytics",
    categoryLabel: "Data Visualization & Analytics",
    projectSlugs: ["crop-failure-risk-analysis"],
    description: "High-volume data auditing, discrepancy tracking, and numerical modeling.",
  },
  {
    name: "PivotTables",
    category: "analytics",
    categoryLabel: "Data Visualization & Analytics",
    projectSlugs: ["crop-failure-risk-analysis"],
    description: "Dynamic multidimensional aggregation and sector data reconciliation.",
  },
  {
    name: "VLOOKUP",
    category: "analytics",
    categoryLabel: "Data Visualization & Analytics",
    projectSlugs: ["crop-failure-risk-analysis"],
    description: "Relational cross-referencing and data validation across enterprise tables.",
  },

  // AI and Machine Learning
  {
    name: "Scikit-learn",
    category: "ai_ml",
    categoryLabel: "AI & Machine Learning",
    projectSlugs: ["factshield", "stockminds"],
    description: "Supervised and unsupervised models, preprocessing, Random Forests, and cross-validation.",
  },
  {
    name: "LSTM",
    category: "ai_ml",
    categoryLabel: "AI & Machine Learning",
    projectSlugs: ["factshield"],
    description: "Long Short-Term Memory recurrent networks for sequence and textual sentiment classification.",
  },
  {
    name: "Deep Learning",
    category: "ai_ml",
    categoryLabel: "AI & Machine Learning",
    projectSlugs: ["factshield"],
    description: "Neural network architectures, backpropagation, and representation learning.",
  },
  {
    name: "NLP",
    category: "ai_ml",
    categoryLabel: "AI & Machine Learning",
    projectSlugs: ["factshield", "seniorsaathi"],
    description: "Natural language processing, tokenization, text embeddings, and language modeling.",
  },
  {
    name: "Computer Vision",
    category: "ai_ml",
    categoryLabel: "AI & Machine Learning",
    projectSlugs: ["factshield", "seniorsaathi"],
    description: "Convolutional neural network inference, ResNet18, and visual recognition.",
  },
  {
    name: "Generative AI",
    category: "ai_ml",
    categoryLabel: "AI & Machine Learning",
    projectSlugs: ["seniorsaathi", "planora-ai", "arcanum"],
    description: "Google Gemini API integration, prompt engineering, and contextual assistance.",
  },

  // Scientific & Developer Libraries
  {
    name: "Pandas",
    category: "libraries_tools",
    categoryLabel: "Libraries & Tools",
    projectSlugs: ["stockminds", "crop-failure-risk-analysis"],
    description: "Dataframe manipulation, data cleaning, time-series operations, and feature transformations.",
  },
  {
    name: "NumPy",
    category: "libraries_tools",
    categoryLabel: "Libraries & Tools",
    projectSlugs: ["crop-failure-risk-analysis"],
    description: "High-performance vector operations and multidimensional array mathematics.",
  },
  {
    name: "Matplotlib",
    category: "libraries_tools",
    categoryLabel: "Libraries & Tools",
    projectSlugs: ["stockminds", "crop-failure-risk-analysis"],
    description: "Scientific charts, distribution plots, and publication-ready graphs.",
  },
  {
    name: "Seaborn",
    category: "libraries_tools",
    categoryLabel: "Libraries & Tools",
    projectSlugs: ["crop-failure-risk-analysis"],
    description: "Statistical data visualization, heatmap correlations, and aesthetic distribution views.",
  },
  {
    name: "Google Colab",
    category: "libraries_tools",
    categoryLabel: "Libraries & Tools",
    projectSlugs: ["crop-failure-risk-analysis"],
    description: "Cloud-hosted Jupyter notebook environment for model experimentation.",
  },
  {
    name: "VS Code",
    category: "libraries_tools",
    categoryLabel: "Libraries & Tools",
    projectSlugs: ["factshield", "stockminds", "the-eleventh-hour", "seniorsaathi", "planora-ai", "arcanum"],
    description: "Primary development environment with customized workflows.",
  },
  {
    name: "Git",
    category: "libraries_tools",
    categoryLabel: "Libraries & Tools",
    projectSlugs: ["factshield", "stockminds", "the-eleventh-hour", "seniorsaathi", "planora-ai", "arcanum"],
    description: "Version control, branching strategies, and repository collaboration.",
  },

  // Other Tools
  {
    name: "Canva",
    category: "digital_tools",
    categoryLabel: "Other Tools",
    projectSlugs: [],
    description: "Brand asset design, social media visuals, and presentation materials.",
  },
  {
    name: "Meta Business Suite",
    category: "digital_tools",
    categoryLabel: "Other Tools",
    projectSlugs: [],
    description: "Audience insights, organic post scheduling, and engagement metrics tracking.",
  },
  {
    name: "WordPress",
    category: "digital_tools",
    categoryLabel: "Other Tools",
    projectSlugs: [],
    description: "Content management systems, layout customization, and theme administration.",
  },
  {
    name: "cPanel",
    category: "digital_tools",
    categoryLabel: "Other Tools",
    projectSlugs: ["the-eleventh-hour"],
    description: "Server management, domain configuration, MySQL database setup, and hosting.",
  },
  {
    name: "Google Analytics",
    category: "digital_tools",
    categoryLabel: "Other Tools",
    projectSlugs: [],
    description: "Website traffic auditing, user flow analysis, and event tracking.",
  },
];
