"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BadgeDollarSign,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  CreditCard,
  Gem,
  Hammer,
  Home,
  Layers3,
  MapPin,
  Menu,
  MessageSquareText,
  Paintbrush,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { ProcessSection, ReviewsSection, SectionHeading, TrustBand } from "@/components/epoxy-sections";

const companyName = "Apex Garage Coatings";
const phoneDisplay = "(626) 243-8727";
const phoneHref = "tel:+16262438727";
const navLinks = [
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const images = {
  hero: "/images/finished-epoxy-garage.png",
  install:
    "https://images.unsplash.com/photo-1772305595483-6b058aff40f9?auto=format&fit=crop&fm=jpg&q=80&w=1600",
  finishedFloor:
    "https://images.unsplash.com/photo-1772306814076-ff65f53ac438?auto=format&fit=crop&fm=jpg&q=80&w=1600",
  concrete:
    "https://images.unsplash.com/photo-1552775838-b0c8d3b881fb?auto=format&fit=crop&fm=jpg&q=80&w=1600",
  garage: "/images/finished-epoxy-garage.png",
};

const trustStats = [
  { icon: Star, label: "4.9 Google Rating", detail: "Local homeowners" },
  { icon: Timer, label: "1-Day Installs", detail: "Most garage systems" },
  { icon: ShieldCheck, label: "Lifetime Warranty", detail: "Adhesion backed" },
  { icon: BadgeCheck, label: "Polyaspartic System", detail: "Won't peel like epoxy" },
];

const services = [
  {
    icon: Home,
    title: "Residential Garage Floors",
    href: "/services/garage-floor-coating",
    image: images.garage,
    items: ["Flake epoxy systems", "Polyaspartic topcoat", "Hot tire pickup resistant"],
  },
  {
    icon: Sparkles,
    title: "Patios, Porches & Walkways",
    href: "/services/patio-coating",
    image: images.concrete,
    items: ["UV-stable coatings", "Slip-resistant texture", "Outdoor concrete protection"],
  },
  {
    icon: Paintbrush,
    title: "Basement & Home Gym Floors",
    href: "/services/basement-floor-coating",
    image: images.install,
    items: ["Moisture-aware prep", "Easy-clean surfaces", "Comfortable home upgrades"],
  },
  {
    icon: Wrench,
    title: "Laundry & Utility Rooms",
    href: "/services/basement-floor-coating",
    image: images.finishedFloor,
    items: ["Stain-resistant finish", "Crack repair", "Durable everyday protection"],
  },
];

const reasons = [
  { icon: Gem, title: "Polyaspartic — not epoxy", text: "UV-stable, won't yellow or peel. Hot-tire-pickup resistant. Cures in hours, not days." },
  { icon: Hammer, title: "Diamond grinding prep", text: "We open the concrete profile before coating so the system bonds correctly." },
  { icon: Zap, title: "Same-week scheduling", text: "Fast site visits and tight installation windows for ready projects." },
  { icon: BadgeDollarSign, title: "0% financing available", text: "Low monthly payments for garage, patio, basement, and multi-area home projects." },
  { icon: Wrench, title: "Crack repair included", text: "Chips, cracks, and surface defects are treated before basecoat." },
  { icon: ShieldCheck, title: "Lifetime warranty in writing", text: "Clear workmanship and adhesion coverage — including hot-tire-pickup — before work starts." },
];

const projects = [
  {
    title: "2-Car Garage Refresh",
    location: "Pasadena, CA",
    caption: "Concrete repair, full flake broadcast, and UV-stable polyaspartic topcoat.",
    before: images.concrete,
    after: images.garage,
  },
  {
    title: "Covered Patio Upgrade",
    location: "Glendale, CA",
    caption: "Slip-resistant residential coating for a cleaner outdoor living space.",
    before: images.concrete,
    after: images.finishedFloor,
  },
  {
    title: "Home Gym Basement Floor",
    location: "Long Beach, CA",
    caption: "Low-maintenance finish for workouts, storage, laundry, and family use.",
    before: images.concrete,
    after: images.install,
  },
];


const faqs = [
  {
    question: "How long does an epoxy garage floor last?",
    answer: "A properly prepped epoxy or polyaspartic garage system can last 10 to 20+ years depending on use, moisture, and maintenance.",
  },
  {
    question: "How soon can I drive on it?",
    answer: "Most 1-day polyaspartic systems are ready for foot traffic the next day and vehicle traffic after the recommended cure window.",
  },
  {
    question: "Is polyaspartic better than epoxy?",
    answer: "Polyaspartic topcoats cure quickly, resist UV yellowing, and add abrasion resistance. Many premium floors use epoxy basecoat plus polyaspartic topcoat.",
  },
  {
    question: "What causes hot tire pickup?",
    answer: "Weak prep, thin coatings, or low-grade paint can soften under hot tires. Diamond grinding and professional coating systems help prevent it.",
  },
  {
    question: "How much does epoxy flooring cost?",
    answer: "Pricing depends on square footage, repairs, coating system, moisture, and finish. The fastest way to price it is a short site estimate.",
  },
];

const serviceAreas = [
  { name: "Pasadena", slug: "/pasadena" },
  { name: "Glendale", slug: "/glendale" },
  { name: "Burbank", slug: "/burbank" },
  { name: "Irvine", slug: "/irvine" },
  { name: "Anaheim", slug: "/anaheim" },
  { name: "Long Beach", slug: "/long-beach" },
  { name: "Santa Monica", slug: "/santa-monica" },
  { name: "Torrance", slug: "/torrance" },
];

export function EpoxyLanding() {
  return (
    <main className="contractor-site min-h-screen bg-[#08090b] text-white">
      <SiteHeader />
      <HeroSection />
      <TrustBand />
      <BeforeAfterGallery />
      <ServicesSection />
      <WhyChooseUs />
      <ReviewsSection />
      <ProcessSection />
      <FinancingSection />
      <OfferSection />
      <ServiceAreasSection />
      <BuyerGuideSection />
      <FaqSection />
      <ContactSection />
      <MobileCtaBar />
    </main>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08090b]/[0.88] backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${companyName} home`}>
          <span className="grid h-11 w-11 place-items-center rounded-md bg-[#2dd4bf] text-[#08090b] shadow-[0_0_32px_rgba(45,212,191,0.35)]">
            <Layers3 className="h-6 w-6" aria-hidden />
          </span>
          <span>
            <span className="block text-lg font-black leading-none">APEX GARAGE</span>
            <span className="text-xs font-semibold uppercase text-white/[0.55]">Residential garage coatings</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/[0.72] lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={phoneHref}
            className="hidden h-11 items-center gap-2 rounded-md border border-white/[0.14] px-4 text-sm font-bold text-white transition hover:border-[#99f6e4]/60 hover:text-[#99f6e4] sm:flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {phoneDisplay}
          </a>
          <a
            href="#quote"
            className="hidden h-11 items-center gap-2 rounded-md bg-[#2dd4bf] px-4 text-sm font-black text-[#08090b] shadow-[0_14px_36px_rgba(45,212,191,0.28)] transition hover:bg-[#5eead4] sm:flex"
          >
            Get Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <button
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-md border border-white/[0.14] text-white lg:hidden"
            aria-label="Open navigation"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#08090b]/[0.96] px-4 py-4 shadow-[0_22px_60px_rgba(0,0,0,0.35)] lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-md border border-white/[0.12] px-4 py-3 text-sm font-black text-white"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/[0.14] text-sm font-black text-white" href={phoneHref}>
              <Phone className="h-4 w-4" aria-hidden />
              Call
            </a>
            <a className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#2dd4bf] text-sm font-black text-[#08090b]" href="#quote" onClick={() => setMenuOpen(false)}>
              Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate scroll-mt-24 overflow-hidden pt-28"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(8,9,11,0.98) 0%, rgba(8,9,11,0.85) 43%, rgba(8,9,11,0.36) 100%), url(${images.hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,9,11,0)_0%,rgba(8,9,11,0.22)_55%,#08090b_100%)]" />
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <div className="max-w-4xl py-12">
          <div className="mb-5 flex flex-wrap gap-3">
            <Badge icon={Star}>4.9 Google rating</Badge>
            <Badge icon={ShieldCheck}>Licensed & insured</Badge>
            <Badge icon={Clock3}>Family-owned local crew</Badge>
          </div>
          <p className="mb-4 text-sm font-black uppercase text-[#99f6e4]">Residential epoxy flooring company</p>
          <h1 className="contractor-display max-w-4xl text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Polyaspartic Garage Floor Coatings — Installed In 1 Day
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.76] sm:text-xl">
            Won&apos;t peel like epoxy. UV-stable. Lifetime warranty backed by Apex. Diamond-ground prep, premium polyaspartic system, and a finish built for real home life in LA & Orange County.
          </p>
          <p className="mt-5 max-w-2xl text-sm font-bold uppercase text-white/[0.72]">
            Family-owned residential coating crew serving LA & Orange County • 500+ local garage floors coated
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-[#2dd4bf] px-6 text-base font-black text-[#08090b] shadow-[0_20px_50px_rgba(45,212,191,0.32)] transition hover:bg-[#5eead4]"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={phoneHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-white/[0.18] bg-white/[0.08] px-6 text-base font-black text-white backdrop-blur transition hover:border-[#99f6e4]/60 hover:text-[#99f6e4]"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {phoneDisplay}
            </a>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {trustStats.map((item) => (
              <div key={item.label} className="rounded-md border border-white/[0.12] bg-white/[0.08] p-4 backdrop-blur">
                <item.icon className="h-5 w-5 text-[#2dd4bf]" aria-hidden />
                <p className="mt-3 text-sm font-black">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-white/[0.58]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="quote" className="scroll-mt-24 rounded-lg border border-white/[0.14] bg-[#101317]/[0.94] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="mb-5 rounded-md border border-[#2dd4bf]/[0.35] bg-[#2dd4bf]/[0.12] p-4">
            <p className="text-sm font-black text-[#99f6e4]">Free moisture test + color consultation</p>
            <p className="mt-1 text-sm leading-6 text-white/[0.72]">Same-week estimates for residential garage, patio, and basement floors.</p>
          </div>
          <QuoteForm idPrefix="hero" buttonLabel="Request My Free Estimate" />
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, children }: { icon: typeof Star; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-white/[0.12] bg-white/10 px-3 py-2 text-xs font-bold text-white/[0.82] backdrop-blur">
      <Icon className="h-4 w-4 text-[#2dd4bf]" aria-hidden />
      {children}
    </span>
  );
}

function BeforeAfterGallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-[#08090b] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Before & after gallery"
          title="See what your concrete could become."
          text="Garage, patio, and basement transformations help you picture the finish, texture, and color that fits your home."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ComparisonCard key={project.title} project={project} initialValue={index === 0 ? 64 : index === 1 ? 58 : 52} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({
  project,
  initialValue,
}: {
  project: { title: string; location: string; caption: string; before: string; after: string };
  initialValue: number;
}) {
  const [value, setValue] = useState(initialValue);

  return (
    <article className="overflow-hidden rounded-lg border border-white/[0.12] bg-[#101317]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#171a1f]">
        <Image
          src={project.before}
          alt={`${project.title} before coating`}
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${value}%` }}>
          <div className="relative h-full" style={{ width: `${10000 / value}%` }}>
            <Image
              src={project.after}
              alt={`${project.title} after coating`}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
        <div className="absolute inset-y-0" style={{ left: `${value}%` }}>
          <div className="h-full w-1 -translate-x-1/2 bg-[#2dd4bf] shadow-[0_0_24px_rgba(45,212,191,0.85)]" />
        </div>
        <span className="absolute left-3 top-3 rounded-md bg-[#08090b]/[0.82] px-3 py-1 text-xs font-black">After</span>
        <span className="absolute right-3 top-3 rounded-md bg-[#08090b]/[0.82] px-3 py-1 text-xs font-black">Before</span>
        <input
          aria-label={`Reveal before and after for ${project.title}`}
          className="absolute inset-x-4 bottom-4 accent-[#2dd4bf]"
          max="82"
          min="24"
          onChange={(event) => setValue(Number(event.target.value))}
          type="range"
          value={value}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm font-bold text-[#99f6e4]">
          <MapPin className="h-4 w-4" aria-hidden />
          {project.location}
        </div>
        <h3 className="mt-3 text-xl font-black text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/[0.62]">{project.caption}</p>
      </div>
    </article>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#f4f6f8] py-20 text-[#0d1117] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Our services"
          title="Built for garages, patios, basements, home gyms, and utility rooms."
          text="Choose a residential coating system that fits how your family actually uses the space."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a key={service.title} href={service.href} className="group overflow-hidden rounded-lg border border-[#d7dce2] bg-white shadow-[0_16px_50px_rgba(13,17,23,0.08)] transition hover:border-[#0f766e]/40 hover:shadow-[0_20px_60px_rgba(13,17,23,0.14)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={service.image} alt={service.title} className="object-cover transition group-hover:scale-[1.03]" fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-5">
                <service.icon className="h-7 w-7 text-[#0f766e]" aria-hidden />
                <h3 className="mt-4 text-lg font-black">{service.title}</h3>
                <ul className="mt-4 space-y-3 text-sm font-semibold text-[#4a5563]">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#108c5b]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-1 text-xs font-black text-[#0f766e]">
                  Learn more <ArrowRight className="h-3 w-3" aria-hidden />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-[#08090b] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="Every trust signal homeowners want before work starts."
              text="We make the project clear, clean, and warranty-backed before work starts at your home."
            />
            <a
              href="#contact"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-[#2dd4bf] px-5 text-sm font-black text-[#08090b] transition hover:bg-[#5eead4]"
            >
              Schedule Estimate
              <CalendarCheck className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-lg border border-white/[0.12] bg-[#101317] p-5">
                <reason.icon className="h-7 w-7 text-[#99f6e4]" aria-hidden />
                <h3 className="mt-4 text-lg font-black">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/[0.62]">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="bg-[#08090b] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg border border-[#2dd4bf]/30 bg-[#071316] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 sm:p-10">
            <p className="text-sm font-black uppercase text-[#99f6e4]">This month for homeowners</p>
            <h2 className="contractor-display mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">Free Moisture Test + Flake Color Consultation</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              Book a home estimate this month and we will check your concrete, review color blends, and map out the right coating system for your space.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#2dd4bf] px-5 text-sm font-black text-[#08090b] transition hover:bg-[#5eead4]"
              >
                Claim Offer
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/[0.16] px-5 text-sm font-black text-white transition hover:border-[#99f6e4]/60 hover:text-[#99f6e4]"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call Now
              </a>
            </div>
          </div>
          <div className="min-h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${images.install})` }} aria-label="Epoxy installation crew" />
        </div>
      </div>
    </section>
  );
}

function ServiceAreasSection() {
  return (
    <section className="bg-[#101317] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Neighborhood service areas"
            title="Residential epoxy flooring near you."
            text="We help homeowners across Los Angeles and Orange County upgrade garages, patios, basements, and concrete utility spaces."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {serviceAreas.map((area) => (
              <a
                key={area.slug}
                href={area.slug}
                className="flex min-h-24 flex-col justify-between rounded-lg border border-white/[0.12] bg-[#08090b] p-4 transition hover:border-[#99f6e4]/[0.55]"
              >
                <MapPin className="h-5 w-5 text-[#99f6e4]" aria-hidden />
                <span className="text-sm font-black">{area.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BuyerGuideSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/guide-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-[#101317] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg border border-white/[0.12] bg-[#08090b] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-7 sm:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#2dd4bf]/30 bg-[#2dd4bf]/[0.08] px-3 py-2 text-xs font-black text-[#99f6e4]">
              <BookOpen className="h-4 w-4" aria-hidden />
              Free buyer&apos;s guide
            </div>
            <h2 className="contractor-display text-4xl leading-tight text-white sm:text-5xl">
              Polyaspartic vs. Epoxy: The 2026 Garage Floor Coating Guide
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
              What every LA &amp; Orange County homeowner should know before choosing a coating system — including why most contractors install polyaspartic but still rank for &ldquo;epoxy,&rdquo; what hot-tire-pickup actually means, and how to read a warranty.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/[0.62]">
              {[
                "Epoxy vs. polyaspartic vs. polyurea — plain-English breakdown",
                "Diamond grinding: why it matters more than the coating brand",
                "How to evaluate a warranty (and what to watch out for)",
                "Pricing ranges for LA & OC and how to get an accurate quote",
                "5 questions to ask every contractor before signing",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2dd4bf]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0">
            {status === "success" ? (
              <div>
                <p className="text-lg font-black text-white">Check your inbox.</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  The guide is on its way to {email}. If you don&apos;t see it within a few minutes, check your spam folder.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <p className="text-lg font-black text-white">Get the free guide</p>
                <p className="text-sm text-white/[0.58]">Enter your email and we&apos;ll send it instantly. No spam.</p>
                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase text-white/[0.48]">Email address</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="h-12 rounded-md border border-white/[0.12] bg-white/[0.08] px-4 text-sm font-semibold text-white outline-none transition placeholder:text-white/[0.35] focus:border-[#2dd4bf]"
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#2dd4bf] text-sm font-black text-[#08090b] transition hover:bg-[#5eead4] disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Send Me the Guide"}
                  <BookOpen className="h-4 w-4" aria-hidden />
                </button>
                {status === "error" && (
                  <p className="text-xs font-bold text-[#fda29b]">Something went wrong — please try again or call (626) 243-8727.</p>
                )}
                <p className="text-xs text-white/[0.38]">No spam. Unsubscribe any time.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#08090b] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers that remove friction before the call."
          text="Straight answers about durability, timing, cost, hot tire pickup, and what to expect at your home."
        />
        <div className="mt-10 divide-y divide-white/10 rounded-lg border border-white/[0.12] bg-[#101317]">
          {faqs.map((item) => (
            <details key={item.question} className="group p-5 open:bg-white/[0.03]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black">
                {item.question}
                <ArrowRight className="h-5 w-5 shrink-0 text-[#2dd4bf] transition group-open:rotate-90" aria-hidden />
              </summary>
              <p className="mt-4 text-sm leading-7 text-white/[0.64]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#f4f6f8] py-20 text-[#0d1117] sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase text-[#0f766e]">Get your free estimate instantly</p>
          <h2 className="contractor-display mt-4 text-4xl leading-tight sm:text-5xl">Ready for a floor that sells itself?</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#52606d]">
            Tell us which residential space you want coated and we will follow up with estimate options, timing, and color guidance.
          </p>
          <p className="mt-4 text-sm font-black uppercase text-[#0f766e]">
            Family-owned • 500+ local garage floors coated • LA + OC homes
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ContactTile icon={Phone} label="Call now" value={phoneDisplay} href={phoneHref} />
            <ContactTile icon={MessageSquareText} label="SMS quote" value="Text project photos" href={phoneHref} />
            <ContactTile icon={MapPin} label="Service area" value="LA + OC homes" href="#contact" />
            <ContactTile icon={Clock3} label="Response time" value="Same business day" href="#quote" />
          </div>
        </div>
        <div className="rounded-lg border border-[#d7dce2] bg-white p-6 shadow-[0_18px_60px_rgba(13,17,23,0.1)]">
          <QuoteForm idPrefix="contact" buttonLabel="Send My Quote Request" light />
        </div>
      </div>
    </section>
  );
}

function ContactTile({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="rounded-lg border border-[#d7dce2] bg-white p-5 shadow-[0_16px_50px_rgba(13,17,23,0.06)] transition hover:border-[#0f766e]/50">
      <Icon className="h-6 w-6 text-[#0f766e]" aria-hidden />
      <p className="mt-4 text-xs font-black uppercase text-[#768390]">{label}</p>
      <p className="mt-1 text-base font-black">{value}</p>
    </a>
  );
}

function FinancingSection() {
  return (
    <section className="bg-[#08090b] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg border border-white/[0.12] bg-[#101317] lg:grid-cols-[1fr_auto]">
          <div className="p-7 sm:p-10">
            <p className="text-sm font-black uppercase text-[#2dd4bf]">Flexible payment options</p>
            <h2 className="contractor-display mt-4 text-4xl leading-tight sm:text-5xl">
              0% Financing Available
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              Split your garage, patio, or basement floor into low monthly payments. Hearth financing available for qualified residential projects — ask during your free estimate.
            </p>
            <a
              href="#quote"
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-md bg-[#2dd4bf] px-5 text-sm font-black text-[#08090b] transition hover:bg-[#5eead4]"
            >
              Get Your Free Estimate
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0">
            <CreditCard className="h-12 w-12 text-[#2dd4bf]" aria-hidden />
            <p className="text-center text-sm font-black text-white">
              Low monthly<br />payments
            </p>
            <p className="text-center text-xs leading-5 text-white/[0.52]">
              No hard credit pull<br />to check your rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#08090b]/[0.94] p-3 backdrop-blur sm:hidden">
      <a className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/[0.16] text-sm font-black text-white" href={phoneHref}>
        <Phone className="h-4 w-4" aria-hidden />
        Call Now
      </a>
      <a className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#2dd4bf] text-sm font-black text-[#08090b]" href="#quote">
        <Send className="h-4 w-4" aria-hidden />
        Get Quote
      </a>
    </div>
  );
}

