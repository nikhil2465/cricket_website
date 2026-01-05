/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable API routes during build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude API routes that use server-side code
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
        'mongodb': false,
        'mongodb-client-encryption': false,
        'aws4': false,
        'snappy': false,
        'gcp-metadata': false,
        'kerberos': false,
        'socks': false,
        'mongodb-memory-server': false
      };
    }
    return config;
  },
  // Exclude API routes from static generation
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/programs': { page: '/programs' },
      '/contact': { page: '/contact' },
      // Add other static pages here
    };
    return paths;
  },
};

module.exports = nextConfig;
