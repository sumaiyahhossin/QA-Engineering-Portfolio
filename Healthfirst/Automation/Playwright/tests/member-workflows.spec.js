const { test, expect } = require('@playwright/test');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const url = pathToFileURL(path.resolve(__dirname, '../demo/index.html')).href;

test.beforeEach(async ({ page }) => { await page.goto(url); });

test('eligibility lookup', async ({ page }) => {
  await page.getByLabel('Member ID').fill('MEM-1001');
  await page.getByRole('button', { name: 'Check eligibility' }).click();
  await expect(page.locator('#eligibility')).toHaveText('Eligible');
});

test('required input validation', async ({ page }) => {
  await page.getByRole('button', { name: 'Check eligibility' }).click();
  await expect(page.locator('#eligibility')).toHaveText('Member ID is required');
});

test('unknown member handling', async ({ page }) => {
  await page.getByLabel('Member ID').fill('MEM-9999');
  await page.getByRole('button', { name: 'Check eligibility' }).click();
  await expect(page.locator('#eligibility')).toHaveText('Member not found');
});

test('plan type filter', async ({ page }) => {
  await page.getByLabel('Plan type').selectOption('HMO');
  await expect(page.getByRole('button', { name: 'Select Sample HMO' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Select Sample PPO' })).toHaveCount(0);
});

test('plan selection', async ({ page }) => {
  await page.getByRole('button', { name: 'Select Sample PPO' }).click();
  await expect(page.locator('#selected')).toHaveText('Selected: Sample PPO');
});
