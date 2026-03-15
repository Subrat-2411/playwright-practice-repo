

import {expect, test} from "@playwright/test"

test("hide and show button",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.waitForLoadState('load')

    await page.getByText("Web Table Fixed header").scrollIntoViewIfNeeded()

    let textfield=page.getByPlaceholder("Hide/Show Example")

    await textfield.waitFor({state:'visible'})

    await page.waitForTimeout(2000)

    await expect(textfield," is not displayed").toBeVisible()

    await page.locator("#hide-textbox").click()

    await expect(textfield," is not hidden").toBeHidden()

    await page.waitForTimeout(2000)

    await page.locator('#show-textbox').click()

    await expect(textfield," is not displayed").toBeVisible()

    await page.waitForTimeout(2000)

    console.log("Verified Successfully");
    
})

test("Handling radio Buttons",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.waitForLoadState('load')

    let radioButton1=page.locator('[value="radio1"]')

    await radioButton1.check()

    await expect(radioButton1).toBeChecked()

    let radioButton2=page.locator('[value="radio2"]')

    await radioButton2.check()

    await expect(radioButton2).toBeChecked()

    let radioButton3=page.locator('[value="radio3"]')

    await radioButton3.check()

    await expect(radioButton3).toBeChecked()


})

test("Handling Suggestion Class Example",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.waitForLoadState('domcontentloaded')

    await page.getByPlaceholder('Type to Select Countries',{exact:true}).fill('India')

    await page.waitForLoadState('domcontentloaded')

    await page.waitForSelector("(//ul[@id='ui-id-1']/li)[1]")

    let alloc = await page.locator("//ul[@id='ui-id-1']/li").all()

    for( let loc of alloc)
    {
        let alltext = await loc.textContent()

        console.log(alltext);

        if(alltext.includes('India')){

            await loc.click()

            break;

        }

    }
})
test("Handling Dropdowns",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.waitForLoadState('load')

    await page.locator("#dropdown-class-example").selectOption({value:'option3'})

    await page.waitForTimeout(2000)

    await expect(page.locator("#dropdown-class-example")).toHaveValue('option3')
})

test("Handling Checkboxes",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.locator("#checkBoxOption3").check({force:true})

    await expect(page.locator("#checkBoxOption3")).toBeChecked()
})

test("Handling Switching Window",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    let newPage=page.waitForEvent('popup')

    await page.getByRole('button',{name:'Open Window'}).click()

    
    let page2=await newPage

    await page.close()

    await page2.waitForTimeout(2000)

    let title=await page2.title()

    console.log(title);
    
})

test("Switching Tabs ",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.waitForLoadState('load')

    let newTabs=page.waitForEvent('popup')

    await page.getByRole('link',{name:'Open Tab'}).click()

    let newPage=await newTabs

    let title=await newPage.title()

    console.log(title);

    await newPage.waitForTimeout(12000)
    
})

test("Handling Alerts ",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.getByPlaceholder('Enter Your Name').fill('Sohan')

    
    await page.waitForTimeout(2000)

    page.once('dialog',async(dialog)=>
    {
        console.log(dialog.message());
        
        dialog.accept()
    })
    
    await page.waitForTimeout(5000)

    await page.locator('[id="alertbtn"]').click()
    
    await page.waitForTimeout(2000)
    
})

test.only("Web Table",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.getByText('Write effective QA Resume that will turn to interview call').scrollIntoViewIfNeeded()

    await page.waitForTimeout(2000)

    const rows = page.locator("//table[@name='courses']//tr");
    const rowCount = await rows.count();

    for (let i = 1; i < rowCount; i++) {
        const cells = await rows.nth(i).locator("td").allTextContents();
        console.log(cells.join("\t"));
    }
    
})