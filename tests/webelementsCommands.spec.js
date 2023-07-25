const { test, expect } = require('@playwright/test');

test('webelemnts commands', async ({ page }) => {
     // Navigate to the Mercury Application
  await page.goto('https://demo.guru99.com/test/newtours/login.php');
  await page.waitForTimeout(2000);


  // Find the username input field and interact with it

  const userName = await page.locator('input[name="userName"]');
  userName.fill('test');
 await page.waitForTimeout(1000);
  // Get and print the name of the "name" attribute for the username input field
  const attValue = await userName.getAttribute('name');
  console.log('The name of the attribute is: ' + attValue);

  // Find the password input field and interact with it

  const password = await page.locator('input[name="password"]');
  await password.fill('Test');

  // Get the size (height and width) of the username input field
  const dimensions = await userName.boundingBox();
 console.log('UserName Height: ' + dimensions.height + 'userName Width: ' + dimensions.width);

  // Get the location (x and y coordinates) of the password input field

  const point = await password.boundingBox();
  console.log('X coordinate: ' + point.x + ' Y coordinate: ' + point.y);
    // Verify if the "submit" button is displayed
    const btnSubmit = await page.locator('input[name="submit"]');
    await page.waitForTimeout(2000);

    const result1 = await btnSubmit.isVisible();
    console.log(result1);
     // Verify if the "submit" button is enabled
  const result2 = await btnSubmit.isEnabled();
  console.log(result2);

  // Verify if the "submit" button exists
  const btnSubmit1 = await page.locator('input[name="submit"]').count();
  if (btnSubmit1 !== 0) {
    console.log('Button is exist');
  } else {
    console.log('Button is not exist');
  }

});

