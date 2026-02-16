/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Allow access from other devices on your network
  allowedDevOrigins: [
    'http://10.0.0.241:3000',
    'http://localhost:3000',
  ],
}

module.exports = nextConfig