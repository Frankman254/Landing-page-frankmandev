import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.50.224"],
  images: {
    qualities: [75, 95],
  },
};

export default nextConfig;
