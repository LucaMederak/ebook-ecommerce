/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
  pageExtensions: ["page.tsx", "page.ts"],
};

module.exports = nextConfig;
