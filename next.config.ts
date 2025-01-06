import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Personal-web', 
  assetPrefix: '/Personal-web', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
