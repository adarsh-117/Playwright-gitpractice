
import { test, expect } from '@playwright/test';

// test('Title page', async ({ page }) => {
//   await page.goto('https://www.letskodeit.com/practice');

//   await expect(page).toHaveTitle(/Practice Page/);
// });


test('Verify BMW radio button', async ({ page }) => {
  await page.goto('https://www.letskodeit.com/practice');

  await page.locator('#bmwradio').check();

  await expect(page.locator('#bmwradio')).toBeChecked();
});