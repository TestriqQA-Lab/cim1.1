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
        ];
    },
};

export default nextConfig;
