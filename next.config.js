/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  basePath: isProd ? '/venda.fi': undefined,
  assetPrefix: isProd ? '/venda.fi' : undefined,
}

module.exports = nextConfig
