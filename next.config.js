/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['messukeskus.studio.crasman.fi'],
  },
}

module.exports = nextConfig
