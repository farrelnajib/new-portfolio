import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/farrelnajib/new-portfolio/refs/heads/main/storage/assets/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
