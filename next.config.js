/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "./",
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns:[
      // { protocol:'https', hostname:'tmb.imgix.net'}, 
      // { protocol:'https', hostname:'brownlist.imgix.net'}, 
      { protocol: 'https', hostname: 'storage.googleapis.com'},
      { protocol: 'https', hostname: 'ik.imagekit.io'}
    ]
  },
};

module.exports = nextConfig;