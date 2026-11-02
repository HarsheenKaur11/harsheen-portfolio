"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Download,
  Github,
  Linkedin,
  Mail,
  Award,
  Sparkles,
  Layers,
  CheckCircle,
} from "lucide-react";
import { profileData } from "@/data/profile";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/80">
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #477DFF 0%, #38BDF8 40%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Verification Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>BCA 9.48 CGPA</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-300 font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                NIQ Thumbs Up Award
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                {profileData.headline}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl">
                {profileData.supportingText}
              </p>
            </div>

            {/* Professional Introduction */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              I am a BCA graduate with a 9.48 CGPA and verified professional experience in data operations, retail data quality, and analytical deliverables at <strong>NielsenIQ (NIQ)</strong>. My focus spans Data Analytics, Machine Learning, and building reliable full-stack applications that solve real-world problems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-electric hover:bg-electric-dark text-white font-semibold text-xs tracking-wider uppercase shadow-electric-md transition duration-200"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/world"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-electric hover:from-purple-700 hover:to-electric-dark text-white font-semibold text-xs tracking-wider uppercase shadow-lg transition duration-200"
              >
                <Compass className="w-4 h-4" />
                <span>Enter My City</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </Link>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold tracking-wider uppercase border border-slate-700/80 transition"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex items-center gap-5 pt-3 text-xs text-slate-400">
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub Repositories</span>
              </a>

              <Link
                href="/contact"
                className="flex items-center gap-1.5 hover:text-white transition"
              >
                <Mail className="w-4 h-4 text-electric" />
                <span>Direct Contact</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Interactive Emblem / Mini-City Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl bg-midnight-900/90 border border-slate-700/80 p-6 sm:p-7 shadow-2xl backdrop-blur-md space-y-6">
              {/* Emblem Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-1">
                    system://harsheen-world
                  </span>
                </div>
                <span className="text-[11px] font-mono text-electric">LIVE STATUS</span>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {profileData.keyHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-midnight-950/80 border border-slate-800/80"
                  >
                    <span className="block text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-lg font-bold text-white font-serif mt-0.5 block">
                      {item.value}
                    </span>
                    <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interactive Isometric Miniature City Sneak Peek */}
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-slate-950 to-midnight-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Compass className="w-4 h-4 text-purple-400" />
                    <span>Isometric City Map</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    11 Landmarks Active
                  </span>
                </div>

                <div className="h-28 rounded-xl bg-midnight-900/60 border border-slate-800/80 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
                  <div className="text-center z-10 space-y-1">
                    <span className="text-xs font-serif font-semibold text-white block">
                      Media House • Central Bank • NIQ Tower • Arcanum
                    </span>
                    <span className="text-[11px] text-electric block group-hover:underline">
                      Click to enter full 2.5D world view →
                    </span>
                  </div>
                  <Link
                    href="/world"
                    className="absolute inset-0"
                    aria-label="Enter interactive city world"
                  />
                </div>
              </div>

              {/* Current Role Callout */}
              <div className="p-3.5 rounded-2xl bg-electric/10 border border-electric/25 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-electric text-white shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-white block">
                    NielsenIQ (NIQ) Data Operations Analyst
                  </span>
                  <span className="text-slate-300">
                    Managing critical coding, MDQC activities & full sector deliverables.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
