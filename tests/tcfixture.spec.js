
import { POManager } from '../pageObject/POManager'
import { customtest as test,expect } from '../fixture/testfixture'

test('tcregister', async({page, testdataForregistration})=>
{
    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()

    await homepage.goTo()
    await homepage.clickRegisterlink()

    const registerpage = pomanager.getregistrationpage()

    await registerpage.Registeruser(
        testdataForregistration.firstname, 
        testdataForregistration.lastname, 
        testdataForregistration.address, 
        testdataForregistration.city, 
        testdataForregistration.state, 
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber, 
        testdataForregistration.ssn, 
        testdataForregistration.username, 
        testdataForregistration.password, 
        testdataForregistration.confirmpassword
    )

      await  registerpage.clickOnRegisterButton()

        await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
        await page.waitForTimeout(2000)

})