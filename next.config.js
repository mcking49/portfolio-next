/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['chauhan.nz', 'mitenchauhan.com'],
  },
}

module.exports = nextConfig
