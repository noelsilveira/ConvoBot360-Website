/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedForwardedHosts: [
        'http://localhost',
        'https://4g6t0dcg-3000.inc1.devtunnels.ms',
      ],
      allowedOrigins: [
        'http://localhost',
        'localhost:3000',
        'https://4g6t0dcg-3000.inc1.devtunnels.ms',
      ],
    },
  },

  // Configure the images domain for caching, image optimization and other useful caveats for SEO and faster page loads
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '10.2.2.155',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.convobot360.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.convobot360.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'ddkrestaurant.com',
        pathname: '**',
      },

      {
        protocol: 'https',
        hostname: 'sendbip.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
