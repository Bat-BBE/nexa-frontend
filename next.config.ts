import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "8000" },
      { protocol: "http", hostname: "127.0.0.1", port: "8000" },
      // Add your deployed API's host here once Nexa backend is hosted, e.g.:
      // { protocol: "https", hostname: "api.nexa.mn" },
    ],
  },
};

export default nextConfig;
