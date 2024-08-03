import path from 'path'
import tsConfig from './tsconfig.json'
import SitemapPlugin from 'sitemap-webpack-plugin'

const resolvedAliases = Object.fromEntries(
  Object.entries(tsConfig.compilerOptions.paths).map(([key, value]) => [
    key,
    path.resolve(__dirname, value[0]),
  ])
)

export default {
  webpack: {
    alias: resolvedAliases,
    plugins: [
      new SitemapPlugin({
        base: 'https://todevs.app',
        paths: [
          '/',
          '/changelog',
          '/terms-of-use',
          '/privacy-policy',
          '/about',
          '/contact',
          '*',
          '404',
        ],
        options: {
          filename: 'sitemap.xml',
        },
      }),
    ],
  },
}
