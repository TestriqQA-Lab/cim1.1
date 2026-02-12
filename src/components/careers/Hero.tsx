
import { Sparkles, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            {/* Background Gradients similar to About page */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-16 relative z-10 text-center">
                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border transition-colors mx-auto"
                    style={{
                        background:
                            "linear-gradient(90deg, color-mix(in srgb, var(--brand-blue) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                        borderColor: "color-mix(in srgb, var(--brand-blue) 20%, transparent)",
                        color: "var(--brand-blue)",
                    }}
                >
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-semibold">Join Our Team</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                    Build the Future of <br className="hidden md:block" />
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            background:
                                "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan), var(--brand-teal))", WebkitBackgroundClip: "text", color: "transparent",
                        }}
                    >
                        Digital Growth
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-[var(--secondary-text)] max-w-2xl mx-auto mb-10 leading-relaxed">
                    At Cinute InfoMedia, we are not just building software; we are architects of growth ecosystems. Join us to solve complex problems and make a real impact.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#open-positions"
                        className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
                        style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-purple))" }}
                    >
                        View Open Roles
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/about"
                        className="px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 border hover:bg-[var(--card-bg)]"
                        style={{ color: "var(--foreground)", borderColor: "var(--border-color)" }}
                    >
                        Learn About Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
