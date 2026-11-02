import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Compass,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Building2,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { projects } from "@/data/projects";
import { cityBuildings } from "@/data/city";

interface WorldProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: WorldProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "City Destination Not Found" };

  return {
    title: `${project.cityBuildingName} — City Landmark | Harsheen's World`,
    description: `Inspect ${project.cityBuildingName} in Harsheen's World, representing the ${project.shortTitle} project.`,
  };
}

export default function WorldProjectDetailPage({ params }: WorldProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const building = cityBuildings.find((b) => b.projectSlug === project.slug);

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Navigation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link
          href="/world"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Isometric City Map</span>
        </Link>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline"
        >
          <span>Full Editorial Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Main City Landmark Showcase */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-midnight-900 border border-slate-800 p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-purple-400 tracking-wider">
                City Landmark Profile
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {project.cityBuildingName}
              </h1>
              <p className="text-sm text-slate-300">
                District: <strong>{project.cityDistrict}</strong> • Manifests: <strong>{project.title}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-electric/15 text-electric-light border border-electric/30">
                {project.statusBadge}
              </span>
            </div>
          </div>

          {/* Architectural Blueprint Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="p-6 rounded-2xl bg-midnight-950 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-electric">
                <Building2 className="w-4 h-4" />
                <span>ARCHITECTURAL SPECIFICATIONS</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {building?.description || project.tagline}
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2 border-t border-slate-900">
                <div>
                  <span className="text-slate-400 block">Architecture:</span>
                  <strong className="text-white capitalize">{building?.architecturalStyle || "Modern Pavilion"}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Roof Design:</span>
                  <strong className="text-white capitalize">{building?.roofStyle?.replace("-", " ") || "Sculpted"}</strong>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-midnight-950 to-midnight-850 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                <Sparkles className="w-4 h-4" />
                <span>ASSOCIATED PROJECT SUMMARY</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                {project.shortTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-3">
                {project.solution}
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Next Actions */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/world"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 transition"
            >
              <Compass className="w-4 h-4 text-purple-400" />
              <span>Back to City Overview</span>
            </Link>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-electric hover:bg-electric-dark text-white text-xs font-semibold tracking-wide shadow-electric-sm transition"
            >
              <span>Read Full Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
