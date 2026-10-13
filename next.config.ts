import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Verified separately via `npx tsc --noEmit`
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
