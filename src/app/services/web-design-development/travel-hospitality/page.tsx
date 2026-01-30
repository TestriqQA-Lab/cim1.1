import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/travel-hospitality/Hero";
import ServiceOverview from "@/components/services/web-design-development/travel-hospitality/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/travel-hospitality/SolutionTypes";
import TechStack from "@/components/services/web-design-development/travel-hospitality/TechStack";
import Process from "@/components/services/web-design-development/travel-hospitality/Process";
import WhyChooseUs from "@/components/services/web-design-development/travel-hospitality/WhyChooseUs";
import FAQ from "@/components/services/web-design-development/travel-hospitality/FAQ";
import CTA from "@/components/services/web-design-development/travel-hospitality/CTA";

export const metadata: Metadata = {
    title: "Travel and Hospitality Services | Custom Travel Technology Solutions & Marketing (2026)",
    description: "Scale with premier Travel and Hospitality Services. We build custom travel technology solutions, booking engines, and ROI-driven marketing campaigns for global agencies & hotels. Get your free audit today!",
    keywords: [
        "travel and hospitality services",
        "travel software development services",
        "hospitality marketing agency",
        "travel technology solutions",
        "custom travel booking platform development",
        "digital marketing for luxury hotels and resorts",
        "hospitality revenue management services",
        "travel API integration services",
        "hotel property management system integration",
        "travel and tourism market research",
    ],
    openGraph: {
        title: "Travel and Hospitality Services | Custom Travel Technology Solutions & Marketing (2026)",
        description: "Scale with premier Travel and Hospitality Services. We build custom travel technology solutions and ROI-driven marketing campaigns.",
        type: "website",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.cinuteinfomedia.com/#organization",
            "name": "Cinute Infomedia",
            "url": "https://www.cinuteinfomedia.com/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.cinuteinfomedia.com/logo.png",
                "width": 112,
                "height": 112
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9004988859",
                "contactType": "sales",
                "email": "contact@cinuteinfomedia.com",
                "areaServed": ["US", "GB", "IN", "AU", "CA", "AE"],
                "availableLanguage": ["en", "hi"]
            },
            "sameAs": [
                "https://www.facebook.com/cinuteinfomedia",
                "https://twitter.com/cinuteinfomedia",
                "https://www.linkedin.com/company/cinuteinfomedia"
            ]
        },
        {
            "@type": "Service",
            "name": "Travel and Hospitality Website Development",
            "provider": {
                "@id": "https://www.cinuteinfomedia.com/#organization"
            },
            "description": "Premium Travel and Hospitality Services delivering custom travel technology solutions, booking engines, and digital marketing for global travel agencies and hotels.",
            "areaServed": "Global",
            "serviceType": "Web Development & Digital Marketing",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "availability": "https://schema.org/OnlineOnly",
                "url": "https://www.cinuteinfomedia.com/contact"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Travel Technology Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Travel Software Development Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Hospitality Marketing Agency Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Custom Travel Booking Platform Development"
                        }
                    }
                ]
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are travel and hospitality services in the context of digital development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Travel and hospitality services encompass the strategic design, development, and marketing of digital solutions for the tourism industry. This includes building custom booking engines, hotel management software, OTA platforms, and implementing Travel Technology Solutions that streamline operations and enhance the guest experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can technology improve hospitality services for hotels and agencies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Technology improves hospitality services by automating routine tasks, personalizing guest interactions, and optimizing revenue. Tools like Hotel Property Management Systems (PMS), AI-driven chatbots, and Travel Data Analytics allow businesses to offer seamless booking experiences and tailored recommendations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes a top-tier Hospitality Marketing Agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A top-tier Hospitality Marketing Agency combines creative storytelling with data-driven strategies. Look for an agency that specializes in Digital Marketing for Luxury Hotels and Resorts, uses advanced SEO for Travel Lead Generation, and has a proven track record of increasing direct bookings."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is custom Travel Software Development Services better than off-the-shelf solutions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Custom Travel Software Development Services offer flexibility and scalability that off-the-shelf products cannot match. A custom solution is tailored to your specific business workflows, allowing for unique features like specialized Travel API integrations and proprietary revenue management algorithms."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the key Hospitality Technology Trends for 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Key Hospitality Technology Trends 2026 include hyper-personalization via AI, adoption of sustainable travel tech, biometric authentication for seamless check-ins, and increased use of immersive AR/VR in travel website design."
                    }
                }
            ]
        }
    ]
};

export default function TravelHospitalityPage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTA />
        </main>
    );
}
