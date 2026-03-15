
import test, { expect } from "@playwright/test"
import { log } from "node:console"

test('handling textfields',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#name').fill('Sohan')

    await expect(page.locator('#name')).toHaveValue('Sohan')

    await page.getByPlaceholder('Enter EMail').fill('sohan34@gmail.com')

    await expect(page.getByPlaceholder('Enter EMail')).toHaveValue('sohan34@gmail.com')

    await page.locator('#phone').fill('7735738091')

    await expect(page.locator('#phone')).toHaveValue('7735738091')

    await page.waitForTimeout(2000)

    await page.getByLabel('Address:').fill('wilson garden')

    await expect(page.getByLabel('Address:'),{message:'not kmatching'}).toHaveValue('wilson garden')

    await page.getByRole('radio',{name:'Male',exact:true}).check()

    await expect(page.getByRole('radio',{name:'Male',exact:true})).toBeChecked()

    await page.waitForTimeout(2000)

    await page.getByRole('checkbox',{name:'friday'}).check()

    await expect(page.getByRole('checkbox',{name:'friday'})).toBeChecked()


    await page.locator('#country').selectOption({label:'Canada'})

    await page.waitForTimeout(2000)

    await expect(page.locator('#country').locator('option:checked')).toHaveText('Canada')

})

test('alerts and popups',async({browser})=>
{
    let context=await browser.newContext()

    let page=await browser.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.once('dialog',async(dialog)=>
    {
        await dialog.accept('Sohan')

         console.log(dialog.message())

    })

    await page.getByText('Prompt Alert').click()

    let text=await page.locator('//p[@id="demo"]').textContent()

    console.log(text);
    
    await page.waitForTimeout(2000)


})

test('Handing tabs ',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

    let newP=page.waitForEvent('popup')

    await page.getByRole('button',{name:'New Tab'}).click()

    let newPage=await newP

    await newPage.waitForLoadState('domcontentloaded')

    const title=await newPage.title()

    console.log("Title :"+title)

    await newPage.close()

    await page.waitForTimeout(2000)
})

test('mouse actions',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.getByText('Point Me').scrollIntoViewIfNeeded()

    await page.getByText('Point Me').hover()

    await page.waitForTimeout(2000)

    await page.getByText('Laptops').first().click()

    await page.getByRole('button',{name:'Copy Text'}).click({clickCount:2})

    //field2
    let value1=await page.locator('#field2').inputValue()

    let value2=await page.locator('#field2').inputValue()

    await expect(value2).toBe(value1)

    await page.waitForTimeout(2000)
    

})

test('drag and drop',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('div#draggable').dragTo(page.locator('div#droppable'))

    await page.waitForTimeout(2000)
})



test('handling sliders', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const slider = page.locator("//span[@style='left: 60%;']")

    await slider.scrollIntoViewIfNeeded()

    const box = await slider.boundingBox()

    console.log("Position:", box.x, box.y)

    await page.mouse.move(box.x + box.width/2, box.y + box.height/2)

    await page.mouse.down()

    await page.mouse.move(box.x + 200, box.y)

    await page.mouse.up()

    await page.waitForTimeout(3000)

})




