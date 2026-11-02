"use client";

import React, { useState } from "react";
import {
  X,
  Compass,
  Sparkles,
  BookOpen,
  Feather,
  Disc,
  Palette,
  ArrowRight,
  Info,
} from "lucide-react";
import { comfortWindows, ComfortWindow } from "@/data/comfortHome";
import { ComfortHomeRoom } from "./ComfortHomeRoom";

interface ComfortHomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComfortHomeModal: React.FC<ComfortHomeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [hoveredWindowId, setHoveredWindowId] = useState<string | null>(null);

  if (!isOpen) return null;

  // If a room is selected, display the full interior experience
  if (selectedRoomId) {
    return (
      <ComfortHomeRoom
        initialWindowId={selectedRoomId}
        onClose={onClose}
        onBackToHouse={() => setSelectedRoomId(null)}
      />
    );
  }

  // Get window metadata by id
  const getWin = (id: string) => comfortWindows.find((w) => w.id === id)!;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="My Comfort Home — Interactive Exterior"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF8F5] text-[#272727] rounded-3xl shadow-2xl overflow-hidden my-6 border border-[#E4DCD3] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#1C1917] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#292524]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E11D48]/20 border border-[#E11D48]/40 text-[#FDA4AF] text-xs font-serif">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CREATIVE CORNER SANCTUARY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              My Comfort Home
            </h2>
            <p className="text-xs text-[#D6D3D1] font-sans">
              Click any of the six illuminated windows to step inside Harsheen&apos;s personal creative sanctuary.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#A8A29E] hover:text-white hover:bg-[#292524] transition"
            aria-label="Close My Comfort Home"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ILLUSTRATED COTTAGE FACADE SVG (Under starry night sky) */}
        <div className="relative p-6 sm:p-10 bg-gradient-to-b from-[#0B132B] via-[#1E1B4B] to-[#1C1917] flex flex-col items-center justify-center">
          {/* Signboard */}
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#78350F] text-[#FEF3C7] border-2 border-[#B45309] shadow-lg font-serif text-xs font-bold tracking-wider uppercase">
            <span>🏡 My Comfort Home</span>
          </div>

          {/* Interactive SVG Facade */}
          <div className="w-full max-w-[560px] aspect-[4/3] relative">
            <svg
              viewBox="0 0 560 420"
              className="w-full h-full drop-shadow-xl select-none"
              aria-label="Illustrated Cottage Facade with 6 Clickable Windows"
            >
              <defs>
                {/* Roof Gradient */}
                <linearGradient id="terracottaRoof" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#DC2626" />
                  <stop offset="50%" stopColor="#B91C1C" />
                  <stop offset="100%" stopColor="#991B1B" />
                </linearGradient>

                {/* Window Golden Glow */}
                <radialGradient id="windowWarmGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FEF08A" stopOpacity="1" />
                  <stop offset="70%" stopColor="#FDE047" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
                </radialGradient>

                {/* Chimney Gradient */}
                <linearGradient id="stoneChimney" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#78716C" />
                  <stop offset="50%" stopColor="#A8A29E" />
                  <stop offset="100%" stopColor="#57534E" />
                </linearGradient>
              </defs>

              {/* Sky Backdrop & Sunbeams */}
              <rect x="0" y="0" width="560" height="420" fill="none" />

              {/* Chimney & Smoke */}
              <rect x="390" y="40" width="36" height="85" fill="url(#stoneChimney)" rx="4" />
              <rect x="386" y="34" width="44" height="10" fill="#44403C" rx="2" />
              {/* Animated Smoke Puffs */}
              <circle cx="408" cy="24" r="8" fill="#E7E5E4" opacity="0.6" className="animate-pulse" />
              <circle cx="416" cy="12" r="11" fill="#F5F5F4" opacity="0.4" />

              {/* Main Building Body */}
              <rect x="80" y="140" width="400" height="230" fill="#FFFBEB" stroke="#D6D3D1" strokeWidth="2" rx="12" />
              {/* Plinth / Foundation */}
              <rect x="74" y="365" width="412" height="15" fill="#78716C" rx="3" />

              {/* Sloping Gabled Roof */}
              <polygon
                points="50,150 280,35 510,150"
                fill="url(#terracottaRoof)"
                stroke="#7F1D1D"
                strokeWidth="3"
              />
              {/* Roof Shingle Texture Lines */}
              <line x1="100" y1="125" x2="460" y2="125" stroke="#7F1D1D" strokeWidth="1.5" opacity="0.5" />
              <line x1="150" y1="95" x2="410" y2="95" stroke="#7F1D1D" strokeWidth="1.5" opacity="0.5" />
              <line x1="210" y1="65" x2="350" y2="65" stroke="#7F1D1D" strokeWidth="1.5" opacity="0.5" />

              {/* Floor Separation Band */}
              <rect x="80" y="248" width="400" height="8" fill="#FDE68A" stroke="#F59E0B" strokeWidth="0.8" />

              {/* FRONT PORCH & ENTRANCE (Center 1st Floor) */}
              <g className="porch">
                {/* Porch Roof */}
                <polygon points="230,265 280,240 330,265" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1.5" />
                {/* Wooden Pillars */}
                <rect x="236" y="265" width="8" height="100" fill="#78350F" rx="2" />
                <rect x="316" y="265" width="8" height="100" fill="#78350F" rx="2" />
                {/* Porch Pedestal Base */}
                <rect x="228" y="365" width="104" height="12" fill="#E7E5E4" stroke="#78716C" strokeWidth="1" rx="2" />

                {/* Front Door */}
                <rect x="250" y="275" width="60" height="90" fill="#78350F" stroke="#451A03" strokeWidth="2" rx="6" />
                {/* Door Panels */}
                <rect x="256" y="282" width="22" height="36" fill="#92400E" rx="3" />
                <rect x="282" y="282" width="22" height="36" fill="#92400E" rx="3" />
                <rect x="256" y="324" width="22" height="36" fill="#92400E" rx="3" />
                <rect x="282" y="324" width="22" height="36" fill="#92400E" rx="3" />
                {/* Brass Door Handle */}
                <circle cx="260" cy="326" r="3" fill="#FBBF24" />
                {/* Welcome Mat */}
                <rect x="252" y="377" width="56" height="8" fill="#92400E" rx="2" />
                <text x="280" y="383" textAnchor="middle" fill="#FEF3C7" fontSize="5" fontFamily="sans-serif">
                  WELCOME
                </text>
              </g>

              {/* ============================================================== */}
              {/* 6 INTERACTIVE WINDOWS */}
              {/* ============================================================== */}

              {/* WINDOW 1: 2nd Floor Left — THE BOOKSHELF */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedRoomId("reading")}
                onMouseEnter={() => setHoveredWindowId("reading")}
                onMouseLeave={() => setHoveredWindowId(null)}
                tabIndex={0}
                role="button"
                aria-label="Window 1: The Bookshelf"
              >
                {/* Shutters */}
                <rect x="105" y="165" width="16" height="60" fill="#4338CA" rx="3" />
                <rect x="189" y="165" width="16" height="60" fill="#4338CA" rx="3" />
                {/* Window Frame */}
                <rect
                  x="121"
                  y="160"
                  width="68"
                  height="70"
                  fill="url(#windowWarmGlow)"
                  stroke={hoveredWindowId === "reading" ? "#F59E0B" : "#4338CA"}
                  strokeWidth={hoveredWindowId === "reading" ? "3" : "2"}
                  rx="4"
                  filter={hoveredWindowId === "reading" ? "drop-shadow(0 0 8px rgba(245, 158, 11, 0.8))" : undefined}
                />
                {/* Window Mullions (cross) */}
                <line x1="155" y1="160" x2="155" y2="230" stroke="#4338CA" strokeWidth="2" />
                <line x1="121" y1="195" x2="189" y2="195" stroke="#4338CA" strokeWidth="2" />
                {/* Flower Box */}
                <rect x="117" y="230" width="76" height="10" fill="#78350F" rx="2" />
                <circle cx="127" cy="228" r="4" fill="#F43F5E" />
                <circle cx="141" cy="227" r="4" fill="#FBBF24" />
                <circle cx="155" cy="228" r="4" fill="#EC4899" />
                <circle cx="169" cy="227" r="4" fill="#F43F5E" />
                <circle cx="183" cy="228" r="4" fill="#A855F7" />
              </g>

              {/* WINDOW 2: 2nd Floor Center — THE WRITER'S NOOK */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedRoomId("writing")}
                onMouseEnter={() => setHoveredWindowId("writing")}
                onMouseLeave={() => setHoveredWindowId(null)}
                tabIndex={0}
                role="button"
                aria-label="Window 2: The Writer's Nook"
              >
                {/* Decorative Dormer Roof Arch */}
                <path d="M236,155 Q280,135 324,155 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
                {/* Shutters */}
                <rect x="234" y="165" width="14" height="60" fill="#047857" rx="3" />
                <rect x="312" y="165" width="14" height="60" fill="#047857" rx="3" />
                {/* Window Frame */}
                <rect
                  x="248"
                  y="155"
                  width="64"
                  height="75"
                  fill="url(#windowWarmGlow)"
                  stroke={hoveredWindowId === "writing" ? "#B45309" : "#047857"}
                  strokeWidth={hoveredWindowId === "writing" ? "3" : "2"}
                  rx="4"
                  filter={hoveredWindowId === "writing" ? "drop-shadow(0 0 8px rgba(180, 83, 9, 0.8))" : undefined}
                />
                <line x1="280" y1="155" x2="280" y2="230" stroke="#047857" strokeWidth="2" />
                <line x1="248" y1="192" x2="312" y2="192" stroke="#047857" strokeWidth="2" />
                {/* Flower Box */}
                <rect x="244" y="230" width="72" height="10" fill="#78350F" rx="2" />
                <circle cx="254" cy="228" r="4" fill="#F59E0B" />
                <circle cx="267" cy="227" r="4" fill="#EF4444" />
                <circle cx="280" cy="228" r="4" fill="#FBBF24" />
                <circle cx="293" cy="227" r="4" fill="#3B82F6" />
                <circle cx="306" cy="228" r="4" fill="#F59E0B" />
              </g>

              {/* WINDOW 3: 2nd Floor Right — THE LISTENING ROOM */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedRoomId("music")}
                onMouseEnter={() => setHoveredWindowId("music")}
                onMouseLeave={() => setHoveredWindowId(null)}
                tabIndex={0}
                role="button"
                aria-label="Window 3: The Listening Room"
              >
                <rect x="371" y="165" width="16" height="60" fill="#7C3AED" rx="3" />
                <rect x="455" y="165" width="16" height="60" fill="#7C3AED" rx="3" />
                <rect
                  x="387"
                  y="160"
                  width="68"
                  height="70"
                  fill="url(#windowWarmGlow)"
                  stroke={hoveredWindowId === "music" ? "#8B5CF6" : "#7C3AED"}
                  strokeWidth={hoveredWindowId === "music" ? "3" : "2"}
                  rx="4"
                  filter={hoveredWindowId === "music" ? "drop-shadow(0 0 8px rgba(139, 92, 246, 0.8))" : undefined}
                />
                <line x1="421" y1="160" x2="421" y2="230" stroke="#7C3AED" strokeWidth="2" />
                <line x1="387" y1="195" x2="455" y2="195" stroke="#7C3AED" strokeWidth="2" />
                {/* Flower Box */}
                <rect x="383" y="230" width="76" height="10" fill="#78350F" rx="2" />
                <circle cx="393" cy="228" r="4" fill="#A855F7" />
                <circle cx="407" cy="227" r="4" fill="#38BDF8" />
                <circle cx="421" cy="228" r="4" fill="#F43F5E" />
                <circle cx="435" cy="227" r="4" fill="#FBBF24" />
                <circle cx="449" cy="228" r="4" fill="#A855F7" />
              </g>

              {/* WINDOW 4: 1st Floor Left — THE EXPLORER'S WINDOW */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedRoomId("travel")}
                onMouseEnter={() => setHoveredWindowId("travel")}
                onMouseLeave={() => setHoveredWindowId(null)}
                tabIndex={0}
                role="button"
                aria-label="Window 4: The Explorer's Window"
              >
                <rect x="105" y="280" width="16" height="65" fill="#059669" rx="3" />
                <rect x="189" y="280" width="16" height="65" fill="#059669" rx="3" />
                <rect
                  x="121"
                  y="275"
                  width="68"
                  height="75"
                  fill="url(#windowWarmGlow)"
                  stroke={hoveredWindowId === "travel" ? "#10B981" : "#059669"}
                  strokeWidth={hoveredWindowId === "travel" ? "3" : "2"}
                  rx="4"
                  filter={hoveredWindowId === "travel" ? "drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))" : undefined}
                />
                <line x1="155" y1="275" x2="155" y2="350" stroke="#059669" strokeWidth="2" />
                <line x1="121" y1="312" x2="189" y2="312" stroke="#059669" strokeWidth="2" />
                {/* Flower Box */}
                <rect x="117" y="350" width="76" height="10" fill="#78350F" rx="2" />
                <circle cx="127" cy="348" r="4" fill="#10B981" />
                <circle cx="141" cy="347" r="4" fill="#F59E0B" />
                <circle cx="155" cy="348" r="4" fill="#EF4444" />
                <circle cx="169" cy="347" r="4" fill="#FBBF24" />
                <circle cx="183" cy="348" r="4" fill="#10B981" />
              </g>

              {/* WINDOW 5: 1st Floor Center Left / Studio Accent — THE CREATIVE STUDIO */}
              {/* Displayed directly above porch lintel with artistic arch */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedRoomId("design")}
                onMouseEnter={() => setHoveredWindowId("design")}
                onMouseLeave={() => setHoveredWindowId(null)}
                tabIndex={0}
                role="button"
                aria-label="Window 5: The Creative Studio"
              >
                {/* Stained Glass Transom Fanlight above door */}
                <path
                  d="M250,270 A30,30 0 0,1 310,270 Z"
                  fill="url(#windowWarmGlow)"
                  stroke={hoveredWindowId === "design" ? "#EC4899" : "#BE185D"}
                  strokeWidth={hoveredWindowId === "design" ? "3" : "1.8"}
                  filter={hoveredWindowId === "design" ? "drop-shadow(0 0 8px rgba(236, 72, 153, 0.8))" : undefined}
                />
                <line x1="280" y1="240" x2="280" y2="270" stroke="#BE185D" strokeWidth="1.5" />
                <line x1="262" y1="250" x2="280" y2="270" stroke="#BE185D" strokeWidth="1.2" />
                <line x1="298" y1="250" x2="280" y2="270" stroke="#BE185D" strokeWidth="1.2" />
              </g>

              {/* WINDOW 6: 1st Floor Right — THE CURIOSITY LAB */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedRoomId("curiosity")}
                onMouseEnter={() => setHoveredWindowId("curiosity")}
                onMouseLeave={() => setHoveredWindowId(null)}
                tabIndex={0}
                role="button"
                aria-label="Window 6: The Curiosity Lab"
              >
                <rect x="371" y="280" width="16" height="65" fill="#2563EB" rx="3" />
                <rect x="455" y="280" width="16" height="65" fill="#2563EB" rx="3" />
                <rect
                  x="387"
                  y="275"
                  width="68"
                  height="75"
                  fill="url(#windowWarmGlow)"
                  stroke={hoveredWindowId === "curiosity" ? "#3B82F6" : "#2563EB"}
                  strokeWidth={hoveredWindowId === "curiosity" ? "3" : "2"}
                  rx="4"
                  filter={hoveredWindowId === "curiosity" ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))" : undefined}
                />
                <line x1="421" y1="275" x2="421" y2="350" stroke="#2563EB" strokeWidth="2" />
                <line x1="387" y1="312" x2="455" y2="312" stroke="#2563EB" strokeWidth="2" />
                {/* Flower Box */}
                <rect x="383" y="350" width="76" height="10" fill="#78350F" rx="2" />
                <circle cx="393" cy="348" r="4" fill="#38BDF8" />
                <circle cx="407" cy="347" r="4" fill="#FBBF24" />
                <circle cx="421" cy="348" r="4" fill="#60A5FA" />
                <circle cx="435" cy="347" r="4" fill="#F43F5E" />
                <circle cx="449" cy="348" r="4" fill="#38BDF8" />
              </g>

              {/* ============================================================== */}
              {/* GARDEN, FENCE, MAILBOX & ENVIRONMENT */}
              {/* ============================================================== */}
              {/* Picket Fence */}
              <g className="fence">
                {Array.from({ length: 18 }).map((_, i) => {
                  const fx = 40 + i * 28;
                  // Gap for front path
                  if (fx >= 240 && fx <= 320) return null;
                  return (
                    <polygon
                      key={`fence-${i}`}
                      points={`${fx},370 ${fx + 7},360 ${fx + 14},370 ${fx + 14},405 ${fx},405`}
                      fill="#FFFFFF"
                      stroke="#D6D3D1"
                      strokeWidth="1"
                    />
                  );
                })}
                {/* Horizontal fence beams */}
                <rect x="40" y="378" width="190" height="4" fill="#FFFFFF" stroke="#D6D3D1" />
                <rect x="330" y="378" width="190" height="4" fill="#FFFFFF" stroke="#D6D3D1" />
              </g>

              {/* Stone Garden Path */}
              <ellipse cx="280" cy="392" rx="24" ry="7" fill="#E7E5E4" stroke="#D6D3D1" />
              <ellipse cx="280" cy="408" rx="28" ry="8" fill="#D6D3D1" stroke="#A8A29E" />

              {/* Vintage Mailbox on Wooden Post */}
              <g className="mailbox">
                <rect x="488" y="350" width="6" height="50" fill="#78350F" rx="1" />
                <path d="M482,348 Q491,335 500,348 L500,364 L482,364 Z" fill="#DC2626" stroke="#991B1B" />
                <circle cx="496" cy="354" r="2" fill="#FCD34D" />
                <rect x="484" y="350" width="14" height="2" fill="#FFFFFF" />
              </g>
            </svg>
          </div>

          {/* Contextual Window Label on Hover */}
          <div className="h-8 mt-2 flex items-center justify-center">
            {hoveredWindowId ? (
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1917] text-[#FEF3C7] shadow-md text-xs font-serif animate-in fade-in">
                <span>{getWin(hoveredWindowId).name}</span>
                <span className="text-[10px] font-sans text-[#FBBF24]">
                  • {getWin(hoveredWindowId).subtitle}
                </span>
                <span className="text-white/60">→ Click to Enter</span>
              </div>
            ) : (
              <span className="text-xs text-[#78716C] font-serif italic">
                Hover over or click any window to inspect its room
              </span>
            )}
          </div>
        </div>

        {/* 6 Window Action Tiles (Ideal for Mobile & Quick Jumping) */}
        <div className="p-6 bg-[#FFFFFF] border-t border-[#E4DCD3] space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
              Or Choose a Room Directly:
            </h4>
            <span className="text-[11px] font-serif text-[#B45309]">
              6 Dedicated Interactive Chambers
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {comfortWindows.map((win) => (
              <button
                key={win.id}
                onClick={() => setSelectedRoomId(win.id)}
                className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E7E5E4] hover:border-[#1C1917] hover:bg-[#F5F2EB] transition text-left space-y-1 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white text-[#78716C]">
                    Floor {win.floor}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] group-hover:text-[#1C1917] group-hover:translate-x-0.5 transition" />
                </div>
                <h5 className="text-xs font-serif font-bold text-[#1C1917]">
                  {win.name}
                </h5>
                <p className="text-[10px] text-[#78716C] font-sans line-clamp-1">
                  {win.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
