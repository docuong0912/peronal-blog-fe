/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.IMAGE_HOST_DOMAIN,
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
