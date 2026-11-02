import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowUpRight,
  Compass,
  Heart,
} from "lucide-react";
import { profileData } from "@/data/profile";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-midnight-950 text-slate-400 text-xs">
      {/* Top Banner / Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-900">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gradient-to-r from-slate-900/80 via-midnight-900 to-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400">
              Interactive 2.5D Neighbourhood
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Step into Harsheen&apos;s Little World
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Explore 5 charming connected districts, discover 12 architectural landmarks, and step inside <strong>My Comfort Home</strong> to visit 6 cozy interactive rooms.
            </p>
          </div>
          <Link
            href="/world"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-purple-600 to-electric hover:from-rose-600 hover:to-electric-dark text-white font-semibold text-xs tracking-wide shadow-electric-md transition shrink-0"
          >
            <Compass className="w-4 h-4" />
            <span>Enter Harsheen&apos;s Little World</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Col 1: Identity */}
        <div className="space-y-3">
          <Link href="/" className="font-serif text-lg font-bold text-white">
            {profileData.name}
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed">
            Data Operations Analyst & Software Technologist. Combining analytical rigor, data quality, and intuitive full-stack engineering.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200">
            Portfolio Navigation
          </h4>
          <ul className="space-y-1.5 text-xs">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Harsheen
              </Link>
            </li>
            <li>
              <Link href="/experience" className="hover:text-white transition">
                Experience & NIQ
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">
                Project Portfolio
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-white transition">
                Skills & Technologies
              </Link>
            </li>
            <li>
              <Link href="/education" className="hover:text-white transition">
                Education & Honors
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="hover:text-white transition">
                Certifications & Awards
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact & Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Confirmed Projects */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200">
            Featured Projects
          </h4>
          <ul className="space-y-1.5 text-xs">
            <li>
              <Link href="/projects/factshield" className="hover:text-white transition">
                FactShield (AI Credibility)
              </Link>
            </li>
            <li>
              <Link href="/projects/stockminds" className="hover:text-white transition">
                StockMinds (ML Equities)
              </Link>
            </li>
            <li>
              <Link href="/projects/crop-failure-risk-analysis" className="hover:text-white transition">
                Crop Failure Risk Analysis
              </Link>
            </li>
            <li>
              <Link href="/projects/the-eleventh-hour" className="hover:text-white transition">
                The Eleventh Hour (E-Commerce)
              </Link>
            </li>
            <li>
              <Link href="/projects/seniorsaathi" className="hover:text-white transition">
                SeniorSaathi (AI Companion)
              </Link>
            </li>
            <li>
              <Link href="/projects/planora-ai" className="hover:text-white transition">
                Planora AI (Event Suite)
              </Link>
            </li>
            <li>
              <Link href="/projects/arcanum" className="hover:text-white transition text-amber-300">
                Arcanum (In Progress)
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Verified Credentials */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200">
            Professional Verification
          </h4>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="block text-[11px] font-semibold text-slate-300">
                NIQ Thumbs Up Award
              </span>
              <span className="text-[11px] text-slate-400">
                Awarded for exceptional data operations & MDQC delivery.
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="block text-[11px] font-semibold text-slate-300">
                NPTEL Top 1% & Top 5%
              </span>
              <span className="text-[11px] text-slate-400">
                Nationally ranked in HCI (IIIT Delhi) and Python (IIT Madras).
              </span>
            </div>
          </div>
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline pt-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
        <div>
          © {new Date().getFullYear()} {profileData.name}. All verified rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span>Midnight Editorial City Architecture</span>
          <span>•</span>
          <span>Built with Next.js, TypeScript & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};
