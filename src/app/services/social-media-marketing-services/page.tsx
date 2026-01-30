import dynamic from 'next/dynamic';
import Hero from '@/components/services/social-media-marketing-services/Hero';
import ServiceOverview from '@/components/services/social-media-marketing-services/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/social-media-marketing-services/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfServices = dynamic(() => import('@/components/services/social-media-marketing-services/TypesOfServices'), {
    loading: () => <div className="py-20" />,
});
const Platforms = dynamic(() => import('@/components/services/social-media-marketing-services/Platforms'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/social-media-marketing-services/Process'), {
    loading: () => <div className="py-20" />,
});
const Analytics = dynamic(() => import('@/components/services/social-media-marketing-services/Analytics'), {
    loading: () => <div className="py-20" />,
});
const SocialMediaFAQ = dynamic(() => import('@/components/services/social-media-marketing-services/SocialMediaFAQ'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/social-media-marketing-services/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Social Media Marketing Services | Top-Rated SMM Agency for 300% ROI',
    description: "Explode your brand's growth with our expert Social Media Marketing Services. Global SMM Agency specializing in Strategy, Paid Ads & Content. Get a Free Audit!",
    url: '/services/social-media-marketing-services',
    keywords: [
        'Social Media Marketing Services',
        'Social Media Management Company',
        'Instagram Marketing Agency',
        'Facebook Ad Management',
        'LinkedIn B2B Marketing',
        'Paid Social Media Advertising',
        'Social Media Content Strategy',
    ],
});

export default function SocialMediaMarketingPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Social Media Marketing',
        description: 'Expert Social Media Marketing Services focused on ROI, community growth, and brand authority. Top-rated agency for startups to enterprise.',
        urlPath: '/services/social-media-marketing-services',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Social Media Marketing', url: '/services/social-media-marketing-services' },
    ]);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the benefits of hiring a social media marketing agency?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hiring a professional Social Media Marketing Agency gives you access to expert strategists, advanced tools, and industry best practices without the overhead of an in-house team. We ensure consistent branding, targeted reach, and higher ROI by leveraging data-driven strategies and multi-channel social strategy."
                }
            },
            {
                "@type": "Question",
                "name": "How much do social media management services cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our social media management services are customized to your specific needs and goals. Whether you need affordable social media management for startups or a comprehensive enterprise solution, we offer flexible packages. Contact us for a custom quote tailored to your budget."
                }
            },
            {
                "@type": "Question",
                "name": "Which social media platforms are best for my business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best platforms depend on your target audience and industry. For B2B, LinkedIn marketing services are essential. For visual brands and ecommerce, Instagram and Pinterest are key. We conduct a thorough social media audit and analysis to recommend the most effective mix for you."
                }
            },
            {
                "@type": "Question",
                "name": "How do I measure the ROI of social media marketing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We track specific Key Performance Indicators (KPIs) such as conversion rates, lead generation costs, and direct sales. Our social media reporting and analytics services provide transparent insights, showing you exactly how our efforts translate into revenue."
                }
            },
            {
                "@type": "Question",
                "name": "What is included in social media management services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our full-service social media marketing company packages typically include strategy development, content creation, community management, paid advertising, and monthly reporting. We also offer specialized add-ons like influencer marketing management services."
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <TypesOfServices />
            <Platforms />
            <Process />
            <Analytics />
            <SocialMediaFAQ />
            <CTA />
        </main>
    );
}
