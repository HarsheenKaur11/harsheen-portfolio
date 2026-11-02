"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Command,
  X,
  FileText,
  Compass,
  Briefcase,
  Layers,
  GraduationCap,
  Award,
  Mail,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";
import { profileData } from "@/data/profile";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruiterModal?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenRecruiterModal,
}) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Listen for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via custom event or parent prop
          const event = new CustomEvent("open-command-palette");
          window.dispatchEvent(event);
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const staticNavItems = [
    { name: "Home (Hello World)", href: "/", icon: Briefcase, category: "Navigation" },
    { name: "Explore Isometric City", href: "/world", icon: Compass, category: "Interactive City" },
    { name: "Editorial About", href: "/about", icon: FileText, category: "Navigation" },
    { name: "Professional Experience (NIQ)", href: "/experience", icon: Briefcase, category: "Career" },
    { name: "All Projects (7 Confirmed)", href: "/projects", icon: Layers, category: "Projects" },
    { name: "Skills & Tech Matrix", href: "/skills", icon: Sparkles, category: "Skills" },
    { name: "Education & Academics (9.48 CGPA)", href: "/education", icon: GraduationCap, category: "Academics" },
    { name: "Certifications & Hall of Fame", href: "/achievements", icon: Award, category: "Honors" },
    { name: "Contact Harsheen", href: "/contact", icon: Mail, category: "Navigation" },
    { name: "Download Resume (PDF)", href: "/resume.pdf", icon: FileText, category: "Action", isDownload: true },
  ];

  const projectItems = projects.map((p) => ({
    name: p.title,
    href: `/projects/${p.slug}`,
    icon: Layers,
    category: `Project: ${p.category}`,
    badge: p.statusBadge,
  }));

  const allItems = [...staticNavItems, ...projectItems];

  const filteredItems = allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string, isDownload?: boolean) => {
    onClose();
    if (isDownload) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Navigation"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-midnight-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-midnight-950/60">
          <Search className="w-5 h-5 text-electric" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, projects, skills, or actions..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Actions Row */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 bg-slate-900/40 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-300">Quick:</span>
            {onOpenRecruiterModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenRecruiterModal();
                }}
                className="px-2 py-0.5 rounded bg-electric/20 text-electric hover:bg-electric/30 transition text-xs font-medium"
              >
                ⚡ Recruiter Mode
              </button>
            )}
            <button
              onClick={() => handleSelect("/world")}
              className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition text-xs font-medium"
            >
              🏙️ City World
            </button>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">ESC</kbd> to exit
          </div>
        </div>

        {/* Filtered Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-400">
              No matching pages or projects found for &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(item.href, (item as any).isDownload)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-slate-200 hover:bg-slate-800 hover:text-white group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-800/80 text-electric group-hover:bg-electric group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-100 group-hover:text-white">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400">{item.category}</div>
                    </div>
                  </div>
                  {(item as any).badge && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {(item as any).badge}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
