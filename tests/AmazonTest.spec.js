

import {expect, test} from "@playwright/test"

test("Product Details Validation ",async({page})=>
{
    await page.goto("https://www.amazon.in/")

    await page.getByRole('searchbox').fill("books")

    await page.keyboard.press('Enter')

    await page.waitForTimeout(2000)

    let [windowPage]=await Promise.all([page.waitForEvent('popup',{timeout:15000}),
    
    page.getByAltText("Ikigai: The Japanese secret ",{exact:false}).click()])

    /*const popupPromise = page.waitForEvent('popup');

     await page.getByAltText("Ikigai: The Japanese secret", { exact: false }).click();
    
     const windowPage = await popupPromise; */

    let page2= windowPage

    await page2.waitForLoadState();

    let title=await page2.title()

    console.log("Title Of PDP :"+title);
    
    expect(title," is not matching ").toContain('Ikigai: The Japanese Secret')

    console.log("Title is matched ");

    await page2.locator('input#add-to-cart-button').scrollIntoViewIfNeeded();

    await page2.locator('input#add-to-cart-button').click()
    
    await page2.waitForTimeout(2000)

    let text=await page2.locator("//h1[@class='a-size-medium-plus a-color-base sw-atc-text a-text-bold']").innerText()
    
    expect(text,` is not matching `).toContain('Added to cart')

    console.log('Text Value is Verified Successfully');
    
})


test("Product Details Validation2 ",async({page})=>
{
    await page.goto("https://www.amazon.in/")

    await page.getByRole('searchbox').fill("books")

    await page.keyboard.press('Enter')

    await page.waitForTimeout(2000)

    let [windowPage]=await Promise.all([page.waitForEvent('popup',{timeout:15000}),
    
    page.getByAltText("Ikigai: The Japanese secret ",{exact:false}).click()])

    /*const popupPromise = page.waitForEvent('popup');

     await page.getByAltText("Ikigai: The Japanese secret", { exact: false }).click();
    
     const windowPage = await popupPromise; */

    let page2= windowPage

    await page2.waitForLoadState();

    let title=await page2.title()

    console.log("Title Of PDP :"+title);
    
    expect(title," is not matching ").toContain('Ikigai: The Japanese Secret')

    console.log("Title is matched ");

    await page2.locator('input#add-to-cart-button').scrollIntoViewIfNeeded();

    await page2.locator('input#add-to-cart-button').click()
    
    await page2.waitForTimeout(2000)

    let text=await page2.locator("//h1[@class='a-size-medium-plus a-color-base sw-atc-text a-text-bold']").innerText()
    
    expect(text,` is not matching `).toContain('Added to cart')

    console.log('Text Value is Verified Successfully');
    
})


test("Product Details Validation3 ",async({page})=>
{
    await page.goto("https://www.amazon.in/")

    await page.getByRole('searchbox').fill("books")

    await page.keyboard.press('Enter')

    await page.waitForTimeout(2000)

    let [windowPage]=await Promise.all([page.waitForEvent('popup',{timeout:15000}),
    
    page.getByAltText("Ikigai: The Japanese secret ",{exact:false}).click()])

    /*const popupPromise = page.waitForEvent('popup');

     await page.getByAltText("Ikigai: The Japanese secret", { exact: false }).click();
    
     const windowPage = await popupPromise; */

    let page2= windowPage

    await page2.waitForLoadState();

    let title=await page2.title()

    console.log("Title Of PDP :"+title);
    
    expect(title," is not matching ").toContain('Ikigai: The Japanese Secret')

    console.log("Title is matched ");

    await page2.locator('input#add-to-cart-button').scrollIntoViewIfNeeded();

    await page2.locator('input#add-to-cart-button').click()
    
    await page2.waitForTimeout(2000)

    let text=await page2.locator("//h1[@class='a-size-medium-plus a-color-base sw-atc-text a-text-bold']").innerText()
    
    expect(text,` is not matching `).toContain('Added to cart')

    console.log('Text Value is Verified Successfully');
    
})