"use client";

import { Plane, Calendar, Globe, CreditCard, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const deliverables = [
        {
            icon: Calendar,
            title: "Custom Booking Engines",
            description: "Develop high-conversion Travel Booking Engine Optimization systems with real-time inventory updates and zero overbookings.",
        },
        {
            icon: Globe,
            title: "GDS & OTA Integration",
            description: "Seamless Travel API Integration Services (GDS/OTA) for Amadeus, Sabre, Expedia, and Airbnb with bidirectional data sync.",
        },
        {
            icon: Users,
            title: "Guest Experience Platforms",
            description: "Elevate engagement with Hospitality Guest Experience Optimization Services, from mobile check-in to AI concierge chatbots.",
        },
        {
            icon: CreditCard,
            title: "Revenue Management Systems",
            description: "Implement advanced Hospitality Revenue Management Services using AI to predict demand and optimize dynamic pricing.",
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
                            A <span style={{ color: "#0d9488", fontWeight: 700 }}>travel platform</span> is more than a booking interface: it's a complete digital ecosystem that connects travelers with unforgettable experiences while maximizing your operational efficiency.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            In the rapidly evolving landscape of 2026, the global tourism industry demands intelligent, scalable Travel and Hospitality Services that drive revenue and enhance guest experiences. We understand that modern travelers expect instant gratification, hyper-personalization, and frictionless booking journeys. That’s why we build hospitality solutions that combine stunning visual presentation with powerful booking engines, GDS/OTA integrations, and guest experience tools.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            Our expertise spans delivering custom Travel Technology Solutions that solve complex challenges, from seamless GDS integration to AI-driven Hospitality Management Consulting. Every element is engineered by our elite developers and strategists to boost Direct Booking flow, optimize Hospitality Revenue Management Services, and ensure your brand stands out in a crowded market.
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
