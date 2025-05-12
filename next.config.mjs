/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators
  devIndicators:  false,
  async rewrites() {
    return [
      {
        source: "/backend/:slug*",
        destination: "http://localhost:8080/:slug*",
      },
    ];
  },
};

export default nextConfig;
