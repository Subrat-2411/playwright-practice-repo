
import {test} from "@playwright/test"

test("handling mouse actions",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    // await page.pause()

    await page.waitForLoadState('domcontentloaded')
    // await page.waitForURL('https://demoapps.qspiders.com/ui/scroll/newTabHorizontal',{waitUntil:'load'})

    // await page.waitForTimeout(1000)

    /*+2000 means go downward */
    // await page.mouse.wheel(0,2000)

    // await page.waitForTimeout(1000)

    // /*+2000 means go upward */
    // await page.mouse.wheel(0,-2000)

    // await page.waitForTimeout(1000)

    // await page.mouse.wheel(0,-2000)

    // await page.waitForTimeout(1000)

    await page.mouse.wheel(1000,0)

    await page.waitForTimeout(4000)

    await page.mouse.wheel(-1000,0)

    await page.waitForTimeout(3000)

    
    

})