import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { PageFooter, PageHeader, ProcessSection, ReviewsSection, TrustBand } from "@/components/epoxy-sections";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Pool Deck Coating in LA & Orange County | Apex Garage Coatings",
  description:
    "Slip-resistant, UV-stable polyaspartic pool deck coatings installed in 1 day. Stays cool underfoot, resists water and chemicals. Serving LA and Orange County homes.",
};

const features = [
  "Slip-resistant texture rated for wet surfaces",
  "UV-stable — won't fade or blister in the sun",
  "Cool-to-touch finish in California heat",
  "Chemical and chlorine resistant",
  "Crack and surface repair included",
  "Lifetime warranty on adhesion",
  "Complements existing pool tile and coping",
  "Color and finish consultation included",
];

export default function PoolDeckCoatingPage() {
  return (
    <div className="contractor-site min-h-screen bg-[#08090b] text-white">
      <PageHeader />
      <nav className="border-b border-white/10 bg-[#101317] px-4 py-3 text-xs text-white/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">›</span>
          <span className="text-white/80">Pool Deck Coating</span>
        </div>
      </nav>

      <section className="bg-[#08090b] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:items-start lg:px-8">
          <div>
            <p className="mb-4 text-sm font-black uppercase text-[#99f6e4]">Pool deck & outdoor concrete coating</p>
            <h1 className="contractor-display text-5xl leading-[0.98] text-white sm:text-6xl">
              Pool Deck Coating in LA &amp; Orange County
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.76]">
              Give your pool deck a slip-resistant, UV-stable coating that stays safe when wet, resists California sun, and holds up to pool chemicals — installed in a single day with a lifetime warranty.
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
              <p className="text-sm font-black text-[#99f6e4]">Free moisture test + color consultation</p>
              <p className="mt-1 text-sm text-white/70">Same-week estimates for pool deck projects.</p>
            </div>
            <QuoteForm idPrefix="pool-service" buttonLabel="Request My Free Estimate" defaultProjectType="Patio or porch" />
          </div>
        </div>
      </section>

      <TrustBand />
      <ReviewsSection />
      <ProcessSection />

      <section className="bg-[#08090b] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-black uppercase text-[#2dd4bf]">Other services</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { href: "/services/garage-floor-coating", label: "Garage Floor Coating" },
              { href: "/services/patio-coating", label: "Patio & Porch Coating" },
              { href: "/services/basement-floor-coating", label: "Basement Floor Coating" },
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
