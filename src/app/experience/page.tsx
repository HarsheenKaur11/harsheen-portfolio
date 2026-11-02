import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Compass,
  Download,
} from "lucide-react";
import { experiences } from "@/data/experience";
import { profileData } from "@/data/profile";

export const metadata = {
  title: "Professional Experience — Harsheen Kaur",
  description:
    "Verified career experience: Data Operations Analyst at NielsenIQ (NIQ Thumbs Up Award), Salo Orthotics, IBM SkillsBuild, and Samvaad VIPS.",
};

export default function ExperiencePage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 border-b border-slate-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-electric">
            <Briefcase className="w-3.5 h-3.5" />
            <span>VERIFIED CAREER TIMELINE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Professional Experience & Operational Impact
          </h1>
          <p className="text-lg text-slate-300 font-sans leading-relaxed max-w-3xl">
            A track record of taking end-to-end ownership, managing high-stakes data operations, delivering error-free analytics, and earning enterprise recognition.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-2xl ${
              exp.featured
                ? "bg-midnight-900 border-electric/40 ring-1 ring-electric/20"
                : "bg-midnight-950 border-slate-800"
            }`}
          >
            {/* Top Bar */}
            <div className="p-6 sm:p-8 border-b border-slate-800/80 bg-slate-950/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-electric font-semibold">
                    {exp.type}
                  </span>
                  {exp.award && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{exp.award}</span>
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {exp.role}
                </h2>
                <h3 className="text-base text-slate-300 font-medium">
                  {exp.organization} {exp.location ? `• ${exp.location}` : ""}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-midnight-900 px-3.5 py-2 rounded-xl border border-slate-800 shrink-0">
                <Calendar className="w-4 h-4 text-electric" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Highlights Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Deliverables
                </h4>
                <ul className="space-y-3">
                  {exp.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-200 leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Used */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 block">
                  Technologies, Methodologies & Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.skillsUsed.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Special City Location Link for NIQ Tower */}
              {exp.id === "niq-data-operations" && (
                <div className="mt-6 p-4 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-electric shrink-0" />
                    <span className="text-xs text-slate-200">
                      View this experience manifested architecturally as the <strong>NIQ Corporate Tower</strong> in the Interactive Isometric City.
                    </span>
                  </div>
                  <Link
                    href="/world"
                    className="text-xs font-semibold text-electric hover:underline shrink-0"
                  >
                    View in City →
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Next Step Navigation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between pt-6 border-t border-slate-800">
        <Link
          href="/about"
          className="text-xs font-semibold text-slate-400 hover:text-white"
        >
          ← Editorial About
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline"
        >
          <span>Explore 7 Confirmed Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
