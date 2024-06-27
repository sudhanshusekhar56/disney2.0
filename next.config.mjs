/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "famnetworks.com",
      },
    ],
  },
};

export default nextConfig;
