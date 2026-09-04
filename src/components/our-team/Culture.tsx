import Link from "next/link";
import { ArrowUpRight, GraduationCap, Laptop, Scale, Users2 } from "lucide-react";

// Server component.

const values = [
  {
    icon: Scale,
    title: "Work-life balance",
    description:
      "Deadlines are planned so they do not routinely land on a weekend. Sustainable pace is a delivery decision here, not a perk.",
  },
  {
    icon: GraduationCap,
    title: "Continuous learning",
    description:
      "Certifications, conference time and internal sessions are part of the schedule, which is how the stack we recommend stays current.",
  },
  {
    icon: Users2,
    title: "Collaborative by default",
    description:
      "Work is reviewed in the open. Engineers, marketers and designers share one channel per project rather than three separate ones.",
  },
  {
    icon: Laptop,
    title: "Flexible and remote-friendly",
    description:
      "A Mira Road studio for the people who want one, and proper remote support for the people who do not — including clients in other time zones.",
  },
];

export default function Culture() {
  return (
    <section
      className="py-20 md:py-24 transition-colors duration-300"
      style={{ backgroundColor: "var(--card-bg)" }}
      aria-labelledby="culture-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div className="max-w-3xl">
          <h2
            id="culture-heading"
            className="text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "var(--foreground)" }}
          >
            Culture and values
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
            We have built a culture around growth, collaboration and steady craft. The team is the
            asset, so the conditions they work in get the same attention as the work itself.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex h-full flex-col rounded-2xl border p-6"
              style={{ backgroundColor: "var(--background)", borderColor: "var(--border-color)" }}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                }}
              >
                <Icon className="h-5 w-5" style={{ color: "var(--brand-blue-text)" }} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold" style={{ color: "var(--foreground)" }}>
                {title}
              </h3>
              <p
                className="mt-2.5 text-sm leading-relaxed"
                style={{ color: "var(--secondary-text)" }}
              >
                {description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-lg font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
            style={{ color: "var(--brand-blue-text)" }}
          >
            See what it is like to work here
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
