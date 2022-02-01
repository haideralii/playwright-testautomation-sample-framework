// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const { devices } = require("@playwright/test");

const envName = require("./environments/all-envs");
if (process.env.environment.trim() == envName.qa) {
  var getEnv = require("./environments/qa-env");
} else if (process.env.environment.trim() == envName.dev) {
  var getEnv = require("./environments/dev-env");
  console.log(`${getEnv.baseUrl}`);
} else if (process.env.environment.trim() == envName.prod) {
  var getEnv = require("./environments/prod-env");
}

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  // Look for test files in the "tests" directory, relative to this configuration file
  testDir: "tests",
  snapshotDir: "snapshots",

  // Each test is given 30 seconds
  // timeout: 30000,

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,

  // Two retries for each test
  // retries: 2,

  use: {
    baseURL: `${getEnv.baseUrl}`,
    headless: false,
    viewport: { width: 1500, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    // workers: 4,

    // video: 'on-first-retry',
    trace: "on",
    // actionTimeout: 30000 // this is the timeout for every individual action
  },

  launchOptions: {
    slowMo: 0,
  },
  // reporter: [['list']],

  timeout: 0, // this is the timeout for each individual test(step)
  globalTimeout: 1800000, // this is the maximum duration for the entire suite. Setting this to prevent a CI build from locking up indefinitely
  reportSlowTests: { max: 0, threshold: 300000 }, // reports on slow tests, this will inform us when tests are slowing down.

  projects: [
    {
      name: "Desktop Chromium",
      use: {
        browserName: "chromium",
        channel: "chrome",
      },
    },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     browserName: 'webkit',
    //     viewport: { width: 1200, height: 750 },
    //   }
    // },
    // Test against mobile viewports.
    // {
    //   name: 'Mobile Chrome',
    //   use: devices['Pixel 5'],
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    // },
    // {
    //   name: 'Desktop Firefox',
    //   use: {
    //     browserName: 'firefox',
    //     viewport: { width: 800, height: 600 },
    //   }
    // },
  ],
};

module.exports = config;
