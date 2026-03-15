
import {expect, test} from "@playwright/test"

test("Validating Cart Price",async({page})=>
{
    let n=5

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")

    let productName='Cauliflower - 1 Kg'

    let oPrice=await page.locator( `//h4[text()='${productName}']/ancestor::div[@class="product"]/descendant::p`).textContent()

    let iprice = Number(oPrice)   // convert to number
    let totalPrice = iprice


    for(let i=0;i<n;i++)
    {
        await page.locator(`//h4[text()='${productName}']/ancestor::div[@class='product']/descendant::a[@class='increment']`).click()

        totalPrice+=iprice
    }

    await page.waitForTimeout(1000)

    await page.locator(`//h4[text()='${productName}']/ancestor::div[@class='product']/descendant::button`).click()

    await page.waitForTimeout(1000)

    let cartPrice=await page.locator("//td[text()='Price']/ancestor::tr/descendant::strong").textContent()

    expect(Number(cartPrice),"Cart Price is Validated Properly").toBe(totalPrice)

    console.log("Validation Successful");
    


})