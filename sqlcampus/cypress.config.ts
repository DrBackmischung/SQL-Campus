import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on;
      config;
    },
    supportFile: false,
  },
});