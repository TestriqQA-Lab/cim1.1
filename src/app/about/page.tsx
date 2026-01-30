import dynamic from 'next/dynamic';
import Hero from '@/components/about/Hero';

// Lazy load below-the-fold components
const Services = dynamic(() => import('@/components/about/Services'));
const Process = dynamic(() => import('@/components/about/Process'));
const WhyChooseUs = dynamic(() => import('@/components/about/WhyChooseUs'));
const Industries = dynamic(() => import('@/components/about/Industries'));
const Impact = dynamic(() => import('@/components/about/Impact'));
const LeadJourney = dynamic(() => import('@/components/about/LeadJourney'));
const CTA = dynamic(() => import('@/components/about/CTA'));

import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: 'About Us | Cinute InfoMedia - Digital Growth Agency',
    description: 'Learn about Cinute InfoMedia (CIM), a leading digital growth agency helping businesses build, market, and scale with creativity, data, and technology. 300+ global projects. 95% client retention.',
    url: '/about',
});

export default function AboutPage() {
    return (
        <div className="bg-white" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <Hero />
            <Services />
            <Process />
            <WhyChooseUs />
            <Industries />
            <Impact />
            <LeadJourney />
            <CTA />
        </div>
    );
}
