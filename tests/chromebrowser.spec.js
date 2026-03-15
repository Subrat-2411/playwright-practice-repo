
import test, { chromium, firefox, webkit } from "@playwright/test"

test('Running Chrome Browser',async()=>
{
    let browser=await chromium.launch()

    let context=await browser.newContext()

    let page=await context.newPage()

    await page.waitForTimeout(2000)

    await page.goto("https://www.flipkart.com/")

    await page.waitForTimeout(2000)

    await page.pause()
})