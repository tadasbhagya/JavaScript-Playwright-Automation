import { POManager } from '../pageObject/POManager'
import { customtest as test,expect } from '../fixture/testfixture'

test('login', async({page, testdataForregistration})=>
{
    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()
    const loginpage =pomanager.getLoginPage()
    await homepage.goTo()

    await loginpage.clickToApplication(
        testdataForregistration.username,
        testdataForregistration.password
    )

    await loginpage.clickOnLoginButton()
})