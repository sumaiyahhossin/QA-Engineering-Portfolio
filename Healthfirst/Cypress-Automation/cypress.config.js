const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    baseUrl: "http://127.0.0.1:4173",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
