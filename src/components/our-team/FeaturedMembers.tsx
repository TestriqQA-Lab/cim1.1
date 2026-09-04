import Image from "next/image";
import { Linkedin } from "lucide-react";
import { featuredMembers } from "@/data/team";

// Server component — no client JavaScript.
//
// Compact counterpart to `Leaders`, deliberately a different shape rather than a
// shrunken copy: a gradient masthead band with the portrait breaking across it,
// centred type, and the LinkedIn action separated by a hairline at the foot of
// the card. The band carries no text, so the vivid brand gradient is safe here.

export default function FeaturedMembers() {
  return (
    <section
      className="py-20 md:py-24 transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="featured-members-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div className="max-w-3xl">
          <h2
            id="featured-members-heading"
            className="text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "var(--foreground)" }}
          >
            Featured members
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
            The specialists behind the day-to-day: engineering, applied research, and the people
            operations that keep the team steady.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredMembers.map((member) => (
            <li key={member.id} className="h-full">
              <article
                className="flex h-full flex-col overflow-hidden rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
              >
                {/* Masthead band — decorative, no text sits on it */}
                <span
                  aria-hidden="true"
                  className="h-24 w-full"
                  style={{
                    background:
                      "linear-gradient(120deg, var(--brand-blue), var(--brand-teal) 55%, var(--brand-purple))",
                  }}
                />

                {/* Portrait breaking across the band */}
                <div className="-mt-14 px-6">
                  <div
                    className="mx-auto w-fit rounded-full p-1"
                    style={{ backgroundColor: "var(--card-bg)" }}
                  >
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      width={112}
                      height={112}
                      sizes="112px"
                      className="block h-28 w-28 rounded-full object-cover"
                      style={{ backgroundColor: "var(--card-bg)" }}
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
                  <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                    {member.name}
                  </h3>

                  <p
                    className="mt-1.5 text-xs font-bold uppercase tracking-[0.14em]"
                    style={{ color: "var(--brand-blue-text)" }}
                  >
                    {member.role}
                  </p>

                  <p
                    className="mt-3 flex-grow text-sm leading-relaxed"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    {member.focus}
                  </p>

                  <div className="mt-5 border-t pt-4" style={{ borderColor: "var(--border-color)" }}>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn (opens in a new tab)`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-300 hover:!text-[#0A66C2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                      style={{ color: "var(--foreground)" }}
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
