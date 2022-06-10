import {test, expect} from '@playwright/test';

test('website loaded', async ({page}) =>{
    await page.goto('/');
    await expect(page.locator('a')).toContainText('Learn React')
})

test('links to react home page', async ({page}) =>{
    await page.goto('/');
    
    const [popup] = await Promise.all([
        // It is important to call waitForEvent before click to set up waiting.
        page.waitForEvent('popup'),
        // Opens popup.
        page.click('text=Learn React')
      ]);
    await popup.waitForLoadState();
    await expect (popup).toHaveURL('https://reactjs.org/')
})