import React from "react";
import Link from "next/link";
import {
  Download,
  Printer,
  Mail,
  Linkedin,
  Github,
  Award,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { experiences } from "@/data/experience";
import { educationList } from "@/data/education";
import { certifications } from "@/data/certifications";
import { skillsList } from "@/data/skills";

export const metadata = {
  title: "Official Resume — Harsheen Kaur",
  description:
    "Curriculum Vitae for Harsheen Kaur: BCA Graduate (9.48 CGPA), Data Operations Analyst at NielsenIQ, Machine Learning & Full-Stack Developer.",
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-16 space-y-10">
      {/* Action Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-electric hover:bg-electric-dark text-white text-xs font-semibold shadow-electric-sm transition"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>

      {/* Printable Sheet */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#FAF9F5] text-[#1E2533] p-8 sm:p-14 shadow-2xl border border-[#E2DACF] space-y-8 font-serif">
          {/* Header */}
          <div className="text-center border-b border-[#D9D0C2] pb-8 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827]">
              {profileData.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-sans text-[#4B5563] pt-1">
              <span>{profileData.email}</span>
              <span>•</span>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#2563EB]"
              >
                linkedin.com/in/harsheenkaur11
              </a>
              <span>•</span>
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#2563EB]"
              >
                github.com/HarsheenKaur11
              </a>
              <span>•</span>
              <span>Delhi, India</span>
            </div>
          </div>

          {/* Profile Summary */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#111827] border-b border-[#D9D0C2] pb-1">
              PROFILE SUMMARY
            </h2>
            <p className="text-sm font-sans text-[#374151] leading-relaxed">
              {profileData.summary.recruiterBrief}
            </p>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#111827] border-b border-[#D9D0C2] pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5 font-sans">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-sm">
                    <span className="font-bold text-[#111827] font-serif">
                      {exp.role} — {exp.organization}
                    </span>
                    <span className="text-xs font-mono text-[#6B7280]">
                      {exp.period}
                    </span>
                  </div>

                  {exp.award && (
                    <span className="inline-block text-xs font-semibold text-[#B45309]">
                      ★ {exp.award}
                    </span>
                  )}

                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#374151] leading-relaxed">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#111827] border-b border-[#D9D0C2] pb-1">
              EDUCATION
            </h2>

            <div className="space-y-3 font-sans">
              {educationList.map((edu) => (
                <div key={edu.id} className="flex flex-wrap items-start justify-between gap-2 text-xs">
                  <div>
                    <h3 className="font-bold text-[#111827] font-serif text-sm">
                      {edu.degree}
                    </h3>
                    <p className="text-[#4B5563]">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <div className="text-right font-mono">
                    <span className="font-bold text-[#111827] block">
                      {edu.scoreType}: {edu.score}
                    </span>
                    <span className="text-[#6B7280]">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects */}
          <section className="space-y-3 font-sans">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#111827] border-b border-[#D9D0C2] pb-1">
              KEY PROJECTS & SYSTEMS
            </h2>

            <div className="space-y-3 text-xs text-[#374151]">
              <div>
                <strong className="text-[#111827]">
                  FactShield — Fake News & AI Content Detection:
                </strong>{" "}
                Python, Flask, LSTM, ResNet18, NLP, NewsAPI, Google Trends. Achieved 85% reported accuracy detecting fake news and synthetic visual manipulations. Tested with 15+ trial users.
              </div>
              <div>
                <strong className="text-[#111827]">
                  StockMinds — ML-Based Stock Market Platform:
                </strong>{" "}
                Python, Flask, Random Forest, yFinance, Pandas, Matplotlib. Predicted directional trajectory across 15+ NIFTY stocks with 78% directional accuracy.
              </div>
              <div>
                <strong className="text-[#111827]">
                  SeniorSaathi — AI Companion for Elderly Accessibility:
                </strong>{" "}
                Next.js, TypeScript, Google Gemini API, Web Speech API, Tailwind CSS. Empathetic text simplifier, scam detector, and voice assistant designed to simplify digital journeys for senior citizens.
              </div>
              <div>
                <strong className="text-[#111827]">
                  Planora AI — Intelligent Generative Event Planning Platform:
                </strong>{" "}
                Next.js 14, TypeScript, Google Gemini API, Prisma ORM, Recharts. Production live platform on Vercel featuring AI budget optimization, run-sheet timeline, and vendor tracking.
              </div>
              <div>
                <strong className="text-[#111827]">
                  Addressing Crop Failure Risks for Farmers:
                </strong>{" "}
                Python, Pandas, Seaborn, Excel. Analytical research study in a 5-member team mapping regional climate risk factors and yield correlations.
              </div>
            </div>
          </section>

          {/* Certifications & Honors */}
          <section className="space-y-2 font-sans">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#111827] border-b border-[#D9D0C2] pb-1">
              HONORS & CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#374151]">
              <div>• Human-Computer Interaction — NPTEL (IIIT Delhi), Top 1%</div>
              <div>• Joy of Computing with Python — NPTEL (IIT Madras), Top 5%</div>
              <div>• Privacy & Security in Online Media — NPTEL (IIIT Hyderabad), Elite + Silver</div>
              <div>• Computer Vision and Image Processing — NPTEL (IIT Guwahati), Elite</div>
              <div>• Gen AI Exchange Program — Google Cloud</div>
              <div>• AI Bootcamp (Machine Learning) — IBM SkillsBuild</div>
              <div>• Ethical Hacking & NLP — NPTEL (IIT Kharagpur)</div>
              <div>• Google Analytics Certification — Google</div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
