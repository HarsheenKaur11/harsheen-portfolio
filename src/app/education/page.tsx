import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  ArrowRight,
  Compass,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { educationList } from "@/data/education";
import { profileData } from "@/data/profile";

export const metadata = {
  title: "Education & Academic Standing — Harsheen Kaur",
  description:
    "Academic background: BCA at Vivekananda Institute of Professional Studies (9.48 CGPA) and CBSE Science Stream (86.8%).",
};

export default function EducationPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 border-b border-slate-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-electric">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & SCHOLASTIC HONORS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Academic Background & Rigor
          </h1>
          <p className="text-lg text-slate-300 font-sans leading-relaxed max-w-3xl">
            A continuous record of high scholastic performance, rigorous analytical education in computer applications, and fundamental scientific problem-solving.
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {educationList.map((edu, idx) => (
          <div
            key={edu.id}
            className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-2xl ${
              idx === 0
                ? "bg-midnight-900 border-amber-500/40 ring-1 ring-amber-500/20"
                : "bg-midnight-950 border-slate-800"
            }`}
          >
            {/* Top Bar */}
            <div className="p-6 sm:p-8 border-b border-slate-800/80 bg-slate-950/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Scholastic Level
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold font-mono bg-amber-400/15 text-amber-300 border border-amber-400/30">
                    {edu.scoreType}: {edu.score}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {edu.degree}
                </h2>
                <h3 className="text-base text-slate-300 font-medium">
                  {edu.institution} • {edu.location}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-midnight-900 px-3.5 py-2 rounded-xl border border-slate-800 shrink-0">
                <Calendar className="w-4 h-4 text-electric" />
                <span>{edu.period}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                {edu.description}
              </p>

              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Scholastic Highlights & Coursework
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {idx === 0 && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4 mt-4">
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-sky-400 shrink-0" />
                    <span className="text-xs text-slate-300">
                      Represented as the <strong>University Campus</strong> in the Interactive Isometric City (Innovation & Academy Heights).
                    </span>
                  </div>
                  <Link
                    href="/world"
                    className="text-xs font-semibold text-electric hover:underline shrink-0"
                  >
                    View Campus →
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
          href="/skills"
          className="text-xs font-semibold text-slate-400 hover:text-white"
        >
          ← Skills & Technologies
        </Link>
        <Link
          href="/achievements"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline"
        >
          <span>Certifications & Hall of Fame</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
