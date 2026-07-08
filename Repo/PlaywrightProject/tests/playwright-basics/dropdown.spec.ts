import { test,expect } from "@playwright/test";

test('selectDropdown' ,async ({page}) =>{

    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/')

    //await page.locator('//*[@id="post-2646"]/div[2]/div/div/div/p/select').selectOption({value : "IND"});

   // await page.locator('//*[@id="post-2646"]/div[2]/div/div/div/p/select').selectOption({label: "India"});

    await page.locator('//*[@id="post-2646"]/div[2]/div/div/div/p/select').selectOption({index: 8});

    await page.waitForTimeout(3000);
}
);