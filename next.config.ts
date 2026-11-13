import type { NextConfig } from "next";

// Sajt se izvozi kao statičan (folder `out`) za Cloudflare Pages.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
