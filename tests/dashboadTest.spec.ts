import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { dashboardpage } from '../pages/dashboardpage';


const url = "https://rahulshettyacademy.com/client/#/auth/login"
const username = "nishi@yopmail.com"
const password = "Nishi@123"
const productname = "iphone 13 pro"


let loginPage : LoginPage
let dashboard : dashboardpage

test.beforeEach(async({page}) => {
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(username,password)
    await expect(loginPage.Homepage).toBeVisible()
    dashboard = new dashboardpage(page)
})

test ("PLP add to cart", async ({ page }) => {
    
    await dashboard.addproducttocart();
    await page.waitForTimeout(5000)

})

test ("PDP add to cart ", async({page}) => {
    await dashboard.viewPDPandaddtocart()
    await page.waitForTimeout(3000)
})

test ("search product", async({page}) => {
    await dashboard.searchproduct(productname)
    await page.waitForTimeout(5000)
})