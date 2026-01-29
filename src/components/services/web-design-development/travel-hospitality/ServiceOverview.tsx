"use client";

import { Plane, Calendar, Globe, CreditCard, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const deliverables = [
        {
            icon: Calendar,
            title: "Booking Engine",
            description: "Real-time availability, instant confirmations, and seamless reservation management",
        },
        {
            icon: Globe,
            title: "Channel Management",
            description: "Sync inventory across OTAs, metasearch engines, and direct booking channels",
        },
        {
            icon: Users,
            title: "Guest Experience",
            description: "Personalized portals, loyalty programs, and automated communication",
        },
        {
            icon: CreditCard,
            title: "Payment Integration",
            description: "Multi-currency support, secure gateways, and flexible payment options",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            A <span style={{ color: "#0d9488", fontWeight: 700 }}>travel platform</span> is more than a booking interface - it's a complete digital ecosystem that connects travelers with unforgettable experiences while maximizing your operational efficiency.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            We build hospitality solutions that combine stunning visual presentation with powerful booking engines, channel management, and guest experience tools. Every element - from property showcases to checkout flows - is designed to increase conversions and guest satisfaction.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            Our platforms integrate with leading hospitality APIs, payment gateways, and property management systems to create a unified experience for both operators and guests.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                                style={{ background: "linear-gradient(135deg, #0d9488, #0ea5e9)" }}
                            >
                                <Plane className="w-5 h-5" />
                                Start Your Project
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Deliverables */}
                    <div className="space-y-4">
                        <h3
                            className="text-2xl font-bold mb-6"
                            style={{ color: "var(--foreground)" }}
                        >
                            Core <span style={{ color: "#0d9488" }}>Deliverables</span>
                        </h3>

                        <div className="grid gap-4">
                            {deliverables.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg group"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: "#0d9488" }}
                                            >
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4
                                                    className="font-semibold text-lg mb-1"
                                                    style={{ color: "var(--foreground)" }}
                                                >
                                                    {item.title}
                                                </h4>
                                                <p
                                                    className="text-sm"
                                                    style={{ color: "var(--secondary-text)" }}
                                                >
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
