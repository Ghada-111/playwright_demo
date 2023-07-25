// allow me to use the scripts of the modules under the playwright test package
const{test, expect} = require('@playwright/test')
 

test('My second test case ', async ({browser}) => {
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto('https://www.google.com/')
   console.log(page.title());
   await expect(page).toHaveTitle('Google')
}) 