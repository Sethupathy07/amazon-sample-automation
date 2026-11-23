import{test} from '@playwright/test'

test('launch flipkart', async({page})=>{

   await page.goto("https://www.flipkart.com/");
   const flip_url = await page.url();
   console.log(flip_url)
   const flipkart_title = await page.title();
   console.log(flipkart_title);
   await page.goto("https://www.instagram.com/");
   const insta_title = await page.title();
   console.log(insta_title);
    //await page.screenshot({path:"C:\\Users\\Nishanth PC\\playwright\\Playwright_Screenshot\\insta.jpg"});
   //await page.screenshot({path:"./screenshot1/insta.png"})
   const insta_url = await page.url();
   console.log(insta_url);
   await page.goBack();
   console.log(await page.url());
   console.log(sethu);
   
  // await page.screenshot({path:"C:\\Users\\Nishanth PC\\playwright\\Playwright_Screenshot\\screenshot1.jpg"});
   

})


test('launch amazon', async({page})=>{

   await page.goto("https://www.amazon.com/");
   const amaz_url = await page.url();
   console.log(amaz_url);
   await page.goto("https://www.makemytrip.com/flights/?cmp=SEM|M|DF|B|Brand|B_M_Makemytrip_Search_Exact|Brand_Top_5_Exact|Expanded|&ef_id=:G:s&msclkid=d8554346a95b194243e629bd5ebb9d61")
   const mmy_title = await page.title();
   console.log(mmy_title)
   await page.goto("https://www.facebook.com/")
   await page.goBack();
   await page.goBack();


})