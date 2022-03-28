import path from 'path'
import tsConfig from './tsconfig.json'

const resolvedAliases = Object.fromEntries(
  Object.entries(tsConfig.compilerOptions.paths).map(([key, value]) => [
    key,
    path.resolve(__dirname, value[0]),
  ])
)

export default {
  webpack: {
    alias: resolvedAliases,
  },
}
