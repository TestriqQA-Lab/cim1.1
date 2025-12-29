import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.cinuteinfomedia.com';

    const routes = [
        '',
        '/about',
        '/contact',
        '/get-in-touch',
        '/blog',
        '/blog/categories',
        '/services',
        '/services/web-design-development',
        '/services/mobile-app-development',
        '/services/social-media-marketing',
        '/services/ai-workflows-automations',
        '/services/ai-powered-chatbots',
        '/services/organic-growth-seo',
        '/services/performance-marketing',
        '/services/brand-identity-design',
        '/services/additional-support-services',
        '/privacy-policy',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));
}
