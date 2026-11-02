import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Code2,
  Cpu,
  BarChart3,
  Globe,
  Terminal,
  Layers,
  ArrowRight,
  Compass,
} from "lucide-react";
import { skillCategories, skillsList } from "@/data/skills";
import { SkillProjectExplorer } from "@/components/skills/SkillProjectExplorer";

export const metadata = {
  title: "Skills & Technologies — Harsheen Kaur",
  description:
    "Organized skills matrix across Python, SQL, Machine Learning, Data Analytics (Power BI, Excel PivotTables), and Web Development.",
};

export default function SkillsPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return Code2;
      case "Cpu":
        return Cpu;
      case "BarChart3":
        return BarChart3;
      case "Globe":
        return Globe;
      case "Terminal":
        return Terminal;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 border-b border-slate-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-electric">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES & TOOLING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Skills & Applied Technologies
          </h1>
          <p className="text-lg text-slate-300 font-sans leading-relaxed max-w-3xl">
            A structured breakdown of computational languages, analytical tools, machine learning frameworks, and operational systems applied across enterprise data operations and full-stack software development.
          </p>
        </div>
      </section>

      {/* Categorized Skills Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = getIcon(category.iconName);
            const skillsInCat = skillsList.filter((s) => s.category === category.id);

            return (
              <div
                key={category.id}
                className="rounded-3xl bg-midnight-950 border border-slate-800 p-6 sm:p-7 space-y-5 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-electric/15 text-electric border border-electric/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-serif font-bold text-white">
                        {category.title}
                      </h2>
                      <span className="text-xs font-mono text-slate-400">
                        {skillsInCat.length} verified technologies
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-900">
                  {skillsInCat.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-xl bg-midnight-900 text-slate-200 text-xs font-medium border border-slate-800 hover:border-slate-700 transition"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Skill-to-Project Explorer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SkillProjectExplorer />
      </section>

      {/* Bottom Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pt-6 border-t border-slate-800">
        <Link
          href="/projects"
          className="text-xs font-semibold text-slate-400 hover:text-white"
        >
          ← Project Portfolio
        </Link>
        <Link
          href="/education"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline"
        >
          <span>Education & Academic Standing</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
