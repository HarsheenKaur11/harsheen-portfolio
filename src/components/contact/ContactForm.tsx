"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";
import { profileData } from "@/data/profile";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [mailtoUrl, setMailtoUrl] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client validation
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Please provide a message with at least 10 characters.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to process message.");
      }

      setStatus("success");
      setMailtoUrl(data.fallbackMailto || `mailto:${profileData.email}`);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please use direct email.");
    }
  };

  return (
    <div className="rounded-3xl bg-midnight-950 border border-slate-800 p-6 sm:p-8 shadow-2xl">
      <div className="mb-6 space-y-1">
        <h3 className="text-xl font-serif font-bold text-white">
          Send a Message
        </h3>
        <p className="text-xs text-slate-400">
          Reach out regarding opportunities, collaborative data analytics, or AI projects.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-4 text-center animate-in fade-in">
          <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-white">
              Message Form Received!
            </h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Your inquiry has been validated. For immediate delivery to Harsheen&apos;s personal inbox, you can also launch your local email client with one click:
            </p>
          </div>

          <div className="pt-2">
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition"
            >
              <Mail className="w-4 h-4" />
              <span>Open in Email App ({profileData.email})</span>
            </a>
          </div>

          <button
            onClick={() => {
              setStatus("idle");
              setFormData({ name: "", email: "", subject: "", message: "" });
            }}
            className="text-xs text-slate-400 hover:text-white underline pt-2 block mx-auto"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-slate-300">
                Your Name <span className="text-electric">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full px-3.5 py-2.5 rounded-xl bg-midnight-900 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-electric transition"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-slate-300">
                Your Email <span className="text-electric">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-midnight-900 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-electric transition"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-xs font-medium text-slate-300">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Collaboration / Job Opportunity / Project Discussion"
              className="w-full px-3.5 py-2.5 rounded-xl bg-midnight-900 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-electric transition"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium text-slate-300">
              Message <span className="text-electric">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Harsheen, I was impressed by your work on FactShield and your experience at NielsenIQ..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-midnight-900 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-electric transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 rounded-xl bg-electric hover:bg-electric-dark disabled:opacity-50 text-white text-xs font-semibold tracking-wider uppercase shadow-electric-sm flex items-center justify-center gap-2 transition"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Verified Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
