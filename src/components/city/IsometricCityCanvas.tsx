"use client";

import React, { useState, useMemo } from "react";
import { cityBuildings, cityDistricts, CityBuilding } from "@/data/city";
import { IsometricBuilding } from "./IsometricBuilding";
import { BuildingDetailModal } from "./BuildingDetailModal";
import {
  Compass,
  MapPin,
  Sparkles,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sun,
  Moon,
  Info,
  ExternalLink,
} from "lucide-react";

export const IsometricCityCanvas: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all");
  const [selectedBuilding, setSelectedBuilding] = useState<CityBuilding | null>(null);
  const [hoveredBuilding, setHoveredBuilding] = useState<CityBuilding | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [nightMode, setNightMode] = useState<boolean>(true);
  const [visitedBuildings, setVisitedBuildings] = useState<Set<string>>(new Set());
  const [activeMobileTab, setActiveMobileTab] = useState<"map" | "districts">("map");

  // Track building interactions
  const handleSelectBuilding = (building: CityBuilding) => {
    setSelectedBuilding(building);
    setVisitedBuildings((prev) => new Set(prev).add(building.id));
  };

  // Filter buildings by district
  const filteredBuildings = useMemo(() => {
    if (selectedDistrict === "all") return cityBuildings;
    const districtObj = cityDistricts.find((d) => d.id === selectedDistrict);
    if (!districtObj) return cityBuildings;
    return cityBuildings.filter((b) => districtObj.buildingIds.includes(b.id));
  }, [selectedDistrict]);

  // Sort buildings back-to-front by isometric depth: (col + row)
  const sortedBuildings = useMemo(() => {
    return [...filteredBuildings].sort((a, b) => {
      const depthA = a.isoCoordinates.col + a.isoCoordinates.row;
      const depthB = b.isoCoordinates.col + b.isoCoordinates.row;
      return depthA - depthB;
    });
  }, [filteredBuildings]);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-midnight-950 border border-slate-800 shadow-2xl flex flex-col">
      {/* City Top Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6 border-b border-slate-800 bg-midnight-900/90 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-electric/15 text-electric border border-electric/30">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white">
                Harsheen&apos;s Interactive Isometric City
              </h2>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                2.5D Digital World
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans">
              Explore 11 interactive architectural landmarks across 5 districts
            </p>
          </div>
        </div>

        {/* Discovery Counter & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Explored: {visitedBuildings.size} / 11</span>
          </div>

          {/* Zoom controls */}
          <div className="hidden sm:flex items-center bg-slate-900 rounded-xl border border-slate-800 p-0.5">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.1))}
              className="p-1.5 text-slate-400 hover:text-white transition"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 text-slate-400 hover:text-white transition"
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.3, z + 0.1))}
              className="p-1.5 text-slate-400 hover:text-white transition"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Night/Day ambient mood switch */}
          <button
            onClick={() => setNightMode(!nightMode)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition"
            title={nightMode ? "Switch to Dusk Glow" : "Switch to Midnight Glow"}
            aria-label="Toggle City Lighting"
          >
            {nightMode ? <Moon className="w-4 h-4 text-sky-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>
        </div>
      </div>

      {/* District Filter Tabs */}
      <div className="px-4 py-2.5 bg-midnight-950 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-xs scrollbar-none z-10">
        <span className="text-slate-400 font-medium px-2 shrink-0">Districts:</span>
        <button
          onClick={() => setSelectedDistrict("all")}
          className={`px-3 py-1.5 rounded-full transition shrink-0 font-medium ${
            selectedDistrict === "all"
              ? "bg-electric text-white font-semibold shadow-electric-sm"
              : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
          }`}
        >
          All Districts (11)
        </button>

        {cityDistricts.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDistrict(d.id)}
            className={`px-3 py-1.5 rounded-full transition shrink-0 font-medium flex items-center gap-1.5 ${
              selectedDistrict === d.id
                ? "bg-white text-midnight-950 font-semibold"
                : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            <span>{d.name}</span>
          </button>
        ))}
      </div>

      {/* Mobile View Switcher (Visible only on small screens) */}
      <div className="md:hidden flex border-b border-slate-800 bg-slate-900/50 p-1">
        <button
          onClick={() => setActiveMobileTab("map")}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
            activeMobileTab === "map"
              ? "bg-electric text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Interactive Canvas
        </button>
        <button
          onClick={() => setActiveMobileTab("districts")}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
            activeMobileTab === "districts"
              ? "bg-electric text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          District Directory List
        </button>
      </div>

      {/* Main City SVG Canvas Area */}
      <div
        className={`relative w-full h-[540px] sm:h-[620px] lg:h-[700px] overflow-hidden flex items-center justify-center transition-colors duration-700 ${
          nightMode
            ? "bg-gradient-to-b from-[#090D16] via-[#0E1524] to-[#121A2C]"
            : "bg-gradient-to-b from-[#13192B] via-[#1E2742] to-[#253254]"
        } ${activeMobileTab === "districts" ? "hidden md:flex" : "flex"}`}
      >
        {/* Background ambient stars / grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

        {/* Ambient glow halos behind city core */}
        <div
          className="absolute w-[600px] h-[350px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{
            background: nightMode
              ? "radial-gradient(circle, #38BDF8 0%, #477DFF 50%, transparent 80%)"
              : "radial-gradient(circle, #A855F7 0%, #3B82F6 50%, transparent 80%)",
          }}
        />

        {/* Scalable SVG Container */}
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg
            viewBox="0 0 1000 700"
            className="w-full h-full max-w-[1050px] overflow-visible select-none"
            aria-label="2.5D Isometric Map of Harsheen's World"
          >
            <defs>
              {/* Road gradient */}
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
              </linearGradient>

              {/* Park gradient */}
              <linearGradient id="parkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#065F46" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* BASE ISOMETRIC GROUND FOUNDATION */}
            <g className="city-base-ground">
              {/* Central Diamond Base Plate */}
              <polygon
                points="500,70 940,290 500,510 60,290"
                fill="#0B111E"
                stroke="rgba(71, 125, 255, 0.2)"
                strokeWidth="2"
              />
              <polygon
                points="500,85 920,295 500,505 80,295"
                fill="#0D1527"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1"
              />
            </g>

            {/* CITY ROADS NETWORK */}
            <g className="city-roads">
              {/* Main Avenue 1 (Top-Left to Bottom-Right) */}
              <polygon
                points="280,180 720,400 700,410 260,190"
                fill="url(#roadGradient)"
                stroke="rgba(71, 125, 255, 0.3)"
                strokeWidth="1"
              />
              {/* Road dashed center line */}
              <line
                x1="270"
                y1="185"
                x2="710"
                y2="405"
                stroke="#60A5FA"
                strokeWidth="1"
                strokeDasharray="6,6"
                opacity="0.6"
              />

              {/* Main Avenue 2 (Top-Right to Bottom-Left) */}
              <polygon
                points="720,180 280,400 260,390 700,170"
                fill="url(#roadGradient)"
                stroke="rgba(71, 125, 255, 0.3)"
                strokeWidth="1"
              />
              {/* Road dashed center line */}
              <line
                x1="710"
                y1="175"
                x2="270"
                y2="395"
                stroke="#60A5FA"
                strokeWidth="1"
                strokeDasharray="6,6"
                opacity="0.6"
              />

              {/* Central Roundabout */}
              <ellipse
                cx="500"
                cy="290"
                rx="35"
                ry="18"
                fill="#0F172A"
                stroke="#38BDF8"
                strokeWidth="2"
              />
              <ellipse
                cx="500"
                cy="290"
                rx="14"
                ry="7"
                fill="#065F46"
                stroke="#10B981"
                strokeWidth="1"
              />
            </g>

            {/* CENTRAL GREEN PARKS & TREES */}
            <g className="city-parks">
              {/* Park 1 (East Wing) */}
              <polygon
                points="600,240 680,280 620,310 540,270"
                fill="url(#parkGradient)"
                stroke="#10B981"
                strokeWidth="1"
                opacity="0.8"
              />
              {/* Tree 1 */}
              <circle cx="610" cy="270" r="7" fill="#10B981" opacity="0.9" />
              <circle cx="635" cy="285" r="9" fill="#059669" opacity="0.9" />
              <circle cx="580" cy="260" r="6" fill="#34D399" opacity="0.9" />

              {/* Park 2 (West Wing) */}
              <polygon
                points="400,240 460,270 380,310 320,280"
                fill="url(#parkGradient)"
                stroke="#10B981"
                strokeWidth="1"
                opacity="0.8"
              />
              {/* Tree 2 */}
              <circle cx="390" cy="270" r="8" fill="#10B981" opacity="0.9" />
              <circle cx="365" cy="285" r="6" fill="#059669" opacity="0.9" />
              <circle cx="420" cy="260" r="7" fill="#34D399" opacity="0.9" />
            </g>

            {/* ANIMATED CARS / DATA PACKETS ON ROADS */}
            <g className="city-animated-traffic">
              {/* Car 1 Moving SE */}
              <g className="animate-car-1">
                <rect x="290" y="180" width="8" height="4" rx="2" fill="#38BDF8" />
                <circle cx="292" cy="182" r="1.5" fill="#FFFFFF" />
              </g>

              {/* Car 2 Moving SW */}
              <g className="animate-car-2">
                <rect x="690" y="180" width="8" height="4" rx="2" fill="#F43F5E" />
                <circle cx="692" cy="182" r="1.5" fill="#FFFFFF" />
              </g>
            </g>

            {/* 11 ISOMETRIC BUILDINGS (RENDERED BACK TO FRONT) */}
            <g className="city-buildings">
              {sortedBuildings.map((building) => (
                <IsometricBuilding
                  key={building.id}
                  building={building}
                  isSelected={selectedBuilding?.id === building.id}
                  isHovered={hoveredBuilding?.id === building.id}
                  onSelect={handleSelectBuilding}
                  onHover={setHoveredBuilding}
                  originX={500}
                  originY={120}
                  tileWidth={120}
                  tileHeight={60}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Floating Quick Action Overlay at Bottom of Canvas */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto z-20 flex items-center gap-3 bg-midnight-950/85 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-slate-700/80 shadow-xl">
          <div className="p-2 rounded-xl bg-electric/20 text-electric">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs text-slate-300">
            <span className="font-semibold text-white">Interactive City Tip:</span> Click any building to view project details or navigate directly to its case study.
          </div>
        </div>
      </div>

      {/* MOBILE ACCESSIBLE DISTRICT DIRECTORY LIST */}
      <div
        className={`p-4 sm:p-6 space-y-6 ${
          activeMobileTab === "districts" ? "block" : "hidden md:block"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              City District Directory
            </h3>
            <p className="text-xs text-slate-400">
              Complete index of destinations, architectural profiles, and corresponding portfolio sections
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cityBuildings.map((b) => (
            <div
              key={b.id}
              onClick={() => handleSelectBuilding(b)}
              className="p-4 rounded-2xl bg-midnight-900 border border-slate-800 hover:border-electric/50 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${b.districtColor}20`,
                      color: b.accentColor,
                      border: `1px solid ${b.districtColor}40`,
                    }}
                  >
                    {b.district}
                  </span>
                  {b.badge && (
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        b.badge === "IN PROGRESS"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {b.badge}
                    </span>
                  )}
                </div>

                <h4 className="font-serif text-base font-bold text-white group-hover:text-electric transition">
                  {b.name}
                </h4>
                <p className="text-xs text-slate-300">{b.subtitle}</p>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {b.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-300">
                  {b.statLabel}: <strong className="text-white">{b.statValue}</strong>
                </span>
                <span className="text-electric group-hover:underline inline-flex items-center gap-1 font-medium text-[11px]">
                  Explore
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Building Details Modal */}
      <BuildingDetailModal
        building={selectedBuilding}
        onClose={() => setSelectedBuilding(null)}
      />
    </div>
  );
};
