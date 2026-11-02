"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Feather,
  Disc,
  Compass,
  Palette,
  Sparkles,
  ArrowLeft,
  X,
  ExternalLink,
  Heart,
  Calendar,
  Tag,
  Star,
  MapPin,
  Volume2,
  Play,
  FileText,
  Share2,
} from "lucide-react";
import {
  comfortWindows,
  bookshelfData,
  writersNookData,
  listeningRoomData,
  explorerData,
  creativeStudioData,
  curiosityLabData,
  ComfortWindow,
  WritingItem,
} from "@/data/comfortHome";

interface ComfortHomeRoomProps {
  initialWindowId?: string;
  onClose: () => void;
  onBackToHouse: () => void;
}

export const ComfortHomeRoom: React.FC<ComfortHomeRoomProps> = ({
  initialWindowId = "reading",
  onClose,
  onBackToHouse,
}) => {
  const [activeWindowId, setActiveWindowId] = useState<string>(initialWindowId);
  const [selectedWriting, setSelectedWriting] = useState<WritingItem | null>(null);

  const currentWindow =
    comfortWindows.find((w) => w.id === activeWindowId) || comfortWindows[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`My Comfort Home — ${currentWindow.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF8F5] text-[#272727] rounded-3xl shadow-2xl overflow-hidden my-6 border border-[#E4DCD3] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Cozy Wooden Header Bar */}
        <div className="bg-[#1C1917] text-[#FAF8F5] p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#292524] shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHouse}
              className="p-2 rounded-xl bg-[#292524] text-[#D6D3D1] hover:text-white hover:bg-[#44403C] transition flex items-center gap-1.5 text-xs font-serif"
              title="Return to House Exterior"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">House Exterior</span>
            </button>
            <div className="border-l border-[#44403C] pl-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F59E0B]">
                My Comfort Home • 2nd & 1st Floor Chambers
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                {currentWindow.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#A8A29E] hover:text-white hover:bg-[#292524] transition"
              aria-label="Close Room"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6 Windows Interior Navigation Tabs */}
        <div className="bg-[#F5F2EB] border-b border-[#E4DCD3] px-4 py-2.5 flex items-center gap-2 overflow-x-auto text-xs shrink-0 scrollbar-none">
          <span className="text-[#78716C] font-serif text-[11px] shrink-0 hidden md:inline">
            Rooms:
          </span>
          {comfortWindows.map((win) => {
            const isActive = win.id === activeWindowId;
            return (
              <button
                key={win.id}
                onClick={() => {
                  setActiveWindowId(win.id);
                  setSelectedWriting(null);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-serif font-medium transition shrink-0 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#1C1917] text-[#FEF3C7] shadow-sm font-semibold"
                    : "text-[#57534E] hover:text-[#1C1917] hover:bg-[#E7E5E4]"
                }`}
              >
                <span>{win.name}</span>
                {win.floor === 2 ? (
                  <span className="text-[9px] opacity-70 font-mono">2F</span>
                ) : (
                  <span className="text-[9px] opacity-70 font-mono">1F</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Room Atmosphere Quote Banner */}
        <div className="bg-[#FEFCE8] border-b border-[#FEF08A] px-6 py-2.5 flex items-center justify-between text-xs text-[#854D0E] font-serif italic shrink-0">
          <p className="line-clamp-1">&ldquo;{currentWindow.quote}&rdquo;</p>
          <span className="text-[11px] font-sans not-italic text-[#A16207] shrink-0 ml-4 font-medium">
            {currentWindow.subtitle}
          </span>
        </div>

        {/* Main Room Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 font-serif">
          {/* ============================================================== */}
          {/* ILLUSTRATED COZY ROOM VIGNETTE (Inspired by Reference 4)       */}
          {/* ============================================================== */}
          <div className="w-full h-44 sm:h-52 rounded-3xl bg-[#0F172A] border border-[#334155] overflow-hidden relative shadow-inner select-none flex items-center justify-center">
            {/* Ambient Starry Night Loft Background */}
            <svg
              viewBox="0 0 760 210"
              className="w-full h-full object-cover select-none"
              aria-label="Illustrated Cozy Interior Room Scene"
            >
              <defs>
                <linearGradient id="woodFloorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#451A03" />
                  <stop offset="100%" stopColor="#291305" />
                </linearGradient>
                <linearGradient id="warmFireGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="50%" stopColor="#EA580C" />
                  <stop offset="100%" stopColor="#7C2D12" />
                </linearGradient>
                <radialGradient id="lampLightPool" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.6" />
                  <stop offset="70%" stopColor="#FDE047" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#FDE047" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Back Wall & Sloping Wooden Rafters */}
              <rect x="0" y="0" width="760" height="150" fill="#1C1917" />
              <polygon points="0,0 260,0 0,70" fill="#292524" />
              <polygon points="760,0 500,0 760,70" fill="#292524" />

              {/* Starry Night Skylight Window */}
              <rect x="330" y="15" width="100" height="60" fill="#060A17" stroke="#78350F" strokeWidth="3" rx="4" />
              <circle cx="355" cy="35" r="1.5" fill="#FFFFFF" className="animate-pulse" />
              <circle cx="395" cy="28" r="1" fill="#FEF08A" />
              <circle cx="410" cy="45" r="1.5" fill="#FFFFFF" />
              <line x1="380" y1="15" x2="380" y2="75" stroke="#78350F" strokeWidth="2" />
              <line x1="330" y1="45" x2="430" y2="45" stroke="#78350F" strokeWidth="2" />

              {/* Wooden Plank Flooring */}
              <rect x="0" y="150" width="760" height="60" fill="url(#woodFloorGrad)" />
              <line x1="0" y1="170" x2="760" y2="170" stroke="#1C1917" strokeWidth="1" opacity="0.6" />
              <line x1="0" y1="190" x2="760" y2="190" stroke="#1C1917" strokeWidth="1" opacity="0.6" />

              {/* Hanging Fairy String Lights across Ceiling */}
              <path
                d="M50,20 Q180,45 330,30 Q430,30 580,45 Q670,30 710,20"
                fill="none"
                stroke="#FDE047"
                strokeWidth="1.2"
                strokeDasharray="4,5"
              />

              {/* ROOM SPECIFIC INTERIOR ASSETS */}
              {activeWindowId === "reading" && (
                <g className="reading-room-scene">
                  {/* Tall Bookshelf on Left */}
                  <rect x="50" y="45" width="90" height="120" fill="#78350F" stroke="#451A03" strokeWidth="2" rx="2" />
                  {/* Shelves */}
                  <line x1="50" y1="85" x2="140" y2="85" stroke="#451A03" strokeWidth="3" />
                  <line x1="50" y1="125" x2="140" y2="125" stroke="#451A03" strokeWidth="3" />
                  {/* Colorful Book Spines */}
                  {[
                    { x: 55, y: 55, w: 8, h: 28, c: "#DC2626" },
                    { x: 65, y: 58, w: 10, h: 25, c: "#2563EB" },
                    { x: 77, y: 52, w: 9, h: 31, c: "#16A34A" },
                    { x: 88, y: 56, w: 12, h: 27, c: "#D97706" },
                    { x: 102, y: 54, w: 8, h: 29, c: "#9333EA" },
                    { x: 112, y: 57, w: 14, h: 26, c: "#0D9488" },
                    { x: 55, y: 95, w: 11, h: 28, c: "#B91C1C" },
                    { x: 68, y: 98, w: 10, h: 25, c: "#3B82F6" },
                    { x: 80, y: 92, w: 12, h: 31, c: "#F59E0B" },
                    { x: 94, y: 96, w: 9, h: 27, c: "#059669" },
                    { x: 105, y: 94, w: 14, h: 29, c: "#4F46E5" },
                  ].map((b, i) => (
                    <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.c} rx="1" />
                  ))}

                  {/* Ornate Round Rug in Center */}
                  <ellipse cx="480" cy="175" rx="75" ry="24" fill="#991B1B" stroke="#B45309" strokeWidth="2" />
                  <ellipse cx="480" cy="175" rx="55" ry="17" fill="#78350F" />
                  {/* Sleeping Cat curled up on rug (Reference 4!) */}
                  <ellipse cx="480" cy="175" rx="14" ry="9" fill="#FFFFFF" />
                  <circle cx="490" cy="173" r="6" fill="#FDE68A" />
                  <polygon points="492,168 495,164 496,169" fill="#F59E0B" />
                  <polygon points="487,168 489,164 491,169" fill="#F59E0B" />

                  {/* Cozy Orange Reading Armchair */}
                  <ellipse cx="610" cy="170" rx="30" ry="14" fill="#EA580C" />
                  <rect x="585" y="110" width="50" height="50" fill="#EA580C" stroke="#C2410C" strokeWidth="2" rx="10" />
                  <ellipse cx="610" cy="135" rx="20" ry="12" fill="#F97316" />
                  {/* Pillow */}
                  <ellipse cx="610" cy="125" rx="12" ry="7" fill="#FEF08A" />

                  {/* Warm Brass Reading Lamp casting light pool */}
                  <line x1="660" y1="180" x2="660" y2="70" stroke="#F59E0B" strokeWidth="2" />
                  <ellipse cx="660" cy="70" rx="14" ry="6" fill="#FEF08A" />
                  <ellipse cx="610" cy="160" rx="60" ry="30" fill="url(#lampLightPool)" opacity="0.6" />

                  {/* Side Table with Steaming Tea Cup */}
                  <rect x="535" y="145" width="22" height="25" fill="#78350F" rx="2" />
                  <rect x="541" y="138" width="10" height="7" fill="#FFFFFF" rx="1" />
                </g>
              )}

              {activeWindowId === "writing" && (
                <g className="writing-room-scene">
                  {/* Antique Roll-top Writing Desk */}
                  <rect x="230" y="110" width="160" height="65" fill="#78350F" stroke="#451A03" strokeWidth="2" rx="4" />
                  {/* Open Leather Notebook & Manuscripts */}
                  <polygon points="270,125 310,120 315,145 275,150" fill="#FFFBEB" stroke="#D6D3D1" />
                  <polygon points="320,122 360,118 365,143 325,147" fill="#FFFBEB" stroke="#D6D3D1" />
                  {/* Fountain Pen & Brass Inkwell */}
                  <line x1="305" y1="125" x2="330" y2="135" stroke="#1C1917" strokeWidth="2" />
                  <rect x="365" y="128" width="8" height="8" fill="#1C1917" rx="1" />

                  {/* Warm Glowing Candle Flame */}
                  <rect x="250" y="130" width="6" height="14" fill="#FFFFFF" rx="1" />
                  <ellipse cx="253" cy="126" rx="3" ry="5" fill="#F59E0B" />
                  <circle cx="253" cy="126" r="1.5" fill="#FEF08A" className="animate-ping" />

                  {/* Desk Chair */}
                  <rect x="290" y="140" width="35" height="35" fill="#92400E" stroke="#78350F" rx="4" />

                  {/* Warm Hearth Fireplace on Right */}
                  <rect x="580" y="70" width="110" height="100" fill="#78716C" stroke="#44403C" strokeWidth="2" rx="4" />
                  <rect x="605" y="110" width="60" height="60" fill="#1C1917" rx="4" />
                  <polygon points="615,160 635,130 655,160" fill="url(#warmFireGlow)" />
                  <circle cx="635" cy="140" r="8" fill="#FDE047" className="animate-pulse" />
                </g>
              )}

              {activeWindowId === "music" && (
                <g className="music-room-scene">
                  {/* Vinyl Turntable Console */}
                  <rect x="220" y="120" width="130" height="55" fill="#78350F" stroke="#451A03" strokeWidth="2" rx="4" />
                  {/* Turntable Platter & Spinning Vinyl */}
                  <circle cx="265" cy="145" r="20" fill="#1C1917" />
                  <circle cx="265" cy="145" r="7" fill="#F59E0B" />
                  {/* Brass Tonearm */}
                  <line x1="290" y1="135" x2="275" y2="145" stroke="#FBBF24" strokeWidth="2" />

                  {/* Tube Amplifier with Glowing Amber Vacuum Tubes */}
                  <rect x="300" y="135" width="40" height="20" fill="#334155" rx="2" />
                  <circle cx="310" cy="132" r="3" fill="#F59E0B" className="animate-pulse" />
                  <circle cx="320" cy="132" r="3" fill="#F59E0B" className="animate-pulse" />
                  <circle cx="330" cy="132" r="3" fill="#F59E0B" className="animate-pulse" />

                  {/* Acoustic Guitar resting on Stand */}
                  <ellipse cx="580" cy="145" rx="18" ry="24" fill="#B45309" stroke="#78350F" strokeWidth="2" />
                  <ellipse cx="580" cy="115" rx="14" ry="16" fill="#B45309" stroke="#78350F" strokeWidth="2" />
                  <circle cx="580" cy="128" r="6" fill="#1C1917" />
                  <line x1="580" y1="100" x2="580" y2="60" stroke="#78350F" strokeWidth="4" />

                  {/* Vinyl Record Crate */}
                  <rect x="420" y="135" width="45" height="35" fill="#92400E" rx="2" />
                  <line x1="425" y1="135" x2="425" y2="125" stroke="#DC2626" strokeWidth="2" />
                  <line x1="432" y1="135" x2="432" y2="122" stroke="#2563EB" strokeWidth="2" />
                  <line x1="440" y1="135" x2="440" y2="124" stroke="#F59E0B" strokeWidth="2" />
                </g>
              )}

              {activeWindowId === "travel" && (
                <g className="travel-room-scene">
                  {/* World Map with Pinned Route Markers */}
                  <rect x="180" y="30" width="180" height="95" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" rx="4" />
                  <path d="M210,60 Q240,40 270,70 T330,60" fill="none" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3,3" />
                  <circle cx="210" cy="60" r="3" fill="#DC2626" />
                  <circle cx="270" cy="70" r="3" fill="#2563EB" />
                  <circle cx="330" cy="60" r="3" fill="#16A34A" />

                  {/* Leather Steamer Luggage Trunk */}
                  <rect x="480" y="130" width="120" height="50" fill="#78350F" stroke="#451A03" strokeWidth="2" rx="4" />
                  <line x1="510" y1="130" x2="510" y2="180" stroke="#F59E0B" strokeWidth="2" />
                  <line x1="570" y1="130" x2="570" y2="180" stroke="#F59E0B" strokeWidth="2" />

                  {/* Vintage Camera & Brass Compass */}
                  <rect x="420" y="145" width="26" height="18" fill="#1C1917" rx="2" />
                  <circle cx="433" cy="154" r="6" fill="#64748B" stroke="#94A3B8" />
                  <circle cx="380" cy="155" r="9" fill="#FBBF24" stroke="#B45309" strokeWidth="1.5" />
                </g>
              )}

              {activeWindowId === "design" && (
                <g className="design-room-scene">
                  {/* Modern Creative Workstation */}
                  <rect x="220" y="115" width="170" height="60" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" rx="4" />
                  {/* Apple Display with Layout Tokens */}
                  <rect x="260" y="70" width="85" height="52" fill="#0F172A" stroke="#64748B" strokeWidth="2" rx="3" />
                  <rect x="268" y="76" width="30" height="18" fill="#477DFF" rx="2" />
                  <rect x="303" y="76" width="35" height="18" fill="#F1EDE4" rx="2" />
                  <rect x="268" y="98" width="70" height="16" fill="#334155" rx="1" />
                  <rect x="298" y="122" width="10" height="12" fill="#64748B" />

                  {/* Pantone Color Swatch Deck */}
                  <polygon points="430,135 460,120 470,145 440,160" fill="#EC4899" />
                  <polygon points="440,130 470,115 480,140 450,155" fill="#F59E0B" />
                  <polygon points="450,125 480,110 490,135 460,150" fill="#3B82F6" />

                  {/* Sketchpad with Pencil */}
                  <rect x="520" y="130" width="50" height="40" fill="#FFFFFF" stroke="#CBD5E1" rx="2" />
                  <line x1="560" y1="125" x2="575" y2="150" stroke="#F59E0B" strokeWidth="2" />
                </g>
              )}

              {activeWindowId === "curiosity" && (
                <g className="curiosity-room-scene">
                  {/* Celestial Armillary Sphere & Globe on Pedestal */}
                  <circle cx="220" cy="115" r="22" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
                  <ellipse cx="220" cy="115" rx="22" ry="7" fill="none" stroke="#D97706" strokeWidth="1.5" />
                  <rect x="217" y="137" width="6" height="28" fill="#78350F" />
                  <rect x="210" y="165" width="20" height="6" fill="#78350F" rx="1" />

                  {/* Chalkboard with AI & Cognitive Graph */}
                  <rect x="300" y="45" width="160" height="85" fill="#064E3B" stroke="#78350F" strokeWidth="3" rx="3" />
                  {/* Neural Graph Nodes */}
                  <circle cx="330" cy="85" r="4" fill="#6EE7B7" />
                  <circle cx="370" cy="70" r="4" fill="#6EE7B7" />
                  <circle cx="370" cy="100" r="4" fill="#6EE7B7" />
                  <circle cx="410" cy="85" r="4" fill="#FDE047" />
                  <line x1="330" y1="85" x2="370" y2="70" stroke="#A7F3D0" strokeWidth="1" />
                  <line x1="330" y1="85" x2="370" y2="100" stroke="#A7F3D0" strokeWidth="1" />
                  <line x1="370" y1="70" x2="410" y2="85" stroke="#A7F3D0" strokeWidth="1" />
                  <line x1="370" y1="100" x2="410" y2="85" stroke="#A7F3D0" strokeWidth="1" />

                  {/* Brass Telescope on Tripod pointing out skylight */}
                  <line x1="580" y1="110" x2="620" y2="60" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
                  <line x1="590" y1="100" x2="575" y2="175" stroke="#78350F" strokeWidth="2" />
                  <line x1="590" y1="100" x2="605" y2="175" stroke="#78350F" strokeWidth="2" />
                </g>
              )}
            </svg>
          </div>

          {/* ============================================================== */}
          {/* ROOM 1: THE BOOKSHELF                                          */}
          {/* ============================================================== */}
          {activeWindowId === "reading" && (
            <div className="space-y-6">
              <div className="border-b border-[#E4DCD3] pb-4 space-y-1">
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  The Bookshelf & Reading Chair
                </h3>
                <p className="text-xs text-[#78716C] font-sans">
                  A curated library of literature, technology histories, design philosophy, and cognitive science.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookshelfData.map((book) => (
                  <div
                    key={book.id}
                    className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm space-y-2.5 flex flex-col justify-between hover:border-[#D6D3D1] transition"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[#F5F5F4] text-[#78716C]">
                          {book.genre}
                        </span>
                        <span
                          className={`text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full ${
                            book.status === "Completed"
                              ? "bg-emerald-50 text-emerald-700"
                              : book.status === "Currently Reading"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {book.status}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-[#1C1917] leading-tight">
                        {book.title}
                      </h4>
                      <span className="text-xs text-[#78716C] block font-sans">
                        by {book.author}
                      </span>
                      <p className="text-xs text-[#44403C] leading-relaxed">
                        {book.note}
                      </p>
                    </div>

                    {book.quote && (
                      <div className="pt-2 border-t border-[#F5F5F4] text-[11px] text-[#78716C] italic">
                        &ldquo;{book.quote}&rdquo;
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* ROOM 2: THE WRITER'S NOOK                                      */}
          {/* ============================================================== */}
          {activeWindowId === "writing" && (
            <div className="space-y-6">
              <div className="border-b border-[#E4DCD3] pb-4 space-y-1">
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  The Writer&apos;s Nook & Quiet Studio
                </h3>
                <p className="text-xs text-[#78716C] font-sans">
                  Private essays, poetry, and letters on craftsmanship, empathy, and midnight sketches. Click any manuscript to enter the clean reading view.
                </p>
              </div>

              {selectedWriting ? (
                /* Distraction-Free Reader View */
                <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-md space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-[#F5F5F4] pb-4">
                    <button
                      onClick={() => setSelectedWriting(null)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#B45309] hover:underline font-serif font-semibold"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Manuscripts</span>
                    </button>
                    <span className="text-xs font-mono text-[#A8A29E]">
                      {selectedWriting.category} • {selectedWriting.date}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
                      {selectedWriting.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedWriting.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 text-base sm:text-lg text-[#292524] leading-relaxed pt-2 font-serif">
                    {selectedWriting.content.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-[#F5F5F4] flex items-center justify-between text-xs text-[#A8A29E] font-sans">
                    <span>Written by Harsheen Kaur</span>
                    <span>End of Selection</span>
                  </div>
                </div>
              ) : (
                /* Manuscript Index Grid */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {writersNookData.map((item) => (
                    <article
                      key={item.id}
                      onClick={() => setSelectedWriting(item)}
                      className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm hover:border-[#1C1917] hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#78716C]">
                          <span className="uppercase px-2 py-0.5 rounded bg-[#F5F5F4]">
                            {item.category}
                          </span>
                          <span>{item.date}</span>
                        </div>
                        <h4 className="text-lg font-bold text-[#1C1917] group-hover:text-[#B45309] transition">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#57534E] leading-relaxed line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#F5F5F4] flex items-center justify-between text-xs text-[#B45309] font-medium">
                        <span>Read Manuscript →</span>
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ============================================================== */}
          {/* ROOM 3: THE LISTENING ROOM                                     */}
          {/* ============================================================== */}
          {activeWindowId === "music" && (
            <div className="space-y-6">
              <div className="border-b border-[#E4DCD3] pb-4 space-y-1">
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  The Listening Den & Soundscapes
                </h3>
                <p className="text-xs text-[#78716C] font-sans">
                  Deep focus ambient sounds, midnight lo-fi, and neoclassical piano melodies that fuel deep work.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {listeningRoomData.map((track) => (
                  <div
                    key={track.id}
                    className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm space-y-3 flex flex-col justify-between hover:border-[#D6D3D1] transition"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E]">
                          {track.mood}
                        </span>
                        <span className="text-[10px] font-sans text-[#78716C]">
                          {track.duration || "Ambient Focus"}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#1C1917]">
                        {track.title}
                      </h4>
                      <span className="text-xs text-[#78716C] block font-sans">
                        by {track.artist}
                      </span>
                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {track.note}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F5F5F4] flex items-center justify-between text-xs text-[#78716C] font-sans">
                      <span className="flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-[#B45309]" />
                        <span>Curated Selection</span>
                      </span>
                      {track.spotifyUrl && (
                        <a
                          href={track.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#B45309] hover:underline flex items-center gap-1 font-semibold"
                        >
                          <span>Listen</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* ROOM 4: THE EXPLORER'S WINDOW                                  */}
          {/* ============================================================== */}
          {activeWindowId === "travel" && (
            <div className="space-y-6">
              <div className="border-b border-[#E4DCD3] pb-4 space-y-1">
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  The Explorer&apos;s Postcard Wall
                </h3>
                <p className="text-xs text-[#78716C] font-sans">
                  Photographic memories, quiet mountain retreats, architecture discoveries, and travel wishlists.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {explorerData.map((place) => (
                  <div
                    key={place.id}
                    className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm space-y-3 flex flex-col justify-between hover:border-[#D6D3D1] transition"
                  >
                    {/* Postcard Photo Frame Placeholder */}
                    <div className="h-32 rounded-xl bg-[#F5F2EB] border border-[#E4DCD3] flex flex-col items-center justify-center p-3 text-center">
                      <MapPin className="w-5 h-5 text-[#B45309] mb-1" />
                      <span className="text-xs font-serif font-bold text-[#1C1917]">
                        {place.location}
                      </span>
                      <span className="text-[10px] text-[#78716C] font-sans">
                        {place.country}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857]">
                          {place.category}
                        </span>
                        {place.season && (
                          <span className="text-[#78716C]">{place.season}</span>
                        )}
                      </div>
                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {place.note}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {place.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-[9px] font-sans px-1.5 py-0.5 rounded bg-[#F5F5F4] text-[#78716C]"
                          >
                            • {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* ROOM 5: THE CREATIVE STUDIO                                    */}
          {/* ============================================================== */}
          {activeWindowId === "design" && (
            <div className="space-y-6">
              <div className="border-b border-[#E4DCD3] pb-4 space-y-1">
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  The Creative Studio & Design Tokens
                </h3>
                <p className="text-xs text-[#78716C] font-sans">
                  Design system explorations, WCAG AAA accessibility ergonomics, and celebration palettes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {creativeStudioData.map((specimen) => (
                  <div
                    key={specimen.id}
                    className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#FAF5FF] text-[#7E22CE]">
                        {specimen.type}
                      </span>
                      <h4 className="text-base font-bold text-[#1C1917]">
                        {specimen.title}
                      </h4>
                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {specimen.description}
                      </p>

                      {/* Color Palette Swatches */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-[#A8A29E]">
                          Tokens Palette:
                        </span>
                        <div className="flex items-center gap-1.5">
                          {specimen.palette.map((color, i) => (
                            <div
                              key={i}
                              className="w-7 h-7 rounded-lg border border-black/10 shadow-xs flex items-center justify-center text-[8px] font-mono text-transparent hover:text-white"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#F5F5F4] text-xs text-[#78716C] space-y-1">
                      <div className="flex flex-wrap gap-1">
                        {specimen.tools.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#F5F5F4] text-[#44403C]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-[11px] italic text-[#78716C] pt-1">
                        &ldquo;{specimen.note}&rdquo;
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* ROOM 6: THE CURIOSITY LAB                                      */}
          {/* ============================================================== */}
          {activeWindowId === "curiosity" && (
            <div className="space-y-6">
              <div className="border-b border-[#E4DCD3] pb-4 space-y-1">
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  The Curiosity Lab & Inquiry Board
                </h3>
                <p className="text-xs text-[#78716C] font-sans">
                  Deep-dive intellectual inquiries spanning Neuro-Symbolic AI, data quality ethics (MDQC), and gamified pedagogies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {curiosityLabData.map((topic) => (
                  <div
                    key={topic.id}
                    className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm space-y-3 flex flex-col justify-between hover:border-[#D6D3D1] transition"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8]">
                          {topic.domain}
                        </span>
                        <span className="text-[#78716C] font-semibold">
                          {topic.status}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#1C1917]">
                        {topic.topic}
                      </h4>
                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {topic.summary}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FEFCE8] border border-[#FEF08A] text-xs space-y-1 font-sans">
                      <strong className="block text-[11px] text-[#854D0E] font-serif">
                        Guiding Question:
                      </strong>
                      <p className="text-[#713F12] text-[11px] leading-relaxed">
                        {topic.keyQuestion}
                      </p>
                    </div>

                    {topic.favoriteResource && (
                      <div className="text-[10px] text-[#A8A29E] font-mono border-t border-[#F5F5F4] pt-2">
                        Resource: {topic.favoriteResource}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
