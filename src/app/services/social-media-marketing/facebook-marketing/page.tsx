import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing/facebook-marketing/Hero";
import ServiceOverview from "@/components/services/social-media-marketing/facebook-marketing/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing/facebook-marketing/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing/facebook-marketing/TechStack";
import Process from "@/components/services/social-media-marketing/facebook-marketing/Process";
import WhyChooseUs from "@/components/services/social-media-marketing/facebook-marketing/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing/facebook-marketing/CTA";

export const metadata: Metadata = {
    title: "Facebook Marketing Services | Lead Gen & Ads Management Agency",
    description:
        "Scale your brand with top-tier Facebook marketing services. Expert Meta ads management delivered by a global agency. 10x ROAS focus. Get a FREE audit today!",
    keywords: [
        "Facebook marketing services",
        "Facebook marketing agency",
        "Facebook ads management services",
        "Facebook marketing company",
        "Facebook marketing expert",
        "social media strategy",
    ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facebook Marketing Services",
    "provider": {
        "@type": "Organization",
        "name": "Cinute Infomedia",
        "url": "https://www.cinuteinfomedia.com"
    },
    "serviceType": "Digital Marketing",
    "areaServed": ["US", "EU", "IN", "APAC"],
    "description": "Expert Facebook marketing agency providing Meta ads management, lead generation, and e-commerce scaling services with a focus on high ROAS and technical E-E-A-T optimization.",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "url": "https://www.cinuteinfomedia.com/services/social-media-marketing/facebook-marketing"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Meta Advertising Solutions",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Facebook Ads Management"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Facebook Lead Generation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Facebook Ads Scaling"
                }
            }
        ]
    }
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much do professional Facebook marketing services cost?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Professional services typically involve a retainer starting at $1,500–$5,000 or 10-20% of ad spend. We offer tailored packages based on your specific business goals."
            }
        },
        {
            "@type": "Question",
            "name": "What are the benefits of hiring a Facebook advertising agency?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hiring an agency provides expert optimization, better tool access, and lower CPAs by avoiding costly trial-and-error mistakes."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to see ROI from Facebook ads?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Initial results can appear in 48 hours for retargeting, but full optimization usually takes 2-4 weeks to stabilize and scale profitably."
            }
        }
    ]
};

export default function FacebookMarketingPage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <CTA />
        </main>
    );
}
