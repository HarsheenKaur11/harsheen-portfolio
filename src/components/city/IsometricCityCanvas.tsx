"use client";

import React, { useState, useMemo } from "react";
import { cityBuildings, cityDistricts, CityBuilding } from "@/data/city";
import { IsometricBuilding } from "./IsometricBuilding";
import { BuildingDetailModal } from "./BuildingDetailModal";
import { ComfortHomeModal } from "./ComfortHomeModal";
import {
  Compass,
  MapPin,
  Sparkles,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sun,
  Sunset,
  Moon,
  Info,
  ExternalLink,
  Home,
  CheckCircle2,
} from "lucide-react";

export const IsometricCityCanvas: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all");
  const [selectedBuilding, setSelectedBuilding] = useState<CityBuilding | null>(null);
  const [hoveredBuilding, setHoveredBuilding] = useState<CityBuilding | null>(null);
  const [isComfortHomeOpen, setIsComfortHomeOpen] = useState<boolean>(false);
  const [timeOfDay, setTimeOfDay] = useState<"day" | "dusk" | "night">("day");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [visitedBuildings, setVisitedBuildings] = useState<Set<string>>(new Set(["comfort-home"]));
  const [activeMobileTab, setActiveMobileTab] = useState<"map" | "districts">("map");

  // Pan interaction handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSelectBuilding = (building: CityBuilding) => {
    setVisitedBuildings((prev) => new Set(prev).add(building.id));
    if (building.id === "comfort-home") {
      setIsComfortHomeOpen(true);
    } else {
      setSelectedBuilding(building);
    }
  };

  // Filter buildings by district
  const filteredBuildings = useMemo(() => {
    if (selectedDistrict === "all") return cityBuildings;
    const districtObj = cityDistricts.find((d) => d.id === selectedDistrict);
    if (!districtObj) return cityBuildings;
    return cityBuildings.filter((b) => districtObj.buildingIds.includes(b.id));
  }, [selectedDistrict]);

  // Sort buildings back-to-front by isometric depth: isoX + isoY
  const sortedBuildings = useMemo(() => {
    return [...filteredBuildings].sort((a, b) => {
      const depthA = a.gridPos.isoX + a.gridPos.isoY;
      const depthB = b.gridPos.isoX + b.gridPos.isoY;
      return depthA - depthB;
    });
  }, [filteredBuildings]);

  // Sky and lawn background colors depending on time of day
  const skyBackground =
    timeOfDay === "day"
      ? "bg-gradient-to-b from-[#BAE6FD] via-[#E0F2FE] to-[#F0FDF4]"
      : timeOfDay === "dusk"
      ? "bg-gradient-to-b from-[#FBCFE8] via-[#FDE68A] to-[#FED7AA]"
      : "bg-gradient-to-b from-[#0B1120] via-[#1E1B4B] to-[#0F172A]";

  const grassColor =
    timeOfDay === "day" ? "#86EFAC" : timeOfDay === "dusk" ? "#A7F3D0" : "#14532D";

  const roadColor =
    timeOfDay === "day" ? "#475569" : timeOfDay === "dusk" ? "#334155" : "#1E293B";

  const sidewalkColor =
    timeOfDay === "day" ? "#CBD5E1" : timeOfDay === "dusk" ? "#94A3B8" : "#334155";

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl flex flex-col bg-[#0F172A]">
      {/* Top Neighbourhood Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 border-b border-slate-700/80 bg-slate-900/95 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-rose-500/15 text-rose-400 border border-rose-500/30">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">
                Harsheen&apos;s Little World
              </h2>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-serif bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Living Isometric Neighbourhood
              </span>
            </div>
            <p className="text-xs text-slate-300 font-sans">
              Explore 5 connected districts and step inside <strong>My Comfort Home</strong>
            </p>
          </div>
        </div>

        {/* Atmosphere & Zoom Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Explored count badge */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-xs text-slate-200 font-mono border border-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Discovered: {visitedBuildings.size} / 12</span>
          </div>

          {/* Time of Day Switcher */}
          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 p-0.5">
            <button
              onClick={() => setTimeOfDay("day")}
              className={`p-1.5 rounded-lg transition ${
                timeOfDay === "day" ? "bg-amber-400 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
              title="Daytime Sunlit Warmth"
              aria-label="Daytime mode"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTimeOfDay("dusk")}
              className={`p-1.5 rounded-lg transition ${
                timeOfDay === "dusk" ? "bg-rose-400 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
              title="Golden Hour Dusk"
              aria-label="Golden hour mode"
            >
              <Sunset className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTimeOfDay("night")}
              className={`p-1.5 rounded-lg transition ${
                timeOfDay === "night" ? "bg-indigo-600 text-white font-bold" : "text-slate-400 hover:text-white"
              }`}
              title="Midnight Glow Atmosphere"
              aria-label="Night mode"
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>

          {/* Zoom controls */}
          <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 p-0.5">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
              className="p-1.5 text-slate-400 hover:text-white transition"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setZoomLevel(1);
                setPanOffset({ x: 0, y: 0 });
              }}
              className="p-1.5 text-slate-400 hover:text-white transition"
              title="Reset View"
              aria-label="Reset View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.15))}
              className="p-1.5 text-slate-400 hover:text-white transition"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 5 Distinct District Selector Pills */}
      <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto text-xs scrollbar-none z-10">
        <span className="text-slate-400 font-serif px-2 shrink-0">Districts:</span>
        <button
          onClick={() => setSelectedDistrict("all")}
          className={`px-3 py-1.5 rounded-full transition shrink-0 font-serif font-medium ${
            selectedDistrict === "all"
              ? "bg-white text-slate-950 font-bold shadow-sm"
              : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
          }`}
        >
          Whole Town (12 Landmarks)
        </button>

        {cityDistricts.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDistrict(d.id)}
            className={`px-3 py-1.5 rounded-full transition shrink-0 font-serif font-medium flex items-center gap-1.5 ${
              selectedDistrict === d.id
                ? "bg-white text-slate-950 font-bold shadow-sm"
                : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
            <span>{d.name}</span>
          </button>
        ))}
      </div>

      {/* Mobile Mode Switcher: Interactive Map vs District Directory */}
      <div className="md:hidden flex border-b border-slate-800 bg-slate-900 p-1">
        <button
          onClick={() => setActiveMobileTab("map")}
          className={`flex-1 py-1.5 text-xs font-serif font-semibold rounded-lg transition ${
            activeMobileTab === "map" ? "bg-rose-600 text-white" : "text-slate-400 hover:text-white"
          }`}
        >
          Interactive Neighbourhood Map
        </button>
        <button
          onClick={() => setActiveMobileTab("districts")}
          className={`flex-1 py-1.5 text-xs font-serif font-semibold rounded-lg transition ${
            activeMobileTab === "districts" ? "bg-rose-600 text-white" : "text-slate-400 hover:text-white"
          }`}
        >
          District Directory List
        </button>
      </div>

      {/* ============================================================== */}
      {/* IMMERSIVE 2.5D ISOMETRIC NEIGHBOURHOOD CANVAS */}
      {/* ============================================================== */}
      <div
        className={`relative w-full h-[620px] sm:h-[720px] lg:h-[820px] overflow-hidden flex items-center justify-center transition-colors duration-700 cursor-grab active:cursor-grabbing ${skyBackground} ${
          activeMobileTab === "districts" ? "hidden md:flex" : "flex"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Animated Clouds in Sky */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cloud 1 */}
          <div className="absolute top-10 left-[10%] opacity-40 animate-float-slow">
            <svg width="120" height="40" viewBox="0 0 120 40">
              <ellipse cx="40" cy="25" rx="30" ry="15" fill="#FFFFFF" />
              <ellipse cx="65" cy="18" rx="25" ry="16" fill="#FFFFFF" />
              <ellipse cx="90" cy="24" rx="25" ry="14" fill="#FFFFFF" />
            </svg>
          </div>
          {/* Cloud 2 */}
          <div className="absolute top-16 right-[15%] opacity-35 animate-float-slow" style={{ animationDelay: "2s" }}>
            <svg width="140" height="45" viewBox="0 0 140 45">
              <ellipse cx="45" cy="28" rx="32" ry="16" fill="#FFFFFF" />
              <ellipse cx="75" cy="20" rx="30" ry="18" fill="#FFFFFF" />
              <ellipse cx="105" cy="26" rx="28" ry="15" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Scalable & Pannable SVG Viewport */}
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-75 select-none"
          style={{
            transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
          }}
        >
          <svg
            viewBox="0 0 1180 840"
            className="w-full h-full max-w-[1300px] overflow-visible select-none"
            aria-label="Interactive 2.5D Isometric Neighbourhood Map of Harsheen's Little World"
          >
            {/* 1. GREEN LAWNS & RESIDENTIAL LOTS */}
            <g className="island-foundation">
              {/* Grand Neighbourhood Island Foundation Plate */}
              <polygon
                points="590,50 1140,360 590,790 40,360"
                fill={grassColor}
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="3"
                className="transition-colors duration-500"
              />
              {/* Island soil base thickness side */}
              <polygon
                points="40,360 590,790 590,815 40,385"
                fill="#78350F"
                opacity="0.85"
              />
              <polygon
                points="1140,360 590,790 590,815 1140,385"
                fill="#451A03"
                opacity="0.9"
              />
            </g>

            {/* 2. REALISTIC CONNECTED STREETS, SIDEWALKS & CROSSWALKS */}
            <g className="streets-network">
              {/* Main Diagonal Avenue A (North-West to South-East) */}
              <polygon points="260,190 890,560 850,585 220,215" fill={sidewalkColor} />
              <polygon points="270,195 880,555 860,570 250,210" fill={roadColor} />
              <line
                x1="260"
                y1="202"
                x2="870"
                y2="562"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.8"
              />

              {/* Main Diagonal Avenue B (North-East to South-West) */}
              <polygon points="890,190 260,560 220,535 850,165" fill={sidewalkColor} />
              <polygon points="880,195 270,555 250,540 860,180" fill={roadColor} />
              <line
                x1="870"
                y1="188"
                x2="260"
                y2="548"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.8"
              />

              {/* Central Roundabout & Park Fountain */}
              <ellipse cx="590" cy="380" rx="55" ry="30" fill={sidewalkColor} stroke="#94A3B8" strokeWidth="2" />
              <ellipse cx="590" cy="380" rx="42" ry="22" fill="#38BDF8" stroke="#0284C7" strokeWidth="3" />
              {/* Fountain Water Jet */}
              <ellipse cx="590" cy="378" rx="16" ry="8" fill="#BAE6FD" />
              <circle cx="590" cy="374" r="5" fill="#FFFFFF" className="animate-pulse" />

              {/* Pedestrian Zebra Crossings */}
              <g className="crosswalks" stroke="#FFFFFF" strokeWidth="3">
                <line x1="510" y1="335" x2="525" y2="345" />
                <line x1="518" y1="330" x2="533" y2="340" />
                <line x1="526" y1="325" x2="541" y2="335" />

                <line x1="655" y1="330" x2="670" y2="340" />
                <line x1="663" y1="335" x2="678" y2="345" />
                <line x1="671" y1="340" x2="686" y2="350" />
              </g>

              {/* Animated Cute Mini Cars */}
              <g className="animate-car-1">
                <ellipse cx="320" cy="225" rx="10" ry="5" fill="#DC2626" />
                <ellipse cx="320" cy="223" rx="7" ry="3.5" fill="#BAE6FD" />
                <circle cx="314" cy="227" r="2" fill="#1C1917" />
                <circle cx="326" cy="227" r="2" fill="#1C1917" />
                <circle cx="328" cy="224" r="1.5" fill="#FEF08A" />
              </g>
              <g className="animate-car-2">
                <ellipse cx="820" cy="225" rx="10" ry="5" fill="#0D9488" />
                <ellipse cx="820" cy="223" rx="7" ry="3.5" fill="#BAE6FD" />
                <circle cx="814" cy="227" r="2" fill="#1C1917" />
                <circle cx="826" cy="227" r="2" fill="#1C1917" />
                <circle cx="812" cy="224" r="1.5" fill="#FEF08A" />
              </g>
            </g>

            {/* 3. LUSH TREES, GARDENS, BENCHES & STREETLAMPS */}
            <g className="environment-decorations">
              <g transform="translate(310, 310)">
                <ellipse cx="0" cy="0" rx="16" ry="18" fill="#15803D" />
                <ellipse cx="-4" cy="-4" rx="14" ry="15" fill="#22C55E" />
                <ellipse cx="4" cy="-2" rx="12" ry="13" fill="#4ADE80" />
                <rect x="-3" y="12" width="6" height="12" fill="#78350F" />
              </g>
              <g transform="translate(480, 270)">
                <ellipse cx="0" cy="0" rx="15" ry="17" fill="#166534" />
                <ellipse cx="-3" cy="-3" rx="13" ry="14" fill="#15803D" />
                <rect x="-2.5" y="10" width="5" height="10" fill="#78350F" />
              </g>
              <g transform="translate(680, 220)">
                <ellipse cx="0" cy="0" rx="18" ry="20" fill="#15803D" />
                <ellipse cx="3" cy="-4" rx="15" ry="16" fill="#22C55E" />
                <rect x="-3" y="14" width="6" height="12" fill="#78350F" />
              </g>
              <g transform="translate(420, 500)">
                <ellipse cx="0" cy="0" rx="16" ry="18" fill="#047857" />
                <ellipse cx="-4" cy="-3" rx="13" ry="14" fill="#10B981" />
                <rect x="-3" y="12" width="6" height="12" fill="#78350F" />
              </g>
              <g transform="translate(760, 480)">
                <ellipse cx="0" cy="0" rx="17" ry="19" fill="#166534" />
                <ellipse cx="4" cy="-3" rx="14" ry="15" fill="#22C55E" />
                <rect x="-3" y="13" width="6" height="12" fill="#78350F" />
              </g>

              {/* Park Benches near Roundabout */}
              <g transform="translate(540, 420)">
                <polygon points="0,0 20,-8 20,4 0,12" fill="#78350F" stroke="#451A03" />
                <line x1="4" y1="8" x2="4" y2="16" stroke="#451A03" strokeWidth="2" />
                <line x1="16" y1="2" x2="16" y2="10" stroke="#451A03" strokeWidth="2" />
              </g>

              {/* Classic Vintage Streetlamps */}
              {[
                { x: 380, y: 250 },
                { x: 520, y: 310 },
                { x: 670, y: 440 },
                { x: 740, y: 310 },
              ].map((pos, idx) => (
                <g key={idx} transform={`translate(${pos.x}, ${pos.y})`}>
                  <line x1="0" y1="0" x2="0" y2="-28" stroke="#1E293B" strokeWidth="2.5" />
                  <path d="M-6,-28 Q0,-34 6,-28 Z" fill="#1E293B" />
                  <circle cx="0" cy="-25" r="3" fill="#FEF08A" filter="drop-shadow(0 0 6px #FBBF24)" />
                </g>
              ))}
            </g>

            {/* 4. ALL 12 ISOMETRIC BUILDINGS (RENDERED BACK-TO-FRONT) */}
            <g className="neighbourhood-buildings">
              {sortedBuildings.map((building) => (
                <IsometricBuilding
                  key={building.id}
                  building={building}
                  isSelected={selectedBuilding?.id === building.id}
                  isHovered={hoveredBuilding?.id === building.id}
                  onSelect={handleSelectBuilding}
                  onHover={setHoveredBuilding}
                  timeOfDay={timeOfDay}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Floating Quick Action Overlay at Bottom of Canvas */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto z-20 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl">
          <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
            <Home className="w-4 h-4" />
          </div>
          <div className="text-xs text-slate-200">
            <span className="font-semibold text-white">Neighbourhood Guide:</span> Click <strong>My Comfort Home</strong> to enter Harsheen&apos;s 6 creative rooms, or click any landmark to launch its project case study.
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* MOBILE ACCESSIBLE DISTRICT DIRECTORY LIST */}
      {/* ============================================================== */}
      <div
        className={`p-4 sm:p-6 space-y-6 ${
          activeMobileTab === "districts" ? "block" : "hidden md:block"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              Town Directory & Landmarks
            </h3>
            <p className="text-xs text-slate-400">
              Browse all 12 destinations organized across the 5 connected districts
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cityBuildings.map((b) => (
            <div
              key={b.id}
              onClick={() => handleSelectBuilding(b)}
              className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${b.districtColor}20`,
                      color: b.districtColor,
                      border: `1px solid ${b.districtColor}40`,
                    }}
                  >
                    {b.district}
                  </span>
                  {b.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      {b.badge}
                    </span>
                  )}
                </div>

                <h4 className="font-serif text-base font-bold text-white group-hover:text-rose-400 transition">
                  {b.name}
                </h4>
                <p className="text-xs text-slate-300">{b.subtitle}</p>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {b.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-300">
                  {b.statLabel}: <strong className="text-white">{b.statValue}</strong>
                </span>
                <span className="text-rose-400 group-hover:underline inline-flex items-center gap-1 font-medium text-[11px]">
                  {b.id === "comfort-home" ? "Step Inside 6 Rooms →" : "Inspect →"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Building Details Modal (For standard landmarks) */}
      <BuildingDetailModal
        building={selectedBuilding}
        onClose={() => setSelectedBuilding(null)}
      />

      {/* SPECIAL MY COMFORT HOME MODAL & ROOMS */}
      <ComfortHomeModal
        isOpen={isComfortHomeOpen}
        onClose={() => setIsComfortHomeOpen(false)}
      />
    </div>
  );
};
