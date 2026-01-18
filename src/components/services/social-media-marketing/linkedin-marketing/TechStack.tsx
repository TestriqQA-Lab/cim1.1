"use client";

import { useState } from "react";
import Image from "next/image";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("ads");

    const linkedinBlue = "#0A66C2";

    const categories = [
        { id: "ads", label: "LinkedIn Ads" },
        { id: "crm", label: "CRM & Sales" },
        { id: "analytics", label: "Analytics" },
        { id: "content", label: "Content Tools" },
        { id: "automation", label: "Automation" },
    ];

    const technologies: Record<string, { name: string; description: string; logo: string }[]> = {
        ads: [
            { name: "LinkedIn Campaign Manager", description: "Ad Management", logo: "" },
            { name: "LinkedIn Sales Navigator", description: "Lead Prospecting", logo: "" },
            { name: "LinkedIn Marketing Solutions", description: "B2B Marketing", logo: "" },
            { name: "LinkedIn Events", description: "Event Promotion", logo: "" },
            { name: "LinkedIn Newsletter", description: "Content Distribution", logo: "" },
            { name: "LinkedIn Live", description: "Live Streaming", logo: "" },
        ],
        crm: [
            { name: "HubSpot", description: "CRM & Marketing", logo: "/images/ai_automation_logos/hubspot-logo.png" },
            { name: "Salesforce", description: "Enterprise CRM", logo: "/images/ai_automation_logos/salesforce-logo.png" },
            { name: "Pipedrive", description: "Sales CRM", logo: "" },
            { name: "Zoho CRM", description: "Business CRM", logo: "" },
            { name: "Microsoft Dynamics", description: "Enterprise Suite", logo: "" },
            { name: "Apollo.io", description: "Sales Intelligence", logo: "" },
        ],
        analytics: [
            { name: "LinkedIn Analytics", description: "Native Insights", logo: "" },
            { name: "Google Analytics", description: "Web Traffic", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
            { name: "Google Looker", description: "Data Studio", logo: "/images/ai_automation_logos/looker-logo.svg" },
            { name: "Tableau", description: "Visualization", logo: "/images/ai_automation_logos/tableau-logo.svg" },
            { name: "Mixpanel", description: "Product Analytics", logo: "/images/techstack_logos/mixpanel-logo.png" },
            { name: "Hotjar", description: "Heatmaps", logo: "/images/techstack_logos/Hotjar-logo.png" },
        ],
        content: [
            { name: "Canva", description: "Graphics Design", logo: "/images/brand-identity-design-logos/canva-logo.png" },
            { name: "Adobe Creative", description: "Pro Design", logo: "/images/ai_automation_logos/adobe-logo.png" },
            { name: "Figma", description: "UI Design", logo: "/images/techstack_logos/figma-logo.svg" },
            { name: "Loom", description: "Video Recording", logo: "" },
            { name: "Grammarly", description: "Writing Assistant", logo: "" },
            { name: "Notion", description: "Content Planning", logo: "/images/techstack_logos/Notion-logo.png" },
        ],
        automation: [
            { name: "Zapier", description: "Workflow Automation", logo: "/images/ai_automation_logos/zapier-logo.svg" },
            { name: "Make", description: "Integrations", logo: "/images/ai_automation_logos/make-logo.png" },
            { name: "HubSpot Automation", description: "Marketing Automation", logo: "/images/ai_automation_logos/hubspot-logo.png" },
            { name: "Mailchimp", description: "Email Marketing", logo: "/images/ai_automation_logos/mailchimp-logo.svg" },
            { name: "Calendly", description: "Scheduling", logo: "/images/techstack_logos/calendly-logo.webp" },
            { name: "Slack", description: "Team Communication", logo: "/images/techstack_logos/slack-logo.svg" },
        ],
    };

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our LinkedIn</span>{" "}
                        <span style={{ color: linkedinBlue }}>
                            Tech Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Industry-leading tools we use to manage and optimize your LinkedIn marketing campaigns.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat.id ? "text-white shadow-lg transform scale-105" : "hover:bg-accent"}`}
                            style={{
                                backgroundColor: activeTab === cat.id ? linkedinBlue : "var(--background)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                border: activeTab === cat.id ? "none" : "1px solid var(--border-color)",
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Technology Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Logo */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: tech.logo ? "var(--card-bg)" : linkedinBlue,
                                        border: tech.logo ? "1px solid var(--border-color)" : "none",
                                    }}
                                >
                                    {tech.logo ? (
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={32}
                                            height={32}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span className="text-white font-bold text-lg">
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <h4 className="font-semibold" style={{ color: "var(--foreground)" }}>
                                        {tech.name}
                                    </h4>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {tech.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
