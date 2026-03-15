import test from "@playwright/test"

test('find highest point secured team', async ({page}) =>
{
    await page.goto("https://www.iplt20.com/")

    await page.locator("//nav[@class='site-navigation text-center']//a[text()='POINTS TABLE']").click()

    await page.getByText('Accept cookies').click()

    await page.locator("//table[@class='ih-td-tab']").waitFor({state:'attached'})

    const table = await page.locator("//table[@class='ih-td-tab']")
    const tableBody = table.locator('#pointsdata')
    const tableRows = tableBody.locator('tr')

    const rowCount = await tableRows.count()

    let mTeam = ""
    let mpoints = 0
    let mnrr = -999

    for(let i = 0; i < rowCount; i++)
    {
        const tableColumns = tableRows.nth(i).locator('td')

        const team = await tableColumns.nth(2).innerText()
        const points = parseInt(await tableColumns.nth(10).innerText())
        const nrr = parseFloat(await tableColumns.nth(7).innerText())

        if(points > mpoints || (points === mpoints && nrr > mnrr))
        {
            mTeam = team
            mpoints = points
            mnrr = nrr
        }
    }

    console.log(`Maximum Points Team: ${mTeam} | Points: ${mpoints} | NRR: ${mnrr}`)
})