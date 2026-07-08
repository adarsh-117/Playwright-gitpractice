import {test, expect} from '@playwright/test';

test('taalukalogin', async ({page})=>
{
    await page.goto('https://preview--taalukabook.lovable.app/auth');
    //await page.waitForLoadState();
    await page.waitForTimeout(4000);


});