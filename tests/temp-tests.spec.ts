import {test, expect} from '@playwright/test';

test('website loaded', async ({page}) =>{
    await page.goto('/');
    await expect(page.locator('a')).toContainText('Lean React')
})