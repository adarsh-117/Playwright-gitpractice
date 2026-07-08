

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/dropdowns');
  await page.locator('#dropdown-menu').selectOption('India');
  await page.getByRole('button', { name: 'Dropdown' }).click();
  await page.getByRole('link', { name: 'Some action' }).click();
  await page.getByRole('button', { name: 'Dropdown' }).click();
  await page.getByRole('link', { name: 'Second level - 1' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Second level -' }).nth(1).click();
});