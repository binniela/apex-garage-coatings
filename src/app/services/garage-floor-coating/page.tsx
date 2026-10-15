import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Star, Timer } from "lucide-react";
import { PageFooter, PageHeader, ProcessSection, ReviewsSection, SectionHeading, TrustBand } from "@/components/epoxy-sections";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Garage Floor Coating in LA & Orange County | Apex Garage Coatings",
  description:
    "Professional polyaspartic garage floor coatings installed in 1 day. Lifetime warranty, diamond grinding prep, and hot-tire-pickup resistant finish. Serving Pasadena, Glendale, Burbank & more.",
};

const features = [
  "Full-flake polyaspartic system — won't peel like epoxy",
  "Diamond grinding prep for maximum adhesion",
  "Hot-tire-pickup resistant topcoat",
  "UV-stable — no yellowing in sunlight",
  "Stain, oil, and chemical resistant",
  "Lifetime adhesion warranty in writing",
  "1-day install — drive on it the next day",
  "Crack and chip repair included",
];

export default function GarageFloorCoatingPage() {
  return (
    <div className="contractor-site min-h-screen bg-[#08090b] text-white">
      <PageHeader />

      {/* Breadcrumb */}
      <nav className="border-b border-white/10 bg-[#101317] px-4 py-3 text-xs text-white/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">›</span>
          <span className="text-white/80">Garage Floor Coating</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#08090b] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:items-start lg:px-8">
          <div>
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/[0.12] bg-white/10 px-3 py-2 text-xs font-bold text-white/[0.82]">
                <Star className="h-4 w-4 text-[#2dd4bf]" aria-hidden /> 4.9 Google Rating
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/[0.12] bg-white/10 px-3 py-2 text-xs font-bold text-white/[0.82]">
                <Timer className="h-4 w-4 text-[#2dd4bf]" aria-hidden /> 1-Day Install
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/[0.12] bg-white/10 px-3 py-2 text-xs font-bold text-white/[0.82]">
                <ShieldCheck className="h-4 w-4 text-[#2dd4bf]" aria-hidden /> Lifetime Warranty
              </span>
            </div>
            <p className="mb-4 text-sm font-black uppercase text-[#99f6e4]">Residential garage floor coating</p>
            <h1 className="contractor-display text-5xl leading-[0.98] text-white sm:text-6xl">
              Polyaspartic Garage Floor Coating in LA &amp; Orange County
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.76]">
              Turn a stained, dusty garage slab into a clean, glossy floor that won&apos;t peel, yellow, or pick up hot tires.
              Installed in a single day with diamond grinding prep and a lifetime warranty.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm leading-6 text-white/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2dd4bf]" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+16262438727"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-white/[0.18] bg-white/[0.08] px-5 text-sm font-black text-white transition hover:border-[#99f6e4]/60 hover:text-[#99f6e4]"
              >
                <Phone className="h-4 w-4" aria-hidden /> (626) 243-8727
              </a>
              <a
                href="#quote"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-[#2dd4bf] px-5 text-sm font-black text-[#08090b] transition hover:bg-[#5eead4]"
              >
                Get Free Estimate <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* Quote form */}
          <div id="quote" className="scroll-mt-24 rounded-lg border border-white/[0.14] bg-[#101317]/[0.94] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
            <div className="mb-4 rounded-md border border-[#2dd4bf]/[0.35] bg-[#2dd4bf]/[0.12] p-4">
              <p className="text-sm font-black text-[#99f6e4]">Free moisture test + color consultation</p>
              <p className="mt-1 text-sm text-white/70">Same-week estimates for garage floor projects.</p>
            </div>
            <QuoteForm idPrefix="garage-service" buttonLabel="Request My Free Estimate" defaultProjectType="Garage floor" />
          </div>
        </div>
      </section>

      <TrustBand />
      <ReviewsSection />
      <ProcessSection />

      {/* Pricing context */}
      <section className="bg-[#101317] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Garage floor coating cost"
            title="Transparent pricing, no surprises."
            text="Residential garage floor coating in LA and Orange County typically runs $3–$10 per square foot depending on square footage, repairs needed, and the coating system. A 2-car garage usually lands between $2,500 and $5,500 all-in."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { label: "1-Car Garage", range: "$1,500 – $2,800", detail: "~200–250 sq ft, basic flake system" },
              { label: "2-Car Garage", range: "$2,500 – $4,500", detail: "~400–500 sq ft, full flake + topcoat" },
              { label: "3-Car Garage", range: "$4,000 – $7,000", detail: "~600–800 sq ft, premium polyaspartic" },
            ].map((tier) => (
              <div key={tier.label} className="rounded-lg border border-white/[0.12] bg-[#08090b] p-6">
                <p className="text-sm font-black uppercase text-[#2dd4bf]">{tier.label}</p>
                <p className="mt-3 text-3xl font-black text-white">{tier.range}</p>
                <p className="mt-2 text-sm text-white/[0.55]">{tier.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/[0.48]">
            Prices include diamond grinding, crack repair, flake broadcast, and polyaspartic topcoat.
            Exact pricing requires an on-site moisture test and measurement.{" "}
            <a href="#quote" className="font-black text-[#2dd4bf] underline">Get a free estimate.</a>
          </p>
        </div>
      </section>

      {/* Internal links */}
      <section className="bg-[#08090b] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-black uppercase text-[#2dd4bf]">Other services</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { href: "/services/patio-coating", label: "Patio & Porch Coating" },
              { href: "/services/basement-floor-coating", label: "Basement Floor Coating" },
              { href: "/services/pool-deck-coating", label: "Pool Deck Coating" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="flex items-center justify-between rounded-md border border-white/[0.12] bg-[#101317] px-4 py-3 text-sm font-black transition hover:border-[#99f6e4]/40">
                {link.label} <ArrowRight className="h-4 w-4 text-[#2dd4bf]" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
