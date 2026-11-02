"use client";

import React from "react";
import Link from "next/link";
import {
  X,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
} from "lucide-react";
import { CityBuilding } from "@/data/city";

interface BuildingDetailModalProps {
  building: CityBuilding | null;
  onClose: () => void;
}

export const BuildingDetailModal: React.FC<BuildingDetailModalProps> = ({
  building,
  onClose,
}) => {
  if (!building) return null;

  const isProject = building.type === "project";
  const isInProgress = building.badge === "IN PROGRESS";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`City Destination: ${building.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-midnight-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with district accent glow */}
        <div
          className="p-6 sm:p-7 relative border-b border-slate-800"
          style={{
            background: `radial-gradient(circle at top right, ${building.palette.accent}25, transparent 70%), #0A0E17`,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${building.districtColor}25`,
                    color: building.palette.accent,
                    border: `1px solid ${building.districtColor}50`,
                  }}
                >
                  {building.district}
                </span>

                {building.badge && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-semibold border ${
                      isInProgress
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                        : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                    }`}
                  >
                    {building.badge}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-serif font-bold text-white pt-1">
                {building.name}
              </h3>
              <p className="text-sm font-sans text-slate-300">
                {building.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close Building Details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          {/* Architectural context */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              City Destination Overview
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {building.description}
            </p>
          </div>

          {/* Quick Highlight Stat */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="block text-[11px] text-slate-400 uppercase tracking-wider">
                {building.statLabel}
              </span>
              <span className="text-base font-bold text-white mt-0.5 block">
                {building.statValue}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="block text-[11px] text-slate-400 uppercase tracking-wider">
                Architecture Style
              </span>
              <span className="text-sm font-bold text-white mt-0.5 block capitalize truncate" title={building.architecturalStyle}>
                {building.architecturalStyle}
              </span>
            </div>
          </div>

          {/* Key Technologies / Focus */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Key Focus & Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {building.techPreview.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/80 text-slate-200 border border-slate-700/60 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-5 bg-midnight-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition"
          >
            Keep Exploring City
          </button>

          <Link
            href={building.route}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-electric hover:bg-electric-dark text-white text-xs font-semibold tracking-wide shadow-electric-sm transition"
          >
            <span>{isProject ? "Enter Case Study" : "View Destination"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
