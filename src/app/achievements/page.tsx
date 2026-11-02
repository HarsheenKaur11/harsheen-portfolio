import React from "react";
import Link from "next/link";
import {
  Award,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  FileCheck,
  Compass,
  ArrowRight,
  Shield,
  BookOpen,
} from "lucide-react";
import { certifications } from "@/data/certifications";

export const metadata = {
  title: "Certifications & Hall of Fame — Harsheen Kaur",
  description:
    "National awards & verified certifications: NPTEL Top 1% in HCI (IIIT Delhi), Top 5% in Python (IIT Madras), Google Cloud Gen AI, and NIQ Thumbs Up Award.",
};

export default function AchievementsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 border-b border-slate-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-amber-400">
            <Award className="w-3.5 h-3.5" />
            <span>HALL OF FAME & ACCREDITATIONS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Certifications, Honors & Enterprise Awards
          </h1>
          <p className="text-lg text-slate-300 font-sans leading-relaxed max-w-3xl">
            A verified portfolio of national competitive exam honors, advanced technical certifications from premier institutes (IIIT Delhi, IIT Madras, IIT Kharagpur, Google Cloud), and corporate operational recognition at NielsenIQ.
          </p>
        </div>
      </section>

      {/* Hall of Fame Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-3xl border p-6 sm:p-7 space-y-5 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                cert.featured
                  ? "bg-midnight-900 border-amber-500/30 ring-1 ring-amber-500/20"
                  : "bg-midnight-950 border-slate-800"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {cert.category}
                  </span>
                  {cert.distinction && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {cert.distinction}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-electric font-medium block">
                    {cert.issuer}
                  </span>
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug">
                    {cert.title}
                  </h2>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-lg bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Link / Placeholder */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400">
                    Verified Academic / Enterprise Record
                  </span>
                )}
                <FileCheck className="w-4 h-4 text-slate-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* City Landmark Association Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-midnight-900 border border-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold text-white">
              The Hall of Fame Landmark
            </h3>
            <p className="text-xs text-slate-300">
              In the Interactive Isometric City, all certifications are manifested as the illuminated golden dome of the <strong>Hall of Fame</strong>.
            </p>
          </div>
          <Link
            href="/world"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-electric hover:from-amber-600 hover:to-electric-dark text-white font-semibold text-xs tracking-wider uppercase shadow-md transition shrink-0"
          >
            <Compass className="w-4 h-4" />
            <span>Visit Hall of Fame in City</span>
          </Link>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pt-6 border-t border-slate-800">
        <Link
          href="/education"
          className="text-xs font-semibold text-slate-400 hover:text-white"
        >
          ← Education & Honors
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline"
        >
          <span>Get in Touch Directly</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
