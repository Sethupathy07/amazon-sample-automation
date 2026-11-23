import {test,chromium} from '@playwright/test';

test( 'FileDownload', async({page})=>{

    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    const[todayDownload] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("//a[@type= 'button']").click()
    ])

    await todayDownload.saveAs('./Download/' + 
        
        await todayDownload.suggestedFilename());
})