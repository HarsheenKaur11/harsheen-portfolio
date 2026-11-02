"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  X,
  Download,
  Mail,
  Linkedin,
  Github,
  Award,
  CheckCircle2,
  Copy,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillsList } from "@/data/skills";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentRole = experiences[0];
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const coreSkills = [
    "Python",
    "SQL",
    "Advanced Excel (PivotTables, VLOOKUP)",
    "Data Operations & MDQC",
    "Machine Learning (Scikit-learn, Random Forest)",
    "Deep Learning & NLP (LSTM, ResNet18)",
    "Next.js & TypeScript",
    "Power BI",
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Recruiter Quick View Mode"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-midnight-900 border border-electric/30 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="relative bg-gradient-to-r from-midnight-950 via-midnight-900 to-midnight-850 p-6 sm:p-8 border-b border-slate-800">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/15 border border-electric/30 text-electric-light text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-electric" />
                <span>RECRUITER 30-SECOND EXECUTIVE BRIEF</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                {profileData.name}
              </h2>
              <p className="text-sm text-slate-300 font-sans">
                {profileData.title} • {profileData.location}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition"
              aria-label="Close Recruiter Mode"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-slate-800/60">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-electric hover:bg-electric-dark text-white text-xs font-semibold tracking-wide shadow-electric-sm transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profileData.email}</span>
                </>
              )}
            </button>

            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-300 text-xs transition"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-300 text-xs transition"
            >
              <Github className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Executive Summary */}
          <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Executive Candidate Summary
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {profileData.summary.recruiterBrief}
            </p>
          </div>

          {/* Current Experience & Major Honors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Experience Box */}
            <div className="p-4 rounded-2xl bg-midnight-950/70 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric-light">
                  <Briefcase className="w-4 h-4 text-electric" />
                  Current Professional Role
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  {currentRole.period}
                </span>
              </div>
              <h4 className="text-base font-semibold text-white">
                {currentRole.role}
              </h4>
              <p className="text-xs text-slate-400 font-medium">
                {currentRole.organization}
              </p>
              <div className="pt-2 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-amber-200 font-medium">
                    Awarded NIQ Thumbs Up Award for critical MDQC and coding quality.
                  </span>
                </div>
                <p className="text-slate-400">
                  Assumed end-to-end sector deadline ownership within 6 months. High-volume retail data validation and discrepancy auditing.
                </p>
              </div>
            </div>

            {/* Academic Standing */}
            <div className="p-4 rounded-2xl bg-midnight-950/70 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  Academic Excellence
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 font-bold">
                  9.48 CGPA
                </span>
              </div>
              <h4 className="text-base font-semibold text-white">
                Bachelor of Computer Applications (BCA)
              </h4>
              <p className="text-xs text-slate-400 font-medium">
                Vivekananda Institute of Professional Studies, Delhi (2022–2025)
              </p>
              <ul className="pt-2 text-xs text-slate-300 space-y-1">
                <li>• Top 1% Nationally in NPTEL Human-Computer Interaction</li>
                <li>• Top 5% in NPTEL Joy of Computing with Python</li>
                <li>• Senior Secondary CBSE Science (Non-Medical): 86.8%</li>
              </ul>
            </div>
          </div>

          {/* Core Technical Strengths */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Core Technical Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Top 3 Verified Projects */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Technical Projects
              </h3>
              <Link
                href="/projects"
                onClick={onClose}
                className="text-xs text-electric hover:underline inline-flex items-center gap-1"
              >
                <span>View all 7 projects</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {featuredProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  onClick={onClose}
                  className="p-3.5 rounded-xl bg-midnight-950/60 border border-slate-800 hover:border-electric/50 transition group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-semibold text-electric uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h5 className="text-sm font-semibold text-white group-hover:text-electric-light transition mt-0.5">
                      {p.shortTitle}
                    </h5>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {p.tagline}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-medium text-slate-300">{p.statusBadge}</span>
                    <ExternalLink className="w-3 h-3 group-hover:text-white" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-midnight-950 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Open to Analyst & Engineering opportunities
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white text-midnight-950 hover:bg-editorial-ivory text-xs font-semibold tracking-wide transition"
            >
              Contact Directly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
