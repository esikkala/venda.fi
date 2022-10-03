/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // For GitHub pages:
  basePath: isProd ? '/venda.fi': undefined,
  assetPrefix: isProd ? '/venda.fi' : undefined,
  // For Zone webhotel:
  // basePath: isProd ? '': undefined,
  // assetPrefix: isProd ? '' : undefined,
}

module.exports = nextConfig
