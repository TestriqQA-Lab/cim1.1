import dynamic from 'next/dynamic';
import Hero from '@/components/services/brand-identity-design/Hero';
import ServiceOverview from '@/components/services/brand-identity-design/ServiceOverview';

// Lazy load below-the-fold components for better performance
const BrandElements = dynamic(() => import('@/components/services/brand-identity-design/BrandElements'), {
    loading: () => <div className="py-20" />,
});
const WhyChooseUs = dynamic(() => import('@/components/services/brand-identity-design/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const DesignProcess = dynamic(() => import('@/components/services/brand-identity-design/DesignProcess'), {
    loading: () => <div className="py-20" />,
});
const DesignTools = dynamic(() => import('@/components/services/brand-identity-design/DesignTools'), {
    loading: () => <div className="py-20" />,
});
const BrandPackages = dynamic(() => import('@/components/services/brand-identity-design/BrandPackages'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/brand-identity-design/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Brand Identity & Design Services | Creative Branding Agency',
    description: 'Transform your business with professional brand identity design. We create powerful logos, visual identities, brand guidelines, and complete branding solutions.',
    url: '/services/brand-identity-design',
    keywords: [
        'Brand Identity Design',
        'Logo Design',
        'Visual Identity',
        'Brand Guidelines',
        'Creative Design Agency',
    ],
});

export default function BrandIdentityDesignPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Brand Identity Design',
        description: 'Professional visual identity and branding services.',
        urlPath: '/services/brand-identity-design',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Brand Identity', url: '/services/brand-identity-design' },
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
            <BrandElements />
            <WhyChooseUs />
            <DesignProcess />
            <DesignTools />
            <BrandPackages />
            <CTA />
        </main>
    );
}
