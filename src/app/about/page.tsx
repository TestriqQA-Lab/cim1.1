import Hero from '@/components/about/Hero';
import Services from '@/components/about/Services';
import Process from '@/components/about/Process';
import Industries from '@/components/about/Industries';
import Impact from '@/components/about/Impact';
import LeadJourney from '@/components/about/LeadJourney';
import CTA from '@/components/about/CTA';

import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: 'About Us | Cinute InfoMedia - Digital Growth Agency',
    description: 'Learn about Cinute InfoMedia (CIM), a digital growth agency helping businesses build, market, and scale with creativity, data, and technology.',
    url: '/about',
});

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
