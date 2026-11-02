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
        className="relative w-full max-w-4xl bg-[#FAF8F5] text-[#272727] rounded-3xl shadow-2xl overflow-hidden my-6 border border-[#E4DCD3] flex flex-col max-h-[90vh]"
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
        <div className="bg-[#FEFCE8] border-b border-[#FEF08A] px-6 py-3 flex items-center justify-between text-xs text-[#854D0E] font-serif italic shrink-0">
          <p className="line-clamp-1">&ldquo;{currentWindow.quote}&rdquo;</p>
          <span className="text-[11px] font-sans not-italic text-[#A16207] shrink-0 ml-4 font-medium">
            {currentWindow.subtitle}
          </span>
        </div>

        {/* Main Room Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 font-serif">
          {/* ROOM 1: THE BOOKSHELF */}
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

          {/* ROOM 2: THE WRITER'S NOOK */}
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
                    {selectedWriting.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-[#F5F5F4] flex justify-between text-xs text-[#A8A29E] font-sans">
                    <span>Manuscript from Harsheen&apos;s Journal</span>
                    <button
                      onClick={() => setSelectedWriting(null)}
                      className="text-[#B45309] hover:underline font-serif font-semibold"
                    >
                      Close Reader
                    </button>
                  </div>
                </div>
              ) : (
                /* Manuscript Index */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {writersNookData.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedWriting(item)}
                      className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm space-y-3 cursor-pointer hover:border-[#B45309] hover:shadow-md transition group flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E]">
                            {item.category}
                          </span>
                          <span className="text-xs font-mono text-[#A8A29E]">
                            {item.date}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-[#1C1917] group-hover:text-[#B45309] transition">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#57534E] leading-relaxed line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#F5F5F4] flex items-center justify-between text-xs text-[#B45309] font-serif font-semibold">
                        <span>Read Manuscript</span>
                        <span>→</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ROOM 3: THE LISTENING ROOM */}
          {activeWindowId === "music" && (
            <div className="space-y-6">
              <div className="border-b border-[#E4DCD3] pb-4 space-y-1">
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  The Listening Room & Turntable
                </h3>
                <p className="text-xs text-[#78716C] font-sans">
                  Vinyl record textures and acoustic soundtracks curated for focused thinking, coding, and evening tea.
                </p>
              </div>

              <div className="space-y-3">
                {listeningRoomData.map((track) => (
                  <div
                    key={track.id}
                    className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm flex items-center justify-between gap-4 hover:border-[#8B5CF6] transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center shrink-0">
                        <Disc className="w-5 h-5 animate-spin-slow" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1917]">
                          {track.title}
                        </h4>
                        <span className="text-xs text-[#78716C] font-sans">
                          {track.artist} {track.duration ? `• ${track.duration}` : ""}
                        </span>
                        <p className="text-[11px] text-[#57534E] font-sans mt-0.5">
                          {track.note}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE] shrink-0 font-medium">
                      {track.mood}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROOM 4: THE EXPLORER'S WINDOW */}
          {activeWindowId === "travel" && (
            <div className="space-y-6">
              <div className="border-b border-[#E4DCD3] pb-4 space-y-1">
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  The Explorer&apos;s Window & Postcard Desk
                </h3>
                <p className="text-xs text-[#78716C] font-sans">
                  Travel journals, Himalayan retreats, historic alleyways, and international wanderlust wishlists.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {explorerData.map((dest) => (
                  <div
                    key={dest.id}
                    className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full ${
                            dest.category === "Visited"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-purple-50 text-purple-700"
                          }`}
                        >
                          {dest.category}
                        </span>
                        {dest.season && (
                          <span className="text-xs font-mono text-[#A8A29E]">
                            {dest.season}
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-[#1C1917]">
                        {dest.location}
                      </h4>
                      <span className="text-xs text-[#78716C] block font-sans">
                        {dest.country}
                      </span>
                      <p className="text-xs text-[#44403C] leading-relaxed">
                        {dest.note}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#F5F5F4] space-y-1.5">
                      <span className="text-[10px] font-mono text-[#A8A29E] uppercase tracking-wider block">
                        Highlights:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-[10px] font-sans px-2 py-0.5 rounded-md bg-[#F5F5F4] text-[#57534E]"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROOM 5: THE CREATIVE STUDIO */}
          {activeWindowId === "design" && (
            <div className="space-y-6">
              <div className="border-b border-[#E4DCD3] pb-4 space-y-1">
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  The Creative Studio & Swatch Table
                </h3>
                <p className="text-xs text-[#78716C] font-sans">
                  Design systems, color explorations, UI experiments, and typography sketches created with intentional craft.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {creativeStudioData.map((d) => (
                  <div
                    key={d.id}
                    className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#FCE7F3] text-[#BE185D]">
                        {d.type}
                      </span>
                      <h4 className="text-base font-bold text-[#1C1917]">
                        {d.title}
                      </h4>
                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {d.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#F5F5F4]">
                      <span className="text-[10px] font-mono text-[#A8A29E] uppercase tracking-wider block">
                        Palette Swatches:
                      </span>
                      <div className="flex items-center gap-1.5">
                        {d.palette.map((color, cIdx) => (
                          <span
                            key={cIdx}
                            className="w-6 h-6 rounded-lg border border-black/10 shadow-inner"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROOM 6: THE CURIOSITY LAB */}
          {activeWindowId === "curiosity" && (
            <div className="space-y-6">
              <div className="border-b border-[#E4DCD3] pb-4 space-y-1">
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  The Curiosity Lab & Inquiry Board
                </h3>
                <p className="text-xs text-[#78716C] font-sans">
                  Intellectual rabbit holes, questions that keep me up at night, and lifelong technical inquiries beyond textbook definitions.
                </p>
              </div>

              <div className="space-y-4">
                {curiosityLabData.map((c) => (
                  <div
                    key={c.id}
                    className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] shadow-sm space-y-2 hover:border-[#2563EB] transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#DBEAFE] text-[#1E40AF]">
                        {c.domain}
                      </span>
                      <span className="text-[11px] font-sans font-semibold text-[#64748B]">
                        Status: {c.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#1C1917]">
                      {c.topic}
                    </h4>
                    <p className="text-xs text-[#44403C] leading-relaxed">
                      {c.summary}
                    </p>

                    <div className="pt-2 mt-2 border-t border-[#F5F5F4] bg-[#F8FAFC] p-3 rounded-xl text-xs text-[#1E3A8A]">
                      <strong className="block font-mono text-[10px] uppercase text-[#3B82F6]">
                        Core Driving Question:
                      </strong>
                      <span className="italic">{c.keyQuestion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="bg-[#F5F2EB] border-t border-[#E4DCD3] px-6 py-4 flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs font-serif">
          <button
            onClick={onBackToHouse}
            className="inline-flex items-center gap-1.5 text-[#57534E] hover:text-[#1C1917] font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Comfort Cottage Exterior</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1C1917] text-white hover:bg-[#292524] transition font-sans text-xs font-medium"
          >
            Back to Little World Map
          </button>
        </div>
      </div>
    </div>
  );
};
