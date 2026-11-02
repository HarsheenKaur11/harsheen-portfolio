"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  Code2,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { skillsList, skillCategories, SkillItem } from "@/data/skills";
import { projects, ProjectItem } from "@/data/projects";

export const SkillProjectExplorer: React.FC = () => {
  const [selectedSkillName, setSelectedSkillName] = useState<string>("Python");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const selectedSkill = skillsList.find((s) => s.name === selectedSkillName) || skillsList[0];

  // Projects that use the selected skill
  const matchingProjects = projects.filter((p) =>
    selectedSkill.projectSlugs.includes(p.slug)
  );

  const filteredSkills = skillsList.filter((s) => {
    if (activeCategory === "all") return true;
    return s.category === activeCategory;
  });

  return (
    <div className="rounded-3xl bg-midnight-950 border border-slate-800 p-6 sm:p-8 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/15 text-electric text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE SKILL-TO-PROJECT DISCOVERY</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Skill-to-Project Explorer
          </h3>
          <p className="text-sm text-slate-300">
            Select any technology to inspect where and how it was applied across Harsheen&apos;s verified projects.
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1 rounded-full text-xs font-medium transition ${
              activeCategory === "all"
                ? "bg-electric text-white font-semibold"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            All
          </button>
          {skillCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                activeCategory === c.id
                  ? "bg-electric text-white font-semibold"
                  : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Skill Badges Grid */}
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
          Click a technology to filter associated projects:
        </span>
        <div className="flex flex-wrap gap-2">
          {filteredSkills.map((skill) => {
            const isSelected = skill.name === selectedSkillName;
            const hasProjects = skill.projectSlugs.length > 0;
            return (
              <button
                key={skill.name}
                onClick={() => setSelectedSkillName(skill.name)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-electric text-white shadow-electric-sm font-semibold scale-105 ring-2 ring-electric/50"
                    : "bg-midnight-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                <span>{skill.name}</span>
                {hasProjects && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {skill.projectSlugs.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Skill Detail & Matching Projects */}
      <div className="p-6 rounded-2xl bg-midnight-900 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div>
            <div className="text-xs font-mono text-electric uppercase tracking-wider">
              {selectedSkill.categoryLabel}
            </div>
            <h4 className="text-xl font-bold text-white font-serif mt-0.5">
              {selectedSkill.name}
            </h4>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              {selectedSkill.description}
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono shrink-0">
            {matchingProjects.length > 0 ? (
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                Used in {matchingProjects.length} Verified Project{matchingProjects.length > 1 ? "s" : ""}
              </span>
            ) : (
              <span className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                Applied in Professional Operations / Academic Honors
              </span>
            )}
          </div>
        </div>

        {/* Matching Projects Showcase */}
        {matchingProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {matchingProjects.map((p) => (
              <div
                key={p.slug}
                className="p-4 rounded-xl bg-midnight-950 border border-slate-800/80 flex flex-col justify-between hover:border-electric/50 transition group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-electric uppercase">
                      {p.category}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                      {p.statusBadge}
                    </span>
                  </div>

                  <h5 className="font-serif text-base font-bold text-white group-hover:text-electric-light transition">
                    {p.shortTitle}
                  </h5>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {p.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                    <Compass className="w-3.5 h-3.5 text-purple-400" />
                    <span className="truncate max-w-[120px]">{p.cityBuildingName}</span>
                  </div>

                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-electric group-hover:underline inline-flex items-center gap-1 font-semibold text-xs"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-midnight-950/60 border border-slate-800/60 text-center space-y-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
            <h5 className="text-sm font-semibold text-white">
              Enterprise Operations & Academic Rigor
            </h5>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              {selectedSkill.name} is a key asset in Harsheen&apos;s data workflow at NielsenIQ (MDQC & sector deliverables) or completed national NPTEL certifications.
            </p>
            <div className="pt-2 flex justify-center gap-3 text-xs">
              <Link
                href="/experience"
                className="text-electric hover:underline font-medium"
              >
                View NIQ Experience →
              </Link>
              <Link
                href="/achievements"
                className="text-electric hover:underline font-medium"
              >
                View Certifications →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
