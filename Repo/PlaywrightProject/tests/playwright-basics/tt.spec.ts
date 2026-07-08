import {test , expect } from "@playwright/test";

//Mouase based actions 


//1.Left click or click
//   .click()

test ('mouse click' , async ({page}) =>{

    await page.goto('https://qa-practice.netlify.app/products_list');
    await page.getByText('Btn actions').click()
    await page.locator('#double-click').click()


});


//2
// //dobule click 
//  .dbclick()

test ('double click' , async ({page}) =>{

    await page.goto('https://qa-practice.netlify.app/products_list');
    await page.getByText('Btn actions').click()
    await page.locator('#double-click').click()
    await page.locator('#double-click-btn').dblclick()


});


//3
// //right click
//locator.click({ button: 'right' })

test ('right click' , async ({page}) =>{

    await page.goto('https://qa-practice.netlify.app/products_list');
    await page.getByText('Btn actions').click({button : "right"})
    //await page.locator('#double-click').click()


});


//4
//mouse hover 
// .hover()

test ('mouse hover' , async ({page}) =>{

    await page.goto('https://qa-practice.netlify.app/products_list');
    await page.getByText('Btn actions').click()
    await page.locator('#mouse-hover').click()
    await page.locator('#demo').hover()
    await page.locator('#button-hover-over').hover()


});

test ('mouse hover2' , async ({page}) =>{

    await page.goto('https://qa-practice.netlify.app/products_list');
    await page.getByText('Btn actions').click()
    await page.locator('#mouse-hover').click()
    //await page.locator('#demo').hover()
    await page.locator('#button-hover-over').hover()
    

});


//Drag and Drop
//page.dragAndDrop('sourceSelector', 'targetSelector')


//method 1
test.only('drag n drop' , async ({page}) =>{

    await page.goto('https://demoqa.com/droppable');
    await page.getByText('Simple').click()

    await page.dragAndDrop('#draggable','#droppable')
    

});


//method 2

test.only('drag n drop2' , async ({page}) =>{

    await page.goto('https://demoqa.com/droppable');
    await page.getByText('Simple').click()

    await page.locator('#draggable').dragTo (page.locator('.drop-box.ui-droppable').nth(0));
    

});



// mouse up nad mouse down
// mouse.down() and mouse.up() allow you to split a click into two separate actions.
//  This is essential for complex interactions like 
// drawing on a canvas, 
// resizing a window, 
// custom drag-and-drop mechanics, or
//  selecting a custom block of text.
//syntax
//await page.mouse.down({ button: 'left' | 'right' | 'middle', clickCount: number });
//await page.mouse.up({ button: 'left' | 'right' | 'middle', clickCount: number });


test('Draw a simple horizontal line', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/api/class-mouse');

  // 1. Move the cursor to an initial pixel coordinate (X=100, Y=100)
  await page.mouse.move(100, 100);

  await page.waitForTimeout(2000);

  // 2. Click and HOLD down the left mouse button
  await page.mouse.down();

    await page.waitForTimeout(2000);

  // 3. Move the mouse to a new position (X=400, Y=100) while holding
  await page.mouse.move(400, 100);

    await page.waitForTimeout(2000);


  // 4. Release the mouse button
  await page.mouse.up();

    await page.waitForTimeout(2000);

});

//What this does:
// move(100, 100) puts your pencil on the paper.
// down() presses the pencil onto the paper.
// move(400, 100) draws a straight horizontal line across the paper.
// up() lifts the pencil off the paper 




test('Scroll down the page', async ({ page }) => {
  await page.goto('https://playwright.dev');

  // Wait until the page is fully loaded
  await page.waitForLoadState('networkidle');

  // Scroll down
  await page.mouse.wheel(0, 600);

  // Pause to see the scroll (optional)
  await page.waitForTimeout(2000);

  // Scroll up
  await page.mouse.wheel(0, -200);

  await page.waitForTimeout(2000);
});