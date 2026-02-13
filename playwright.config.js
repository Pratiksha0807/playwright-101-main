const { defineConfig } = require('@playwright/test');
function getLTConfig(browser, testName) {
  return {
    browserName: 'chromium', // Playwright side (always chromium for CDP)
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
        browserName: browser,  // LambdaTest side
        browserVersion: 'latest',
        'LT:Options': {
          platform: 'Windows 10',
          build: 'Playwright Multi Browser Build',
          name: testName,
          user: process.env.LT_USERNAME,
          accessKey: process.env.LT_ACCESS_KEY,
          video: true,
          network: true,
          console: true
        }
      }))}`
    }
  };
}

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  workers: 3,

  projects: [
    {
      name: 'Chrome',
      use: getLTConfig('Chrome', 'Chrome Test')
    },
    {
      name: 'MicrosoftEdge',
      use: getLTConfig('MicrosoftEdge', 'Edge Test')
    },
    {
      name: 'pw-firefox',
      use: getLTConfig('pw-firefox', 'Firefox Test')
    }
  ]
});

