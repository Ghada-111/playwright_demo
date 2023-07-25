const { test, expect } = require('@playwright/test');
test('right click', async ({ page }) => {
     // Navigate to the demoqa website
  await page.goto('https://demoqa.com/buttons');

  // Find the button for right-click
  const btnRightClick = await page.$('#rightClickBtn');

  // Perform a right-click action using Playwright's context menu API
  await btnRightClick.click({ button: 'right' });
      await page.waitForTimeout(2000);


   // Wait for the message element to appear and get its text
   await page.waitForSelector('#rightClickMessage');
   const messageElement = await page.$('#rightClickMessage');
   const message = await messageElement.textContent();

     // Verify if the message text is as expected
  const expectedMessage = 'You have done a right click';
  if (message === expectedMessage) {
    console.log('Test Passed!');
  } else {
    console.log('Test Failed!');
  }
});