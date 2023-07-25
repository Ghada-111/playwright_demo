const { test, expect } = require('@playwright/test');
//import {test, expect} from '@playwright/test'

test('alert', async ({ page }) => {
  
  // Navigate to the demoqa website
  await page.goto('https://demoqa.com/alerts');

  // Click on the element with id "alertButton"
  //await page.waitForSelector('#alertButton', { state: 'visible' });
 
  await page.click('#alertButton');
  await page.waitForTimeout(4000);

  // Wait for the alert to appear and accept it
  page.on('dialog', async (dialog) => {
    await dialog.accept();
  });

 
});
