/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable server-side rendering of API routes
  output: 'export',
  
  // Disable API routes in static export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  
  // Disable server-side rendering for specific pages
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/programs': { page: '/programs' },
      '/contact': { page: '/contact' },
      // Add other static pages here
    };
  },
  
  // Disable API routes during build
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
  
  // Add any other necessary configurations
  reactStrictMode: true,
};
  // Note: The 'server' option should be configured in package.json scripts instead
};

// Set the port for the development server
const PORT = process.env.PORT || 3001;

module.exports = nextConfig;
