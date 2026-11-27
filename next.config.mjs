/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/mtwapa-cbo",
  assetPrefix: "/mtwapa-cbo",
  poweredByHeader: false,
};

export default nextConfig;
