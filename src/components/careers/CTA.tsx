
import Link from "next/link";
import { Mail } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-20">
            <div className="mx-auto px-6 md:px-12 xl:px-16">
                <div
                    className="mx-auto max-w-5xl rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center"
                    style={{
                        background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 10%, transparent), color-mix(in srgb, var(--brand-purple) 10%, transparent))",
                        border: "1px solid color-mix(in srgb, var(--brand-blue) 20%, transparent)"
                    }}
                >
                    {/* Background Glows */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div
                            className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-40"
                            style={{ backgroundColor: "var(--brand-cyan)" }}
                        />
                        <div
                            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-40"
                            style={{ backgroundColor: "var(--brand-purple)" }}
                        />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Don&apos;t See the Right Role?
                        </h2>
                        <p className="text-lg md:text-xl text-[var(--secondary-text)]">
                            We are always looking for talented individuals to join our team. If you think you'd be a great fit, we'd love to hear from you.
                        </p>
                        <Link
                            href="mailto:careers@cinute.com"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                            style={{ background: "var(--brand-blue)" }}
                        >
                            <Mail className="w-5 h-5" />
                            Send Us Your Resume
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
