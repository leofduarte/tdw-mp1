import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://lduarte.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
