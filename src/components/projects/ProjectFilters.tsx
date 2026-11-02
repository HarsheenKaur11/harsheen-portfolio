"use client";

import React from "react";
import { Search, Filter, X } from "lucide-react";

interface ProjectFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTech: string;
  onTechChange: (tech: string) => void;
  categories: { id: string; label: string }[];
  allTechs: string[];
  totalResults: number;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTech,
  onTechChange,
  categories,
  allTechs,
  totalResults,
}) => {
  const isFiltered = selectedCategory !== "all" || selectedTech !== "all" || searchQuery !== "";

  const clearFilters = () => {
    onSearchChange("");
    onCategoryChange("all");
    onTechChange("all");
  };

  return (
    <div className="space-y-4 bg-midnight-950 p-4 sm:p-6 rounded-3xl border border-slate-800 shadow-xl">
      {/* Top Search & Results Counter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title, keyword, or problem statement..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-midnight-900 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-electric transition"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs text-slate-400 font-mono">
            Showing <strong className="text-white">{totalResults}</strong> of 7 verified projects
          </span>

          {isFiltered && (
            <button
              onClick={clearFilters}
              className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-medium"
            >
              <X className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
        <span className="text-slate-400 font-medium shrink-0 flex items-center gap-1">
          <Filter className="w-3 h-3" />
          Category:
        </span>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-3 py-1.5 rounded-full transition shrink-0 font-medium ${
              selectedCategory === cat.id
                ? "bg-electric text-white font-semibold shadow-electric-sm"
                : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tech quick filter selector */}
      <div className="flex items-center gap-2 text-xs pt-1 border-t border-slate-900">
        <span className="text-slate-400 font-medium shrink-0">Filter by Technology:</span>
        <select
          value={selectedTech}
          onChange={(e) => onTechChange(e.target.value)}
          className="px-3 py-1.5 rounded-xl bg-midnight-900 border border-slate-700/80 text-xs text-slate-200 focus:outline-none focus:border-electric"
        >
          <option value="all">All Technologies (Full Stack, ML, Analytics)</option>
          {allTechs.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
