export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  scoreType: "CGPA" | "Percentage";
  score: string;
  description: string;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    id: "vips-bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vivekananda Institute of Professional Studies (VIPS)",
    location: "Delhi, India",
    period: "October 2022 – June 2025",
    startDate: "2022-10",
    endDate: "2025-06",
    scoreType: "CGPA",
    score: "9.48 / 10.00",
    description:
      "Rigorous undergraduate program spanning foundational computer science, machine learning, web systems, database design, and software engineering. Graduated with top-tier academic honors.",
    highlights: [
      "Outstanding academic record with a cumulative CGPA of 9.48.",
      "Comprehensive coursework across Data Structures, Python, SQL, Machine Learning, and Web Technologies.",
      "Active participant in technical symposiums and academic initiatives.",
    ],
  },
  {
    id: "jkps-senior-secondary",
    degree: "CBSE — Senior Secondary (Class XII)",
    institution: "Jaspal Kaur Public School",
    location: "Delhi, India",
    period: "April 2021 – March 2022",
    startDate: "2021-04",
    endDate: "2022-03",
    scoreType: "Percentage",
    score: "86.8%",
    description:
      "Senior secondary education in Science Stream (Non-Medical) with core focus on Mathematics, Physics, Chemistry, and Computer Science.",
    highlights: [
      "Secured 86.8% in the All India Senior School Certificate Examination (AISSCE).",
      "Cultivated deep analytical and mathematical problem-solving fundamentals.",
    ],
  },
  {
    id: "jkps-secondary",
    degree: "CBSE — Secondary Education (Class X)",
    institution: "Jaspal Kaur Public School",
    location: "Delhi, India",
    period: "April 2019 – March 2020",
    startDate: "2019-04",
    endDate: "2020-03",
    scoreType: "Percentage",
    score: "93.6%",
    description:
      "Secondary school education establishing a distinguished scholastic foundation across sciences, mathematics, and humanities.",
    highlights: [
      "Distinction award with 93.6% in All India Secondary School Examination (AISSE).",
      "Consistent academic achievement across analytical subjects.",
    ],
  },
];
