//two levels of control
//Locator-based actions (high-level, targeting a specific element) 
// Page-based actions (low-level, targeting whatever is currently focused on the screen).

//1. Locator-based Keyboard Actions
//copy paste

//keyboard actions use combination of these  actions:
//1. keyboard.down('keyname') - Press and Hold   -ctrl,shift
//2. keyboard.up('keyname') - release hold key   -relase
//3.keyboard.type("text here") - to type text by keyboard method  -type full text
//4.keyboard.press('Keyname') - to press or strok key             -enter,dekete,type single key

import  {test,expect } from '@playwright/test';




test('keyboard action',async ({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').focus();
    await page.keyboard.type("AdarshU");
        await page.waitForTimeout(2000);

        await page.keyboard.press('Backspace');

    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
})


//delete all by ctr+a+bacspace
test('keyboard delete action',async ({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').focus();
    await page.keyboard.type("AdarshU");
        await page.waitForTimeout(2000);
        await page.keyboard.press('Control+A')
        await page.keyboard.press('Backspace');
    await page.waitForTimeout(2000);
})


//copy paste
test('keyboard copy paste',async ({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').focus();
    await page.keyboard.type("AdarshU");
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.locator('#userEmail').focus();
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+V')
    
    await page.waitForTimeout(2000);
})


//Cpas text by shift
// keyboard.down('keyname')
//keyboard'.up('keyname')

test('Cap text by shift',async ({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').focus();
   await page.keyboard.down('Shift')
    await page.keyboard.press('A')
    await page.waitForTimeout(1000);
    await page.keyboard.up('Shift')
    await page.keyboard.type('darsh')
    await page.waitForTimeout(2000);
})


//cut paste
test('keyboard cut paste',async ({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').focus();
    await page.keyboard.type("AdarshU");
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+X')
    await page.locator('#userEmail').focus();
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+V')
    
    await page.waitForTimeout(2000);
})



