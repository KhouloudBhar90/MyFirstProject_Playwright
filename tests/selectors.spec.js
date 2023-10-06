

import { test, expect } from '@playwright/test';

test ('Selectors demo', async ({page}) => {

await page.goto('https://www.saucedemo.com/');
await page.pause();

// select element using any object property
await page.click('id=user-name');
//or
//await page.locator('[id="user-name"]').click();

//Locator is a class in Playwright library
await page.locator('id=user-name').fill('standard_user');

/* Using XPath */

//await page.locator('xpath=//input[@name="password"]').fill('secret_sauce');
//or
await page.locator('//input[@name="password"]').fill('secret_sauce');

/* Using CSS selector */

await page.locator('#login-button').click();

/* Using Text */

await page.locator('text=LOGIN').click(); 
await page.locator('input:has-text("LOGIN")').click() 
});