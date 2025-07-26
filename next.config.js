/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // No basePath or assetPrefix needed for username.github.io deployment
}

module.exports = nextConfig
