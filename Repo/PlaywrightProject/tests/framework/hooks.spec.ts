import {test} from '@playwright/test';


//Hooks are special lifecycle methods that allow you to set up code to run before or after your tests.
//It is used to manage repetitive tasks like 
// logging in,
// clearing a database, 
// opening a page, or cleaning up cookies. etc.


//1. test.beforeAll()

//Note: Standard browser fixtures like page and browser are not available inside beforeAll
//  because it runs before individual worker contexts are created.


test.beforeAll('before all test', async () => {
    console.log('login');
    
});

test.beforeEach('before each test', async ({ page }) => {
  console.log('enter data');

});


test('normal test case1', async ({ page }) => {
    console.log('Normal test case 1');
    
  
});

test('normal test case2', async ({ page }) => {
    console.log('Normal test case 2');
    
  
});

test.afterEach('after each test', async ({ page }) => {
  console.log('Clear data');

});


test.afterAll('after all test', async () => {
  console.log('logout');

});



//testInfo();
// TestInfo is a built-in object that 
// it contains comprehensive metadata and information about the currently running test.  


test('Ultimate TestInfo Demo', async ({ page }, testInfo) => {
  
  // 1. Change the timeout limit dynamically for this specific test
  testInfo.setTimeout(45000); // Sets timeout to 45 seconds

  // 2. Read basic metadata properties
  console.log(testInfo.status);
  console.log(testInfo.title);
  console.log(testInfo.titlePath);
  console.log(testInfo.duration);
  console.log(testInfo.config);
  ;
  
  
  

});
