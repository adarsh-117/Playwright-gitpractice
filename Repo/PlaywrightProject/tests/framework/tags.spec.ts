//Tags
//Tags are meta-labels attached to your tests
//It is always starting with an @ symbol
// It is used to group, categorize, and conditionally run subsets of your test suite via the command line interface

//Commands to run 
//npx playwright test --grep @smoke
//npx playwright test --grep "@smoke|@sanity"
//npx playwright test --grep-invert @slow


import {test} from '@playwright/test';



//type one syntax
test('tags test @smoke' , async ({page})=>{
  
    console.log("smoke tag");
});

test('tags test1 @sanity' , async ({page})=>{
  
    console.log("sanity tag");
});

test('tags test2 @xyz' , async ({page})=>{
  
    console.log("xyz tag");
});


//type two syntax
test('tags test modern' , {tag : '@smoke'} , async ({page} , )=>{
  
    console.log("smoke tag");
});

// Multiple tags
//can use multiple tag in array format as syntax - { tag: ['@regression', '@smoke'] },


test('multiple tag use', { tag: ['@regression', '@smoke'] }, async ({ page }) => {
  console.log('multiple tag assign');
});