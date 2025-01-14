import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental"
  },
  paths: {
    "@/app/*": ["app/*"]
  }
};

export default nextConfig;
