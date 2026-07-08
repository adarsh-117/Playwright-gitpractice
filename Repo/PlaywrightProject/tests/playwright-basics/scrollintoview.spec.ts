import {test, expect } from '@playwright/test';

//scrollIntoViewIfNeeded()
//It is used to scroll tll targeted element is visible.
// scrollIntoViewIfNeeded();

test ('test scrollIntoView' , async ({page})=>{

    await page.goto("https://playwright.dev/docs/intro");

    const footer= page.locator('#running-the-example-test-in-ui-mode');

    await footer.scrollIntoViewIfNeeded();

    await page.waitForTimeout(2000)

})


test('test scroll to',async ({page})=>{

    await page.goto("https://playwright.dev/docs/test-agents");

    const planner= page.locator('#-planner');

    await planner.scrollIntoViewIfNeeded();
        await page.waitForTimeout(2000)


})


//

test('test scroll wait',async ({page})=>{

    await page.goto("https://playwright.dev/docs/test-agents");

    const planner= page.locator('#-planner');

    await planner.scrollIntoViewIfNeeded({timeout:2000});
        await page.waitForTimeout(2000)


})
