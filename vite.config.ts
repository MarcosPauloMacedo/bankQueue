import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        coverage: {
          provider: 'istanbul', // or 'v8',
          reporter: ['text', 'html', 'lcov'],
        },
      },
})