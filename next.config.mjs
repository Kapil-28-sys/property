/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/proxy/:path*",
        destination: "http://property.concentics.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;