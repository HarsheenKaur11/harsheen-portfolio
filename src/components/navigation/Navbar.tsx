"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Sparkles,
  Download,
  Command,
  FileText,
} from "lucide-react";
import { ModeSwitch } from "./ModeSwitch";
import { CommandPalette } from "./CommandPalette";
import { RecruiterModal } from "../modals/RecruiterModal";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  const pathname = usePathname();

  // Listen for custom open event from anywhere
  useEffect(() => {
    const handleOpenCmd = () => setCommandPaletteOpen(true);
    window.addEventListener("open-command-palette", handleOpenCmd);
    return () => window.removeEventListener("open-command-palette", handleOpenCmd);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Education", href: "/education" },
    { label: "Achievements", href: "/achievements" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-midnight-950/85 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Brand Logo & Tagline */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/"
                className="group flex flex-col focus:outline-none"
                aria-label="Harsheen Kaur Portfolio Home"
              >
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-electric-light transition-colors">
                  Harsheen Kaur
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400">
                  Data • AI • Software
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-medium text-slate-300"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      isActive
                        ? "text-electric bg-slate-900 border border-slate-700/60 font-semibold"
                        : "hover:text-white hover:bg-slate-900/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Central / Right Mode Switcher & Quick Actions */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
              {/* Persistent Experience Switcher */}
              <ModeSwitch />

              {/* Recruiter Mode Trigger */}
              <button
                onClick={() => setRecruiterModalOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-electric/15 text-electric-light hover:bg-electric/25 border border-electric/30 transition shadow-electric-sm"
                title="Open 30-Second Recruiter Summary"
              >
                <Sparkles className="w-3.5 h-3.5 text-electric" />
                <span className="hidden xl:inline">Recruiter Mode</span>
                <span className="xl:hidden">Recruiter</span>
              </button>

              {/* Command Palette Trigger */}
              <button
                onClick={() => setCommandPaletteOpen(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs text-slate-400 bg-slate-900 hover:text-white hover:bg-slate-800 border border-slate-800 transition"
                aria-label="Open command palette"
                title="Search navigation (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5" />
                <kbd className="hidden md:inline-block px-1 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setRecruiterModalOpen(true)}
                className="p-1.5 rounded-lg bg-electric/15 text-electric-light border border-electric/30 text-xs font-semibold"
                aria-label="Recruiter Mode"
              >
                ⚡
              </button>
              <button
                onClick={() => setCommandPaletteOpen(true)}
                className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
                aria-label="Toggle Mobile Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-800 bg-midnight-950 px-4 pt-3 pb-6 space-y-4">
            <div className="flex justify-center pb-2">
              <ModeSwitch />
            </div>

            <nav className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-xl text-center font-medium transition ${
                      isActive
                        ? "bg-electric text-white font-semibold"
                        : "bg-slate-900 text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setRecruiterModalOpen(true);
                }}
                className="w-full py-2.5 rounded-xl bg-electric text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Open Recruiter Mode</span>
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Modals */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenRecruiterModal={() => setRecruiterModalOpen(true)}
      />

      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
      />
    </>
  );
};
