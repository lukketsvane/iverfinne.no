// next.config.mjs
import rehypeMermaid from 'rehype-mermaid';

import { createLoader } from "@mdx-js/loader";
import { defineConfig } from "next";

export default defineConfig({
  async redirects() {
    return [
      {
        source: "/books/:slug*",
        destination: "/reading/:slug*",
        permanent: true,
      },
    ];
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeMermaid],
  },
});
