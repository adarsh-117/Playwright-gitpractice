import { test ,expect } from "@playwright/test";

//1
//get by role
//multiple role have we have 
//syntax : await page.getByRole('role', { name: 'Element Text' });


// test('byRole' ,async ({page}) =>{

//     await page.goto('https://www.saucedemo.com/')

//     await page.locator('#user-name').fill("standard_user");
//     await page.locator('#password').fill('secret_sauce');
//    await page.getByRole('button',{name:'Login'}).click();
//    await page.waitForTimeout(3000);
// }
// );

//2
//get by text
//comman use
// test('byText' ,async ({page}) =>{

//     await page.goto('https://www.saucedemo.com/')

//    await page.getByText('Login').click();
//    await page.waitForTimeout(3000);
// }
// );

//3
//getByPlaceholder() 
//page.getByPlaceholder('Username').fill('standard_user');

// test ('byPlaceholder' ,async({page})=>{

//     await page.goto('https://www.saucedemo.com/');
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     await page.getByText('Login').click();
//     await page.waitForTimeout(2000);

// });


//4
//getByLable()
//

// test ('byLable' ,async({page})=>{

//     await page.goto('https://www.letskodeit.com/practice');
//     //await page.locator('#autosuggest').click();
//     await page.getByLabel("BMW").check();
//     await page.waitForTimeout(2000);

// });

//5
//getByAltText() 
//if there is image and it has a alt text for image we can use it there
//e.g. there is logo image and need to locate logo image so in this case we can use the alt text added in html for logo

// test ('byAlttext' ,async({page})=>{

//     await page.goto('https://www.flaticon.com/free-icons/logo');
    
//     await page.getByAltText('Flaticon logo').first().click();

//     await page.waitForTimeout(2000);

// });

//6
//getByTitle()
//

test ('byBytitle' ,async({page})=>{

    await page.goto('https://www.w3schools.com');
    
    await page.getByTitle('Go to W3Schools HTML section').first().click();

    await page.waitForTimeout(2000);

});


