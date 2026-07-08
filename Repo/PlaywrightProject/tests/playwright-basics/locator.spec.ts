import { test, expect } from '@playwright/test';


//id locator 
//id locator denote ny '#id' because it get by default css

// test('id locator', async ({ page }) => {
//   await page.goto('https://taaluka.com');

//   await page.waitForTimeout(3000); // waits 3 seconds
//   // Click the get started link.
//   await page.locator('#fname').fill("adarsh");

//   await page.waitForTimeout(3000);

 
// });

//class locator
//class denots by .classname

// test('class locator', async ({ page }) => {
//   await page.goto('https://www.qa-practice.com/elements/input/simple');

//   await page.locator('.textinput.textInput.form-control').fill('Adu');
// });


//css locator
//all css component can be locate by css locator
// CSS locator is a broader concept. It can use:
// ID
// Class
// Attribute
// Tag name
// Parent-child relationships


// test('css locator', async ({ page }) => {
//   await page.goto('https://taaluka.com');

//   await page.waitForTimeout(3000); // waits 3 seconds
//   // Click the get started link.
//   await page.locator('[name="mobile"]').fill('134567889023')
//     await page.waitForTimeout(3000);
// });


//get by text 
//locate by a text 
//this has a inbuilt function
//text should be unique to locate

test('text locator' ,async ({page}) => {

    await page.goto('https://taaluka.com');

    await page.getByText("Join Waitlist").click();
    await page.waitForTimeout(3000);

});