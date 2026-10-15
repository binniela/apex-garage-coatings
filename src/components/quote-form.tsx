"use client";

import { ArrowLeft, ArrowRight, Home, Paintbrush, Send, Sparkles, Wrench } from "lucide-react";
import { useState } from "react";

const phoneDisplay = "(626) 243-8727";
const phoneHref = "tel:+16262438727";

const projectTypes = [
  { value: "Garage floor", icon: Home, label: "Garage Floor" },
  { value: "Patio or porch", icon: Sparkles, label: "Patio / Porch" },
  { value: "Basement or home gym", icon: Paintbrush, label: "Basement / Gym" },
  { value: "Laundry or utility room", icon: Wrench, label: "Laundry / Utility" },
];

const garageSizes = ["1-car garage", "2-car garage", "3-car garage", "Other / unsure"];
const timelines = ["ASAP", "1–3 months", "Just researching"];

interface QuoteFormProps {
  idPrefix: string;
  buttonLabel: string;
  light?: boolean;
  defaultProjectType?: string;
}

export function QuoteForm({ idPrefix, buttonLabel, light = false, defaultProjectType }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState(defaultProjectType ?? "");
  const [garageSize, setGarageSize] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [timeline, setTimeline] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [step1Error, setStep1Error] = useState("");

  const isDark = !light;

  const labelClass = light
    ? "text-xs font-black uppercase text-[#5f6b78]"
    : "text-xs font-black uppercase text-white/[0.58]";
  const inputClass = light
    ? "h-12 rounded-md border border-[#d7dce2] bg-[#f8fafc] px-4 text-sm font-semibold text-[#0d1117] outline-none transition placeholder:text-[#8a96a3] focus:border-[#0f766e]"
    : "h-12 rounded-md border border-white/[0.12] bg-white/[0.08] px-4 text-sm font-semibold text-white outline-none transition placeholder:text-white/[0.42] focus:border-[#2dd4bf]";
  const headingClass = light ? "text-2xl font-black text-[#0d1117]" : "text-2xl font-black text-white";
  const subClass = light ? "mt-2 text-sm leading-6 text-[#52606d]" : "mt-2 text-sm leading-6 text-white/[0.62]";

  function advanceStep() {
    if (!projectType) {
      setStep1Error("Please select a project type.");
      return;
    }
    setStep1Error("");
    setStep(2);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, zip, projectType, garageSize, timeline, formLocation: idPrefix }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-4">
        <p className={headingClass}>We got it!</p>
        <p className={subClass}>
          Thanks, {name}. We received your quote request and will follow up within one business day with estimate
          options, timing, and color guidance.
        </p>
        <p className={`mt-4 text-sm font-bold ${light ? "text-[#0f766e]" : "text-[#62e6a8]"}`}>
          Prefer to talk now?{" "}
          <a className="underline" href={phoneHref}>
            Call {phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-5">
        <p className={headingClass}>Get Your Free Quote</p>
        <p className={subClass}>2 quick steps. No pressure estimate.</p>
      </div>

      {/* Progress */}
      <div className="mb-6 flex items-center gap-2">
        <div
          className={`h-2 flex-1 rounded-full transition-all ${step >= 1 ? (isDark ? "bg-[#2dd4bf]" : "bg-[#0f766e]") : isDark ? "bg-white/[0.12]" : "bg-[#d7dce2]"}`}
        />
        <div
          className={`h-2 flex-1 rounded-full transition-all ${step >= 2 ? (isDark ? "bg-[#2dd4bf]" : "bg-[#0f766e]") : isDark ? "bg-white/[0.12]" : "bg-[#d7dce2]"}`}
        />
        <span className={`text-xs font-black ${isDark ? "text-white/[0.48]" : "text-[#6b7682]"}`}>
          Step {step} of 2
        </span>
      </div>

      {step === 1 && (
        <div className="grid gap-5">
          {/* Project type */}
          <div>
            <p className={labelClass}>Project type</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {projectTypes.map((pt) => {
                const selected = projectType === pt.value;
                return (
                  <button
                    key={pt.value}
                    type="button"
                    onClick={() => { setProjectType(pt.value); setStep1Error(""); }}
                    className={`flex flex-col items-start gap-2 rounded-md border p-3 text-left transition ${
                      selected
                        ? isDark
                          ? "border-[#2dd4bf] bg-[#2dd4bf]/[0.12]"
                          : "border-[#0f766e] bg-[#0f766e]/[0.08]"
                        : isDark
                        ? "border-white/[0.12] bg-white/[0.05] hover:border-white/30"
                        : "border-[#d7dce2] bg-white hover:border-[#0f766e]/40"
                    }`}
                  >
                    <pt.icon
                      className={`h-5 w-5 ${selected ? (isDark ? "text-[#2dd4bf]" : "text-[#0f766e]") : isDark ? "text-white/50" : "text-[#768390]"}`}
                      aria-hidden
                    />
                    <span className={`text-xs font-black ${isDark ? "text-white" : "text-[#0d1117]"}`}>
                      {pt.label}
                    </span>
                  </button>
                );
              })}
            </div>
            {step1Error && <p className="mt-2 text-xs font-bold text-[#f87171]">{step1Error}</p>}
          </div>

          {/* Garage size */}
          <div>
            <p className={labelClass}>Approximate size</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {garageSizes.map((size) => {
                const selected = garageSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setGarageSize(size)}
                    className={`rounded-md border px-3 py-2 text-xs font-black transition ${
                      selected
                        ? isDark
                          ? "border-[#2dd4bf] bg-[#2dd4bf]/[0.12] text-[#99f6e4]"
                          : "border-[#0f766e] bg-[#0f766e]/[0.08] text-[#0f766e]"
                        : isDark
                        ? "border-white/[0.12] text-white/70 hover:border-white/30"
                        : "border-[#d7dce2] text-[#52606d] hover:border-[#0f766e]/40"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={advanceStep}
            className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-md text-sm font-black transition ${
              isDark
                ? "bg-[#2dd4bf] text-[#08090b] hover:bg-[#5eead4]"
                : "bg-[#0f766e] text-white hover:bg-[#0d6360]"
            }`}
          >
            Next — Contact Info
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="grid gap-2">
            <span className={labelClass}>Name</span>
            <input
              className={inputClass}
              name="name"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="grid gap-2">
            <span className={labelClass}>Phone</span>
            <input
              className={inputClass}
              name="phone"
              placeholder="(626) 000-0000"
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-2">
              <span className={labelClass}>ZIP</span>
              <input
                className={inputClass}
                name="zip"
                placeholder="91101"
                required
                inputMode="numeric"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </label>
            <label className="grid gap-2">
              <span className={labelClass}>Timeline</span>
              <select
                className={inputClass}
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
              >
                <option value="">Select</option>
                {timelines.map((t) => (
                  <option key={t} value={t} className="text-[#0d1117]">{t}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className={`inline-flex h-12 items-center justify-center gap-1 rounded-md border px-4 text-sm font-black transition ${
                isDark
                  ? "border-white/[0.14] text-white hover:border-white/40"
                  : "border-[#d7dce2] text-[#0d1117] hover:border-[#0f766e]/50"
              }`}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back
            </button>
            <button
              type="submit"
              disabled={status === "sending"}
              className={`inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md text-sm font-black transition disabled:cursor-wait disabled:opacity-70 ${
                isDark
                  ? "bg-[#2dd4bf] text-[#08090b] hover:bg-[#5eead4]"
                  : "bg-[#0f766e] text-white hover:bg-[#0d6360]"
              }`}
            >
              {status === "sending" ? "Sending..." : buttonLabel}
              <Send className="h-4 w-4" aria-hidden />
            </button>
          </div>

          {status === "error" && (
            <p className={`text-sm font-bold ${light ? "text-[#b42318]" : "text-[#fda29b]"}`}>
              Something went wrong. Please call{" "}
              <a className="underline" href={phoneHref}>
                {phoneDisplay}
              </a>
              .
            </p>
          )}

          <p className={`text-xs leading-5 ${isDark ? "text-white/[0.48]" : "text-[#6b7682]"}`}>
            Prefer to talk?{" "}
            <a className="font-black underline" href={phoneHref}>
              Call {phoneDisplay}
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );
}
