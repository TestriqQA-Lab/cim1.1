import dynamic from 'next/dynamic';
import Hero from '@/components/about/Hero';

// Lazy load below-the-fold components
const Services = dynamic(() => import('@/components/about/Services'));
const Process = dynamic(() => import('@/components/about/Process'));
const Industries = dynamic(() => import('@/components/about/Industries'));
const Impact = dynamic(() => import('@/components/about/Impact'));
const LeadJourney = dynamic(() => import('@/components/about/LeadJourney'));
const CTA = dynamic(() => import('@/components/about/CTA'));

export const metadata = {
    title: 'About Us | Cinute InfoMedia',
    description: 'Learn about Cinute InfoMedia (CIM), a digital growth agency helping businesses build, market, and scale with creativity, data, and technology.',
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            <Hero />
            <Services />
            <Process />
            <Industries />
            <Impact />
            <LeadJourney />
            <CTA />
        </div>
    );
}
