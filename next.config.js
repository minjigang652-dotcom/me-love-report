/** @type {import('next').NextConfig} */
const repo = 'me-love-report';
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};
module.exports = nextConfig;
