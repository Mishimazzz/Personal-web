import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Personal-web/out', 
  assetPrefix: '/Personal-web/out/', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
