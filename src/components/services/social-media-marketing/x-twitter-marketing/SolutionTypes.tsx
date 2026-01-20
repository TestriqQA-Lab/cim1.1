"use client";

import { useState } from "react";
import {
    Coins,
    FileText,
    Laptop,
    Megaphone,
    Award,
    Music,
    ChevronRight,
    Sparkles,
} from "lucide-react";

export default function SolutionTypes() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const solutions = [
        {
            id: "crypto",
            title: "Web3 & Crypto",
            description: "Build hype, manage communities, and drive token adoption in the heart of the crypto conversation.",
            icon: Coins,
            color: "#F7931A", // Bitcoin Orange
        },
        {
            id: "news",
            title: "News & Media",
            description: "Disseminate breaking news, engage with real-time events, and drive traffic to your publications.",
            icon: FileText, // FileText instead of Newspaper
            color: "#1D9BF0", // Twitter Blue
        },
        {
            id: "saas",
            title: "Tech & SaaS",
            description: "Establish thought leadership, connect with decision-makers, and drive qualified leads for your software.",
            icon: Laptop,
            color: "#00E676", // Tech Green
        },
        {
            id: "politics",
            title: "Politics & Advocacy",
            description: "Mobilize supporters, shape public opinion, and win campaigns through strategic messaging.",
            icon: Megaphone, // Megaphone instead of Vote
            color: "#E53935", // Alert Red
        },
        {
            id: "sports",
            title: "Sports & Gaming",
            description: "Engage fans live during events, build hype for launches, and create viral moments.",
            icon: Award, // Award instead of Trophy
            color: "#FFD700", // Gold
        },
        {
            id: "entertainment",
            title: "Entertainment",
            description: "Promote releases, manage talent reputation, and foster deep fan connections.",
            icon: Music,
            color: "#9C27B0", // Purple
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(29, 155, 240, 0.1)",
                            borderColor: "rgba(29, 155, 240, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#1D9BF0" }} />
                        <span className="text-sm font-medium" style={{ color: "#1D9BF0" }}>
                            Solutions Directory
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Industries We{" "}
                        <span style={{ color: "var(--secondary-text)" }}>Transform</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Tailored X (Twitter) strategies for high-engagement sectors.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isActive = activeCard === idx;

                        return (
                            <div
                                key={solution.id}
                                className="group relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                                onMouseEnter={() => setActiveCard(idx)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Hover Gradient BG */}
                                <div
                                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                                    style={{
                                        background: `radial-gradient(circle at top right, ${solution.color}, transparent)`,
                                    }}
                                />

                                {/* Header */}
                                <div className="flex items-start justify-between mb-8 relative z-10">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                                        style={{
                                            backgroundColor: isActive ? solution.color : "var(--background)",
                                            color: isActive ? "white" : "var(--foreground)",
                                        }}
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <ChevronRight
                                        className={`w-6 h-6 transition-all duration-300 ${isActive ? "translate-x-1 text-white" : ""
                                            }`}
                                        style={{ color: isActive ? "white" : "var(--secondary-text)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {solution.title}
                                    </h3>
                                    <p className="leading-relaxed mb-6" style={{ color: "var(--secondary-text)" }}>
                                        {solution.description}
                                    </p>

                                    {/* Link Text - Commented out for now
                                    <div className="flex items-center gap-2 text-sm font-semibold transition-colors">
                                        <span style={{ color: isActive ? solution.color : "var(--secondary-text)" }}>
                                            View Strategies
                                        </span>
                                        <div
                                            className={`h-px bg-current transition-all duration-300 ${isActive ? "w-12" : "w-0"
                                                }`}
                                            style={{ color: isActive ? solution.color : "transparent" }}
                                        />
                                    </div>
                                    */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
