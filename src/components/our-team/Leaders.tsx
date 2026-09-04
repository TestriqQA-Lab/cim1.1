import Image from "next/image";
import { Linkedin } from "lucide-react";
import { leaders } from "@/data/team";

// Server component — no client JavaScript.
//
// Editorial treatment rather than a plain profile card: a gradient hairline rail
// across the top, an index numeral opening a rule, the role set as an overline
// above the name, and the portrait as a rounded panel with an offset accent
// plate behind it. The portrait side alternates left/right down the list so the
// three cards read as a sequence instead of three identical blocks.
//
// Every gradient here sits behind decorative surfaces only — no text is ever
// placed on one — so the vivid brand hues are safe to use at full strength.

export default function Leaders() {
  return (
    <section
      className="py-20 md:py-24 transition-colors duration-300"
      style={{ backgroundColor: "var(--card-bg)" }}
      aria-labelledby="leaders-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div className="max-w-3xl">
          <h2
            id="leaders-heading"
            className="text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "var(--foreground)" }}
          >
            Leaders
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
            Strategy, delivery and growth sit with three people. They scope the work, stay
            accountable for it, and are the ones you deal with directly rather than through an
            account layer.
          </p>
        </div>

        <ul className="mt-14 space-y-8 lg:space-y-10">
          {leaders.map((leader, index) => {
            const flipped = index % 2 === 1;
            return (
              <li key={leader.id}>
                <article
                  className="relative overflow-hidden rounded-3xl border transition-shadow duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  {/* Gradient rail */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1"
                    style={{
                      background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                    }}
                  />

                  <div
                    className={`flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-start lg:gap-14 lg:p-10 ${
                      flipped ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Portrait side */}
                    <div className="flex flex-col items-center gap-5 lg:w-80 lg:shrink-0">
                      {/* Tinted plate gives the portrait column mass against the
                          text column; the portrait itself stays round because the
                          asset is a circular cut-out. */}
                      <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-3xl"
                          style={{
                            background:
                              "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 16%, transparent), color-mix(in srgb, var(--brand-teal) 10%, transparent))",
                          }}
                        />
                        <span
                          className="relative rounded-full p-[3px]"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--brand-blue), var(--brand-teal))",
                          }}
                        >
                          <Image
                            src={leader.image}
                            alt={`Portrait of ${leader.name}`}
                            width={288}
                            height={288}
                            sizes="(min-width: 640px) 288px, 224px"
                            className="block h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72 bg-[#d9d9d9]"
                          />
                        </span>
                      </div>

                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${leader.name} on LinkedIn (opens in a new tab)`}
                        className="inline-flex w-64 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold sm:w-80 transition-colors duration-300 hover:!border-[#0A66C2] hover:!bg-[#0A66C2] hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                        style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                      >
                        <Linkedin className="h-4 w-4" aria-hidden="true" />
                        Connect
                      </a>
                    </div>

                    {/* Detail side */}
                    <div className="min-w-0 flex-1">
                      {/* Index numeral opening a hairline rule */}
                      <div aria-hidden="true" className="flex items-center gap-4">
                        <span
                          className="text-sm font-bold tabular-nums"
                          style={{ color: "var(--brand-blue-text)" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="h-px flex-1"
                          style={{ backgroundColor: "var(--border-color)" }}
                        />
                      </div>

                      <p
                        className="mt-5 text-xs font-bold uppercase tracking-[0.18em]"
                        style={{ color: "var(--brand-blue-text)" }}
                      >
                        {leader.role}
                      </p>

                      <h3
                        className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl"
                        style={{ color: "var(--foreground)" }}
                      >
                        {leader.name}
                      </h3>

                      <p className="mt-3 text-sm" style={{ color: "var(--secondary-text)" }}>
                        {leader.focus}
                        {leader.experience ? (
                          <>
                            <span aria-hidden="true"> · </span>
                            {leader.experience} experience
                          </>
                        ) : null}
                      </p>

                      <p
                        className="mt-6 max-w-2xl text-base leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                      >
                        {leader.bio}
                      </p>

                      {leader.highlights ? (
                        <div className="mt-8">
                          <h4
                            className="text-xs font-bold uppercase tracking-wider"
                            style={{ color: "var(--foreground)" }}
                          >
                            Focus areas
                          </h4>
                          <ul className="mt-3 grid gap-x-10 sm:grid-cols-2">
                            {leader.highlights.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 border-t py-3"
                                style={{ borderColor: "var(--border-color)" }}
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[0.5rem] h-1.5 w-1.5 flex-shrink-0 rotate-45"
                                  style={{ backgroundColor: "var(--brand-blue-text)" }}
                                />
                                <span
                                  className="text-[0.9375rem] leading-relaxed"
                                  style={{ color: "var(--secondary-text)" }}
                                >
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      <ul
                        aria-label={`${leader.name} — areas of expertise`}
                        className="mt-7 flex flex-wrap gap-2"
                      >
                        {leader.expertise.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-lg border px-3 py-1.5 text-xs font-medium"
                            style={{
                              borderColor: "var(--border-color)",
                              backgroundColor: "var(--card-bg)",
                              color: "var(--secondary-text)",
                            }}
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
