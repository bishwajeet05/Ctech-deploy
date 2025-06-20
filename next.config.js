/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'placehold.co',
      'assets.aceternity.com',
      'localhost',
      'cardatec.sarptechnologies.com',
      'ngrok.io',
      'ngrok-free.app',
      '13.232.100.77'  // Add your EC2 IP
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true // Temporarily ignore build errors
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ],
  // Add production URL configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? 'http://13.232.100.77' : '',
  // Enable custom server host and port
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  publicRuntimeConfig: {
    baseUrl: process.env.NODE_ENV === 'production' ? 'http://13.232.100.77' : 'http://localhost:3000',
  },
}

module.exports = nextConfig