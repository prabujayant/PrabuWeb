import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
};

export default withMDX(nextConfig);
