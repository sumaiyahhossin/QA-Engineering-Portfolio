const { test, expect } = require('@playwright/test');

test.describe('Public demo login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('shows the login form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
    await expect(page.getByLabel('Username')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
  });

  test('allows the demo user to log in and log out', async ({ page }) => {
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();

    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
  });

  test('shows an error for an invalid password', async ({ page }) => {
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('WrongPassword123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#flash')).toContainText('Your password is invalid!');
  });
});