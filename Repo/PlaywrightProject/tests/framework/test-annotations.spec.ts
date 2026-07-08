import {test } from '@playwright/test';

//Annotations
//Annotations are special modifiers or markers attached to your tests.
//  They tell the Playwright test runner exactly how to handle test execution (like skipping, focusing, or expecting failures) 
// and add clean tracking information to your final test reports.


//1 test.skip()
//Skips the test completely. 
// Playwright will not execute the body of this test at all. 
// Use this when a test is irrelevant for a specific operating system, browser, or environment configuration.

test ('this is Normal ' , async ({ page }) => {
  await page.goto('https://taaluka.com');
});

test.skip('this test is broken lets skip it ', async ({ page }) => {
  await page.goto('https://taaluka.com');
});


//2 test.fixme()
//Similar to `skip`, 
// this instructs Playwright **not** to run the test. However,
//it explicitly signals that the test is currently broken, slow, or crashing and needs to be investigated and repaired.



test.fixme('this test need to be fix ', async ({ page }) => {
  await page.goto('https://taaluka.com');
});

//eg

// 1. Permanent / Unconditional skip
test.skip('this test is broken and won\'t run at all', async ({ page }) => {
  await page.goto('https://example.com');
});

// 2. Conditional skip (Only skips on Firefox)
test('skip feature on specific browser', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'This feature is not supported on Firefox yet');

  await page.goto('https://example.com/feature');
  // rest of your test...
});


//3. test.only()
//Focuses execution on a targeted tests. 
//can be used on multiple tests
// When one or more tests are marked with .only() it will run test markerd with only


// test.only('test only1', async ({ page }) => {
//   await page.goto('https://taaluka.com');
//   console.log('testonly');
  
// });


// test.only('test only2', async ({ page }) => {
//   await page.goto('https://taaluka.com');
//   console.log('testonly');
  
// });


//4. `test.fail()
//Marks a test as **expected to fail**. 
// Playwright will actually execute this test. 
// If it fails as expected, the test run passes. 
// If the test unexpectedly *succeeds*, Playwright will flag it as an error to alert you. 
// This is highly beneficial for documenting active, known bugs without failing your CI pipeline.

test.fail('test fail', async ({ page }) => {
  await page.goto('https://taaluka.com');
  console.log('test fail');
  
});


//5. test.slow()
//Declares that a test takes an unusually long time to complete. 
// Marking a test with .slow() automatically *triples** the default timeout limit 
//default timeout is 30 sec but appllying this it will set timwout and wait for 90 sec 
// for that specific test block, preventing false timeout failures.


test('test is slow', async ({ page }) => {
    test.slow 
    await page.goto('https://taaluka.com');
  console.log('test slow');
  
});
