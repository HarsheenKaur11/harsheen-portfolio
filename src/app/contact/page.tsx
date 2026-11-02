import React from "react";
import Link from "next/link";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  MapPin,
  ExternalLink,
  Compass,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact & Professional Inquiries — Harsheen Kaur",
  description:
    "Get in touch with Harsheen Kaur via email, LinkedIn, or GitHub for Data Operations, Analytics, and Software Engineering opportunities.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 border-b border-slate-800 pb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-electric">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATIONS & INQUIRIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Let&apos;s Build Something Meaningful Together
          </h1>
          <p className="text-lg text-slate-300 font-sans leading-relaxed max-w-3xl">
            Whether you are discussing open data roles, enterprise data operations, AI/ML engineering, or potential software collaborations, I welcome your inquiry.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Cards (5 cols) & Contact Form (7 cols) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-midnight-950 border border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-electric/15 text-electric">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400">
                    Direct Email
                  </span>
                  <h4 className="text-base font-semibold text-white">
                    {profileData.email}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct inquiries are answered promptly regarding recruitment, consulting, or project collaborations.
              </p>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline pt-1"
              >
                <span>Compose Email Message</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Verified Public Profiles Card */}
            <div className="p-6 rounded-3xl bg-midnight-950 border border-slate-800 space-y-4 shadow-xl">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                Verified Public Networks
              </span>

              <div className="space-y-3">
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-midnight-900 border border-slate-800/80 hover:border-sky-500/50 flex items-center justify-between transition group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-sky-400" />
                    <div>
                      <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition">
                        LinkedIn Profile
                      </span>
                      <span className="block text-[11px] text-slate-400">
                        linkedin.com/in/harsheenkaur11
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </a>

                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-midnight-900 border border-slate-800/80 hover:border-slate-600 flex items-center justify-between transition group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-200" />
                    <div>
                      <span className="text-sm font-semibold text-white group-hover:text-slate-200 transition">
                        GitHub Profile
                      </span>
                      <span className="block text-[11px] text-slate-400">
                        github.com/HarsheenKaur11
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Resume Download Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-midnight-950 to-midnight-900 border border-electric/30 space-y-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-electric text-white">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    Official Resume (PDF)
                  </h4>
                  <span className="text-xs text-slate-400">
                    Full verification record & awards
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contains verified CGPA (9.48), NIQ employment details, NPTEL honors, and complete skill matrix.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-electric hover:bg-electric-dark text-white text-xs font-semibold shadow-sm transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <Link
                  href="/resume"
                  className="text-xs text-slate-300 hover:text-white underline font-medium"
                >
                  View Web Version
                </Link>
              </div>
            </div>

            {/* Privacy Guarantee */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Personal privacy respected: Phone number and residential address are kept confidential and shared only upon verified candidate screening.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* City Connect Centre Link */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-midnight-900 border border-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold text-white">
              The City Connect Centre
            </h3>
            <p className="text-xs text-slate-300">
              In Harsheen&apos;s World, communication links are anchored by the illuminated transmission tower at the <strong>City Connect Centre</strong>.
            </p>
          </div>
          <Link
            href="/world"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-electric hover:from-teal-600 hover:to-electric-dark text-white font-semibold text-xs tracking-wider uppercase shadow-md transition shrink-0"
          >
            <Compass className="w-4 h-4" />
            <span>Locate In City</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
