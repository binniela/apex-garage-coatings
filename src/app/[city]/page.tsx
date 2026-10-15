import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageFooter, PageHeader, ProcessSection, ReviewsSection, TrustBand } from "@/components/epoxy-sections";
import { QuoteForm } from "@/components/quote-form";

const cities: Record<string, { name: string; county: string; blurb: string }> = {
  pasadena: {
    name: "Pasadena",
    county: "Los Angeles County",
    blurb:
      "Pasadena homeowners trust Apex Garage Coatings for polyaspartic garage floor, patio, and basement coatings. We serve single-family homes, craftsman bungalows, and modern builds throughout Pasadena, Altadena, and the surrounding neighborhoods.",
  },
  glendale: {
    name: "Glendale",
    county: "Los Angeles County",
    blurb:
      "We install polyaspartic garage and patio floor coatings throughout Glendale, CA. From Montrose to Adams Hill to the Verdugo Woodlands, Apex crews deliver 1-day installs with lifetime warranty for Glendale homeowners.",
  },
  burbank: {
    name: "Burbank",
    county: "Los Angeles County",
    blurb:
      "Apex Garage Coatings serves Burbank homeowners with polyaspartic garage floor, patio, and utility room coatings. Same-week scheduling and lifetime warranty for properties throughout Burbank and North Hollywood.",
  },
  irvine: {
    name: "Irvine",
    county: "Orange County",
    blurb:
      "Irvine homeowners and HOA-approved properties rely on Apex for clean, durable polyaspartic garage and patio floor coatings. We serve Irvine, Tustin, Lake Forest, and the wider Orange County area.",
  },
  anaheim: {
    name: "Anaheim",
    county: "Orange County",
    blurb:
      "Apex Garage Coatings installs polyaspartic garage, patio, and pool deck coatings for Anaheim homeowners. Fast same-week scheduling and a lifetime warranty for properties throughout Anaheim Hills and surrounding areas.",
  },
  "long-beach": {
    name: "Long Beach",
    county: "Los Angeles County",
    blurb:
      "We install polyaspartic garage and patio floor coatings for Long Beach homeowners in Bixby Knolls, Belmont Shore, and beyond. Moisture-aware prep handles the coastal climate — lifetime warranty included.",
  },
  "santa-monica": {
    name: "Santa Monica",
    county: "Los Angeles County",
    blurb:
      "Apex Garage Coatings serves Santa Monica with UV-stable, moisture-resistant polyaspartic garage and patio floor coatings. Coastal humidity is no problem — we moisture-test every slab before coating.",
  },
  torrance: {
    name: "Torrance",
    county: "Los Angeles County",
    blurb:
      "Torrance homeowners choose Apex for polyaspartic garage floor, patio, and home gym coatings. We serve Old Torrance, Southwood, and the South Bay with 1-day installs and a lifetime warranty.",
  },
};

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = cities[params.city];
  if (!city) return {};
  return {
    title: `Garage Floor Coating in ${city.name}, CA | Apex Garage Coatings`,
    description: `Polyaspartic garage floor coatings installed in 1 day in ${city.name}, ${city.county}. Lifetime warranty, diamond grinding prep, and hot-tire-pickup resistant finish. Call (626) 243-8727.`,
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities[params.city];
  if (!city) notFound();

  return (
    <div className="contractor-site min-h-screen bg-[#08090b] text-white">
      <PageHeader />

      {/* Breadcrumb */}
      <nav className="border-b border-white/10 bg-[#101317] px-4 py-3 text-xs text-white/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">›</span>
          <span className="text-white/80">Garage Floor Coating in {city.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#08090b] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:items-start lg:px-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-[#99f6e4]">
              <MapPin className="h-4 w-4" aria-hidden />
              {city.name}, {city.county}
            </div>
            <h1 className="contractor-display text-5xl leading-[0.98] text-white sm:text-6xl">
              Garage Floor Coating in {city.name}, CA
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.76]">{city.blurb}</p>
            <p className="mt-5 text-sm font-bold text-white/[0.64]">
              Polyaspartic system • 1-day install • Lifetime warranty • Diamond grinding prep
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+16262438727" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/[0.18] bg-white/[0.08] px-5 text-sm font-black text-white transition hover:border-[#99f6e4]/60 hover:text-[#99f6e4]">
                <Phone className="h-4 w-4" aria-hidden /> (626) 243-8727
              </a>
              <a href="#quote" className="inline-flex h-12 items-center gap-2 rounded-md bg-[#2dd4bf] px-5 text-sm font-black text-[#08090b] transition hover:bg-[#5eead4]">
                Get Free Estimate <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div id="quote" className="scroll-mt-24 rounded-lg border border-white/[0.14] bg-[#101317]/[0.94] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
            <div className="mb-4 rounded-md border border-[#2dd4bf]/[0.35] bg-[#2dd4bf]/[0.12] p-4">
              <p className="text-sm font-black text-[#99f6e4]">Free estimate for {city.name} homeowners</p>
              <p className="mt-1 text-sm text-white/70">Same-week site visits available in {city.name} and nearby areas.</p>
            </div>
            <QuoteForm idPrefix={`city-${params.city}`} buttonLabel="Request My Free Estimate" />
          </div>
        </div>
      </section>

      <TrustBand />
      <ReviewsSection />
      <ProcessSection />

      {/* Service links */}
      <section className="bg-[#08090b] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-black uppercase text-[#2dd4bf]">Our services in {city.name}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/services/garage-floor-coating", label: "Garage Floor Coating" },
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
