import path from 'path'
import alias from './src/commons/configs/aliases'

const SRC = './src'
const aliases = alias(SRC)

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
)

export default {
  webpack: {
    alias: resolvedAliases,
  },
}
