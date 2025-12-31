"use client";

import { Code2, Database, Shield, Cloud, RefreshCw, Puzzle } from "lucide-react";

export default function TechStack() {
    const technologies = [
        {
            category: "Frontend Frameworks",
            icon: Code2,
            items: [
                { name: "React/Next.js", description: "SSR & static generation" },
                { name: "Vue.js/Nuxt", description: "Progressive framework" },
                { name: "TypeScript", description: "Type-safe development" },
            ],
        },
        {
            category: "Backend & APIs",
            icon: Database,
            items: [
                { name: "Node.js", description: "JavaScript runtime" },
                { name: "Python/FastAPI", description: "High-performance APIs" },
                { name: "GraphQL", description: "Flexible data queries" },
            ],
        },
        {
            category: "Authentication & Security",
            icon: Shield,
            items: [
                { name: "Auth0/Clerk", description: "Identity management" },
                { name: "OAuth 2.0 / SAML", description: "Enterprise SSO" },
                { name: "RBAC/ABAC", description: "Access control" },
            ],
        },
        {
            category: "Cloud Infrastructure",
            icon: Cloud,
            items: [
                { name: "AWS/GCP/Azure", description: "Cloud platforms" },
                { name: "Vercel/Netlify", description: "Edge deployment" },
                { name: "Docker/Kubernetes", description: "Container orchestration" },
            ],
        },
        {
            category: "DevOps & CI/CD",
            icon: RefreshCw,
            items: [
                { name: "GitHub Actions", description: "Automated workflows" },
                { name: "Terraform", description: "Infrastructure as code" },
                { name: "Datadog/Sentry", description: "Monitoring & logging" },
            ],
        },
        {
            category: "Integrations",
            icon: Puzzle,
            items: [
                { name: "Stripe/Paddle", description: "Payment processing" },
                { name: "SendGrid/Twilio", description: "Notifications" },
                { name: "Segment/Mixpanel", description: "Product analytics" },
            ],
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "#008ac1" }}>Modern</span> Technology Stack
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We use proven, scalable technologies that accelerate development and ensure long-term maintainability.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, idx) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(135deg, #008ac1, #bc3feb)",
                                        }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                        {tech.category}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {tech.items.map((item, iidx) => (
                                        <div key={iidx} className="flex items-start gap-3">
                                            <div
                                                className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                                                style={{ backgroundColor: "#008ac1" }}
                                            />
                                            <div>
                                                <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                                                    {item.name}
                                                </p>
                                                <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
