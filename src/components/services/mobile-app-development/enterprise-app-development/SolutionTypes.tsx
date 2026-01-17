"use client";

import { useState, useEffect } from "react";
import {
    Factory,
    Heart,
    Landmark,
    Truck,
    Store,
    Building,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

export default function SolutionTypes() {
    const [activeSolution, setActiveSolution] = useState<number | null>(null);
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth >= 1024) {
                setColumns(3);
            } else if (window.innerWidth >= 768) {
                setColumns(2);
            } else {
                setColumns(1);
            }
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const solutions = [
        {
            icon: Factory,
            title: "Manufacturing",
            description: "Production monitoring, quality control, inventory management, and shop floor apps for manufacturing operations.",
            features: [
                "Production dashboards",
                "Quality inspections",
                "Inventory tracking",
                "Maintenance requests",
            ],
        },
        {
            icon: Heart,
            title: "Healthcare",
            description: "HIPAA-compliant apps for patient engagement, clinical workflows, and healthcare administration.",
            features: [
                "Patient portals",
                "Clinical workflows",
                "Appointment scheduling",
                "HIPAA compliance",
            ],
        },
        {
            icon: Landmark,
            title: "Financial Services",
            description: "Secure mobile banking, trading, and financial management apps with regulatory compliance.",
            features: [
                "Secure transactions",
                "Portfolio management",
                "Compliance reporting",
                "Biometric auth",
            ],
        },
        {
            icon: Truck,
            title: "Logistics & Supply Chain",
            description: "Fleet management, route optimization, shipment tracking, and warehouse operations apps.",
            features: [
                "Fleet tracking",
                "Route optimization",
                "Delivery management",
                "Warehouse ops",
            ],
        },
        {
            icon: Store,
            title: "Retail Enterprise",
            description: "Omnichannel retail solutions, inventory management, and employee apps for retail chains.",
            features: [
                "Store operations",
                "Inventory management",
                "Customer engagement",
                "POS integration",
            ],
        },
        {
            icon: Building,
            title: "Government & Public Sector",
            description: "Citizen services, internal operations, and field inspection apps with government compliance.",
            features: [
                "Citizen portals",
                "Field inspections",
                "Case management",
                "FedRAMP ready",
            ],
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Enterprise Solutions by</span>{" "}
                        <span style={{ color: "#2563eb" }}>
                            Industry
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Specialized enterprise mobile solutions tailored for your industry requirements and compliance needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const currentRow = activeSolution !== null ? Math.floor(activeSolution / columns) : -1;
                        const cardRow = Math.floor(idx / columns);
                        const isActive = currentRow === cardRow;

                        return (
                            <div
                                key={idx}
                                className={`
                                    relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden group
                                    ${isActive ? "ring-2 ring-[#2563eb] ring-offset-2" : "hover:border-[#2563eb]/50"}
                                `}
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(activeSolution === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Background on Hover */}
                                <div
                                    className={`
                                        absolute inset-0 opacity-0 transition-opacity duration-500
                                        ${isActive ? "opacity-5" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "#2563eb",
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                                        ${isActive ? "scale-110 rotate-3" : ""}
                                    `}
                                    style={{
                                        backgroundColor: isActive ? "#2563eb" : "rgba(37, 99, 235, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[#2563eb]"
                                            }`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                <p className="text-sm mb-6 line-clamp-3" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features List */}
                                <div
                                    className={`
                                        space-y-3 transition-all duration-300 overflow-hidden
                                        ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                    `}
                                >
                                    {solution.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                            <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div
                                    className={`
                                        absolute bottom-8 right-8 transition-all duration-300 transform
                                        ${isActive ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                                    `}
                                >
                                    <ArrowRight className="w-5 h-5 text-[#2563eb]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
