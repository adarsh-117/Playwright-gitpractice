import {test, expect} from '@playwright/test';

//nth() Locator
//Used when multiple elements match the same locator and you want a specific index element.
//page.locator("button").nth(2).click();

// test('nthlocator' ,async ({page}) =>{

//     await page.goto('https://www.letskodeit.com/practice');

//     await page.locator('.inputs').nth(2).fill('Helo');

//     await page.waitForTimeout(2000);

// });

//first() Locator
//Selects the first matching element.
//page.locator("button").first().click();


// test('firstlocator' ,async ({page}) =>{

//     await page.goto('https://www.letskodeit.com/practice');

//     await page.locator('.inputs').first().fill('Helo');

//     await page.waitForTimeout(2000);

// });


//last() Locator 
//  Selects the last matching element.
//page.locator("button").last().click();


// test('lastlocator' ,async ({page}) =>{

//     await page.goto('https://www.letskodeit.com/practice');

//     await page.locator('.inputs').last().fill('Helo');

//     await page.waitForTimeout(2000);

// });


//hasText() Locator : 
// Find elements that contain specific text inside them.
//page.locator("div:has-text('Login')").click();

// test('hastextlocator', async ({ page }) => {

//     await page.goto('https://taaluka.com/');

//     await page.locator('button:has-text("First")').click();

//     await page.waitForTimeout(5000);
// });


//and() Locator : 
// Combine multiple locators together.
//page.getByRole(AriaRole.BUTTON).and(page.getByTitle("Submit")).click();


test('wlocator', async ({ page }) => {

    await page.goto('https://taaluka.com/');

     await page.locator('button:has-text("First")').and (page.locator('.submit-btn'));

    await page.waitForTimeout(5000);
});