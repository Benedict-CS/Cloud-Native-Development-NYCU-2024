import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    pool: 'forks',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json'], // list of reporters
      reportsDirectory: './coverage', // target directory for coverage reports
      exclude: [
        'coverage-compare/**' // Exclude specific file
        // You can add more patterns to exclude other files or directories
      ],
      thresholds: {
        branches: 55.55,
        autoUpdate: true
      }
    }
  }
})
