import Hero from '@/components/services/Hero';
import ServicesList from '@/components/services/ServicesList';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import Process from '@/components/services/Process';
import CTA from '@/components/services/CTA';
import { getPageMetadata } from '@/lib/metadata';
import { generateBlogCollectionSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Digital Solutions & Services | Cinute InfoMedia',
    description: 'Explore our comprehensive digital services including web development, mobile apps, SEO, social media marketing, AI automation, and more. Transform your business with CIM.',
    url: '/services',
    keywords: ['web development services', 'mobile app solutions', 'SEO agency', 'AI automation consultants'],
});

export default function ServicesPage() {
    const schema = generateBlogCollectionSchema(
        'Our Services',
        'Comprehensive digital services for business growth.',
        '/services'
    );

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Hero />
            <ServicesList />
            <WhyChooseUs />
            <Process />
            <CTA />
        </main>
    );
}
