import {test} from '@playwright/test';

test('this is a first tes ' , async ({page})=>{
  
    await page.goto('https://www.edso.in/');
});

test('normal script' , async ({page})=>{
  
    console.log("Normal script");
    
});

test('advance script' , async ({page})=>{
  
    console.log("Advance script");
    ;
});