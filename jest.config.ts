import tsConfig from './tsconfig.json'

const resolvedAliases = Object.fromEntries(
  Object.entries(tsConfig.compilerOptions.paths).map(([key, value]) => [
    `^${key}(.*)$`,
    `<rootDir>${value[0].replace('./', '/')}$1`,
  ])
)

const config = {
  verbose: true,
  maxWorkers: 2,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(svg|css|less|sass|scss|png|jpg|ttf|woff|woff2|md)$':
      'jest-transform-stub',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleNameMapper: resolvedAliases,
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/App.tsx',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/tests/mocks/*',
  ],
  coverageThreshold: {
    global: {
      branches: 99,
      functions: 99,
      lines: 99,
      statements: 99,
    },
  },
  testTimeout: 20000,
}

export default config
