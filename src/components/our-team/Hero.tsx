import Link from "next/link";
import { ArrowRight, ChevronRight, Globe2, Layers, MapPin, Users } from "lucide-react";

// Server component — the page's LCP element is the <h1> text node, so there is
// deliberately no hero image and no client JavaScript on this route.

const facts = [
  {
    icon: Layers,
    label: "Nine practice areas",
    detail: "Engineering, marketing and design under one roof",
  },
  {
    icon: MapPin,
    label: "Mumbai, India",
    detail: "Mira Road studio, working across time zones",
  },
  {
    icon: Globe2,
    label: "Global engagements",
    detail: "Clients in the US, UK, India, Australia and the UAE",
  },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="our-team-heading"
    >
      {/* Decorative background — hidden from assistive tech and non-interactive */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#008ac1 1px, transparent 1px), linear-gradient(90deg, #008ac1 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute -top-32 -left-24 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "color-mix(in srgb, #008ac1 12%, transparent)" }}
        />
        <div
          className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: "color-mix(in srgb, #00b5ca 10%, transparent)" }}
        />
      </div>

      <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <li>
              <Link
                href="/"
                className="inline-block rounded-sm py-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link
                href="/about"
                className="inline-block rounded-sm py-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
              >
                About
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li aria-current="page" style={{ color: "var(--brand-blue-text)" }}>
              Our Team
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl">
          {/* Badge */}
          <p
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
          >
            <Users className="h-4 w-4" style={{ color: "var(--brand-blue-text)" }} aria-hidden="true" />
            <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
              The people behind the work
            </span>
          </p>

          {/* LCP element */}
          <h1
            id="our-team-heading"
            className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
            style={{ color: "var(--foreground)" }}
          >
            Meet the team behind{" "}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: "var(--brand-blue-text)" }}>
                Cinute InfoMedia
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1 h-2 rounded-full md:-bottom-2 md:h-3"
                style={{
                  background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                  opacity: 0.28,
                }}
              />
            </span>
          </h1>

          <p
            className="mt-8 max-w-3xl text-lg leading-relaxed md:text-xl"
            style={{ color: "var(--secondary-text)" }}
          >
            Cinute InfoMedia is a small, senior team: engineers, marketers and designers who work on
            the same brief instead of handing it between departments. The people below are the ones
            you will actually talk to — the person who scopes your project is the person accountable
            for what ships.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
              style={{
                background: "linear-gradient(90deg, var(--brand-blue-btn), var(--accent-teal-btn))",
              }}
            >
              Talk to the team
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--card-bg)",
                color: "var(--foreground)",
              }}
            >
              See open roles
            </Link>
          </div>
        </div>

        {/* Fact strip */}
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map(({ icon: Icon, label, detail }) => (
            <li
              key={label}
              className="flex items-start gap-4 rounded-2xl border p-5"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
            >
              <span
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-blue-btn), var(--accent-teal-btn))",
                }}
              >
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold" style={{ color: "var(--foreground)" }}>
                  {label}
                </span>
                <span className="mt-1 block text-sm" style={{ color: "var(--secondary-text)" }}>
                  {detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
