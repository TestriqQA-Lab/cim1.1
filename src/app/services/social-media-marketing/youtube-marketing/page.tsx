import React from "react";
import Hero from "@/components/services/social-media-marketing/youtube-marketing/Hero";
import ServiceOverview from "@/components/services/social-media-marketing/youtube-marketing/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing/youtube-marketing/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing/youtube-marketing/TechStack";
import Process from "@/components/services/social-media-marketing/youtube-marketing/Process";
import WhyChooseUs from "@/components/services/social-media-marketing/youtube-marketing/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing/youtube-marketing/CTA";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'YouTube Marketing Agency | Video Content Growth Services | TestrIQ',
    description: 'Scale your brand with expert YouTube marketing and video content growth services. We manage channels, optimize video SEO, and drive engagement with data-driven video marketing.',
};

export default function YouTubeMarketingPage() {
    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "YouTube Marketing",
                        "description": "Expert YouTube marketing and video content growth services.",
                        "provider": {
                            "@type": "Organization",
                            "name": "CIM"
                        }
                    })
                }}
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
