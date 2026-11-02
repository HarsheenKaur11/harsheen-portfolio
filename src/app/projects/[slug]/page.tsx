import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Compass,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  Code2,
  AlertCircle,
  BarChart2,
} from "lucide-react";
import { projects, ProjectItem } from "@/data/projects";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.shortTitle} — Case Study | Harsheen Kaur`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const isInProgress = project.isInProgress;

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Back Navigation Bar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <Link
            href="/world"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-medium text-purple-300 hover:text-white hover:bg-slate-800 transition"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>View in Isometric City</span>
          </Link>
        </div>
      </section>

      {/* Case Study Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-midnight-900 border border-slate-800 p-8 sm:p-12 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-electric font-semibold px-3 py-1 rounded-full bg-electric/15 border border-electric/30">
                {project.categoryLabel}
              </span>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                  isInProgress
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                    : project.status === "Production Live"
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                    : "bg-slate-800 text-slate-200 border-slate-700"
                }`}
              >
                {project.statusBadge}
              </span>
            </div>

            <div className="text-xs font-mono text-slate-400">
              {project.teamSize} • {project.role}
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Action Links & External Status */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-electric hover:bg-electric-dark text-white text-xs font-semibold tracking-wider uppercase shadow-electric-sm transition"
              >
                <span>Launch Live Production App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-950 text-slate-400 text-xs font-mono border border-slate-800">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  {isInProgress
                    ? "Live Demo: In Active Development"
                    : "Live Demo: Available for Demonstration upon Local Setup"}
                </span>
              </div>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold tracking-wider uppercase border border-slate-700 transition"
              >
                <Github className="w-4 h-4" />
                <span>Verified GitHub Repository</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-950 text-slate-400 text-xs font-mono border border-slate-800">
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>Repository: Code Available on Verified Request</span>
              </div>
            )}
          </div>

          {/* City Destination Banner */}
          <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">
                  Interactive City Landmark: {project.cityBuildingName}
                </span>
                <span className="text-slate-300">
                  Located in the {project.cityDistrict} of Harsheen&apos;s World.
                </span>
              </div>
            </div>
            <Link
              href="/world"
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shrink-0 transition"
            >
              Explore In 2.5D City
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      {project.metrics.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-midnight-950 border border-slate-800 space-y-1 shadow-lg"
              >
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  {m.label}
                </span>
                <span className="text-2xl font-serif font-bold text-white block">
                  {m.value}
                </span>
                {m.note && (
                  <span className="text-xs text-slate-400 block pt-1">
                    {m.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Problem & Solution Editorial Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="p-8 rounded-3xl bg-midnight-900 border border-slate-800 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400">
              The Challenge
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Problem Statement
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-3xl bg-midnight-900 border border-slate-800 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              The Architecture
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Proposed & Delivered Solution
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Breakdown */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-midnight-950 border border-slate-800 p-8 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-mono uppercase text-electric tracking-wider">
              System Capabilities
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mt-1">
              Key Features & Architectural Modules
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-midnight-900 border border-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-white">
                    {feat.title}
                  </h4>
                  {feat.isPlanned ? (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Planned
                    </span>
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Development Process */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Tech Stack (5 cols) */}
          <div className="md:col-span-5 rounded-3xl bg-midnight-900 border border-slate-800 p-6 sm:p-8 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-slate-400">
                Implementation Stack
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Technologies Used
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 text-slate-200 text-xs font-mono border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Development Process (7 cols) */}
          <div className="md:col-span-7 rounded-3xl bg-midnight-900 border border-slate-800 p-6 sm:p-8 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-slate-400">
                Engineering Methodology
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Development Process
              </h3>
            </div>

            <ol className="space-y-3">
              {project.developmentProcess.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-electric font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Visual & Media Showcase / Documented Placeholders */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-midnight-950 border border-slate-800 p-8 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-mono uppercase text-slate-400">
              Visual Documentation
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mt-1">
              Interface & System Architecture Previews
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Media slots are configured in <code>src/data/projects.ts</code> and ready to receive production screenshots without any code restructuring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-midnight-900 border border-slate-800 p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="h-44 rounded-xl bg-midnight-950 border border-slate-800/80 flex flex-col items-center justify-center p-6 text-center">
                  <Layers className="w-8 h-8 text-slate-600 mb-2" />
                  <span className="text-sm font-semibold text-slate-200">
                    {img.placeholder}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono mt-1">
                    [Media Slot #{idx + 1}]
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-slate-300 font-medium">
                    {img.caption}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Alt description: {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Transparency Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-electric shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-slate-300">
            <span className="font-semibold text-white block">
              Honesty & Verification Standards:
            </span>
            <p>{project.verificationNotes}</p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between pt-6 border-t border-slate-800">
        <Link
          href="/projects"
          className="text-xs font-semibold text-slate-400 hover:text-white"
        >
          ← All Projects
        </Link>
        <Link
          href="/world"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white"
        >
          <span>Explore in Harsheen&apos;s World</span>
          <Compass className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
