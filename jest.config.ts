import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  "verbose": true,
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.ts"
  ]
}

export default config;