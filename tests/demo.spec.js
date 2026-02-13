const { test, expect } = require('@playwright/test');


test.describe("Playwright 101 Test Scenario", () => {

  test('Test Scenario 1', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await page.click('text=Checkbox Demo');
    await expect(page).toHaveURL(/checkbox-demo/);

  });

  test('Test Scenario 5', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await page.click('text=Checkbox Demo');
    await expect(page).toHaveURL(/checkbox-demo/);

  });

});



// test.describe("Playwright 101 Test Scenario", ()=>{
//     test('Test Scenario 1', async ({ browserName }) => 
//         {

          
//           const capabilities = require('../config/capabilities');
//           console.log(process.env.LT_USERNAME);
//           console.log();
//    // console.log(`Connecting to: wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`);

//           const capability = capabilities.find(cap => cap.browserName === browserName);
        
//           if (!capability) {
//             throw new Error(`No capability found for browser: ${browserName}`);
//           }
        
//           const browser = await connectToBrowser(capability);
//           const page = await browser.newPage();
        
//           try {
//             await page.goto('https://www.lambdatest.com/selenium-playground/');
//             await page.click('text=Checkbox Demo');
//             await expect(page).toHaveURL(/checkbox-demo/);
           
//           //   const message = 'Welcome to LambdaTest';
//           //   await page.fill('#user-message', message);
//           //   await page.click('#showInput');
//           //   const displayedMessage = await page.textContent('#message');
//           //   expect(displayedMessage).toBe(message);
//           //   console.log('Test Passed: The correct message is displayed.');

//           //   await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Scenario 1 Passed' } })}`);
//           // } catch (e) {
//           //       await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`);
//           //       throw e;
//           } finally {
//                 await teardown(page, browser);
//           }
//     });
//     test('Test Scenario 5', async ({ browserName }) => 
//         {

          
//           const capabilities = require('../config/capabilities');
//           console.log(process.env.LT_USERNAME);
//           console.log();
//    // console.log(`Connecting to: wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`);

//           const capability = capabilities.find(cap => cap.browserName === browserName);
        
//           if (!capability) {
//             throw new Error(`No capability found for browser: ${browserName}`);
//           }
        
//           const browser = await connectToBrowser(capability);
//           const page = await browser.newPage();
        
//           try {
//             await page.goto('https://www.lambdatest.com/selenium-playground/');
//             await page.click('text=Checkbox Demo');
//             await expect(page).toHaveURL(/checkbox-demo/);
           
//           //   const message = 'Welcome to LambdaTest';
//           //   await page.fill('#user-message', message);
//           //   await page.click('#showInput');
//           //   const displayedMessage = await page.textContent('#message');
//           //   expect(displayedMessage).toBe(message);
//           //   console.log('Test Passed: The correct message is displayed.');

//           //   await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Scenario 1 Passed' } })}`);
//           // } catch (e) {
//           //       await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`);
//           //       throw e;
//           } finally {
//                 await teardown(page, browser);
//           }
//     });
//     test.skip('Test Scenario 2', async ({ browserName }) => 
//         {
//           const capabilities = require('../config/capabilities');
//           const capability = capabilities.find(cap => cap.browserName === browserName);
        
//           if (!capability) {
//             throw new Error(`No capability found for browser: ${browserName}`);
//           }
        
//           const browser = await connectToBrowser(capability);
//           const page = await browser.newPage();
        
//           try {
//             await page.goto('/selenium-playground');
//             await page.click('text=Drag & Drop Sliders');
//             const slider = await page.$('input[type="range"]');

//             await slider.evaluate((slider) => {
//                 slider.value = 95;
//                 slider.dispatchEvent(new Event('input')); 
//               });
           
//               const sliderValue = await page.$eval('input[type="range"]', (el) => el.value);
//               console.log('Slider value:', sliderValue);
//               if (sliderValue === '95') {
//                 console.log('Test Passed: Slider value is 95');
//               } else {
//                 console.log('Test Failed: Slider value is not 95');
//               }

//               await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Scenario 2 Passed'  } })}`);
//           } catch (e) {
//                 await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`);
//                 throw e;
//           } finally {
//                 await teardown(page, browser);
//           }
//     });

//     test.skip('Test Scenario 3', async ({ browserName }) => 
//         {
//           const capabilities = require('../config/capabilities');
//           const capability = capabilities.find(cap => cap.browserName === browserName);
        
//           if (!capability) {
//             throw new Error(`No capability found for browser: ${browserName}`);
//           }
        
//           const browser = await connectToBrowser(capability);
//           const page = await browser.newPage();
        
//           try {
//             await page.goto('/selenium-playground');
//             await page.click('text=Input Form Submit');
//             await page.click('//div//button[@type="submit" and text()="Submit"]');

//             const errorMessage = await page.isVisible('div[class="alert alert-danger"]');
//             if (errorMessage) {
//                 console.log('Error message shown: "Please fill in the fields"');
//             } else {
//                 console.log('Error message not displayed.');
//             }
           
//             await page.fill('input[name="name"]', 'Pratiksha Gollar');
//             await page.fill('input[placeholder="Email"]', 'pratiksha.bgollar@example.com');
//             await page.fill('[type="password"]', 'Password@123');
//             await page.fill('[id="company"]', 'Persistent System'); 
//             await page.fill('[id="websitename"]', 'https://www.persistent.com/company-overview/');
//             await page.selectOption('select[name="country"]', { label: 'United States' });
//             await page.fill('[name="city"]', 'New York');
//             await page.fill('[id="inputAddress1"]', '601 West 26th St');
//             await page.fill('[id="inputAddress2"]', 'Suite 905'); 
//             await page.fill('[id="inputState"]', 'New York');
//             await page.fill('[id="inputZip"]', '10001');
//             await page.click('//div//button[@type="submit" and text()="Submit"]');

//             const element = await page.locator('[class="success-msg hidden"]'); 
//             await element.scrollIntoViewIfNeeded();
//             const successMessageLocator = await page.locator('[class="success-msg hidden"]');
//             await expect(successMessageLocator).toContainText('Thanks for contacting us, we will get back to you shortly.');

//             await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Scenario 3 Passed'  } })}`);
//           } catch (e) {
//                 await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`);
//                 throw e;
//           } finally {
//                 await teardown(page, browser);
//           }
//     });

// })