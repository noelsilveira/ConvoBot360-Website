/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configure the images domain for caching, image optimization and other useful caveats for SEO and faster page loads
  images: {
    remotePatterns: [
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
