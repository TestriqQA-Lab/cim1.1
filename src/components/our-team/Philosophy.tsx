import { Compass, Eye, TrendingUp } from "lucide-react";

// Server component.

const principles = [
  {
    icon: Compass,
    title: "Empowerment",
    description:
      "The person closest to the problem makes the call. Everyone here owns an area outright, which is why you get a straight answer in a meeting instead of a promise to check with someone else.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Scope, timelines and trade-offs are written down and shared, including the uncomfortable ones. If something slips or an approach is not working, you hear it from us first.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Time for certifications, reading and side experiments is budgeted rather than borrowed from evenings. New tooling reaches client work only after someone here has genuinely used it.",
  },
];

export default function Philosophy() {
  return (
    <section
      className="py-20 md:py-24 transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div className="max-w-3xl">
          <h2
            id="philosophy-heading"
            className="text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "var(--foreground)" }}
          >
            How we lead
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
            A small team only works if people are trusted to decide things. These three principles
            are what we hold each other to, and they are the same three we are happy to be measured
            against by a client.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex h-full flex-col rounded-2xl border p-7"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-blue-btn), var(--accent-teal-btn))",
                }}
              >
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold" style={{ color: "var(--foreground)" }}>
                {title}
              </h3>
              <p
                className="mt-3 text-[0.9375rem] leading-relaxed"
                style={{ color: "var(--secondary-text)" }}
              >
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
