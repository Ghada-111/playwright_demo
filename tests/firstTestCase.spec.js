const { test, expect } = require('@playwright/test');

test('login to nopcommerce', async ({ page }) => {
    
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2');

    //await page.pause()

    await expect(page).toHaveTitle('Your store. Login')

    await page.locator('id=Email').fill('admin@yourstore.com')
    await page.locator('id=Password').fill('admin')

    //await page.locator('xpath=//button[@type="submit"]').click();

    await page.click('xpath=//button[@type="submit"]')

    await page.close()
 
});