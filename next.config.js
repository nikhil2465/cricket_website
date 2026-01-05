/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Note: The 'server' option should be configured in package.json scripts instead
};

// Set the port for the development server
const PORT = process.env.PORT || 3001;

module.exports = nextConfig;
