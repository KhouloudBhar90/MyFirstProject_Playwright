
// @ts-check
const { test, expect } = require('@playwright/test');


test('Login demo test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');
    await page.pause();
    await page.locator('[placeholder="Enter your username"]').fill('Khouloud');
    await page.locator('[placeholder="Enter your password"]').fill('1234');
    await page.locator('text=Sign in').click();
    await page.locator('text=ACME').isVisible();
})

//  await page.waitForSelector('text=Sign in', { timeout: 4000 });
//  await expect(page.locator('text=Sign in')).toHaveCount(1);

test('Login demo test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();
    await page.locator('[placeholder="Username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('button:has-text("Login")').click();
    await page.locator('p:has-text("Monali phase")').click();
    await page.locator('text=Logout').click();
    await page.close();
})

test.only('Login demo test 3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.pause();
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('Control+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('Control+a');
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    await page.close();
})