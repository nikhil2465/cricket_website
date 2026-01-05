/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  output: 'export',
  // Disable server-side rendering (SSR) for static export
  trailingSlash: true,
  // Optional: Add this if you're using next/image
  // images: {
  //   unoptimized: true,
  // },
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
