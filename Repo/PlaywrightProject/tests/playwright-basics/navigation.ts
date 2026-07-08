import { chromium } from '@playwright/test';

async function navigationMethod() {
    const browser = await chromium.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

    await page.getByText('Money').click();

    
    await page.waitForTimeout(2000);

    await page.goBack();

    await page.waitForTimeout(2000);

    await page.goForward();

    await page.waitForTimeout(2000);

    await page.reload();

    await page.waitForTimeout(2000);

    await browser.close();
}

navigationMethod();