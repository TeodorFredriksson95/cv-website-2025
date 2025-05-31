import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.[jt]sx?$/] }, 
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
