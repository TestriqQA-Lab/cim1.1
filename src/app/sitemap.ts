import { MetadataRoute } from 'next';
import { blogPosts, authors, categoryDetails } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.cinuteinfomedia.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/blog/categories',
        '/services',
        '/privacy-policy',
        '/terms-of-service',
        '/cookies-policy',
        '/get-in-touch',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Service routes
    const services = [
        'web-design-development',
        'mobile-app-development',
        'ai-workflows-automations',
        'ai-powered-chatbots',
        'brand-identity-design',
        'organic-growth-seo',
        'performance-marketing',
        'social-media-marketing',
        'additional-support-services',
    ].map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Blog Dynamic Routes
    const postRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Category Dynamic Routes
    const catRoutes = categoryDetails.map((category) => ({
        url: `${baseUrl}/blog/category/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    // Author Dynamic Routes
    const authorRoutes = authors.map((author) => ({
        url: `${baseUrl}/blog/author/${author.name.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    return [...routes, ...services, ...postRoutes, ...catRoutes, ...authorRoutes];
}
