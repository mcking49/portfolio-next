/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['chauhan.nz', 'mitenchauhan.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
