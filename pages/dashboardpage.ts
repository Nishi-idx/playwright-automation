import { Locator, Page } from "@playwright/test";

export class dashboardpage {
    page : Page
    addtocart : Locator
    view : Locator
    PDPtoCart : Locator
    products : Locator
    productname : Locator
    

    constructor(page : Page){
        this.page = page
        this.addtocart =  this.page.getByRole('button', { name: 'Add To Cart' }).first()
        this.view = this.page.getByRole('button',{name:' View'}).first()
        this.PDPtoCart = this.page.getByRole('button', {name: 'Add to Cart'})
        this.products = this.page.locator("div.card-body")//locator("b")
        this.productname = this.page.locator("div.rtl-text h2")

    }


    async addproducttocart(){
        await this.addtocart.click()
    }

    async viewPDPandaddtocart(){
        await this.view.click()
        await this.PDPtoCart.click()
    }

    async searchproduct(productname:string){
        await this.products.last().waitFor
        //count()- return the total number of matching element
        const productcount = await this.products.count()

        for (let i=0; i< productcount ; i++)
        {
            const producttext= await this.products.nth(i).locator("b").textContent()
            if (producttext === productname)
            {
                await this.products.nth(i).locator("button").last().click()
                break;
            }
        }


    }

}

