import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    pool: 'forks',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json'], // list of reporters
      reportsDirectory: './coverage', // target directory for coverage reports
      exclude: ['coverage-compare/**'],
      thresholds: {
        lines: 58.28,
        branches: 71.42,
        functions: 23.07,
        statements: 58.28,
        autoUpdate: true
      }
    }
  }
})
