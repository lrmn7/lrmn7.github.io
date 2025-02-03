/** @type {import('next').NextConfig} */

module.exports = {
  // Remove redirects cuz we are using static export
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["res.cloudinary.com", "cdn.meww.me"],
    unoptimized: true, // Disable Image Optimization
  },
  compiler: {
    removeConsole: true,
  },
};
