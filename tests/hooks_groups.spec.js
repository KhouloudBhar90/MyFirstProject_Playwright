// @ts-check


import { test, expect } from '@playwright/test';

test.describe('Customers Shopping', () => {

  test.beforeEach(async ({ page}) => {

    // Go to the starting url before each test.
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.pause();
  });
  

  test('Checkout', async({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('a').filter({ hasText: '1' }).click();
    await expect (page.getByText('Your Cart')).toBeVisible();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('KHOULOUD');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('BHAR');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('0941');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect (page.getByRole('heading', { name: 'Thank you for your order!' })).toHaveText('Thank you for your order!');
    await page.locator('[data-test="back-to-products"]').click();
  })

  test('Logout', async ({ page}) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

  });

  test.afterEach(async ({page}) => {
     console.log('Done with tests');
     await page.close();

  });

});





