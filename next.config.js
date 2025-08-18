/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/staking-community-version' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/staking-community-version/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  transpilePackages: ['viem'],
};

module.exports = nextConfig;
