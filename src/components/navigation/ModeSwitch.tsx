"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Briefcase, Sparkles } from "lucide-react";

interface ModeSwitchProps {
  className?: string;
}

export const ModeSwitch: React.FC<ModeSwitchProps> = ({ className = "" }) => {
  const pathname = usePathname();
  const isCityMode = pathname?.startsWith("/world");

  return (
    <div
      role="region"
      aria-label="Experience Switcher"
      className={`inline-flex items-center p-1 rounded-full bg-midnight-950/80 border border-slate-700/60 shadow-lg backdrop-blur-md ${className}`}
    >
      {/* Hello World Mode (Professional Portfolio) */}
      <Link
        href="/"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
          !isCityMode
            ? "bg-electric text-white shadow-electric-sm font-semibold"
            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
        }`}
        aria-current={!isCityMode ? "page" : undefined}
      >
        <Briefcase className="w-3.5 h-3.5" />
        <span>HELLO, WORLD</span>
      </Link>

      <span className="text-slate-600 px-1 text-xs select-none">↔</span>

      {/* Harsheen's Little World Mode (Interactive City) */}
      <Link
        href="/world"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
          isCityMode
            ? "bg-gradient-to-r from-rose-500 via-purple-600 to-electric text-white shadow-electric-md font-semibold ring-1 ring-white/30"
            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
        }`}
        aria-current={isCityMode ? "page" : undefined}
      >
        <Compass className={`w-3.5 h-3.5 ${isCityMode ? "animate-spin-slow" : ""}`} />
        <span>HARSHEEN&apos;S LITTLE WORLD</span>
        <Sparkles className="w-2.5 h-2.5 text-amber-300 animate-pulse" />
      </Link>
    </div>
  );
};
