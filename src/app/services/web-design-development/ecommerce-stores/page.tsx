import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/ecommerce-stores/Hero';
import ServiceOverview from '@/components/services/web-design-development/ecommerce-stores/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/ecommerce-stores/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/ecommerce-stores/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/ecommerce-stores/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/ecommerce-stores/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/ecommerce-stores/UseCases'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/ecommerce-stores/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'E-commerce Store Development | Online Store Design & Shopping Cart Solutions',
    description: 'Build a high-converting e-commerce store that drives revenue. Our online store development services include Shopify, WooCommerce, and custom e-commerce platforms with checkout optimization and payment integration.',
    url: '/services/web-design-development/ecommerce-stores',
    keywords: [
        'E-commerce Development',
        'Online Store Development',
        'Shopify Development',
        'WooCommerce Development',
        'E-commerce Website Design',
    ],
});

export default function EcommerceStoresPage() {
    const serviceSchema = generateServiceSchema({
        name: 'E-commerce Store Development',
        description: 'High-converting e-commerce store development for D2C brands and online retailers.',
        urlPath: '/services/web-design-development/ecommerce-stores',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'E-commerce Stores', url: '/services/web-design-development/ecommerce-stores' },
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
            <SolutionTypes />
            <Process />
            <TechStack />
            <UseCases />
            <CTA />
        </main>
    );
}
