/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.starbrightlab.com'],
    unoptimized: true, // This disables the Image Optimization API for static export
  },
  // Using the newer recommended approach for static exports
  output: 'export',
  webpack(config) {
    // SVG Configuration
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
