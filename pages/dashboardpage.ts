import { Locator, Page } from "@playwright/test";

export class dashboardpage {
    page : Page
    addtocart : Locator
    view : Locator
    PDPtoCart : Locator

    constructor(page : Page){
        this.page = page
        this.addtocart =  this.page.getByRole('button', { name: 'Add To Cart' }).first()
        this.view = this.page.getByRole('button',{name:' View'}).first()
        this.PDPtoCart = this.page.getByRole('button', {name: 'Add to Cart'})
    }


    async addproducttocart(){
        await this.addtocart.click()
    }

    async viewPDPandaddtocart (){
        await this.view.click()
        await this.PDPtoCart.click()
    }
}

