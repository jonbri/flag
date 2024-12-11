import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/flag" : undefined,
  reactStrictMode: true,
};

export default nextConfig;
