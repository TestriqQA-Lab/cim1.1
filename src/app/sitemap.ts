import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { blogPosts, categoryDetails, authors } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.cinuteinfomedia.com';

    // 1. Static Routes
    const staticRoutes: MetadataRoute.Sitemap = [
        '',
        '/about',
        '/contact',
        '/get-in-touch',
        '/blog',
        '/blog/categories',
        '/services',
        '/privacy-policy',
        '/terms-of-service',
        '/cookies-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Dynamic Service Routes (Recursive Crawler)
    const servicesPath = path.join(process.cwd(), 'src/app/services');
    const serviceRoutes: MetadataRoute.Sitemap = [];

    function crawlServices(currentPath: string, routePrefix: string) {
        if (!fs.existsSync(currentPath)) return;

        const items = fs.readdirSync(currentPath);
        items.forEach((item) => {
            const fullPath = path.join(currentPath, item);
            const relativeRoute = path.join(routePrefix, item).replace(/\\/g, '/');

            if (fs.statSync(fullPath).isDirectory()) {
                // If it's a directory, check if it has a page.tsx
                if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
                    serviceRoutes.push({
                        url: `${baseUrl}/services/${relativeRoute}`,
                        lastModified: new Date().toISOString(),
                        changeFrequency: 'weekly' as const,
                        priority: 0.9,
                    });
                }
                // Recurse into subdirectories
                crawlServices(fullPath, relativeRoute);
            }
        });
    }

    crawlServices(servicesPath, '');

    // 3. Dynamic Blog Routes
    const blogPostRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt).toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 4. Dynamic Category Routes
    const blogCategoryRoutes: MetadataRoute.Sitemap = categoryDetails.map((cat) => ({
        url: `${baseUrl}/blog/category/${cat.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    // 5. Dynamic Author Routes
    const blogAuthorRoutes: MetadataRoute.Sitemap = authors.map((author) => {
        const authorSlug = author.name.toLowerCase().replace(/\s+/g, '-');
        return {
            url: `${baseUrl}/blog/author/${authorSlug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        };
    });

    return [
        ...staticRoutes,
        ...serviceRoutes,
        ...blogPostRoutes,
        ...blogCategoryRoutes,
        ...blogAuthorRoutes,
    ];
}
