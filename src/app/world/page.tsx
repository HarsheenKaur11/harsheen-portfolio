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
  title: "Harsheen's Little World — A Town Full of Little Stories",
  description:
    "A cozy, interactive, night-time isometric neighbourhood showcasing Harsheen Kaur's projects, NielsenIQ experience, and the centerpiece My Comfort Home with 6 interactive sanctuary rooms.",
};

export default function WorldPage() {
  return (
    <div className="py-8 sm:py-12 space-y-10">
      {/* City Experience Navigation Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wide">
              <Compass className="w-3.5 h-3.5" />
              <span>EXPERIENCE 2: HARSHEEN&apos;S LITTLE WORLD</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              A Town Full of Little Stories
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans">
              Explore a cozy, night-time isometric neighbourhood. Wander down illuminated avenues, inspect verified technology projects, or step inside <strong>My Comfort Home</strong> to visit 6 warm sanctuary rooms.
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
              <span className="text-xs font-mono uppercase text-rose-400 tracking-wider">
                Neighbourhood Cartography & Sanctuary
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                How to Explore Harsheen&apos;s Little World
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              6 Districts • 12 Destinations • 6 Comfort Rooms
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-midnight-900 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                <Building2 className="w-4 h-4" />
                <span>My Comfort Home</span>
              </div>
              <p className="text-slate-400">
                The centerpiece cottage features six illuminated windows opening into Bookshelf, Writer&apos;s Nook (with reading view), Listening Room, Explorer&apos;s Window, Creative Studio, and Curiosity Lab.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-midnight-900 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                <Compass className="w-4 h-4" />
                <span>Interconnected Districts</span>
              </div>
              <p className="text-slate-400">
                Wander through Residential & Sanctuary, Media & Intelligence, Civic & Care, Commerce & Culture, Innovation & Academy Heights, and the Financial & Corporate Centre.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-midnight-900 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Atmosphere & Time of Day</span>
              </div>
              <p className="text-slate-400">
                Toggle between daytime sun, golden hour dusk, and midnight glow to see the neighbourhood shift moods with illuminated windows and starry skies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
