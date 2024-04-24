/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "viajes.nationalgeographic.com.es",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
