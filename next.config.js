/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "./",
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns:[{
        protocol:'https',
        hostname:'tmb.imgix.net'
      }]
    },
};

module.exports = nextConfig;
