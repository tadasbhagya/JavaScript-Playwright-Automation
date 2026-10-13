// import{test,expect} from '@playwright/test'
// import { HomePage } from '../pageObject/HomePage'
// import { RegistrationPage } from '../pageObject/RegistrationPage'

// test('tcregister', async({page})=>
// {
//     const homepage = new HomePage(page)

//     await homepage.goTo()
//     await homepage.clickRegisterlink()

//     const registerpage = new RegistrationPage(page)

//     await registerpage.Registeruser('john', 'saw', 'texas', 'canada',
//          'usa', '12345','8756443343','11111','js11','asdf')

//       await  registerpage.clickOnRegisterButton()

//         await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
//         await page.waitForTimeout(2000)

// })

import{test,expect} from '@playwright/test'
import { POManager } from '../pageObject/POManager'

test('tcregister', async({page})=>
{
    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()

    await homepage.goTo()
    await homepage.clickRegisterlink()

    const registerpage = pomanager.getregistrationpage()

    await registerpage.Registeruser('john', 'saw', 'texas', 'canada',
         'usa', '12345','8756443343','11111','js11','asdf')

      await  registerpage.clickOnRegisterButton()

        await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
        await page.waitForTimeout(2000)

})