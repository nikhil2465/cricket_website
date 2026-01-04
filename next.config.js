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
  // Development server configuration
  devIndicators: {
    buildActivity: true,
  },
  // Use port 3001 by default
  devServer: {
    port: 3001,
  },
};

// Set the port for the development server
const PORT = process.env.PORT || 3001;

module.exports = nextConfig;
