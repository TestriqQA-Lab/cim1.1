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
                destination: '/services/social-media-marketing',
                permanent: true,
            },
            {
                source: '/social-media',
                destination: '/services/social-media-marketing',
                permanent: true,
            },
            {
                source: '/services/web-design-development/portfolio-personal',
                destination: '/services/web-design-development/branding-services',
                permanent: true,
            },
            {
                source: '/cookie-policy',
                destination: '/privacy-policy',
                permanent: true,
            },
            {
                source: '/blog/linkedin-organic-hacks-grow-fast',
                destination: '/blog/7-best-linkedin-organic-hacks-to-grow-fast',
                permanent: true,
            },
            {
                source: '/blogecommerce-seo-for-high-conversion',
                destination: '/blog/ecommerce-seo-for-high-conversion',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
