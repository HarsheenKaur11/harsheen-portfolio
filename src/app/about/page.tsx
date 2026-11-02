import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Award,
  Compass,
  FileText,
  Mail,
  Linkedin,
  Github,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { experiences } from "@/data/experience";
import { educationList } from "@/data/education";

export const metadata = {
  title: "About Harsheen Kaur — Editorial Profile",
  description:
    "Learn about Harsheen Kaur's background in data operations, computer applications, machine learning, and human-centered design.",
};

export default function AboutPage() {
  const bca = educationList[0];
  const niq = experiences[0];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 text-center sm:text-left border-b border-slate-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-electric">
            <span>EDITORIAL BIOGRAPHY & ESSAY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Turning curiosity into things that work.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed">
            Harsheen Kaur — Analytical thinker, Data Operations Analyst at NielsenIQ, and developer of intelligent, accessible systems.
          </p>
        </div>
      </section>

      {/* Magazine Editorial Paper Layout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#F1EDE4] text-[#272727] p-8 sm:p-14 shadow-2xl space-y-10 border border-[#D9D0C2]">
          {/* Header metadata row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9D0C2] pb-6 text-xs font-mono text-[#9C8870] uppercase tracking-wider">
            <span>Profile & Philosophy</span>
            <span>Delhi, India • BCA Distinction (9.48 CGPA)</span>
          </div>

          {/* Lead Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl italic text-[#17191F] leading-snug border-l-4 border-electric pl-6">
            &ldquo;Data is not merely rows and columns; it is the pulse of real decisions. When coupled with thoughtful design and rigorous engineering, it transforms confusion into absolute clarity.&rdquo;
          </blockquote>

          {/* Essay Body Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-[#272727] leading-relaxed font-serif">
            <p>
              My path in technology has always been shaped by two guiding questions: <em>&ldquo;How does this work beneath the surface?&rdquo;</em> and <em>&ldquo;How can this genuinely help someone?&rdquo;</em> During my Bachelor of Computer Applications at Vivekananda Institute of Professional Studies (VIPS), I immersed myself in computer science fundamentals, from relational database architectures and discrete mathematics to machine learning pipelines, graduating with a cumulative CGPA of <strong>9.48</strong>.
            </p>

            <p>
              That academic discipline quickly evolved into enterprise execution. Joining <strong>NielsenIQ (NIQ)</strong> as a Data Operations Analyst, I took on the responsibility of managing critical coding and Master Data Quality Control (MDQC) for enterprise consumer and retail datasets. Within six months, I earned the trust of my leadership to manage end-to-end deadline coordination and submissions for an entire market sector. Receiving the <strong>NIQ Thumbs Up Award</strong> was an invigorating milestone that affirmed my focus on ownership, zero-defect quality, and timely SLA delivery under real-world operational pressure.
            </p>

            <p>
              Outside enterprise operations, I build software that tackles problems I care about. When deceptive media began saturating the internet, I developed <strong>FactShield</strong>, integrating LSTM lexical analysis with ResNet18 visual deepfake detection. When observing the digital frustration experienced by senior citizens navigating modern interfaces, I created <strong>SeniorSaathi</strong>, leveraging Google Gemini generative models to distill intimidating texts, provide calm voice assistance, and flag deceptive online scams.
            </p>

            <p>
              Whether analyzing crop-failure correlations to assist smallholder farming risk, architecting financial trend visualizers for NIFTY stocks in <strong>StockMinds</strong>, or orchestrating generative event workflows in <strong>Planora AI</strong>, my objective remains identical: grounded analytical thinking, disciplined execution, and user-centered design.
            </p>
          </div>

          {/* Editorial Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#D9D0C2]">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#9C8870]">
                01. Operational Rigor
              </span>
              <h4 className="font-serif font-bold text-lg text-[#17191F]">
                NielsenIQ Excellence
              </h4>
              <p className="text-xs font-sans text-[#474747] leading-relaxed">
                MDQC activities, sector-wide SLA accountability, and advanced Excel reconciliation.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#9C8870]">
                02. Academic Distinction
              </span>
              <h4 className="font-serif font-bold text-lg text-[#17191F]">
                9.48 CGPA & Honors
              </h4>
              <p className="text-xs font-sans text-[#474747] leading-relaxed">
                Top 1% in HCI (IIIT Delhi), Top 5% in Python (IIT Madras), CBSE Science 86.8%.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#9C8870]">
                03. Creative Software
              </span>
              <h4 className="font-serif font-bold text-lg text-[#17191F]">
                AI & Social Impact
              </h4>
              <p className="text-xs font-sans text-[#474747] leading-relaxed">
                From FactShield&apos;s LSTM detector to SeniorSaathi&apos;s empathetic accessibility engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action / Navigation Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 pt-6">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline"
        >
          <span>Explore Professional Experience at NIQ</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/world"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md transition"
          >
            <Compass className="w-4 h-4" />
            <span>Explore City Landmark</span>
          </Link>

          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 transition"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </section>
    </div>
  );
}
