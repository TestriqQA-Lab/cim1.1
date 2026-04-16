import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { client } from "@/sanity/lib/client";
import { allPostsQuery, categoriesQuery, authorsQuery } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.cinuteinfomedia.com';

    // Build-time constant — only update when static content actually changes
    const staticLastModified = '2026-04-16T00:00:00.000Z';

    // 1. Static Routes (with realistic, stable lastModified dates)
    const staticRoutes: MetadataRoute.Sitemap = [
        { route: '', priority: 1, changeFrequency: 'weekly' as const },
        { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
        { route: '/get-in-touch', priority: 0.7, changeFrequency: 'monthly' as const },
        { route: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
        { route: '/blog/categories', priority: 0.6, changeFrequency: 'weekly' as const },
        { route: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
        { route: '/careers', priority: 0.7, changeFrequency: 'weekly' as const },
        { route: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
        { route: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
        { route: '/cookies-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    ].map((item) => ({
        url: `${baseUrl}${item.route}`,
        lastModified: staticLastModified,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
    }));

    // 2. Dynamic Service Routes (Recursive Crawler with file mtime)
    const servicesPath = path.join(process.cwd(), 'src/app/services');
    const serviceRoutes: MetadataRoute.Sitemap = [];

    function crawlServices(currentPath: string, routePrefix: string) {
        if (!fs.existsSync(currentPath)) return;

        const items = fs.readdirSync(currentPath);
        items.forEach((item) => {
            const fullPath = path.join(currentPath, item);
            const relativeRoute = path.join(routePrefix, item).replace(/\\/g, '/');

            if (fs.statSync(fullPath).isDirectory()) {
                const pagePath = path.join(fullPath, 'page.tsx');
                // If it's a directory with a page.tsx, add to sitemap
                if (fs.existsSync(pagePath)) {
                    // Use actual file modification time for reliable lastmod
                    const stat = fs.statSync(pagePath);
                    serviceRoutes.push({
                        url: `${baseUrl}/services/${relativeRoute}`,
                        lastModified: stat.mtime.toISOString(),
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

    // Fetch data from Sanity (with error handling for build resilience)
    let blogPostRoutes: MetadataRoute.Sitemap = [];
    let blogCategoryRoutes: MetadataRoute.Sitemap = [];
    let blogAuthorRoutes: MetadataRoute.Sitemap = [];

    try {
        const [posts, categories, authors] = await Promise.all([
            client.fetch(allPostsQuery),
            client.fetch(categoriesQuery),
            client.fetch(authorsQuery),
        ]);

        // 3. Dynamic Blog Routes (using actual publishedAt dates)
        blogPostRoutes = posts.map((post: any) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.publishedAt).toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        // 4. Dynamic Category Routes
        blogCategoryRoutes = categories.map((cat: any) => ({
            url: `${baseUrl}/blog/category/${cat.slug}`,
            lastModified: staticLastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }));

        // 5. Dynamic Author Routes
        blogAuthorRoutes = authors.map((author: any) => {
            return {
                url: `${baseUrl}/blog/author/${author.slug}`,
                lastModified: staticLastModified,
                changeFrequency: 'monthly' as const,
                priority: 0.5,
            };
        });
    } catch (error) {
        console.warn('Warning: Failed to fetch Sanity data for sitemap. Blog routes will be excluded.', error);
    }

    return [
        ...staticRoutes,
        ...serviceRoutes,
        ...blogPostRoutes,
        ...blogCategoryRoutes,
        ...blogAuthorRoutes,
    ];
}
