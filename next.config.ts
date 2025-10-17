import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

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
  async redirects() {
    return [
      {
        source: '/politica-de-privacidade',
        destination: '/pt/privacy-policy',
        permanent: true,
      },
      {
        source: '/termos-de-uso',
        destination: '/pt/terms-of-use',
        permanent: true,
      },
      // Locale-prefixed PT legacy slugs
      {
        source: '/pt/politica-de-privacidade',
        destination: '/pt/privacy-policy',
        permanent: true,
      },
      {
        source: '/pt/termos-de-uso',
        destination: '/pt/terms-of-use',
        permanent: true,
      },
      // Spanish old slugs to new English-based paths (with locale prefix)
      {
        source: '/politica-de-privacidad',
        destination: '/es/privacy-policy',
        permanent: true,
      },
      {
        source: '/terminos-de-uso',
        destination: '/es/terms-of-use',
        permanent: true,
      },
      // Locale-prefixed ES legacy slugs
      {
        source: '/es/politica-de-privacidad',
        destination: '/es/privacy-policy',
        permanent: true,
      },
      {
        source: '/es/terminos-de-uso',
        destination: '/es/terms-of-use',
        permanent: true,
      },
    ];
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
