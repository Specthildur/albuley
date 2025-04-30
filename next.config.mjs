/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL("https://lastfm.freetls.fastly.net/i/u/**")],
    },
};

export default nextConfig;
