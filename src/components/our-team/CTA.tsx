import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

// Server component.

export default function CTA() {
  return (
    <section
      className="py-20 md:py-24 transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="team-cta-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div
          className="relative overflow-hidden rounded-3xl border p-8 md:p-14"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "color-mix(in srgb, var(--brand-blue) 30%, var(--border-color))",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: "color-mix(in srgb, var(--brand-teal) 14%, transparent)" }}
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2
                id="team-cta-heading"
                className="text-3xl font-bold leading-tight md:text-4xl"
                style={{ color: "var(--foreground)" }}
              >
                Work with the people you just met
              </h2>
              <p
                className="mt-5 max-w-2xl text-lg leading-relaxed"
                style={{ color: "var(--secondary-text)" }}
              >
                No account-manager relay. Tell us what you are trying to build or fix, and the person
                who will actually own the work will be on the first call.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--brand-blue-btn), var(--accent-teal-btn))",
                  }}
                >
                  Start a conversation
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
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                  }}
                >
                  Join the team
                </Link>
              </div>
            </div>

            <ul
              className="space-y-4 rounded-2xl border p-6"
              style={{ backgroundColor: "var(--background)", borderColor: "var(--border-color)" }}
            >
              <li className="flex items-center gap-3">
                <Mail
                  className="h-5 w-5 flex-shrink-0"
                  style={{ color: "var(--brand-blue-text)" }}
                  aria-hidden="true"
                />
                <a
                  href="mailto:contact@cinuteinfomedia.com"
                  className="inline-block rounded-sm py-1 text-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                  style={{ color: "var(--foreground)" }}
                >
                  contact@cinuteinfomedia.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-5 w-5 flex-shrink-0"
                  style={{ color: "var(--brand-blue-text)" }}
                  aria-hidden="true"
                />
                <a
                  href="tel:+919004988859"
                  className="inline-block rounded-sm py-1 text-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                  style={{ color: "var(--foreground)" }}
                >
                  +91 9004988859
                </a>
              </li>
              <li className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Beverly Park, Mira Road, Mumbai,
                Maharashtra 401107
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
