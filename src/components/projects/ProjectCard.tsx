"use client";

import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  Compass,
} from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isInProgress = project.isInProgress;

  return (
    <article
      className="group relative flex flex-col justify-between rounded-3xl bg-midnight-900 border border-slate-800 hover:border-electric/50 transition-all duration-300 shadow-xl overflow-hidden hover:shadow-electric-sm"
      aria-label={project.title}
    >
      {/* Top Banner Accent with Category */}
      <div className="p-6 pb-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800/80 text-electric border border-slate-700/60">
            {project.category}
          </span>

          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
              isInProgress
                ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                : project.status === "Production Live"
                ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                : "bg-electric/15 text-electric-light border-electric/30"
            }`}
          >
            {project.statusBadge}
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-electric-light transition-colors line-clamp-2">
            <Link href={`/projects/${project.slug}`}>
              {project.shortTitle}
            </Link>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {project.title}
          </p>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
          {project.tagline}
        </p>

        {/* City Destination Association */}
        <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
          <Compass className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span className="truncate">City Building: <strong className="text-slate-200">{project.cityBuildingName}</strong></span>
        </div>
      </div>

      {/* Media Placeholder Showcase Card */}
      <div className="px-6 py-2">
        <div className="relative h-36 rounded-2xl bg-midnight-950 border border-slate-800 flex flex-col items-center justify-center p-4 text-center group-hover:border-slate-700 transition-colors">
          <Layers className="w-6 h-6 text-slate-600 mb-1 group-hover:text-electric transition-colors" />
          <span className="text-xs font-medium text-slate-300">
            {project.images[0]?.placeholder || "Project Interface Preview"}
          </span>
          <span className="text-[11px] text-slate-400 mt-1 max-w-xs line-clamp-1">
            {project.images[0]?.caption || "Interactive case study & architectural details"}
          </span>
        </div>
      </div>

      {/* Technologies & Footer Actions */}
      <div className="p-6 pt-4 space-y-4">
        {/* Tech Badges (first 4) */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50 font-mono"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-800/40 text-slate-400 font-mono">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.shortTitle} on GitHub`}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              >
                <Github className="w-4 h-4" />
              </a>
            ) : null}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.shortTitle}`}
                className="p-2 rounded-xl bg-electric/15 text-electric hover:bg-electric/25 transition"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-electric text-slate-200 hover:text-white text-xs font-semibold tracking-wide transition group-hover:bg-electric group-hover:text-white"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
