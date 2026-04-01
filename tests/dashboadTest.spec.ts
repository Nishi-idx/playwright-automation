import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { dashboardpage } from '../pages/dashboardpage';


const url = "https://rahulshettyacademy.com/client/#/auth/login"
const username = "nishi@yopmail.com"
const password = "Nishi@123"


test ("PLP add to cart", async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(username,password)
    await expect(loginPage.Homepage).toBeVisible()
    const dashboard = new dashboardpage(page);
    await dashboard.addproducttocart();
    await page.waitForTimeout(5000)
    await dashboard.viewPDPandaddtocart()

})