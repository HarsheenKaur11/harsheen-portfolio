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
  // NIGHT-TIME BY DEFAULT AS PRIMARY ATMOSPHERE!
  const [timeOfDay, setTimeOfDay] = useState<"day" | "dusk" | "night">("night");
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
    timeOfDay === "night"
      ? "bg-gradient-to-b from-[#060A17] via-[#0B132B] to-[#0F172A]"
      : timeOfDay === "dusk"
      ? "bg-gradient-to-b from-[#4A154B] via-[#7C2D12] to-[#1E293B]"
      : "bg-gradient-to-b from-[#BAE6FD] via-[#E0F2FE] to-[#F1F5F9]";

  const grassColor =
    timeOfDay === "night" ? "#0F281E" : timeOfDay === "dusk" ? "#1E3A2F" : "#86EFAC";

  const roadColor =
    timeOfDay === "night" ? "#1E293B" : timeOfDay === "dusk" ? "#334155" : "#475569";

  const sidewalkColor =
    timeOfDay === "night" ? "#334155" : timeOfDay === "dusk" ? "#64748B" : "#CBD5E1";

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
                A town full of little stories
              </span>
            </div>
            <p className="text-xs text-slate-300 font-sans">
              Click any building to explore projects, or step inside <strong>My Comfort Home</strong>
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
              onClick={() => setTimeOfDay("night")}
              className={`p-1.5 rounded-lg transition ${
                timeOfDay === "night" ? "bg-indigo-600 text-white font-bold" : "text-slate-400 hover:text-white"
              }`}
              title="Cozy Night-Time Glow (Recommended)"
              aria-label="Night mode"
            >
              <Moon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTimeOfDay("dusk")}
              className={`p-1.5 rounded-lg transition ${
                timeOfDay === "dusk" ? "bg-rose-400 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
              title="Golden Hour Twilight"
              aria-label="Dusk mode"
            >
              <Sunset className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTimeOfDay("day")}
              className={`p-1.5 rounded-lg transition ${
                timeOfDay === "day" ? "bg-amber-400 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
              title="Daytime Sunlit Warmth"
              aria-label="Day mode"
            >
              <Sun className="w-4 h-4" />
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
              title="Fit to City View"
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

      {/* Distinct District Selector Pills */}
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
          All 12 Landmarks
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
      {/* IMMERSIVE 2.5D ISOMETRIC NEIGHBOURHOOD CANVAS                  */}
      {/* ============================================================== */}
      <div
        className={`relative w-full h-[640px] sm:h-[740px] lg:h-[840px] overflow-hidden flex items-center justify-center transition-colors duration-700 cursor-grab active:cursor-grabbing ${skyBackground} ${
          activeMobileTab === "districts" ? "hidden md:flex" : "flex"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Night-time Atmospheric Stars & Subtle Shimmer */}
        {timeOfDay === "night" && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Soft Glowing Moon */}
            <div className="absolute top-8 right-16 opacity-85">
              <div className="w-14 h-14 rounded-full bg-amber-100 shadow-[0_0_40px_rgba(254,240,138,0.45)] relative overflow-hidden">
                <div className="absolute -top-1 -right-1 w-12 h-12 rounded-full bg-[#060A17] opacity-20" />
              </div>
            </div>
            {/* Twinkling Stars */}
            {[
              { x: "12%", y: "15%", delay: "0s", size: "w-1 h-1" },
              { x: "24%", y: "8%", delay: "1.2s", size: "w-1.5 h-1.5" },
              { x: "38%", y: "18%", delay: "0.6s", size: "w-1 h-1" },
              { x: "55%", y: "10%", delay: "2.1s", size: "w-2 h-2" },
              { x: "72%", y: "14%", delay: "1.8s", size: "w-1 h-1" },
              { x: "85%", y: "6%", delay: "0.4s", size: "w-1.5 h-1.5" },
              { x: "92%", y: "22%", delay: "2.5s", size: "w-1 h-1" },
            ].map((star, idx) => (
              <div
                key={idx}
                className={`absolute rounded-full bg-white animate-pulse ${star.size}`}
                style={{ top: star.y, left: star.x, animationDelay: star.delay }}
              />
            ))}
          </div>
        )}

        {/* Scalable & Pannable SVG Viewport */}
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-75 select-none"
          style={{
            transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
          }}
        >
          <svg
            viewBox="0 0 1200 860"
            className="w-full h-full max-w-[1360px] overflow-visible select-none"
            aria-label="Interactive 2.5D Isometric Neighbourhood Map of Harsheen's Little World"
          >
            <defs>
              {/* Radial Streetlight Halo */}
              <radialGradient id="streetlightGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.75" />
                <stop offset="40%" stopColor="#FDE047" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FDE047" stopOpacity="0" />
              </radialGradient>

              {/* Fountain Water Pool Gradient */}
              <linearGradient id="fountainWater" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>

              {/* Stone Terrace Texture */}
              <linearGradient id="stoneWallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>

            {/* ============================================================== */}
            {/* 1. LAYERED TOWN ISLAND FOUNDATION & STONE RETAINING TERRACES    */}
            {/* ============================================================== */}
            <g className="island-foundation">
              {/* Grand Neighbourhood Island Ground Plate */}
              <polygon
                points="600,45 1160,360 600,810 40,360"
                fill={grassColor}
                stroke="rgba(0,0,0,0.3)"
                strokeWidth="2.5"
                className="transition-colors duration-500"
              />
              {/* Island soil base thickness side */}
              <polygon
                points="40,360 600,810 600,835 40,385"
                fill="#451A03"
                opacity="0.9"
              />
              <polygon
                points="1160,360 600,810 600,835 1160,385"
                fill="#291305"
                opacity="0.95"
              />
            </g>

            {/* ============================================================== */}
            {/* 2. REALISTIC INTERCONNECTED ASPHALT STREETS, SIDEWALKS & CURBS */}
            {/* ============================================================== */}
            <g className="streets-network">
              {/* Diagonal Avenue A (North-West to South-East) */}
              <polygon points="260,180 920,560 880,585 220,205" fill={sidewalkColor} />
              <polygon points="270,185 910,555 890,570 250,200" fill={roadColor} />
              <line
                x1="260"
                y1="192"
                x2="900"
                y2="562"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="9,9"
                opacity="0.75"
              />

              {/* Diagonal Avenue B (North-East to South-West) */}
              <polygon points="920,180 260,560 220,535 880,155" fill={sidewalkColor} />
              <polygon points="910,185 270,555 250,540 890,170" fill={roadColor} />
              <line
                x1="900"
                y1="178"
                x2="260"
                y2="548"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="9,9"
                opacity="0.75"
              />

              {/* Outer Connecting Street (South-West to South-East) */}
              <polygon points="340,580 840,680 820,700 320,600" fill={sidewalkColor} />
              <polygon points="350,585 830,675 825,690 340,595" fill={roadColor} />

              {/* Central Park Roundabout & Cobblestone Plaza */}
              <ellipse cx="600" cy="390" rx="60" ry="32" fill={sidewalkColor} stroke="#64748B" strokeWidth="2" />
              <ellipse cx="600" cy="390" rx="46" ry="24" fill="url(#fountainWater)" stroke="#0284C7" strokeWidth="3" />
              {/* Fountain Jet with Animated Ripples */}
              <ellipse cx="600" cy="388" rx="20" ry="10" fill="#BAE6FD" opacity="0.8" className="animate-pulse" />
              <circle cx="600" cy="384" r="5" fill="#FFFFFF" className="animate-ping" />
              <circle cx="600" cy="384" r="3.5" fill="#FEF08A" />

              {/* Pedestrian Zebra Crossings */}
              <g className="crosswalks" stroke="#FFFFFF" strokeWidth="3" opacity="0.85">
                <line x1="520" y1="345" x2="535" y2="355" />
                <line x1="528" y1="340" x2="543" y2="350" />
                <line x1="536" y1="335" x2="551" y2="345" />

                <line x1="665" y1="340" x2="680" y2="350" />
                <line x1="673" y1="345" x2="688" y2="355" />
                <line x1="681" y1="350" x2="696" y2="360" />
              </g>

              {/* Warm Golden Streetlight Halos on Ground */}
              {[
                { cx: 480, cy: 320 },
                { cx: 720, cy: 320 },
                { cx: 480, cy: 460 },
                { cx: 720, cy: 460 },
                { cx: 330, cy: 220 },
                { cx: 870, cy: 220 },
                { cx: 330, cy: 520 },
                { cx: 870, cy: 520 },
              ].map((pos, i) => (
                <ellipse
                  key={i}
                  cx={pos.cx}
                  cy={pos.cy}
                  rx="38"
                  ry="20"
                  fill="url(#streetlightGlow)"
                  className="pointer-events-none"
                />
              ))}

              {/* Animated Cute Mini Delivery Vehicles */}
              <g className="animate-car-1">
                {/* Red delivery van */}
                <ellipse cx="330" cy="215" rx="11" ry="5.5" fill="#DC2626" />
                <ellipse cx="330" cy="213" rx="7" ry="3.5" fill="#BAE6FD" />
                <circle cx="323" cy="217" r="2.2" fill="#1C1917" />
                <circle cx="337" cy="217" r="2.2" fill="#1C1917" />
                {/* Headlights beam */}
                <circle cx="339" cy="214" r="2" fill="#FEF08A" style={{ filter: "drop-shadow(0 0 4px #FEF08A)" }} />
              </g>
              <g className="animate-car-2">
                {/* Teal mini scooter */}
                <ellipse cx="830" cy="215" rx="10" ry="5" fill="#0D9488" />
                <ellipse cx="830" cy="213" rx="6.5" ry="3" fill="#BAE6FD" />
                <circle cx="824" cy="217" r="2" fill="#1C1917" />
                <circle cx="836" cy="217" r="2" fill="#1C1917" />
                <circle cx="822" cy="214" r="1.8" fill="#FEF08A" style={{ filter: "drop-shadow(0 0 4px #FEF08A)" }} />
              </g>
            </g>

            {/* ============================================================== */}
            {/* 3. LUSH STORYBOOK TREES, GARDENS, BENCHES & STREETLAMPS        */}
            {/* ============================================================== */}
            <g className="environment-decorations">
              {/* Vintage Cast-Iron Streetlamps */}
              {[
                { x: 480, y: 310 },
                { x: 720, y: 310 },
                { x: 480, y: 450 },
                { x: 720, y: 450 },
                { x: 330, y: 210 },
                { x: 870, y: 210 },
                { x: 330, y: 510 },
                { x: 870, y: 510 },
              ].map((lamp, i) => (
                <g key={i}>
                  <line x1={lamp.x} y1={lamp.y} x2={lamp.x} y2={lamp.y - 18} stroke="#1C1917" strokeWidth="2" />
                  <circle cx={lamp.x} cy={lamp.y - 19} r="3" fill="#FEF08A" style={{ filter: "drop-shadow(0 0 6px #FEF08A)" }} />
                </g>
              ))}

              {/* Park Benches in Central Square */}
              <g className="park-benches">
                <rect x="550" y="360" width="16" height="5" fill="#78350F" rx="1" />
                <rect x="634" y="360" width="16" height="5" fill="#78350F" rx="1" />
                <rect x="592" y="420" width="16" height="5" fill="#78350F" rx="1" />
              </g>

              {/* Rich Storybook Trees (Multi-toned layered canopies) */}
              {[
                { x: 500, y: 370, r: 16, fill: "#15803D", highlight: "#22C55E" },
                { x: 700, y: 370, r: 16, fill: "#15803D", highlight: "#22C55E" },
                { x: 590, y: 330, r: 18, fill: "#166534", highlight: "#4ADE80" },
                { x: 230, y: 280, r: 14, fill: "#D97706", highlight: "#FBBF24" }, // Golden Autumn Tree
                { x: 420, y: 220, r: 15, fill: "#15803D", highlight: "#22C55E" },
                { x: 780, y: 280, r: 14, fill: "#BE185D", highlight: "#F472B6" }, // Cherry Blossom Tree
                { x: 230, y: 500, r: 15, fill: "#166534", highlight: "#4ADE80" },
                { x: 730, y: 560, r: 16, fill: "#15803D", highlight: "#22C55E" },
                { x: 890, y: 450, r: 14, fill: "#D97706", highlight: "#FBBF24" },
                { x: 550, y: 640, r: 16, fill: "#166534", highlight: "#4ADE80" },
              ].map((t, i) => (
                <g key={i}>
                  {/* Tree Trunk */}
                  <rect x={t.x - 2.5} y={t.y} width="5" height="12" fill="#451A03" rx="1" />
                  {/* Main Canopy */}
                  <circle cx={t.x} cy={t.y - 6} r={t.r} fill={t.fill} />
                  {/* Highlight Foliage Cluster */}
                  <circle cx={t.x - 3} cy={t.y - 10} r={t.r * 0.65} fill={t.highlight} opacity="0.8" />
                </g>
              ))}
            </g>

            {/* ============================================================== */}
            {/* 4. THE 12 DISTINCT ARCHITECTURAL DESTINATIONS                  */}
            {/* ============================================================== */}
            <g className="city-landmarks">
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

        {/* Floating Quick Legend / Hint Pill */}
        <div className="absolute bottom-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 text-slate-300 text-[11px] font-mono border border-slate-700/80 shadow-lg">
          <Info className="w-3.5 h-3.5 text-rose-400" />
          <span>Click any landmark to open details • Click cottage to enter 6 rooms</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* MOBILE DISTRICT DIRECTORY LIST TAB                            */}
      {/* ============================================================== */}
      <div className={`p-4 space-y-4 bg-slate-950 ${activeMobileTab === "districts" ? "block md:hidden" : "hidden"}`}>
        <div className="space-y-1">
          <h3 className="font-serif text-base font-bold text-white">Neighbourhood Directory</h3>
          <p className="text-xs text-slate-400">Touch any destination to inspect case study or step inside.</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
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
