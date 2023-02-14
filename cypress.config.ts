import { defineConfig } from "cypress";

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    reporter: "cypress-multi-reporters",
    trashAssetsBeforeRuns: true,
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true,
      },
    },
    setupNodeEvents(on, config) {
      // modify config values examples
      // config.defaultCommandTimeout = 10000

      // IMPORTANT return the updated config object
      return config;
    },
  },
});