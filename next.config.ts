import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Ensure crisp srcsets for fixed-size images (e.g., 200px, 760px in Hero)
    deviceSizes: [320, 375, 414, 640, 768, 1024, 1280, 1440, 1536, 1920],
    imageSizes: [200, 400, 600, 760, 920, 1520, 2280],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3845',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
