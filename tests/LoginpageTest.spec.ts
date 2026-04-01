// framework - it is a design principle, set of guidelines 
/*
    POM - page object model
    its a design pattern used in s/w testing to represent a web page as an object. 
    it is a way to organise and manage the interaction with a web pageby creating 
    the properties(variables) and method(action) of that particular page.




*/
import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/Loginpage'

const url = "https://rahulshettyacademy.com/client/#/auth/login"
//const url = 'https://rahulshettyacademy.com/client/#/dashboard/dash'
const username = "nishi@yopmail.com"
const password = "Nishi@123"
const incorrectpwd ="test"

let loginPage : LoginPage

test.beforeEach(async({page}) => {
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
})

test ("valid login", async({page}) => {
    
    await loginPage.loginIntoApplication(username,password)
    await expect(loginPage.Homepage).toBeVisible()
})

test("invalid login", async ({page}) => {
    //const loginPage = new LoginPage(page)
    //await loginPage.launchURL(url)
    await loginPage.invalidlogin(username,incorrectpwd)
    await expect(loginPage.errormessage).toHaveText("Incorrect email or password.")
})