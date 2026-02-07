import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.dummyjson.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
