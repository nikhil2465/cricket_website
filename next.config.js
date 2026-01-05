/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Configure images for static export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  
  // Define static pages for export
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/programs': { page: '/programs' },
      '/contact': { page: '/contact' },
      // Add other static pages here
    };
  },
  
  // Configure webpack to exclude server-side modules
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude server-side only modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
      };
    }
    return config;
  },
  
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,
};

module.exports = nextConfig;

// Set the port for the development server
const PORT = process.env.PORT || 3001;

module.exports = nextConfig;
