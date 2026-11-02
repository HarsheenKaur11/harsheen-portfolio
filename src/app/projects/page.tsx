"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Layers, Sparkles, Compass, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters } from "@/components/projects/ProjectFilters";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");

  const categories = [
    { id: "all", label: "All Projects (7)" },
    { id: "AI & ML", label: "AI & ML" },
    { id: "Data Analytics", label: "Data Analytics" },
    { id: "Generative AI", label: "Generative AI" },
    { id: "Web Development", label: "Web Development" },
    { id: "EdTech", label: "EdTech (In Progress)" },
  ];

  // Extract all unique technologies
  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Category check
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      // Tech check
      if (selectedTech !== "all" && !p.technologies.includes(selectedTech)) {
        return false;
      }
      // Search query check
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesShortTitle = p.shortTitle.toLowerCase().includes(q);
        const matchesTagline = p.tagline.toLowerCase().includes(q);
        const matchesProblem = p.problem.toLowerCase().includes(q);
        const matchesTech = p.technologies.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesShortTitle && !matchesTagline && !matchesProblem && !matchesTech) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedTech]);

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 border-b border-slate-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-electric">
            <Layers className="w-3.5 h-3.5" />
            <span>CONFIRMED PORTFOLIO SHOWCASE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Seven Verified Project Case Studies
          </h1>
          <p className="text-lg text-slate-300 font-sans leading-relaxed max-w-3xl">
            Each project addresses a distinct problem space across AI/ML credibility verification, quantitative equity analytics, agricultural risk mitigation, accessible senior ergonomics, and generative planning.
          </p>
        </div>
      </section>

      {/* Interactive Filters Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedTech={selectedTech}
          onTechChange={setSelectedTech}
          categories={categories}
          allTechs={allTechs}
          totalResults={filteredProjects.length}
        />
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-midnight-950 border border-slate-800 space-y-3">
            <h3 className="text-lg font-serif font-bold text-white">
              No matching projects found
            </h3>
            <p className="text-xs text-slate-400">
              Try resetting your category or technology filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedTech("all");
              }}
              className="px-4 py-2 rounded-xl bg-electric text-white text-xs font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* City Bridge Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-3xl bg-midnight-900 border border-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-serif font-bold text-white">
              Prefer exploring these projects as buildings?
            </h3>
            <p className="text-xs text-slate-300">
              Every project above corresponds to a unique architectural landmark in the 2.5D Isometric City.
            </p>
          </div>
          <Link
            href="/world"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-electric to-purple-600 hover:from-electric-dark hover:to-purple-700 text-white font-semibold text-xs tracking-wider uppercase shadow-electric-md transition shrink-0"
          >
            <Compass className="w-4 h-4" />
            <span>Explore In Isometric City</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
