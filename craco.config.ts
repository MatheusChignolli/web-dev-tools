import path from 'path'
import tsConfig from './tsconfig.json'
import SitemapPlugin from 'sitemap-webpack-plugin'

const resolvedAliases = Object.fromEntries(
  Object.entries(tsConfig.compilerOptions.paths).map(([key, value]) => [
    key,
    path.resolve(__dirname, value[0]),
  ]),
)

export default {
  webpack: {
    alias: resolvedAliases,
    plugins: [
      new SitemapPlugin({
        base: 'https://todevs.app',
        paths: [
          { path: '/', changefreq: 'weekly', priority: 1.0 },
          { path: '/changelog', changefreq: 'weekly', priority: 0.8 },
          { path: '/about', changefreq: 'monthly', priority: 0.7 },
          { path: '/contact', changefreq: 'monthly', priority: 0.7 },
          { path: '/terms-of-use', changefreq: 'yearly', priority: 0.5 },
          { path: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
        ],
        options: {
          filename: 'sitemap.xml',
          lastmod: true,
          skipgzip: true,
        },
      }),
    ],
  },
}
