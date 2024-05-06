/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Abode",
        permanent: true,
      },
    ]
  },
  experimental: {
    fontLoaders: [
      {
        loader: "next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
  },
}

module.exports = nextConfig
