import { test, expect } from '@playwright/test';

test('verify title', async ({ page }) => {
  await page.goto('https://www.letskodeit.com/practice');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice Page/);
});

test('verify taaluka title', async ({ page }) => {
  await page.goto('https://taaluka.netlify.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Taaluka — आपल्या तालुक्याचे आपले ॲप/);
});

test('verify taaluka title2', async ({ page }) => {
  await page.goto('https://taaluka.netlify.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Taaluka — आपल्या तालुक्याचे आपले ॲप/);
});

test('verify taaluka title3', async ({ page }) => {
  await page.goto('https://taaluka.netlify.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Taaluka — आपल्या तालुक्याचे आपले ॲप/);
});