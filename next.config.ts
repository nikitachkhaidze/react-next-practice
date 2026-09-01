import type { NextConfig } from 'next';

const nextConfig: NextConfig = { 
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**'
            }
        ],
    }
};

export default nextConfig;
