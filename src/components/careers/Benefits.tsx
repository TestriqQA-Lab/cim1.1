
import { Heart, Globe, Zap, Coffee, Laptop, Trophy } from "lucide-react";

const benefits = [
    {
        icon: Globe,
        title: "Remote First",
        description: "Work from anywhere in the world. We believe in output over hours.",
        color: "var(--brand-blue)"
    },
    {
        icon: Zap,
        title: "Fast-Paced Growth",
        description: "Accelerate your career with challenging projects and rapid learning curves.",
        color: "var(--brand-yellow)"
    },
    {
        icon: Heart,
        title: "Comprehensive Health",
        description: "Standard health coverage for you and your family.",
        color: "var(--brand-purple)"
    },
    {
        icon: Laptop,
        title: "Top-Tier Equipment",
        description: "We provide the latest MacBook Pros and accessories for your home office.",
        color: "var(--brand-cyan)"
    },
    {
        icon: Coffee,
        title: "Flexible Hours",
        description: "Set your own schedule. We respect your time and work-life balance.",
        color: "var(--brand-orange)"
    },
    {
        icon: Trophy,
        title: "Performance Bonuses",
        description: "Competitive salary with performance-based bonuses and equity options.",
        color: "var(--brand-teal)"
    }
];

export default function Benefits() {
    return (
        <section className="py-20 bg-[var(--card-bg)]/30">
            <div className="mx-auto px-6 md:px-12 xl:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Why Join <span style={{ color: "var(--brand-blue)" }}>CIM?</span>
                    </h2>
                    <p className="text-[var(--secondary-text)] text-lg max-w-2xl mx-auto">
                        We take care of our team so they can take care of our clients. Here&apos;s what you can expect when you join us.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-3xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-[var(--card-bg)]"
                            style={{ borderColor: "var(--border-color)" }}
                        >
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                                style={{
                                    backgroundColor: `color-mix(in srgb, ${benefit.color} 10%, transparent)`,
                                    color: benefit.color
                                }}
                            >
                                <benefit.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                {benefit.title}
                            </h3>
                            <p className="text-[var(--secondary-text)] leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
