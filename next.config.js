/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "./",
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns:[{
        protocol:'https',
        hostname:'tmb.imgix.net'
      }
      // , {
      //   protocol: 'https',
      //   hostname: 'nftstorage',
      //   pathname: '**'
      // }
      // , {
      //   protocol: 'https',
      //   hostname: 'bafkreid5yasqlpflxg2fq7irzs5mgisvq7waskc5t2tf7nlrkqtaeaj3wm',
      //   pathname: '**'
      // }
    ],
    domains:['bafkreihjag3e6uz3ykuzjfsu6qlvyejznug5maz3z2hha3a2ufo5xhxjxi.ipfs.nftstorage.link', 'bafkreid5yasqlpflxg2fq7irzs5mgisvq7waskc5t2tf7nlrkqtaeaj3wm.ipfs.nftstorage.link']
    },
};

module.exports = nextConfig;
