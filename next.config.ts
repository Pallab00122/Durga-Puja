// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['placehold.co'],
//   },
// };

// module.exports = nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Disable dev tools overlay
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Disable the dev tools overlay
      config.resolve.alias = {
        ...config.resolve.alias,
        'next/dist/client/dev-overlay': false,
      };
    }
    return config;
  },
};

export default nextConfig;
