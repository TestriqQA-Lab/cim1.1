import React from "react";
import Hero from "@/components/services/social-media-marketing/x-twitter-marketing/Hero";
import ServiceOverview from "@/components/services/social-media-marketing/x-twitter-marketing/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing/x-twitter-marketing/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing/x-twitter-marketing/TechStack";
import Process from "@/components/services/social-media-marketing/x-twitter-marketing/Process";
import WhyChooseUs from "@/components/services/social-media-marketing/x-twitter-marketing/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing/x-twitter-marketing/CTA";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'X (Twitter) Marketing Agency | Ads & Growth Strategies',
    description: 'Dominate real-time conversations with expert X (Twitter) marketing. We manage viral campaigns, Twitter Spaces, and high-convert ads.',
};

export default function XMarketingPage() {
    return (
        <main>
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
