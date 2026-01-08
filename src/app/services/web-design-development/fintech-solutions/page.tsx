
import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/fintech-solutions/Hero';
import ServiceOverview from '@/components/services/web-design-development/fintech-solutions/ServiceOverview';

const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/fintech-solutions/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});

const Process = dynamic(() => import('@/components/services/web-design-development/fintech-solutions/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/fintech-solutions/TechStack'), {
    loading: () => <div className="py-20" />,
});

const CTA = dynamic(() => import('@/components/services/web-design-development/fintech-solutions/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'FinTech Solutions & Banking Software Development',
    description: 'Build secure, scalable financial technology platforms. key services: Digital Banking, Payment Gateways, Investment Platforms, and BlockChain Solutions.',
    url: '/services/web-design-development/fintech-solutions',
    keywords: [
        'FinTech Development',
        'Banking Software',
        'Payment Gateway Integration',
        'Financial Technology',
        'Blockchain Solutions',
        'Secure Banking Apps',
    ],
});

export default function FinTechSolutionsPage() {
    const serviceSchema = generateServiceSchema({
        name: 'FinTech Solutions & Banking Software',
        description: 'Secure financial technology solutions for banking, payments, and investment sectors.',
        urlPath: '/services/web-design-development/fintech-solutions',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'FinTech Solutions', url: '/services/web-design-development/fintech-solutions' },
    ]);

    return (
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <Process />
            <TechStack />
            <CTA />
        </main>
    );
}
