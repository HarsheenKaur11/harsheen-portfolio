import React from "react";
import Link from "next/link";
import {
  Compass,
  Briefcase,
  Sparkles,
  ArrowLeft,
  Layers,
  MapPin,
  Building2,
  Info,
} from "lucide-react";
import { IsometricCityCanvas } from "@/components/city/IsometricCityCanvas";
import { cityDistricts, cityBuildings } from "@/data/city";

export const metadata = {
  title: "Welcome to Harsheen's World — Interactive Isometric City",
  description:
    "An original 2.5D interactive isometric city showcasing Harsheen Kaur's projects, career milestones at NielsenIQ, and academic honors as explorable architectural destinations.",
};

export default function WorldPage() {
  return (
    <div className="py-8 sm:py-12 space-y-10">
      {/* City Experience Navigation Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide">
              <Compass className="w-3.5 h-3.5" />
              <span>EXPERIENCE 2: WELCOME TO HARSHEEN&apos;S WORLD</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              The Interactive Isometric City
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans">
              Navigate between five interconnected districts. Click any landmark to inspect technical specifications, model accuracies, or launch its case study.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-midnight-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700/80 transition shadow-sm"
            >
              <Briefcase className="w-3.5 h-3.5 text-electric" />
              <span>Switch to Hello, World!</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The Main 2.5D Isometric City View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IsometricCityCanvas />
      </section>

      {/* Exploration Guide & Architectural Legend */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-midnight-950 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-electric tracking-wider">
                City Cartography & Architecture
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                How to Explore Harsheen&apos;s World
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              5 Districts • 11 Destinations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-midnight-900 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-electric font-semibold text-sm">
                <Building2 className="w-4 h-4" />
                <span>Distinct Architecture</span>
              </div>
              <p className="text-slate-400">
                Each building mirrors its real-world counterpart—e.g. Media House features a broadcast transmitter for FactShield, Central Bank showcases high-frequency trade indicators for StockMinds, and NIQ Tower carries an executive helipad.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-midnight-900 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                <Compass className="w-4 h-4" />
                <span>Smooth Navigation</span>
              </div>
              <p className="text-slate-400">
                Click any building to trigger its detailed data overlay. You can jump directly into deep-dive project case studies, academic transcripts, or experience write-ups with full back-navigation support.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-midnight-900 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Mobile & Accessibility</span>
              </div>
              <p className="text-slate-400">
                On smaller viewports, switch seamlessly between the scalable 2.5D interactive canvas and the touch-optimized District Guide directory to ensure complete accessibility on any device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
