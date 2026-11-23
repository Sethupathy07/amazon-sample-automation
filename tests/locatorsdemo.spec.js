import {test,chromium} from '@playwright/test';

test('locatorsdemo', async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').fill('sethupathy');
    await page.locator('#userEmail').fill('sethuhub07@gmail.com');
    await page.locator('#currentAddress').fill('chennai');
    await page.locator('#permanentAddress').fill('chennai');
    await page.locator('#submit').click();

})