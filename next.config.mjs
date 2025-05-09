/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images.dzcdn.net",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "api.deezer.com",
        pathname: "/album/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sign-up",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
