/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production';

const repo = 'letisiapangataa.github.io'; // your repo name

module.exports = {
  output: 'export',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repo}` : '',
};
