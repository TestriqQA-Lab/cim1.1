/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    images: {
        formats: ['image/avif', 'image/webp'],
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
