// PAGE - TEST- DATA

import { Locator, Page } from "@playwright/test";

export class LoginPage {
    //properties - locators 
    page : Page
    username : Locator
    password : Locator
    loginBtn : Locator
    Homepage : Locator
    errormessage : Locator

    constructor(page : Page){

        this.page = page
        this.username = this.page.locator("#userEmail")
        this.password = this.page.locator("#userPassword")
        this.loginBtn = this.page.locator("#login")
        this.Homepage = this.page.locator("[routerlink='/dashboard/']")
        this.errormessage = this.page.locator("#toast-container")

    }

    // methods '
    //loginIntoApplication
    //1. full the username
    //2. fill password
    //3. click on the login button
    async launchURL(url: string) {
       await this.page.goto(url)
    }
    
    async loginIntoApplication(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
    async invalidlogin(username:string, incorrectpwd:string){
        await this.username.fill(username)
        await this.password.fill(incorrectpwd)
        await this.loginBtn.click()
    }
//lauch the url
// LOGIN 
//invalid login
}