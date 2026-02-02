"use client";

import { Smartphone, Rocket, Palette, Server, Shield, Zap, MonitorSmartphone } from "lucide-react";
import { ReactLogo, Android, Apple } from "../../Icons";
import Link from "next/link";

export default function ServiceOverview() {
    const services = [
        {
            icon: Smartphone,
            title: "Native App Development",
            description: <span>Build high-performance <Link href="/services/mobile-app-development/ios-app-development" className="hover:text-[var(--brand-purple)]">iOS</Link> and <Link href="/services/mobile-app-development/android-app-development" className="hover:text-[var(--brand-purple)]">Android apps</Link> with Swift 6/SwiftUI and Kotlin/Jetpack Compose. Leverage 100% device capabilities and AR/VR integration.</span>,
            gradient: "from-[#667eea] to-[#764ba2]"
        },
        {
            icon: ReactLogo,
            title: "Cross-Platform Solutions",
            description: <span>Deploy to iOS & Android simultaneously with <Link href="/services/mobile-app-development/flutter-app-development" className="hover:text-[var(--brand-purple)]">Flutter</Link> and <Link href="/services/mobile-app-development/react-native-app-development" className="hover:text-[var(--brand-purple)]">React Native</Link>. Save 40% development cost while maintaining native-like performance.</span>,
            gradient: "from-[#f093fb] to-[#f5576c]"
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Achieve <2s launch time, 60 FPS animations, and 99.9% crash-free rate. Expert optimization with efficient databases, advanced caching, code splitting, and CDN integration.",
            gradient: "from-[#4facfe] to-[#00f2fe]"
        },
        {
            icon: Palette,
            title: "User-Centric Design",
            description: "Create conversion-optimized interfaces with 35% higher engagement. WCAG 2.2 AA compliant designs backed by 10,000+ hours of user research and A/B testing data.",
            gradient: "from-[#43e97b] to-[#38f9d7]"
        },
        {
            icon: Server,
            title: "Scalable Backend",
            description: "Build enterprise-grade infrastructure supporting 10,000+ concurrent users. Multi-tenant architecture with Node.js, Python, .NET, and cloud services (AWS, Google Cloud, Azure).",
            gradient: "from-[#fa709a] to-[#fee140]"
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Implement AES-256 encryption, OAuth 2.0 authentication, and OWASP Mobile Top 10 compliance. GDPR, HIPAA, PCI-DSS, and SOC 2 certified solutions with zero breaches since 2014.",
            gradient: "from-[#30cfd0] to-[#330867]"
        }
    ];

    return (
        <section
            id="overview"
            className="relative transition-colors duration-300 py-20"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mx-auto font-extrabold mb-4">
                        Comprehensive <span style={{ color: "var(--brand-purple)" }}>Mobile App Development Services</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-5xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        End-to-end mobile application development services tailored to your business needs. From MVP to enterprise-grade solutions, we deliver measurable results across iOS, Android, and cross-platform ecosystems. Many businesses pair mobile apps with <Link href="/services/web-design-development" style={{ color: "var(--brand-purple)" }}>custom web development</Link> for a complete digital presence.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 border"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--card-bg) 80%, var(--brand-purple) 20%)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "var(--card-bg)";
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`flex-shrink-0 w-12 h-12 rounded-lg p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${service.gradient}`}
                                    >
                                        <Icon className="w-full h-full text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                            {service.title}
                                        </h3>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Key Benefits */}
                <div className="mt-16 p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-2xl font-bold mb-6">What Makes Our Mobile App Development Services Stand Out?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">12+ Years of Excellence</h4>
                                <p style={{ color: "var(--secondary-text)" }}>Proven expertise delivering 300+ mobile apps across 45+ industries with 99.2% client retention rate and 95% on-time delivery.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Agile & Transparent Process</h4>
                                <p style={{ color: "var(--secondary-text)" }}>2-week sprints, daily standups, and real-time progress tracking. 40% faster time-to-market with flexible development approach.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Comprehensive Support Tiers</h4>
                                <p style={{ color: "var(--secondary-text)" }}>24/7 maintenance, OS updates, security patches, and feature enhancements. Bronze, Silver & Gold support plans available.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Quality Guaranteed</h4>
                                <p style={{ color: "var(--secondary-text)" }}>98.7% bug-free delivery with 80%+ test coverage, rigorous QA across 100+ devices, and 99.9% crash-free sessions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Resources */}
                <div className="mt-8 p-6 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-lg font-bold mb-4" style={{ color: "var(--foreground)" }}>📚 Related Resources</h3>
                    <div className="flex flex-col gap-3">
                        <Link href="/blog/mobile-app-development-trends-2026" className="group flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-[var(--hover-bg)]">
                            <span className="text-2xl">📱</span>
                            <div>
                                <h4 className="font-semibold group-hover:text-[var(--brand-purple)] transition-colors">Mobile App Development Trends in 2026</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Discover the latest trends shaping mobile development</p>
                            </div>
                        </Link>
                        <Link href="/blog/mobile-ux-trends-2026" className="group flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-[var(--hover-bg)]">
                            <span className="text-2xl">🎨</span>
                            <div>
                                <h4 className="font-semibold group-hover:text-[var(--brand-purple)] transition-colors">Mobile UX Trends in 2026</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Latest design patterns and UX best practices</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}