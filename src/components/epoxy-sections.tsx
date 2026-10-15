import { ClipboardCheck, Layers3, Sparkles, Star } from "lucide-react";

const phoneHref = "tel:+16262438727";

const reviews = [
  {
    name: "Maya R.",
    city: "Burbank",
    project: "Garage floor coating",
    text: "The quote was clear, the crew showed up on time, and the garage finally feels like part of the house. We had cars back in fast.",
  },
  {
    name: "Daniel K.",
    city: "Pasadena",
    project: "2-car garage floor",
    text: "They explained the prep work better than every other company we called. The diamond grinding and topcoat made a huge difference.",
  },
  {
    name: "Alicia M.",
    city: "Irvine",
    project: "Patio coating",
    text: "Short form, fast callback, no pressure. The final floor is tough, glossy, and ridiculously easy to clean.",
  },
];

const process = [
  { icon: ClipboardCheck, title: "Free Estimate", text: "We measure, moisture-check, review colors, and send a clear quote." },
  { icon: Layers3, title: "Prep & Install", text: "Diamond grinding, crack repair, basecoat, broadcast, scrape, and topcoat." },
  { icon: Sparkles, title: "Enjoy The Floor", text: "Easy to clean, stain resistant, UV stable, and ready for real home life." },
];

export function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={dark ? "text-sm font-black uppercase text-[#0f766e]" : "text-sm font-black uppercase text-[#2dd4bf]"}>
        {eyebrow}
      </p>
      <h2
        className={
          dark
            ? "contractor-display mt-4 text-4xl leading-tight text-[#0d1117] sm:text-5xl"
            : "contractor-display mt-4 text-4xl leading-tight text-white sm:text-5xl"
        }
      >
        {title}
      </h2>
      <p className={dark ? "mt-5 text-base leading-7 text-[#52606d]" : "mt-5 text-base leading-7 text-white/[0.64]"}>
        {text}
      </p>
    </div>
  );
}

export function TrustBand() {
  return (
    <section className="border-y border-white/10 bg-[#101317]" aria-label="Trust metrics">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {[
          ["500+", "Garage floors coated"],
          ["1-Day", "Install — most systems"],
          ["0%", "Financing available"],
          ["Lifetime", "Warranty included"],
        ].map(([value, label]) => (
          <div key={label} className="py-7 text-center">
            <p className="text-3xl font-black text-white">{value}</p>
            <p className="mt-2 text-sm font-semibold text-white/[0.58]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 border-y border-white/10 bg-[#101317] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-[#2dd4bf]">Google reviews</p>
            <h2 className="contractor-display mt-4 text-4xl leading-tight sm:text-5xl">
              4.9 stars from homeowners who wanted it done right.
            </h2>
            <div className="mt-6 flex gap-1 text-[#99f6e4]" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-current" aria-hidden />
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-white/[0.66]">
              Neighbors call us for clean crews, fast communication, and floors that make the whole garage feel finished.
            </p>
            <p className="mt-3 text-sm font-bold text-[#99f6e4]">
              Family-owned • Licensed &amp; insured • Serving LA and Orange County homes
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-lg border border-white/[0.12] bg-[#08090b] p-5">
                <div className="mb-4 flex gap-1 text-[#99f6e4]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="text-sm leading-6 text-white/[0.72]">{review.text}</p>
                <p className="mt-5 text-sm font-black text-white">{review.name}</p>
                <p className="text-xs font-semibold text-white/[0.48]">
                  {review.city} homeowner • {review.project}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-[#f4f6f8] py-20 text-[#0d1117] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Simple 3-step process"
          title="From quote to finished floor without the guesswork."
          text="You know what happens, when we arrive, how we prep, and when you can use the space again."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {process.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-lg border border-[#d7dce2] bg-white p-7 shadow-[0_16px_50px_rgba(13,17,23,0.08)]"
            >
              <span className="absolute right-6 top-6 text-5xl font-black text-[#edf0f3]">0{index + 1}</span>
              <step.icon className="h-9 w-9 text-[#0f766e]" aria-hidden />
              <h3 className="mt-8 text-2xl font-black">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#52606d]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageHeader({ companyName = "Apex Garage Coatings" }: { companyName?: string }) {
  return (
    <header className="border-b border-white/10 bg-[#08090b]/[0.88]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label={`${companyName} home`}>
          <span className="grid h-10 w-10 place-items-center rounded-md bg-[#2dd4bf] text-[#08090b]">
            <Layers3 className="h-5 w-5" aria-hidden />
          </span>
          <span>
            <span className="block text-base font-black leading-none">APEX GARAGE</span>
            <span className="text-xs font-semibold uppercase text-white/[0.55]">Residential coatings</span>
          </span>
        </a>
        <a
          href={phoneHref}
          className="hidden h-10 items-center gap-2 rounded-md border border-white/[0.14] px-4 text-sm font-bold text-white transition hover:border-[#99f6e4]/60 hover:text-[#99f6e4] sm:flex"
        >
          (626) 243-8727
        </a>
        <a
          href="/#quote"
          className="hidden h-10 items-center gap-2 rounded-md bg-[#2dd4bf] px-4 text-sm font-black text-[#08090b] transition hover:bg-[#5eead4] sm:flex"
        >
          Free Quote
        </a>
      </div>
    </header>
  );
}

export function PageFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#08090b] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-black text-white">Apex Garage Coatings</p>
            <p className="mt-1 text-xs text-white/[0.48]">Serving Los Angeles &amp; Orange County homes</p>
          </div>
          <div className="flex flex-col gap-2 text-xs text-white/[0.48] sm:flex-row sm:gap-6">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/services/garage-floor-coating" className="hover:text-white">Garage Floors</a>
            <a href="/services/patio-coating" className="hover:text-white">Patio Coating</a>
            <a href="/services/basement-floor-coating" className="hover:text-white">Basement Floors</a>
            <a href="/faq" className="hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
