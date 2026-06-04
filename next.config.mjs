/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/social-media-services',
                destination: '/services/social-media-marketing-services',
                permanent: true,
            },
            {
                source: '/social-media',
                destination: '/services/social-media-marketing-services',
                permanent: true,
            },
            // T-1: case-sensitive routing — 301 lowercase variants to the actual (mixed-case)
            // URLs so external lowercase links/typos don't 404. (Owner may later lowercase the
            // Sanity slug 'organic-growth-seo-Guide' in Studio and flip this redirect.)
            {
                source: '/blog/organic-growth-seo-guide',
                destination: '/blog/organic-growth-seo-Guide',
                permanent: true,
            },
            {
                source: '/services/mobile-app-development/harmony-os-app-development-services',
                destination: '/services/mobile-app-development/harmony-OS-app-development-services',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
