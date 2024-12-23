/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";
import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'images.unsplash.com',
      },
      {
        protocol: "https",
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: "https",
        hostname: 'assets.aceternity.com',
      },
      {
        protocol: "https",
        hostname: 'i.ibb.co',
      },
    ]
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);


// ["images.unsplash.com", "res.cloudinary.com", 'assets.aceternity.com']