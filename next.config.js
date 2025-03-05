/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'placehold.co',
      'assets.aceternity.com', // If you're using these demo images
      'localhost'
    ],
  },
}

module.exports = nextConfig