// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {

//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: { and: [/\.[jt]sx?$/] }, 
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
//   reactStrictMode: true,
// };

// export default nextConfig;

// next.config.ts

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js', 
      },
    },
  },
  reactStrictMode: true,
};

export default nextConfig;

