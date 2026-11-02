import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Award,
  Sparkles,
  Layers,
  Briefcase,
  GraduationCap,
  Download,
  ExternalLink,
  CheckCircle2,
  Cpu,
  BarChart3,
  Globe,
} from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SkillProjectExplorer } from "@/components/skills/SkillProjectExplorer";
import { profileData } from "@/data/profile";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { educationList } from "@/data/education";

export default function HomePage() {
  const currentJob = experiences[0];
  const featuredProjects = projects.slice(0, 4);
  const featuredCerts = certifications.filter((c) => c.featured).slice(0, 4);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. THE CITY GATEWAY CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-midnight-900 via-midnight-850 to-midnight-900 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wider uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span>Signature Portfolio Feature</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
                Two Connected Perspectives. One Unified Portfolio.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Prefer an explorable world? Step into <strong>Harsheen&apos;s Little World</strong>—a colourful, charming 2.5D isometric neighbourhood featuring 12 destinations across 5 districts, plus the centerpiece <strong>My Comfort Home</strong> with 6 interactive sanctuary rooms.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/world"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-purple-600 to-electric hover:from-rose-600 hover:to-purple-700 text-white font-semibold text-xs tracking-wider uppercase shadow-electric-md transition"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Harsheen&apos;s Little World</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold tracking-wider uppercase border border-slate-700/80 transition"
              >
                <span>Read Editorial Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-midnight-900 border border-slate-800 p-8 sm:p-12 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-electric">
                Editorial Profile
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Analytical Mind, Creative Architecture
              </h2>
            </div>
            <Link
              href="/about"
              className="text-xs font-semibold text-electric hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>Full Editorial Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            <div className="lg:col-span-6 space-y-4">
              <p>
                {profileData.summary.editorial[0]}
              </p>
              <p>
                {profileData.summary.editorial[1]}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p>
                {profileData.summary.editorial[2]}
              </p>
              <div className="p-5 rounded-2xl bg-midnight-950/80 border border-slate-800 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Professional Competencies
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Data Operations & MDQC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Machine Learning (LSTM, RF)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Advanced Excel & SQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>TypeScript & Full-Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRENT ENTERPRISE EXPERIENCE — NIELSENIQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-midnight-950 border border-slate-800 p-8 sm:p-12 space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Corporate Leadership</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Data Operations at NielsenIQ (NIQ)
              </h2>
            </div>
            <Link
              href="/experience"
              className="text-xs font-semibold text-electric hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>View All Career Roles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-2xl bg-midnight-900 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono uppercase text-electric tracking-wider">
                  Current Role & Timing
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  {currentJob.role}
                </h3>
                <p className="text-sm text-slate-300">
                  {currentJob.organization} • {currentJob.period}
                </p>
                <div className="pt-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold">
                    🏆 NIQ Thumbs Up Award
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-midnight-900/60 border border-slate-800 text-xs text-slate-400 space-y-2">
                <span className="font-semibold text-slate-200 block uppercase tracking-wider">
                  Associated City Landmark
                </span>
                <p>
                  Represented in Harsheen&apos;s World by the <strong>NIQ Corporate Tower</strong>, standing 160 units tall with its custom helipad roof.
                </p>
                <Link
                  href="/world"
                  className="text-electric hover:underline inline-flex items-center gap-1 font-medium pt-1"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Locate Tower in City</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Verified Contributions & Achievements
              </h4>
              <ul className="space-y-3">
                {currentJob.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-2xl bg-midnight-900/70 border border-slate-800/80 flex items-start gap-3.5 text-sm text-slate-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                  Operational Tooling & Methodologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentJob.skillsUsed.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEVEN CONFIRMED PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/15 text-electric text-xs font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>Seven Confirmed Projects</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Systems & Case Studies
            </h2>
            <p className="text-sm text-slate-400">
              Rigorous problem statements, transparent technical implementations, and verified performance.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700/80 transition"
          >
            <span>View All 7 Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 6. SKILL-TO-PROJECT EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SkillProjectExplorer />
      </section>

      {/* 7. ACADEMIC EXCELLENCE & HALL OF FAME PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Academic Honors (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-midnight-950 border border-slate-800 p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                  Scholastic Distinction
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Academic Background
                </h3>
              </div>
              <Link
                href="/education"
                className="text-xs text-electric hover:underline inline-flex items-center gap-1"
              >
                <span>Full Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {educationList.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-2xl bg-midnight-900/80 border border-slate-800/80 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">
                      {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20 font-mono">
                      {edu.score}
                    </span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {edu.institution} • {edu.location}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Hall of Fame (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-midnight-950 border border-slate-800 p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-electric tracking-wider">
                  Verified Accolades
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  National Honors & Certifications
                </h3>
              </div>
              <Link
                href="/achievements"
                className="text-xs text-electric hover:underline inline-flex items-center gap-1"
              >
                <span>All 10 Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {featuredCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-2xl bg-midnight-900/80 border border-slate-800/80 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400">
                      {cert.issuer}
                    </span>
                    <h5 className="text-sm font-semibold text-white">
                      {cert.title}
                    </h5>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {cert.description}
                    </p>
                  </div>

                  {cert.distinction && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-electric/15 text-electric-light border border-electric/30 shrink-0">
                      {cert.distinction}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIRECT CONTACT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-midnight-900 via-midnight-850 to-midnight-900 border border-slate-800 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-electric">
              Let&apos;s Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Looking for an Analytical Thinker & Dependable Builder?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Open to conversations regarding Data Analytics, Data Operations, Machine Learning engineering, or creative technology opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-2xl bg-electric hover:bg-electric-dark text-white font-semibold text-xs tracking-wider uppercase shadow-electric-md transition"
            >
              Get In Touch Directly
            </Link>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold tracking-wider uppercase border border-slate-700/80 transition"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
