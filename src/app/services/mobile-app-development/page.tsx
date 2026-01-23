import dynamic from 'next/dynamic';
import Hero from '@/components/services/mobile-app-development/Hero';
import ServiceOverview from '@/components/services/mobile-app-development/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/mobile-app-development/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const AppTypes = dynamic(() => import('@/components/services/mobile-app-development/AppTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/mobile-app-development/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/mobile-app-development/Technologies'), {
    loading: () => <div className="py-20" />,
});
const SecurityAndSEO = dynamic(() => import('@/components/services/mobile-app-development/SecurityAndSEO'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/mobile-app-development/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: '🏆 Top Mobile App Development Company | Custom Apps 2026',
    description: 'Leading mobile app development company delivering custom iOS, Android & cross-platform apps. 300+ successful projects. Get free consultation today! ⚡',
    url: '/services/mobile-app-development',
    keywords: [
        'Mobile App Development Company',
        'Android App Development Services',
        'iOS App Development',
        'Cross Platform Mobile Apps',
        'Custom Mobile App Solutions',
        'Mobile App Development Services',
        'Native App Development',
        'Cross-Platform App Development',
        'Flutter Development',
        'React Native Development',
    ],
});

export default function MobileAppDevelopmentPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Mobile App Development',
        description: 'Native and cross-platform mobile application development.',
        urlPath: '/services/mobile-app-development',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Mobile App Development', url: '/services/mobile-app-development' },
    ]);

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cinute Infomedia",
        "description": "Leading mobile app development company delivering custom iOS, Android & cross-platform apps globally since 2014.",
        "url": "https://www.cinuteinfomedia.com",
        "logo": "https://www.cinuteinfomedia.com/logo.png",
        "foundingDate": "2014",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressCountry": "India"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "350"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the difference between native and cross-platform app development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Native apps (Swift for iOS, Kotlin for Android) offer best performance and full device feature access but require separate codebases and cost more. Cross-platform apps (Flutter, React Native) use single codebase, save 40% cost, and launch faster but may have slightly lower performance for complex tasks. Choose native for gaming/AR/complex apps; cross-platform for MVPs, startups, and standard features."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to develop a mobile app?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Development time varies by complexity. Simple MVP: 2-3 months ($15K-$40K); Medium complexity: 4-6 months ($40K-$100K); Complex enterprise: 6-12 months ($100K-$300K+); Fintech apps: 6-10 months ($120K-$350K) including security compliance. Cross-platform development can reduce timelines by 40% compared to building separate native apps."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide post-launch support and maintenance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer 3 support tiers: Bronze ($500/month) with business hours support and 72-hour bug fixes; Silver ($1,200/month) with extended hours and 48-hour fixes; Gold ($2,500/month) with 24/7 support, 24-hour fixes, and dedicated manager. All plans include OS updates, security patches, crash monitoring, and analytics."
                }
            }
        ]
    };

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <AppTypes />
            <Process />
            <Technologies />
            <SecurityAndSEO />
            <CTA />
        </main>
    );
}
