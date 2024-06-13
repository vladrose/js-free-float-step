import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    include: ["./**/*.spec.{ts,tsx}"],
    globals: true,
  }
})
