/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  assetPrefix: isProd ? 'https://esikkala.github.io/venda.fi' : undefined
}

module.exports = nextConfig
