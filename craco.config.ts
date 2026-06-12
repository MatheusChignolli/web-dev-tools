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
    configure: (webpackConfig: { plugins: unknown[] }) => {
      webpackConfig.plugins.push({
        apply: (compiler: {
          webpack: { sources: { RawSource: new (value: string) => unknown } }
          hooks: {
            compilation: {
              tap: (name: string, callback: (compilation: unknown) => void) => void
            }
          }
        }) => {
          compiler.hooks.compilation.tap(
            'FontDisplayOptionalPlugin',
            (compilation) => {
              const { hooks, PROCESS_ASSETS_STAGE_OPTIMIZE } = compilation as {
                PROCESS_ASSETS_STAGE_OPTIMIZE: number
                hooks: {
                  processAssets: {
                    tap: (
                      options: { name: string; stage: number },
                      handler: (
                        assets: Record<string, { source: () => Buffer | string }>,
                      ) => void,
                    ) => void
                  }
                }
              }

              hooks.processAssets.tap(
                {
                  name: 'FontDisplayOptionalPlugin',
                  stage: PROCESS_ASSETS_STAGE_OPTIMIZE,
                },
                (assets) => {
                  Object.entries(assets).forEach(([assetName, asset]) => {
                    if (!assetName.endsWith('.css')) return

                    const source = asset.source().toString()
                    const updated = source.replace(
                      /font-display:\s*swap/g,
                      'font-display:optional',
                    )

                    if (updated !== source) {
                      assets[assetName] = new compiler.webpack.sources.RawSource(
                        updated,
                      ) as (typeof assets)[string]
                    }
                  })
                },
              )
            },
          )
        },
      })

      return webpackConfig
    },
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
