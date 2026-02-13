const { defineConfig } = require('@playwright/test');

/*module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: "https://www.lambdatest.com",
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
  },
  projects: capabilities.map(capability => ({
    name: capability['LT:Options']['name'],
    use: {
      browserName: capability.browserName,
      ...capability['LT:Options'],
    },
  })),
  workers: 3
});*/

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  workers: 3,

  use: {
    browserName: 'chromium',
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
        browserName: 'Chrome',
        browserVersion: 'latest',
        'LT:Options': {
          platform: 'Windows 10',
          build: 'Playwright 101 Certification Build',
          name: 'Playwright Cloud Test',
          user: process.env.LT_USERNAME,
          accessKey: process.env.LT_ACCESS_KEY,
          video: true,
          network: true,
          console: true
        }
      }))}`
    }
  }
});
