import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { teamDisciplines } from "@/data/team";

// Server component. Doubles as the page's internal-linking layer — every card
// is a real link into the service silo rather than a decorative tile.

export default function Disciplines() {
  return (
    <section
      className="py-20 md:py-24 transition-colors duration-300"
      style={{ backgroundColor: "var(--card-bg)" }}
      aria-labelledby="disciplines-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div className="max-w-3xl">
          <h2
            id="disciplines-heading"
            className="text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "var(--foreground)" }}
          >
            How the team is organised
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
            We work as one group across nine practice areas rather than as separate agencies bolted
            together. In practice that means the engineer who builds the site and the marketer who
            has to rank it are in the same conversation from week one.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamDisciplines.map((discipline) => (
            <li key={discipline.title} className="h-full">
              <Link
                href={discipline.href}
                className="group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border-color)",
                }}
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                    {discipline.title}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "var(--brand-blue-text)" }}
                    aria-hidden="true"
                  />
                </span>

                <span
                  className="mt-3 block text-[0.9375rem] leading-relaxed"
                  style={{ color: "var(--secondary-text)" }}
                >
                  {discipline.description}
                </span>

                <span className="mt-5 flex flex-grow flex-wrap content-end gap-2">
                  {discipline.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border px-2.5 py-1 text-xs font-medium"
                      style={{
                        borderColor: "var(--border-color)",
                        backgroundColor: "var(--hover-bg)",
                        color: "var(--secondary-text)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
            style={{ color: "var(--brand-blue-text)" }}
          >
            Browse all nine service practices
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
