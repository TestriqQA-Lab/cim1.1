import React from "react";
import Hero from "@/components/services/social-media-marketing/youtube-advertising/Hero";
import ServiceOverview from "@/components/services/social-media-marketing/youtube-advertising/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing/youtube-advertising/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing/youtube-advertising/TechStack";
import Process from "@/components/services/social-media-marketing/youtube-advertising/Process";
import WhyChooseUs from "@/components/services/social-media-marketing/youtube-advertising/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing/youtube-advertising/CTA";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'YouTube Advertising Strategies | Video Marketing Services',
    description: 'Scale your brand with expert YouTube advertising services. We manage campaigns, optimize video SEO, and drive conversions with data-driven video marketing.',
};

export default function YouTubeAdvertisingPage() {
    return (
        <main className="min-h-screen">
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
