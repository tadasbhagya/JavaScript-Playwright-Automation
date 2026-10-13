export class RegistrationPage {
    constructor(page) {
        this.page = page
        this.Firstname = page.locator("//input[@id='customer.firstName']")
        this.Lastname = page.locator("//input[@id='customer.lastName']")
        this.Address = page.locator("//input[@id='customer.address.street']")
        this.City = page.locator("//input[@id='customer.address.city']")
        this.State = page.locator("//input[@id='customer.address.state']")
        this.Zipcode = page.locator("//input[@id='customer.address.zipCode']")
        this.Phone = page.locator("//input[@id='customer.phoneNumber']")
        this.Ssn = page.locator("//input[@id='customer.ssn']")
        this.Username = page.locator("//input[@id='customer.username']")
        this.Password = page.locator("//input[@id='customer.password']")
        this.Confirmpassword = page.locator("//input[@id='repeatedPassword']")
        this.Registerbutton = page.locator("//input[@value='Register']")
    }

    async Registeruser(fname, lname, address, city, state, zipCode, phone, ssn, username, password) {
        await this.Firstname.fill(fname)
        await this.Lastname.fill(lname)
        await this.Address.fill(address)
        await this.City.fill(city)
        await this.State.fill(state)
        await this.Zipcode.fill(zipCode)
        await this.Phone.fill(phone)
        await this.Ssn.fill(ssn)
        await this.Username.fill(username)
        await this.Password.fill(password)
        await this.Confirmpassword.fill(password)
    }

    async clickOnRegisterButton() {
        await this.Registerbutton.click()
    }

}